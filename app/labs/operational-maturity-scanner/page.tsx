"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
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
        color: "text-error",
        description:
          "Your organization still relies heavily on manual processes and fragmented data.",
      };

    if (score < 70)
      return {
        level: "Developing",
        color: "text-warning",
        description:
          "You have analytics capabilities in place but significant automation opportunities remain.",
      };

    if (score < 85)
      return {
        level: "Advanced",
        color: "text-ink",
        description:
          "Strong analytics foundation with growing operational intelligence capabilities.",
      };

    return {
      level: "AI-Native",
      color: "text-success",
      description:
        "Your organization is positioned to leverage AI-driven operational intelligence effectively.",
      };
  }

  const result = getLevel(percentage);

  return (
    <main id="main" className="min-h-dvh bg-paper text-ink pt-[var(--nav-h)]">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 pt-24">


        <h1 className="mt-8 text-4xl md:text-5xl font-display font-medium text-ink leading-[1.05]">
          Operational
          <span className="block text-ink">
            Maturity Scanner
          </span>
        </h1>

        <p className="mt-6 text-muted text-xl max-w-3xl leading-relaxed">
          Assess your organization’s readiness across analytics,
          automation, governance, and AI adoption.
        </p>
      </div>
      <div className="max-w-4xl mx-auto px-6 pb-24">

        {!submitted ? (
          <>
            <div className="mt-16 space-y-8">

              {questions.map((question, index) => (
                <div
                  key={index}
                  className="rounded-card border border-rule-2 bg-paper-2 p-6"
                >
                  <p className="text-lg font-medium mb-5 text-ink">
                    {question}
                  </p>

                  <div className="flex gap-3 flex-wrap">

                    {[1, 3, 5].map((value) => (
                      <button
                        key={value}
                        onClick={() => updateAnswer(index, value)}
                        className={`px-5 py-3 rounded-control transition font-medium ${
                          answers[index] === value
                            ? "bg-accent text-accent-ink"
                            : "bg-paper-3 text-ink-2 hover:bg-paper-3"
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
              className="mt-12 px-8 py-4 rounded-card bg-accent text-accent-ink font-semibold hover:bg-accent-2 transition duration-300"
            >
              Calculate Score
            </button>
          </>
        ) : (
          <div className="mt-16 rounded-card border border-rule-2 bg-paper-2 p-10">

            <p className="text-ink text-sm font-semibold">
              Assessment Complete
            </p>

            <h2 className="mt-4 text-5xl font-medium text-ink font-display">
              {percentage}/100
            </h2>

            <h3 className={`mt-4 text-3xl font-semibold ${result.color}`}>
              {result.level}
            </h3>

            <p className="mt-6 text-muted text-lg leading-relaxed">
              {result.description}
            </p>

            <div className="mt-10 rounded-control border border-rule-2 bg-paper-2/50 p-6">
              <h4 className="text-xl font-semibold mb-4 text-ink">
                Recommended Next Steps
              </h4>

              <ul className="space-y-3 text-muted">
                <li>, Centralize operational reporting</li>
                <li>, Reduce spreadsheet dependency</li>
                <li>, Introduce workflow automation</li>
                <li>, Improve data accessibility</li>
                <li>, Explore AI-assisted analytics workflows</li>
              </ul>
            </div>

            <div className="mt-10">
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-4 rounded-control bg-accent text-accent-ink font-medium hover:bg-accent-2 transition"
              >
                Discuss Your Assessment
              </a>
            </div>

            <button
              onClick={() => setSubmitted(false)}
              className="mt-6 block text-ink hover:text-accent-ink font-semibold"
            >
              Retake Assessment
            </button>

          </div>
        )}
      </div>
      <Footer />
    </main>
  );
}