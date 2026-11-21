"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";
import TransitionLink from "./TransitionLink";

const LINKS = [
  { label: "Capabilities", href: "/#stack" },
  { label: "Work", href: "/#work" },
  { label: "Labs", href: "/labs" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-rule bg-paper">
      <div className="wrap pt-20 pb-10">
        <p className="m-0 font-display font-medium leading-none text-[clamp(3rem,10vw,8.5rem)] text-ink select-none" style={{ letterSpacing: "var(--tracking-display)" }}>
          NordNeuron
        </p>
        <div className="mt-12 pt-6 border-t border-rule flex flex-col md:flex-row md:items-center justify-between gap-6">
          <nav aria-label="Footer" className="flex flex-wrap gap-x-2 -ml-3">
            {LINKS.map((link) => (
              <TransitionLink key={link.label} href={link.href} className="nav-link">{link.label}</TransitionLink>
            ))}
          </nav>
          <div className="flex items-center gap-1 -ml-3 md:ml-0">
            <a href="https://github.com/NordNeuron" target="_blank" rel="noopener noreferrer" aria-label="NordNeuron on GitHub" className="nav-link"><FaGithub size={18} aria-hidden="true" /></a>
            <a href="https://www.linkedin.com/company/nordneuron/" target="_blank" rel="noopener noreferrer" aria-label="NordNeuron on LinkedIn" className="nav-link"><FaLinkedin size={18} aria-hidden="true" /></a>
            <a href="mailto:contact@nordneuron.com" aria-label="Email NordNeuron" className="nav-link"><Mail size={18} aria-hidden="true" /></a>
          </div>
        </div>
        <p className="meta mt-6 mb-0">© {new Date().getFullYear()} NordNeuron</p>
      </div>
    </footer>
  );
}
