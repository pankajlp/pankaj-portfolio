"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "./SplitText";

gsap.registerPlugin(ScrollTrigger);

const capabilities = [
  {
    number: "01",
    title: "Business Intelligence",
    description:
      "Enterprise-grade Power BI systems and operational analytics platforms built for scale, not just reporting.",
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
      className="relative py-32 px-6 md:px-10 bg-transparent overflow-hidden border-t border-rule"
    >

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-20">
        
        {/* LEFT SIDE (Pinned/Sticky) */}
        <div className="lg:sticky lg:top-32 h-fit space-y-6">

          {/* Heading */}
          <div className="block">
            <SplitText
              text={"Beyond Dashboards , "}
              charClass="about-char"
              className="text-4xl md:text-5xl font-medium font-display text-ink leading-[1.05]"
            />
          </div>
          <div className="block mt-2">
            <SplitText
              text={"Toward Enterprise\nIntelligence."}
              charClass="about-char"
              className="text-4xl md:text-5xl font-medium font-display text-muted leading-[1.05]"
            />
          </div>

          {/* Paragraph */}
          <p className="mt-8 text-base md:text-lg text-ink-2 leading-relaxed max-w-2xl">
            NordNeuron designs intelligent operational systems that
            unify analytics, automation, and decision-making into a
            single enterprise layer, purpose-built for environments
            where insight without action is incomplete.
          </p>

          {/* Founder Card */}
          <div className="mt-10 p-6 rounded-card border border-rule-2 bg-paper-2 max-w-xl">
            <div className="flex flex-col sm:flex-row sm:items-center gap-5">

              {/* Avatar */}
              <div className="w-16 h-16 rounded-full bg-paper-2 border border-accent/30 text-accent flex items-center justify-center font-display font-medium text-lg">
                PK
              </div>

              {/* Info */}
              <div>
                <h3 className="text-xl text-ink font-medium font-display">
                  Pankaj Kumar
                </h3>
                <p className="mt-1 text-sm text-muted leading-relaxed">
                  Founder, AI Systems & Enterprise Intelligence
                </p>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <div
                  key={tag}
                  className="px-4 py-2 rounded-full border border-rule-2 bg-paper-2 text-xs text-ink-2"
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
              className="group border-b border-rule py-8 last:border-b-0 hover:border-accent/40 transition-colors duration-300 cursor-default"
            >
              <div className="grid grid-cols-[50px_1fr] gap-6">

                {/* Number */}
                <div className="text-sm text-muted group-hover:text-accent font-bold pt-1 transition-colors duration-300">
                  {item.number}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl md:text-2xl font-medium font-display text-ink transition-colors duration-300">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm md:text-base text-muted group-hover:text-ink-2 leading-relaxed transition-colors duration-300 max-h-0 group-hover:max-h-40 overflow-hidden" style={{ transition: "max-height 0.4s ease, color 0.3s ease" }}>
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