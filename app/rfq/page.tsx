import type { Metadata } from "next";
import { FaWhatsapp } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DemoDataNotice from "../components/DemoDataNotice";
import RfqPilotForm from "./RfqPilotForm";
import { sampleLanes as cleanRows } from "../lib/lanes";

export const metadata: Metadata = {
  title: "Free RFQ Pilot for Freight Forwarders | NordNeuron",
  description:
    "Send us 5 real RFQs and your rate sheet. Get back clean lane tables with suggested rates from your own history within 24 hours. Free for Indian forwarders and NVOCCs.",
  openGraph: {
    title: "Messy RFQ in. Priced lane table out. | NordNeuron",
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
    title: "Every RFQ arrives in a different shape",
    description:
      "Excel with merged cells, a PDF tender, lanes typed into an email body. Someone has to copy each one into your own format first.",
  },
  {
    title: "Last year's rate is buried somewhere",
    description:
      "Old quotes live in sent mail, carrier sheets and someone's desktop. Finding the nearest match for each lane eats the afternoon.",
  },
  {
    title: "Slow quotes lose the booking",
    description:
      "The forwarder who replies first with a sensible number usually wins. Hours of copy-paste are hours your competitor is ahead.",
  },
];

const steps = [
  {
    title: "Send 5 real RFQs",
    description: "Any format: Excel, CSV, PDF or forwarded email. Add your current rate sheet or a few past quotes if you can.",
  },
  {
    title: "We build your lane tables",
    description: "Every lane extracted into one clean format (POL, POD, equipment, volume), matched to the nearest rate in your own history.",
  },
  {
    title: "Get it back within 24 hours",
    description: "Check our output against what your team would have quoted. If it saves time, we talk about running it every week.",
  },
];

const trust = [
  {
    title: "Your rates stay yours",
    description: "Each customer's data is kept separate. Your rates are never shown to or used for anyone else.",
  },
  {
    title: "Delete on request",
    description: "Ask and we delete your files after the pilot. One email is enough.",
  },
  {
    title: "A person checks every output",
    description: "During the pilot every lane table is reviewed by hand before it reaches you.",
  },
];

