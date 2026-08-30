"use client";

import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const ticker1 = [
  "Web Development",
  "Enterprise AI",
  "Analytics Engineering",
  "Intelligent Automation",
  "Decision Systems",
  "Supply Chain Intelligence",
];

const ticker2 = [
  "Python",
  "SQL",
  "Power BI",
  "LLMs",
  "Next.js",
  "Tailwind CSS",
  "React",
  "Data Pipelines",
  "Workflow Automation",
];

export default function Marquees() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const listener = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  return (
    <section className="relative bg-[#0b0b0f] py-14 overflow-hidden border-t border-b border-white/[0.06]">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[150px] bg-[#22d3ee]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 space-y-6">
        
        {/* Ticker 1: Left direction */}
        <Marquee speed={45} gradient={false} play={!reducedMotion} direction="left" pauseOnHover={true}>
          <div className="flex items-center gap-12 pr-12">
            {ticker1.map((item) => (
              <div key={item} className="flex items-center gap-4">
                <span className="font-syne font-bold uppercase tracking-widest text-lg sm:text-2xl text-white">
                  {item}
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#22d3ee] shadow-[0_0_12px_#22d3ee]" />
              </div>
            ))}
          </div>
        </Marquee>

        {/* Ticker 2: Right direction */}
        <Marquee speed={40} gradient={false} play={!reducedMotion} direction="right" pauseOnHover={true}>
          <div className="flex items-center gap-12 pr-12">
            {ticker2.map((item) => (
              <div key={item} className="flex items-center gap-4">
                <span className="font-syne font-bold uppercase tracking-widest text-lg sm:text-2xl text-zinc-600">
                  {item}
                </span>
                <span className="w-2 h-2 rounded-full bg-zinc-700" />
              </div>
            ))}
          </div>
        </Marquee>

      </div>
    </section>
  );
}
