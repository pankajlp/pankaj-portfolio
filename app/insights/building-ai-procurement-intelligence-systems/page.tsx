"use client";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
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
    <main id="main" className="min-h-dvh bg-paper text-ink pt-[var(--nav-h)]">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[3px] bg-paper-3 z-[200]">
        <div
          className="h-full bg-accent text-accent-ink transition duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <Navbar />

      {/* Article */}
      <article className="max-w-3xl mx-auto px-6 py-20">
        {/* Tag */}

        {/* Title */}
        <h1 className="text-3xl md:text-[46px] leading-[1.1] font-display text-ink">
          Building AI procurement intelligence systems
          with local LLMs
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg leading-[1.7] text-muted">
                Procurement workflows are fragmented by design.
      RFQs arrive as spreadsheets, PDFs, emails,
      pricing tables, carrier notes, and operational updates , 
      usually spread across disconnected systems.
        </p>

        {/* Meta */}
        <div className="mt-8 pb-10 border-b border-rule-2 text-sm text-muted flex items-center gap-3 flex-wrap">
          <span>Pankaj Kumar</span>
          <span>,</span>
          <span>May 2026</span>
          <span>,</span>
          <span>6 min read</span>
        </div>

        {/* Section */}
<section className="mt-2">

  <div className="mt-8 space-y-2 text-lg leading-[2] text-ink">

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

  <h2 className="text-2xl md:text-3xl leading-[1.15] font-display text-ink">
    Why local LLMs matter
  </h2>

  <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">

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
        className="rounded-card border border-rule-2 bg-paper-2 p-6 md:p-8"
      >
        <h3 className="text-xl font-display text-ink">
          {item.title}
        </h3>

        <p className="mt-4 text-md leading-[1.9] text-muted">
          {item.desc}
        </p>
      </div>
    ))}
  </div>
</section>

{/* Architecture */}
<section className="mt-16">

  <h2 className="text-2xl md:text-3xl leading-[1.15] font-display text-ink">
    The architecture stack
  </h2>

  <div className="mt-10 space-y-8 text-lg leading-[2] text-ink">

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
        className="px-4 py-2 rounded-full bg-paper-3 border border-rule-2 text-muted text-sm"
      >
        {item}
      </div>
    ))}
  </div>

  <div className="mt-10 space-y-8 text-lg leading-[2] text-ink">

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

  <h2 className="text-2xl md:text-3xl leading-[1.15] font-display text-ink">
    The real complexity of text-to-SQL systems
  </h2>

  <div className="mt-10 space-y-8 text-lg leading-[2] text-ink">

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
        className="rounded-card border border-rule-2 bg-paper-2 p-6 md:p-8 flex gap-6"
      >
        <div className="text-ink text-sm font-medium">
          {item.step}
        </div>

        <div>
          <h3 className="text-xl font-display text-ink">
            {item.title}
          </h3>

          <p className="mt-3 text-md leading-[1.9] text-muted">
            {item.desc}
          </p>
        </div>
      </div>
    ))}
  </div>

  <div className="mt-10 space-y-8 text-lg leading-[2] text-ink">

    <p>
      The engineering challenge is rarely just “getting the model to work.”
      It is designing enough operational structure around the model
      that reasoning becomes reliable at scale.
    </p>
  </div>
</section>

{/* Closing */}
<section className="mt-24 border-t border-rule-2 pt-16">

  <p className="text-xl italic leading-[2] text-muted border-l-[3px] border-rule-2 pl-6">
    The most difficult part of building AI procurement systems
    is not choosing the model.
    It is understanding your operational data deeply enough
    to reason over it meaningfully.
  </p>

  <p className="mt-10 text-lg leading-[2] text-ink">
    That is the part most AI discussions skip , 
    but in practice, it is where the real systems engineering begins.
  </p>
</section></article>

      <Footer />
    </main>
  );
}