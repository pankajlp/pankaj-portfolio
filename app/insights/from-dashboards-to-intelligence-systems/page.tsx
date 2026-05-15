
export default function ArticlePage() {
  return (
    <main className="min-h-screen bg-[#fafaf8] text-[#1a1a18]">
      {/* Header */}
      <header className="border-b border-black/10 px-8 py-5 flex items-center justify-between">
        <span className="text-[18px] tracking-tight font-serif">
          Pankaj Kumar
        </span>
        <a
  href="/insights"
  className="inline-flex items-center gap-2 text-white/40 hover:text-cyan-300 transition-colors duration-300 mb-10"
>
  ← Back to Insights
</a>
        <span className="text-[12px] font-medium text-[#1a4fd6] bg-[#eef2fd] px-3 py-1 rounded-full uppercase tracking-[0.08em]">
          Enterprise AI
        </span>
      </header>

      {/* Article */}
      <article className="max-w-3xl mx-auto px-6 py-20">
        {/* Tag */}
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#eef2fd] text-[#1a4fd6] text-[11px] uppercase tracking-[0.08em] mb-8 font-medium">
          Enterprise AI
        </div>

        {/* Title */}
        <h1 className="text-[42px] md:text-[56px] leading-[1.1] tracking-[-0.03em] font-serif text-[#1a1a18]">
          From Dashboards to Intelligence Systems
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-[20px] leading-[1.7] text-[#5a5a54]">
          Why visualizing data is no longer enough — and what comes after the dashboard era.
        </p>

        {/* Meta */}
        <div className="mt-8 pb-10 border-b border-black/10 text-[13px] text-[#9a9a92] flex items-center gap-3 flex-wrap">
          <span>Pankaj Kumar</span>
          <span>•</span>
          <span>May 2026</span>
          <span>•</span>
          <span>6 min read</span>
        </div>

        {/* Intro */}
        <section className="mt-14 space-y-7 text-[18px] leading-[2] text-[#1a1a18]">
          <p>
            For years, enterprise analytics has revolved around dashboards.
            Power BI, Tableau, Excel — these tools gave organizations a way to
            track KPIs, monitor operations, and report on financials. They
            remain foundational. But something is shifting.
          </p>

          <p>
            We are moving from systems that answer <em>what happened</em> to
            systems that recommend <em>what should happen next</em>. That
            distinction — subtle as it sounds — changes how operational
            platforms are designed, and who builds them.
          </p>
        </section>

        {/* Compare Grid */}
        <div className="grid md:grid-cols-2 border border-black/10 rounded-2xl overflow-hidden mt-14 bg-white">
          <div className="p-8">
            <div className="text-[10px] uppercase tracking-[0.12em] text-[#9a9a92] font-medium mb-3">
              Dashboard
            </div>

            <h3 className="text-[24px] font-serif text-[#1a1a18] mb-3">
              “What happened?”
            </h3>

            <p className="text-[15px] leading-[1.8] text-[#5a5a54]">
              Visualizes historical data. The user performs the reasoning.
            </p>
          </div>

          <div className="p-8 border-t md:border-t-0 md:border-l border-black/10">
            <div className="text-[10px] uppercase tracking-[0.12em] text-[#9a9a92] font-medium mb-3">
              Intelligence system
            </div>

            <h3 className="text-[24px] font-serif text-[#1a1a18] mb-3">
              “What should happen next?”
            </h3>

            <p className="text-[15px] leading-[1.8] text-[#5a5a54]">
              Explains, recommends, and participates in the decision.
            </p>
          </div>
        </div>

        {/* Section 1 */}
        <section className="mt-20">
          <h2 className="text-[34px] leading-[1.2] tracking-[-0.02em] font-serif text-[#1a1a18]">
            The limits of the traditional BI stack
          </h2>

          <div className="mt-8 space-y-7 text-[18px] leading-[2] text-[#1a1a18]">
            <p>
              Traditional BI workflows — data ingestion, ETL pipelines,
              warehouse modeling, dashboards, reports — are built around a
              fundamental assumption: a human will sit on the other side and
              interpret everything.
            </p>

            <p>
              That works when the data is clean, the questions are known in
              advance, and the user has time to investigate. In most real
              operational environments, none of those conditions hold.
            </p>

            <p>
              The dashboard visualizes. The analyst reasons. The manager
              decides. The intelligence stays entirely outside the platform.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="mt-20">
          <h2 className="text-[34px] leading-[1.2] tracking-[-0.02em] font-serif text-[#1a1a18]">
            What AI-native operational systems look like
          </h2>

          <div className="mt-8 space-y-7 text-[18px] leading-[2] text-[#1a1a18]">
            <p>
              LLMs and modern AI workflows are beginning to absorb that
              external reasoning layer. Instead of static interfaces, systems
              can now explain trends in plain language, flag anomalies before a
              human notices, answer contextual follow-up questions, and
              generate recommendations tied to live operational data.
            </p>

            <p>
              This matters especially in logistics and procurement —
              environments that generate both structured and unstructured
              information at scale:
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mt-8">
            {[
              "RFQs",
              "Shipment updates",
              "Carrier emails",
              "Pricing tables",
              "Operational notes",
              "Warehouse events",
              "PDF contracts",
            ].map((item) => (
              <div
                key={item}
                className="px-4 py-2 rounded-full bg-[#eeede8] border border-black/10 text-[#5a5a54] text-[14px]"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-8 space-y-7 text-[18px] leading-[2] text-[#1a1a18]">
            <p>
              Traditional dashboards struggle to unify these layers
              meaningfully. An intelligence system can.
            </p>
          </div>

          {/* Callout */}
          <div className="mt-10 rounded-r-xl border-l-[3px] border-[#1a4fd6] bg-[#f5f7fe] px-6 py-6 text-[16px] leading-[1.9] text-[#5a5a54]">
            <strong className="text-[#1a1a18]">The key insight:</strong> The
            shift isn't about attaching a chatbot to a dashboard. It requires
            rethinking the architecture itself — adding retrieval, reasoning,
            context injection, and workflow orchestration alongside traditional
            visualization.
          </div>
        </section>

        {/* Section 3 */}
        <section className="mt-20">
          <h2 className="text-[34px] leading-[1.2] tracking-[-0.02em] font-serif text-[#1a1a18]">
            A different engineering mindset
          </h2>

          <div className="mt-8 space-y-7 text-[18px] leading-[2] text-[#1a1a18]">
            <p>
              Building an intelligent operational system means combining
              components that didn't traditionally belong in the same stack:
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mt-8">
            {[
              "Analytics platform",
              "Local or cloud LLM",
              "Vector retrieval",
              "Orchestration layer",
              "Automation pipelines",
              "Operational APIs",
            ].map((item) => (
              <div
                key={item}
                className="px-4 py-2 rounded-full bg-[#eeede8] border border-black/10 text-[#5a5a54] text-[14px]"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-8 space-y-7 text-[18px] leading-[2] text-[#1a1a18]">
            <p>
              The result is not a smarter dashboard — it is an operational
              intelligence layer. One that can hold context, surface relevant
              information unprompted, and participate in decisions rather than
              just display data to support them.
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section className="mt-20">
          <h2 className="text-[34px] leading-[1.2] tracking-[-0.02em] font-serif text-[#1a1a18]">
            Why supply chain is the clearest test case
          </h2>

          <div className="mt-8 space-y-7 text-[18px] leading-[2] text-[#1a1a18]">
            <p>
              Supply chain operations are fragmented by nature. Operational
              context is distributed across TMS platforms, spreadsheets,
              carrier portals, emails, and PDFs — often with no single system
              of record.
            </p>

            <p>
              Decision-making suffers not because data is absent, but because
              it's disconnected. Intelligence systems help unify that context:
            </p>
          </div>

          {/* Callout */}
          <div className="mt-10 rounded-r-xl border-l-[3px] border-[#1a4fd6] bg-[#f5f7fe] px-6 py-6 text-[16px] leading-[1.9] text-[#5a5a54]">
            An AI procurement assistant surfaces RFQ risks before they
            escalate. A warehouse copilot identifies gate congestion patterns
            across shifts. A freight intelligence platform recommends carrier
            substitutions based on live lane performance — without waiting for a
            weekly review.
          </div>

          <div className="mt-8 space-y-7 text-[18px] leading-[2] text-[#1a1a18]">
            <p>
              None of this replaces the operational expert. It augments their
              reasoning with context they would otherwise spend hours assembling
              manually.
            </p>
          </div>
        </section>

        {/* Final Section */}
        <section className="mt-20">
          <h2 className="text-[34px] leading-[1.2] tracking-[-0.02em] font-serif text-[#1a1a18]">
            Where dashboards fit in what comes next
          </h2>

          <div className="mt-8 space-y-7 text-[18px] leading-[2] text-[#1a1a18]">
            <p>
              Dashboards will not disappear. They remain the right tool for
              monitoring, reporting, and executive visibility. But increasingly,
              they will become one layer inside a larger intelligent system —
              not the system itself.
            </p>

            <p>
              The future enterprise interface will likely combine analytics,
              automation, AI reasoning, and conversational access in a single
              operational environment. Systems that don't just visualize
              operations, but actively participate in them.
            </p>
          </div>
        </section>

        {/* Divider */}
        <div className="h-px bg-black/10 my-16" />

        {/* Closing */}
        <div className="border-l-[3px] border-black/10 pl-6 text-[18px] italic leading-[2] text-[#5a5a54]">
          That transition — from dashboards to intelligence systems — is one
          of the most consequential shifts in enterprise technology right now.
          And from where I sit in logistics and supply chain, we are only at
          the beginning of understanding what it actually enables.
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-black/10 px-6 py-10 text-center text-[13px] text-[#9a9a92]">
        © 2026 Pankaj Kumar · Enterprise AI & Logistics Intelligence
      </footer>
    </main>
  );
}