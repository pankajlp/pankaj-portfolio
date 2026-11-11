import type { NextConfig } from "next";

// NordNeuron Probe is a self-contained static page in public/probe/ (its own light design, no site
// chrome). probe.nordneuron.com shows it as its home page; it is also reachable at nordneuron.com/probe.
const PROBE_PAGE = "/probe/index.html";

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        { source: "/", has: [{ type: "host", value: "probe.nordneuron.com" }], destination: PROBE_PAGE },
        { source: "/probe", destination: PROBE_PAGE },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
};

export default nextConfig;
