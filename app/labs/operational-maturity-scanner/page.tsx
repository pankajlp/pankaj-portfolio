"use client";

import { useState } from "react";

const questions = [
  "Is operational data centralized in one system?",
  "Do teams have access to self-service reporting?",
  "Are reports generated automatically?",
  "Are business processes documented and standardized?",
  "Do teams still rely heavily on Excel for reporting?",
  "Is data quality actively monitored?",
  "Can users easily find the information they need?",
  "Are AI tools currently used in operational workflows?",
  "Can employees ask questions about data conversationally?",
  "Do systems proactively surface recommendations or insights?",
];

export default function OperationalMaturityScanner() {
  const [answers, setAnswers] = useState<number[]>(
    Array(questions.length).fill(3)
  );

  const [submitted, setSubmitted] = useState(false);

  const updateAnswer = (index: number, value: number) => {
    const updated = [...answers];
    updated[index] = value;
    setAnswers(updated);
  };

  const totalScore = answers.reduce((a, b) => a + b, 0);
  const percentage = Math.round((totalScore / 50) * 100);

  function getLevel(score: number) {
    if (score < 40)
      return {
        level: "Foundational",
        color: "text-red-600",
        description:
          "Your organization still relies heavily on manual processes and fragmented data.",
      };

    if (score < 70)
      return {
        level: "Developing",
        color: "text-amber-600",
        description:
          "You have analytics capabilities in place but significant automation opportunities remain.",
      };

    if (score < 85)
      return {
        level: "Advanced",
        color: "text-stone-900",
        description:
          "Strong analytics foundation with growing operational intelligence capabilities.",
      };

    return {
      level: "AI-Native",
      color: "text-emerald-650",
      description:
        "Your organization is positioned to leverage AI-driven operational intelligence effectively.",
      };
  }

  const result = getLevel(percentage);

  return (
    <main className="min-h-screen bg-[#f5f4f0] text-[#1c1917]">
      <div className="max-w-4xl mx-auto px-6 py-24">

        <div className="inline-flex items-center px-4 py-2 rounded-full border border-stone-200 bg-stone-100/50 text-stone-900 text-sm">
          NordNeuron Labs
        </div>

        <h1 className="mt-8 text-5xl md:text-6xl font-bold font-syne uppercase tracking-tight text-stone-900 leading-[1.05]">
          Operational
          <span className="block text-stone-900">
            Maturity Scanner
          </span>
        </h1>

        <p className="mt-6 text-stone-500 text-xl max-w-3xl leading-relaxed">
          Assess your organization's readiness across analytics,
          automation, governance, and AI adoption.
        </p>

        {!submitted ? (
          <>
            <div className="mt-16 space-y-8">

              {questions.map((question, index) => (
                <div
                  key={index}
                  className="rounded-3xl border border-stone-200 bg-white p-6 shadow-[0_4px_20px_rgba(15,23,42,0.02)]"
                >
                  <p className="text-lg font-medium mb-5 text-stone-800">
                    {question}
                  </p>

                  <div className="flex gap-3 flex-wrap">

                    {[1, 3, 5].map((value) => (
                      <button
                        key={value}
                        onClick={() => updateAnswer(index, value)}
                        className={`px-5 py-3 rounded-xl transition-all font-medium ${
                          answers[index] === value
                            ? "bg-stone-900 text-white"
                            : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                        }`}
                      >
                        {value === 1
                          ? "No"
                          : value === 3
                          ? "Partially"
                          : "Yes"}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => setSubmitted(true)}
              className="mt-12 px-8 py-4 rounded-2xl bg-stone-900 text-white font-semibold hover:bg-black hover:scale-105 transition-all duration-300 shadow-[0_4px_20px_rgba(120,113,108,0.15)]"
            >
              Calculate Score
            </button>
          </>
        ) : (
          <div className="mt-16 rounded-3xl border border-stone-200 bg-white p-10 shadow-[0_8px_30px_rgba(15,23,42,0.03)]">

            <p className="text-stone-900 uppercase tracking-[0.2em] text-sm font-semibold">
              Assessment Complete
            </p>

            <h2 className="mt-4 text-6xl font-bold text-stone-900 font-syne">
              {percentage}/100
            </h2>

            <h3 className={`mt-4 text-3xl font-semibold ${result.color}`}>
              {result.level}
            </h3>

            <p className="mt-6 text-stone-500 text-lg leading-relaxed">
              {result.description}
            </p>

            <div className="mt-10 rounded-2xl border border-stone-200/60 bg-stone-50/50 p-6">
              <h4 className="text-xl font-semibold mb-4 text-stone-800">
                Recommended Next Steps
              </h4>

              <ul className="space-y-3 text-stone-500">
                <li>• Centralize operational reporting</li>
                <li>• Reduce spreadsheet dependency</li>
                <li>• Introduce workflow automation</li>
                <li>• Improve data accessibility</li>
                <li>• Explore AI-assisted analytics workflows</li>
              </ul>
            </div>

            <div className="mt-10">
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-4 rounded-2xl bg-stone-900 text-white font-medium hover:bg-black transition-all shadow-[0_4px_20px_rgba(120,113,108,0.15)]"
              >
                Discuss Your Assessment →
              </a>
            </div>

            <button
              onClick={() => setSubmitted(false)}
              className="mt-6 block text-stone-900 hover:text-black font-semibold"
            >
              Retake Assessment
            </button>

          </div>
        )}
      </div>
    </main>
  );
}