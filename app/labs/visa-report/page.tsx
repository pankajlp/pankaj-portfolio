"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

type Row = {
  country: string;
  region: string;
  route: string;
  offerNeeded: string;
  salary: string;
  processing: string;
  demand: string;
  quals: string;
  language: string;
  pr: string;
  link: string;
  noOfferRoute: boolean;
  fit: "High" | "Medium" | "Hard";
  note: string;
};

const FIT_STYLES: Record<string, string> = {
  High: "bg-emerald-50 border-emerald-200 text-emerald-700",
  Medium: "bg-amber-50 border-amber-200 text-amber-700",
  Hard: "bg-red-50 border-red-200 text-red-700",
};

export default function VisaReportLab() {
  const [resume, setResume] = useState("");
  const [currentCountry, setCurrentCountry] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [rows, setRows] = useState<Row[] | null>(null);
  const [filter, setFilter] = useState<"All" | "High" | "Medium" | "Hard" | "NoOffer">(
    "All"
  );

  async function handleSubmit() {
    setError("");
    setRows(null);

    if (resume.trim().length < 40) {
      setError("Please paste your resume (a few lines at least).");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/visa-report", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ resume, currentCountry }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
      } else {
        setRows(data.rows);
        setFilter("All");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    "w-full rounded-2xl border border-stone-200 bg-white px-4 py-3 text-stone-800 placeholder:text-stone-400 focus:outline-none focus:border-stone-400 focus:ring-2 focus:ring-stone-900/5 transition-all";

  const counts = rows
    ? {
        High: rows.filter((r) => r.fit === "High").length,
        Medium: rows.filter((r) => r.fit === "Medium").length,
        Hard: rows.filter((r) => r.fit === "Hard").length,
        NoOffer: rows.filter((r) => r.noOfferRoute).length,
      }
    : null;

  const visible = rows
    ? rows.filter((r) =>
        filter === "All"
          ? true
          : filter === "NoOffer"
          ? r.noOfferRoute
          : r.fit === filter
      )
    : [];

  const chips: { key: typeof filter; label: string }[] = [
    { key: "All", label: `All ${rows?.length ?? ""}` },
    { key: "High", label: `Best fit ${counts?.High ?? ""}` },
    { key: "Medium", label: `Possible ${counts?.Medium ?? ""}` },
    { key: "Hard", label: `Harder ${counts?.Hard ?? ""}` },
    { key: "NoOffer", label: `No offer needed ${counts?.NoOffer ?? ""}` },
  ];

  return (
    <main className="min-h-screen bg-[#f5f4f0] text-[#1c1917] overflow-hidden">
      <Navbar />

      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-stone-900/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-40 pb-28">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-stone-200 bg-white/60 text-stone-500 font-syne text-[10px] uppercase tracking-widest mb-6 shadow-sm">
          NordNeuron Labs
        </div>

        <h1 className="text-4xl md:text-7xl font-bold font-syne uppercase tracking-tight text-stone-900 leading-[1.05] max-w-4xl">
          Work-Visa
          <br />
          <span className="text-stone-950">Fit Report</span>
        </h1>

        <p className="mt-8 max-w-2xl text-stone-500 text-base md:text-lg leading-relaxed font-light">
          Paste your resume and get a personalised non-EU work-visa guide across
          27 countries — each rated for how well it fits your profile, with the
          real route, salary floor, and path to permanent residence. Nothing is
          stored.
        </p>

        <a
          href="/labs/job-tailor"
          className="mt-4 inline-flex items-center text-stone-500 hover:text-stone-900 font-syne text-[10px] uppercase tracking-widest transition-colors"
        >
          Applying for a specific role? Try the Job Application Tailor →
        </a>

        {/* ── Input ──────────────────────────────────────────────── */}
        <div className="mt-16">
          <input
            className={`${inputClass} md:max-w-sm`}
            placeholder="Current country / citizenship (optional)"
            value={currentCountry}
            onChange={(e) => setCurrentCountry(e.target.value)}
          />
          <label className="block mt-6 mb-2 text-stone-500 font-syne text-[10px] uppercase tracking-widest">
            Your resume
          </label>
          <textarea
            className={`${inputClass} min-h-[260px] resize-y leading-relaxed`}
            placeholder="Paste your current resume text here…"
            value={resume}
            onChange={(e) => setResume(e.target.value)}
          />
        </div>

        {error && (
          <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 px-5 py-4 text-red-700 text-sm">
            {error}
          </div>
        )}

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="mt-8 inline-flex items-center px-8 py-4 rounded-2xl bg-stone-900 text-white font-syne text-xs uppercase tracking-widest hover:bg-black hover:scale-[1.02] transition-all duration-300 shadow-[0_4px_20px_rgba(120,113,108,0.15)] disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed"
        >
          {loading ? "Analysing 27 countries…" : "Build my visa report →"}
        </button>

        {/* ── Results ────────────────────────────────────────────── */}
        {rows && (
          <div className="mt-20">
            <div className="flex flex-wrap gap-3">
              {chips.map((c) => (
                <button
                  key={c.key}
                  onClick={() => setFilter(c.key)}
                  className={`px-4 py-2 rounded-full border text-sm font-medium transition-all ${
                    filter === c.key
                      ? "bg-stone-900 text-white border-stone-900"
                      : "bg-white text-stone-600 border-stone-200 hover:border-stone-300"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>

            <div className="mt-8 space-y-5">
              {visible.map((r) => (
                <div
                  key={r.country}
                  className="rounded-3xl border border-stone-200 bg-white p-7 shadow-[0_4px_20px_rgba(15,23,42,0.02)]"
                >
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div>
                      <h3 className="text-2xl font-bold font-syne uppercase tracking-tight text-stone-900">
                        {r.country}
                      </h3>
                      <span className="text-stone-400 text-xs uppercase tracking-widest">
                        {r.region}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      {r.noOfferRoute && (
                        <span className="px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-600 text-xs font-medium">
                          No job offer needed
                        </span>
                      )}
                      <span
                        className={`px-3 py-1 rounded-full border text-xs font-semibold uppercase tracking-wide ${
                          FIT_STYLES[r.fit]
                        }`}
                      >
                        {r.fit} fit
                      </span>
                    </div>
                  </div>

                  <p className="mt-4 text-stone-600 leading-relaxed">{r.note}</p>

                  <div className="mt-5 grid sm:grid-cols-2 gap-x-8 gap-y-2 text-sm">
                    <Fact label="Best route" value={r.route} />
                    <Fact label="Min salary (2026)" value={r.salary} />
                    <Fact label="Job offer needed" value={r.offerNeeded} />
                    <Fact label="Processing" value={r.processing} />
                    <Fact label="Path to PR" value={r.pr} />
                    <Fact label="Language" value={r.language} />
                  </div>

                  <a
                    href={r.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center text-stone-500 hover:text-stone-900 font-syne text-[10px] uppercase tracking-widest transition-colors"
                  >
                    Official immigration site →
                  </a>
                </div>
              ))}
            </div>

            <p className="mt-10 text-stone-400 text-xs">
              Fit ratings are AI-tailored to your profile; country facts are as of{" "}
              {(rows && "2026")}. Salary floors change yearly — always verify on
              the official link before applying. Want the full local toolkit
              (auto-fill, job tracker, downloadable xlsx guide)?{" "}
              <a
                href="https://github.com/pankajlp/job-cockpit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-600 underline hover:text-stone-900"
              >
                Get Job Cockpit on GitHub
              </a>
              .
            </p>
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-2">
      <span className="text-stone-400 shrink-0">{label}:</span>
      <span className="text-stone-700">{value}</span>
    </div>
  );
}
