import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nordneuron.com";

  // Base routes
  const routes = ["", "/rfq", "/contact", "/insights", "/labs"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Project subpages
  const projects = ["/projects/freight-intelligence", "/projects/gate-operations", "/projects/rfq-intelligence"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Insights articles
  const insights = [
    "/insights/reading-a-psu-freight-tender",
    "/insights/text-to-sql-for-operational-analytics",
    "/insights/from-dashboards-to-intelligence-systems",
    "/insights/building-ai-procurement-intelligence-systems",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...routes, ...projects, ...insights];
}
