"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  Tooltip,
} from "recharts";
    {/* Filters */}
<div className="mt-16 flex flex-wrap gap-4">
    
    <button className="px-5 py-3 rounded-2xl border border-stone-900 bg-stone-900 text-stone-50 text-sm hover:bg-stone-800 hover:text-white transition-all">
        Global Operations
    </button>

    <button className="px-5 py-3 rounded-2xl border border-stone-200 bg-white shadow-[0_4px_20px_rgba(15,23,42,0.02)] text-stone-700 text-sm hover:border-stone-200 hover:text-stone-900 transition-all">
        APAC
    </button>

    <button className="px-5 py-3 rounded-2xl border border-stone-200 bg-white shadow-[0_4px_20px_rgba(15,23,42,0.02)] text-stone-700 text-sm hover:border-stone-200 hover:text-stone-900 transition-all">
        Europe
    </button>

    <button className="px-5 py-3 rounded-2xl border border-stone-200 bg-white shadow-[0_4px_20px_rgba(15,23,42,0.02)] text-stone-700 text-sm hover:border-stone-200 hover:text-stone-900 transition-all">
        North America
    </button>

    <button className="px-5 py-3 rounded-2xl border border-stone-200 bg-white shadow-[0_4px_20px_rgba(15,23,42,0.02)] text-stone-700 text-sm hover:border-stone-200 hover:text-stone-900 transition-all">
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
      "Shanghai → Hamburg lane experienced a 12% margin decline compared to the previous cycle due to increased carrier costs.",
  },
  {
    title: "High Growth Corridor",
    description:
      "Nhava Sheva → Los Angeles showed the highest TEU growth this quarter with strong profitability retention.",
  },
  {
    title: "Carrier Optimization Opportunity",
    description:
      "Switching selected EU lanes from MSC to Hapag-Lloyd could improve projected margins by 3.4%.",
  },
];
export default function FreightIntelligencePage() {
  return (
    <main className="min-h-screen bg-[#f5f4f0] text-[#1c1917]">
        {/* Navbar */}
        <div className="sticky top-0 z-50 border-b border-stone-200 bg-[#f5f4f0]/80 backdrop-blur-xl">
        
        <div className="max-w-7xl mx-auto px-8 h-[88px] flex items-center justify-between">
            
            {/* Left */}
            <div className="flex items-center gap-4">
            
            <a
                href="/"
                className="text-stone-500 hover:text-stone-900 transition-colors"
            >
                ← Back
            </a>

            <div className="w-px h-5 bg-stone-200" />

            <div>
                <h1 className="text-stone-900 font-medium">
                Freight Intelligence Platform
                </h1>

                <p className="text-xs text-stone-400">
                Enterprise Logistics Analytics
                </p>
            </div>
            </div>

            {/* Right */}
            <div className="flex items-center gap-3 px-4 py-2 rounded-full border border-stone-200 bg-stone-100/50 text-stone-900 text-sm">
            
            <div className="w-2 h-2 rounded-full bg-stone-900 text-white hover:bg-black animate-pulse" />

            Live Platform
            </div>
        </div>
        </div>
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-stone-1000/5 blur-[180px] rounded-full pointer-events-none" />
        
        {/* Label */}
        <div className="inline-flex items-center px-4 py-2 rounded-full border border-stone-200 bg-stone-100/50 text-stone-900 text-sm mb-8">
          Logistics Intelligence Platform
        </div>

        {/* Heading */}
        <h1 className="text-6xl font-bold leading-tight max-w-4xl">
          Freight Intelligence
          <span className="block text-stone-900">
            Dashboard Platform
          </span>
        </h1>

        {/* Description */}
        <p className="mt-8 text-xl text-stone-500 leading-relaxed max-w-3xl">
          Enterprise analytics platform for monitoring freight
          profitability, RFQ trends, operational performance,
          carrier intelligence, and logistics analytics across
          global trade routes.
        </p>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-14">
          {kpis.map((item) => (
            <div
              key={item.title}
              className="p-7 rounded-3xl border border-stone-200 bg-white shadow-[0_4px_20px_rgba(15,23,42,0.02)] backdrop-blur-xl"
            >
              <p className="text-sm text-stone-400">
                {item.title}
              </p>

              <h3 className="mt-5 text-4xl font-bold text-stone-900">
                {item.value}
              </h3>

              <div className="mt-5 inline-flex items-center px-3 py-1 rounded-full bg-stone-100/50 border border-stone-200 text-stone-900 text-sm">
                {item.change}
              </div>
            </div>
          ))}
        </div>

        {/* Revenue Analytics */}
        <div className="mt-16 p-8 rounded-3xl border border-stone-200 bg-white shadow-[0_4px_20px_rgba(15,23,42,0.02)]">
          
          <div className="flex items-center justify-between mb-10">
            
            <div>
              <h2 className="text-3xl font-semibold text-stone-900">
                Revenue Trend
              </h2>

              <p className="mt-2 text-stone-400">
                Monthly freight revenue performance across global lanes.
              </p>
            </div>

            <div className="px-4 py-2 rounded-full border border-stone-200 bg-stone-100/50 text-stone-900 text-sm">
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
                      stopColor="#1c1917"
                      stopOpacity={0.35}
                    />

                    <stop
                      offset="100%"
                      stopColor="#1c1917"
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
                    background: "#ffffff", border: "1px solid rgba(15,23,42,0.1)", borderRadius: "16px", color: "#1c1917",
                  }}
                />

                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#1c1917"
                  strokeWidth={3}
                  fill="url(#colorRevenue)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        {/* Trade Routes Table */}
