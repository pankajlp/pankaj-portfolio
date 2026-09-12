"use client";
import { useEffect, useState } from "react";

export default function ArticlePage() {
  const [scrollProgress, setScrollProgress] = useState(0);

useEffect(() => {

  const updateScrollProgress = () => {

    const scrollTop = window.scrollY;

    const docHeight =
      document.documentElement.scrollHeight -
      window.innerHeight;

    const progress =
      (scrollTop / docHeight) * 100;

    setScrollProgress(progress);
  };

  window.addEventListener(
    "scroll",
    updateScrollProgress
  );

  return () =>
    window.removeEventListener(
      "scroll",
      updateScrollProgress
    );

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
            {/* Accent Dot */}
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
          Enterprise AI
        </div>

        {/* Title */}
        <h1 className="text-[36px] md:text-[46px] leading-[1.1] tracking-[-0.03em] font-serif text-[#efe9df]">
          Building AI procurement intelligence systems
          with local LLMs
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-[18px] leading-[1.7] text-[#8a8175]">
                Procurement workflows are fragmented by design.
      RFQs arrive as spreadsheets, PDFs, emails,
      pricing tables, carrier notes, and operational updates —
      usually spread across disconnected systems.
        </p>

        {/* Meta */}
        <div className="mt-8 pb-10 border-b border-white/10 text-[13px] text-[#8a8175] flex items-center gap-3 flex-wrap">
          <span>Pankaj Kumar</span>
          <span>•</span>
          <span>May 2026</span>
          <span>•</span>
          <span>6 min read</span>
        </div>

        {/* Section */}
<section className="mt-2">

  <div className="mt-8 space-y-2 text-[18px] leading-[2] text-[#efe9df]">

    <p>
      Traditional dashboards help visualize procurement activity,
      but they rarely help operational teams reason across
      unstructured procurement context in real time.
    </p>

    <p>
      That is where AI-native procurement systems become interesting.
      Not because they replace procurement expertise,
      but because they reduce the operational friction required
      to assemble context before decisions can even begin.
    </p>
  </div>
</section>

{/* Why Local LLMs */}
<section className="mt-16">

  <h2 className="text-[28px] md:text-[36px] leading-[1.15] tracking-[-0.03em] font-serif text-[#efe9df]">
    Why local LLMs matter
  </h2>

  <div className="mt-10 grid md:grid-cols-2 gap-6">

    {[
      {
        title: "Privacy",
        desc: "Procurement workflows often involve sensitive pricing, carrier contracts, and operational data that organizations may not want routed through external APIs.",
      },
      {
        title: "Cost",
        desc: "Running local inference dramatically reduces recurring token costs for large-scale operational querying.",
      },
      {
        title: "Control",
        desc: "Local deployments provide tighter control over prompting strategies, retrieval logic, and workflow orchestration.",
      },
      {
        title: "Latency",
        desc: "Operational systems benefit from fast local inference loops, especially during interactive analytics workflows.",
      },
    ].map((item) => (
      <div
        key={item.title}
        className="rounded-2xl border border-white/10 bg-white/[0.03] p-8"
      >
        <h3 className="text-[24px] font-serif text-[#efe9df]">
          {item.title}
        </h3>

        <p className="mt-4 text-[16px] leading-[1.9] text-[#8a8175]">
          {item.desc}
        </p>
      </div>
    ))}
  </div>
</section>

{/* Architecture */}
<section className="mt-16">

  <h2 className="text-[28px] md:text-[36px] leading-[1.15] tracking-[-0.03em] font-serif text-[#efe9df]">
    The architecture stack
  </h2>

  <div className="mt-10 space-y-8 text-[18px] leading-[2] text-[#efe9df]">

    <p>
      The architecture behind AI-native procurement systems
      is less about any single model and more about how
      operational context flows through the stack.
    </p>

    <p>
      In practice, the system combined lightweight analytics,
      local inference, structured retrieval,
      and operational workflow orchestration.
    </p>
  </div>

  {/* Stack */}
  <div className="mt-10 flex flex-wrap gap-3">

    {[
      "DuckDB",
      "llama.cpp",
      "Phi-4",
      "Power BI",
      "Python",
      "Text-to-SQL",
      "Local embeddings",
      "Operational APIs",
      "Prompt orchestration",
    ].map((item) => (
      <div
        key={item}
        className="px-4 py-2 rounded-full bg-[#eeede8] border border-white/10 text-[#8a8175] text-[14px]"
      >
        {item}
      </div>
    ))}
  </div>

  <div className="mt-10 space-y-8 text-[18px] leading-[2] text-[#efe9df]">

    <p>
      DuckDB handled lightweight analytical querying directly
      against operational datasets, while llama.cpp enabled
      efficient local model execution without requiring
      heavy cloud infrastructure.
    </p>

    <p>
      Smaller reasoning models such as Phi-4 proved surprisingly
      capable when paired with carefully engineered prompts,
      retrieval constraints, and schema-aware context injection.
    </p>
  </div>
</section>

{/* Text-to-SQL */}
<section className="mt-16">

  <h2 className="text-[30px] md:text-[36px] leading-[1.15] tracking-[-0.03em] font-serif text-[#efe9df]">
    The real complexity of text-to-SQL systems
  </h2>

  <div className="mt-10 space-y-8 text-[18px] leading-[2] text-[#efe9df]">

    <p>
      Most discussions around text-to-SQL workflows focus almost entirely
      on the model itself.
      In practice, the model is only one layer inside a much larger pipeline.
    </p>
  </div>

  {/* Pipeline */}
  <div className="mt-12 space-y-5">

    {[
      {
        step: "01",
        title: "Schema understanding",
        desc: "Injecting relational structure, business terminology, and operational context into the prompt.",
      },
      {
        step: "02",
        title: "Prompt orchestration",
        desc: "Constraining the model toward deterministic query generation while minimizing hallucinations.",
      },
      {
        step: "03",
        title: "Token budgeting",
        desc: "Balancing retrieval depth, schema detail, and conversational context within practical inference limits.",
      },
      {
        step: "04",
        title: "Query validation",
        desc: "Ensuring generated SQL remains operationally safe and analytically correct before execution.",
      },
    ].map((item) => (
      <div
        key={item.step}
        className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 flex gap-6"
      >
        <div className="text-[#efe9df] text-[13px] font-medium tracking-[0.12em]">
          {item.step}
        </div>

        <div>
          <h3 className="text-[22px] font-serif text-[#efe9df]">
            {item.title}
          </h3>

          <p className="mt-3 text-[16px] leading-[1.9] text-[#8a8175]">
            {item.desc}
          </p>
        </div>
      </div>
    ))}
  </div>

  <div className="mt-10 space-y-8 text-[18px] leading-[2] text-[#efe9df]">

    <p>
      The engineering challenge is rarely just “getting the model to work.”
      It is designing enough operational structure around the model
      that reasoning becomes reliable at scale.
    </p>
  </div>
</section>

{/* Closing */}
<section className="mt-24 border-t border-white/10 pt-16">

  <p className="text-[22px] italic leading-[2] text-[#8a8175] border-l-[3px] border-white/10 pl-6">
    The most difficult part of building AI procurement systems
    is not choosing the model.
    It is understanding your operational data deeply enough
    to reason over it meaningfully.
  </p>

  <p className="mt-10 text-[18px] leading-[2] text-[#efe9df]">
    That is the part most AI discussions skip —
    but in practice, it is where the real systems engineering begins.
  </p>
</section></article>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-10 text-center text-[13px] text-[#8a8175]">
        © 2026 Pankaj Kumar · Enterprise AI & Logistics Intelligence
      </footer>
    </main>
  );
}