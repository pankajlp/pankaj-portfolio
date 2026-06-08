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

      {/* Header */}
      <header className="border-b border-black/10 px-8 py-5 flex items-center justify-between">
        <span className="text-[18px] tracking-tight font-serif">
          Pankaj Kumar
        </span>
        <a
          href="/insights"
          className="inline-flex items-center gap-2 text-[#6b7280] hover:text-[#1a4fd6] transition-colors duration-300 text-sm font-medium"
        >
          ← Back to Insights
        </a>
        <span className="text-[12px] font-medium text-[#1a4fd6] bg-[#eef2fd] px-3 py-1 rounded-full uppercase tracking-[0.08em]">
          LLM Engineering
        </span>
      </header>

      {/* Article */}
      <article className="max-w-3xl mx-auto px-6 py-20">
        {/* Tag */}
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#eef2fd] text-[#1a4fd6] text-[11px] uppercase tracking-[0.08em] mb-8 font-medium">
          LLM Engineering
        </div>

        {/* Title */}
        <h1 className="text-[42px] md:text-[56px] leading-[1.1] tracking-[-0.03em] font-serif text-[#1a1a18]">
          Fine-tuning vs. Prompting — The Real Tradeoff
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-[20px] leading-[1.7] text-[#5a5a54] italic">
          The question is rarely which technique is better. It is which problem you are actually trying to solve.
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
            A recurring debate in enterprise AI teams: when should you fine-tune a model, and when is careful prompt engineering sufficient?
          </p>

          <p>
            The question sounds technical. In practice, it is mostly a product and operations question in disguise.
          </p>
        </section>

        {/* Section 1 */}
        <section className="mt-20">
          <h2 className="text-[34px] leading-[1.2] tracking-[-0.02em] font-serif text-[#1a1a18]">
            What prompting actually solves
          </h2>

          <div className="mt-8 space-y-7 text-[18px] leading-[2] text-[#1a1a18]">
            <p>
              Prompt engineering — including few-shot examples, chain-of-thought instructions, and structured output constraints — can achieve a surprising amount without touching model weights.
            </p>

            <p>
              For most enterprise use cases, the model already knows enough. What it lacks is task framing, output format constraints, domain terminology awareness, and context about how to use the information it retrieves. Good prompting addresses all of these.
            </p>

            <p>
              The advantage is iteration speed. Prompt changes are cheap. You can test, evaluate, and refine in hours rather than days. For early-stage systems, that agility matters more than the incremental gain from fine-tuning.
            </p>

            <p>
              The limitation is context window dependency. Every prompt carries overhead. As system complexity grows — more tools, more retrieval, more conversation history — the window fills. Prompting alone does not compress task knowledge into the model; it injects it on every call.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="mt-20">
          <h2 className="text-[34px] leading-[1.2] tracking-[-0.02em] font-serif text-[#1a1a18]">
            What fine-tuning actually solves
          </h2>

          <div className="mt-8 space-y-7 text-[18px] leading-[2] text-[#1a1a18]">
            <p>
              Fine-tuning adjusts model weights to internalize specific behaviors, output formats, or domain reasoning patterns. This makes certain tasks faster, more reliable, and less sensitive to prompt variation.
            </p>

            <p>
              It is particularly effective for:
            </p>

            <ul className="space-y-4 list-disc pl-6 text-[18px] leading-[2] text-[#1a1a18]">
              <li>Consistent output formatting in structured extraction tasks</li>
              <li>Narrow domain vocabulary the base model handles poorly</li>
              <li>Tasks requiring high reliability across many diverse inputs</li>
              <li>Reducing token consumption on repeated, high-volume inference</li>
            </ul>

            <p className="mt-6">
              What fine-tuning does not solve is knowledge recency or retrieval. A fine-tuned model does not know your specific operational data any better than the base model — it has simply learned to behave differently. Confusing behavior alignment with knowledge injection is one of the most common fine-tuning mistakes.
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section className="mt-20">
          <h2 className="text-[34px] leading-[1.2] tracking-[-0.02em] font-serif text-[#1a1a18]">
            QLoRA and the case for efficient fine-tuning
          </h2>

          <div className="mt-8 space-y-7 text-[18px] leading-[2] text-[#1a1a18]">
            <p>
              Full fine-tuning of large models requires significant compute. For most teams, QLoRA — quantized low-rank adaptation — changes the economics.
            </p>

            <p>
              By training only a small set of adapter weights on a quantized base model, QLoRA makes fine-tuning practical on a single GPU. The quality trade-off relative to full fine-tuning is modest for most operational tasks, while the infrastructure requirements drop dramatically.
            </p>

            <p>
              A QLoRA run on a 7B model for a structured extraction task can be completed on a consumer-grade GPU in hours. That puts fine-tuning within reach for teams that would otherwise treat it as out of scope.
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section className="mt-20">
          <h2 className="text-[34px] leading-[1.2] tracking-[-0.02em] font-serif text-[#1a1a18]">
            The real decision framework
          </h2>

          <div className="mt-8 space-y-7 text-[18px] leading-[2] text-[#1a1a18]">
            <p>
              The honest answer to the prompting vs. fine-tuning question involves three conditions:
            </p>

            <p>
              <strong>Fine-tune when:</strong> the task is well-defined, the output format is stable, you have enough labeled examples (hundreds to thousands), and you are running high inference volume where token savings compound.
            </p>

            <p>
              <strong>Prompt when:</strong> requirements are still evolving, the domain knowledge is available in context, or the task diversity is too wide for fine-tuning to generalize reliably.
            </p>

            <p>
              <strong>Combine both when:</strong> you need consistent format and behavior (fine-tuning) alongside dynamic retrieval and operational context injection (prompting). This is increasingly the architecture pattern that works best at scale.
            </p>
          </div>
        </section>

        {/* Section 5 */}
        <section className="mt-20">
          <h2 className="text-[34px] leading-[1.2] tracking-[-0.02em] font-serif text-[#1a1a18]">
            Where the industry actually is
          </h2>

          <div className="mt-8 space-y-7 text-[18px] leading-[2] text-[#1a1a18]">
            <p>
              The honest state of enterprise LLM deployment is that most production systems are still running on base models with increasingly complex prompting pipelines — and doing reasonably well.
            </p>

            <p>
              Fine-tuning becomes a clear investment when prompting starts to show ceilings: inconsistent outputs on format-sensitive tasks, context window saturation, latency from large system prompts, or inference costs that have become significant at scale.
            </p>

            <p>
              Reaching that ceiling is a sign that a system has matured enough to benefit from fine-tuning. Most early-stage enterprise AI systems have not reached it yet — and treating fine-tuning as a first step is usually the wrong sequencing.
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
