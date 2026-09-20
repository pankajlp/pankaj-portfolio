import Link from "next/link";
import Image from "next/image";

export default function InsightsPage() {
  const articles = [
    {
      href: "/insights/the-jevons-trap",
      title: "The Jevons Trap: Why Cheaper AI Means More AI, Not Less",
      category: "AI Economics",
      description: "A 160-year-old observation about coal explains the most misread trend in AI: every collapse in the cost of a token has been followed by more tokens consumed, not fewer. Efficiency isn't a savings lever — it's a scope lever.",
      image: "",
      meta: "September 2026 · 7 min read"
    },
    {
      href: "/insights/the-accountability-gap",
      title: "The Accountability Gap: Governance Frameworks Meet the Autonomous Agent",
      category: "AI Governance",
      description: "NIST's AI RMF, ISO 42001, and the EU AI Act govern the model. Autonomous agents act as non-human identities with standing access — and the owner of record, the decision-level audit trail, and the kill switch are all still being retrofitted.",
      image: "",
      meta: "September 2026 · 7 min read"
    },
    {
      href: "/insights/when-agents-cant-forget",
      title: "When Agents Can't Forget: What LedgerBench Found About Requirement Memory",
      category: "AI Research",
      description: "A pre-registered benchmark on how AI coding agents remember requirements across sessions: an append-only test ledger roughly doubles retention, but calcifies into stale checks that coerce wrong edits — and an isolated judge recovers the benefit at 56% of the cost.",
      image: "/architecture.png",
      meta: "September 2026 · 8 min read"
    },
    {
      href: "/insights/the-slm-default",
      title: "The SLM Default: Why 2026's Production Agents Run Small Models First",
      category: "Agentic AI",
      description: "Frontier launches still make the headlines, but the agent stacks actually shipping this year default most steps to a small, fine-tuned model and escalate to a frontier one only when a step earns it.",
      image: "/slm_default_cover.png",
      meta: "September 2026 · 7 min read"
    },
    {
      href: "/insights/the-allowlist-illusion",
      title: "The Allowlist Illusion: Why Command Approval Keeps Failing in Coding Agents",
      category: "AI Security",
      description: "Three unrelated 2026 disclosures — Cursor, Semantic Kernel, and the wider prompt-injection numbers behind them — converge on the same gap: an allowlist checks what a command looks like, not what put it there.",
      image: "/architecture.png",
      meta: "August 2026 · 7 min read"
    },
    {
      href: "/insights/stale-by-default",
      title: "Stale by Default: Why Agents Act on Superseded Data",
      category: "Agentic AI",
      description: "Retrieval systems rank by similarity, and a revised policy clause sits almost on top of the version it replaced. Temporal validity belongs in the metadata filter, not in the ranker.",
      image: "/stale_by_default_cover.png",
      meta: "August 2026 · 8 min read"
    },
    {
      href: "/insights/mcp-in-production-what-it-takes-to-ship-reliable-agents",
      title: "MCP in Production: What It Actually Takes to Ship Reliable AI Agents",
      category: "Agentic AI",
      description: "The Model Context Protocol solved the tool-integration problem. Reliability — scoped access, versioned contracts, idempotent writes, full observability — is still the part teams have to build themselves.",
      image: "/mcp_production_cover.png",
      meta: "August 2026 · 7 min read"
    },
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
    <main className="min-h-screen bg-[#0c0b0a] text-[#efe9df] font-sans">
      
      {/* Clean Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-[#0c0b0a]/85 backdrop-blur-md border-b border-white/10 px-6 py-5">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            {/* Accent Dot */}
            <div className="w-2.5 h-2.5 rounded-full bg-[#c8a86b] text-[#171310] shadow-[0_0_8px_rgba(120, 113, 108,0.3)]" />
            <span className="text-[17px] font-bold tracking-tight font-serif text-[#f2ede3]">
              NordNeuron
            </span>
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-[#a89f8f] hover:text-[#f2ede3] transition-colors duration-300 flex items-center gap-1.5"
          >
            <span>←</span> Back to Home
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 pt-16 pb-24">
        
        {/* Page Header */}
        <div className="mb-16 border-b border-white/10 pb-10">
          <h1 className="text-4xl md:text-4xl font-bold font-serif tracking-tight text-[#f2ede3]">
            Insights
          </h1>
          <p className="mt-4 text-base md:text-lg text-[#8a8175] leading-relaxed max-w-2xl">
            Field notes, essays, and analysis exploring AI-native systems,
            logistics intelligence, and modern enterprise architecture.
          </p>
        </div>

        {/* Medium-style Articles Feed */}
        <div className="divide-y divide-white/10">
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
                  <div className="flex items-center gap-2 text-[13px] text-[#8a8175]">
                    <span className="font-semibold text-[#f2ede3]/80">{article.category}</span>
                    <span>·</span>
                    <span>{article.meta.split(" · ")[0]}</span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl md:text-2xl font-bold font-serif text-[#f2ede3] group-hover:text-[#f2ede3] transition-colors duration-300 leading-snug">
                    {article.title}
                  </h2>

                  {/* Subtitle / Description */}
                  <p className="text-[#8a8175] text-sm md:text-base leading-relaxed line-clamp-2">
                    {article.description}
                  </p>

                  {/* Read Time */}
                  <div className="pt-1 text-[13px] text-[#8a8175]">
                    {article.meta.split(" · ")[1]}
                  </div>

                </div>

                {/* Right Side: Small Square Thumbnail */}
                <div className="relative w-full md:w-36 h-40 md:h-28 shrink-0 overflow-hidden rounded-lg bg-[#16130f] border border-white/10">
                  {article.image ? (
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-102 transition-transform duration-500"
                    />
                  ) : (
                    <div
                      className="absolute inset-0 flex items-center justify-center"
                      style={{ background: "radial-gradient(circle at 50% 40%, rgba(200,168,107,0.12) 0%, transparent 70%)" }}
                    >
                      <div className="w-2.5 h-2.5 rounded-full bg-[#c8a86b] shadow-[0_0_10px_rgba(200,168,107,0.5)] group-hover:scale-125 transition-transform duration-500" />
                    </div>
                  )}
                </div>

              </div>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}