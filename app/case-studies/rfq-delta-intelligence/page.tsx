import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
export default function RFQDeltaCaseStudyPage() {
  return (
    <main id="main" className="min-h-dvh bg-paper text-ink pt-[var(--nav-h)]">

      <Navbar />

      {/* Article */}
      <article className="max-w-4xl mx-auto px-6 py-20">

        {/* Tag */}

        {/* Title */}
        <h1 className="text-3xl md:text-[60px] leading-[1.08] font-display text-ink">
          Designing operational intelligence
          around the Delta metric
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg leading-[1.8] text-muted max-w-3xl">
          How a single analytical abstraction transformed fragmented RFQ pricing
          data into a more meaningful procurement intelligence workflow.
        </p>

        {/* Meta */}
        <div className="mt-8 pb-10 border-b border-rule-2 text-sm text-muted flex items-center gap-3 flex-wrap">
          <span>Pankaj Kumar</span>
          <span>,</span>
          <span>Operational Intelligence</span>
          <span>,</span>
          <span>AI Procurement Systems</span>
        </div>

        {/* Intro */}
        <section className="mt-14 space-y-8 text-lg leading-[2] text-ink">

          <p>
            Most procurement dashboards focus on visualization:
            carrier pricing, shipment volumes,
            RFQ participation, or lane-level reporting.
            The challenge was not the lack of data , 
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


          <h2 className="text-3xl md:text-[48px] leading-[1.15] font-display text-ink">
            The Delta column became
            the operational intelligence layer
          </h2>

          <div className="mt-10 space-y-8 text-lg leading-[2] text-ink">

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
          <div className="mt-12 overflow-hidden rounded-card border border-rule-2 bg-paper-2">

            <table className="w-full text-left">

              <thead className="bg-paper-2 border-b border-rule-2">
                <tr>
                  <th className="px-6 py-4 text-sm text-muted">
                    Column Type
                  </th>

                  <th className="px-6 py-4 text-sm text-muted">
                    Example
                  </th>

                  <th className="px-6 py-4 text-sm text-muted">
                    Purpose
                  </th>
                </tr>
              </thead>

              <tbody>

                <tr className="border-b border-rule-2">
                  <td className="px-6 py-5 text-ink">
                    Standard Column
                  </td>

                  <td className="px-6 py-5 text-muted">
                    Carrier Rate
                  </td>

                  <td className="px-6 py-5 text-muted">
                    Raw RFQ pricing visibility
                  </td>
                </tr>

                <tr className="border-b border-rule-2">
                  <td className="px-6 py-5 text-ink">
                    Standard Column
                  </td>

                  <td className="px-6 py-5 text-muted">
                    Lane Volume
                  </td>

                  <td className="px-6 py-5 text-muted">
                    Shipment activity tracking
                  </td>
                </tr>

                <tr className="bg-paper-3/20">
                  <td className="px-6 py-5 text-ink font-medium">
                    Custom Intelligence Layer
                  </td>

                  <td className="px-6 py-5 text-ink font-medium">
                    Delta Metric
                  </td>

                  <td className="px-6 py-5 text-muted">
                    Identified procurement pricing deviations and commercial opportunity zones
                  </td>
                </tr>

              </tbody>
            </table>
          </div>

          <div className="mt-10 space-y-8 text-lg leading-[2] text-ink">

            <p>
              That distinction mattered because the Delta layer transformed
              the system from passive reporting into operational intelligence.
            </p>
          </div>
        </section>

        {/* Architecture */}
        <section className="mt-24">

          <h2 className="text-3xl md:text-[48px] leading-[1.15] font-display text-ink">
            AI-native procurement architecture
          </h2>

          <div className="mt-10 space-y-8 text-lg leading-[2] text-ink">

            <p>
              The architecture combined lightweight analytics infrastructure,
              local LLM workflows,
              and operational query orchestration
              into a unified intelligence pipeline.
            </p>
          </div>

          {/* Architecture Image */}
          <div className="mt-12 rounded-card overflow-hidden border border-rule-2 bg-paper-2">
            <img
              src="/architecture.png"
              alt="AI Procurement Intelligence Workflow"
              className="w-full object-cover"
            />
          </div>
        </section>

        {/* Text-to-SQL */}
        <section className="mt-24">

          <h2 className="text-3xl md:text-[48px] leading-[1.15] font-display text-ink">
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
                className="rounded-card border border-rule-2 bg-paper-2 p-6 md:p-8 flex gap-6"
              >

                <div className="text-ink text-sm font-medium">
                  {item.step}
                </div>

                <div>
                  <h3 className="text-xl font-display text-ink">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-md leading-[1.9] text-muted">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 space-y-8 text-lg leading-[2] text-ink">

            <p>
              Breaking the workflow into distinct orchestration stages mattered.
              It demonstrated that the system was not “a chatbot attached to BI,”
              but an operational reasoning pipeline designed around structured procurement workflows.
            </p>
          </div>
        </section>

        {/* Reflection */}
        <section className="mt-24 border-t border-rule-2 pt-16">

          <h2 className="text-3xl md:text-[48px] leading-[1.15] font-display text-ink">
            The real innovation was not the technology
          </h2>

          <div className="mt-10 space-y-8 text-lg leading-[2] text-ink">

            <p>
              The most important realization from the project
              was that the intelligence layer did not come from the model itself.
            </p>

            <p>
              The real innovation came from identifying
              the operational abstraction that mattered , 
              the Delta metric , 
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
          <div className="mt-14 border-l-[3px] border-rule-2 pl-6 text-lg italic leading-[2] text-muted">
            The hardest part of operational intelligence systems
            is rarely the AI model.
            It is identifying the operational abstraction
            that actually changes decision-making.
          </div>
        </section>

      </article>
      <Footer />
    </main>
  );
}