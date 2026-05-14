const kpis = [
  {
    title: "RFQs Processed",
    value: "2,184",
    change: "+28%",
  },
  {
    title: "Tender Win Rate",
    value: "64%",
    change: "+9%",
  },
  {
    title: "AI Recommendations",
    value: "1.4K",
    change: "+31%",
  },
  {
    title: "Processing Time Saved",
    value: "312 hrs",
    change: "-42%",
  },
];
const rfqs = [
  {
    customer: "Unilever",
    lane: "Shanghai → Rotterdam",
    value: "$420K",
    status: "AI Recommended",
    confidence: "96%",
  },
  {
    customer: "Nestlé",
    lane: "Singapore → Hamburg",
    value: "$310K",
    status: "Under Review",
    confidence: "82%",
  },
  {
    customer: "Amazon",
    lane: "Nhava Sheva → Los Angeles",
    value: "$880K",
    status: "High Margin",
    confidence: "94%",
  },
  {
    customer: "IKEA",
    lane: "Busan → Antwerp",
    value: "$270K",
    status: "Risk Alert",
    confidence: "71%",
  },
];
const recommendations = [
  {
    title: "High Profitability Opportunity",
    description:
      "AI identified strong margin potential for APAC → EU refrigerated cargo lanes based on historical conversion and carrier trends.",
  },
  {
    title: "Risk Detection Alert",
    description:
      "Procurement risk increased for selected US-bound lanes due to volatile carrier pricing and reduced vessel availability.",
  },
  {
    title: "Tender Optimization Insight",
    description:
      "AI recommends consolidating low-volume RFQs to improve pricing leverage and increase operational efficiency.",
  },
];
export default function RFQIntelligencePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      
      {/* Navbar */}
      <div className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">
        
        <div className="max-w-7xl mx-auto px-8 h-[88px] flex items-center justify-between">
          
          <div className="flex items-center gap-4">
            
            <a
              href="/"
              className="text-white/60 hover:text-cyan-300 transition-colors"
            >
              ← Back
            </a>

            <div className="w-px h-5 bg-white/10" />

            <div>
              <h1 className="text-white font-medium">
                RFQ Intelligence Platform
              </h1>

              <p className="text-xs text-white/40">
                AI Procurement Operations
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 text-sm">
            
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />

            AI Engine Active
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="relative max-w-7xl mx-auto px-8 py-16">
        
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-500/10 blur-[180px] rounded-full pointer-events-none" />

        <div className="relative z-10">
          
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 text-sm mb-8">
            AI Procurement Intelligence
          </div>

          <h1 className="text-6xl font-bold leading-tight max-w-4xl">
            RFQ Intelligence
            <span className="block text-cyan-400">
              Automation Platform
            </span>
          </h1>

          <p className="mt-8 text-xl text-white/60 leading-relaxed max-w-3xl">
            AI-powered procurement intelligence system designed
            for RFQ processing, tender analytics, operational automation,
            and intelligent bid decision support across logistics operations.
          </p>
        </div>
      </div>
      {/* KPI Dashboard */}
<div className="max-w-7xl mx-auto px-8 pb-10">
  
  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
    {kpis.map((item) => (
      <div
        key={item.title}
        className="p-7 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl"
      >
        
        <p className="text-sm text-white/50">
          {item.title}
        </p>

        <h3 className="mt-5 text-4xl font-bold text-white">
          {item.value}
        </h3>

        <div className="mt-5 inline-flex items-center px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-300 text-sm">
          {item.change}
        </div>
      </div>
    ))}
  </div>
