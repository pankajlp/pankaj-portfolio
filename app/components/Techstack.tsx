"use client";

import { motion } from "framer-motion";

const stack = [
  "Power BI",
  "SQL",
  "Python",
  "Machine Learning",
  "Power Apps",
  "Power Automate",
  "DuckDB",
  "Next.js",
  "TypeScript",
  "Framer Motion",
  "FastAPI",
  "LangChain",
  "Ollama",
  "llama.cpp",
  "Azure",
  "Pandas",
];

export default function TechStack() {
  return (
    <section
      id="stack"
      className="relative py-32 px-6 md:px-10 bg-black overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 blur-[160px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Heading */}
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
            Tools I Actually
            <span className="block text-cyan-400">
              Build With
            </span>
          </h2>

          <p className="mt-6 text-lg text-white/60 leading-relaxed max-w-2xl">
            A focused stack for building enterprise analytics,
            automation systems, AI workflows, and modern data platforms.
          </p>
        </motion.div>

        {/* Stack Grid */}
        <div className="mt-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {stack.map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.04,
              }}
              className="group relative p-5 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-cyan-400/0 group-hover:bg-cyan-400/[0.03] transition-all duration-300" />

              <div className="relative z-10 flex items-center justify-between">
                <h3 className="text-white font-medium tracking-wide">
                  {tech}
                </h3>

                <div className="w-2 h-2 rounded-full bg-cyan-400 opacity-70 group-hover:opacity-100 group-hover:shadow-[0_0_12px_#22d3ee] transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}