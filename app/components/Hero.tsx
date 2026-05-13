"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BrainCircuit,
  Database,
  BarChart3,
  Workflow,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black px-6 md:px-10">
      
      {/* Background Glow */}
      <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-500/10 blur-[180px] rounded-full" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 text-sm mb-8">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            AI · Analytics · Enterprise Intelligence
          </div>

          {/* Heading */}
          <img
            src="/nordneuron-wordmark-light.svg"
            alt="NordNeuron"
            className="w-[420px] max-w-full mb-8"
            />

          {/* Description */}
          <p className="mt-8 text-lg text-white/70 leading-relaxed max-w-xl">
            NordNeuron designs AI workflows, analytics platforms,
            and automation systems for modern enterprise operations —
            combining data engineering, machine learning, and business intelligence.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 px-7 py-3 rounded-full bg-cyan-400 text-black font-medium hover:scale-105 transition-all duration-300"
            >
              Explore Work
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-all duration-300"
            >
              Let’s Connect
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE CARDS */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="relative"
        >
          <div className="grid grid-cols-2 gap-5">
            
            {/* Card 1 */}
            <div className="p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
              <BrainCircuit className="text-cyan-400 mb-4" size={32} />
              
              <h3 className="text-xl font-semibold text-white mb-2">
                AI Workflows
              </h3>

              <p className="text-sm text-white/60 leading-relaxed">
                Intelligent enterprise automation powered by LLMs and agent systems.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl mt-10">
              <Database className="text-cyan-400 mb-4" size={32} />
              
              <h3 className="text-xl font-semibold text-white mb-2">
                Data Platforms
              </h3>

              <p className="text-sm text-white/60 leading-relaxed">
                Scalable analytics infrastructure with SQL, Python, and cloud systems.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl -mt-10">
              <BarChart3 className="text-cyan-400 mb-4" size={32} />
              
              <h3 className="text-xl font-semibold text-white mb-2">
                BI Systems
              </h3>

              <p className="text-sm text-white/60 leading-relaxed">
                Executive dashboards and operational intelligence with Power BI.
              </p>
            </div>

            {/* Card 4 */}
            <div className="p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
              <Workflow className="text-cyan-400 mb-4" size={32} />
              
              <h3 className="text-xl font-semibold text-white mb-2">
                Automation
              </h3>

              <p className="text-sm text-white/60 leading-relaxed">
                Process optimization through smart integrations and workflow orchestration.
              </p>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}