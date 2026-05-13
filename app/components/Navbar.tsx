"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]" />
          
        <img
            src="/nordneuron-navbar.svg"
            alt="NordNeuron"
            className="h-8 w-auto"
            />
        </div>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm text-white/70">
          <a
            href="#about"
            className="hover:text-cyan-400 transition-colors duration-300"
          >
            About
          </a>

          <a
            href="#work"
            className="hover:text-cyan-400 transition-colors duration-300"
          >
            Work
          </a>

          <a
            href="#stack"
            className="hover:text-cyan-400 transition-colors duration-300"
          >
            Stack
          </a>

          <a
            href="#contact"
            className="hover:text-cyan-400 transition-colors duration-300"
          >
            Contact
          </a>
        </div>

        {/* CTA Button */}
        <a
          href="#work"
          className="hidden md:flex items-center px-5 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 text-sm hover:bg-cyan-400/20 transition-all duration-300"
        >
          Explore Work
        </a>
      </div>
    </motion.nav>
  );
}