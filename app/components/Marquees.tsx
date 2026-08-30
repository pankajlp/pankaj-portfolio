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
    <section className="relative bg-[#100e0c] py-14 overflow-hidden border-t border-b border-white/[0.06]">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[150px] bg-[#c8a86b]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 space-y-6">
        
        {/* Ticker 1: Left direction */}
        <Marquee speed={45} gradient={false} play={!reducedMotion} direction="left" pauseOnHover={true}>
          <div className="flex items-center gap-12 pr-12">
            {ticker1.map((item) => (
              <div key={item} className="flex items-center gap-4">
                <span className="font-syne italic font-normal tracking-tight text-2xl sm:text-4xl text-[#f2ede3]">
                  {item}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#c8a86b]" />
              </div>
            ))}
          </div>
        </Marquee>

        {/* Ticker 2: Right direction */}
        <Marquee speed={40} gradient={false} play={!reducedMotion} direction="right" pauseOnHover={true}>
          <div className="flex items-center gap-12 pr-12">
            {ticker2.map((item) => (
              <div key={item} className="flex items-center gap-4">
                <span className="font-syne italic font-normal tracking-tight text-2xl sm:text-4xl text-[#6f675b]">
                  {item}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#3a352d]" />
              </div>
            ))}
          </div>
        </Marquee>

      </div>
    </section>
  );
}
