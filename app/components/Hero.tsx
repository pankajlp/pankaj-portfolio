"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black px-6 md:px-10 pt-28 md:pt-32 pb-36 md:pb-40">
      
      {/* Background Glow */}
      <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-500/10 rounded-full" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Wavy SVG Background */}
      <div className="absolute bottom-0 left-0 right-0 h-[55%] pointer-events-none overflow-hidden select-none">
        <svg viewBox="0 0 900 340" preserveAspectRatio="xMidYMax slice" className="absolute bottom-0 w-full min-w-[900px] left-1/2 -translate-x-1/2">
          {/* Wave 1 — deepest, most transparent */}
          <path className="animate-wave-1"
            d="M0,120 C160,80 320,160 480,110 C600,72 720,130 900,85 L900,340 L0,340 Z"
            fill="#22d3ee" fillOpacity="0.035"/>

          {/* Wave 2 */}
          <path className="animate-wave-2"
            d="M0,150 C180,115 360,175 540,135 C680,105 800,150 900,130 L900,340 L0,340 Z"
            fill="#0ea5e9" fillOpacity="0.045"/>

          {/* Wave 3 */}
          <path className="animate-wave-3"
            d="M0,175 C200,148 380,195 560,162 C700,138 820,170 900,158 L900,340 L0,340 Z"
            fill="#22d3ee" fillOpacity="0.06"/>

          {/* Wave 4 — shallowest, most visible crest */}
          <path className="animate-wave-4"
            d="M0,195 C220,175 400,208 580,188 C720,172 840,196 900,188 L900,340 L0,340 Z"
            fill="#22d3ee" fillOpacity="0.09"/>

          {/* Glowing crest line on top wave */}
          <path
            d="M0,195 C220,175 400,208 580,188 C720,172 840,196 900,188"
            fill="none"
            stroke="#22d3ee"
            strokeWidth="1"
            strokeOpacity="0.3"/>

          {/* Solid fill at bottom */}
          <rect x="0" y="270" width="900" height="70" fill="#22d3ee" fillOpacity="0.03"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center justify-center">
        
        {/* CENTER CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >


          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] max-w-3xl mx-auto text-white">
            Enterprise intelligence,<br />
            <span className="text-cyan-400">engineered from first principles.</span>
          </h1>

          {/* Description */}
          <p className="mt-8 text-base md:text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">
            NordNeuron designs AI workflows, analytics platforms, and automation systems
            for modern enterprise operations — combining data engineering, machine learning,
            and business intelligence.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <a
              href="/#work"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-cyan-400 text-black font-semibold hover:scale-105 transition-all duration-300"
            >
              Explore Work
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>

            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/15 bg-white/5 text-white hover:bg-white/10 hover:border-white/35 transition-all duration-300"
            >
              Let’s Connect
            </a>
          </div>
        </motion.div>
      </div>

      {/* Stat Bar */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center justify-center gap-6 md:gap-12 text-center text-sm tracking-wide text-white/50 border-t border-white/10 pt-8 w-[90%] max-w-xl">
        <div className="flex-1">
          <div className="text-xl md:text-2xl font-bold text-cyan-400 tracking-tight">12+</div>
          <div className="text-[10px] uppercase text-white/40 tracking-widest mt-1">AI Projects</div>
        </div>
        <div className="w-px h-8 bg-white/10 shrink-0" />
        <div className="flex-1">
          <div className="text-xl md:text-2xl font-bold text-cyan-400 tracking-tight">3</div>
          <div className="text-[10px] uppercase text-white/40 tracking-widest mt-1">Active Products</div>
        </div>
        <div className="w-px h-8 bg-white/10 shrink-0" />
        <div className="flex-1">
          <div className="text-xl md:text-2xl font-bold text-cyan-400 tracking-tight">LLM · BI · MLOps</div>
          <div className="text-[10px] uppercase text-white/40 tracking-widest mt-1">Core Stack</div>
        </div>
      </div>

    </section>
  );
}