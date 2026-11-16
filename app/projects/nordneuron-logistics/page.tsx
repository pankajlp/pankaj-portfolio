import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
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

const LIVE_URL = "https://nordneuron.github.io/nordneuron_logistics_AI/";
const REPO_URL = "https://github.com/NordNeuron/nordneuron_logistics_AI";

export const metadata: Metadata = {
  title: "NordNeuron Logistics AI Suite | Runnable Full-Stack App",
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
      "SQLite via SQLAlchemy by default, point NORDNEURON_DATABASE_URL at any database to replace the seeded dummy data with real data.",
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
    <main id="main" className="min-h-dvh bg-paper text-ink pt-[var(--nav-h)]">
      {/* Sticky sub-navbar */}
      <Navbar />

      {/* Hero */}
      <section className="relative wrap py-16 md:py-24">
        <div className="relative z-10 max-w-4xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium leading-[0.95]">
            Ocean freight ops,<br />
            <span className="text-muted">end to end.</span>
          </h2>
          <p className="mt-8 text-ink-2 text-lg md:text-xl leading-relaxed max-w-2xl">
            Six logistics modules behind one dashboard, from parsing a messy tender
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
              className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-accent text-accent-ink font-medium hover:bg-accent-2 transition-colors"
            >
              Launch Live App
              <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-rule-2 text-ink font-medium hover:border-rule-2 transition-colors"
            >
              <GitBranch size={18} />
              View Source
            </a>
          </div>
          <p className="mt-4 text-xs text-muted">
            The live demo runs fully standalone in your browser. Clone the repo to run the
            FastAPI backend and real document extractor locally.
          </p>
        </div>
      </section>

      {/* Modules */}
      <section className="wrap pb-8">
        <div className="border-t border-rule-2 pt-14">
          <h3 className="text-2xl md:text-3xl font-display font-medium mb-10">
            Six modules
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {modules.map((m) => (
              <div
                key={m.title}
                className="group rounded-card border border-rule-2 bg-paper-2 p-7 hover:border-rule-2 transition-colors"
              >
                <div className="w-11 h-11 rounded-control bg-accent text-accent-ink flex items-center justify-center mb-5">
                  <m.icon size={20} />
                </div>
                <h4 className="font-display font-medium text-lg mb-2">{m.title}</h4>
                <p className="text-ink-2 text-sm leading-relaxed">{m.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="wrap py-8">
        <div className="border-t border-rule-2 pt-14">
          <h3 className="text-2xl md:text-3xl font-display font-medium mb-10">
            Architecture
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {architecture.map((a) => (
              <div key={a.title} className="rounded-card border border-rule-2 bg-paper-2 p-7">
                <div className="w-11 h-11 rounded-control bg-paper-3 text-ink flex items-center justify-center mb-5">
                  <a.icon size={20} />
                </div>
                <h4 className="font-display font-medium text-lg mb-2">{a.title}</h4>
                <p className="text-ink-2 text-sm leading-relaxed">{a.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Run locally */}
      <section className="wrap py-8">
        <div className="border-t border-rule-2 pt-14 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 items-start">
          <div>
            <h3 className="text-2xl md:text-3xl font-display font-medium mb-4">
              Run it yourself
            </h3>
            <p className="text-ink-2 leading-relaxed mb-6">
              The full stack, SPA, FastAPI backend, seeded SQLite database, and the real
              multi-format RFQ extractor, starts with a single command. The API serves
              interactive docs at <span className="text-ink">localhost:8000/docs</span>.
            </p>
            <div className="flex flex-wrap gap-2">
              {stack.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1.5 rounded-full border border-rule-2 text-ink-2 text-xs "
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-card border border-rule-2 bg-paper p-6 text-sm text-muted overflow-x-auto">
            <div className="text-muted"># clone and launch the full stack</div>
            <div className="mt-2">
              <span className="text-success">git</span> clone {REPO_URL}.git
            </div>
            <div>
              <span className="text-success">cd</span> nordneuron_logistics_AI
            </div>
            <div>
              <span className="text-success">docker</span> compose up --build
            </div>
            <div className="mt-4 text-muted"># app localhost:8080, api localhost:8000/docs</div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="wrap py-20">
        <div className="border-t border-rule-2 pt-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <a
            href={LIVE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 text-3xl md:text-4xl font-display font-medium hover:text-muted transition-colors"
          >
            Open the live app
            <ArrowUpRight
              size={40}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
          <Link href="/" className="text-muted hover:text-ink transition-colors">
            ← Back to all work
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
