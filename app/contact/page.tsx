"use client";

import { useState } from "react";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
      challenge: formData.get("challenge"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
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
      <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
        <div className="max-w-2xl text-center">
          <div className="text-cyan-400 text-sm uppercase tracking-[0.2em]">
            NordNeuron
          </div>

          <h1 className="text-5xl font-bold mt-6">
            Thanks for reaching out.
          </h1>

          <p className="mt-6 text-white/70 text-xl">
            I've received your information and will review your use case.
            If there's a good fit, I'll get back to you shortly.
          </p>

          <a
            href="/"
            className="inline-block mt-10 px-8 py-4 rounded-2xl bg-cyan-400 text-black font-semibold"
          >
            Back to Home
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-24">

        <div className="inline-flex items-center px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 text-sm">
          NordNeuron
        </div>

        <h1 className="mt-8 text-5xl md:text-6xl font-bold">
          Discuss Your
          <span className="block text-cyan-400">
            Use Case
          </span>
        </h1>

        <div className="mt-16 grid lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-8">
            <p className="text-white/60 text-lg leading-relaxed max-w-xl">
              Whether you're exploring operational analytics,
              workflow automation, AI initiatives, or reporting modernization,
              fill out the inquiry form or connect directly through my social channels.
            </p>

            <div className="space-y-4 max-w-md">
              {/* Email Card */}
              <a
                href="mailto:contact@nordneuron.com"
                className="group block p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-cyan-400/30 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-400/10 flex items-center justify-center text-cyan-400 shrink-0">
                    <Mail size={22} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold group-hover:text-cyan-300 transition-colors">Email</h3>
                    <p className="text-white/50 text-sm mt-1">contact@nordneuron.com</p>
                  </div>
                </div>
              </a>

              {/* LinkedIn Card */}
              <a
                href="https://linkedin.com/in/pankajlp"
                target="_blank"
                className="group block p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-cyan-400/30 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-400/10 flex items-center justify-center text-cyan-400 shrink-0">
                    <FaLinkedin size={22} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold group-hover:text-cyan-300 transition-colors">LinkedIn</h3>
                    <p className="text-white/50 text-sm mt-1">Connect professionally</p>
                  </div>
                </div>
              </a>

              {/* GitHub Card */}
              <a
                href="https://github.com/pankajlp"
                target="_blank"
                className="group block p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-cyan-400/30 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-400/10 flex items-center justify-center text-cyan-400 shrink-0">
                    <FaGithub size={22} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold group-hover:text-cyan-300 transition-colors">GitHub</h3>
                    <p className="text-white/50 text-sm mt-1">Explore code & tools</p>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="space-y-8"
            >
              <div className="grid md:grid-cols-2 gap-6">

                <input
                  required
                  name="name"
                  placeholder="Your Name"
                  className="w-full rounded-2xl bg-white/[0.04] border border-white/10 px-5 py-4 text-white outline-none focus:border-cyan-400/40"
                />

                <input
                  required
                  name="company"
                  placeholder="Company"
                  className="w-full rounded-2xl bg-white/[0.04] border border-white/10 px-5 py-4 text-white outline-none focus:border-cyan-400/40"
                />

              </div>

              <div className="grid md:grid-cols-2 gap-6">

                <input
                  required
                  name="email"
                  type="email"
                  placeholder="Work Email"
                  className="w-full rounded-2xl bg-white/[0.04] border border-white/10 px-5 py-4 text-white outline-none focus:border-cyan-400/40"
                />

                <input
                  name="website"
                  placeholder="Company Website"
                  className="w-full rounded-2xl bg-white/[0.04] border border-white/10 px-5 py-4 text-white outline-none focus:border-cyan-400/40"
                />

              </div>

              <select
                name="industry"
                className="w-full rounded-2xl bg-white/[0.04] border border-white/10 px-5 py-4 text-white outline-none focus:border-cyan-400/40"
              >
                <option value="" className="bg-[#050816] text-white">Industry</option>
                <option value="Logistics" className="bg-[#050816] text-white">Logistics</option>
                <option value="Procurement" className="bg-[#050816] text-white">Procurement</option>
                <option value="Manufacturing" className="bg-[#050816] text-white">Manufacturing</option>
                <option value="Retail" className="bg-[#050816] text-white">Retail</option>
                <option value="Technology" className="bg-[#050816] text-white">Technology</option>
                <option value="Other" className="bg-[#050816] text-white">Other</option>
              </select>

              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
                <h3 className="text-xl font-semibold mb-6">
                  What best describes your challenge?
                </h3>

                <div className="space-y-4 text-white/80">

                  <label className="block">
                    <input type="radio" name="challenge" value="Reporting & Dashboarding" className="mr-3" />
                    Reporting & Dashboarding
                  </label>

                  <label className="block">
                    <input type="radio" name="challenge" value="Workflow Automation" className="mr-3" />
                    Workflow Automation
                  </label>

                  <label className="block">
                    <input type="radio" name="challenge" value="AI Use Cases" className="mr-3" />
                    AI Use Cases
                  </label>

                  <label className="block">
                    <input type="radio" name="challenge" value="Operational Visibility" className="mr-3" />
                    Operational Visibility
                  </label>

                  <label className="block">
                    <input type="radio" name="challenge" value="Other" className="mr-3" />
                    Other
                  </label>

                </div>
              </div>

              <textarea
                name="message"
                rows={8}
                placeholder="Tell me about your workflow, challenge, or opportunity..."
                className="w-full rounded-3xl bg-white/[0.04] border border-white/10 px-5 py-5 text-white outline-none focus:border-cyan-400/40"
              />

              {error && (
                <p className="text-red-400 text-sm mt-4">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="px-8 py-4 rounded-2xl bg-cyan-400 text-black font-semibold hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:hover:scale-100"
              >
                {loading ? "Submitting..." : "Submit Inquiry →"}
              </button>

            </form>
          </div>

        </div>

      </div>
    </main>
  );
}