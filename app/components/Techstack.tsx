"use client";

import { motion } from "framer-motion";

const stack = [
  {
    title: "Power BI",
    description:
      "Executive dashboards and operational intelligence systems.",
  },
  {
    title: "SQL",
    description:
      "Data modeling, transformation, and analytics engineering.",
  },
  {
    title: "Python",
    description:
      "Automation, ML pipelines, and enterprise tooling.",
  },
  {
    title: "AI Workflows",
    description:
      "LLM orchestration, intelligent agents, and AI systems.",
  },
  {
    title: "Machine Learning",
    description:
      "Predictive analytics for logistics and operations.",
  },
  {
    title: "Power Apps",
    description:
      "Internal enterprise applications and process digitization.",
  },
  {
    title: "Automation",
    description:
      "Workflow optimization using Power Automate & APIs.",
  },
  {
    title: "Data Engineering",
    description:
      "Building scalable analytics infrastructure.",
  },
];

export default function TechStack() {
  return (
    <section
      id="stack"
      className="relative py-32 px-6 md:px-10 bg-black overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-500/10 blur-[180px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 text-sm mb-6">
            Technology Stack
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Systems, Analytics
            <span className="block text-cyan-400">
              & AI Infrastructure
            </span>
          </h2>

          <p className="mt-6 text-lg text-white/60 leading-relaxed max-w-2xl">
            A focused toolkit for building intelligent enterprise
            platforms, automation systems, analytics workflows,
            and modern AI-driven operations.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stack.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -6,
              }}
              className="group relative p-6 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden hover:border-cyan-400/30 transition-all duration-300"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-cyan-400/[0.03] opacity-0 group-hover:opacity-100 transition-all duration-300" />

              {/* Dot */}
              <div className="relative z-10 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_14px_#22d3ee] mb-6" />

              {/* Title */}
              <h3 className="relative z-10 text-xl font-semibold text-white">
                {item.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 mt-4 text-sm text-white/60 leading-relaxed">
                {item.description}
              </p>

              {/* Bottom Accent */}
              <div className="relative z-10 mt-8 h-px w-full bg-gradient-to-r from-cyan-400/50 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}