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
    <section className="relative bg-paper py-14 overflow-hidden border-t border-b border-rule">

      <div className="relative z-10 space-y-6">
        
        {/* Ticker 1: Left direction */}
        <Marquee speed={45} gradient={false} play={!reducedMotion} direction="left" pauseOnHover={true}>
          <div className="flex items-center gap-12 pr-12">
            {ticker1.map((item) => (
              <div key={item} className="flex items-center gap-4">
                <span className="font-display italic font-normal text-2xl sm:text-4xl text-ink">
                  {item}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              </div>
            ))}
          </div>
        </Marquee>

        {/* Ticker 2: Right direction */}
        <Marquee speed={40} gradient={false} play={!reducedMotion} direction="right" pauseOnHover={true}>
          <div className="flex items-center gap-12 pr-12">
            {ticker2.map((item) => (
              <div key={item} className="flex items-center gap-4">
                <span className="font-display italic font-normal text-2xl sm:text-4xl text-muted">
                  {item}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-paper-3" />
              </div>
            ))}
          </div>
        </Marquee>

      </div>
    </section>
  );
}
