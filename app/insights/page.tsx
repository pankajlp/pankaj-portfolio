import Link from "next/link";
import Image from "next/image";

export default function InsightsPage() {
  const articles = [
    {
      href: "/insights/why-rag-fails-in-production",
      title: "Why RAG Fails in Production — and What to Do About It",
      category: "Enterprise AI",
      description: "Retrieval-augmented generation works remarkably well in demos. Operational environments are a different problem entirely. Real enterprise data is messy by nature.",
      image: "/rag_fails_cover.png",
      meta: "June 2026 · 7 min read"
    },
    {
      href: "/insights/fine-tuning-vs-prompting-the-real-tradeoff",
      title: "Fine-tuning vs. Prompting — The Real Tradeoff",
      category: "LLM Engineering",
      description: "The debate between fine-tuning and prompt engineering isn't just technical — it's an operational decision. Here is a guide on where the trade-off actually lies.",
      image: "/finetuning_vs_prompting_cover.png",
      meta: "June 2026 · 6 min read"
    },
    {
      href: "/insights/text-to-sql-for-operational-analytics",
      title: "Text-to-SQL for Operational Analytics — Beyond the Toy Examples",
      category: "Analytics Engineering",
      description: "Making natural language querying work against real freight and procurement data requires hybrid search, metadata filters, self-correction loops, and context budgeting.",
      image: "/text_to_sql_cover.png",
      meta: "June 2026 · 7 min read"
    },
    {
      href: "/insights/llmops-what-enterprise-teams-miss",
      title: "LLMOps — What Enterprise Teams Miss When Moving to Production",
      category: "LLMOps",
      description: "Deploying a prototype is straightforward. Operating one in production requires observability, prompt versioning, structured evaluation frameworks, and context window discipline.",
      image: "/llmops_cover.png",
      meta: "June 2026 · 6 min read"
    },
    {
      href: "/insights/from-dashboards-to-intelligence-systems",
      title: "From Dashboards to Intelligence Systems",
      category: "Enterprise AI",
      description: "Why visualizing data is no longer enough — and what comes after the dashboard era.",
      image: "/dashboard_to_ai.png",
      meta: "May 2026 · 6 min read"
    },
    {
      href: "/insights/building-ai-procurement-intelligence-systems",
      title: "Building AI Procurement Intelligence Systems",
      category: "Enterprise AI",
      description: "Procurement workflows are fragmented by design. RFQs arrive as spreadsheets, PDFs, emails, pricing tables, carrier notes, and operational updates — usually spread across disconnected systems.",
      image: "/procurement.png",
      meta: "May 2026 · 6 min read"
    }
  ];

  return (
    <main className="min-h-screen bg-[#fafaf8] text-[#1a1a18] font-sans selection:bg-cyan-150">
      
      {/* Clean Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-[#fafaf8]/85 backdrop-blur-md border-b border-black/5 px-6 py-5">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            {/* Accent Dot */}
            <div className="w-2.5 h-2.5 rounded-full bg-cyan-500 shadow-[0_0_8px_#06b6d4]" />
            <span className="text-[17px] font-bold tracking-tight font-serif text-black">
              NordNeuron
            </span>
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-[#6b7280] hover:text-[#1a4fd6] transition-colors duration-300 flex items-center gap-1.5"
          >
            <span>←</span> Back to Home
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 pt-16 pb-24">
        
        {/* Page Header */}
        <div className="mb-16 border-b border-black/5 pb-10">
          <h1 className="text-4xl md:text-5xl font-bold font-serif tracking-tight text-[#242424]">
            Insights
          </h1>
          <p className="mt-4 text-base md:text-lg text-[#5a5a54] leading-relaxed max-w-2xl">
            Field notes, essays, and analysis exploring AI-native systems,
            logistics intelligence, and modern enterprise architecture.
          </p>
        </div>

        {/* Medium-style Articles Feed */}
        <div className="divide-y divide-black/5">
          {articles.map((article) => (
            <Link
              key={article.href}
              href={article.href}
              className="group block py-10 first:pt-0 last:pb-0"
            >
              <div className="flex flex-col-reverse md:flex-row md:items-start justify-between gap-6 md:gap-10">
                
                {/* Left Side: Content */}
                <div className="flex-1 space-y-2.5">
                  
                  {/* Category and Date */}
                  <div className="flex items-center gap-2 text-[13px] text-[#757575]">
                    <span className="font-semibold text-black/80">{article.category}</span>
                    <span>·</span>
                    <span>{article.meta.split(" · ")[0]}</span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl md:text-2xl font-bold font-serif text-[#242424] group-hover:text-[#1a4fd6] transition-colors duration-300 leading-snug">
                    {article.title}
                  </h2>

                  {/* Subtitle / Description */}
                  <p className="text-[#5a5a54] text-sm md:text-base leading-relaxed line-clamp-2">
                    {article.description}
                  </p>

                  {/* Read Time */}
                  <div className="pt-1 text-[13px] text-[#757575]">
                    {article.meta.split(" · ")[1]}
                  </div>

                </div>

                {/* Right Side: Small Square Thumbnail */}
                <div className="relative w-full md:w-36 h-40 md:h-28 shrink-0 overflow-hidden rounded-lg bg-[#f0f0f0] border border-black/5">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                </div>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}