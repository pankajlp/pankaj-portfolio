"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "./SplitText";

gsap.registerPlugin(ScrollTrigger);

const capabilities = [
  {
    number: "01",
    title: "Business Intelligence",
    description:
      "Enterprise-grade Power BI systems and operational analytics platforms built for scale — not just reporting.",
  },
  {
    number: "02",
    title: "AI & Machine Learning",
    description:
      "Predictive models and intelligent AI workflows that surface decisions directly within enterprise operations.",
  },
  {
    number: "03",
    title: "Logistics & Operations",
    description:
      "Deep expertise in freight, RFQ, and supply chain intelligence where operational complexity is highest.",
  },
  {
    number: "04",
    title: "Operational Automation",
    description:
      "Automation systems that reduce manual overhead across workflows, approvals, and reporting cycles.",
  },
];

const tags = [
  "Analytics",
  "AI Workflows",
  "Automation",
  "Logistics Intel",
];

export default function About() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".about-char", {
        transform: "translateY(0%)",
        stagger: 0.01,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "top 30%",
          scrub: 1,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative py-32 px-6 md:px-10 bg-transparent overflow-hidden border-t border-white/[0.06]"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#7c6cff]/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_1fr] gap-20">
        
        {/* LEFT SIDE (Pinned/Sticky) */}
        <div className="lg:sticky lg:top-32 h-fit space-y-6">
          {/* Label */}
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-px bg-gradient-to-r from-[#22d3ee] to-transparent" />
            <span className="text-[10px] tracking-widest uppercase font-mono text-[#22d3ee]">
              About NordNeuron
            </span>
          </div>

          {/* Heading */}
          <div className="block">
            <SplitText
              text={"BEYOND DASHBOARDS —"}
              charClass="about-char"
              className="text-4xl md:text-6xl font-bold font-syne uppercase tracking-tight text-white leading-[1.05]"
            />
          </div>
          <div className="block mt-2">
            <SplitText
              text={"TOWARD ENTERPRISE\nINTELLIGENCE."}
              charClass="about-char"
              className="text-4xl md:text-6xl font-bold font-syne uppercase tracking-tight text-zinc-500 leading-[1.05]"
            />
          </div>

          {/* Paragraph */}
          <p className="mt-8 text-base md:text-lg text-zinc-400 leading-relaxed max-w-2xl font-light">
            NordNeuron designs intelligent operational systems that
            unify analytics, automation, and decision-making into a
            single enterprise layer — purpose-built for environments
            where insight without action is incomplete.
          </p>

          {/* Founder Card */}
          <div className="mt-10 p-6 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl max-w-xl">
            <div className="flex flex-col sm:flex-row sm:items-center gap-5">

              {/* Avatar */}
              <div className="w-16 h-16 rounded-full bg-white/[0.04] border border-[#22d3ee]/30 text-[#22d3ee] flex items-center justify-center font-syne font-bold text-lg shadow-[0_0_20px_rgba(34,211,238,0.15)]">
                PK
              </div>

              {/* Info */}
              <div>
                <h3 className="text-xl text-white font-bold font-syne uppercase tracking-tight">
                  Pankaj Kumar
                </h3>
                <p className="mt-1 text-sm text-zinc-500 leading-relaxed font-light">
                  Founder · AI Systems & Enterprise Intelligence
                </p>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/about"
              className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#22d3ee] text-[#041014] font-mono text-xs uppercase tracking-widest hover:bg-[#67e8f9] transition-all duration-300 shadow-[0_0_28px_rgba(34,211,238,0.25)]"
            >
              Read Full Story
              <ArrowUpRight
                size={16}
                strokeWidth={2.5}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
              />
            </Link>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <div
                  key={tag}
                  className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-[10px] font-mono uppercase tracking-widest text-zinc-400"
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE (Scrolls) */}
        <div className="lg:mt-12">
          {capabilities.map((item) => (
            <div
              key={item.number}
              className="group border-b border-white/[0.08] py-8 last:border-b-0 hover:border-[#22d3ee]/40 transition-colors duration-300 cursor-default"
            >
              <div className="grid grid-cols-[50px_1fr] gap-6">

                {/* Number */}
                <div className="text-sm text-zinc-600 group-hover:text-[#22d3ee] font-mono font-bold tracking-[0.2em] pt-1 transition-colors duration-300">
                  {item.number}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl md:text-2xl font-bold font-syne uppercase tracking-tight text-white transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm md:text-base text-zinc-500 group-hover:text-zinc-400 leading-relaxed font-light transition-colors duration-300 max-h-0 group-hover:max-h-40 overflow-hidden" style={{ transition: "max-height 0.4s ease, color 0.3s ease" }}>
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}