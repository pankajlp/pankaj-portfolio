"use client";

import { useState } from "react";
import { ArrowUpRight, Paperclip, X } from "lucide-react";

// Vercel caps a function request body at 4.5 MB; stay safely under it.
const MAX_TOTAL_BYTES = 4 * 1024 * 1024;
const ACCEPTED = ".xlsx,.xls,.csv,.pdf,.docx,.doc,.eml,.msg,.txt";

const inputClass =
  "w-full rounded-2xl bg-white/[0.03] border border-white/10 px-5 py-4 text-[#f2ede3] outline-none focus:border-[#c8a86b]/50 transition-all duration-300 font-light placeholder:text-[#8a8175]";

function FieldLabel({ children, optional }: { children: React.ReactNode; optional?: boolean }) {
  return (
    <label className="block mb-2 text-[11px] font-syne uppercase tracking-widest text-[#8a8175]">
      {children}
      {optional && <span className="ml-2 text-[#8a8175] normal-case tracking-normal">(optional)</span>}
    </label>
  );
}

function formatSize(bytes: number) {
  return bytes < 1024 * 1024 ? `${Math.round(bytes / 1024)} KB` : `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

export default function RfqPilotForm() {
  const [files, setFiles] = useState<File[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const totalBytes = files.reduce((sum, f) => sum + f.size, 0);

  function addFiles(list: FileList | null) {
    if (!list) return;
    setError(null);
    setFiles((prev) => {
      const names = new Set(prev.map((f) => f.name));
      return [...prev, ...Array.from(list).filter((f) => !names.has(f.name))];
    });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    if (totalBytes > MAX_TOTAL_BYTES) {
      setError("Files are over 4 MB in total. Send fewer here, or email the rest to contact@nordneuron.com.");
      return;
    }

    const formData = new FormData(e.currentTarget);
    formData.delete("files");
    files.forEach((f) => formData.append("files", f));

    setLoading(true);
    try {
      const res = await fetch("/api/rfq-pilot", { method: "POST", body: formData });
      const result = await res.json();
      if (res.ok && result.success) {
        setSubmitted(true);
      } else {
        setError(result.message || "Failed to send. Please try again.");
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
      <div className="rounded-3xl border border-[#c8a86b]/40 bg-[#c8a86b]/10 p-10">
        <h3 className="text-3xl font-bold font-syne uppercase tracking-tight text-[#f2ede3]">
          Got it. Thank you.
        </h3>
        <p className="mt-4 text-[#a89f8f] font-light leading-relaxed">
          {files.length > 0
            ? "Your files are in. You'll get your lane tables back within 24 hours (working days)."
            : "We'll reach out within 24 hours to collect your RFQs and rate sheet."}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <FieldLabel>Name</FieldLabel>
          <input required name="name" placeholder="Rahul Mehta" className={inputClass} />
        </div>
        <div>
          <FieldLabel>Company</FieldLabel>
          <input required name="company" placeholder="Mehta Freight Pvt Ltd" className={inputClass} />
        </div>
        <div>
          <FieldLabel>Work Email</FieldLabel>
          <input required name="email" type="email" placeholder="rahul@mehtafreight.in" className={inputClass} />
        </div>
        <div>
          <FieldLabel optional>Phone / WhatsApp</FieldLabel>
          <input name="phone" type="tel" placeholder="+91 98xxx xxxxx" className={inputClass} />
        </div>
      </div>

      <div>
        <FieldLabel optional>RFQ files + rate sheet</FieldLabel>
        <label className="flex flex-col items-center justify-center gap-2 rounded-3xl border border-dashed border-white/15 bg-white/[0.02] px-6 py-10 text-center cursor-pointer hover:border-[#c8a86b]/50 transition-colors duration-300">
          <Paperclip size={20} className="text-[#c8a86b]" />
          <span className="text-[#f2ede3] text-sm">Click to attach Excel, CSV, PDF or email files</span>
          <span className="text-[#8a8175] text-xs font-light">Up to 4 MB in total. No files to hand? Submit anyway and we&apos;ll follow up.</span>
          <input
            type="file"
            name="files"
            multiple
            accept={ACCEPTED}
            className="sr-only"
            onChange={(e) => {
              addFiles(e.target.files);
              e.target.value = "";
            }}
          />
        </label>

        {files.length > 0 && (
          <ul className="mt-4 space-y-2">
            {files.map((f) => (
              <li
                key={f.name}
                className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm"
              >
                <span className="truncate text-[#f2ede3]">{f.name}</span>
                <span className="flex items-center gap-3 shrink-0 text-[#8a8175] text-xs">
                  {formatSize(f.size)}
                  <button
                    type="button"
                    aria-label={`Remove ${f.name}`}
                    onClick={() => setFiles((prev) => prev.filter((p) => p.name !== f.name))}
                    className="hover:text-[#f2ede3]"
                  >
                    <X size={14} />
                  </button>
                </span>
              </li>
            ))}
            <li className={`text-xs ${totalBytes > MAX_TOTAL_BYTES ? "text-red-500" : "text-[#8a8175]"}`}>
              {formatSize(totalBytes)} of 4 MB
            </li>
          </ul>
        )}
      </div>

      <div>
        <FieldLabel optional>Anything we should know</FieldLabel>
        <textarea
          name="message"
          rows={4}
          placeholder="e.g. Mostly Nhava Sheva / Mundra exports, FCL, we quote 20–30 RFQs a week"
          className={`${inputClass} rounded-3xl`}
        />
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}

      <div className="flex flex-col sm:flex-row sm:items-center gap-5 pt-2">
        <button
          type="submit"
          disabled={loading}
          className="group inline-flex items-center justify-center gap-2.5 px-10 py-5 rounded-full bg-[#c8a86b] text-[#171310] font-syne text-xs uppercase tracking-widest hover:bg-[#d8bd86] transition-all duration-300 disabled:opacity-50"
        >
          {loading ? "Sending..." : "Start my free pilot"}
          {!loading && (
            <ArrowUpRight
              size={16}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
            />
          )}
        </button>
        <p className="text-[#8a8175] text-xs font-light">
          Free, no obligation. Your files are used only for your pilot.
        </p>
      </div>
    </form>
  );
}