<div className="mt-16 p-8 rounded-3xl border border-stone-200 bg-white shadow-[0_4px_20px_rgba(15,23,42,0.02)]">
  
  <div className="flex items-center justify-between mb-10">
    
    <div>
      <h2 className="text-3xl font-semibold text-stone-900">
        Global Trade Routes
      </h2>

      <p className="mt-2 text-stone-400">
        Operational lane intelligence across major freight corridors.
      </p>
    </div>

    <div className="px-4 py-2 rounded-full border border-stone-200 bg-stone-100/50 text-stone-900 text-sm">
      Live Operations
    </div>
  </div>

  {/* Table */}
  <div className="overflow-x-auto">
    <table className="w-full">
      
      <thead>
        <tr className="border-b border-stone-200 text-left text-sm text-stone-400">
          
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
            className="border-b border-stone-200/50 hover:bg-stone-50/50 transition-colors"
          >
            <td className="py-6 text-stone-900">
              {route.pol}
            </td>

            <td className="py-6 text-stone-900">
              {route.pod}
            </td>

            <td className="py-6 text-stone-700">
              {route.carrier}
            </td>

            <td className="py-6 text-stone-900">
              {route.teu}
            </td>

            <td className="py-6 text-stone-900">
              {route.revenue}
            </td>

            <td className="py-6">
              <span className="px-3 py-1 rounded-full bg-stone-100/50 border border-stone-200 text-stone-900 text-sm">
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
  
  <div className="flex items-center justify-between mb-10">
    
    <div>
      <h2 className="text-3xl font-semibold text-stone-900">
        AI Intelligence Insights
      </h2>

      <p className="mt-2 text-stone-400">
        AI-generated operational recommendations and anomaly detection.
      </p>
    </div>

    <div className="px-4 py-2 rounded-full border border-stone-200 bg-stone-100/50 text-stone-900 text-sm">
      AI Engine Active
    </div>
  </div>

  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
    {insights.map((item, index) => (
      <div
        key={index}
        className="p-7 rounded-3xl border border-stone-200 bg-white shadow-[0_4px_20px_rgba(15,23,42,0.02)] backdrop-blur-xl"
      >
        
        {/* Top */}
        <div className="flex items-center justify-between">
          
          <div className="w-3 h-3 rounded-full bg-stone-900 text-white hover:bg-black shadow-[0_0_12px_rgba(120, 113, 108,0.25)]" />

          <div className="text-xs text-stone-900 tracking-[0.2em]">
            AI
          </div>
        </div>

        {/* Content */}
        <h3 className="mt-8 text-2xl font-semibold text-stone-900 leading-snug">
          {item.title}
        </h3>

        <p className="mt-5 text-stone-500 leading-relaxed">
          {item.description}
        </p>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-stone-200 flex items-center justify-between">
          
          <span className="text-sm text-stone-400">
            Confidence Score
          </span>

          <span className="text-stone-900 font-medium">
            94%
          </span>
        </div>
      </div>
    ))}
  </div>
</div>
    {/* Executive Summary */}
