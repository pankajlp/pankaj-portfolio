"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import TransitionLink from "./TransitionLink";

export default function Navbar() {
  const navRef = useRef<HTMLElement | null>(null);
  const [isLightNavbar] = useState(true);

  return (
    <motion.nav
      ref={navRef}
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 border-b border-black/5 bg-[#f5f4f0]/80 backdrop-blur-md text-stone-900 transition-all duration-500"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-[92px] flex items-center justify-between">
        
        {/* Dynamic Logo (Inline SVG for smooth color transitions) */}
        <TransitionLink
          href="/"
          className="flex items-center gap-3 shrink-0"
        >
          <svg width="200" height="40" viewBox="0 0 240 48" xmlns="http://www.w3.org/2000/svg" role="img" className="h-9 w-auto">
            <title>NordNeuron Logo</title>
            <defs>
              <filter id="glow" x="-80%" y="-80%" width="260%" height="260%">
                <feGaussianBlur stdDeviation="2" result="blur"/>
                <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
            </defs>

            {/* Hex outline */}
            <polygon
              points="24,5 40,14 40,32 24,41 8,32 8,14"
              fill="none"
              stroke={isLightNavbar ? "#d4d4d4" : "#2b2b2b"}
              strokeWidth="1.1"
              className="transition-colors duration-500"
            />

            {/* Neural edges */}
            <line x1="24" y1="10" x2="24" y2="23" stroke={isLightNavbar ? "#78716c" : "#a8a29e"} strokeWidth="0.9" opacity="0.55" className="transition-colors duration-500" />
            <line x1="24" y1="23" x2="35" y2="29" stroke={isLightNavbar ? "#78716c" : "#a8a29e"} strokeWidth="0.9" opacity="0.55" className="transition-colors duration-500" />
            <line x1="24" y1="23" x2="13" y2="29" stroke={isLightNavbar ? "#78716c" : "#a8a29e"} strokeWidth="0.9" opacity="0.55" className="transition-colors duration-500" />
            <line x1="35" y1="17" x2="24" y2="23" stroke={isLightNavbar ? "#78716c" : "#a8a29e"} strokeWidth="0.9" opacity="0.55" className="transition-colors duration-500" />
            <line x1="13" y1="17" x2="24" y2="23" stroke={isLightNavbar ? "#78716c" : "#a8a29e"} strokeWidth="0.9" opacity="0.55" className="transition-colors duration-500" />

            {/* Outer nodes */}
            <circle cx="24" cy="10" r="2.5" fill={isLightNavbar ? "#f5f4f0" : "#1c1917"} stroke={isLightNavbar ? "#78716c" : "#a8a29e"} strokeWidth="1.1" className="transition-colors duration-500" />
            <circle cx="35" cy="17" r="2.5" fill={isLightNavbar ? "#f5f4f0" : "#1c1917"} stroke={isLightNavbar ? "#78716c" : "#a8a29e"} strokeWidth="1.1" className="transition-colors duration-500" />
            <circle cx="35" cy="29" r="2.5" fill={isLightNavbar ? "#f5f4f0" : "#1c1917"} stroke={isLightNavbar ? "#78716c" : "#a8a29e"} strokeWidth="1.1" className="transition-colors duration-500" />
            <circle cx="24" cy="36" r="2.5" fill={isLightNavbar ? "#f5f4f0" : "#1c1917"} stroke={isLightNavbar ? "#78716c" : "#a8a29e"} strokeWidth="1.1" className="transition-colors duration-500" />
            <circle cx="13" cy="29" r="2.5" fill={isLightNavbar ? "#f5f4f0" : "#1c1917"} stroke={isLightNavbar ? "#78716c" : "#a8a29e"} strokeWidth="1.1" className="transition-colors duration-500" />
            <circle cx="13" cy="17" r="2.5" fill={isLightNavbar ? "#f5f4f0" : "#1c1917"} stroke={isLightNavbar ? "#78716c" : "#a8a29e"} strokeWidth="1.1" className="transition-colors duration-500" />

            {/* Center node */}
            <circle cx="24" cy="23" r="5.5" fill={isLightNavbar ? "#1c1917" : "#f5f4f0"} filter={isLightNavbar ? "" : "url(#glow)"} className="transition-colors duration-500" />
            <circle cx="24" cy="23" r="2.7" fill={isLightNavbar ? "#f5f4f0" : "#1c1917"} className="transition-colors duration-500" />

            {/* Wordmark */}
            <text x="54" y="30"
                  fontFamily="'Syne', 'Segoe UI', sans-serif"
                  fontSize="20" fontWeight="800"
                  fill={isLightNavbar ? "#1c1917" : "#f5f4f0"} letterSpacing="-0.01em"
                  className="transition-colors duration-500">
              Nord<tspan dx="6" fontWeight="500" fill={isLightNavbar ? "#78716c" : "#a8a29e"}>Neuron</tspan>
            </text>
          </svg>
        </TransitionLink>
  
        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8 font-syne text-[11px] uppercase tracking-widest">
          <TransitionLink
            href="/#about"
            className={`transition-colors duration-300 ${
              isLightNavbar ? "text-black/60 hover:text-stone-950" : "text-white/60 hover:text-white"
            }`}
          >
            About
          </TransitionLink>
          <TransitionLink 
            href="/labs"
            className={`transition-colors duration-300 ${
              isLightNavbar ? "text-black/60 hover:text-stone-950" : "text-white/60 hover:text-white"
            }`}
          >
            Labs
          </TransitionLink>
          <TransitionLink
            href="/#work"
            className={`transition-colors duration-300 ${
              isLightNavbar ? "text-black/60 hover:text-stone-950" : "text-white/60 hover:text-white"
            }`}
          >
            Work
          </TransitionLink>
          <TransitionLink
            href="/insights"
            className={`transition-colors duration-300 ${
              isLightNavbar ? "text-black/60 hover:text-stone-950" : "text-white/60 hover:text-white"
            }`}
          >
            Insights
          </TransitionLink>
          <TransitionLink
            href="/#stack"
            className={`transition-colors duration-300 ${
              isLightNavbar ? "text-black/60 hover:text-stone-950" : "text-white/60 hover:text-white"
            }`}
          >
            Stack
          </TransitionLink>
          <TransitionLink
            href="/contact"
            className={`transition-colors duration-300 ${
              isLightNavbar ? "text-black/60 hover:text-stone-950" : "text-white/60 hover:text-white"
            }`}
          >
            Contact
          </TransitionLink>
        </div>

        {/* CTA */}
        <TransitionLink
          href="/#work"
          className="hidden md:flex items-center px-6 py-3 rounded-full border transition-all duration-300 font-syne text-[10px] uppercase tracking-widest border-stone-200/20 bg-stone-900 text-stone-50 hover:bg-stone-800 hover:text-white hover:border-stone-200"
        >
          Explore Work
        </TransitionLink>
      </div>
    </motion.nav>
  );
}