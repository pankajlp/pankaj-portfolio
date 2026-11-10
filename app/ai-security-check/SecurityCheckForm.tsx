"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const inputClass =
  "w-full rounded-2xl bg-white/[0.03] border border-white/10 px-5 py-4 text-[#f2ede3] outline-none focus:border-[#c8a86b]/50 transition-all duration-300 font-light placeholder:text-[#8a8175]";

function FieldLabel({ htmlFor, children, optional }: { htmlFor: string; children: React.ReactNode; optional?: boolean }) {
  return (
    <label htmlFor={htmlFor} className="block mb-2 text-[11px] font-syne uppercase tracking-widest text-[#8a8175]">
      {children}
      {optional && <span className="ml-2 text-[#8a8175] normal-case tracking-normal">(optional)</span>}
    </label>
  );
}

export default function SecurityCheckForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, industry: "Software", challenge: "AI Feature Security Check pilot" }),
      });
      const result = await res.json();
      if (res.ok && result.success) setSubmitted(true);
      else setError(result.message || "Failed to send. Please try again, or email contact@nordneuron.com.");
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please check your connection, or email contact@nordneuron.com.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-3xl border border-[#c8a86b]/40 bg-[#c8a86b]/10 p-10" role="status">
        <h3 className="text-3xl font-bold font-syne uppercase tracking-tight text-[#f2ede3]">Got it. Thank you.</h3>
        <p className="mt-4 text-[#a89f8f] font-light leading-relaxed">
          We&apos;ll reply within two working days to agree the scope and what we need from you.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <FieldLabel htmlFor="sc-name">Name</FieldLabel>
          <input id="sc-name" required name="name" autoComplete="name" className={inputClass} />
        </div>
        <div>
          <FieldLabel htmlFor="sc-company">Company</FieldLabel>
          <input id="sc-company" required name="company" autoComplete="organization" className={inputClass} />
        </div>
        <div>
          <FieldLabel htmlFor="sc-email">Work email</FieldLabel>
          <input id="sc-email" required name="email" type="email" autoComplete="email" className={inputClass} />
        </div>
        <div>
          <FieldLabel htmlFor="sc-role" optional>Your role</FieldLabel>
          <input id="sc-role" name="role" placeholder="e.g. Engineering lead" className={inputClass} />
        </div>
      </div>

      <div>
        <FieldLabel htmlFor="sc-website" optional>Product website</FieldLabel>
        <input id="sc-website" name="website" type="url" placeholder="https://" className={inputClass} />
      </div>

      <div>
        <FieldLabel htmlFor="sc-message">What does your AI feature do?</FieldLabel>
        <textarea
          id="sc-message"
          required
          name="message"
          rows={4}
          placeholder="e.g. A support assistant that can look up a customer's orders and issue refunds"
          className={`${inputClass} rounded-3xl`}
        />
      </div>

      {error && <p className="text-red-500 text-sm" role="alert">{error}</p>}

      <div className="flex flex-col sm:flex-row sm:items-center gap-5 pt-2">
        <button
          type="submit"
          disabled={loading}
          className="group inline-flex items-center justify-center gap-2.5 px-10 py-5 rounded-full bg-[#c8a86b] text-[#171310] font-syne text-xs uppercase tracking-widest hover:bg-[#d8bd86] transition-all duration-300 disabled:opacity-50"
        >
          {loading ? "Sending..." : "Request a pilot assessment"}
          {!loading && (
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          )}
        </button>
        <p className="text-[#8a8175] text-xs font-light">No testing starts until you have approved the scope in writing.</p>
      </div>
    </form>
  );
}