<div className="mt-16 p-10 rounded-3xl border border-stone-200 bg-gradient-to-br from-stone-200/20 to-transparent">
  
  <div className="max-w-5xl">
    
    <div className="inline-flex items-center px-4 py-2 rounded-full border border-stone-200 bg-stone-100/50 text-stone-900 text-sm mb-8">
      Executive Intelligence Summary
    </div>

    <h2 className="text-4xl md:text-5xl font-bold leading-tight text-stone-900">
      AI-driven freight analytics for
      operational visibility, margin optimization,
      and intelligent logistics decision-making.
    </h2>

    <p className="mt-8 text-xl text-stone-500 leading-relaxed max-w-4xl">
      The Freight Intelligence Platform combines operational
      analytics, carrier intelligence, RFQ visibility,
      and AI-generated recommendations into a unified
      enterprise system designed for modern logistics teams.
    </p>

    {/* Stats */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14">
      
      <div>
        <p className="text-sm text-stone-400">
          Global Trade Lanes
        </p>

        <h3 className="mt-3 text-4xl font-bold text-stone-900">
          148
        </h3>
      </div>

      <div>
        <p className="text-sm text-stone-400">
          Freight Revenue
        </p>

        <h3 className="mt-3 text-4xl font-bold text-stone-900">
          $12.4M
        </h3>
      </div>

      <div>
        <p className="text-sm text-stone-400">
          AI Insights Generated
        </p>

        <h3 className="mt-3 text-4xl font-bold text-stone-900">
          1.2K+
        </h3>
      </div>

      <div>
        <p className="text-sm text-stone-400">
          Margin Improvement
        </p>

        <h3 className="mt-3 text-4xl font-bold text-stone-900">
          +18%
        </h3>
      </div>
    </div>
  </div>
</div>
{/* Platform Architecture */}
<div className="mt-16 grid lg:grid-cols-[1.1fr_0.9fr] gap-10">
  
  {/* LEFT */}
  <div className="p-10 rounded-3xl border border-stone-200 bg-white shadow-[0_4px_20px_rgba(15,23,42,0.02)]">
    
    <div className="inline-flex items-center px-4 py-2 rounded-full border border-stone-200 bg-stone-100/50 text-stone-900 text-sm mb-8">
      Platform Architecture
    </div>

    <h2 className="text-4xl font-bold text-stone-900 leading-tight">
      End-to-end freight intelligence
      infrastructure built for enterprise operations.
    </h2>

    <p className="mt-8 text-stone-500 text-lg leading-relaxed">
      The platform consolidates operational freight data,
      RFQ intelligence, shipment analytics, carrier performance,
      and AI-driven recommendations into a unified analytics layer.
    </p>

    {/* Architecture Flow */}
    <div className="mt-12 space-y-6">
      
      <div className="flex items-start gap-5">
        
        <div className="w-10 h-10 rounded-2xl bg-stone-100/50 border border-stone-200 flex items-center justify-center text-stone-900 text-sm">
          01
        </div>

        <div>
          <h3 className="text-xl text-stone-900 font-medium">
            Data Ingestion
          </h3>

          <p className="mt-2 text-stone-500 leading-relaxed">
            Freight, RFQ, and shipment datasets aggregated from enterprise operational systems.
          </p>
        </div>
      </div>

      <div className="flex items-start gap-5">
        
        <div className="w-10 h-10 rounded-2xl bg-stone-100/50 border border-stone-200 flex items-center justify-center text-stone-900 text-sm">
          02
        </div>

        <div>
          <h3 className="text-xl text-stone-900 font-medium">
            Analytics Processing
          </h3>

          <p className="mt-2 text-stone-500 leading-relaxed">
            Transformation pipelines calculate profitability, carrier KPIs, and operational metrics.
          </p>
        </div>
      </div>

      <div className="flex items-start gap-5">
        
        <div className="w-10 h-10 rounded-2xl bg-stone-100/50 border border-stone-200 flex items-center justify-center text-stone-900 text-sm">
          03
        </div>

        <div>
          <h3 className="text-xl text-stone-900 font-medium">
            AI Intelligence Layer
          </h3>

          <p className="mt-2 text-stone-500 leading-relaxed">
            AI systems detect anomalies, surface insights, and recommend operational optimizations.
          </p>
        </div>
      </div>

      <div className="flex items-start gap-5">
        
        <div className="w-10 h-10 rounded-2xl bg-stone-100/50 border border-stone-200 flex items-center justify-center text-stone-900 text-sm">
          04
        </div>

        <div>
          <h3 className="text-xl text-stone-900 font-medium">
            Executive Intelligence
          </h3>

          <p className="mt-2 text-stone-500 leading-relaxed">
            Decision-ready dashboards provide operational visibility for enterprise leadership teams.
          </p>
        </div>
      </div>

    </div>
  </div>

  {/* RIGHT */}
  <div className="p-10 rounded-3xl border border-stone-200 bg-gradient-to-br from-stone-200/20 to-transparent">
    
    <div className="inline-flex items-center px-4 py-2 rounded-full border border-stone-200 bg-stone-100/50 text-stone-900 text-sm mb-8">
      Technology Stack
    </div>

    <div className="space-y-5">
      
      {[
        "Next.js",
        "TypeScript",
        "Recharts",
        "Python",
        "Power BI",
        "Machine Learning",
        "SQL",
        "AI Intelligence Layer",
      ].map((tech) => (
        <div
          key={tech}
          className="flex items-center justify-between p-5 rounded-2xl border border-stone-200 bg-stone-50/50 border-stone-200/60"
        >
          <span className="text-stone-900">
            {tech}
          </span>

          <div className="w-2.5 h-2.5 rounded-full bg-stone-900 text-white hover:bg-black shadow-[0_0_10px_rgba(120, 113, 108,0.25)]" />
        </div>
      ))}
    </div>

    {/* Footer */}
    <div className="mt-10 pt-8 border-t border-stone-200">
      
      <p className="text-stone-500 leading-relaxed">
        Designed as a scalable enterprise analytics foundation
        for logistics intelligence and AI-assisted operational decision-making.
      </p>
    </div>
  </div>
</div>

      </div>
    </main>
  );
}