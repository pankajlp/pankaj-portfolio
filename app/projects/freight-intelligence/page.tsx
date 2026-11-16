"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  Tooltip,
} from "recharts";
import DemoDataNotice from "../../components/DemoDataNotice";
    {/* Filters */}
<div className="mt-16 flex flex-wrap gap-4">
    
    <button className="px-5 py-3 rounded-card border border-rule-2 bg-accent text-accent-ink text-sm hover:bg-accent-2 hover:text-ink transition">
        Global Operations
    </button>

    <button className="px-5 py-3 rounded-card border border-rule-2 bg-paper-2 text-ink-2 text-sm hover:border-rule-2 hover:text-ink transition">
        APAC
    </button>

    <button className="px-5 py-3 rounded-card border border-rule-2 bg-paper-2 text-ink-2 text-sm hover:border-rule-2 hover:text-ink transition">
        Europe
    </button>

    <button className="px-5 py-3 rounded-card border border-rule-2 bg-paper-2 text-ink-2 text-sm hover:border-rule-2 hover:text-ink transition">
        North America
    </button>

    <button className="px-5 py-3 rounded-card border border-rule-2 bg-paper-2 text-ink-2 text-sm hover:border-rule-2 hover:text-ink transition">
        RFQ Analytics
    </button>

</div>
const kpis = [
  {
    title: "Total Revenue",
    value: "$12.4M",
    change: "+18.2%",
  },
  {
    title: "Gross Profit",
    value: "$2.1M",
    change: "+11.4%",
  },
  {
    title: "Active Lanes",
    value: "148",
    change: "+6.8%",
  },
  {
    title: "Carrier Performance",
    value: "94%",
    change: "+2.1%",
  },
];

