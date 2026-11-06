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
    href: "/insights/text-to-sql-for-operational-analytics",
    title: "Text-to-SQL for Operational Analytics — Beyond the Toy Examples",
    category: "Analytics Engineering",
    description: "Making natural language querying work against real freight and procurement data requires hybrid search, metadata filters, self-correction loops, and context budgeting.",
    image: "/text_to_sql_cover.png",
    meta: "June 2026 · 7 min read"
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
