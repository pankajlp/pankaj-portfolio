import Link from "next/link";
import { sampleLanes } from "../lib/lanes";

// The hero opens on the thing a pricing desk recognises: RFQ lines typed the
// way they arrive, each resolving into the priced lane row it becomes. That
// resolve is the page's one piece of unprompted motion (CSS only, and it
// renders the finished table straight away under reduced motion).
export default function Hero() {
  return (
    <section className="border-b border-rule pt-[var(--nav-h)]">
      <div className="wrap grid grid-cols-1 gap-x-[var(--gap-columns)] gap-y-12 py-16 md:py-20 lg:grid-cols-12 lg:items-center lg:py-24">
        <div className="lg:col-span-5">
          <h1 className="max-w-[14ch] text-[length:clamp(2.75rem,3.4vw+1rem,4.5rem)] leading-[1.02]">
            Every RFQ, priced from your own rates.
          </h1>
          <p className="lead mt-6 text-ink-2">
            Excel, PDF or a line in an email: NordNeuron turns it into a clean lane table and matches
            each lane to the nearest rate in your history. Built for Indian forwarders and NVOCCs.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/rfq#pilot" className="btn">Try it free on 5 RFQs</Link>
            <Link href="/rfq" className="btn btn-quiet">How the pilot works</Link>
          </div>
          <p className="meta mt-5">Lane tables back within 24 hours. Your rates are never shared.</p>
        </div>

        <figure className="m-0 lg:col-span-7">
          <div className="panel overflow-hidden">
            <div className="flex items-baseline justify-between gap-4 border-b border-rule px-5 py-3">
              <p className="m-0 text-sm font-semibold text-ink">Inbox to lane table</p>
              <p className="m-0 text-xs text-accent">Illustrative data</p>
            </div>
            <ol className="m-0 list-none p-0">
              {sampleLanes.map((lane, i) => (
                <li
                  key={lane.raw}
                  className="grid grid-cols-1 gap-x-6 gap-y-2 border-b border-rule px-5 py-4 last:border-b-0 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]"
                  style={{ ["--i" as string]: i }}
                >
                  <code className="self-center text-[0.8125rem] leading-snug text-muted">{lane.raw}</code>
                  <div className="lane-resolve flex flex-col gap-1">
                    <span className="text-sm text-ink">
                      <span className="font-semibold">{lane.pol}</span>
                      <span className="text-muted"> to </span>
                      <span className="font-semibold">{lane.pod}</span>
                      <span className="text-ink-2">, {lane.equip}</span>
                    </span>
                    <span className="text-sm tabular-nums">
                      <span className="font-semibold text-accent-2">{lane.rate}</span>
                      <span className="text-xs text-muted"> {lane.match}</span>
                    </span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <figcaption className="meta mt-3">
            Five lines in five formats, as they arrive from shippers, and the rows they become. Rates are examples, not quotes.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
