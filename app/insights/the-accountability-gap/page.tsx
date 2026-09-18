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
          The Accountability Gap: Governance Frameworks Meet the Autonomous Agent
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-[19px] leading-[1.7] text-[#8a8175] italic">
          NIST&apos;s AI RMF, ISO 42001, and the EU AI Act were written for a model that produces an output a human then acts on. Agents act directly — and the owner of record, the audit trail, and the kill switch are all still being retrofitted.
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
            Most AI governance in production today inherited its shape from a period when the deliverable was a prediction. A model scored a loan application, flagged a transaction, or drafted a paragraph, and a person downstream decided what to do with that output. The governance artifacts we standardized around — a model card, a risk classification, a human-review checkpoint, a documented owner — all assume that a human decision sits between the model and any consequence in the world.
          </p>

          <p>
            Agentic systems removed that seat. When an agent reads a ticket, calls an internal API, moves a record, and closes the loop without a human in the middle, the review checkpoint the framework assumed was there is gone — and with it the point at which accountability was supposed to attach. The controls did not fail so much as get bypassed by a workflow they were never positioned to see.
          </p>

          <p>
            This is not an argument that the major frameworks are wrong. NIST&apos;s AI Risk Management Framework, ISO/IEC 42001, and the EU AI Act are each sound about the thing they describe. It is an argument that the thing they describe — a governed <em>model</em> — is no longer the unit that acts. The unit that acts is a governed <em>identity with standing access</em>, and almost nothing in the current stack was designed to answer the two questions that identity raises: who owns what it does, and how do you stop it.
          </p>
        </section>

        {/* Section 1 */}
        <section className="mt-20">
          <h2 className="text-[28px] leading-[1.2] tracking-[-0.02em] font-serif text-[#efe9df]">
            The frameworks govern the model, not the actor
          </h2>

          <div className="mt-8 space-y-7 text-[18px] leading-[2] text-[#efe9df]">
            <p>
              Read the control catalogs closely and the assumption is everywhere. NIST&apos;s RMF organizes work around Govern, Map, Measure, and Manage functions that are anchored to an AI <em>system</em> and its intended context of use. ISO/IEC 42001 certifies an AI <em>management system</em> — the organizational process around building and operating models. The EU AI Act classifies obligations by the <em>risk of the use case</em> and layers separate rules for general-purpose models on top. All three are coherent, and all three take the model, or the process that produces it, as the object of governance.
            </p>

            <p>
              An autonomous agent is not fully described by any of those objects. It is a loop that pairs a model with a set of tools, a memory, a trigger, and — critically — a credential that lets it act. The same underlying model, wired to a read-only reporting tool, is a low-risk assistant; wired to a payments API with a service account, it is something a regulator would recognize as consequential. The governance-relevant properties live in the wiring, not in the model card, and the wiring is exactly what a model-centered framework does not have a field for.
            </p>

            <p>
              The EU AI Act&apos;s general-purpose provisions and its August 2025 code of practice sharpened obligations on model providers — documentation, systemic-risk evaluation, transparency. Necessary, and largely aimed upstream. The deployer who composes that model into an agent with production access is operating in the space between &quot;provider of a model&quot; and &quot;operator of a high-risk system,&quot; and that space is where most real agent deployments actually sit.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="mt-20">
          <h2 className="text-[28px] leading-[1.2] tracking-[-0.02em] font-serif text-[#efe9df]">
            The agent is a non-human identity, and it outnumbers you
          </h2>

          <div className="mt-8 space-y-7 text-[18px] leading-[2] text-[#efe9df]">
            <p>
              Security teams already had a name for what an agent is before the AI vocabulary arrived: a non-human identity. Service accounts, API keys, workload identities, and bot credentials have outnumbered human identities in most enterprises for years, and they have long been the harder half to govern — created for a task, granted broad access for convenience, and rarely retired. Agents are non-human identities with a language model deciding, at runtime, how to use their access.
            </p>

            <p>
              That inheritance is the security story. The failure modes are the ones identity teams already know — over-provisioned standing credentials, secrets that never rotate, permissions granted once and never reviewed — now attached to an actor whose next action is decided by a model reading untrusted text. OWASP&apos;s LLM Top Ten named this convergence directly: <em>Excessive Agency</em> sits on the list precisely because the blast radius of a compromised or misled agent is set by the scope of the identity it runs as, not by the cleverness of the prompt that misled it.
            </p>

            <p>
              An agent granted a single narrow, short-lived, auditable credential is a bounded problem even when it is fully compromised. An agent running as a standing service account with write access across three systems is an unbounded one the moment a poisoned document convinces it to act. The difference is entirely a matter of identity governance, and it is decided at provisioning time — long before any prompt is ever injected.
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section className="mt-20">
          <h2 className="text-[28px] leading-[1.2] tracking-[-0.02em] font-serif text-[#efe9df]">
            The audit trail records the call, not the intent
          </h2>

          <div className="mt-8 space-y-7 text-[18px] leading-[2] text-[#efe9df]">
            <p>
              When something goes wrong and governance asks the accountability question — who decided this, and on what basis — the artifacts an agent leaves behind answer a narrower question than the one being asked. The logs show that the agent called <code>refund.issue</code> with a set of arguments at a timestamp. They rarely show the reasoning that selected that action, the document whose text steered it there, or the human who owns the outcome.
            </p>

            <p>
              A traditional access log answers &quot;which identity did what.&quot; An agent needs a decision log that answers &quot;which inputs, which reasoning, which policy in force at the time&quot; — and most deployments capture the tool call without the context that made it a governance event rather than a line in a metrics dashboard. Reconstructing intent after the fact, from a trace that recorded only the effect, is the recurring pain of every agent incident review.
            </p>

            <p>
              The ownership question is thornier than the logging one. A model card names the team that trained a model. It does not name the person answerable when an agent composed from that model takes an irreversible action in production. Frameworks call for a designated owner; org charts rarely have a row for &quot;accountable human for autonomous agent number forty-one,&quot; and the agents proliferate faster than the ownership records that are supposed to track them.
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section className="mt-20">
          <h2 className="text-[28px] leading-[1.2] tracking-[-0.02em] font-serif text-[#efe9df]">
            What changes when you govern the actor
          </h2>

          <div className="mt-8 space-y-7 text-[18px] leading-[2] text-[#efe9df]">
            <p>
              <strong>Register the agent, not just the model.</strong> The unit of governance is the deployed loop — model plus tools plus credential plus trigger — and it needs its own record: what it can touch, which identity it runs as, what it is allowed to do without a human, and who is accountable when it does. A model card describing the base model does not answer any of those, and the answers change every time the wiring changes.
            </p>

            <p>
              <strong>Scope the identity, then trust the prompt less.</strong> An agent&apos;s worst possible action is bounded by its credential, not by its instructions. Short-lived, narrowly-scoped, per-task credentials turn a full prompt-injection compromise into a contained one; standing broad access turns the same compromise into an incident. Provision for the adversarial case, because a model reading untrusted text will eventually be given adversarial text.
            </p>

            <p>
              <strong>Log decisions, not only calls.</strong> An audit trail that captures the tool invocation but not the inputs, the reasoning, and the policy in force cannot answer the accountability question when it is finally asked. Capture enough of the decision context that an incident review can reconstruct <em>why</em>, not merely confirm <em>what</em>.
            </p>

            <p>
              <strong>Name the human, and keep the kill switch reachable.</strong> Every autonomous agent needs a person answerable for its actions and a tested way to revoke its access immediately — not a redeploy, not a code change, a switch. Both tend to be assumed present and discovered absent during the first incident, which is the most expensive moment to go looking for them.
            </p>

            <p>
              None of this replaces NIST, ISO 42001, or the EU AI Act. It fills the gap they leave: those frameworks govern whether you should have built the system, and how well the model behaves. Governing the agent as an identity with standing access is what governs whether you can answer for it once it is running.
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-white/10 my-16" />

        {/* Closing */}
        <div className="border-l-[3px] border-white/10 pl-6 text-[18px] italic leading-[2] text-[#8a8175]">
          NordNeuron builds AI and operational intelligence systems with a focus on LLM architecture, freight analytics, and enterprise automation — including the identity, access, and audit scaffolding that keeps autonomous agents governable in production.
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-white/10 px-6 py-10 text-center text-[13px] text-[#8a8175]">
        © 2026 Pankaj Kumar · Enterprise AI & Logistics Intelligence
      </footer>
    </main>
  );
}
