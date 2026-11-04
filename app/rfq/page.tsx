import type { Metadata } from "next";
import { ArrowUpRight, Clock, FileSpreadsheet, Lock, Search, Trash2, UserCheck } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DemoDataNotice from "../components/DemoDataNotice";
import RfqPilotForm from "./RfqPilotForm";

export const metadata: Metadata = {
  title: "Free RFQ Pilot for Freight Forwarders — NordNeuron",
  description:
    "Send us 5 real RFQs and your rate sheet. Get back clean lane tables with suggested rates from your own history within 24 hours. Free for Indian forwarders and NVOCCs.",
  openGraph: {
    title: "Messy RFQ in. Priced lane table out. — NordNeuron",
    description:
      "Free pilot for freight forwarders: 5 real RFQs turned into clean lane tables with suggested rates from your own rate history, within 24 hours.",
    url: "https://nordneuron.com/rfq",
    siteName: "NordNeuron",
    type: "website",
  },
};

// Digits only, with country code, e.g. 919876543210. Button is hidden when unset.
const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "");
const WHATSAPP_TEXT = encodeURIComponent("Hi, I'd like to try the free RFQ pilot.");

const pains = [
  {
    icon: FileSpreadsheet,
    title: "Every RFQ arrives in a different shape",
    description:
      "Excel with merged cells, a PDF tender, lanes typed into an email body. Someone has to copy each one into your own format first.",
  },
  {
    icon: Search,
    title: "Last year's rate is buried somewhere",
    description:
      "Old quotes live in sent mail, carrier sheets and someone's desktop. Finding the nearest match for each lane eats the afternoon.",
  },
  {
    icon: Clock,
    title: "Slow quotes lose the booking",
    description:
      "The forwarder who replies first with a sensible number usually wins. Hours of copy-paste are hours your competitor is ahead.",
  },
];

// Illustrative only: shows the shape of input and output, not real rates.
const messyRows = [
  "NSA - JEA 2x20 GP gen cargo, ready 15th",
  "mundra/HAM 40'HC x 3 monthly",
  "MAA to PKG 1x20 (pls quote ASAP)",
  "TKD ICD > FXT 40ft — FOB",
  "CCU-CGP lcl 6 cbm, 2.1 t",
];

const cleanRows = [
  { pol: "Nhava Sheva", pod: "Jebel Ali", equip: "20GP × 2", rate: "$ 410", match: "Exact lane, Aug" },
  { pol: "Mundra", pod: "Hamburg", equip: "40HC × 3", rate: "$ 1,850", match: "Exact lane, Sep" },
  { pol: "Chennai", pod: "Port Klang", equip: "20GP × 1", rate: "$ 330", match: "Exact lane, Jul" },
  { pol: "ICD Tughlakabad", pod: "Felixstowe", equip: "40GP × 1", rate: "$ 2,050", match: "Via Nhava Sheva" },
  { pol: "Kolkata", pod: "Chittagong", equip: "LCL 6 cbm", rate: "$ 38 / cbm", match: "Nearest: Haldia" },
];

const steps = [
  {
    number: "01",
    title: "Send 5 real RFQs",
    description: "Any format: Excel, CSV, PDF or forwarded email. Add your current rate sheet or a few past quotes if you can.",
  },
  {
    number: "02",
    title: "We build your lane tables",
    description: "Every lane extracted into one clean format (POL, POD, equipment, volume), matched to the nearest rate in your own history.",
  },
  {
    number: "03",
    title: "Get it back within 24 hours",
    description: "Check our output against what your team would have quoted. If it saves time, we talk about running it every week.",
  },
];

const trust = [
  {
    icon: Lock,
    title: "Your rates stay yours",
    description: "Each customer's data is kept separate. Your rates are never shown to or used for anyone else.",
  },
  {
    icon: Trash2,
    title: "Delete on request",
    description: "Ask and we delete your files after the pilot. One email is enough.",
  },
  {
    icon: UserCheck,
    title: "A person checks every output",
    description: "During the pilot every lane table is reviewed by hand before it reaches you.",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <div className="w-12 h-px bg-gradient-to-r from-[#c8a86b] to-transparent" />
      <span className="text-[#8a8175] font-syne text-[10px] uppercase tracking-[0.3em]">{children}</span>
    </div>
  );
}

