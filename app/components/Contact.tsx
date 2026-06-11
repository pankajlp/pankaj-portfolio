"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-[#0f0e0d] overflow-hidden border-t border-white/[0.06]"
    >
      {/* Subtle radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(120,113,108,0.06) 0%, transparent 70%)" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-28 md:py-40">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-12"
        >
          <div className="w-10 h-px bg-stone-500" />
          <span className="text-stone-400 font-syne text-[10px] uppercase tracking-widest">Let&apos;s Work Together</span>
        </motion.div>

        {/* Oversized heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="font-syne font-bold uppercase tracking-tighter leading-[0.88] text-[clamp(52px,10vw,160px)] text-white">
            Start A<br />
            <span className="text-stone-400">Project.</span>
          </h2>
        </motion.div>

        {/* CTA Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 border-t border-white/[0.06] pt-10"
        >
          <p className="text-stone-300 text-base md:text-lg leading-relaxed font-light max-w-md">
            Interested in analytics engineering, AI workflows,
            automation systems, or enterprise intelligence?
            Let&apos;s build something.
          </p>

          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 text-white font-syne text-xs uppercase tracking-widest hover:bg-white hover:text-black hover:border-white transition-all duration-300"
          >
            Open Inquiry Form
            <ArrowUpRight
              size={15}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
            />
          </Link>
        </motion.div>

        {/* Contact Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-wrap gap-6"
        >
          <a
            href="mailto:contact@nordneuron.com"
            className="group flex items-center gap-2 text-stone-400 hover:text-white font-syne text-[11px] uppercase tracking-widest transition-colors duration-300"
          >
            contact@nordneuron.com
            <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <a
            href="https://linkedin.com/in/pankajlp"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-stone-400 hover:text-white font-syne text-[11px] uppercase tracking-widest transition-colors duration-300"
          >
            <FaLinkedin size={13} />
            LinkedIn
            <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <a
            href="https://github.com/pankajlp"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-stone-400 hover:text-white font-syne text-[11px] uppercase tracking-widest transition-colors duration-300"
          >
            <FaGithub size={13} />
            GitHub
            <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
