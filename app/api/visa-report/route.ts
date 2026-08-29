import { NextRequest, NextResponse } from "next/server";

import { GoogleGenAI } from "@google/genai";

import visaBase from "@/app/data/visa-base.json";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

const MAX_CHARS = 12000;

type Country = {
  country: string;
  region: string;
  route: string;
  offer_needed: string;
  salary_2026: string;
  processing: string;
  demand: string;
  quals: string;
  language: string;
  pr: string;
  link: string;
  no_offer_route?: boolean;
  tech_demand?: string;
  language_boost?: string;
};

const COUNTRIES = (visaBase as { countries: Country[] }).countries;

const FIT_ORDER: Record<string, number> = { High: 0, Medium: 1, Hard: 2 };

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const resume = String(body.resume ?? "").slice(0, MAX_CHARS).trim();
    const currentCountry = String(body.currentCountry ?? "").slice(0, 100).trim();

    if (resume.length < 40) {
      return NextResponse.json(
        {
          error:
            "Please paste your resume (at least a few lines) so we can tailor the visa fit.",
        },
        { status: 400 }
      );
    }

    // Candidate-independent facts sent to the model (kept compact).
    const catalog = COUNTRIES.map((c) => ({
      country: c.country,
      route: c.route,
      salary: c.salary_2026,
      offer_needed: c.offer_needed,
      demand: c.demand,
      language: c.language,
      pr: c.pr,
    }));

    const systemInstruction = `You are an immigration-fit advisor for non-EU applicants seeking work visas.
For EACH country provided, rate how good a work-visa target it is FOR THIS SPECIFIC CANDIDATE
and write ONE concrete sentence of advice referencing their profession, experience, salary
feasibility, or language.

Rules:
- "fit" must be EXACTLY one of: "High", "Medium", "Hard".
- The note must be specific to the candidate — never generic boilerplate.
- Do not invent facts about the country beyond what is given.
- Return ONLY valid JSON. No markdown, no commentary.`;

    const prompt = `CANDIDATE RESUME:
${resume}

CURRENT COUNTRY / CITIZENSHIP: ${currentCountry || "(infer from the resume if possible)"}

COUNTRIES (JSON):
${JSON.stringify(catalog)}

Return a JSON object mapping each country name to its rating, exactly:
{ "Germany": { "fit": "High|Medium|Hard", "note": "one tailored sentence" }, ... }
Include every country from the list.`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        systemInstruction,
        responseMimeType: "application/json",
        temperature: 0.5,
      },
    });

    const raw = response.text ?? "";

    let fitMap: Record<string, { fit?: string; note?: string }> = {};
    try {
      fitMap = JSON.parse(raw);
    } catch {
      const match = raw.match(/\{[\s\S]*\}/);
      if (match) {
        try {
          fitMap = JSON.parse(match[0]);
        } catch {
          fitMap = {};
        }
      }
    }

    // Merge model ratings with the country facts; fall back gracefully.
    const rows = COUNTRIES.map((c) => {
      const entry = fitMap[c.country] || {};
      const fit =
        entry.fit === "High" || entry.fit === "Medium" || entry.fit === "Hard"
          ? entry.fit
          : "Medium";
      const note =
        typeof entry.note === "string" && entry.note.trim()
          ? entry.note.trim()
          : `${c.demand}. ${c.route}.`;
      return {
        country: c.country,
        region: c.region,
        route: c.route,
        offerNeeded: c.offer_needed,
        salary: c.salary_2026,
        processing: c.processing,
        demand: c.demand,
        quals: c.quals,
        language: c.language,
        pr: c.pr,
        link: c.link,
        noOfferRoute: !!c.no_offer_route,
        fit,
        note,
      };
    });

    rows.sort(
      (a, b) =>
        (FIT_ORDER[a.fit] ?? 3) - (FIT_ORDER[b.fit] ?? 3) ||
        a.country.localeCompare(b.country)
    );

    return NextResponse.json({
      countryCount: rows.length,
      compiled: (visaBase as { meta?: { compiled?: string } }).meta?.compiled,
      rows,
    });
  } catch (error) {
    console.error("visa-report error:", error);
    return NextResponse.json(
      {
        error:
          "Something went wrong while building your visa report. Please try again in a moment.",
      },
      { status: 500 }
    );
  }
}
