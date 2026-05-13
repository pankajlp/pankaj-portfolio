"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-32 px-6 md:px-10 bg-black overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-[160px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 text-sm mb-6">
            About NordNeuron
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Engineering
            <span className="block text-cyan-400">
              Intelligent Operations
            </span>
          </h2>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-6 text-lg text-white/65 leading-relaxed"
        >
          <p>
            I’m Pankaj Kumar — an IT Analyst focused on building
            modern analytics systems, AI workflows, and operational
            automation for enterprise environments.
          </p>

          <p>
            My work combines business intelligence, machine learning,
            logistics analytics, and intelligent automation to solve
            real operational problems at scale.
          </p>

          <p>
            NordNeuron represents a shift beyond dashboards —
            toward intelligent systems that connect data,
            automation, and decision-making into a unified layer
            of enterprise intelligence.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 pt-10">
            
            <div className="p-6 rounded-3xl border border-white/10 bg-white/[0.03]">
              <h3 className="text-4xl font-bold text-cyan-400">
                4+
              </h3>

              <p className="mt-2 text-white/60">
                Years Experience
              </p>
            </div>

            <div className="p-6 rounded-3xl border border-white/10 bg-white/[0.03]">
              <h3 className="text-4xl font-bold text-cyan-400">
                15+
              </h3>

              <p className="mt-2 text-white/60">
                Enterprise Projects
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}