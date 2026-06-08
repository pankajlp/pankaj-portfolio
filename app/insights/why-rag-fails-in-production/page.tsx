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

      {/* Clean Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-[#fafaf8]/85 backdrop-blur-md border-b border-black/5 px-6 py-5">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 shrink-0">
            {/* Accent Dot */}
            <div className="w-2.5 h-2.5 rounded-full bg-cyan-500 shadow-[0_0_8px_#06b6d4]" />
            <span className="text-[17px] font-bold tracking-tight font-serif text-black">
              NordNeuron
            </span>
          </a>
          <a
            href="/insights"
            className="text-sm font-medium text-[#6b7280] hover:text-[#1a4fd6] transition-colors duration-300 flex items-center gap-1.5"
          >
            <span>←</span> Back to Insights
          </a>
        </div>
      </nav>

      {/* Article */}
      <article className="max-w-3xl mx-auto px-6 py-20">
        {/* Tag */}
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-[#eef2fd] text-[#1a4fd6] text-[11px] uppercase tracking-[0.08em] mb-8 font-medium">
          Enterprise AI
        </div>

        {/* Title */}
        <h1 className="text-[42px] md:text-[56px] leading-[1.1] tracking-[-0.03em] font-serif text-[#1a1a18]">
          Why RAG Fails in Production — and What to Do About It
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-[20px] leading-[1.7] text-[#5a5a54] italic">
          Retrieval-augmented generation works remarkably well in demos. Operational environments are a different problem entirely.
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
            Every team building an enterprise AI system eventually reaches the same moment. The prototype looks promising. The retrieval works on the test documents. The LLM answers clearly. Then it goes into production — and the cracks appear.
          </p>

          <p>
            Answers drift. Irrelevant chunks surface. The model confidently synthesizes from the wrong context. Edge cases multiply.
          </p>

          <p>
            This is not a model problem. It is a retrieval design problem. And fixing it requires understanding what RAG actually gets wrong — and why.
          </p>
        </section>

        {/* Section 1 */}
        <section className="mt-20">
          <h2 className="text-[34px] leading-[1.2] tracking-[-0.02em] font-serif text-[#1a1a18]">
            The demo illusion
          </h2>

          <div className="mt-8 space-y-7 text-[18px] leading-[2] text-[#1a1a18]">
            <p>
              RAG demos are almost always run against clean, well-structured documents with predictable query patterns. The retrieval step produces relevant chunks. The model composes a coherent answer. The audience is impressed.
            </p>

            <p>
              Operational environments look nothing like this.
            </p>

            <p>
              Real enterprise data is messy by nature: PDFs with inconsistent formatting, spreadsheets exported as flat text, email threads with implicit context, carrier notes in inconsistent shorthand. Retrieval systems built against clean corpora often fail completely once they encounter real operational documents.
            </p>

            <p>
              The first mistake is assuming the problem is fundamentally similar to the demo. It is not.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="mt-20">
          <h2 className="text-[34px] leading-[1.2] tracking-[-0.02em] font-serif text-[#1a1a18]">
            Where retrieval actually breaks
          </h2>

          <div className="mt-8 space-y-7 text-[18px] leading-[2] text-[#1a1a18]">
            <p>
              Most RAG implementations use cosine similarity over dense vector embeddings. This works when the query and the document share semantic overlap. It breaks in several predictable ways:
            </p>

            <p>
              <strong>Specificity collapse.</strong> Embedding models compress meaning into fixed-size vectors. In high-specificity operational queries — "what was the per-kilo rate for dry cargo from Nhava Sheva to Rotterdam in Q1 2025?" — the retrieval step often returns plausible-sounding but semantically adjacent chunks that miss the exact condition the user is asking about.
            </p>

            <p>
              <strong>Chunk boundary problems.</strong> Chunking strategy is almost always an afterthought. If an important answer spans two chunks — a table header in one, the data rows in another — neither chunk is sufficient alone. The model gets partial context and reasons over an incomplete picture.
            </p>

            <p>
              <strong>Context poisoning.</strong> Large retrieval windows improve recall but increase the risk that irrelevant, contradictory, or outdated context enters the prompt. Models do not always distinguish clearly between what is primary and what is background noise.
            </p>

            <p>
              <strong>Query distribution mismatch.</strong> Embedding models are pretrained on general corpora. Logistics abbreviations, procurement terminology, and industry-specific shorthand often sit outside the distribution where similarity search performs reliably.
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section className="mt-20">
          <h2 className="text-[34px] leading-[1.2] tracking-[-0.02em] font-serif text-[#1a1a18]">
            The architecture decisions that actually matter
          </h2>

          <div className="mt-8 space-y-7 text-[18px] leading-[2] text-[#1a1a18]">
            <p>
              Fixing RAG in production is less about swapping models and more about rethinking the retrieval pipeline.
            </p>

            <p>
              <strong>Hybrid retrieval.</strong> Combining dense vector search with sparse BM25 retrieval captures both semantic similarity and exact keyword matching. For operational queries where specific terms matter — carrier codes, port names, commodity types — hybrid search consistently outperforms dense-only retrieval.
            </p>

            <p>
              <strong>Metadata filtering.</strong> Before similarity search, filter aggressively by structured metadata: document type, date range, counterparty, operational unit. Reducing the candidate pool before ranking improves both relevance and speed.
            </p>

            <p>
              <strong>Re-ranking.</strong> A cross-encoder re-ranking step applied after initial retrieval can dramatically improve the quality of the final context window. The additional latency is usually worth it in high-stakes operational contexts.
            </p>

            <p>
              <strong>Chunk overlap and hierarchical structure.</strong> Overlapping chunks reduce the chance of missing cross-boundary context. Storing both document-level summaries and granular chunks — retrieving at the right granularity based on query type — produces more consistent results than flat chunking alone.
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section className="mt-20">
          <h2 className="text-[34px] leading-[1.2] tracking-[-0.02em] font-serif text-[#1a1a18]">
            The part nobody talks about: evaluation
          </h2>

          <div className="mt-8 space-y-7 text-[18px] leading-[2] text-[#1a1a18]">
            <p>
              The most common reason RAG systems stagnate in production is the absence of a systematic evaluation loop.
            </p>

            <p>
              Without ground truth query-answer pairs and retrieval recall metrics, there is no reliable way to know whether a change to chunk size, embedding model, or retrieval strategy improved or degraded performance. Most teams rely on informal human review — which doesn't scale and doesn't catch distributional drift.
            </p>

            <p>
              Building even a small evaluation dataset — 50 to 100 representative queries with known correct answers — transforms RAG development from intuition-driven iteration into measurable engineering.
            </p>
          </div>
        </section>

        {/* Section 5 */}
        <section className="mt-20">
          <h2 className="text-[34px] leading-[1.2] tracking-[-0.02em] font-serif text-[#1a1a18]">
            What this means in practice
          </h2>

          <div className="mt-8 space-y-7 text-[18px] leading-[2] text-[#1a1a18]">
            <p>
              RAG is not a drop-in component. It is a system — one that requires careful calibration across retrieval strategy, chunking design, metadata architecture, prompt construction, and evaluation methodology.
            </p>

            <p>
              The teams that treat it as a component to plug in will keep running into the same production failures. The teams that treat it as a retrieval system to engineer will build something that actually works at scale.
            </p>

            <p>
              That distinction is where most enterprise AI projects succeed or stall.
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
