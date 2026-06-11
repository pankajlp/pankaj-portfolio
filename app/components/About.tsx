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
      className="relative py-32 px-6 md:px-10 bg-transparent overflow-hidden border-t border-stone-200"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-stone-1000/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-[1.1fr_1fr] gap-20">
        
        {/* LEFT SIDE (Pinned/Sticky) */}
        <div className="lg:sticky lg:top-32 h-fit space-y-6">
          {/* Label */}
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-px bg-stone-200" />
            <span className="text-[10px] tracking-widest uppercase font-syne text-stone-400">
              About NordNeuron
            </span>
          </div>

          {/* Heading */}
          <div className="block">
            <SplitText
              text={"BEYOND DASHBOARDS —"}
              charClass="about-char"
              className="text-4xl md:text-6xl font-bold font-syne uppercase tracking-tight text-stone-900 leading-[1.05]"
            />
          </div>
          <div className="block mt-2">
            <SplitText
              text={"TOWARD ENTERPRISE\nINTELLIGENCE."}
              charClass="about-char"
              className="text-4xl md:text-6xl font-bold font-syne uppercase tracking-tight text-stone-950 leading-[1.05]"
            />
          </div>

          {/* Paragraph */}
          <p className="mt-8 text-base md:text-lg text-stone-500 leading-relaxed max-w-2xl font-light">
            NordNeuron designs intelligent operational systems that
            unify analytics, automation, and decision-making into a
            single enterprise layer — purpose-built for environments
            where insight without action is incomplete.
          </p>

          {/* Founder Card */}
          <div className="mt-10 p-6 rounded-3xl border border-stone-200 bg-white/60 backdrop-blur-xl max-w-xl shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center gap-5">
              
              {/* Avatar */}
              <div className="w-16 h-16 rounded-full bg-stone-100 border border-stone-200/20 text-stone-500 flex items-center justify-center font-syne font-bold text-lg shadow-sm">
                PK
              </div>

              {/* Info */}
              <div>
                <h3 className="text-xl text-stone-900 font-bold font-syne uppercase tracking-tight">
                  Pankaj Kumar
                </h3>
                <p className="mt-1 text-sm text-stone-400 leading-relaxed font-light">
                  Founder · AI Systems & Enterprise Intelligence
                </p>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/about"
              className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-stone-900 text-stone-50 font-syne text-xs uppercase tracking-widest hover:bg-stone-800 hover:text-white transition-all duration-300 shadow-[0_4px_20px_rgba(120,113,108,0.15)]"
            >
              Read Full Story
              <ArrowUpRight
                size={16}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
              />
            </Link>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <div
                  key={tag}
                  className="px-4 py-2 rounded-full border border-stone-200 bg-white/60 text-[10px] font-syne uppercase tracking-widest text-stone-400 shadow-sm"
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
              className="group border-b border-stone-200 py-8 last:border-b-0 hover:border-stone-400 transition-colors duration-300 cursor-default"
            >
              <div className="grid grid-cols-[50px_1fr] gap-6">

                {/* Number */}
                <div className="text-sm text-stone-300 group-hover:text-stone-900 font-syne font-bold tracking-[0.2em] pt-1 transition-colors duration-300">
                  {item.number}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl md:text-2xl font-bold font-syne uppercase tracking-tight text-stone-900 group-hover:text-stone-950 transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm md:text-base text-stone-400 group-hover:text-stone-500 leading-relaxed font-light transition-colors duration-300 max-h-0 group-hover:max-h-40 overflow-hidden" style={{ transition: "max-height 0.4s ease, color 0.3s ease" }}>
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