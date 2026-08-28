import * as prismic from "@prismicio/client";

// Read repository name from environment
const repoName = process.env.NEXT_PUBLIC_PRISMIC_REPOSITORY || "";
const accessToken = process.env.PRISMIC_ACCESS_TOKEN || "";

// Initialize client if repo name is provided
export const client = repoName
  ? prismic.createClient(repoName, {
      accessToken,
      routes: [
        {
          type: "project",
          path: "/projects/:uid",
        },
        {
          type: "insight",
          path: "/insights/:uid",
        },
      ],
    })
  : null;

// Mock fallback project data
const mockProjects = [
  {
    title: "NordNeuron Logistics AI Suite",
    category: "Runnable Full-Stack App",
    description: "A live, runnable logistics intelligence suite: multi-format RFQ extraction (Excel/Word/PDF/CSV) mapped to a 46-column ocean-freight schema, freight rate calculation, 3D container load planning, HS-code lookup, demurrage risk, and ETA prediction — FastAPI + SQLite backend with a self-contained SPA.",
    link: "/projects/nordneuron-logistics",
    stack: ["FastAPI", "SQLite", "Three.js", "Docker"],
  },
  {
    title: "Freight Intelligence Platform",
    category: "Strategic Analytics Platform",
    description: "Enterprise analytics platform for monitoring freight profitability, RFQ trends, operational intelligence, and AI-driven logistics insights.",
    link: "/projects/freight-intelligence",
    stack: ["Power BI", "DAX", "SQL"],
  },
  {
    title: "Gate Operations Platform",
    category: "Operational Control System",
    description: "Enterprise access control and logistics workflow platform for real-time vehicle tracking, dock visibility, operational automation, and AI-assisted warehouse monitoring.",
    link: "/projects/gate-operations",
    stack: ["Power Apps", "Power Automate", "SharePoint"],
  },
  {
    title: "RFQ Intelligence Platform",
    category: "AI Procurement Engine",
    description: "AI-powered procurement intelligence system for RFQ processing, tender analytics, bid optimization, and operational automation across logistics workflows.",
    link: "/projects/rfq-intelligence",
    stack: ["Python", "LLMs", "Automation"],
  },
];

// Mock fallback insight data
const mockInsights = [
  {
    href: "/insights/why-rag-fails-in-production",
    title: "Why RAG Fails in Production — and What to Do About It",
    category: "Enterprise AI",
    description: "Retrieval-augmented generation works remarkably well in demos. Operational environments are a different problem entirely. Real data is messy by nature.",
    image: "/rag_fails_cover.png",
    meta: "June 2026 · 7 min read",
  },
  {
    href: "/insights/fine-tuning-vs-prompting-the-real-tradeoff",
    title: "Fine-tuning vs. Prompting — The Real Tradeoff",
    category: "LLM Engineering",
    description: "The debate between fine-tuning and prompt engineering isn't just technical — it's an operational decision. Here is a guide on where the trade-off actually lies.",
    image: "/finetuning_vs_prompting_cover.png",
    meta: "June 2026 · 6 min read",
  },
  {
    href: "/insights/text-to-sql-for-operational-analytics",
    title: "Text-to-SQL for Operational Analytics — Beyond the Toy Examples",
    category: "Analytics Engineering",
    description: "Making natural language querying work against real freight and procurement data requires hybrid search, metadata filters, self-correction loops, and context budgeting.",
    image: "/text_to_sql_cover.png",
    meta: "June 2026 · 7 min read",
  },
  {
    href: "/insights/llmops-what-enterprise-teams-miss",
    title: "LLMOps — What Enterprise Teams Miss When Moving to Production",
    category: "LLMOps",
    description: "Deploying a prototype is straightforward. Operating one in production requires observability, prompt versioning, structured evaluation frameworks, and context window discipline.",
    image: "/llmops_cover.png",
    meta: "June 2026 · 6 min read",
  },
  {
    href: "/insights/from-dashboards-to-intelligence-systems",
    title: "From Dashboards to Intelligence Systems",
    category: "Enterprise AI",
    description: "Why visualizing data is no longer enough — and what comes after the dashboard era.",
    image: "/dashboard_to_ai.png",
    meta: "May 2026 · 6 min read",
  },
  {
    href: "/insights/building-ai-procurement-intelligence-systems",
    title: "Building AI Procurement Intelligence Systems",
    category: "Enterprise AI",
    description: "Procurement workflows are fragmented by design. RFQs arrive as spreadsheets, PDFs, emails, pricing tables, carrier notes, and operational updates.",
    image: "/procurement.png",
    meta: "May 2026 · 6 min read",
  },
];

// Helper: Fetch projects from Prismic (or fallback to mock)
export async function getProjects() {
  if (!client) {
    return mockProjects;
  }

  try {
    const response = await client.getByType("project", {
      orderings: {
        field: "document.first_publication_date",
        direction: "desc",
      },
    });

    if (!response.results.length) return mockProjects;

    return response.results.map((doc) => {
      const data = doc.data as any;
      return {
        title: data.title || "",
        category: data.category || "",
        description: data.description || "",
        link: doc.url || `/projects/${doc.uid}`,
        stack: Array.isArray(data.stack) ? data.stack : (data.stack || "").split(",").map((s: string) => s.trim()),
      };
    });
  } catch (error) {
    console.error("Error fetching projects from Prismic, using fallback:", error);
    return mockProjects;
  }
}

// Helper: Fetch insights from Prismic (or fallback to mock)
export async function getInsights() {
  if (!client) {
    return mockInsights;
  }

  try {
    const response = await client.getByType("insight", {
      orderings: {
        field: "document.first_publication_date",
        direction: "desc",
      },
    });

    if (!response.results.length) return mockInsights;

    return response.results.map((doc) => {
      const data = doc.data as any;
      return {
        href: doc.url || `/insights/${doc.uid}`,
        title: data.title || "",
        category: data.category || "",
        description: data.description || "",
        image: data.image?.url || "/rag_fails_cover.png",
        meta: data.meta || "June 2026 · 5 min read",
      };
    });
  } catch (error) {
    console.error("Error fetching insights from Prismic, using fallback:", error);
    return mockInsights;
  }
}
