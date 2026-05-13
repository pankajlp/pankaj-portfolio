"use client";

import { motion } from "framer-motion";

const capabilities = [
  {
    number: "01",
    title: "Business Intelligence",
    description:
      "Enterprise-grade Power BI systems and operational analytics platforms built for scale — not just reporting.",
  },
  {
    number: "02",
    title: "AI & Machine Learning",
    description:
      "Predictive models and intelligent AI workflows that surface decisions directly within enterprise operations.",
  },
  {
    number: "03",
    title: "Logistics & Operations",
    description:
      "Deep expertise in freight, RFQ, and supply chain intelligence where operational complexity is highest.",
  },
  {
    number: "04",
    title: "Operational Automation",
    description:
      "Automation systems that reduce manual overhead across workflows, approvals, and reporting cycles.",
  },
];

const tags = [
  "Analytics",
  "AI Workflows",
  "Automation",
  "Logistics Intel",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-32 px-6 md:px-10 bg-[#050505] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-[180px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_1fr] gap-20">
        
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* Label */}
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-px bg-cyan-400/40" />

            <span className="text-xs tracking-[0.28em] uppercase text-cyan-300">
              About NordNeuron
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-5xl md:text-7xl leading-[1.05] tracking-tight text-white">
            Beyond dashboards —
            <span className="block italic font-light text-cyan-100/90 mt-2">
              toward enterprise
            </span>

            <span className="block italic font-light text-cyan-100/90">
              intelligence.
            </span>
          </h2>

          {/* Paragraph */}
          <p className="mt-12 text-xl text-white/65 leading-relaxed max-w-2xl">
            NordNeuron designs intelligent operational systems that
            unify analytics, automation, and decision-making into a
            single enterprise layer — purpose-built for environments
            where insight without action is incomplete.
          </p>

          {/* Founder Card */}
          <div className="mt-14 p-6 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl max-w-xl">
            <div className="flex items-center gap-5">
              
              {/* Avatar */}
              <div className="w-16 h-16 rounded-full bg-cyan-950 border border-cyan-400/20 flex items-center justify-center text-cyan-300 font-medium">
                PK
              </div>

              {/* Info */}
              <div>
                <h3 className="text-2xl text-white font-medium">
                  Pankaj Kumar
                </h3>

                <p className="mt-1 text-white/60 leading-relaxed">
                  Founder · AI Systems & Enterprise Intelligence
                </p>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="mt-10 flex flex-wrap gap-3">
            {tags.map((tag) => (
              <div
                key={tag}
                className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-sm tracking-wide text-white/70"
              >
                {tag}
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          {capabilities.map((item) => (
            <div
              key={item.number}
              className="border-b border-white/10 pb-10"
            >
              <div className="grid grid-cols-[60px_1fr] gap-8">
                
                {/* Number */}
                <div className="text-sm text-cyan-300 tracking-[0.2em] pt-1">
                  {item.number}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-2xl text-white font-medium">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-white/60 leading-relaxed text-lg">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}