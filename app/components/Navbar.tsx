"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-black/70 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-[88px] flex items-center justify-between">
        
        {/* Logo */}
        <a
          href="/"
          className="flex items-center gap-4 shrink-0"
        >
          {/* Accent Dot */}
          <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />

          {/* Logo */}
          <img
            src="/nordneuron-navbar.svg"
            alt="NordNeuron"
            className="h-9 w-auto"
          />
        </a>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-10">
          
          <a
            href="#about"
            className="text-sm text-white/65 hover:text-cyan-300 transition-colors duration-300"
          >
            About
          </a>

          <a
            href="#work"
            className="text-sm text-white/65 hover:text-cyan-300 transition-colors duration-300"
          >
            Work
          </a>

          <a
            href="#stack"
            className="text-sm text-white/65 hover:text-cyan-300 transition-colors duration-300"
          >
            Stack
          </a>

          <a
            href="#contact"
            className="text-sm text-white/65 hover:text-cyan-300 transition-colors duration-300"
          >
            Contact
          </a>
        </div>

        {/* CTA */}
        <a
          href="#work"
          className="hidden md:flex items-center px-6 py-3 rounded-full border border-cyan-400/20 bg-cyan-400/5 text-cyan-300 text-sm hover:bg-cyan-400/10 hover:border-cyan-400/40 transition-all duration-300"
        >
          Explore Work
        </a>
      </div>
    </motion.nav>
  );
}