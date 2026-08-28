import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  FileSpreadsheet,
  Calculator,
  Boxes,
  Search,
  Timer,
  Ship,
  GitBranch,
  Database,
  Server,
  Layers,
} from "lucide-react";

const LIVE_URL = "https://pankajlp.github.io/nordneuron_logistics_AI/";
const REPO_URL = "https://github.com/pankajlp/nordneuron_logistics_AI";

export const metadata: Metadata = {
  title: "NordNeuron Logistics AI Suite — Runnable Full-Stack App",
  description:
    "A runnable logistics intelligence suite: multi-format RFQ extraction, freight calculation, 3D container load planning, HS-code lookup, demurrage risk, and ETA prediction. FastAPI + SQLite backend with a self-contained SPA.",
};

const modules = [
  {
    icon: FileSpreadsheet,
    title: "RFQ Analyzer",
    description:
      "Extracts tables and form fields from Excel, Word, PDF, and CSV documents and maps arbitrary headers onto a 46-column canonical ocean-freight RFQ schema.",
  },
  {
    icon: Calculator,
    title: "Freight Calculator",
    description:
      "Computes ocean freight, surcharges (BAF/CAF/THC), profit margins, and a live historical spot-vs-contract rate comparison.",
  },
  {
    icon: Boxes,
    title: "Container Load Planner",
    description:
      "Real-time 3D bin-packing with a translucent Three.js container, space utilisation, and forward/aft weight balance.",
  },
  {
    icon: Search,
    title: "HS Code Finder",
    description:
      "Fuzzy customs classification search returning HS codes, duty and VAT rates, restricted statuses, and compliance notes.",
  },
  {
    icon: Timer,
    title: "Demurrage Calculator",
    description:
      "Audits free days and cumulative late charges, auto-calibrating allowances from an uploaded history of past payments.",
  },
  {
    icon: Ship,
    title: "ETA Predictor",
    description:
      "Streams simulated AIS telemetry and marine forecasts to project arrival dates and confidence under changing sea conditions.",
  },
];

const architecture = [
  {
    icon: Server,
    title: "FastAPI backend",
    description:
      "One router per module with pure calculation services. Auto-seeds dummy data on startup; Swagger UI at /docs.",
  },
  {
    icon: Layers,
    title: "Multi-format extractor",
    description:
      "openpyxl + python-docx + pdfplumber feed key-value and tabular strategies that resolve real-world headers to standard columns.",
  },
  {
    icon: Database,
    title: "Swappable data layer",
    description:
      "SQLite via SQLAlchemy by default — point NORDNEURON_DATABASE_URL at any database to replace the seeded dummy data with real data.",
  },
];

const stack = [
  "FastAPI",
  "SQLAlchemy",
  "SQLite",
  "pdfplumber",
  "python-docx",
  "openpyxl",
  "Vanilla JS SPA",
  "Three.js",
  "Chart.js",
  "Docker Compose",
];

