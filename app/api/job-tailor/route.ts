import { NextRequest, NextResponse } from "next/server";

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

// Keep the public tool cheap + fast and avoid abuse from giant pastes.
const MAX_CHARS = 12000;

function clip(value: unknown): string {
  return String(value ?? "").slice(0, MAX_CHARS);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const resume = clip(body.resume).trim();
    const jobDescription = clip(body.jobDescription).trim();
    const jobTitle = clip(body.jobTitle).trim().slice(0, 200);
    const company = clip(body.company).trim().slice(0, 200);

    if (resume.length < 40 || jobDescription.length < 40) {
      return NextResponse.json(
        {
          error:
            "Please paste both your resume and the job description (at least a few lines each).",
        },
        { status: 400 }
      );
    }

    const systemInstruction = `You are an expert technical recruiter and resume writer.
You tailor a candidate's existing resume to a specific job description, honestly and
without inventing experience the candidate does not have.

Rules:
- NEVER fabricate employers, dates, degrees, or skills the candidate has not listed.
- Rephrase and prioritise the candidate's REAL experience toward the target role.
- Be specific, results-oriented, and ATS-friendly (mirror the JD's real keywords
  only where the candidate genuinely has that experience).
- The cover letter must sound like a competent human wrote it: concrete and warm.
  It is FORBIDDEN to open with any of: "I am writing to", "I am excited to",
  "I am thrilled", "I am reaching out", "I would like to express", "I am eager".
  Instead open with a specific hook — a relevant achievement, a genuine point of
  connection to the company's work, or the concrete value the candidate brings.
  No em-dash filler, no generic praise, no buzzword stuffing.
- Return ONLY valid JSON matching the requested schema. No markdown, no commentary.`;

    const prompt = `TARGET ROLE: ${jobTitle || "(infer from the job description)"}
COMPANY: ${company || "(unspecified)"}

=== CANDIDATE RESUME ===
${resume}

=== JOB DESCRIPTION ===
${jobDescription}

Return a JSON object with EXACTLY these fields:
{
  "atsScore": <integer 0-100, how well the current resume matches this JD>,
  "verdict": "<one short sentence summarising the fit>",
  "matchedKeywords": [<up to 12 skills/keywords from the JD the candidate already has>],
  "missingKeywords": [<up to 10 important JD keywords the resume is missing or weak on>],
  "tailoredSummary": "<a 2-3 sentence professional summary rewritten for THIS role, using only real experience>",
  "tailoredBullets": [<4-6 resume bullet points rewritten/prioritised for this role, each starting with a strong verb>],
  "coverLetter": "<a concise 180-250 word cover letter tailored to this role and company, first person, ready to send>",
  "tips": [<3-5 short, concrete suggestions to improve the application or close the gaps>]
}`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        systemInstruction,
        responseMimeType: "application/json",
        temperature: 0.6,
      },
    });

    const raw = response.text ?? "";

    let data;
    try {
      data = JSON.parse(raw);
    } catch {
      // Fallback: pull the first {...} block if the model wrapped it in prose.
      const match = raw.match(/\{[\s\S]*\}/);
      if (!match) throw new Error("Model did not return JSON");
      data = JSON.parse(match[0]);
    }

    return NextResponse.json({ result: data });
  } catch (error) {
    console.error("job-tailor error:", error);
    return NextResponse.json(
      {
        error:
          "Something went wrong while tailoring your application. Please try again in a moment.",
      },
      { status: 500 }
    );
  }
}
