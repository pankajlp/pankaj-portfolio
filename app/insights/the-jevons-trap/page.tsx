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
          AI Economics
        </div>

        {/* Title */}
        <h1 className="text-[36px] md:text-[46px] leading-[1.1] tracking-[-0.03em] font-serif text-[#efe9df]">
          The Jevons Trap: Why Cheaper AI Means More AI, Not Less
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-[19px] leading-[1.7] text-[#8a8175] italic">
          A 160-year-old observation about coal explains the single most misread trend in AI: every collapse in the cost of a token has been followed by more tokens consumed, not fewer. Efficiency is not a savings lever. It is a scope lever.
        </p>

        {/* Meta */}
        <div className="mt-8 pb-10 border-b border-white/10 text-[13px] text-[#8a8175] flex items-center gap-3 flex-wrap">
          <span>Pankaj Kumar</span>
          <span>•</span>
          <span>September 2026</span>
          <span>•</span>
          <span>7 min read</span>
        </div>

        {/* Intro */}
        <section className="mt-14 space-y-7 text-[18px] leading-[2] text-[#efe9df]">
          <p>
            In January 2025, when DeepSeek showed a frontier-class model could be trained and served for a fraction of the going rate, the reflexive market read was that AI spending was about to fall. If the same capability now cost a tenth as much, surely the bills would shrink. Satya Nadella replied with two words that reframed the whole conversation: <em>Jevons paradox</em>. As AI gets more efficient and cheaper, he argued, we will not use less of it — we will use vastly more, and total spending will rise.
          </p>

          <p>
            He was reaching for an idea from 1865. William Stanley Jevons, studying Britain&apos;s coal economy, noticed something that still reads as counterintuitive: James Watt&apos;s more efficient steam engine, which used less coal per unit of work, did not reduce Britain&apos;s coal consumption. It increased it. Cheaper, more efficient steam power made steam viable in industries and applications that had never used it, and the new demand swamped the per-unit savings many times over.
          </p>

          <p>
            That is the trap the AI industry keeps walking into when it forecasts from efficiency. Every argument of the form &quot;this optimization will cut our inference bill&quot; quietly assumes usage holds constant. It almost never does. The cheaper each call gets, the more calls become worth making — and the workloads that were previously uneconomic are exactly the ones that rush in to fill the freed-up budget.
          </p>
        </section>

        {/* Section 1 */}
        <section className="mt-20">
          <h2 className="text-[28px] leading-[1.2] tracking-[-0.02em] font-serif text-[#efe9df]">
            What Jevons actually observed
          </h2>

          <div className="mt-8 space-y-7 text-[18px] leading-[2] text-[#efe9df]">
            <p>
              The paradox is not that efficiency is useless. It is that efficiency changes the <em>price of using something</em>, and demand responds to price. When a resource becomes cheaper to deploy per unit of work, two things happen at once: existing users do more with it, and — more importantly — entirely new use cases cross the line from &quot;too expensive to bother&quot; to &quot;obviously worth it.&quot; When the elasticity of that demand is high enough, the second effect dominates and total consumption goes up.
            </p>

            <p>
              Economists call the milder version the rebound effect: some of your efficiency gain gets eaten by increased use. Jevons&apos; version is the strong one, sometimes called backfire — the increase in use more than eats the gain, so the efficient world consumes more of the resource in absolute terms than the inefficient one did. Coal did this. Lighting did it. Fuel economy has done it. The pattern shows up wherever a technology is broadly useful and its demand is nowhere near saturated.
            </p>

            <p>
              AI in 2026 is close to the perfect setup for backfire. The demand is nowhere near saturated — most knowledge work has barely been touched. The resource, intelligence-per-token, is broadly useful across almost every task a business runs. And the per-unit cost has been falling faster than almost any input in industrial history. Those are precisely the conditions under which making it cheaper makes you spend more.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="mt-20">
          <h2 className="text-[28px] leading-[1.2] tracking-[-0.02em] font-serif text-[#efe9df]">
            The 2025–2026 evidence is one long rebound
          </h2>

          <div className="mt-8 space-y-7 text-[18px] leading-[2] text-[#efe9df]">
            <p>
              Look at where the efficiency gains actually went and the paradox is not theoretical. The cost of a given level of model capability has fallen by orders of magnitude across the last three years — cheaper per token from better hardware, distillation, quantization, and the shift to small fine-tuned models for the bulk of steps. Not one of those gains produced a shrinking industry token bill. Each one lowered the entry price of a new class of workload that immediately consumed the headroom.
            </p>

            <p>
              The clearest example is the one that would have been unthinkable at 2023 prices: agents. A single agentic task — read the ticket, plan, call tools, observe, retry, verify — spends anywhere from tens to hundreds of times the tokens of a single chat completion. Reasoning models made it worse, in the productive sense: test-time compute deliberately spends more tokens per query to get a better answer. Both only became mainstream <em>because</em> tokens got cheap. The efficiency did not save the tokens; it unlocked the appetite to spend far more of them per unit of work delivered.
            </p>

            <p>
              This is why the &quot;SLM default&quot; and the Jevons trap are the same story told from two ends. Moving routine steps onto small models does cut cost per step — and the organizations doing it are not banking the savings. They are running the agent on ten times as many steps, across ten times as many workflows, because each step is now cheap enough to be worth automating. The line item labeled &quot;model spend&quot; does not go down. Its scope goes up.
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section className="mt-20">
          <h2 className="text-[28px] leading-[1.2] tracking-[-0.02em] font-serif text-[#efe9df]">
            Where the rebound lands: energy, and the budget that never shrinks
          </h2>

          <div className="mt-8 space-y-7 text-[18px] leading-[2] text-[#efe9df]">
            <p>
              The macro version of the trap is the datacenter build-out. If efficiency reduced demand, the industry&apos;s response to cheaper inference would be to slow capital spending on compute and power. The actual response has been the opposite — the largest sustained buildout of datacenter and energy capacity in the sector&apos;s history, undertaken by the same companies that ship the efficiency gains. They are not contradicting themselves. They are pricing in Jevons: efficiency is what makes the demand that justifies the buildout, not what caps it.
            </p>

            <p>
              At the level of a single business the trap is quieter but just as real. A team optimizes a workflow, watches its cost-per-run fall, and reports a saving. A quarter later the AI line on the budget is larger than before — because the cheap workflow got applied to three more processes, the product team shipped two features that were uneconomic at the old price, and an internal agent now runs on a schedule instead of on request. Every one of those was a good decision. Collectively they turned an efficiency gain into an expansion, and the CFO who was promised a cut sees a rise.
            </p>

            <p>
              The mistake in that story is not any individual choice. It is the framing that sold efficiency as savings in the first place. Efficiency in a high-elasticity market is not money returned to you; it is a lower price that lets you buy more of something you clearly wanted more of. Planning as if the paradox does not apply to you is how the budget surprise happens — reliably, every time.
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section className="mt-20">
          <h2 className="text-[28px] leading-[1.2] tracking-[-0.02em] font-serif text-[#efe9df]">
            How to plan when efficiency expands scope
          </h2>

          <div className="mt-8 space-y-7 text-[18px] leading-[2] text-[#efe9df]">
            <p>
              <strong>Budget efficiency as a scope grant, not a saving.</strong> When an optimization halves your cost per run, the realistic forecast is not &quot;spend falls by half.&quot; It is &quot;the same spend now buys twice the scope.&quot; Decide deliberately what that freed capacity should go toward, because if you do not, it will be spent for you — one reasonable local decision at a time.
            </p>

            <p>
              <strong>Measure value per token, not cost per token.</strong> Cost per token is going to fall no matter what you do; optimizing it in isolation just accelerates the rebound. The metric that stays meaningful is what each token returns — revenue, hours saved, decisions improved. An efficiency win is only real if value per token holds or climbs as volume grows, rather than the volume growing on tokens that produce nothing.
            </p>

            <p>
              <strong>Put a ceiling where the rebound actually escapes.</strong> The workloads that quietly consume the freed budget are the unattended ones — scheduled agents, retry loops, per-event automations. These have no natural saturation point the way a human-in-the-loop task does. Cap and meter them explicitly, because &quot;it&apos;s cheap per call&quot; multiplied by an unbounded call count is how the surprise bill is built.
            </p>

            <p>
              <strong>Treat the paradox as an opportunity, not only a risk.</strong> Jevons cuts both ways. The organizations that win the next phase are the ones that deliberately spend the efficiency dividend on newly-viable work before their competitors do — the processes that were too expensive to automate last year and are obvious this year. The trap is only a trap if you were expecting a refund. If you were looking for expanded scope, cheaper AI is exactly the opening you wanted.
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-white/10 my-16" />

        {/* Closing */}
        <div className="border-l-[3px] border-white/10 pl-6 text-[18px] italic leading-[2] text-[#8a8175]">
          NordNeuron builds AI and operational intelligence systems with a focus on LLM architecture, freight analytics, and enterprise automation — including the cost, scope, and metering discipline that keeps an efficiency gain from turning into a budget surprise.
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-10 text-center text-[13px] text-[#8a8175]">
        © 2026 Pankaj Kumar · Enterprise AI & Logistics Intelligence
      </footer>
    </main>
  );
}
