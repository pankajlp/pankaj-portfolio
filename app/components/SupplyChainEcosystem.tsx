"use client";

import { motion } from "framer-motion";

const systems = [
  {
    title: "Freight Intelligence",
    type: "Strategic Analytics Platform",
    description:
      "Strategic analytics platform for freight profitability, carrier intelligence, and operational visibility.",
  },
  {
    title: "Gate Operations",
    type: "Operational Control System",
    description:
      "Real-time warehouse access control and logistics workflow automation system.",
  },
  {
    title: "RFQ Intelligence",
    type: "AI Procurement Engine",
    description:
      "AI-powered procurement intelligence platform for tender analytics and bid optimization.",
  },
];

export default function SupplyChainEcosystem() {
  return (
    <section className="relative py-32 px-6 md:px-10 bg-black overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-cyan-500/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 text-sm mb-6">
            Supply Chain Intelligence Ecosystem
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Building interconnected AI systems
            <span className="block text-cyan-400">
              for enterprise logistics operations.
            </span>
          </h2>

          <p className="mt-8 text-xl text-white/60 leading-relaxed max-w-3xl">
            NordNeuron develops intelligent operational systems
            spanning freight analytics, warehouse automation,
            and AI-powered procurement intelligence —
            creating a unified supply chain intelligence layer.
          </p>
        </motion.div>

        {/* Ecosystem Flow */}
        <div className="relative mt-24">
          
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />

          {/* Cards */}
          <div className="grid lg:grid-cols-3 gap-8 relative z-10">
            {systems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                }}
                className="group relative p-8 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden hover:border-cyan-400/20 transition-all duration-500"
              >
                
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-cyan-400/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Top */}
                <div className="relative z-10 flex items-center justify-between">
                  
                  <div className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]" />

                  <div className="text-xs text-cyan-300 tracking-[0.2em]">
                    SYSTEM
                  </div>
                </div>

                {/* Type */}
                <div className="relative z-10 mt-8 inline-flex px-4 py-2 rounded-full border border-white/10 bg-black/30 text-xs text-white/50">
                  {item.type}
                </div>

                {/* Title */}
                <h3 className="relative z-10 mt-8 text-3xl font-semibold text-white leading-tight">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="relative z-10 mt-6 text-white/60 leading-relaxed">
                  {item.description}
                </p>

                {/* Bottom Accent */}
                <div className="relative z-10 mt-10 h-px w-full bg-gradient-to-r from-cyan-400/40 to-transparent" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
   );
}