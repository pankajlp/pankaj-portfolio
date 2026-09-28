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
          AI Governance
        </div>

        {/* Title */}
        <h1 className="text-[36px] md:text-[46px] leading-[1.1] tracking-[-0.03em] font-serif text-[#efe9df]">
          Whose Safety Are You Buying? Security and Governance Across the Big AI Labs
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-[19px] leading-[1.7] text-[#8a8175] italic">
          &quot;AI safety&quot; is three different questions wearing one name — the frontier-risk framework a lab imposes on itself, the access architecture it ships, and the defaults on the account you actually use. For a buyer, the last two govern your risk far more than the first.
        </p>

        {/* Meta */}
        <div className="mt-8 pb-10 border-b border-white/10 text-[13px] text-[#8a8175] flex items-center gap-3 flex-wrap">
          <span>Pankaj Kumar</span>
          <span>•</span>
          <span>September 2026</span>
          <span>•</span>
          <span>9 min read</span>
        </div>

        {/* Intro */}
        <section className="mt-14 space-y-7 text-[18px] leading-[2] text-[#efe9df]">
          <p>
            Ask which AI provider is the &quot;safest&quot; and you will get an answer that sounds precise and means almost nothing, because the question is three questions stacked on top of each other. There is the frontier-risk governance a lab imposes on its own model development — the catastrophe-prevention machinery that makes headlines. There is the access architecture it ships — whether the model is a closed service the provider controls or an open weight anyone can run. And there is the mundane layer that actually touches your data every day: the defaults on the specific account tier you are paying for.
          </p>

          <p>
            These three are routinely collapsed into one word, and the collapse is where enterprises make expensive mistakes. A lab can have the most rigorous frontier-safety framework in the industry and still train on your conversations by default on the tier you happen to be using. A model can be governed by an elaborate capability-threshold policy and still, as an open weight, be entirely outside its maker&apos;s control the moment it is downloaded. The press release and the risk you are actually carrying are describing different things.
          </p>

          <p>
            What follows compares the major labs — Anthropic, OpenAI, Google DeepMind, and Meta — on each of those three layers as they stand in late 2026. The useful finding is not a ranking. It is that the layers diverge independently, so the right provider depends entirely on which of the three questions you were actually asking.
          </p>
        </section>

        {/* Section 1 */}
        <section className="mt-20">
          <h2 className="text-[28px] leading-[1.2] tracking-[-0.02em] font-serif text-[#efe9df]">
            Layer one: the frontier frameworks converged in shape, diverged in strictness
          </h2>

          <div className="mt-8 space-y-7 text-[18px] leading-[2] text-[#efe9df]">
            <p>
              Every major lab now publishes a capability-gated safety policy, and they rhyme by design. Anthropic&apos;s Responsible Scaling Policy, first published in 2023 and rewritten as version 3.0 effective February 2026, defines AI Safety Levels (ASL) and ties escalating security and deployment safeguards to capability thresholds — it activated its ASL-3 safeguards in May 2025 around CBRN and AI R&D capabilities. Google DeepMind&apos;s Frontier Safety Framework, now at v3.1 (April 2026), is built around Critical Capability Levels, with Tracked Capability Levels added to catch less-extreme risks earlier. OpenAI&apos;s Preparedness Framework (v2, April 2025) tracks catastrophic-risk categories against capability tiers. Meta replaced its 2025 Frontier AI Framework in April 2026 with a stricter Advanced AI Scaling Framework that gates release on assessed catastrophic risk.
            </p>

            <p>
              The convergence is real and, in fairness, was led from the front: Anthropic&apos;s RSP is widely credited with pushing the others to adopt broadly similar structures. But shared shape is not shared strictness. The frameworks differ in how much they commit to versus describe, how much they publish versus keep internal, and how enforceable their thresholds actually are. External analyses have been pointed about this — one 2025 study argued OpenAI&apos;s Preparedness Framework guarantees no specific mitigation and would still permit deploying systems its own language associates with severe harm. The lesson is not that any one framework is a fraud; it is that a capability-threshold policy is a statement of intent whose value depends on disclosure and follow-through, and those vary widely between labs that all look similar from the outside.
            </p>

            <p>
              For almost every enterprise buyer, though, this entire layer is the wrong thing to be comparing. Frontier-risk frameworks govern whether a lab should train and release its next model at all — a question of civilizational tail risk, not of whether your procurement data is safe in the tool you deployed last quarter. It matters, but it is not your operational risk, and treating a strong RSP as a reason to trust a consumer chat tier with confidential data is a category error.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="mt-20">
          <h2 className="text-[28px] leading-[1.2] tracking-[-0.02em] font-serif text-[#efe9df]">
            Layer two: the deepest fork is closed versus open weights
          </h2>

          <div className="mt-8 space-y-7 text-[18px] leading-[2] text-[#efe9df]">
            <p>
              The governance difference that actually changes what is possible is architectural, not policy-level. Anthropic, OpenAI, and Google ship closed models behind an API. Meta built its reputation on the opposite bet — open-weight Llama models anyone could download and run — before quietly reversing course in 2026, releasing its last open weights (Llama 4 Scout and Maverick) in April 2025 and pivoting to a closed flagship. The open frontier did not collapse so much as relocate, largely to Chinese labs whose weights now anchor the high-volume open-weight tier.
            </p>

            <p>
              A closed model is a governable object in the ordinary sense: the provider can monitor use, rate-limit, patch a jailbreak overnight, revoke a key, and enforce its usage policy at the point of inference. That control is also its criticism — you are trusting the provider&apos;s judgment and cannot inspect the system. An open weight inverts every term. Once it is downloaded it cannot be recalled, patched centrally, or monitored; any safety training can be fine-tuned back out by whoever holds the file. In exchange you get what closed models cannot offer: the weights run on your own infrastructure, so your data never leaves your boundary, and there is no vendor to trust with it at all.
            </p>

            <p>
              This is the fork that most changes an enterprise&apos;s real posture, and it does not have a universally correct side. The pattern that has settled among sophisticated adopters is portfolio deployment — closed frontier models for high-complexity, lower-volume work where peak capability justifies the cost and the vendor dependency, and open weights for high-volume commodity tasks where running them in-house is cheaper and keeps sensitive data on-premises. The governance question &quot;who is responsible when the model misbehaves&quot; has two entirely different answers depending on which side you are on: the provider, or you.
            </p>
          </div>
        </section>

        {/* Comparison table */}
        <figure className="mt-16 rounded-2xl border border-white/10 bg-white/[0.02] p-5 md:p-6">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left text-[13px] md:text-[14px] min-w-[640px]">
              <thead>
                <tr className="border-b border-white/15">
                  <th className="py-3 pr-4 font-syne font-medium text-[#f2ede3] tracking-tight">Lab</th>
                  <th className="py-3 px-4 font-syne font-medium text-[#f2ede3] tracking-tight">Frontier framework</th>
                  <th className="py-3 px-4 font-syne font-medium text-[#f2ede3] tracking-tight">Model access</th>
                  <th className="py-3 px-4 font-syne font-medium text-[#f2ede3] tracking-tight">Paid API / business default</th>
                  <th className="py-3 pl-4 font-syne font-medium text-[#f2ede3] tracking-tight">Consumer default</th>
                </tr>
              </thead>
              <tbody className="text-[#a89f8f] align-top">
                <tr className="border-b border-white/[0.06]">
                  <td className="py-4 pr-4 text-[#e7e0d2] font-medium">Anthropic</td>
                  <td className="py-4 px-4">Responsible Scaling Policy v3 · ASL levels</td>
                  <td className="py-4 px-4">Closed / API</td>
                  <td className="py-4 px-4 text-[#cfc7b6]">No training by default · ZDR available</td>
                  <td className="py-4 pl-4">Opt-out (default on) · 5-yr retention if allowed</td>
                </tr>
                <tr className="border-b border-white/[0.06]">
                  <td className="py-4 pr-4 text-[#e7e0d2] font-medium">OpenAI</td>
                  <td className="py-4 px-4">Preparedness Framework v2</td>
                  <td className="py-4 px-4">Closed / API</td>
                  <td className="py-4 px-4 text-[#cfc7b6]">No training by default · ZDR available</td>
                  <td className="py-4 pl-4">Free ChatGPT trains by default</td>
                </tr>
                <tr className="border-b border-white/[0.06]">
                  <td className="py-4 pr-4 text-[#e7e0d2] font-medium">Google DeepMind</td>
                  <td className="py-4 px-4">Frontier Safety Framework v3.1 · CCLs</td>
                  <td className="py-4 px-4">Closed / API (Vertex)</td>
                  <td className="py-4 px-4 text-[#cfc7b6]">No training by default (Vertex)</td>
                  <td className="py-4 pl-4">Free Gemini tier trains by default</td>
                </tr>
                <tr>
                  <td className="py-4 pr-4 text-[#e7e0d2] font-medium">Meta</td>
                  <td className="py-4 px-4">Advanced AI Scaling Framework (2026)</td>
                  <td className="py-4 px-4">Open weights → closed in 2026</td>
                  <td className="py-4 px-4 text-[#cfc7b6]">Self-hosted: data stays on your infra</td>
                  <td className="py-4 pl-4">n/a (run the weights yourself)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <figcaption className="mt-5 text-[13px] leading-[1.7] text-[#8a8175] italic">
            The three layers move independently. A lab&apos;s frontier framework says little about how the tier you use treats your data — and the closed-vs-open choice changes who is even in a position to govern the model. Policy details as of late 2026; verify current terms against each provider&apos;s documentation before relying on them.
          </figcaption>
        </figure>

        {/* Section 3 */}
        <section className="mt-20">
          <h2 className="text-[28px] leading-[1.2] tracking-[-0.02em] font-serif text-[#efe9df]">
            Layer three: the defaults that actually touch your data
          </h2>

          <div className="mt-8 space-y-7 text-[18px] leading-[2] text-[#efe9df]">
            <p>
              This is the layer that decides your day-to-day exposure, and the dividing line that matters is not the logo on the model — it is consumer tier versus business tier. Across the major closed providers the paid, business-facing APIs converged on the same default years ago: OpenAI, Anthropic, and Google&apos;s Vertex all exclude API traffic from training by default, on free or paid, and offer zero-data-retention arrangements for eligible customers on top of the usual roughly 30-day abuse-monitoring window. If you are on a business API or enterprise agreement, the training question is largely settled in your favor regardless of which of the three you chose.
            </p>

            <p>
              The consumer tiers are where the defaults diverge and quietly bite. Free ChatGPT and the free Gemini tier use conversations for training by default. Anthropic — the lab with arguably the strongest frontier-safety reputation — flipped its consumer terms in August 2025 from opt-in to opt-out: Free, Pro, and Max chats now train Claude unless you turn the setting off, and opting in carries a five-year retention window against the 30-day standard for those who decline. None of this reaches enterprise, Team, or API accounts. But it is a clean illustration of the central point: the same company can run a rigorous catastrophe-prevention program at the frontier and an opt-out-by-default data policy on its consumer product, because those are two different layers making two different decisions.
            </p>

            <p>
              For an enterprise, the practical consequence is that your confidentiality risk is set almost entirely by tier discipline, not by vendor selection. The failure mode is not choosing the &quot;wrong&quot; lab; it is an employee pasting a contract into a free consumer chat window while the company&apos;s carefully-negotiated enterprise agreement with the same vendor sits unused. The strongest safety framework in the world does not cover that conversation, because that conversation was never on the tier the framework governs.
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section className="mt-20">
          <h2 className="text-[28px] leading-[1.2] tracking-[-0.02em] font-serif text-[#efe9df]">
            How to choose across the three layers
          </h2>

          <div className="mt-8 space-y-7 text-[18px] leading-[2] text-[#efe9df]">
            <p>
              <strong>Match the question to the layer.</strong> If you are assessing systemic or reputational exposure to frontier capability, compare the frameworks — and compare them on disclosure and enforceability, not on whether they exist, since they all now do. If you are assessing operational data risk, ignore the frameworks and read the tier&apos;s data terms. Conflating the two is how a strong safety brand gets trusted with data the brand&apos;s actual product terms do not protect.
            </p>

            <p>
              <strong>Decide the access architecture deliberately, per workload.</strong> Closed API buys you a provider who can patch, monitor, and enforce — and a dependency and a data boundary you cannot cross. Open weights buy you on-premises control and data that never leaves — and full ownership of the safety you fine-tuned away. Portfolio deployment is the mature answer: closed for peak-capability, lower-volume work; open, self-hosted for high-volume or high-sensitivity workloads. Choose per task, not once for the company.
            </p>

            <p>
              <strong>Govern the tier, because that is where the leak is.</strong> The highest-leverage control most organizations are missing is not a vendor choice; it is ensuring sensitive work only ever reaches business tiers with training excluded and, where warranted, zero-data-retention enabled — enforced technically, not by policy memo. Assume the consumer default is train-by-default with long retention unless you have confirmed otherwise, because in 2026 that assumption is correct more often than not.
            </p>

            <p>
              <strong>Remember the frameworks all sit under the same external law.</strong> Whichever lab and architecture you pick, the deployment still lands under NIST&apos;s AI RMF, ISO/IEC 42001, and — for anything touching the EU — the AI Act&apos;s obligations, which attach to your use of the system, not to the provider&apos;s internal safety policy. The vendor&apos;s framework is not a substitute for your own governance; it is one input to it.
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-white/10 my-16" />

        {/* Closing */}
        <div className="border-l-[3px] border-white/10 pl-6 text-[18px] italic leading-[2] text-[#8a8175]">
          NordNeuron builds AI and operational intelligence systems with a focus on LLM architecture, freight analytics, and enterprise automation — including the vendor, tier, and access decisions that determine what your data actually carries in production.
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-10 text-center text-[13px] text-[#8a8175]">
        © 2026 Pankaj Kumar · Enterprise AI & Logistics Intelligence
      </footer>
    </main>
  );
}
