import Link from "next/link";
import Image from "next/image";

export default function InsightsPage() {
  return (
    <main className="min-h-screen bg-[#fafaf8] text-[#1a1a18] px-6 py-10">
      
      {/* Back Button */}
      <div className="max-w-6xl mx-auto">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-[#6b7280] hover:text-[#1a4fd6] transition-colors duration-300 mb-12 text-sm"
        >
          ← Back
        </a>

        {/* Hero Section */}
        <div className="mb-16 max-w-4xl">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#eef2fd] text-[#1a4fd6] text-sm mb-6">
            Insights
          </div>

          <h1 className="text-3xl md:text-4xl font-serif leading-tight tracking-tight">
            Operational intelligence,
            AI systems, and enterprise architecture.
          </h1>

          <p className="mt-6 text-lg text-[#5a5a54] leading-relaxed max-w-2xl">
            Notes and essays exploring AI-native operations,
            logistics intelligence, analytics engineering,
            and the future of enterprise systems.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 gap-10">

          {/* New Article 1: Why RAG Fails */}
          <Link
            href="/insights/why-rag-fails-in-production"
            className="group block overflow-hidden rounded-3xl border border-black/10 bg-white hover:border-[#1a4fd6]/30 hover:shadow-xl transition-all duration-300"
          >
            <div className="relative w-full h-[260px] overflow-hidden">
              <Image
                src="/rag_fails_cover.png"
                alt="Why RAG Fails in Production — and What to Do About It"
                fill
                priority
                className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
              />
            </div>

            <div className="p-8 md:p-10">
              <div className="text-sm text-[#1a4fd6] mb-4 font-medium uppercase tracking-wider">
                Enterprise AI
              </div>

              <h2 className="text-3xl md:text-4xl font-serif leading-tight tracking-tight">
                Why RAG Fails in Production — and What to Do About It
              </h2>

              <p className="mt-5 text-[#5a5a54] text-base md:text-lg leading-relaxed max-w-3xl">
                Retrieval-augmented generation works remarkably well in demos. Operational environments are a different problem entirely. Real enterprise data is messy by nature.
              </p>

              <div className="mt-6 text-sm text-[#9a9a92]">
                June 2026 · 7 min read
              </div>
            </div>
          </Link>

          {/* New Article 2: Fine-tuning vs Prompting */}
          <Link
            href="/insights/fine-tuning-vs-prompting-the-real-tradeoff"
            className="group block overflow-hidden rounded-3xl border border-black/10 bg-white hover:border-[#1a4fd6]/30 hover:shadow-xl transition-all duration-300"
          >
            <div className="relative w-full h-[260px] overflow-hidden">
              <Image
                src="/finetuning_vs_prompting_cover.png"
                alt="Fine-tuning vs. Prompting — The Real Tradeoff"
                fill
                className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
              />
            </div>

            <div className="p-8 md:p-10">
              <div className="text-sm text-[#1a4fd6] mb-4 font-medium uppercase tracking-wider">
                LLM Engineering
              </div>

              <h2 className="text-3xl md:text-4xl font-serif leading-tight tracking-tight">
                Fine-tuning vs. Prompting — The Real Tradeoff
              </h2>

              <p className="mt-5 text-[#5a5a54] text-base md:text-lg leading-relaxed max-w-3xl">
                The debate between fine-tuning and prompt engineering isn't just technical — it's an operational decision. Here is a guide on where the trade-off actually lies.
              </p>

              <div className="mt-6 text-sm text-[#9a9a92]">
                June 2026 · 6 min read
              </div>
            </div>
          </Link>

          {/* New Article 3: Text-to-SQL */}
          <Link
            href="/insights/text-to-sql-for-operational-analytics"
            className="group block overflow-hidden rounded-3xl border border-black/10 bg-white hover:border-[#1a4fd6]/30 hover:shadow-xl transition-all duration-300"
          >
            <div className="relative w-full h-[260px] overflow-hidden">
              <Image
                src="/text_to_sql_cover.png"
                alt="Text-to-SQL for Operational Analytics — Beyond the Toy Examples"
                fill
                className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
              />
            </div>

            <div className="p-8 md:p-10">
              <div className="text-sm text-[#1a4fd6] mb-4 font-medium uppercase tracking-wider">
                Analytics Engineering
              </div>

              <h2 className="text-3xl md:text-4xl font-serif leading-tight tracking-tight">
                Text-to-SQL for Operational Analytics — Beyond the Toy Examples
              </h2>

              <p className="mt-5 text-[#5a5a54] text-base md:text-lg leading-relaxed max-w-3xl">
                Making natural language querying work against real freight and procurement data requires hybrid search, metadata filters, self-correction loops, and context budgeting.
              </p>

              <div className="mt-6 text-sm text-[#9a9a92]">
                June 2026 · 7 min read
              </div>
            </div>
          </Link>

          {/* New Article 4: LLMOps */}
          <Link
            href="/insights/llmops-what-enterprise-teams-miss"
            className="group block overflow-hidden rounded-3xl border border-black/10 bg-white hover:border-[#1a4fd6]/30 hover:shadow-xl transition-all duration-300"
          >
            <div className="relative w-full h-[260px] overflow-hidden">
              <Image
                src="/llmops_cover.png"
                alt="LLMOps — What Enterprise Teams Miss When Moving to Production"
                fill
                className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
              />
            </div>

            <div className="p-8 md:p-10">
              <div className="text-sm text-[#1a4fd6] mb-4 font-medium uppercase tracking-wider">
                LLMOps
              </div>

              <h2 className="text-3xl md:text-4xl font-serif leading-tight tracking-tight">
                LLMOps — What Enterprise Teams Miss When Moving to Production
              </h2>

              <p className="mt-5 text-[#5a5a54] text-base md:text-lg leading-relaxed max-w-3xl">
                Deploying a prototype is straightforward. Operating one in production requires observability, prompt versioning, structured evaluation frameworks, and context window discipline.
              </p>

              <div className="mt-6 text-sm text-[#9a9a92]">
                June 2026 · 6 min read
              </div>
            </div>
          </Link>

          {/* Existing Article 1 */}
          <Link
            href="/insights/from-dashboards-to-intelligence-systems"
            className="group block overflow-hidden rounded-3xl border border-black/10 bg-white hover:border-[#1a4fd6]/30 hover:shadow-xl transition-all duration-300"
          >
            <div className="relative w-full h-[260px] overflow-hidden">
              <Image
                src="/dashboard_to_ai.png"
                alt="From Dashboards to Intelligence Systems"
                fill
                className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
              />
            </div>

            <div className="p-8 md:p-10">
              <div className="text-sm text-[#1a4fd6] mb-4 font-medium uppercase tracking-wider">
                Enterprise AI
              </div>

              <h2 className="text-3xl md:text-4xl font-serif leading-tight tracking-tight">
                From Dashboards to Intelligence Systems
              </h2>

              <p className="mt-5 text-[#5a5a54] text-base md:text-lg leading-relaxed max-w-3xl">
                Why visualizing data is no longer enough — and what comes after the dashboard era.
              </p>

              <div className="mt-6 text-sm text-[#9a9a92]">
                May 2026 · 6 min read
              </div>
            </div>
          </Link>

          {/* Existing Article 2 */}
          <Link
            href="/insights/building-ai-procurement-intelligence-systems"
            className="group block overflow-hidden rounded-3xl border border-black/10 bg-white hover:border-[#1a4fd6]/30 hover:shadow-xl transition-all duration-300"
          >
            <div className="relative w-full h-[260px] overflow-hidden">
              <Image
                src="/procurement.png"
                alt="Building AI Procurement Intelligence Systems"
                fill
                className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
              />
            </div>

            <div className="p-8 md:p-10">
              <div className="text-sm text-[#1a4fd6] mb-4 font-medium uppercase tracking-wider">
                Enterprise AI
              </div>

              <h2 className="text-3xl md:text-4xl font-serif leading-tight tracking-tight">
                Building AI Procurement Intelligence Systems
              </h2>

              <p className="mt-5 text-[#5a5a54] text-base md:text-lg leading-relaxed max-w-3xl">
                Procurement workflows are fragmented by design. RFQs arrive as spreadsheets, PDFs, emails, pricing tables, carrier notes, and operational updates — usually spread across disconnected systems.
              </p>

              <div className="mt-6 text-sm text-[#9a9a92]">
                May 2026 · 6 min read
              </div>
            </div>
          </Link>

        </div>
      </div>
    </main>
  );
}