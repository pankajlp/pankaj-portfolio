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
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <main className="min-h-screen bg-[#fafaf8] text-[#1a1a18]">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[3px] bg-black/5 z-[200]">
        <div
          className="h-full bg-cyan-400 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Clean Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-[#fafaf8]/85 backdrop-blur-md border-b border-black/5 px-6 py-5">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 shrink-0">
            {/* Accent Dot */}
            <div className="w-2.5 h-2.5 rounded-full bg-cyan-500 shadow-[0_0_8px_#06b6d4]" />
            <span className="text-[17px] font-bold tracking-tight font-serif text-black">
              NordNeuron
            </span>
          </a>
          <a
            href="/insights"
            className="text-sm font-medium text-[#6b7280] hover:text-[#1a4fd6] transition-colors duration-300 flex items-center gap-1.5"
          >
            <span>←</span> Back to Insights
          </a>
        </div>
      </nav>

      {/* Article */}
      <article className="max-w-3xl mx-auto px-6 py-20">
        {/* Tag */}
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#eef2fd] text-[#1a4fd6] text-[11px] uppercase tracking-[0.08em] mb-8 font-medium">
          LLMOps
        </div>

        {/* Title */}
        <h1 className="text-[42px] md:text-[56px] leading-[1.1] tracking-[-0.03em] font-serif text-[#1a1a18]">
          LLMOps — What Enterprise Teams Miss When Moving to Production
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-[20px] leading-[1.7] text-[#5a5a54] italic">
          Getting an LLM to work in a demo and operating it reliably in production are fundamentally different engineering problems.
        </p>

        {/* Meta */}
        <div className="mt-8 pb-10 border-b border-black/10 text-[13px] text-[#9a9a92] flex items-center gap-3 flex-wrap">
          <span>Pankaj Kumar</span>
          <span>•</span>
          <span>June 2026</span>
          <span>•</span>
          <span>6 min read</span>
        </div>

        {/* Intro */}
        <section className="mt-14 space-y-7 text-[18px] leading-[2] text-[#1a1a18]">
          <p>
            Enterprise teams are discovering that deploying a language model is straightforward. Operating one in production — reliably, at scale, with measurable quality — is significantly harder.
          </p>

          <p>
            The gap is LLMOps: the operational discipline that sits between a working prototype and a trustworthy production system. Most teams underinvest in it until the problems become visible.
          </p>
        </section>

        {/* Section 1 */}
        <section className="mt-20">
          <h2 className="text-[34px] leading-[1.2] tracking-[-0.02em] font-serif text-[#1a1a18]">
            The observability gap
          </h2>

          <div className="mt-8 space-y-7 text-[18px] leading-[2] text-[#1a1a18]">
            <p>
              Traditional software systems fail in ways that are usually observable: error logs, exception traces, latency spikes, status codes. LLM systems fail quietly.
            </p>

            <p>
              A model may return a plausible-sounding answer that is factually wrong, slightly off-topic, or subtly different in tone from what the application requires. These failures do not produce stack traces. They produce user frustration, eroded trust, and silent degradation that is hard to attribute to any single cause.
            </p>

            <p>
              Observability for LLM systems requires logging inputs, outputs, retrieved context, latency, and — where possible — quality signals for every inference call. Without this, diagnosing regressions is guesswork.
            </p>

            <p>
              The minimum viable observability stack for a production LLM system includes prompt logging with versioning, response quality sampling, latency tracking per call stage (retrieval, inference, post-processing), and token usage monitoring for cost control.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="mt-20">
          <h2 className="text-[34px] leading-[1.2] tracking-[-0.02em] font-serif text-[#1a1a18]">
            Prompt versioning is not optional
          </h2>

          <div className="mt-8 space-y-7 text-[18px] leading-[2] text-[#1a1a18]">
            <p>
              Prompts are software. They have versions. They can introduce regressions. And unlike traditional code, a prompt change can alter model behavior across thousands of dimensions simultaneously.
            </p>

            <p>
              Most teams manage prompts informally — a string in a config file, a comment in a notebook, a message in Slack. This works until it doesn't: a well-intentioned prompt change silently degrades a capability that was previously reliable, and nobody has a record of what changed or when.
            </p>

            <p>
              Treating prompts as versioned artifacts — with changelogs, evaluation runs before promotion, and rollback paths — is not overhead. It is how production LLM systems stay stable as they evolve.
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section className="mt-20">
          <h2 className="text-[34px] leading-[1.2] tracking-[-0.02em] font-serif text-[#1a1a18]">
            Evaluation is the discipline that separates prototypes from systems
          </h2>

          <div className="mt-8 space-y-7 text-[18px] leading-[2] text-[#1a1a18]">
            <p>
              The fastest path from prototype to trustworthy production system is building an evaluation framework early.
            </p>

            <p>
              An evaluation framework for an LLM system consists of: a representative set of test inputs with known-good outputs, automated scoring against quality criteria, and a process for running evaluation before any significant change is deployed.
            </p>

            <p>
              This is not the same as unit testing traditional software. LLM outputs are probabilistic and difficult to evaluate mechanically. But even imperfect automated evaluation — checking output format, detecting refusals, flagging hallucinated entities — is dramatically better than relying on manual spot-checks before deployment.
            </p>

            <p>
              The teams with the most reliable production systems are the ones who treated evaluation as a first-class engineering concern from day one, not an afterthought.
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section className="mt-20">
          <h2 className="text-[34px] leading-[1.2] tracking-[-0.02em] font-serif text-[#1a1a18]">
            Cost architecture at scale
          </h2>

          <div className="mt-8 space-y-7 text-[18px] leading-[2] text-[#1a1a18]">
            <p>
              LLM inference is not free. At low call volumes, token costs are negligible. At operational scale — thousands of queries per day across multiple system components — they compound rapidly.
            </p>

            <p>
              The cost levers that matter most in production:
            </p>

            <p>
              <strong>Context window discipline.</strong> Every token in the context costs money. Injecting full documents when partial retrieval would suffice, or maintaining long conversation histories when they are not needed, wastes significant budget at scale.
            </p>

            <p>
              <strong>Caching.</strong> Many operational queries are semantically similar or identical. Semantic caching — storing prior responses and retrieving them for near-duplicate queries — can reduce inference calls dramatically for query-heavy workflows.
            </p>

            <p>
              <strong>Model routing.</strong> Not every task requires the most capable model. Routing simple, high-confidence queries to smaller, faster, cheaper models — reserving larger models for complex reasoning tasks — substantially changes the unit economics of a production system.
            </p>

            <p>
              <strong>Local inference for volume.</strong> For high-volume tasks where data sensitivity or cost are primary concerns, local inference with quantized models often outperforms cloud APIs on both dimensions.
            </p>
          </div>
        </section>

        {/* Section 5 */}
        <section className="mt-20">
          <h2 className="text-[34px] leading-[1.2] tracking-[-0.02em] font-serif text-[#1a1a18]">
            What this adds up to
          </h2>

          <div className="mt-8 space-y-7 text-[18px] leading-[2] text-[#1a1a18]">
            <p>
              LLMOps is not a role or a toolset. It is an operational mindset: treating language models as components in a production system that require the same engineering rigor as any other infrastructure.
            </p>

            <p>
              The teams that apply that mindset — instrumenting for observability, versioning prompts, investing in evaluation, and thinking carefully about cost architecture — build systems that get more reliable over time.
            </p>

            <p>
              The teams that treat deployment as the endpoint build systems that accumulate invisible technical debt until something breaks badly enough to notice.
            </p>

            <p>
              That gap is where most enterprise AI investments succeed or stall.
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-black/10 my-16" />

        {/* Closing */}
        <div className="border-l-[3px] border-black/10 pl-6 text-[18px] italic leading-[2] text-[#5a5a54]">
          Nordneuron builds AI and operational intelligence systems at NordNeuron, with a focus on LLM architecture, freight analytics, and enterprise automation.
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-black/10 px-6 py-10 text-center text-[13px] text-[#9a9a92]">
        © 2026 Pankaj Kumar · Enterprise AI & Logistics Intelligence
      </footer>
    </main>
  );
}
