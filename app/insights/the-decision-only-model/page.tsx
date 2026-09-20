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
          AI Research
        </div>

        {/* Title */}
        <h1 className="text-[36px] md:text-[46px] leading-[1.1] tracking-[-0.03em] font-serif text-[#efe9df]">
          The Decision-Only Model: What Jev Signals About How AI Gets Used Next
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-[19px] leading-[1.7] text-[#8a8175] italic">
          TypeSafe AI came out of stealth in September 2026 with a model that doesn&apos;t write a single word. Jev returns typed decisions with calibrated probabilities instead of text — and it points at a split in how production AI is built, not just a faster way to classify.
        </p>

        {/* Meta */}
        <div className="mt-8 pb-10 border-b border-white/10 text-[13px] text-[#8a8175] flex items-center gap-3 flex-wrap">
          <span>Pankaj Kumar</span>
          <span>•</span>
          <span>September 2026</span>
          <span>•</span>
          <span>8 min read</span>
        </div>

        {/* Intro */}
        <section className="mt-14 space-y-7 text-[18px] leading-[2] text-[#efe9df]">
          <p>
            On September 15, 2026, a San Francisco lab called TypeSafe AI came out of two years of stealth with a $40 million seed round and a claim that reads like a category error: a foundation model that generates no text at all. Jev, its first release, does not write sentences, code, or explanations. You hand it a block of unstructured state — a support ticket, a product listing, the current frame of an agent&apos;s context — along with a schema of typed questions, and it hands back typed answers, each carrying a probability distribution and a calibrated confidence value.
          </p>

          <p>
            The provenance is why people looked twice. TypeSafe was founded by Diogo Almeida, a former OpenAI researcher and one of the people behind ChatGPT and its RLHF training, alongside co-founders Erik Gafni and Sasha Sheng. This is not a fringe critique of large language models from outside the field; it is one of the people who helped build the text-generation paradigm arguing that a large share of what we currently ask LLMs to do never needed text in the first place.
          </p>

          <p>
            The framing TypeSafe uses is &quot;System One&quot; — a nod to Kahneman&apos;s fast, intuitive System 1, against the slow, deliberative System 2. Most of the industry has spent three years making System 2 better: models that reason longer, write more, and deliberate harder. Jev is a bet that production systems spend most of their calls on fast, repetitive decisions — route this, classify that, is this safe, should the agent proceed — and that forcing those through a text-generating model is the expensive mistake nobody had questioned.
          </p>
        </section>

        {/* Section 1 */}
        <section className="mt-20">
          <h2 className="text-[28px] leading-[1.2] tracking-[-0.02em] font-serif text-[#efe9df]">
            A model that decides instead of writes
          </h2>

          <div className="mt-8 space-y-7 text-[18px] leading-[2] text-[#efe9df]">
            <p>
              The mechanical difference is the whole story. A conventional LLM is autoregressive: it produces one token, appends it, and predicts the next, looping until it has written out an answer — and if you want structured output, you coax it into JSON and hope it stays valid. Jev is non-autoregressive. According to TypeSafe it uses a parallel sampler that emits all outputs in a single query, taking unstructured state in and returning type-safe structured values in one pass rather than a token-by-token generation.
            </p>

            <p>
              That design produces the property that got the most attention: it cannot hallucinate, and it cannot emit a type error, because the set of valid outputs is enumerated in the schema before the model runs. The model is not writing a string that might or might not parse into your enum — it is selecting among outputs you defined, with a probability attached to each. A whole class of production failure — the model returned prose when you needed a boolean, or invented a category that doesn&apos;t exist — is removed by construction rather than caught by a validator after the fact.
            </p>

            <p>
              The second property is subtler and, for serious use, more important: calibration. TypeSafe trains Jev with a method it calls RLCD — Reinforcement Learning for Calibrated Decisions — which optimizes the output probabilities against real outcomes rather than against human preference the way RLHF does. The claim is that confidence becomes meaningful in aggregate: when Jev says it is 90% sure, it is right about 90% of the time. If that holds up under independent testing, it is a bigger deal than the speed, because it means code can branch on the confidence value — auto-approve above a threshold, escalate below it — with a number that actually means what it says.
            </p>
          </div>
        </section>

        {/* Diagram: how Jev works vs a conventional LLM */}
        <figure className="mt-16 rounded-2xl border border-white/10 bg-white/[0.02] p-5 md:p-7">
          <svg
            viewBox="0 0 680 300"
            role="img"
            aria-label="Comparison of how a conventional LLM and Jev turn unstructured state into a typed decision. A conventional LLM generates text token-by-token, then parses and validates it, with a retry loop when the output is invalid. Jev takes the state plus a typed schema and returns typed decisions with calibrated confidence in a single parallel pass, bounded by the schema so it cannot hallucinate."
            className="w-full h-auto"
            style={{ maxWidth: "100%" }}
          >
            <defs>
              <marker id="arw" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                <path d="M0,0 L10,5 L0,10 z" fill="#6f675b" />
              </marker>
              <marker id="arwg" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                <path d="M0,0 L10,5 L0,10 z" fill="#c8a86b" />
              </marker>
            </defs>

            {/* ===== Lane 1: Conventional LLM ===== */}
            <text x="12" y="20" fill="#8a8175" fontSize="12" fontWeight="600" letterSpacing="0.08em">CONVENTIONAL LLM</text>

            {/* retry arc */}
            <path d="M414,42 C414,22 227,22 227,42" fill="none" stroke="#6f675b" strokeWidth="1.2" strokeDasharray="4 3" markerEnd="url(#arw)" />
            <text x="320" y="18" fill="#8a8175" fontSize="11" textAnchor="middle" fontStyle="italic">invalid → retry</text>

            {/* state */}
            <rect x="12" y="42" width="104" height="62" rx="8" fill="#16130f" stroke="#34302a" />
            <text x="64" y="69" fill="#e7e0d2" fontSize="12" textAnchor="middle">Unstructured</text>
            <text x="64" y="85" fill="#e7e0d2" fontSize="12" textAnchor="middle">state</text>

            <line x1="118" y1="73" x2="150" y2="73" stroke="#6f675b" strokeWidth="1.4" markerEnd="url(#arw)" />

            {/* LLM box with token pills */}
            <rect x="152" y="42" width="150" height="62" rx="8" fill="#16130f" stroke="#34302a" />
            <text x="227" y="58" fill="#e7e0d2" fontSize="12" textAnchor="middle" fontWeight="600">LLM</text>
            <rect x="164" y="66" width="26" height="16" rx="3" fill="#2a2620" />
            <rect x="196" y="66" width="26" height="16" rx="3" fill="#2a2620" />
            <rect x="228" y="66" width="26" height="16" rx="3" fill="#2a2620" />
            <text x="170" y="78" fill="#8a8175" fontSize="9">tok</text>
            <text x="202" y="78" fill="#8a8175" fontSize="9">tok</text>
            <text x="234" y="78" fill="#8a8175" fontSize="9">tok</text>
            <text x="262" y="79" fill="#8a8175" fontSize="12">…</text>
            <text x="227" y="98" fill="#8a8175" fontSize="10" textAnchor="middle" fontStyle="italic">token-by-token</text>

            <line x1="304" y1="73" x2="342" y2="73" stroke="#6f675b" strokeWidth="1.4" markerEnd="url(#arw)" />
            <text x="323" y="67" fill="#8a8175" fontSize="10" textAnchor="middle">text</text>

            {/* parse + validate */}
            <rect x="344" y="42" width="140" height="62" rx="8" fill="#16130f" stroke="#34302a" />
            <text x="414" y="69" fill="#e7e0d2" fontSize="12" textAnchor="middle">Parse +</text>
            <text x="414" y="85" fill="#e7e0d2" fontSize="12" textAnchor="middle">validate</text>

            <line x1="486" y1="73" x2="524" y2="73" stroke="#6f675b" strokeWidth="1.4" markerEnd="url(#arw)" />

            {/* output */}
            <rect x="526" y="42" width="138" height="62" rx="8" fill="#16130f" stroke="#34302a" />
            <text x="595" y="69" fill="#e7e0d2" fontSize="12" textAnchor="middle">Typed value</text>
            <text x="595" y="85" fill="#8a8175" fontSize="11" textAnchor="middle">(if it parses)</text>
            <text x="595" y="120" fill="#8a8175" fontSize="10" textAnchor="middle">seconds · output billed</text>

            {/* divider */}
            <line x1="12" y1="140" x2="664" y2="140" stroke="#241f1a" strokeWidth="1" />

            {/* ===== Lane 2: Jev ===== */}
            <text x="12" y="162" fill="#c8a86b" fontSize="12" fontWeight="600" letterSpacing="0.08em">JEV — SYSTEM ONE</text>

            {/* inputs */}
            <rect x="12" y="176" width="104" height="30" rx="7" fill="#16130f" stroke="#34302a" />
            <text x="64" y="195" fill="#e7e0d2" fontSize="12" textAnchor="middle">Unstructured state</text>
            <rect x="12" y="222" width="104" height="30" rx="7" fill="#1c1710" stroke="#5f4f30" />
            <text x="64" y="241" fill="#d8bd86" fontSize="12" textAnchor="middle">Typed schema</text>

            {/* merge arrows into Jev */}
            <path d="M118,191 C140,191 140,208 152,214" fill="none" stroke="#c8a86b" strokeWidth="1.4" markerEnd="url(#arwg)" />
            <path d="M118,237 C140,237 140,222 152,216" fill="none" stroke="#c8a86b" strokeWidth="1.4" markerEnd="url(#arwg)" />
            <text x="214" y="259" fill="#c8a86b" fontSize="10" textAnchor="middle" fontStyle="italic">one parallel pass</text>

            {/* Jev box */}
            <rect x="154" y="184" width="120" height="60" rx="10" fill="#1c1710" stroke="#c8a86b" strokeWidth="1.4" />
            <text x="214" y="210" fill="#efe9df" fontSize="15" textAnchor="middle" fontWeight="700">Jev</text>
            <text x="214" y="228" fill="#c8a86b" fontSize="10" textAnchor="middle">non-autoregressive</text>

            <line x1="276" y1="214" x2="306" y2="214" stroke="#c8a86b" strokeWidth="1.4" markerEnd="url(#arwg)" />

            {/* output: typed decisions with confidence */}
            <rect x="308" y="168" width="356" height="96" rx="10" fill="#16130f" stroke="#34302a" />

            <text x="322" y="188" fill="#e7e0d2" fontSize="11">category → refund</text>
            <rect x="474" y="180" width="150" height="6" rx="3" fill="#2a2620" />
            <rect x="474" y="180" width="141" height="6" rx="3" fill="#c8a86b" />
            <text x="650" y="187" fill="#d8bd86" fontSize="11" textAnchor="end">0.94</text>

            <text x="322" y="214" fill="#e7e0d2" fontSize="11">needs_human → false</text>
            <rect x="474" y="206" width="150" height="6" rx="3" fill="#2a2620" />
            <rect x="474" y="206" width="132" height="6" rx="3" fill="#c8a86b" />
            <text x="650" y="213" fill="#d8bd86" fontSize="11" textAnchor="end">0.88</text>

            <text x="322" y="240" fill="#e7e0d2" fontSize="11">priority → high</text>
            <rect x="474" y="232" width="150" height="6" rx="3" fill="#2a2620" />
            <rect x="474" y="232" width="118" height="6" rx="3" fill="#c8a86b" />
            <text x="650" y="239" fill="#d8bd86" fontSize="11" textAnchor="end">0.79</text>

            <text x="486" y="282" fill="#8a8175" fontSize="10" textAnchor="middle">schema-bounded · calibrated · can&apos;t hallucinate · 70–500ms · output free</text>
          </svg>

          <figcaption className="mt-5 text-[13px] leading-[1.7] text-[#8a8175] italic">
            The same job, two mechanisms. A conventional LLM generates a typed answer as text, token by token, then parses and validates it — and loops when the string doesn&apos;t fit. Jev takes the state and a typed schema and selects among the schema&apos;s allowed outputs in a single parallel pass, returning each decision with a calibrated confidence. Latency and cost figures are TypeSafe&apos;s claims.
          </figcaption>
        </figure>

        {/* Section 2 */}
        <section className="mt-20">
          <h2 className="text-[28px] leading-[1.2] tracking-[-0.02em] font-serif text-[#efe9df]">
            The numbers, and how to read them
          </h2>

          <div className="mt-8 space-y-7 text-[18px] leading-[2] text-[#efe9df]">
            <p>
              TypeSafe&apos;s headline claims are aggressive: 20–200x faster than frontier LLMs on comparable tasks — response times of 70 to 500 milliseconds against the multi-second latencies of a generating model — and 40–400x cheaper, at $0.042 per million input tokens with output tokens billed at zero. Early adopters describe using it to analyze hundreds of live ads in seconds, to validate steps inside AI agents, for browser automation, and even to clean an agent&apos;s context before handing it back to a larger model. Reporting around the launch noted that infrastructure companies including Vercel and Cloudflare moved quickly to make it available.
            </p>

            <p>
              These are vendor numbers on vendor-chosen tasks, and the honest reading keeps that in view. Independent benchmarks are still thin this early, the model is gated behind a waitlist, and &quot;comparable tasks&quot; is doing real work in that sentence — the comparison is against using a general LLM for a narrow decision, which was always an awkward fit. The right skepticism is not &quot;the numbers are fake&quot; but &quot;the numbers describe the case the tool was built to win.&quot; A decision that genuinely reduces to a bounded, typed choice is exactly where a text model was most wasteful, so a large multiple there is plausible without being universal.
            </p>

            <p>
              The pricing shape is worth sitting with regardless of the exact multiple. Free output tokens is not a discount; it is a statement about what the model is. There is no long generation to bill for — the cost is in reading the state, not in producing prose — so the economics of a high-frequency decision loop change in kind, not just degree. That is the part that will drive adoption even if the 200x headline settles to something smaller in practice.
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section className="mt-20">
          <h2 className="text-[28px] leading-[1.2] tracking-[-0.02em] font-serif text-[#efe9df]">
            What it changes about how AI gets used
          </h2>

          <div className="mt-8 space-y-7 text-[18px] leading-[2] text-[#efe9df]">
            <p>
              The impact Jev points at is not &quot;replace your LLM.&quot; It is the formalization of a split that good agent architectures were already groping toward. An agent loop is full of decisions — should I call this tool, is this output good enough, does this ticket need a human, is this action safe to take — that were being answered by prompting a general model to return a token or two of structured text. Each of those was a full generative call doing the work of a classifier. A decision-only model turns that layer into what it always was: a fast, cheap, bounded function the rest of the system can call thousands of times a loop.
            </p>

            <p>
              Read alongside the trend toward small models handling routine steps, this is the same movement reaching its logical end. First the industry learned to stop sending every step to a frontier model and route the easy ones to a small fine-tuned model. Jev&apos;s bet is that many of those &quot;easy steps&quot; are not small generation tasks at all — they are decisions, and they should not go through a generator of any size. The production stack that results is layered: a decision model for the high-frequency routing, gating, and validation; a generative model, large or small, reserved for the steps that genuinely need language produced. Speed and reliability live in the first layer; expression lives in the second.
            </p>

            <p>
              That layering is what makes real-time AI loops — the games, robots, and simulations TypeSafe points at, but equally the unattended agents running in ordinary businesses — behave differently. When the decision at each tick costs fractions of a cent and returns in under half a second with a calibrated confidence, you can afford to check far more often, gate far more actions, and escalate to a human on a real probability rather than a guess. The interesting consequence is not that decisions get cheaper. It is that putting a trustworthy checkpoint on every step of an autonomous system stops being too slow and too expensive to do.
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section className="mt-20">
          <h2 className="text-[28px] leading-[1.2] tracking-[-0.02em] font-serif text-[#efe9df]">
            What to check before you build on it
          </h2>

          <div className="mt-8 space-y-7 text-[18px] leading-[2] text-[#efe9df]">
            <p>
              <strong>It is decision-only, and that is a boundary, not a limitation to argue with.</strong> Jev is the wrong tool the moment you actually need language generated — a drafted reply, a summary, an explanation. The engineering skill it demands is knowing where a task genuinely collapses to a typed choice and where you were only pretending it did. Forcing a nuanced judgment into an enum to save a few milliseconds is the failure mode to watch for.
            </p>

            <p>
              <strong>The schema becomes the work.</strong> When outputs are enumerated in advance, the quality of the system is the quality of the decision space you defined. A missing category, a badly-drawn boundary, or a set of options that doesn&apos;t match reality can no longer be papered over by a fluent model — it just returns a confidently wrong choice from a wrong menu. This moves effort from prompt engineering to schema design, which is a more honest place for it to live, but not a free one.
            </p>

            <p>
              <strong>Calibration is a claim to verify on your own data.</strong> The value of a confidence number is entirely in whether it holds on your distribution, not TypeSafe&apos;s. Before you branch business logic on &quot;confidence above 0.9,&quot; measure whether 0.9 actually means 90% on your tasks, and re-measure as your inputs drift. Calibration that was true at launch on the vendor&apos;s benchmarks is a starting hypothesis, not a guarantee.
            </p>

            <p>
              <strong>Weigh the early-access reality.</strong> A waitlisted model from a months-old company, however pedigreed, carries the usual risks — thin independent benchmarks, an unproven cost curve at scale, and a dependency you cannot yet self-host. The prudent pattern is to isolate the decision layer behind your own interface so the concept — a fast, calibrated, typed decision function — survives even if the specific provider does not. The idea Jev is proving out is likely to outlast any one implementation of it.
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-white/10 my-16" />

        {/* Closing */}
        <div className="border-l-[3px] border-white/10 pl-6 text-[18px] italic leading-[2] text-[#8a8175]">
          NordNeuron builds AI and operational intelligence systems with a focus on LLM architecture, freight analytics, and enterprise automation — including the routing, gating, and decision layers that keep autonomous agents fast, cheap, and accountable in production.
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-10 text-center text-[13px] text-[#8a8175]">
        © 2026 Pankaj Kumar · Enterprise AI & Logistics Intelligence
      </footer>
    </main>
  );
}
