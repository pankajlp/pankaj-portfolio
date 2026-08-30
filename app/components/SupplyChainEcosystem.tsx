"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const stages = [
  {
    number: "01",
    label: "Signals",
    title: "Unify Operational Data",
    description:
      "Freight movements, gate events, tender documents, carrier rates — fragmented signals from across the supply chain are captured into one structured data layer.",
    feeds: ["ERP & TMS Data", "Warehouse Events", "Market Rates", "RFQ Documents"],
  },
  {
    number: "02",
    label: "Intelligence",
    title: "Reason Over It",
    description:
      "Predictive models, LLM-powered document analysis, and analytics engines turn raw signals into margin insights, risk flags, and pricing intelligence.",
    feeds: ["Predictive Models", "LLM Analysis", "Anomaly Detection", "Profitability Engines"],
  },
  {
    number: "03",
    label: "Action",
    title: "Drive Decisions",
    description:
      "Intelligence lands where work happens — automated workflows, live control dashboards, and decision support embedded directly in daily operations.",
    feeds: ["Automated Workflows", "Control Dashboards", "Bid Optimization", "Alerts & Approvals"],
  },
];

export default function SupplyChainEcosystem() {
  return (
    <section className="relative py-32 px-6 md:px-10 bg-transparent overflow-hidden border-t border-white/[0.06]">

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-gradient-to-r from-[#22d3ee] to-transparent" />
            <span className="text-[#22d3ee] font-mono text-[10px] uppercase tracking-[0.3em]">
              How Our Systems Work
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold font-syne uppercase tracking-tight text-white leading-[1.02]">
            One Intelligence Layer.<br />
            <span className="text-zinc-500">Three Stages.</span>
          </h2>

          <p className="mt-6 text-base md:text-lg text-zinc-400 leading-relaxed max-w-2xl font-light">
            Every platform we build follows the same architecture:
            unify scattered operational data, apply machine reasoning,
            and deliver decisions back into the workflow — a continuous loop,
            not a static report.
          </p>
        </motion.div>

        {/* Flow */}
        <div className="mt-20 grid lg:grid-cols-3 gap-px bg-white/[0.08] border border-white/[0.08] rounded-3xl overflow-hidden">
          {stages.map((stage, index) => (
            <motion.div
              key={stage.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative bg-[#0d0d12] hover:bg-[#12121a] p-10 transition-colors duration-300"
            >
              {/* Stage header */}
              <div className="flex items-center justify-between mb-10">
                <span className="text-[#22d3ee] font-mono text-xs font-bold tracking-[0.2em]">
                  {stage.number}
                </span>
                <span className="px-3.5 py-1 rounded-full border border-white/15 text-[10px] uppercase font-mono tracking-widest text-zinc-400">
                  {stage.label}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-bold font-syne uppercase tracking-tight text-white leading-tight">
                {stage.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-zinc-400 text-sm md:text-base leading-relaxed font-light">
                {stage.description}
              </p>

              {/* Feeds */}
              <div className="mt-8 space-y-2.5 border-t border-white/[0.08] pt-6">
                {stage.feeds.map((feed) => (
                  <div key={feed} className="flex items-center gap-3 text-zinc-500 text-[11px] font-mono uppercase tracking-widest">
                    <span className="w-1 h-1 rounded-full bg-[#22d3ee]" />
                    {feed}
                  </div>
                ))}
              </div>

              {/* Arrow connector to next stage */}
              {index < stages.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-3 z-10 w-6 h-6 rounded-full bg-[#22d3ee] items-center justify-center shadow-[0_0_16px_rgba(34,211,238,0.4)]">
                  <ArrowRight size={12} className="text-[#041014]" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Loop note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 text-center text-zinc-500 font-mono text-[10px] uppercase tracking-[0.3em]"
        >
          Decisions feed back as new signals — the loop never stops learning
        </motion.p>
      </div>
    </section>
  );
}
