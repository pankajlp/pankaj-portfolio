"use client";

import { ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";
import TransitionLink from "./TransitionLink";

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0908] border-t border-white/[0.05] overflow-hidden">

      {/* Top nav row */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-16 pb-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-10 border-b border-white/[0.05]">

        {/* Nav links */}
        <div className="flex flex-wrap gap-8 font-syne text-[11px] uppercase tracking-widest text-stone-400">
          {[
            { label: "About", href: "/#about" },
            { label: "Work", href: "/#work" },
            { label: "Labs", href: "/labs" },
            { label: "Insights", href: "/insights" },
            { label: "Stack", href: "/#stack" },
            { label: "Contact", href: "/contact" },
          ].map((link) => (
            <TransitionLink
              key={link.label}
              href={link.href}
              className="hover:text-white transition-colors duration-300"
            >
              {link.label}
            </TransitionLink>
          ))}
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/pankajlp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-400 hover:text-white transition-colors duration-300"
          >
            <FaGithub size={16} />
          </a>
          <a
            href="https://linkedin.com/in/pankajlp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-400 hover:text-white transition-colors duration-300"
          >
            <FaLinkedin size={16} />
          </a>
          <a
            href="mailto:contact@nordneuron.com"
            className="text-stone-400 hover:text-white transition-colors duration-300"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>

      {/* Large wordmark */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10">
        <h2 className="font-syne font-bold uppercase tracking-tighter leading-none text-[clamp(52px,11vw,160px)] text-white/[0.08] select-none">
          NordNeuron
        </h2>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-10 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] text-stone-500 font-syne border-t border-white/[0.04] pt-6">
        <p>© {new Date().getFullYear()} NordNeuron. All rights reserved.</p>
        <p>Designed & engineered by Pankaj Kumar</p>
      </div>
    </footer>
  );
}