export default function NordNeuronLogisticsPage() {
  return (
    <main className="min-h-screen bg-[#f5f4f0] text-[#1c1917]">
      {/* Sticky sub-navbar */}
      <div className="sticky top-0 z-50 border-b border-stone-200 bg-[#f5f4f0]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-8 h-[88px] flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-stone-500 hover:text-stone-900 transition-colors">
              ← Back
            </Link>
            <div className="w-px h-5 bg-stone-200" />
            <div>
              <h1 className="text-stone-900 font-medium">NordNeuron Logistics AI Suite</h1>
              <p className="text-xs text-stone-400">Runnable Full-Stack App</p>
            </div>
          </div>
          <div className="flex items-center gap-3 px-4 py-2 rounded-full border border-stone-200 bg-stone-100/50 text-stone-900 text-sm">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Live Demo
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="relative max-w-7xl mx-auto px-8 py-16 md:py-24">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-stone-900/5 blur-[180px] rounded-full pointer-events-none" />
        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-stone-300 text-stone-500 font-syne text-[10px] uppercase tracking-widest mb-8">
            Logistics Intelligence · Full-Stack
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold font-syne uppercase tracking-tight leading-[0.95]">
            Ocean freight ops,<br />
            <span className="text-stone-400">end to end.</span>
          </h2>
          <p className="mt-8 text-stone-600 text-lg md:text-xl leading-relaxed max-w-2xl font-light">
            Six logistics modules behind one dashboard — from parsing a messy tender
            spreadsheet into a structured RFQ, to pricing the lane, packing the box in
            3D, and predicting the vessel&apos;s arrival. Backed by a real FastAPI
            service, and runnable in one command.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={LIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-stone-900 text-white font-medium hover:bg-black transition-colors"
            >
              Launch Live App
              <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-stone-300 text-stone-900 font-medium hover:border-stone-900 transition-colors"
            >
              <GitBranch size={18} />
              View Source
            </a>
          </div>
          <p className="mt-4 text-xs text-stone-400">
            The live demo runs fully standalone in your browser. Clone the repo to run the
            FastAPI backend and real document extractor locally.
          </p>
        </div>
      </section>

      {/* Modules */}
      <section className="max-w-7xl mx-auto px-8 pb-8">
        <div className="border-t border-stone-200 pt-14">
          <h3 className="text-2xl md:text-3xl font-bold font-syne uppercase tracking-tight mb-10">
            Six modules
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {modules.map((m) => (
              <div
                key={m.title}
                className="group rounded-2xl border border-stone-200 bg-white/60 p-7 hover:border-stone-900 transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-stone-900 text-white flex items-center justify-center mb-5">
                  <m.icon size={20} />
                </div>
                <h4 className="font-syne font-bold text-lg mb-2">{m.title}</h4>
                <p className="text-stone-600 text-sm leading-relaxed font-light">{m.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="max-w-7xl mx-auto px-8 py-8">
        <div className="border-t border-stone-200 pt-14">
          <h3 className="text-2xl md:text-3xl font-bold font-syne uppercase tracking-tight mb-10">
            Architecture
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {architecture.map((a) => (
              <div key={a.title} className="rounded-2xl border border-stone-200 bg-white/60 p-7">
                <div className="w-11 h-11 rounded-xl bg-stone-100 text-stone-900 flex items-center justify-center mb-5">
                  <a.icon size={20} />
                </div>
                <h4 className="font-syne font-bold text-lg mb-2">{a.title}</h4>
                <p className="text-stone-600 text-sm leading-relaxed font-light">{a.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Run locally */}
      <section className="max-w-7xl mx-auto px-8 py-8">
        <div className="border-t border-stone-200 pt-14 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold font-syne uppercase tracking-tight mb-4">
              Run it yourself
            </h3>
            <p className="text-stone-600 leading-relaxed font-light mb-6">
              The full stack — SPA, FastAPI backend, seeded SQLite database, and the real
              multi-format RFQ extractor — starts with a single command. The API serves
              interactive docs at <span className="font-mono text-stone-900">localhost:8000/docs</span>.
            </p>
            <div className="flex flex-wrap gap-2">
              {stack.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1.5 rounded-full border border-stone-300 text-stone-600 text-xs font-mono"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-stone-800 bg-[#0f0e0d] p-6 font-mono text-sm text-stone-300 overflow-x-auto">
            <div className="text-stone-500"># clone and launch the full stack</div>
            <div className="mt-2">
              <span className="text-emerald-400">git</span> clone {REPO_URL}.git
            </div>
            <div>
              <span className="text-emerald-400">cd</span> nordneuron_logistics_AI
            </div>
            <div>
              <span className="text-emerald-400">docker</span> compose up --build
            </div>
            <div className="mt-4 text-stone-500"># app → localhost:8080 · api → localhost:8000/docs</div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="border-t border-stone-200 pt-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <a
            href={LIVE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 text-3xl md:text-5xl font-bold font-syne uppercase tracking-tight hover:text-stone-500 transition-colors"
          >
            Open the live app
            <ArrowUpRight
              size={40}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
          <Link href="/" className="text-stone-500 hover:text-stone-900 transition-colors">
            ← Back to all work
          </Link>
        </div>
      </section>
    </main>
  );
}
