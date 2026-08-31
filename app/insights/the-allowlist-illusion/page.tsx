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
          AI Security
        </div>

        {/* Title */}
        <h1 className="text-[42px] md:text-[56px] leading-[1.1] tracking-[-0.03em] font-serif text-[#1c1917]">
          The Allowlist Illusion: Why Command Approval Keeps Failing in Coding Agents
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-[20px] leading-[1.7] text-stone-500 italic">
          Three unrelated 2026 disclosures — Cursor, Semantic Kernel, and the wider prompt-injection numbers behind them — converge on the same gap: an allowlist checks what a command looks like, not what put it there.
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
            Ask an AI coding agent to run terminal commands unattended and the standard mitigation is an allowlist: a fixed set of commands — <code>git status</code>, <code>npm test</code>, <code>ls</code> — that execute without a human in the loop, with everything else routed to approval. It is a sensible design on its face. The commands look safe individually, and a person still signs off on anything unfamiliar.
          </p>

          <p>
            2026 produced a run of disclosures that take that design apart from different directions, and reading them together says something more specific than &quot;prompt injection is bad.&quot; Each shows a different point where the allowlist&apos;s actual guarantee — this exact command runs, on this exact arguments — turned out not to be the guarantee anyone needed.
          </p>

          <p>
            An allowlist verifies syntax. None of the failures below required forging a new command. They worked by changing what an approved command did once it ran, or by using a code path the allowlist was never positioned to see in the first place.
          </p>
        </section>

        {/* Section 1 */}
        <section className="mt-20">
          <h2 className="text-[34px] leading-[1.2] tracking-[-0.02em] font-serif text-[#1c1917]">
            The allowlist never looked at built-ins
          </h2>

          <div className="mt-8 space-y-7 text-[18px] leading-[2] text-[#1c1917]">
            <p>
              CVE-2026-22708 landed on Cursor. In Auto-Run mode with an allowlist configured, the check only inspected external binaries. Shell built-ins — <code>export</code>, <code>alias</code>, <code>typeset</code>, <code>declare</code> — ran unchecked regardless of allowlist state, because they are not separate processes the allowlist mechanism was watching for.
            </p>

            <p>
              That gap is enough on its own. Prompt injection delivered through a README, a dependency file, or an issue comment — any text the agent reads while working — could instruct it to run <code>export PATH=/tmp/evil:$PATH</code>, or alias <code>git</code> to a script under attacker control. Neither line needs approval, because built-ins are invisible to a mechanism designed to gate binaries. The next allowlisted command the developer actually approves, something as unremarkable as <code>git branch</code>, then resolves to the attacker&apos;s binary instead of git.
            </p>

            <p>
              The developer did everything the allowlist asked of them. They reviewed a command that looked exactly like the one that ran, and it did something else, because the environment underneath it had already been rewritten by a step nobody was screening. Cursor rated the bug High and patched it in version 2.3, but the underlying lesson outlives the patch: a review model built around individual command shape has no representation for state that persists across commands.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="mt-20">
          <h2 className="text-[34px] leading-[1.2] tracking-[-0.02em] font-serif text-[#1c1917]">
            Some agents don&apos;t need a shell to get one
          </h2>

          <div className="mt-8 space-y-7 text-[18px] leading-[2] text-[#1c1917]">
            <p>
              Microsoft&apos;s Semantic Kernel disclosure in May made a related point more starkly. There was no shell to bypass and no allowlist to route around — the vulnerable primitive was a tool function the framework had already, legitimately, exposed to the model.
            </p>

            <p>
              CVE-2026-26030 hit the Python SDK: a crafted filter value walked Python&apos;s class hierarchy to reach the interpreter&apos;s import mechanism, giving the model a path to arbitrary code execution — Microsoft&apos;s proof of concept simply launched <code>calc.exe</code> on the host. CVE-2026-25592 hit the .NET SDK for a plainer reason: <code>DownloadFileAsync</code> on <code>SessionsPythonPlugin</code> had been marked with the <code>[KernelFunction]</code> attribute, which means the LLM could call it directly. Nobody bypassed a permission boundary in that second case, because the boundary had already granted the model that capability by decorator.
            </p>

            <p>
              An allowlist has nothing to say about either bug, because there is no shell command in the trace to allow or deny. The attack surface here is not &quot;what commands can this agent run&quot; — it is &quot;what did we mark as callable by the model,&quot; and in a framework with dozens of plugins that list grows without anyone re-reading each addition as a security-relevant grant. A <code>[KernelFunction]</code> attribute is not internal wiring; it is an API endpoint with the LLM as the only caller, and it deserves the review an API endpoint gets.
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section className="mt-20">
          <h2 className="text-[34px] leading-[1.2] tracking-[-0.02em] font-serif text-[#1c1917]">
            Single-attempt defense is answering the wrong question
          </h2>

          <div className="mt-8 space-y-7 text-[18px] leading-[2] text-[#1c1917]">
            <p>
              Put a number on how often this actually works and the case for urgency gets stronger, not weaker. OWASP&apos;s 2026 GenAI Top Ten — led by prompt injection for the third year running, and for the first time weighted 25% on data drawn from 6,639 real incidents rather than expert opinion alone — reports indirect prompt-injection success in agentic coding environments at 4.7% for a single attempt, 33.6% at ten attempts, and 63.0% at a hundred.
            </p>

            <p>
              4.7% reads like a comfortable margin in a one-off pen test. It is the wrong frame for how these agents actually run. A coding agent that reads the same repository on every CI trigger, every scheduled task, every re-run after a failed build, hands an attacker who has poisoned one README effectively unlimited attempts against the same payload. Evaluated at n=1, a defense can look adequate; evaluated at n=100, which is closer to how an unattended agent behaves over a project&apos;s lifetime, the same defense is failing on nearly two-thirds of runs.
            </p>

            <p>
              Excessive Agency climbing to third on the same OWASP list is the mechanical consequence, not a coincidence. More autonomy per run means more chances for the same low per-attempt probability to compound into a near-certainty.
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section className="mt-20">
          <h2 className="text-[34px] leading-[1.2] tracking-[-0.02em] font-serif text-[#1c1917]">
            What changes when you design for this
          </h2>

          <div className="mt-8 space-y-7 text-[18px] leading-[2] text-[#1c1917]">
            <p>
              <strong>Bound capability, not command shape.</strong> A process&apos;s reachable filesystem paths, network egress, and ability to mutate its own environment are properties you can scope with a sandbox or a restricted credential. They survive an attacker choosing different arguments than the ones you allowlisted; a list of approved strings does not.
            </p>

            <p>
              <strong>Audit the sequence, not the final command.</strong> Cursor&apos;s gap existed because review happened at the moment of execution, with no visibility into the built-ins that ran earlier in the same session. Anything that can mutate <code>PATH</code>, aliases, or environment variables is reachable attack surface even when it never appears on an allowlist, because it changes what the allowlisted command resolves to.
            </p>

            <p>
              <strong>Treat a tool decorator as a capability grant.</strong> Every function exposed to a model — a <code>[KernelFunction]</code>, an MCP tool, a registered callable — is effectively public to whatever text the model has read that turn. Review each one for what it lets a caller do if the caller&apos;s intent is adversarial, not for what it does when called as intended.
            </p>

            <p>
              <strong>Evaluate under repeated exposure, not a single attempt.</strong> If an agent re-reads the same repository, ticket queue, or inbox on a recurring trigger, model defenses against the number of times a real adversary gets to try, not the number of times a test suite tries once.
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
