import type { NextConfig } from "next";

// Personal tools and general-AI writing moved off nordneuron.com so the site
// stays focused on freight / supply-chain AI. Paths are identical on the new
// site, so each old URL forwards to its exact counterpart.
const PERSONAL_SITE = "https://pankaj-labs.vercel.app";

const movedPaths = [
  "/labs/job-tailor",
  "/labs/visa-report",
  "/insights/the-horse-or-the-cart",
  "/insights/whose-safety-are-you-buying",
  "/insights/the-decision-only-model",
  "/insights/the-accountability-gap",
  "/insights/when-agents-cant-forget",
  "/insights/the-slm-default",
  "/insights/the-allowlist-illusion",
  "/insights/stale-by-default",
  "/insights/why-rag-fails-in-production",
  "/insights/fine-tuning-vs-prompting-the-real-tradeoff",
  "/insights/llmops-what-enterprise-teams-miss",
  "/insights/mcp-in-production-what-it-takes-to-ship-reliable-agents",
];

const nextConfig: NextConfig = {
  async redirects() {
    // Temporary (307) until the personal site's final address is settled;
    // switch to permanent once it is.
    return movedPaths.map((path) => ({
      source: path,
      destination: `${PERSONAL_SITE}${path}`,
      permanent: false,
    }));
  },
};

export default nextConfig;
