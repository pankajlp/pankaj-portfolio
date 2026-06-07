"use client";

import {

  Mail,
  ArrowUpRight,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black px-6 md:px-10 py-16 overflow-hidden">
      
      {/* Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-cyan-500/10 blur-[140px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
          
          {/* Brand */}
          <div className="max-w-md">
            <div className="flex items-center gap-3 mb-6">
                <img
                    src="/nordneuron-navbar.svg"
                    alt="NordNeuron"
                    className="h-10 w-auto" />
            </div>

            <p className="text-white/60 leading-relaxed">
              Building intelligent enterprise systems through
              AI workflows, automation, analytics engineering,
              and modern data platforms.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-12">
            
            {/* Navigation */}
            <div>
              <h3 className="text-white font-medium mb-5">
                Navigation
              </h3>

              <div className="flex flex-col gap-3 text-white/60">
                <a
                  href="/#about"
                  className="hover:text-cyan-400 transition-colors duration-300"
                >
                  About
                </a>

                <a
                  href="/#work"
                  className="hover:text-cyan-400 transition-colors duration-300"
                >
                  Work
                </a>

                <a
                  href="/#stack"
                  className="hover:text-cyan-400 transition-colors duration-300"
                >
                  Stack
                </a>

                <a
                  href="/contact"
                  className="hover:text-cyan-400 transition-colors duration-300"
                >
                  Contact
                </a>
              </div>
            </div>

            {/* Socials */}
            <div>
              <h3 className="text-white font-medium mb-5">
                Connect
              </h3>

              <div className="flex flex-col gap-3 text-white/60">
                
                <a
                  href="https://github.com/pankajlp"
                  target="_blank"
                  className="group flex items-center gap-2 hover:text-cyan-400 transition-colors duration-300"
                >
                  <FaGithub size={16} />
                  GitHub
                  <ArrowUpRight
                    size={14}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </a>

                <a
                  href="https://linkedin.com/in/pankajlp"
                  target="_blank"
                  className="group flex items-center gap-2 hover:text-cyan-400 transition-colors duration-300"
                >
                  <FaLinkedin size={16} />
                  LinkedIn
                  <ArrowUpRight
                    size={14}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </a>

                <a
                  href="mailto:contact@nordneuron.com"
                  className="group flex items-center gap-2 hover:text-cyan-400 transition-colors duration-300"
                >
                  <Mail size={16} />
                  Email
                  <ArrowUpRight
                    size={14}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 my-12" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
          
          <p>
            © {new Date().getFullYear()} NordNeuron. All rights reserved.
          </p>

          <p>
            Designed & engineered by Pankaj Kumar
          </p>
        </div>
      </div>
    </footer>
  );
}