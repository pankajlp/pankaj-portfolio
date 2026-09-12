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
          AI Research
        </div>

        {/* Title */}
        <h1 className="text-[42px] md:text-[56px] leading-[1.1] tracking-[-0.03em] font-serif text-[#1c1917]">
          When Agents Can&apos;t Forget: What LedgerBench Found About Requirement Memory
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-[20px] leading-[1.7] text-stone-500 italic">
          Give an AI coding agent a permanent, append-only memory of every requirement it has ever met, and it stops regressing — but it also calcifies, defending rules that stopped being true weeks ago. A pre-registered benchmark measured exactly how much of each.
        </p>

        {/* Meta */}
        <div className="mt-8 pb-10 border-b border-stone-200 text-[13px] text-stone-400 flex items-center gap-3 flex-wrap">
          <span>Pankaj Kumar</span>
          <span>•</span>
          <span>September 2026</span>
          <span>•</span>
          <span>8 min read</span>
        </div>

        {/* Intro */}
        <section className="mt-14 space-y-7 text-[18px] leading-[2] text-[#1c1917]">
          <p>
            Real software changes its mind. A requirement you nailed in week one gets overturned in week six — &quot;store tasks in JSON files&quot; becomes &quot;store them in SQLite.&quot; A human team absorbs that by updating its shared understanding. An AI coding agent working across many sessions has no shared understanding to update; it has whatever you chose to carry forward as its memory. The design of that memory turns out to matter more than almost anything else about the agent.
          </p>

          <p>
            One tempting design is to never forget: compile every requirement into a runnable test and keep an <strong>append-only ledger</strong> of all of them, re-run on every change, so nothing is ever lost. It is an appealing idea — provably nothing slips — and it is the design I most wanted to believe in when I started building agent memory for operational systems. LedgerBench is the benchmark I built to find out whether it actually holds up, or whether that ledger quietly <em>calcifies</em>, so old, now-wrong tests block correct new work.
          </p>

          <p>
            The setup is deliberately small and controlled: an AI coding agent runs through a fixed sequence of <strong>24 tasks</strong> on a command-line to-do app, the storage requirement is flipped partway through (and a second requirement later), and five memory strategies are compared over <strong>12 random seeds each</strong> — 60 runs in total. Crucially, the whole thing was <strong>pre-registered and frozen</strong>: every prediction was written down in advance, with no peeking until all 60 runs finished. That last detail is what makes the results worth reporting rather than just anecdotes, because it includes the predictions that turned out wrong.
          </p>
        </section>

        {/* Section 1 */}
        <section className="mt-20">
          <h2 className="text-[34px] leading-[1.2] tracking-[-0.02em] font-serif text-[#1c1917]">
            Five ways to remember
          </h2>

          <div className="mt-8 space-y-7 text-[18px] leading-[2] text-[#1c1917]">
            <p>
              The arms differ only in how the agent&apos;s memory works. <strong>Arm A</strong> is the control: no test ledger at all, just a rolling plain-text summary of previous sessions. <strong>Arm B</strong> is the pure ledger: every requirement becomes a test, the whole set replays on every change, and tests are <em>never</em> removed — even after a later requirement makes an old one wrong. <strong>Arm C</strong> adds governance: a separate judge can retire a test, but only when documented evidence — an official requirement change — justifies it. <strong>Arm C+</strong> adds a docket that auto-flags any test failing repeatedly for the judge to review. And <strong>Arm D</strong> gives the coding agent its own voice: it can <em>request</em> that a test be retired and argue its case to the judge.
            </p>

            <p>
              The headline score is <strong>M1@T24</strong> — of every requirement introduced across the whole run, what fraction is the project still satisfying by the final task. Higher is better; it is a direct measure of how much the agent remembered without breaking. Alongside it, two failure counts matter: <em>trap violations</em> (planted requirements the agent was expected to regress on) and <em>rewrite regressions</em> (old, correct behavior that crept back to being broken). And, because none of this is free, tokens per run.
            </p>
          </div>
        </section>

        {/* Results table */}
        <section className="mt-14">
          <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white/60">
            <table className="w-full text-left text-[15px] border-collapse">
              <thead>
                <tr className="border-b border-stone-200 text-stone-500 text-[12px] uppercase tracking-wider">
                  <th className="py-4 px-5 font-semibold">Arm</th>
                  <th className="py-4 px-5 font-semibold">Retention (M1@T24)</th>
                  <th className="py-4 px-5 font-semibold">Trap viol.</th>
                  <th className="py-4 px-5 font-semibold">Rewrite regr.</th>
                  <th className="py-4 px-5 font-semibold">Tokens/run</th>
                </tr>
              </thead>
              <tbody className="text-stone-700">
                <tr className="border-b border-stone-100">
                  <td className="py-4 px-5"><strong className="text-stone-900">A</strong> baseline</td>
                  <td className="py-4 px-5">0.306</td>
                  <td className="py-4 px-5">13</td>
                  <td className="py-4 px-5">14</td>
                  <td className="py-4 px-5">384k</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-4 px-5"><strong className="text-stone-900">B</strong> pure ledger</td>
                  <td className="py-4 px-5">0.684</td>
                  <td className="py-4 px-5">0</td>
                  <td className="py-4 px-5">0</td>
                  <td className="py-4 px-5">875k</td>
                </tr>
                <tr className="border-b border-stone-100 bg-stone-50/70">
                  <td className="py-4 px-5"><strong className="text-stone-900">C</strong> governed</td>
                  <td className="py-4 px-5">0.698</td>
                  <td className="py-4 px-5">3</td>
                  <td className="py-4 px-5">0</td>
                  <td className="py-4 px-5">492k</td>
                </tr>
                <tr className="border-b border-stone-100">
                  <td className="py-4 px-5"><strong className="text-stone-900">C+</strong> +docket</td>
                  <td className="py-4 px-5">0.677</td>
                  <td className="py-4 px-5">3</td>
                  <td className="py-4 px-5">6</td>
                  <td className="py-4 px-5">480k</td>
                </tr>
                <tr>
                  <td className="py-4 px-5"><strong className="text-stone-900">D</strong> +agent voice</td>
                  <td className="py-4 px-5">0.740</td>
                  <td className="py-4 px-5">2</td>
                  <td className="py-4 px-5">7</td>
                  <td className="py-4 px-5">483k</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-[13px] text-stone-400 leading-relaxed">
            Frozen campaign: 5 arms × 12 seeds × 24 tasks, <code>deepseek-v4-flash</code>, temperature 0.2. Formal significance testing was out of scope.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mt-20">
          <h2 className="text-[34px] leading-[1.2] tracking-[-0.02em] font-serif text-[#1c1917]">
            Finding 1: the ledger earns its keep
          </h2>

          <div className="mt-8 space-y-7 text-[18px] leading-[2] text-[#1c1917]">
            <p>
              The clearest result in the table is also the one I was least worried about going in, and it is worth stating plainly because it is the robust one: <strong>keeping an automated memory of past requirements roughly doubles how much the agent still gets right at the end.</strong> End-state retention goes from 0.31 for the summary-only baseline to 0.68–0.74 for every arm that carries a ledger. Violations on the planted trap requirements fall by 77–100%.
            </p>

            <p>
              This is the part of the append-only idea that works. A rolling text summary is lossy in exactly the way you would fear — by task 24 the baseline has quietly broken most of what it built earlier, and it walked into 13 of the traps. A ledger that re-checks old requirements on every change simply does not let that drift happen silently. If the only question were &quot;does replaying past requirements help,&quot; the answer is an unambiguous yes, and the gap is large enough to survive the noise.
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section className="mt-20">
          <h2 className="text-[34px] leading-[1.2] tracking-[-0.02em] font-serif text-[#1c1917]">
            Finding 2: but a ledger that never forgets, calcifies
          </h2>

          <div className="mt-8 space-y-7 text-[18px] leading-[2] text-[#1c1917]">
            <p>
              The pure ledger (Arm B) buys its zero regressions at a real price, and the benchmark was built to make that price visible. It cost <strong>875k tokens per run — 2.3× the baseline</strong> — because it replays the entire accumulated test set on every single change, forever. And it produced nine <em>coerced</em> regressions: cases where a stale, now-invalid test literally forced the agent into making a wrong edit to satisfy it.
            </p>

            <p>
              The mechanism is worth watching happen. After the storage requirement flips from JSON to SQLite, the agent writes a correct SQLite migration — and the old JSON-era tests, still in the permanent replay set, reject it on every iteration. The agent thrashes between backends, then names the contradiction itself. In one run it wrote:
            </p>

            <div className="border-l-[3px] border-stone-300 pl-6 py-1 text-[17px] italic leading-[1.9] text-stone-600">
              &quot;We have a genuine conflict between the earlier requirements that assume JSON file storage and the later requirement that mandates SQLite storage with no JSON file… it is impossible to satisfy both. You may need to adjust the test ledger…&quot;
            </div>

            <p>
              And then, having no way to adjust the ledger, it capitulated — reverting a correct migration back to JSON to satisfy the dead rules, ending on the wrong backend. That is calcification in the concrete: not a vague &quot;technical debt&quot; worry but a specific, reproducible failure where the memory system overrides a correct decision. The agent even diagnoses the missing piece — it asks for exactly the amendment mechanism the pure ledger, by design, refuses to have.
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section className="mt-20">
          <h2 className="text-[34px] leading-[1.2] tracking-[-0.02em] font-serif text-[#1c1917]">
            Finding 3: a judge recovers the benefit at half the cost
          </h2>

          <div className="mt-8 space-y-7 text-[18px] leading-[2] text-[#1c1917]">
            <p>
              The most useful practical result is that the calcification is fixable without giving up the protection. Arm C — the ledger plus a judge that can retire a test when a documented requirement change justifies it — matches Arm B&apos;s protection almost exactly: the same doubled retention, the same <strong>zero rewrite regressions</strong>, comparable trap suppression. It does it while spending only <strong>492k tokens, 56% of B&apos;s</strong>.
            </p>

            <p>
              The reason it is cheaper as well as gentler is the same reason: letting a judge retire the three genuinely-obsolete storage tests, instead of replaying all of them forever, removes both the wasted token cost of re-checking dead rules and the coercion pressure they exert. The judge is deliberately isolated — it sees only the evidence artifact, the assertion in question, and the new requirement, never the agent&apos;s working context — and in the runs its supersession decisions were sound and sparse, concentrated at the moment of the requirement change. Governance here is not bureaucracy; it is the difference between a memory that accumulates and one that is maintained.
            </p>
          </div>
        </section>

        {/* Section 5 */}
        <section className="mt-20">
          <h2 className="text-[34px] leading-[1.2] tracking-[-0.02em] font-serif text-[#1c1917]">
            Finding 4: every degree of flexibility has a regression cost
          </h2>

          <div className="mt-8 space-y-7 text-[18px] leading-[2] text-[#1c1917]">
            <p>
              This is where a pre-registered prediction was refuted, and the refutation is more interesting than the confirmations. Going in, I predicted that <em>all</em> the governed arms would stay well under the baseline&apos;s regression rate. B and C did — zero each. But the two more permissive arms went the other way: <strong>C+ committed 6 rewrite regressions and D committed 7</strong>, both over the line I had drawn in advance.
            </p>

            <p>
              The cause is mechanical and, in hindsight, obvious: every time the governance layer retires a test, it also removes the guard that test was providing — and the old bug it was guarding against is free to creep back. The more freely an arm can drop checks, the more old regressions return. C+ (auto-flagging persistent failures) and D (letting the agent lobby for retirement) each loosen the gate, and each pays for it. Arm D posts the highest retention of any arm (0.740) <em>and</em> the most regressions — and, tellingly, <strong>21 &quot;capture&quot; events</strong>, where the agent successfully argued the judge into dropping a check. Every other arm scored zero on that, because none of them gave the agent that channel. Give an agent a voice to remove its own tests and it will use it; sometimes that is correct pruning, and sometimes it is an agent talking its way out of a constraint it found inconvenient.
            </p>

            <p>
              The honest reading of the middle of the table is restraint: the retention differences <em>among</em> the four ledgered arms (0.68–0.74) are small relative to seed-to-seed variance. The large, trustworthy effect is ledger-versus-baseline. The ranking of one ledger variant over another is not something I would build a claim on from this campaign — and saying so is part of the point.
            </p>
          </div>
        </section>

        {/* Section 6 */}
        <section className="mt-20">
          <h2 className="text-[34px] leading-[1.2] tracking-[-0.02em] font-serif text-[#1c1917]">
            What the pre-registration bought
          </h2>

          <div className="mt-8 space-y-7 text-[18px] leading-[2] text-[#1c1917]">
            <p>
              A second prediction also failed: I expected the ledgered arms to cling to dead code — a config fallback made obsolete by the later requirement change — more than the baseline. Instead <strong>every arm, baseline included, left the deprecated fallback in place in 100% of runs.</strong> It is a flat ceiling, not a difference: at this scale the models essentially never remove a deprecated-but-still-working path, so the metric cannot tell the arms apart. Prediction unsupported, and only visible as a clean null because the expectation was written down first.
            </p>

            <p>
              The caveats are load-bearing and I would rather state them than have them found. The campaign ran on a small, cheap model (<code>deepseek-v4-flash</code>); a strong-model replication is the obvious next step, and the harness and tasks are open for exactly that. It is one project, one 24-task sequence, twelve seeds per arm, and no formal statistics. Treat the numbers as the shape of an effect, not a leaderboard.
            </p>

            <p>
              What I take from it, building agent systems that run for months rather than minutes: an append-only memory is the easy 80% and the dangerous last 20%. Replaying past requirements is what stops silent drift, and it is worth doing. But a memory that can only accumulate will eventually defend something that is no longer true, at real cost in both tokens and correctness. The missing institution is not more memory — it is a cheap, evidence-bound, <em>isolated</em> way to retire it, and a wary eye on who gets to pull that lever.
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-stone-200 my-16" />

        {/* Repo link */}
        <div className="rounded-2xl border border-stone-200 bg-white/60 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <p className="font-serif text-lg text-stone-900">LedgerBench is open</p>
            <p className="text-stone-500 text-sm mt-1">Harness, tasks, frozen results, and the full pre-registration.</p>
          </div>
          <a
            href="https://github.com/pankajlp/ledgerbench"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-stone-900 text-stone-50 text-[13px] font-medium hover:bg-stone-800 transition-colors duration-300 shrink-0"
          >
            <svg aria-hidden="true" height="15" viewBox="0 0 16 16" width="15" fill="currentColor">
              <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.35 3.12.92.01.44.01.86.01.99 0 .21-.15.46-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
            </svg>
            View on GitHub
          </a>
        </div>

        {/* Closing */}
        <div className="mt-12 border-l-[3px] border-stone-200 pl-6 text-[18px] italic leading-[2] text-stone-500">
          The interesting question for long-running agents isn&apos;t how much they can remember — it&apos;s whether they can be trusted to let go of what stopped being true. Build the retirement path with the same care as the memory itself.
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-stone-200 px-6 py-10 text-center text-[13px] text-stone-400">
        © 2026 Pankaj Kumar · Enterprise AI &amp; Logistics Intelligence
      </footer>
    </main>
  );
}
