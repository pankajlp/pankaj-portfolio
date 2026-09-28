"use client";
import { useEffect, useState } from "react";

// NordNeuron Insights article template.
// Copy to app/insights/<slug>/page.tsx and replace every {{PLACEHOLDER}}.
// Keep the scroll-progress bar, nav, and footer exactly as-is — that shell is
// identical across every article. Body text uses smart quotes and &apos; /
// &quot; entities inside JSX. Add 3–4 sections; duplicate the Section block.

export default function ArticlePage() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <main className="min-h-screen bg-[#0c0b0a] text-[#efe9df]">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[3px] bg-white/10 z-[200]">
        <div
          className="h-full bg-[#c8a86b] text-[#171310] transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Clean Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-[#0c0b0a]/85 backdrop-blur-md border-b border-white/10 px-6 py-5">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 shrink-0">
            <div className="w-2.5 h-2.5 rounded-full bg-[#c8a86b] text-[#171310] shadow-[0_0_8px_rgba(120, 113, 108,0.3)]" />
            <span className="text-[17px] font-bold tracking-tight font-serif text-[#f2ede3]">
              NordNeuron
            </span>
          </a>
          <a
            href="/insights"
            className="text-sm font-medium text-[#a89f8f] hover:text-[#f2ede3] transition-colors duration-300 flex items-center gap-1.5"
          >
            <span>←</span> Back to Insights
          </a>
        </div>
      </nav>

      {/* Article */}
      <article className="max-w-3xl mx-auto px-6 py-20">
        {/* Tag */}
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/[0.06] text-[#f2ede3] border border-white/10 text-[11px] uppercase tracking-[0.08em] mb-8 font-medium">
          {{CATEGORY}}
        </div>

        {/* Title */}
        <h1 className="text-[36px] md:text-[46px] leading-[1.1] tracking-[-0.03em] font-serif text-[#efe9df]">
          {{TITLE}}
        </h1>

        {/* Subtitle — one sentence stating the thesis */}
        <p className="mt-6 text-[19px] leading-[1.7] text-[#8a8175] italic">
          {{SUBTITLE}}
        </p>

        {/* Meta */}
        <div className="mt-8 pb-10 border-b border-white/10 text-[13px] text-[#8a8175] flex items-center gap-3 flex-wrap">
          <span>Pankaj Kumar</span>
          <span>•</span>
          <span>{{MONTH_YEAR}}</span>
          <span>•</span>
          <span>{{READ_TIME}} min read</span>
        </div>

        {/* Intro — ~3 paragraphs, no heading */}
        <section className="mt-14 space-y-7 text-[18px] leading-[2] text-[#efe9df]">
          <p>{{INTRO_PARAGRAPH_1}}</p>
          <p>{{INTRO_PARAGRAPH_2}}</p>
          <p>{{INTRO_PARAGRAPH_3}}</p>
        </section>

        {/* Section — duplicate this block for each of 3–4 sections.
            The final section is usually a set of <strong>bolded lead-in</strong>
            recommendations, one per paragraph. */}
        <section className="mt-20">
          <h2 className="text-[28px] leading-[1.2] tracking-[-0.02em] font-serif text-[#efe9df]">
            {{SECTION_HEADING}}
          </h2>

          <div className="mt-8 space-y-7 text-[18px] leading-[2] text-[#efe9df]">
            <p>{{SECTION_PARAGRAPH_1}}</p>
            <p>{{SECTION_PARAGRAPH_2}}</p>
            <p>{{SECTION_PARAGRAPH_3}}</p>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-white/10 my-16" />

        {/* Closing sign-off */}
        <div className="border-l-[3px] border-white/10 pl-6 text-[18px] italic leading-[2] text-[#8a8175]">
          NordNeuron builds AI and operational intelligence systems with a focus
          on LLM architecture, freight analytics, and enterprise automation —
          {{CLOSING_TAILORED_CLAUSE}}.
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-10 text-center text-[13px] text-[#8a8175]">
        © 2026 Pankaj Kumar · Enterprise AI & Logistics Intelligence
      </footer>
    </main>
  );
}
