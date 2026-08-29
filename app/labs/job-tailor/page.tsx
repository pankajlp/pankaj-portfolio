"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

type TailorResult = {
  atsScore: number;
  verdict: string;
  matchedKeywords: string[];
  missingKeywords: string[];
  tailoredSummary: string;
  tailoredBullets: string[];
  coverLetter: string;
  tips: string[];
};

export default function JobTailorLab() {
  const [resume, setResume] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [company, setCompany] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<TailorResult | null>(null);
  const [copied, setCopied] = useState<string>("");

  async function handleSubmit() {
    setError("");
    setResult(null);

    if (resume.trim().length < 40 || jobDescription.trim().length < 40) {
      setError(
        "Please paste both your resume and the job description (a few lines each)."
      );
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/job-tailor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ resume, jobDescription, jobTitle, company }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
      } else {
        setResult(data.result);
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  async function copy(text: string, key: string) {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(key);
      setTimeout(() => setCopied(""), 1800);
    } catch {
      /* clipboard unavailable */
    }
  }

  const scoreColor =
    !result || result.atsScore < 45
      ? "text-red-600"
      : result.atsScore < 70
      ? "text-amber-600"
      : "text-emerald-600";

  const inputClass =
    "w-full rounded-2xl border border-stone-200 bg-white px-4 py-3 text-stone-800 placeholder:text-stone-400 focus:outline-none focus:border-stone-400 focus:ring-2 focus:ring-stone-900/5 transition-all";

  return (
    <main className="min-h-screen bg-[#f5f4f0] text-[#1c1917] overflow-hidden">
      <Navbar />

      {/* Background glow, matching Labs */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-stone-900/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-40 pb-28">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-stone-200 bg-white/60 text-stone-500 font-syne text-[10px] uppercase tracking-widest mb-6 shadow-sm">
          NordNeuron Labs
        </div>

        <h1 className="text-4xl md:text-7xl font-bold font-syne uppercase tracking-tight text-stone-900 leading-[1.05] max-w-4xl">
          Job Application
          <br />
          <span className="text-stone-950">Tailor</span>
        </h1>

        <p className="mt-8 max-w-2xl text-stone-500 text-base md:text-lg leading-relaxed font-light">
          Paste your resume and a job description. Get an ATS match score, a
          resume rewritten for the role, and a ready-to-send cover letter — in
          seconds. Nothing is stored.
        </p>

        {/* ── Input form ─────────────────────────────────────────── */}
        <div className="mt-16 grid md:grid-cols-2 gap-5">
          <input
            className={inputClass}
            placeholder="Target job title (e.g. Senior Data Analyst)"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />
          <input
            className={inputClass}
            placeholder="Company (optional)"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>

        <div className="mt-5 grid md:grid-cols-2 gap-5">
          <div>
            <label className="block mb-2 text-stone-500 font-syne text-[10px] uppercase tracking-widest">
              Your resume
            </label>
            <textarea
              className={`${inputClass} min-h-[260px] resize-y leading-relaxed`}
              placeholder="Paste your current resume text here…"
              value={resume}
              onChange={(e) => setResume(e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-2 text-stone-500 font-syne text-[10px] uppercase tracking-widest">
              Job description
            </label>
            <textarea
              className={`${inputClass} min-h-[260px] resize-y leading-relaxed`}
              placeholder="Paste the full job description here…"
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
            />
          </div>
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
          {loading ? "Tailoring…" : "Tailor my application →"}
        </button>

        {/* ── Results ────────────────────────────────────────────── */}
        {result && (
          <div className="mt-20 space-y-8">
            {/* Score + verdict */}
            <div className="rounded-3xl border border-stone-200 bg-white p-10 shadow-[0_8px_30px_rgba(15,23,42,0.03)]">
              <p className="text-stone-900 uppercase tracking-[0.2em] text-xs font-semibold">
                ATS Match Score
              </p>
              <h2 className={`mt-4 text-7xl font-bold font-syne ${scoreColor}`}>
                {result.atsScore}
                <span className="text-3xl text-stone-300">/100</span>
              </h2>
              <p className="mt-4 text-stone-500 text-lg leading-relaxed max-w-2xl">
                {result.verdict}
              </p>

              <div className="mt-8 grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-stone-800 font-semibold mb-3 text-sm uppercase tracking-wide">
                    Matched
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {result.matchedKeywords?.map((k) => (
                      <span
                        key={k}
                        className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm"
                      >
                        {k}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-stone-800 font-semibold mb-3 text-sm uppercase tracking-wide">
                    Missing / weak
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {result.missingKeywords?.map((k) => (
                      <span
                        key={k}
                        className="px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-sm"
                      >
                        {k}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Tailored summary + bullets */}
            <div className="rounded-3xl border border-stone-200 bg-white p-10 shadow-[0_4px_20px_rgba(15,23,42,0.02)]">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-2xl font-bold font-syne uppercase tracking-tight text-stone-900">
                  Tailored Resume
                </h3>
                <button
                  onClick={() =>
                    copy(
                      `${result.tailoredSummary}\n\n${result.tailoredBullets
                        .map((b) => `• ${b}`)
                        .join("\n")}`,
                      "resume"
                    )
                  }
                  className="text-stone-500 hover:text-stone-900 font-syne text-[10px] uppercase tracking-widest transition-colors"
                >
                  {copied === "resume" ? "Copied ✓" : "Copy"}
                </button>
              </div>
              <p className="mt-6 text-stone-600 leading-relaxed">
                {result.tailoredSummary}
              </p>
              <ul className="mt-6 space-y-3">
                {result.tailoredBullets?.map((b, i) => (
                  <li key={i} className="flex gap-3 text-stone-600 leading-relaxed">
                    <span className="text-stone-900 mt-1">▸</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cover letter */}
            <div className="rounded-3xl border border-stone-200 bg-white p-10 shadow-[0_4px_20px_rgba(15,23,42,0.02)]">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-2xl font-bold font-syne uppercase tracking-tight text-stone-900">
                  Cover Letter
                </h3>
                <button
                  onClick={() => copy(result.coverLetter, "cover")}
                  className="text-stone-500 hover:text-stone-900 font-syne text-[10px] uppercase tracking-widest transition-colors"
                >
                  {copied === "cover" ? "Copied ✓" : "Copy"}
                </button>
              </div>
              <p className="mt-6 text-stone-600 leading-relaxed whitespace-pre-wrap">
                {result.coverLetter}
              </p>
            </div>

            {/* Tips */}
            {result.tips?.length > 0 && (
              <div className="rounded-3xl border border-stone-200/60 bg-stone-50/50 p-8">
                <h4 className="text-xl font-semibold mb-4 text-stone-800 font-syne uppercase tracking-tight">
                  How to strengthen it
                </h4>
                <ul className="space-y-3 text-stone-500">
                  {result.tips.map((t, i) => (
                    <li key={i}>• {t}</li>
                  ))}
                </ul>
              </div>
            )}

            <p className="text-stone-400 text-xs">
              Generated by AI — always review before sending. Your inputs are not
              stored. Want the full local toolkit (auto-fill, job tracker, visa
              reports)?{" "}
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