const revenueData = [
  { month: "Jan", revenue: 240000 },
  { month: "Feb", revenue: 310000 },
  { month: "Mar", revenue: 290000 },
  { month: "Apr", revenue: 420000 },
  { month: "May", revenue: 390000 },
  { month: "Jun", revenue: 510000 },
  { month: "Jul", revenue: 620000 },
];
const tradeRoutes = [
  {
    pol: "Shanghai",
    pod: "Hamburg",
    carrier: "Maersk",
    teu: 420,
    revenue: "$820K",
    margin: "18%",
  },
  {
    pol: "Singapore",
    pod: "Rotterdam",
    carrier: "MSC",
    teu: 315,
    revenue: "$610K",
    margin: "14%",
  },
  {
    pol: "Nhava Sheva",
    pod: "Los Angeles",
    carrier: "CMA CGM",
    teu: 510,
    revenue: "$1.2M",
    margin: "22%",
  },
  {
    pol: "Busan",
    pod: "Antwerp",
    carrier: "Hapag-Lloyd",
    teu: 275,
    revenue: "$540K",
    margin: "16%",
  },
];
const insights = [
  {
    title: "Margin Anomaly Detected",
    description:
      "Shanghai Hamburg lane experienced a 12% margin decline compared to the previous cycle due to increased carrier costs.",
  },
  {
    title: "High Growth Corridor",
    description:
      "Nhava Sheva Los Angeles showed the highest TEU growth this quarter with strong profitability retention.",
  },
  {
    title: "Carrier Optimization Opportunity",
    description:
      "Switching selected EU lanes from MSC to Hapag-Lloyd could improve projected margins by 3.4%.",
  },
];
export default function FreightIntelligencePage() {
  return (
    <main id="main" className="min-h-dvh bg-paper text-ink pt-[var(--nav-h)]">
        {/* Navbar */}
        <Navbar />
      <div className="wrap pt-16 pb-6">
        
        {/* Label */}

        {/* Heading */}
        <h1 className="text-5xl font-medium leading-tight max-w-4xl">
          Freight Intelligence
          <span className="block text-ink">
            Dashboard Platform
          </span>
        </h1>

        {/* Description */}
        <p className="mt-8 text-xl text-muted leading-relaxed max-w-3xl">
          Enterprise analytics platform for monitoring freight
          profitability, RFQ trends, operational performance,
          carrier intelligence, and logistics analytics across
          global trade routes.
        </p>

        <DemoDataNotice />
      </div>
      <div className="wrap pb-16">

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-14">
          {kpis.map((item) => (
            <div
              key={item.title}
              className="p-7 rounded-card border border-rule-2 bg-paper-2"
            >
              <p className="text-sm text-muted">
                {item.title}
              </p>

              <h3 className="mt-5 text-4xl font-medium text-ink">
                {item.value}
              </h3>

              <div className="mt-5 inline-flex items-center px-3 py-1 rounded-full bg-paper-3/50 border border-rule-2 text-ink text-sm">
                {item.change}
              </div>
            </div>
          ))}
        </div>

        {/* Revenue Analytics */}
        <div className="mt-16 p-6 md:p-8 rounded-card border border-rule-2 bg-paper-2">
          
          <div className="flex flex-wrap gap-3 items-center justify-between mb-10">
            
            <div>
              <h2 className="text-3xl font-semibold text-ink">
                Revenue Trend
              </h2>

              <p className="mt-2 text-muted">
                Monthly freight revenue performance across global lanes.
              </p>
            </div>

            <div className="px-4 py-2 rounded-full border border-rule-2 bg-paper-3/50 text-ink text-sm">
              FY 2026
            </div>
          </div>

          <div className="h-[420px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueData}>
                
                <defs>
                  <linearGradient
                    id="colorRevenue"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="0%"
                      stopColor="#efe9df"
                      stopOpacity={0.35}
                    />

                    <stop
                      offset="100%"
                      stopColor="#efe9df"
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>

                <XAxis
                  dataKey="month"
                  stroke="#94a3b8"
                  tickLine={false}
                  axisLine={false}
                />

                <Tooltip
                  contentStyle={{
                    background: "var(--color-paper-3)", border: "1px solid var(--color-rule-2)", borderRadius: "6px", color: "var(--color-ink)",
                  }}
                />

                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#efe9df"
                  strokeWidth={3}
                  fill="url(#colorRevenue)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        {/* Trade Routes Table */}
<div className="mt-16 p-6 md:p-8 rounded-card border border-rule-2 bg-paper-2">
  
  <div className="flex flex-wrap gap-3 items-center justify-between mb-10">
    
    <div>
      <h2 className="text-3xl font-semibold text-ink">
        Global Trade Routes
      </h2>

      <p className="mt-2 text-muted">
        Operational lane intelligence across major freight corridors.
      </p>
      <div className="mt-3">
        <DemoDataNotice compact />
      </div>
    </div>

    <div className="px-4 py-2 rounded-full border border-rule-2 bg-paper-3/50 text-ink text-sm">
      Live Operations
    </div>
  </div>

  {/* Table */}
  <div className="overflow-x-auto max-w-full" tabIndex={0} role="region" aria-label="Data table, scrolls sideways">
    <table className="w-full">
      
      <thead>
        <tr className="border-b border-rule-2 text-left text-sm text-muted">
          
          <th className="pb-5 font-medium">
            POL
          </th>

          <th className="pb-5 font-medium">
            POD
          </th>

          <th className="pb-5 font-medium">
            Carrier
          </th>

          <th className="pb-5 font-medium">
            TEU
          </th>

          <th className="pb-5 font-medium">
            Revenue
          </th>

          <th className="pb-5 font-medium">
            Margin
          </th>
        </tr>
      </thead>

      <tbody>
        {tradeRoutes.map((route, index) => (
          <tr
            key={index}
            className="border-b border-rule-2 hover:bg-paper-3/50 transition-colors"
          >
            <td className="py-6 text-ink">
              {route.pol}
            </td>

            <td className="py-6 text-ink">
              {route.pod}
            </td>

            <td className="py-6 text-ink-2">
              {route.carrier}
            </td>

            <td className="py-6 text-ink">
              {route.teu}
            </td>

            <td className="py-6 text-ink">
              {route.revenue}
            </td>

            <td className="py-6">
              <span className="px-3 py-1 rounded-full bg-paper-3/50 border border-rule-2 text-ink text-sm">
                {route.margin}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
        {/* AI Insights */}
<div className="mt-16">
  
  <div className="flex flex-wrap gap-3 items-center justify-between mb-10">
    
    <div>
      <h2 className="text-3xl font-semibold text-ink">
        AI Intelligence Insights
      </h2>

      <p className="mt-2 text-muted">
        AI-generated operational recommendations and anomaly detection.
      </p>
    </div>

    <div className="px-4 py-2 rounded-full border border-rule-2 bg-paper-3/50 text-ink text-sm">
      AI Engine Active
    </div>
  </div>

  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
    {insights.map((item, index) => (
      <div
        key={index}
        className="p-7 rounded-card border border-rule-2 bg-paper-2"
      >
        
        {/* Top */}
        <div className="flex flex-wrap gap-3 items-center justify-between">
          
          <div className="w-3 h-3 rounded-full bg-accent text-accent-ink hover:bg-accent-2" />

          <div className="text-xs text-ink">
            AI
          </div>
        </div>

        {/* Content */}
        <h3 className="mt-8 text-2xl font-semibold text-ink leading-snug">
          {item.title}
        </h3>

        <p className="mt-5 text-muted leading-relaxed">
          {item.description}
        </p>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-rule-2 flex flex-wrap gap-3 items-center justify-between">
          
          <span className="text-sm text-muted">
            Confidence Score
          </span>

          <span className="text-ink font-medium">
            94%
          </span>
        </div>
      </div>
    ))}
  </div>
</div>
    {/* Executive Summary */}
<div className="mt-16 p-6 md:p-10 rounded-card border border-rule-2 bg-gradient-to-br from-stone-200/20 to-transparent">
  
  <div className="max-w-5xl">
    

    <h2 className="text-4xl md:text-4xl font-medium leading-tight text-ink">
      AI-driven freight analytics for
      operational visibility, margin optimization,
      and intelligent logistics decision-making.
    </h2>

    <p className="mt-8 text-xl text-muted leading-relaxed max-w-4xl">
      The Freight Intelligence Platform combines operational
      analytics, carrier intelligence, RFQ visibility,
      and AI-generated recommendations into a unified
      enterprise system designed for modern logistics teams.
    </p>

    {/* Stats */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14">
      
      <div>
        <p className="text-sm text-muted">
          Global Trade Lanes
        </p>

        <h3 className="mt-3 text-4xl font-medium text-ink">
          148
        </h3>
      </div>

      <div>
        <p className="text-sm text-muted">
          Freight Revenue
        </p>

        <h3 className="mt-3 text-4xl font-medium text-ink">
          $12.4M
        </h3>
      </div>

      <div>
        <p className="text-sm text-muted">
          AI Insights Generated
        </p>

        <h3 className="mt-3 text-4xl font-medium text-ink">
          1.2K+
        </h3>
      </div>

      <div>
        <p className="text-sm text-muted">
          Margin Improvement
        </p>

        <h3 className="mt-3 text-4xl font-medium text-ink">
          +18%
        </h3>
      </div>
    </div>
  </div>
</div>
{/* Platform Architecture */}
<div className="mt-16 grid gap-6 md:gap-10">
  
  {/* LEFT */}
  <div className="p-6 md:p-10 rounded-card border border-rule-2 bg-paper-2">
    

    <h2 className="text-4xl font-medium text-ink leading-tight">
      End-to-end freight intelligence
      infrastructure built for enterprise operations.
    </h2>

    <p className="mt-8 text-muted text-lg leading-relaxed">
      The platform consolidates operational freight data,
      RFQ intelligence, shipment analytics, carrier performance,
      and AI-driven recommendations into a unified analytics layer.
    </p>

    {/* Architecture Flow */}
    <div className="mt-12 space-y-6">
      
      <div className="flex items-start gap-5">
        
        <div className="w-10 h-10 rounded-control bg-paper-3/50 border border-rule-2 flex items-center justify-center text-ink text-sm">
          01
        </div>

        <div>
          <h3 className="text-xl text-ink font-medium">
            Data Ingestion
          </h3>

          <p className="mt-2 text-muted leading-relaxed">
            Freight, RFQ, and shipment datasets aggregated from enterprise operational systems.
          </p>
        </div>
      </div>

      <div className="flex items-start gap-5">
        
        <div className="w-10 h-10 rounded-control bg-paper-3/50 border border-rule-2 flex items-center justify-center text-ink text-sm">
          02
        </div>

        <div>
          <h3 className="text-xl text-ink font-medium">
            Analytics Processing
          </h3>

          <p className="mt-2 text-muted leading-relaxed">
            Transformation pipelines calculate profitability, carrier KPIs, and operational metrics.
          </p>
        </div>
      </div>

      <div className="flex items-start gap-5">
        
        <div className="w-10 h-10 rounded-control bg-paper-3/50 border border-rule-2 flex items-center justify-center text-ink text-sm">
          03
        </div>

        <div>
          <h3 className="text-xl text-ink font-medium">
            AI Intelligence Layer
          </h3>

          <p className="mt-2 text-muted leading-relaxed">
            AI systems detect anomalies, surface insights, and recommend operational optimizations.
          </p>
        </div>
      </div>

      <div className="flex items-start gap-5">
        
        <div className="w-10 h-10 rounded-control bg-paper-3/50 border border-rule-2 flex items-center justify-center text-ink text-sm">
          04
        </div>

        <div>
          <h3 className="text-xl text-ink font-medium">
            Executive Intelligence
          </h3>

          <p className="mt-2 text-muted leading-relaxed">
            Decision-ready dashboards provide operational visibility for enterprise leadership teams.
          </p>
        </div>
      </div>

    </div>
  </div>
</div>

      </div>
      <Footer />
    </main>
  );
}