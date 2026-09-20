// Single source of truth for the Insights article list.
// Both the /insights index and the homepage "Latest Insights" section
// read from here, so the newest entry only has to be added in one place.
// Keep the array ordered newest-first: the homepage shows the first N.

export type Article = {
  href: string;
  title: string;
  category: string;
  description: string;
  image: string; // empty string renders a dark brand tile instead of a photo
  meta: string; // e.g. "September 2026 · 8 min read"
};

export const articles: Article[] = [
  {
    href: "/insights/the-decision-only-model",
    title: "The Decision-Only Model: What Jev Signals About How AI Gets Used Next",
    category: "AI Research",
    description: "TypeSafe AI's Jev came out of stealth generating no text at all — it returns typed decisions with calibrated probabilities instead. It points at a split in how production AI is built: a fast decision layer beneath the generative one.",
    image: "",
    meta: "September 2026 · 8 min read"
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
