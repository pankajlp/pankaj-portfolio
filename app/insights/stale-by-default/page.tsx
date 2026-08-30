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
          Stale by Default: Why Agents Act on Superseded Data
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-[20px] leading-[1.7] text-stone-500 italic">
          Retrieval systems rank by similarity. Nothing in that ranking function knows which of two near-identical clauses is currently in force.
        </p>

        {/* Meta */}
        <div className="mt-8 pb-10 border-b border-stone-200 text-[13px] text-stone-400 flex items-center gap-3 flex-wrap">
          <span>Pankaj Kumar</span>
          <span>•</span>
          <span>August 2026</span>
          <span>•</span>
          <span>8 min read</span>
        </div>

        {/* Intro */}
        <section className="mt-14 space-y-7 text-[18px] leading-[2] text-[#1c1917]">
          <p>
            Most discussion of retrieval failure is about relevance: the wrong chunk, a missed domain term, the answer buried at position nine. Those problems are real, and broadly solvable with better engineering.
          </p>

          <p>
            There is a second failure mode that is quieter and considerably worse: the system retrieves exactly the right document, and the document is no longer true.
          </p>

          <p>
            Nothing looks wrong when this happens. Recall is high, the cited passage genuinely supports the answer, the trace is clean. The agent is reasoning confidently over a policy clause replaced four months ago, or a rate that expired last contract period, and no signal anywhere in the pipeline says so.
          </p>

          <p>
            Three pieces of work from the last week converge on this from different directions: a preprint measuring how often agents check whether inherited memory is still valid, an engineering write-up on making memory invalidate itself, and a commercial dispute in US freight that quietly degraded a feed much of the industry depends on. Together they make a case worth stating plainly — temporal validity is not a data-quality concern to clean up later. It is part of the retrieval contract, and most of us are not modelling it.
          </p>
        </section>

        {/* Section 1 */}
        <section className="mt-20">
          <h2 className="text-[34px] leading-[1.2] tracking-[-0.02em] font-serif text-[#1c1917]">
            The failure has a measurable shape
          </h2>

          <div className="mt-8 space-y-7 text-[18px] leading-[2] text-[#1c1917]">
            <p>
              A preprint posted to arXiv on 26 August sets up a deliberately narrow experiment. An agent inherits memory containing a constraint that was accurate when written but has since been superseded by a newer authoritative record. It gets a fixed verification budget — two record inspections — and has to make a decision.
            </p>

            <p>
              The agents inspected the constraint&apos;s provenance path in roughly one episode in five. When the constraint had in fact been superseded, they produced stale-consistent decisions in 77.3% of episodes in the primary run, and 74.7% in both a re-worded replication and a held-out domain. Three-quarters of decisions, made against a record the system itself could have discovered was obsolete.
            </p>

            <p>
              The interesting half is the fix. Re-assigning just one of the two budget slots to the provenance path — not increasing the budget, just spending it differently — raised current-record-consistent decisions by 74.0, 72.7 and 61.3 points across the three runs, positive in six of six models, while leaving already-correct cases untouched. The agents had enough budget the whole time. They were spending all of it gathering more evidence and none of it asking whether the evidence they already had was still valid.
            </p>

            <p>
              This is one study on a synthetic setup; I would not treat the exact percentages as load-bearing. The direction matches what I have seen: given a choice between retrieving more and verifying what it already has, a model retrieves more. Nothing in the default loop rewards checking.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="mt-20">
          <h2 className="text-[34px] leading-[1.2] tracking-[-0.02em] font-serif text-[#1c1917]">
            Embeddings make supersession worse, not better
          </h2>

          <div className="mt-8 space-y-7 text-[18px] leading-[2] text-[#1c1917]">
            <p>
              In the procurement decision engine I have been building, the policy agent runs FAISS retrieval over internal policy and contract documents. Semantic search is the right method there — unstructured prose, paraphrased queries, nothing that fits a table.
            </p>

            <p>
              What took me longer to internalise is that supersession is adversarial to nearest-neighbour retrieval specifically. A revised clause is usually a rewording of the original: same subject, same terminology, same structure, one changed threshold or one added exception. In embedding space the two sit almost on top of each other — and the old one is often the closer match to a query phrased in the language people have used for years, because that is the language of the version they have been reading.
            </p>

            <p>
              So the ranking function does not merely fail to prefer the current version — under realistic phrasing it can actively prefer the superseded one. A relevance metric scores that retrieval as a success, and an answer-support metric does too, because the passage genuinely supports the answer. Both are measuring the wrong thing.
            </p>

            <p>
              There is no reranker configuration that fixes this. Recency is not a property the retriever can infer from the text; it is metadata, and if it is not attached to the chunk it does not exist as far as the pipeline is concerned.
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section className="mt-20">
          <h2 className="text-[34px] leading-[1.2] tracking-[-0.02em] font-serif text-[#1c1917]">
            The structured path got this right by accident
          </h2>

          <div className="mt-8 space-y-7 text-[18px] leading-[2] text-[#1c1917]">
            <p>
              The rate agent in the same system does not use vectors at all. Historical rate data is structured — lane, equipment type, effective period, value — so the right method is a deterministic lookup against the nearest matching record. I have argued that on general grounds before: match the retrieval method to the shape of the data, and do not pay for vectors where a table lookup is exact.
            </p>

            <p>
              The part I did not appreciate at the time is that this also solved the staleness problem for that agent, for free. Rate records carry validity windows because that is how commercial rate data is structured. A lookup keyed on lane and date cannot return an expired rate, because the date is part of the key rather than a hint the ranker may or may not weigh. Temporal correctness came bundled with determinism.
            </p>

            <p>
              The vector path got no such guarantee, and I did not go looking for one. Two agents, one architecture, and only one of them had any notion of time — because in one case the data format enforced it and in the other nothing did.
            </p>

            <p>
              I suspect that asymmetry is common. Teams inherit temporal discipline wherever they touch relational data and lose it the moment they move to a document store — and because both paths return plausible answers, nobody notices which one is checking.
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section className="mt-20">
          <h2 className="text-[34px] leading-[1.2] tracking-[-0.02em] font-serif text-[#1c1917]">
            Feeds degrade before they fail
          </h2>

          <div className="mt-8 space-y-7 text-[18px] leading-[2] text-[#1c1917]">
            <p>
              A freight story from the same week makes the operational version concrete. In a dispute over data access, ELD provider Motive throttled the API access of Highway — a carrier-vetting platform sitting behind roughly 80% of US brokered loads, holding insurance certificates for more than 175,000 carriers. Highway refused the payment demand and withdrew its performance guarantee for carriers on that equipment.
            </p>

            <p>
              The detail worth sitting with: this was a reduction in refresh frequency, not a disconnection. Carriers stayed visible. Every API call kept returning 200. What changed was how old the data behind those responses was.
            </p>

            <p>
              A decision system built on that feed will not notice. Health checks pass, no exception is raised, no retry fires, and the agent evaluates a carrier against an insurance certificate hours or days behind reality. In freight that means a load tendered to a carrier whose coverage lapsed; in procurement, an award made against a rate renegotiated last week.
            </p>

            <p>
              Availability monitoring answers whether the data arrived. It says nothing about whether the data is current. Those are different questions, and most stacks instrument only the first.
            </p>
          </div>
        </section>

        {/* Section 5 */}
        <section className="mt-20">
          <h2 className="text-[34px] leading-[1.2] tracking-[-0.02em] font-serif text-[#1c1917]">
            What to actually build
          </h2>

          <div className="mt-8 space-y-7 text-[18px] leading-[2] text-[#1c1917]">
            <p>
              LangChain published an engineering note on 25 August describing how they handle this in OpenWiki, and the shape of their answer is the one I would reach for. Memory is stored as claims, each binding a statement to a specific versioned piece of evidence. Staleness detection is then a deterministic version comparison against the current source — no model calls — which keeps it cheap across thousands of claims. Only flagged claims go to a model for repair.
            </p>

            <p>
              Their reported numbers on a 2,000-claim evaluation are 97.8% supported and 0.5% stale, against a 92.9% and 3.5% baseline. More telling is the recovery test: after a change invalidated 17% of claims, the next checkpoint was back to 0% stale. Unresolved claims persist as unresolved rather than being silently dropped, which is the right default.
            </p>

            <p>
              In operational terms:
            </p>

            <p>
              <strong>Make validity a filter, not a feature.</strong> Effective dates, supersession pointers and document version go into the metadata filter that runs before similarity search, in the same position as counterparty and document type. If a clause is out of force for the query date, it should never reach the ranker.
            </p>

            <p>
              <strong>Separate the cheap check from the expensive one.</strong> Deciding whether a claim is stale is a version comparison. Deciding what to do about it needs a model. Conflating them means paying LLM prices to answer a question a string equality could have answered — the same argument for using static rules wherever they suffice.
            </p>

            <p>
              <strong>Spend part of the verification budget on provenance.</strong> If your agent has a bounded number of lookups, one should establish whether the evidence is current rather than fetch a fourth supporting document. That was the highest-leverage change in the arXiv study, and it costs nothing extra.
            </p>

            <p>
              <strong>Instrument age, not just availability.</strong> Log the age of every retrieved record in the trace. Set sanity bounds on it as you would any other domain quantity, and fail loudly when a feed that should refresh hourly has not moved in a day.
            </p>
          </div>
        </section>

        {/* Section 6 */}
        <section className="mt-20">
          <h2 className="text-[34px] leading-[1.2] tracking-[-0.02em] font-serif text-[#1c1917]">
            Bounding the model in time
          </h2>

          <div className="mt-8 space-y-7 text-[18px] leading-[2] text-[#1c1917]">
            <p>
              The framing I keep coming back to for production agents is that you bound the model from both sides: schema validation and domain sanity bounds on what comes out, scoped and validated context on what goes in. Staleness is that same discipline applied to a dimension I had been treating as someone else&apos;s problem. The input side of that boundary has a time axis, and leaving it unbounded means the model is free to reason correctly over inputs that stopped being true.
            </p>

            <p>
              None of this is exotic engineering. Effective dates, version pointers and freshness thresholds are things any data team already knows how to model. The gap is that retrieval pipelines were built to optimise relevance, evaluation harnesses to measure it, and a superseded document scores well on every metric in that chain.
            </p>

            <p>
              An agent that retrieves the right document and acts on the wrong version of it is not making a retrieval error. It is making a decision the system had all the information to prevent, and chose not to check.
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
