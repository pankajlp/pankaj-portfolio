"use client";

import { useState } from "react";
import { Mail, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import TransitionLink from "../components/TransitionLink";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const budgetOptions = ["Under $20K", "$20K - $50K", "$50K - $100K", "$100K+"];

const challengeOptions = [
  "Reporting & Dashboarding",
  "Workflow Automation",
  "AI Use Cases",
  "Operational Visibility",
  "Other",
];

const nextSteps = [
  {
    number: "01",
    title: "We review your inquiry",
    description: "You'll hear back within 24–48 hours.",
  },
  {
    number: "02",
    title: "Intro call",
    description: "A short conversation to understand your operations and goals.",
  },
  {
    number: "03",
    title: "Proposal & roadmap",
    description: "A clear scope, timeline, and plan — no obligation.",
  },
];

const inputClass =
  "w-full rounded-2xl bg-white border border-stone-200 px-5 py-4 text-stone-900 outline-none focus:border-stone-500 transition-all duration-300 font-light placeholder:text-stone-400";

function FieldLabel({ children, optional }: { children: React.ReactNode; optional?: boolean }) {
  return (
    <label className="block mb-2 text-[11px] font-syne uppercase tracking-widest text-stone-500">
      {children}
      {optional && <span className="ml-2 text-stone-400 normal-case tracking-normal">(optional)</span>}
    </label>
  );
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedBudget, setSelectedBudget] = useState("");
  const [selectedChallenge, setSelectedChallenge] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      company: formData.get("company"),
      email: formData.get("email"),
      website: formData.get("website"),
      industry: formData.get("industry"),
      challenge: selectedChallenge,
      budget: selectedBudget,
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (res.ok && result.success) {
        setSubmitted(true);
      } else {
        setError(result.message || "Failed to submit inquiry. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <main className="min-h-screen bg-[#f5f4f0] text-[#1c1917] flex items-center justify-center px-6">
        <div className="max-w-2xl text-center">
          <div className="text-stone-900 font-syne text-[10px] uppercase tracking-widest">
            NordNeuron
          </div>

          <h1 className="text-4xl md:text-6xl font-bold font-syne uppercase tracking-tight text-stone-900 leading-tight mt-6">
            Thanks for reaching out.
          </h1>

          <p className="mt-6 text-stone-500 text-base md:text-lg leading-relaxed font-light">
            We've received your information and will review your use case.
            If there's a good fit, we'll get back to you within 24–48 hours.
          </p>

          <TransitionLink
            href="/"
            className="group inline-flex items-center gap-2.5 mt-10 px-8 py-4 rounded-full bg-stone-900 text-stone-50 font-syne text-xs uppercase tracking-widest hover:bg-stone-800 hover:text-white transition-all duration-300"
          >
            Back to Home
            <ArrowUpRight size={16} />
          </TransitionLink>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f5f4f0] text-[#1c1917] overflow-hidden">
      <Navbar />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-40 pb-28">

        {/* Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-stone-400" />
            <span className="text-stone-500 font-syne text-[10px] uppercase tracking-[0.3em]">
              Contact
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold font-syne uppercase tracking-tight text-stone-900 leading-[0.95]">
            Let&apos;s Talk.
          </h1>

          <p className="mt-6 text-stone-500 text-base md:text-lg leading-relaxed font-light max-w-xl">
            Tell us a little about your project — operational analytics, workflow
            automation, AI initiatives, or anything in between. It takes two minutes.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-12 gap-14 items-start">

          {/* Left Column: direct contact + what happens next */}
          <aside className="lg:col-span-4 lg:sticky lg:top-32 space-y-10">

            {/* Direct contact */}
            <div className="rounded-3xl border border-stone-200 bg-white p-8">
              <h2 className="text-[11px] font-syne uppercase tracking-widest text-stone-500 mb-5">
                Prefer email?
              </h2>
              <a
                href="mailto:contact@nordneuron.com"
                className="group flex items-center gap-3 text-stone-900 font-syne font-bold text-lg tracking-tight hover:text-stone-600 transition-colors duration-300 break-all"
              >
                <Mail size={18} className="shrink-0" />
                contact@nordneuron.com
              </a>

              <div className="mt-6 pt-6 border-t border-stone-200 flex gap-6">
                <a
                  href="https://linkedin.com/in/pankajlp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-stone-500 hover:text-stone-900 font-syne text-[11px] uppercase tracking-widest transition-colors duration-300"
                >
                  <FaLinkedin size={14} /> LinkedIn
                </a>
                <a
                  href="https://github.com/pankajlp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-stone-500 hover:text-stone-900 font-syne text-[11px] uppercase tracking-widest transition-colors duration-300"
                >
                  <FaGithub size={14} /> GitHub
                </a>
              </div>
            </div>

            {/* What happens next */}
            <div>
              <h2 className="text-[11px] font-syne uppercase tracking-widest text-stone-500 mb-6">
                What happens next
              </h2>
              <div className="space-y-6">
                {nextSteps.map((step) => (
                  <div key={step.number} className="flex gap-5">
                    <span className="text-stone-400 font-syne text-xs font-bold tracking-widest pt-0.5">
                      {step.number}
                    </span>
                    <div>
                      <h3 className="text-stone-900 font-syne font-bold text-sm uppercase tracking-tight">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-stone-500 text-sm font-light leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-8">
            <form onSubmit={handleSubmit} className="space-y-12">

              {/* Step 1: About you */}
              <fieldset>
                <legend className="flex items-center gap-4 mb-7">
                  <span className="text-stone-400 font-syne text-xs font-bold tracking-[0.2em]">01</span>
                  <span className="text-stone-900 font-syne font-bold uppercase tracking-tight text-lg">About you</span>
                </legend>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <FieldLabel>Name</FieldLabel>
                    <input required name="name" placeholder="Jane Smith" className={inputClass} />
                  </div>
                  <div>
                    <FieldLabel>Company</FieldLabel>
                    <input required name="company" placeholder="Acme Logistics" className={inputClass} />
                  </div>
                  <div>
                    <FieldLabel>Work Email</FieldLabel>
                    <input required name="email" type="email" placeholder="jane@acme.com" className={inputClass} />
                  </div>
                  <div>
                    <FieldLabel optional>Company Website</FieldLabel>
                    <input name="website" placeholder="acme.com" className={inputClass} />
                  </div>
                </div>

                <div className="mt-6">
                  <FieldLabel optional>Industry</FieldLabel>
                  <select name="industry" className={`${inputClass} appearance-none cursor-pointer`}>
                    <option value="">Select your industry</option>
                    <option value="Logistics">Logistics</option>
                    <option value="Procurement">Procurement</option>
                    <option value="Manufacturing">Manufacturing</option>
                    <option value="Retail">Retail</option>
                    <option value="Technology">Technology</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </fieldset>

              {/* Step 2: Your challenge */}
              <fieldset>
                <legend className="flex items-center gap-4 mb-3">
                  <span className="text-stone-400 font-syne text-xs font-bold tracking-[0.2em]">02</span>
                  <span className="text-stone-900 font-syne font-bold uppercase tracking-tight text-lg">What do you need help with?</span>
                </legend>
                <p className="text-stone-500 text-sm font-light mb-6">Pick the closest match — we&apos;ll figure out the details together.</p>

                <div className="flex flex-wrap gap-3">
                  {challengeOptions.map((opt) => {
                    const isSelected = selectedChallenge === opt;
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setSelectedChallenge(isSelected ? "" : opt)}
                        className={`py-3 px-5 rounded-full border text-xs font-syne uppercase tracking-wider transition-all duration-300 ${
                          isSelected
                            ? "bg-stone-900 text-white border-stone-900"
                            : "bg-white border-stone-200 text-stone-600 hover:border-stone-500 hover:text-stone-900"
                        }`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </fieldset>

              {/* Step 3: Budget */}
              <fieldset>
                <legend className="flex items-center gap-4 mb-3">
                  <span className="text-stone-400 font-syne text-xs font-bold tracking-[0.2em]">03</span>
                  <span className="text-stone-900 font-syne font-bold uppercase tracking-tight text-lg">Estimated budget</span>
                </legend>
                <p className="text-stone-500 text-sm font-light mb-6">Optional — a rough range helps us recommend the right scope.</p>

                <div className="flex flex-wrap gap-3">
                  {budgetOptions.map((opt) => {
                    const isSelected = selectedBudget === opt;
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setSelectedBudget(isSelected ? "" : opt)}
                        className={`py-3 px-5 rounded-full border text-xs font-syne uppercase tracking-wider transition-all duration-300 ${
                          isSelected
                            ? "bg-stone-900 text-white border-stone-900"
                            : "bg-white border-stone-200 text-stone-600 hover:border-stone-500 hover:text-stone-900"
                        }`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </fieldset>

              {/* Step 4: Message */}
              <fieldset>
                <legend className="flex items-center gap-4 mb-7">
                  <span className="text-stone-400 font-syne text-xs font-bold tracking-[0.2em]">04</span>
                  <span className="text-stone-900 font-syne font-bold uppercase tracking-tight text-lg">Tell us more</span>
                </legend>

                <textarea
                  name="message"
                  rows={6}
                  placeholder="Tell us about your workflow, challenge, or opportunity..."
                  className={`${inputClass} rounded-3xl`}
                />
              </fieldset>

              {error && <p className="text-red-600 text-sm">{error}</p>}

              <div className="flex flex-col sm:flex-row sm:items-center gap-5 pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="group inline-flex items-center justify-center gap-2.5 px-10 py-5 rounded-full bg-stone-900 text-white font-syne text-xs uppercase tracking-widest hover:bg-stone-700 transition-all duration-300 disabled:opacity-50"
                >
                  {loading ? "Submitting..." : "Submit Inquiry"}
                  {!loading && (
                    <ArrowUpRight
                      size={16}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                    />
                  )}
                </button>
                <p className="text-stone-400 text-xs font-light">
                  No spam, no obligation — we reply to every serious inquiry.
                </p>
              </div>

            </form>
          </div>

        </div>

      </div>
      <Footer />
    </main>
  );
}
