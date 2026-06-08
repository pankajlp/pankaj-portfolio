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
          Analytics Engineering
        </span>
      </header>

      {/* Article */}
      <article className="max-w-3xl mx-auto px-6 py-20">
        {/* Tag */}
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#eef2fd] text-[#1a4fd6] text-[11px] uppercase tracking-[0.08em] mb-8 font-medium">
          Analytics Engineering
        </div>

        {/* Title */}
        <h1 className="text-[42px] md:text-[56px] leading-[1.1] tracking-[-0.03em] font-serif text-[#1a1a18]">
          Text-to-SQL for Operational Analytics — Beyond the Toy Examples
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-[20px] leading-[1.7] text-[#5a5a54] italic">
          Making natural language querying work against real freight and procurement data requires more than a capable model.
        </p>

        {/* Meta */}
        <div className="mt-8 pb-10 border-b border-black/10 text-[13px] text-[#9a9a92] flex items-center gap-3 flex-wrap">
          <span>Pankaj Kumar</span>
          <span>•</span>
          <span>June 2026</span>
          <span>•</span>
          <span>7 min read</span>
        </div>

        {/* Intro */}
        <section className="mt-14 space-y-7 text-[18px] leading-[2] text-[#1a1a18]">
          <p>
            The demo for text-to-SQL always looks the same. A clean schema. A natural language question. A correct SQL query returned instantly. Applause.
          </p>

          <p>
            The production system looks different. The schema has 40 tables, columns with ambiguous names, date fields in three different formats, and business logic embedded in views that no single person fully understands.
          </p>

          <p>
            Building text-to-SQL that works against real operational data — freight datasets, procurement records, carrier pricing tables — is an engineering problem much more than a modeling problem. Here is what that actually involves.
          </p>
        </section>

        {/* Section 1 */}
        <section className="mt-20">
          <h2 className="text-[34px] leading-[1.2] tracking-[-0.02em] font-serif text-[#1a1a18]">
            Why schema complexity is the real bottleneck
          </h2>

          <div className="mt-8 space-y-7 text-[18px] leading-[2] text-[#1a1a18]">
            <p>
              Most toy text-to-SQL benchmarks use schemas with five to ten tables and obvious column names. Operational databases look nothing like this.
            </p>

            <p>
              Freight and procurement datasets typically involve dozens of tables with abbreviated or ambiguous column names, denormalized structures from legacy systems, and implicit business rules that live in analyst knowledge rather than the schema itself. A column called <code>org</code> might mean origin port, originating office, or organization depending on which table it appears in.
            </p>

            <p>
              The model cannot reason correctly over ambiguous schema if the schema is all it receives. Schema understanding requires:
            </p>

            <ul className="space-y-4 list-disc pl-6 text-[18px] leading-[2] text-[#1a1a18]">
              <li>Column aliasing and disambiguation in the prompt context</li>
              <li>Business terminology mapping (what "lane" means in this context, what counts as "active" cargo)</li>
              <li>Relationship documentation beyond foreign keys</li>
              <li>Example queries that demonstrate non-obvious joins</li>
            </ul>

            <p className="mt-6">
              Without this layer, even capable models generate plausible-looking SQL that returns the wrong rows.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="mt-20">
          <h2 className="text-[34px] leading-[1.2] tracking-[-0.02em] font-serif text-[#1a1a18]">
            The self-correction loop
          </h2>

          <div className="mt-8 space-y-7 text-[18px] leading-[2] text-[#1a1a18]">
            <p>
              A query generated by a language model cannot be trusted without validation. The architecture pattern that consistently improves reliability is a self-correction loop: generate, execute, inspect, regenerate if needed.
            </p>

            <p>
              The loop works roughly as follows. The model generates a SQL query. The query engine executes it and returns either a result or an error. If the query fails, the error message is injected back into the prompt alongside the original question, and the model attempts to correct. If the query succeeds but returns zero rows — or an implausibly large result set — that signal is also fed back.
            </p>

            <p>
              This loop catches the majority of syntax errors and obvious logical mistakes before they reach the user. It does not catch semantic errors — queries that execute correctly but answer the wrong question — which is why validation against known ground truth remains important.
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section className="mt-20">
          <h2 className="text-[34px] leading-[1.2] tracking-[-0.02em] font-serif text-[#1a1a18]">
            Date and entity normalization
          </h2>

          <div className="mt-8 space-y-7 text-[18px] leading-[2] text-[#1a1a18]">
            <p>
              Operational queries are full of implicit references that require normalization before SQL generation can succeed.
            </p>

            <p>
              "Last quarter's volume" requires resolving the current date, computing the quarter boundary, and mapping that to the correct date field in the schema. "Hamburg freight" requires resolving "Hamburg" to the port code the database actually uses. "Active shipments" requires knowing how the system defines active — which is usually not a single column flag.
            </p>

            <p>
              These normalization steps belong in the retrieval and preprocessing layer, not inside the model prompt. Asking the model to do implicit arithmetic over dates and terminology at the same time as generating SQL increases hallucination risk significantly.
            </p>

            <p>
              A pre-processing layer that resolves entities, normalizes date ranges, and surfaces relevant schema context before the model sees the query produces substantially more reliable results.
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section className="mt-20">
          <h2 className="text-[34px] leading-[1.2] tracking-[-0.02em] font-serif text-[#1a1a18]">
            Token budget and context management
          </h2>

          <div className="mt-8 space-y-7 text-[18px] leading-[2] text-[#1a1a18]">
            <p>
              A fully documented operational schema is too large to inject into a model context window in its entirety. Token budgeting requires a retrieval step just for schema context: given the user's question, retrieve the relevant tables and columns rather than the entire schema.
            </p>

            <p>
              In practice, this means maintaining a lightweight schema index — table names, column descriptions, sample values — and using semantic similarity to surface the two to five most relevant tables for each query. The selected tables and their documented columns then enter the prompt; the rest do not.
            </p>

            <p>
              Getting this step right reduces context noise and substantially improves SQL accuracy on multi-table queries.
            </p>
          </div>
        </section>

        {/* Section 5 */}
        <section className="mt-20">
          <h2 className="text-[34px] leading-[1.2] tracking-[-0.02em] font-serif text-[#1a1a18]">
            What "good enough" looks like
          </h2>

          <div className="mt-8 space-y-7 text-[18px] leading-[2] text-[#1a1a18]">
            <p>
              Text-to-SQL for operational analytics does not need to be perfect. It needs to be reliable enough that users trust it and specific enough that wrong answers are obvious rather than plausible.
            </p>

            <p>
              The failure mode to avoid is confident wrongness: a query that executes cleanly, returns a number, and is silently incorrect. A system that errors visibly — or surfaces its uncertainty — is operationally safer than one that always returns an answer regardless of confidence.
            </p>

            <p>
              The teams that build useful text-to-SQL systems treat it as a retrieval pipeline problem first, a prompt engineering problem second, and a model selection problem last. That ordering is usually the inverse of how organizations approach it.
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