export default function RfqPilotPage() {
  return (
    <main className="min-h-screen bg-[#0c0b0a] text-[#efe9df] overflow-hidden">
      <Navbar />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-40 pb-28">

        {/* Hero */}
        <section className="max-w-4xl">
          <SectionLabel>For freight forwarders &amp; NVOCCs</SectionLabel>

          <h1 className="text-4xl md:text-7xl font-bold font-syne uppercase tracking-tight text-[#f2ede3] leading-[0.95]">
            Messy RFQ in.
            <br />
            <span className="text-[#c8a86b]">Priced lane table out.</span>
          </h1>

          <p className="mt-8 text-[#a89f8f] text-base md:text-xl leading-relaxed font-light max-w-2xl">
            Turn any RFQ file into a clean lane table with suggested rates from your own
            history, in minutes instead of hours. Try it free on 5 of your real RFQs.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#pilot"
              className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#c8a86b] text-[#171310] font-syne text-xs uppercase tracking-widest hover:bg-[#d8bd86] transition-all duration-300"
            >
              Send 5 RFQs, free
              <ArrowUpRight size={16} />
            </a>
            {WHATSAPP_NUMBER && (
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_TEXT}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full border border-white/15 text-[#f2ede3] font-syne text-xs uppercase tracking-widest hover:border-[#c8a86b]/50 transition-all duration-300"
              >
                <FaWhatsapp size={16} />
                Send on WhatsApp
              </a>
            )}
          </div>
        </section>

        {/* Pain */}
        <section className="mt-32">
          <SectionLabel>The problem</SectionLabel>
          <div className="grid md:grid-cols-3 gap-6">
            {pains.map(({ icon: Icon, title, description }) => (
              <div key={title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
                <Icon size={20} className="text-[#c8a86b]" />
                <h2 className="mt-5 text-[#f2ede3] font-syne font-bold text-lg tracking-tight">{title}</h2>
                <p className="mt-3 text-[#8a8175] text-sm font-light leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Before / after */}
        <section className="mt-32">
          <SectionLabel>Before &amp; after</SectionLabel>
          <h2 className="text-3xl md:text-5xl font-bold font-syne uppercase tracking-tight text-[#f2ede3] leading-tight max-w-3xl">
            Five lanes, five formats. One clean table.
          </h2>
          <div className="mt-6">
            <DemoDataNotice compact />
          </div>

          <div className="grid lg:grid-cols-12 gap-6 items-stretch">
            <div className="lg:col-span-4 rounded-3xl border border-white/10 bg-white/[0.02] p-6">
              <div className="text-[11px] font-syne uppercase tracking-widest text-[#8a8175] mb-4">
                What arrives
              </div>
              <ul className="space-y-3 font-mono text-[13px] text-[#a89f8f]">
                {messyRows.map((row) => (
                  <li key={row} className="rounded-xl border border-white/[0.06] bg-black/20 px-4 py-3">
                    {row}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-8 rounded-3xl border border-[#c8a86b]/30 bg-[#c8a86b]/[0.04] p-6 overflow-x-auto">
              <div className="text-[11px] font-syne uppercase tracking-widest text-[#c8a86b] mb-4">
                What you get back
              </div>
              <table className="w-full min-w-[560px] text-sm">
                <thead>
                  <tr className="text-left text-[11px] uppercase tracking-widest text-[#8a8175]">
                    <th className="pb-3 font-normal">POL</th>
                    <th className="pb-3 font-normal">POD</th>
                    <th className="pb-3 font-normal">Equipment</th>
                    <th className="pb-3 font-normal text-right">Suggested rate</th>
                    <th className="pb-3 font-normal pl-6">Based on</th>
                  </tr>
                </thead>
                <tbody>
                  {cleanRows.map((r) => (
                    <tr key={r.pol + r.pod} className="border-t border-white/[0.06] text-[#f2ede3]">
                      <td className="py-3">{r.pol}</td>
                      <td className="py-3">{r.pod}</td>
                      <td className="py-3 text-[#a89f8f]">{r.equip}</td>
                      <td className="py-3 text-right font-semibold">{r.rate}</td>
                      <td className="py-3 pl-6 text-[#8a8175] text-xs">{r.match}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* How the pilot works */}
        <section className="mt-32">
          <SectionLabel>How the free pilot works</SectionLabel>
          <div className="grid md:grid-cols-3 gap-10">
            {steps.map((step) => (
              <div key={step.number}>
                <span className="text-[#c8a86b] font-syne text-sm font-bold tracking-widest">{step.number}</span>
                <h3 className="mt-3 text-[#f2ede3] font-syne font-bold text-xl uppercase tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-3 text-[#8a8175] text-sm font-light leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Trust + founder */}
        <section className="mt-32 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <SectionLabel>Your data</SectionLabel>
            <div className="space-y-6">
              {trust.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex gap-5">
                  <Icon size={20} className="text-[#c8a86b] shrink-0 mt-1" />
                  <div>
                    <h3 className="text-[#f2ede3] font-syne font-bold text-base tracking-tight">{title}</h3>
                    <p className="mt-1 text-[#8a8175] text-sm font-light leading-relaxed">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 rounded-3xl border border-white/10 bg-white/[0.03] p-8 self-start">
            <div className="text-[11px] font-syne uppercase tracking-widest text-[#8a8175]">Who&apos;s behind this</div>
            <p className="mt-5 text-[#f2ede3] font-syne text-xl leading-snug">
              &ldquo;I spent 5 years in freight analytics at BDP and DB Schenker building RFQ and
              rate-comparison tools. This is the tool I wished smaller forwarders had.&rdquo;
            </p>
            <p className="mt-5 text-[#8a8175] text-sm">Pankaj, founder, NordNeuron</p>
          </div>
        </section>

        {/* Pilot form */}
        <section id="pilot" className="mt-32 scroll-mt-32 grid lg:grid-cols-12 gap-14 items-start">
          <div className="lg:col-span-4">
            <SectionLabel>Start the pilot</SectionLabel>
            <h2 className="text-3xl md:text-5xl font-bold font-syne uppercase tracking-tight text-[#f2ede3] leading-tight">
              Try it on 5 real RFQs.
            </h2>
            <p className="mt-6 text-[#8a8175] font-light leading-relaxed">
              Free and no obligation. Attach your files now, or just leave your details and
              we&apos;ll collect them on a call or WhatsApp.
            </p>
            <p className="mt-6 text-[#8a8175] text-sm font-light">
              Prefer email?{" "}
              <a href="mailto:contact@nordneuron.com?subject=RFQ%20pilot" className="text-[#c8a86b] hover:text-[#d8bd86]">
                contact@nordneuron.com
              </a>
            </p>
          </div>
          <div className="lg:col-span-8">
            <RfqPilotForm />
          </div>
        </section>

      </div>
      <Footer />
    </main>
  );
}
