import Link from "next/link";

// A real sequence, so the numbers carry meaning.
const steps = [
  { title: "Send 5 real RFQs", description: "Excel, CSV, PDF or a forwarded email, plus your rate sheet or a few past quotes." },
  { title: "We build your lane tables", description: "Every lane in one format (POL, POD, equipment, volume), priced from the nearest match in your history." },
  { title: "Compare within 24 hours", description: "Check the numbers against what your team would have quoted. Keep using it only if it saves time." },
];

export default function PilotSteps() {
  return (
    <section id="pilot-steps" className="section band scroll-mt-[var(--nav-h)]">
      <div className="wrap">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <h2>The free pilot, in three steps</h2>
          <Link href="/rfq" className="link">Read the full pilot details</Link>
        </div>
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
  );
}
