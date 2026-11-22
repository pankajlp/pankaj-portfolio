"use client";

import { useEffect, useRef, useState } from "react";
import { Paperclip, X } from "lucide-react";

// Vercel caps a function request body at 4.5 MB; stay safely under it.
const MAX_TOTAL_BYTES = 4 * 1024 * 1024;
const ACCEPTED = ".xlsx,.xls,.csv,.pdf,.docx,.doc,.eml,.msg,.txt";

const inputClass = "w-full";

function FieldLabel({ children, optional, htmlFor }: { children: React.ReactNode; optional?: boolean; htmlFor: string }) {
  return (
    <label htmlFor={htmlFor} className="label block mb-2">
      {children}
      {optional && <span className="ml-2">(optional)</span>}
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
  const [dragging, setDragging] = useState(false);
  const doneRef = useRef<HTMLHeadingElement | null>(null);

  // Move focus to the confirmation so keyboard and screen-reader users hear it.
  useEffect(() => {
    if (submitted) doneRef.current?.focus();
  }, [submitted]);

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
        setError(result.message || "Your request didn't go through. Try again, or email contact@nordneuron.com.");
      }
    } catch (err) {
      console.error(err);
      setError("Couldn't reach the server. Check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div role="status" className="border-l-2 border-accent pl-6 py-2">
        <h3 ref={doneRef} tabIndex={-1} className="text-3xl outline-none">
          Got it. Thank you.
        </h3>
        <p className="mt-4 text-ink-2">
          {files.length > 0
            ? "Your files are in. You'll get your lane tables back within 24 hours (working days)."
            : "We'll reach out within 24 hours to collect your RFQs and rate sheet."}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <FieldLabel htmlFor="pilot-name">Name</FieldLabel>
          <input id="pilot-name" required name="name" autoComplete="name" placeholder="Rahul Mehta" className={inputClass} />
        </div>
        <div>
          <FieldLabel htmlFor="pilot-company">Company</FieldLabel>
          <input id="pilot-company" required name="company" autoComplete="organization" placeholder="Mehta Freight Pvt Ltd" className={inputClass} />
        </div>
        <div>
          <FieldLabel htmlFor="pilot-email">Work email</FieldLabel>
          <input id="pilot-email" required name="email" type="email" autoComplete="email" inputMode="email" placeholder="rahul@mehtafreight.in" className={inputClass} />
        </div>
        <div>
          <FieldLabel htmlFor="pilot-phone" optional>Phone or WhatsApp</FieldLabel>
          <input id="pilot-phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" placeholder="+91 98xxx xxxxx" className={inputClass} />
        </div>
      </div>

      <div>
        <FieldLabel htmlFor="pilot-files" optional>RFQ files and rate sheet</FieldLabel>
        <label
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
          onDrop={(e) => { e.preventDefault(); setDragging(false); addFiles(e.dataTransfer.files); }}
          className={`flex flex-col items-center justify-center gap-2 rounded-card border border-dashed px-6 py-10 text-center cursor-pointer hover:bg-paper-3 focus-within:outline-2 focus-within:outline-focus focus-within:outline-offset-2 transition-colors duration-200 ${dragging ? "border-accent bg-accent-wash" : "border-muted bg-paper-2"}`}
        >
          <Paperclip size={20} className="text-accent" aria-hidden="true" />
          <span className="text-ink text-sm">Drop files here, or click to choose: Excel, CSV, PDF, Word or saved emails</span>
          <span className="text-muted text-xs">Up to 4 MB in total. No files to hand? Submit anyway and we&apos;ll follow up.</span>
          <input
            id="pilot-files"
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
                className="flex items-center justify-between gap-4 rounded-card border border-rule-2 bg-paper-2 px-4 py-2.5 text-sm"
              >
                <span className="truncate text-ink">{f.name}</span>
                <span className="flex items-center gap-3 shrink-0 text-muted text-xs">
                  {formatSize(f.size)}
                  <button
                    type="button"
                    aria-label={`Remove ${f.name}`}
                    onClick={() => setFiles((prev) => prev.filter((p) => p.name !== f.name))}
                    className="inline-flex items-center justify-center w-11 h-11 -my-3 text-muted hover:text-ink active:text-accent"
                  >
                    <X size={14} aria-hidden="true" />
                  </button>
                </span>
              </li>
            ))}
            <li className={`text-xs ${totalBytes > MAX_TOTAL_BYTES ? "text-error" : "text-muted"}`} aria-live="polite">
              {formatSize(totalBytes)} of 4 MB
              {totalBytes > MAX_TOTAL_BYTES && ". Remove a file, or email the larger ones to contact@nordneuron.com."}
            </li>
          </ul>
        )}
      </div>

      <div>
        <FieldLabel htmlFor="pilot-message" optional>Anything we should know</FieldLabel>
        <textarea
          id="pilot-message"
          name="message"
          rows={4}
          placeholder="e.g. Mostly Nhava Sheva / Mundra exports, FCL, we quote 20 to 30 RFQs a week"
          className={inputClass}
        />
      </div>

      {error && <p role="alert" className="text-error text-sm m-0">{error}</p>}

      <div className="flex flex-col sm:flex-row sm:items-center gap-5 pt-2">
        <button
          type="submit"
          disabled={loading}
          className="btn" aria-busy={loading}
        >
          {loading ? "Sending…" : "Start my free pilot"}
          </button>
        <p className="meta m-0">
          Free, no obligation. Your files are used only for your pilot.
        </p>
      </div>
    </form>
  );
}
