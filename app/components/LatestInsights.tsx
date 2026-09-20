"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import { articles } from "../lib/insights";

// Homepage teaser: the three newest articles, pulled straight from the
// shared insights list so this stays in sync with /insights automatically.
const latest = articles.slice(0, 3);

export default function LatestInsights() {
  return (
    <section
      id="insights"
      className="relative bg-transparent overflow-hidden border-t border-white/[0.06]"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 py-28 md:py-32">

        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-10 h-px bg-gradient-to-r from-[#c8a86b] to-transparent" />
              <span className="text-[#c8a86b] font-mono text-[10px] uppercase tracking-widest">Insights</span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
              className="font-syne font-medium tracking-tight leading-[1.02] text-[clamp(32px,5vw,56px)] text-[#f2ede3]"
            >
              Latest <span className="text-[#c8a86b]">Thinking.</span>
            </motion.h2>
          </div>

          {/* View all — desktop */}
          <Link
            href="/insights"
            className="group hidden md:inline-flex items-center gap-2 text-[#a89f8f] hover:text-[#c8a86b] font-mono text-[11px] uppercase tracking-widest transition-colors duration-300 shrink-0 pb-2"
          >
            View all insights
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {latest.map((article, i) => (
            <motion.div
              key={article.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                href={article.href}
                className="group flex flex-col h-full rounded-2xl border border-white/10 bg-white/[0.02] p-7 hover:border-[#c8a86b]/40 hover:bg-white/[0.04] transition-all duration-300"
              >
                {/* Category + date */}
                <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-widest mb-5">
                  <span className="text-[#c8a86b]">{article.category}</span>
                  <span className="text-[#6f675b]">·</span>
                  <span className="text-[#8a8175]">{article.meta.split(" · ")[0]}</span>
                </div>

                {/* Title */}
                <h3 className="font-syne font-medium tracking-tight text-lg md:text-xl text-[#f2ede3] leading-snug">
                  {article.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-sm text-[#8a8175] leading-relaxed line-clamp-3 font-light">
                  {article.description}
                </p>

                {/* Footer */}
                <div className="mt-auto pt-6 flex items-center justify-between">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#6f675b]">
                    {article.meta.split(" · ")[1]}
                  </span>
                  <ArrowUpRight
                    size={16}
                    className="text-[#a89f8f] group-hover:text-[#c8a86b] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View all — mobile */}
        <Link
          href="/insights"
          className="group mt-10 md:hidden inline-flex items-center gap-2 text-[#a89f8f] hover:text-[#c8a86b] font-mono text-[11px] uppercase tracking-widest transition-colors duration-300"
        >
          View all insights
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
        </Link>

      </div>
    </section>
  );
}
