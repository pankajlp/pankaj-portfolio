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
    <main className="min-h-screen bg-[#f5f4f0] text-[#1c1917]">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[3px] bg-stone-200/50 z-[200]">
        <div
          className="h-full bg-stone-900 text-white transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Clean Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-[#f5f4f0]/85 backdrop-blur-md border-b border-stone-200 px-6 py-5">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 shrink-0">
            {/* Accent Dot */}
            <div className="w-2.5 h-2.5 rounded-full bg-stone-900 text-white shadow-[0_0_8px_rgba(120, 113, 108,0.3)]" />
            <span className="text-[17px] font-bold tracking-tight font-serif text-stone-900">
              NordNeuron
            </span>
          </a>
          <a
            href="/insights"
            className="text-sm font-medium text-[#6b7280] hover:text-stone-900 transition-colors duration-300 flex items-center gap-1.5"
          >
            <span>←</span> Back to Insights
          </a>
        </div>
      </nav>

      {/* Article */}
      <article className="max-w-3xl mx-auto px-6 py-20">
        {/* Tag */}
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-stone-100 text-stone-900 border border-stone-200 text-[11px] uppercase tracking-[0.08em] mb-8 font-medium">
          Agentic AI
        </div>

        {/* Title */}
        <h1 className="text-[42px] md:text-[56px] leading-[1.1] tracking-[-0.03em] font-serif text-[#1c1917]">
          The SLM Default: Why 2026&apos;s Production Agents Run Small Models First
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-[20px] leading-[1.7] text-stone-500 italic">
          Frontier launches still make the headlines, but the agent stacks actually shipping this year default most steps to a small, fine-tuned model and escalate to a frontier one only when a step earns it.
        </p>

        {/* Meta */}
        <div className="mt-8 pb-10 border-b border-stone-200 text-[13px] text-stone-400 flex items-center gap-3 flex-wrap">
          <span>Pankaj Kumar</span>
          <span>•</span>
          <span>September 2026</span>
          <span>•</span>
          <span>7 min read</span>
        </div>

        {/* Intro */}
        <section className="mt-14 space-y-7 text-[18px] leading-[2] text-[#1c1917]">
          <p>
            Every few weeks another frontier model tops a benchmark leaderboard, and the coverage treats each release as the story of where agentic AI is headed. Sit inside an actual production agent stack in 2026 and a quieter, less photogenic story is playing out: most of the steps in the loop never touch a frontier model at all. They run on something in the 1–8B range, fine-tuned for one narrow job, chosen because it is fast and cheap enough to call on every single step without anyone doing a cost review.
          </p>

          <p>
            NVIDIA&apos;s research group put a name and an argument to this shift in a widely circulated 2025 paper, &quot;Small Language Models Are the Future of Agentic AI&quot; (arXiv 2506.02153). The authors&apos; case rests on three claims: small models are already capable enough for most of what an agent asks of them, they are architecturally a better fit for agentic systems than a single large model, and they are unavoidably cheaper to run at the volume agents actually generate. A year on, that argument reads less like a prediction and more like a description of how teams are already building.
          </p>

          <p>
            What changed between the paper and now isn&apos;t model capability — it&apos;s that routing between model sizes stopped being a research idea and became an infrastructure layer teams buy or build deliberately. That&apos;s the part worth examining: why small models cover most of an agent loop, how the routing layer that makes this safe actually works, and where the pattern still runs into limits nobody has solved yet.
          </p>
        </section>

        {/* Section 1 */}
        <section className="mt-20">
          <h2 className="text-[34px] leading-[1.2] tracking-[-0.02em] font-serif text-[#1c1917]">
            Most of what an agent does doesn&apos;t need a frontier model
          </h2>

          <div className="mt-8 space-y-7 text-[18px] leading-[2] text-[#1c1917]">
            <p>
              Break an agentic loop into its actual steps and the profile is narrower than the marketing suggests: parse a structured instruction, pick a tool from a fixed set, format the call against a known schema, validate the response, decide whether to retry or move on. None of that is open-ended reasoning. It is closer to classification and constrained generation, which is exactly the workload a fine-tuned small model handles well — often better than a general-purpose frontier model, because the small model was trained on nothing but that task and doesn&apos;t have to arbitrate between it and a thousand other capabilities.
            </p>

            <p>
              The 2026 lineup teams actually deploy for this work includes Microsoft&apos;s Phi-4-mini (3.8B) alongside the larger Phi-4 for steps that need more reasoning headroom, Meta&apos;s Llama 3.2 1B and 3B, Mistral&apos;s Ministral 3B and 8B, Alibaba&apos;s Qwen2.5 in its 0.5B–3B range, and Google&apos;s Gemma 2 at 2B and 9B. None of these appear on a frontier leaderboard. They appear in the tool-calling, extraction, and routing layers of agent pipelines because they run in single-digit milliseconds on modest hardware, can be fine-tuned on a few thousand labeled traces from the frontier model they&apos;re replacing, and cost an order of magnitude less per call — reported figures cluster around a 10–30x reduction on repetitive, schema-constrained tasks.
            </p>

            <p>
              That last point compounds in a way flat benchmarks don&apos;t capture. A single frontier call is cheap in isolation; an agent that re-invokes a model dozens of times per task, on every retry and every re-read of a tool&apos;s output, turns that per-call cost into the dominant line item in an AI product&apos;s margin. Pushing the repetitive 80% of those calls onto a small model is the difference between an agent workflow that scales and one that gets throttled by its own token bill.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="mt-20">
          <h2 className="text-[34px] leading-[1.2] tracking-[-0.02em] font-serif text-[#1c1917]">
            Routing is the architecture, not a cost hack bolted on after
          </h2>

          <div className="mt-8 space-y-7 text-[18px] leading-[2] text-[#1c1917]">
            <p>
              Swapping a frontier model for a small one on every step would just trade an expensive failure mode for a cheap one. The pattern that actually made SLM-first agents viable in production is an explicit routing layer sitting between the agent loop and the model pool: a fast, cheap model attempts each step first, and the request escalates to a stronger model only when the cheap attempt fails validation, comes back with low confidence, or exceeds a retry budget. NVIDIA&apos;s open-source NeMo Switchyard formalizes this as an orchestration layer that keeps routing logic separate from the provider endpoints underneath it, so the decision of which model handles a step is a config change, not a rewrite.
            </p>

            <p>
              The numbers teams report from this pattern are large enough to explain the adoption curve. LangChain&apos;s own benchmarking of an escalation router alternating between Nemotron 3.5 Lightning and Claude Opus 4.8 measured a 74% cost reduction against always calling the frontier model, with no measurable quality gap on the evaluated tasks. Cognition reported a similar shape with Devin Desktop&apos;s staged routing: near-frontier coding performance at roughly 28% lower cost. The broader pattern cited across 2026 production write-ups is a 70/20/10 traffic split across cheap, mid, and frontier tiers, landing 50–80% total inference cost reduction while holding 90–95% of frontier-only quality.
            </p>

            <p>
              The mechanism behind those numbers is unglamorous: most agent steps are easy, so most steps resolve on the first, cheap attempt, and the frontier model only gets invoked for the genuinely ambiguous or high-stakes fraction — exactly the cases it&apos;s worth paying for. The routing layer is what turns &quot;use small models&quot; from a blanket substitution into a targeted one.
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section className="mt-20">
          <h2 className="text-[34px] leading-[1.2] tracking-[-0.02em] font-serif text-[#1c1917]">
            What doesn&apos;t get smaller, and what gets harder to see
          </h2>

          <div className="mt-8 space-y-7 text-[18px] leading-[2] text-[#1c1917]">
            <p>
              None of this argues the frontier model is going away. Long-context synthesis, genuinely open-ended requests, and the judgment call of whether to escalate in the first place still lean on the larger model — the NVIDIA paper is explicit that the frontier model&apos;s remaining job is the tough, open-ended, long-context minority of the workload, not the whole of it. The harder problem is that a per-step confidence signal from a 3B model is exactly the least reliable thing precisely when a step is genuinely hard, so a routing layer that trusts self-reported confidence too literally will occasionally let a wrong tool call through with the same fluent, confident-looking output a correct one would have produced.
            </p>

            <p>
              The other cost this pattern quietly introduces is evaluation debt. When a single frontier model handled every step, one end-to-end eval suite could catch most regressions. Once step three of a twelve-step loop runs on a small model you fine-tuned last month, a regression there can hide inside an aggregate task-success metric that still looks fine on average. Production teams converging on this architecture in 2026 have responded by building held-out eval sets — a few hundred prompts exercising tool calling, multi-step reasoning, refusal behavior, and recovery from a failed call, scored per step rather than only end to end. That eval investment is the real price of the cost savings, and it&apos;s easy to underbudget it if the small-model swap gets treated as a drop-in optimization instead of an architectural change.
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-stone-200 my-16" />

        {/* Closing */}
        <div className="border-l-[3px] border-stone-200 pl-6 text-[18px] italic leading-[2] text-stone-500">
          The interesting number for 2026 isn&apos;t which model leads a benchmark — it&apos;s how much of a production agent&apos;s traffic never reaches one. Treat the routing layer and its per-step evals as the architecture decision, not an afterthought bolted on once the frontier bill arrives.
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-stone-200 px-6 py-10 text-center text-[13px] text-stone-400">
        © 2026 Pankaj Kumar · Enterprise AI & Logistics Intelligence
      </footer>
    </main>
  );
}
