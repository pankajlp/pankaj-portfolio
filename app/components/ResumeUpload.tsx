"use client";

import { useRef, useState } from "react";

export default function ResumeUpload({
  onText,
}: {
  onText: (text: string) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState<
    { kind: "idle" | "loading" | "done" | "error"; msg?: string }
  >({ kind: "idle" });

  async function handleFile(file: File) {
    setStatus({ kind: "loading", msg: `Reading ${file.name}…` });
    try {
      const fd = new FormData();
      fd.append("file", file);
      const res = await fetch("/api/extract-resume", {
        method: "POST",
        body: fd,
      });
      const data = await res.json();
      if (!res.ok) {
        setStatus({ kind: "error", msg: data.error || "Couldn't read that file." });
        return;
      }
      onText(data.text);
      setStatus({
        kind: "done",
        msg: `Loaded ${data.filename} (${data.chars.toLocaleString()} characters). Review below, then continue.`,
      });
    } catch {
      setStatus({ kind: "error", msg: "Upload failed. Please try again or paste the text." });
    }
  }

  return (
    <div className="rounded-2xl border border-dashed border-stone-300 bg-white/60 px-5 py-4">
      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={status.kind === "loading"}
          className="inline-flex items-center px-5 py-2.5 rounded-full bg-stone-900 text-white font-syne text-[10px] uppercase tracking-widest hover:bg-black transition-all disabled:opacity-50"
        >
          {status.kind === "loading" ? "Reading…" : "Upload PDF / DOCX / TXT"}
        </button>
        <span className="text-stone-400 text-sm">or paste your resume below</span>
        <input
          ref={inputRef}
          type="file"
          accept=".pdf,.docx,.txt,.md,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document,text/plain"
          className="hidden"
          onChange={(e) => {
            const f = e.target.files?.[0];
            if (f) handleFile(f);
            e.target.value = "";
          }}
        />
      </div>
      {status.msg && (
        <p
          className={`mt-3 text-sm ${
            status.kind === "error"
              ? "text-red-600"
              : status.kind === "done"
              ? "text-emerald-700"
              : "text-stone-500"
          }`}
        >
          {status.msg}
        </p>
      )}
    </div>
  );
}