</div>
{/* AI Tender Analysis */}
<div className="max-w-7xl mx-auto px-8 pb-16">
  
  <div className="p-8 rounded-3xl border border-white/10 bg-white/[0.03]">
    
    {/* Header */}
    <div className="flex items-center justify-between mb-10">
      
      <div>
        <h2 className="text-3xl font-semibold text-white">
          AI Tender Intelligence
        </h2>

        <p className="mt-2 text-white/50">
          AI-assisted RFQ analysis, profitability scoring, and procurement recommendations.
        </p>
      </div>

      <div className="flex items-center gap-3 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 text-sm">
        
        <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />

        AI Analysis Live
      </div>
    </div>

    {/* Table */}
    <div className="overflow-x-auto">
      
      <table className="w-full">
        
        <thead>
          <tr className="border-b border-white/10 text-left text-sm text-white/40">
            
            <th className="pb-5 font-medium">
              Customer
            </th>

            <th className="pb-5 font-medium">
              Trade Lane
            </th>

            <th className="pb-5 font-medium">
              RFQ Value
            </th>

            <th className="pb-5 font-medium">
              AI Recommendation
            </th>

            <th className="pb-5 font-medium">
              Confidence
            </th>
          </tr>
        </thead>

        <tbody>
          {rfqs.map((item, index) => (
            <tr
              key={index}
              className="border-b border-white/5 hover:bg-white/[0.02] transition-colors"
            >
              
              <td className="py-6 text-white font-medium">
                {item.customer}
              </td>

              <td className="py-6 text-white/70">
                {item.lane}
              </td>

              <td className="py-6 text-cyan-300">
                {item.value}
              </td>

              <td className="py-6">
                <span
                  className={`px-3 py-1 rounded-full text-sm border ${
                    item.status === "Risk Alert"
                      ? "bg-red-500/10 border-red-500/20 text-red-300"
                      : item.status === "Under Review"
                      ? "bg-yellow-500/10 border-yellow-500/20 text-yellow-300"
                      : "bg-cyan-400/10 border-cyan-400/20 text-cyan-300"
                  }`}
                >
                  {item.status}
                </span>
              </td>

              <td className="py-6 text-white/50">
                {item.confidence}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</div>
{/* AI Recommendation Engine */}
<div className="max-w-7xl mx-auto px-8 pb-24">
  
  <div className="flex items-center justify-between mb-10">
    
    <div>
      <h2 className="text-3xl font-semibold text-white">
        AI Recommendation Engine
      </h2>

      <p className="mt-2 text-white/50">
        AI-generated procurement insights and tender optimization recommendations.
      </p>
    </div>

    <div className="px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 text-sm">
      Predictive Intelligence Active
    </div>
  </div>

  <div className="grid lg:grid-cols-3 gap-6">
    {recommendations.map((item, index) => (
      <div
        key={index}
        className="p-7 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl"
      >
        
        {/* Top */}
        <div className="flex items-center justify-between">
          
          <div className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]" />

          <div className="text-xs text-cyan-300 tracking-[0.2em]">
            AI
          </div>
        </div>

        {/* Content */}
        <h3 className="mt-8 text-2xl font-semibold text-white leading-snug">
          {item.title}
        </h3>

        <p className="mt-5 text-white/60 leading-relaxed">
          {item.description}
        </p>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
          
          <span className="text-sm text-white/40">
            Recommendation Confidence
          </span>

          <span className="text-cyan-300 font-medium">
            95%
          </span>
        </div>
      </div>
    ))}
  </div>
</div>
{/* AI Architecture */}
<div className="max-w-7xl mx-auto px-8 pb-24">
  
  <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10">
    
    {/* LEFT */}
    <div className="p-10 rounded-3xl border border-white/10 bg-white/[0.03]">
      
      <div className="inline-flex items-center px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 text-sm mb-8">
        AI System Architecture
      </div>

      <h2 className="text-4xl font-bold text-white leading-tight">
        AI-assisted procurement intelligence
        powered by local inference and
        structured analytics workflows.
      </h2>

      <p className="mt-8 text-white/60 text-lg leading-relaxed">
        The platform combines RFQ ingestion, AI parsing,
        structured querying, and operational analytics
        into a unified procurement intelligence system
        designed for enterprise tender workflows.
      </p>

      {/* Flow */}
      <div className="mt-12 space-y-6">
        
        <div className="flex items-start gap-5">
          
          <div className="w-10 h-10 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-300 text-sm">
            01
          </div>

          <div>
            <h3 className="text-xl text-white font-medium">
              RFQ Document Ingestion
            </h3>

            <p className="mt-2 text-white/60 leading-relaxed">
              Procurement documents and tender files processed through structured extraction workflows.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-5">
          
          <div className="w-10 h-10 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-300 text-sm">
            02
          </div>

          <div>
            <h3 className="text-xl text-white font-medium">
              AI Parsing & Classification
            </h3>

            <p className="mt-2 text-white/60 leading-relaxed">
              LLM workflows extract shipment structures, lanes, pricing signals, and operational entities.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-5">
          
          <div className="w-10 h-10 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-300 text-sm">
            03
          </div>

          <div>
            <h3 className="text-xl text-white font-medium">
              Text-to-SQL Intelligence Layer
            </h3>

            <p className="mt-2 text-white/60 leading-relaxed">
              AI-generated SQL workflows enable procurement analytics and operational querying across structured datasets.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-5">
          
          <div className="w-10 h-10 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-300 text-sm">
            04
          </div>

          <div>
            <h3 className="text-xl text-white font-medium">
              Procurement Intelligence
            </h3>

            <p className="mt-2 text-white/60 leading-relaxed">
              AI systems surface profitability signals, operational risks, and tender optimization recommendations.
            </p>
          </div>
        </div>

      </div>
    </div>

    {/* RIGHT */}
    <div className="p-10 rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-400/10 to-transparent">
      
      <div className="inline-flex items-center px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 text-sm mb-8">
        Technical Stack
      </div>

      <div className="space-y-5">
        
        {[
          "DuckDB",
          "llama.cpp",
          "Local LLM Inference",
          "Python",
          "Text-to-SQL",
          "Prompt Engineering",
          "Procurement Analytics",
          "Operational Intelligence",
        ].map((tech) => (
          <div
            key={tech}
            className="flex items-center justify-between p-5 rounded-2xl border border-white/10 bg-black/30"
          >
            <span className="text-white">
              {tech}
            </span>

            <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-10 pt-8 border-t border-white/10">
        
        <p className="text-white/60 leading-relaxed">
          Designed as a scalable enterprise AI workflow
          for procurement operations, tender intelligence,
          and logistics decision support systems.
        </p>
      </div>
    </div>
  </div>
</div>
{/* AI Workflow Pipeline */}
<div className="max-w-7xl mx-auto px-8 pb-28">
  
  <div className="text-center max-w-4xl mx-auto">
    
    <div className="inline-flex items-center px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 text-sm mb-8">
      AI Workflow Orchestration
    </div>

    <h2 className="text-5xl font-bold text-white leading-tight">
      Intelligent procurement workflows
      powered by AI-driven data pipelines.
    </h2>

    <p className="mt-8 text-xl text-white/60 leading-relaxed">
      RFQ documents flow through structured extraction,
      AI classification, query orchestration, and
      operational intelligence layers designed for
      enterprise procurement teams.
    </p>
  </div>

  {/* Pipeline */}
  <div className="relative mt-24">
    
    {/* Connection Line */}
    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />

    <div className="grid lg:grid-cols-4 gap-8 relative z-10">
      
      {[
        {
          step: "01",
          title: "RFQ Upload",
          desc: "Procurement documents and tender files ingested into AI workflow pipelines.",
        },
        {
          step: "02",
          title: "AI Extraction",
          desc: "LLM systems identify shipment entities, pricing structures, and operational metadata.",
        },
        {
          step: "03",
          title: "SQL Intelligence",
          desc: "Text-to-SQL workflows generate structured procurement analytics queries.",
        },
        {
          step: "04",
          title: "Decision Support",
          desc: "AI recommendations surface profitability insights and operational risks.",
        },
      ].map((item) => (
        <div
          key={item.step}
          className="group relative p-8 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl hover:border-cyan-400/20 transition-all duration-500"
        >
          
          {/* Hover Glow */}
          <div className="absolute inset-0 bg-cyan-400/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

          {/* Step */}
          <div className="relative z-10 flex items-center justify-between">
            
            <div className="w-12 h-12 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-300 font-medium">
              {item.step}
            </div>

            <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]" />
          </div>

          {/* Title */}
          <h3 className="relative z-10 mt-10 text-2xl font-semibold text-white">
            {item.title}
          </h3>

          {/* Description */}
          <p className="relative z-10 mt-5 text-white/60 leading-relaxed">
            {item.desc}
          </p>

          {/* Bottom Accent */}
          <div className="relative z-10 mt-10 h-px w-full bg-gradient-to-r from-cyan-400/40 to-transparent" />
        </div>
      ))}
    </div>
  </div>
</div>
    </main>
  );
}