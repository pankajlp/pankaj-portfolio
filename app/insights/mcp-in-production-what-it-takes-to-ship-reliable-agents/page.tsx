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
          MCP in Production: What It Actually Takes to Ship Reliable AI Agents
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-[20px] leading-[1.7] text-stone-500 italic">
          The Model Context Protocol solved the integration problem. Now the industry is discovering what breaks once real users, real permissions, and real failure modes enter the picture.
        </p>

        {/* Meta */}
        <div className="mt-8 pb-10 border-b border-stone-200 text-[13px] text-stone-400 flex items-center gap-3 flex-wrap">
          <span>Pankaj Kumar</span>
          <span>•</span>
          <span>August 2026</span>
          <span>•</span>
          <span>7 min read</span>
        </div>

        {/* Intro */}
        <section className="mt-14 space-y-7 text-[18px] leading-[2] text-[#1c1917]">
          <p>
            Two years ago, connecting an LLM to a database, a ticketing system, and an internal API meant writing three separate integrations, each with its own auth handling, its own schema translation, and its own failure modes. The Model Context Protocol changed that calculus. By standardizing how models discover and call tools, it turned an M×N integration problem into an M+N one — write a server once, and any compliant client can use it.
          </p>

          <p>
            That part of the story is largely settled. MCP has been adopted broadly enough that "does this have an MCP server" is now a reasonable question to ask about any internal system. What is not settled is what happens after the demo — when an MCP-connected agent is handling real user requests, touching production data, and expected to fail gracefully instead of just failing.
          </p>

          <p>
            The protocol standardized the wire format. It did not standardize reliability. That part is still being built by hand, project by project, and the patterns that work are starting to look consistent across teams that have actually shipped this.
          </p>
        </section>

        {/* Section 1 */}
        <section className="mt-20">
          <h2 className="text-[34px] leading-[1.2] tracking-[-0.02em] font-serif text-[#1c1917]">
            The problem MCP actually solves
          </h2>

          <div className="mt-8 space-y-7 text-[18px] leading-[2] text-[#1c1917]">
            <p>
              Before MCP, every agent framework invented its own tool-calling convention. A tool built for one framework rarely worked in another without a rewrite. Vendors and internal platform teams were duplicating the same connector logic — for Postgres, for Slack, for internal CRMs — dozens of times over, each with slightly different semantics for errors, pagination, and auth.
            </p>

            <p>
              MCP fixes this by defining a client-server boundary with a shared contract: servers expose tools, resources, and prompts through a typed schema; clients discover and invoke them the same way regardless of which model sits behind the client. A team building a single MCP server for their data warehouse can now expose it to any compliant agent, whether that agent is built in-house or is a third-party assistant the organization has adopted.
            </p>

            <p>
              This is genuinely useful infrastructure. It is also, on its own, not enough to make an agent trustworthy in production — because the protocol says nothing about what the agent should be allowed to do, how much context it should be handed, or what happens when a tool call goes wrong.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="mt-20">
          <h2 className="text-[34px] leading-[1.2] tracking-[-0.02em] font-serif text-[#1c1917]">
            Where MCP deployments break in practice
          </h2>

          <div className="mt-8 space-y-7 text-[18px] leading-[2] text-[#1c1917]">
            <p>
              The failure modes that show up once MCP-connected agents leave the sandbox are remarkably consistent across teams:
            </p>

            <p>
              <strong>Context bloat from tool discovery.</strong> A model connected to five MCP servers might be handed forty or fifty tool schemas on every single call, each with its own description and parameter list. That eats context budget before the actual task begins, and it measurably degrades tool selection accuracy — the model has more plausible-looking options to confuse.
            </p>

            <p>
              <strong>Flat authorization.</strong> Many early MCP servers exposed a tool as either fully callable or not present at all, with no notion of per-user or per-session scoping. In an enterprise setting, that means a support agent and a finance controller end up with the same tool surface unless someone builds a permissions layer on top of the protocol — which the protocol does not provide out of the box.
            </p>

            <p>
              <strong>Silent statefulness.</strong> Tool calls that mutate data — creating a ticket, sending an email, issuing a refund — behave very differently from read-only lookups, but naive implementations treat them identically. Without idempotency keys and explicit confirmation steps, a retried call after a timeout can execute the same action twice.
            </p>

            <p>
              <strong>No observability across the boundary.</strong> When a multi-step agent task fails, the interesting information — which tool was called, with what arguments, and what came back — often lives inside the MCP transport layer where standard application logging never looks. Debugging becomes guesswork.
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section className="mt-20">
          <h2 className="text-[34px] leading-[1.2] tracking-[-0.02em] font-serif text-[#1c1917]">
            The patterns that actually hold up
          </h2>

          <div className="mt-8 space-y-7 text-[18px] leading-[2] text-[#1c1917]">
            <p>
              <strong>Scoped tool disclosure.</strong> Instead of exposing every tool from every connected server on every call, resolve the relevant subset first — by user role, by task type, or with a lightweight retrieval step over tool descriptions — and only then hand the model a short list. Smaller, more relevant tool sets consistently produce better call accuracy than exhaustive ones.
            </p>

            <p>
              <strong>Treat write tools as a different class.</strong> Read-only tools can be called liberally. Anything that mutates state should carry an idempotency key, a dry-run mode where feasible, and — for high-stakes actions — an explicit confirmation step before execution. This distinction should be encoded in the tool contract, not left to the model's judgment.
            </p>

            <p>
              <strong>Version the server contract like an API.</strong> MCP servers are APIs, and they should be versioned like ones: breaking schema changes get a new version, deprecated tools get a sunset window, and clients pin to a known-good version rather than always tracking the latest. Teams that skip this discover it the hard way when a tool description changes and every downstream prompt that referenced it silently degrades.
            </p>

            <p>
              <strong>Instrument every call.</strong> Log the tool name, arguments, latency, and result for every invocation, correlated to the originating user session. This is the single highest-leverage investment for debugging agent behavior — most "the agent did something weird" incidents turn out to be a specific, traceable bad tool call once you can actually see the trail.
            </p>

            <p>
              <strong>Sandbox execution paths.</strong> For tools that touch infrastructure — running queries, executing code, calling internal services — run them behind the same isolation and rate-limiting discipline you would apply to any other externally triggered execution path. An agent is, from a security standpoint, an untrusted caller until proven otherwise.
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section className="mt-20">
          <h2 className="text-[34px] leading-[1.2] tracking-[-0.02em] font-serif text-[#1c1917]">
            The protocol is the plumbing, not the strategy
          </h2>

          <div className="mt-8 space-y-7 text-[18px] leading-[2] text-[#1c1917]">
            <p>
              MCP's real contribution is removing the busywork of bespoke integrations, and that is not a small thing — it has meaningfully lowered the cost of connecting agents to real systems. But adopting the protocol does not automatically produce a reliable agent, any more than adopting REST automatically produced a well-designed API a decade ago.
            </p>

            <p>
              The teams shipping dependable MCP-based agents right now are the ones that stopped treating the protocol as the finish line and started treating it as the transport layer underneath a system they still have to design: scoped access, versioned contracts, idempotent writes, and full observability. That work does not show up in the protocol spec, and it is exactly the work that determines whether an agent is trustworthy enough to hand real responsibility to.
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-stone-200 my-16" />

        {/* Closing */}
        <div className="border-l-[3px] border-stone-200 pl-6 text-[18px] italic leading-[2] text-stone-500">
          Nordneuron builds AI and operational intelligence systems at NordNeuron, with a focus on LLM architecture, freight analytics, and enterprise automation.
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-stone-200 px-6 py-10 text-center text-[13px] text-stone-400">
        © 2026 Pankaj Kumar · Enterprise AI & Logistics Intelligence
      </footer>
    </main>
  );
}
