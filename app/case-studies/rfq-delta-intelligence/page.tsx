export default function RFQDeltaCaseStudyPage() {
  return (
    <main className="min-h-screen bg-[#f5f4f0] text-[#1c1917]">

      {/* Header */}
      <header className="border-b border-stone-200 px-8 py-5 flex items-center justify-between">

        <a
          href="/"
          className="text-[14px] text-stone-500 hover:text-stone-900 transition-colors duration-300"
        >
          ← Back to NordNeuron
        </a>

        <span className="text-[12px] font-medium text-stone-900 bg-stone-100 border border-stone-200 px-3 py-1 rounded-full uppercase tracking-[0.08em]">
          Case Study
        </span>
      </header>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-6 py-20">

        {/* Tag */}
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-900 text-[11px] uppercase tracking-[0.08em] mb-8 font-medium">
          RFQ Intelligence
        </div>

        {/* Title */}
        <h1 className="text-[42px] md:text-[60px] leading-[1.08] tracking-[-0.03em] font-serif text-stone-800">
          Designing operational intelligence
          around the Delta metric
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-[20px] leading-[1.8] text-stone-500 max-w-3xl">
          How a single analytical abstraction transformed fragmented RFQ pricing
          data into a more meaningful procurement intelligence workflow.
        </p>

        {/* Meta */}
        <div className="mt-8 pb-10 border-b border-stone-200 text-[13px] text-stone-400 flex items-center gap-3 flex-wrap">
          <span>Pankaj Kumar</span>
          <span>•</span>
          <span>Operational Intelligence</span>
          <span>•</span>
          <span>AI Procurement Systems</span>
        </div>

        {/* Intro */}
        <section className="mt-14 space-y-8 text-[18px] leading-[2] text-stone-800">

          <p>
            Most procurement dashboards focus on visualization:
            carrier pricing, shipment volumes,
            RFQ participation, or lane-level reporting.
            The challenge was not the lack of data —
            it was the lack of operational reasoning across that data.
          </p>

          <p>
            RFQ workflows generated fragmented pricing signals across carriers,
            regions, and shipment modes,
            but traditional dashboards struggled to explain
            where procurement opportunities actually existed.
          </p>

          <p>
            The goal was not simply building another reporting layer.
            It was designing a system capable of identifying
            commercially meaningful pricing deviations
            inside operational RFQ workflows.
          </p>
        </section>

        {/* Core Insight */}
        <section className="mt-24">

          <div className="inline-flex items-center px-3 py-1 rounded-full bg-stone-100 text-stone-900 border border-stone-200 text-[11px] uppercase tracking-[0.08em] mb-8 font-medium">
            Core Insight
          </div>

          <h2 className="text-[36px] md:text-[48px] leading-[1.15] tracking-[-0.03em] font-serif text-stone-800">
            The Delta column became
            the operational intelligence layer
          </h2>

          <div className="mt-10 space-y-8 text-[18px] leading-[2] text-stone-800">

            <p>
              The most important engineering decision was not the dashboard,
              the model, or the SQL pipeline.
              It was introducing a Delta metric capable of comparing
              procurement pricing behavior against operational baselines.
            </p>

            <p>
              Standard RFQ columns showed historical pricing information.
              The Delta layer introduced comparative operational meaning.
            </p>
          </div>

          {/* Table */}
          <div className="mt-12 overflow-hidden rounded-2xl border border-stone-200 bg-white">

            <table className="w-full text-left">

              <thead className="bg-stone-50 border-b border-stone-200">
                <tr>
                  <th className="px-6 py-4 text-[13px] uppercase tracking-[0.08em] text-stone-500">
                    Column Type
                  </th>

                  <th className="px-6 py-4 text-[13px] uppercase tracking-[0.08em] text-stone-500">
                    Example
                  </th>

                  <th className="px-6 py-4 text-[13px] uppercase tracking-[0.08em] text-stone-500">
                    Purpose
                  </th>
                </tr>
              </thead>

              <tbody>

                <tr className="border-b border-stone-200">
                  <td className="px-6 py-5 text-stone-800">
                    Standard Column
                  </td>

                  <td className="px-6 py-5 text-stone-500">
                    Carrier Rate
                  </td>

                  <td className="px-6 py-5 text-stone-500">
                    Raw RFQ pricing visibility
                  </td>
                </tr>

                <tr className="border-b border-stone-200">
                  <td className="px-6 py-5 text-stone-800">
                    Standard Column
                  </td>

                  <td className="px-6 py-5 text-stone-500">
                    Lane Volume
                  </td>

                  <td className="px-6 py-5 text-stone-500">
                    Shipment activity tracking
                  </td>
                </tr>

                <tr className="bg-stone-100/20">
                  <td className="px-6 py-5 text-stone-900 font-medium">
                    Custom Intelligence Layer
                  </td>

                  <td className="px-6 py-5 text-stone-900 font-medium">
                    Delta Metric
                  </td>

                  <td className="px-6 py-5 text-stone-500">
                    Identified procurement pricing deviations and commercial opportunity zones
                  </td>
                </tr>

              </tbody>
            </table>
          </div>

          <div className="mt-10 space-y-8 text-[18px] leading-[2] text-stone-800">

            <p>
              That distinction mattered because the Delta layer transformed
              the system from passive reporting into operational intelligence.
            </p>
          </div>
        </section>

        {/* Architecture */}
        <section className="mt-24">

          <h2 className="text-[36px] md:text-[48px] leading-[1.15] tracking-[-0.03em] font-serif text-stone-800">
            AI-native procurement architecture
          </h2>

          <div className="mt-10 space-y-8 text-[18px] leading-[2] text-stone-800">

            <p>
              The architecture combined lightweight analytics infrastructure,
              local LLM workflows,
              and operational query orchestration
              into a unified intelligence pipeline.
            </p>
          </div>

          {/* Architecture Image */}
          <div className="mt-12 rounded-3xl overflow-hidden border border-stone-200 bg-white">
            <img
              src="/architecture.png"
              alt="AI Procurement Intelligence Workflow"
              className="w-full object-cover"
            />
          </div>
        </section>

        {/* Text-to-SQL */}
        <section className="mt-24">

          <h2 className="text-[36px] md:text-[48px] leading-[1.15] tracking-[-0.03em] font-serif text-stone-800">
            The text-to-SQL orchestration pipeline
          </h2>

          <div className="mt-10 space-y-6">

            {[
              {
                step: "01",
                title: "Schema Injection",
                desc: "Operational table structures and procurement metadata were injected into the prompt context.",
              },
              {
                step: "02",
                title: "Prompt Orchestration",
                desc: "The system constrained model behavior toward deterministic analytical reasoning.",
              },
              {
                step: "03",
                title: "SQL Generation",
                desc: "The local LLM generated structured DuckDB-compatible analytical queries.",
              },
              {
                step: "04",
                title: "DuckDB Execution",
                desc: "Queries were executed directly against lightweight operational datasets.",
              },
              {
                step: "05",
                title: "Operational Interpretation",
                desc: "Results were surfaced through dashboards and intelligence workflows.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-stone-200 bg-white p-8 flex gap-6"
              >

                <div className="text-stone-900 text-[13px] font-medium tracking-[0.12em]">
                  {item.step}
                </div>

                <div>
                  <h3 className="text-[24px] font-serif text-stone-800">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[16px] leading-[1.9] text-stone-500">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 space-y-8 text-[18px] leading-[2] text-stone-800">

            <p>
              Breaking the workflow into distinct orchestration stages mattered.
              It demonstrated that the system was not “a chatbot attached to BI,”
              but an operational reasoning pipeline designed around structured procurement workflows.
            </p>
          </div>
        </section>

        {/* Reflection */}
        <section className="mt-24 border-t border-stone-200 pt-16">

          <h2 className="text-[36px] md:text-[48px] leading-[1.15] tracking-[-0.03em] font-serif text-stone-800">
            The real innovation was not the technology
          </h2>

          <div className="mt-10 space-y-8 text-[18px] leading-[2] text-stone-800">

            <p>
              The most important realization from the project
              was that the intelligence layer did not come from the model itself.
            </p>

            <p>
              The real innovation came from identifying
              the operational abstraction that mattered —
              the Delta metric —
              and designing the surrounding architecture
              to reason around it effectively.
            </p>

            <p>
              The technology stack enabled the workflow,
              but the commercial value emerged from understanding
              procurement behavior deeply enough
              to define the right intelligence layer in the first place.
            </p>
          </div>

          {/* Closing Quote */}
          <div className="mt-14 border-l-[3px] border-stone-200 pl-6 text-[20px] italic leading-[2] text-stone-500">
            The hardest part of operational intelligence systems
            is rarely the AI model.
            It is identifying the operational abstraction
            that actually changes decision-making.
          </div>
        </section>

      </article>
    </main>
  );
}