"use client";

import { useState } from "react";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import TransitionLink from "../components/TransitionLink";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const challengeOptions = [
  "Reporting & Dashboarding",
  "Workflow Automation",
  "AI Use Cases",
  "Operational Visibility",
  "Other",
];

const nextSteps = [
  {
    title: "We review your inquiry",
    description: "You'll hear back within 24 to 48 hours.",
  },
  {
    title: "Intro call",
    description: "A short conversation to understand your operations and goals.",
  },
  {
    title: "Proposal & roadmap",
    description: "A clear scope, timeline, and plan, no obligation.",
  },
];

const inputClass = "w-full";

function FieldLabel({ children, optional }: { children: React.ReactNode; optional?: boolean }) {
  return (
    <label className="label block mb-2">
      {children}
      {optional && <span className="ml-2">(optional)</span>}
    </label>
  );
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
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
      <main className="min-h-dvh bg-paper text-ink flex items-center justify-center px-6">
        <div className="max-w-2xl text-center">
          <div className="text-ink font-display text-xs ">
            NordNeuron
          </div>

          <h1 className="text-4xl md:text-5xl font-display font-medium text-ink leading-tight mt-6">
            Thanks for reaching out.
          </h1>

          <p className="mt-6 text-muted text-base md:text-lg leading-relaxed">
            We’ve received your information and will review your use case.
            If there’s a good fit, we’ll get back to you within 24 to 48 hours.
          </p>

          <TransitionLink
            href="/"
            className="btn mt-10"
          >
            Back to home
          </TransitionLink>
        </div>
      </main>
    );
  }

  return (
    <>
      <Navbar />
      <main id="main" className="bg-paper text-ink pt-[var(--nav-h)]">

        <section className="wrap pt-20 pb-12 md:pt-24 md:pb-16 border-b border-rule">
          <h1>Let&rsquo;s talk.</h1>
          <p className="lead mt-6 text-ink-2">
            Tell us a little about your project, operational analytics, workflow
            automation, AI initiatives, or anything in between. It takes two minutes.
          </p>
        </section>

        <section className="wrap py-16 md:py-20 grid grid-cols-1 gap-x-[var(--gap-columns)] gap-y-14 lg:grid-cols-12 items-start">

          {/* Inquiry form */}
          <form onSubmit={handleSubmit} className="lg:col-span-7 grid gap-12">

            <fieldset className="m-0 p-0 border-0">
              <legend className="font-display text-2xl text-ink mb-6 p-0">About you</legend>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <FieldLabel>Name</FieldLabel>
                  <input required name="name" placeholder="Your name" autoComplete="name" className={inputClass} />
                </div>
                <div>
                  <FieldLabel>Company</FieldLabel>
                  <input required name="company" placeholder="Company name" autoComplete="organization" className={inputClass} />
                </div>
                <div>
                  <FieldLabel>Work Email</FieldLabel>
                  <input required name="email" type="email" placeholder="you@company.com" autoComplete="email" className={inputClass} />
                </div>
                <div>
                  <FieldLabel optional>Company Website</FieldLabel>
                  <input name="website" placeholder="company.com" className={inputClass} />
                </div>
              </div>
              <div className="mt-6">
                <FieldLabel optional>Industry</FieldLabel>
                <select name="industry" className={`${inputClass} cursor-pointer`}>
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

            <fieldset className="m-0 p-0 border-0">
              <legend className="font-display text-2xl text-ink mb-2 p-0">What do you need help with?</legend>
              <p className="text-ink-2 text-sm mb-6">Pick the closest match, we&rsquo;ll figure out the details together.</p>
              <div className="flex flex-wrap gap-3">
                {challengeOptions.map((opt) => {
                  const isSelected = selectedChallenge === opt;
                  return (
                    <button
                      key={opt}
                      type="button"
                      aria-pressed={isSelected}
                      onClick={() => setSelectedChallenge(isSelected ? "" : opt)}
                      className={`btn btn-sm ${isSelected ? "" : "btn-quiet"}`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <fieldset className="m-0 p-0 border-0">
              <legend className="font-display text-2xl text-ink mb-6 p-0">Tell us more</legend>
              <textarea
                name="message"
                rows={6}
                aria-label="Tell us more"
                placeholder="Tell us about your workflow, challenge, or opportunity…"
                className={inputClass}
              />
            </fieldset>

            {error && <p role="alert" className="text-error text-sm m-0">{error}</p>}

            <div className="flex flex-col sm:flex-row sm:items-center gap-5">
              <button type="submit" disabled={loading} aria-busy={loading} className="btn">
                {loading ? "Submitting…" : "Submit inquiry"}
              </button>
              <p className="meta m-0">No spam, no obligation, we reply to every serious inquiry.</p>
            </div>
          </form>

          {/* Direct contact and what happens next */}
          <aside className="lg:col-span-4 lg:col-start-9 grid gap-12">
            <div>
              <h2 className="text-2xl">Prefer email?</h2>
              <ul className="m-0 mt-4 p-0 list-none grid gap-1">
                <li><a href="mailto:contact@nordneuron.com" className="link inline-flex items-center gap-2 whitespace-nowrap"><Mail size={16} aria-hidden="true" />contact@nordneuron.com</a></li>
                <li><a href="https://www.linkedin.com/company/nordneuron/" target="_blank" rel="noopener noreferrer" className="link inline-flex items-center gap-2"><FaLinkedin size={14} aria-hidden="true" />LinkedIn</a></li>
                <li><a href="https://github.com/NordNeuron" target="_blank" rel="noopener noreferrer" className="link inline-flex items-center gap-2"><FaGithub size={14} aria-hidden="true" />GitHub</a></li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl">What happens next</h2>
              <ol className="rows m-0 mt-4 p-0 list-none">
                {nextSteps.map((step) => (
                  <li key={step.title} className="py-5">
                    <h3 className="text-lg">{step.title}</h3>
                    <p className="mt-1 text-ink-2 text-sm">{step.description}</p>
                  </li>
                ))}
              </ol>
            </div>
          </aside>

        </section>
      </main>
      <Footer />
    </>
  );
}