export default function RfqPilotPage() {
  return (
    <>
      <Navbar />
      <main id="main" className="bg-paper text-ink pt-[var(--nav-h)]">

        {/* Hero: a banner, so the lane table starts above the fold */}
        <section className="wrap pt-20 pb-14 md:pt-24 md:pb-16">
          <h1 className="max-w-[16ch]">Messy RFQ in. Priced lane table out.</h1>
          <p className="lead mt-6 text-ink-2">
            Any RFQ file becomes a clean lane table with suggested rates from your own history. Try it free on 5 of your real RFQs.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#pilot" className="btn">Send 5 RFQs, free</a>
            {WHATSAPP_NUMBER && (
              <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_TEXT}`} target="_blank" rel="noopener noreferrer" className="btn btn-quiet">
                <FaWhatsapp size={16} aria-hidden="true" />
                Send on WhatsApp
              </a>
            )}
          </div>
        </section>

        {/* Before and after: each messy line beside the row it becomes */}
        <section className="band py-16 md:py-20">
          <div className="wrap">
            <div className="grid grid-cols-1 gap-x-[var(--gap-columns)] gap-y-4 lg:grid-cols-12 lg:items-end mb-10">
              <h2 className="lg:col-span-7">Five lanes, five formats. One clean table.</h2>
              <div className="lg:col-span-5"><DemoDataNotice compact /></div>
            </div>
            <ul className="md:hidden rows m-0 p-0 list-none">
              {cleanRows.map((r) => (
                <li key={r.pol + r.pod} className="py-5">
                  <p className="m-0 text-muted text-sm"><code>{r.raw}</code></p>
                  <p className="m-0 mt-2 font-semibold">{r.pol} to {r.pod}, {r.equip}</p>
                  <p className="m-0 mt-1"><span className="font-semibold text-accent-2">{r.rate}</span> <span className="text-ink-2 text-sm">({r.match})</span></p>
                </li>
              ))}
            </ul>
            <div className="hidden md:block overflow-x-auto" tabIndex={0} role="region" aria-label="Sample RFQ lines and the lane table they become">
              <table className="ledger min-w-[880px]">
                <thead>
                  <tr>
                    <th>What arrives</th>
                    <th>POL</th>
                    <th>POD</th>
                    <th>Equipment</th>
                    <th className="n">Suggested rate</th>
                    <th>Based on</th>
                  </tr>
                </thead>
                <tbody>
                  {cleanRows.map((r) => (
                    <tr key={r.pol + r.pod}>
                      <td className="text-muted"><code>{r.raw}</code></td>
                      <td className="font-semibold">{r.pol}</td>
                      <td className="font-semibold">{r.pod}</td>
                      <td className="text-ink-2">{r.equip}</td>
                      <td className="n font-semibold text-accent-2">{r.rate}</td>
                      <td className="text-ink-2">{r.match}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* The problem */}
        <section className="section">
          <div className="wrap grid grid-cols-1 gap-x-[var(--gap-columns)] gap-y-10 lg:grid-cols-12">
            <h2 className="lg:col-span-4">The problem</h2>
            <div className="rows lg:col-span-8">
              {pains.map(({ title, description }) => (
                <div key={title} className="py-7">
                  <h3>{title}</h3>
                  <p className="text-ink-2 mt-2 m-0 max-w-[60ch]">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How the pilot works */}
        <section className="section border-t border-rule">
          <div className="wrap">
            <h2 className="mb-12">How the free pilot works</h2>
            <ol className="m-0 p-0 list-none grid grid-cols-1 gap-[var(--gap-columns)] md:grid-cols-3 [counter-reset:step]">
              {steps.map((step) => (
                <li key={step.title} className="border-t border-rule-2 pt-6 [counter-increment:step] before:content-[counter(step)] before:block before:font-display before:text-[length:var(--text-display-s)] before:leading-none before:text-accent before:mb-5">
                  <h3>{step.title}</h3>
                  <p className="text-ink-2 mt-3 m-0">{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Your data, and who is behind it */}
        <section className="section band">
          <div className="wrap grid grid-cols-1 gap-x-[var(--gap-columns)] gap-y-14 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <h2 className="mb-8">Your data</h2>
              <div className="rows">
                {trust.map(({ title, description }) => (
                  <div key={title} className="py-6">
                    <h3>{title}</h3>
                    <p className="text-ink-2 mt-2 m-0">{description}</p>
                  </div>
                ))}
              </div>
            </div>
            <figure className="lg:col-span-5 lg:col-start-8 m-0 self-center">
              <blockquote className="m-0 font-display text-2xl md:text-3xl leading-snug text-ink">
                &ldquo;I spent 5 years in freight analytics at BDP and DB Schenker building RFQ and
                rate-comparison tools. This is the tool I wished smaller forwarders had.&rdquo;
              </blockquote>
              <figcaption className="meta mt-6">Pankaj, founder, NordNeuron</figcaption>
            </figure>
          </div>
        </section>

        {/* Pilot form: the page ends on what the visitor came to do */}
        <section id="pilot" className="section scroll-mt-[var(--nav-h)]">
          <div className="wrap grid grid-cols-1 gap-x-[var(--gap-columns)] gap-y-10 lg:grid-cols-12 items-start">
            <div className="lg:col-span-4">
              <h2>Try it on 5 real RFQs.</h2>
              <p className="text-ink-2 mt-6 m-0">
                Free and no obligation. Attach your files now, or just leave your details and
                we&rsquo;ll collect them on a call or WhatsApp.
              </p>
              <p className="text-ink-2 mt-6 m-0">
                Prefer email?{" "}
                <a href="mailto:contact@nordneuron.com?subject=RFQ%20pilot" className="link">contact@nordneuron.com</a>
              </p>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <RfqPilotForm />
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
