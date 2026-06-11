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
    <main className="min-h-screen bg-[#f5f4f0] text-[#1c1917]">
      
      {/* Navbar */}
      <div className="sticky top-0 z-50 border-b border-stone-200 bg-[#f5f4f0]/80 backdrop-blur-xl">
        
        <div className="max-w-7xl mx-auto px-8 h-[88px] flex items-center justify-between">
          
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
                RFQ Intelligence Platform
              </h1>

              <p className="text-xs text-stone-400">
                AI Procurement Operations
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 px-4 py-2 rounded-full border border-stone-200 bg-stone-100/50 text-stone-900 text-sm">
            
            <div className="w-2 h-2 rounded-full bg-stone-900 text-white hover:bg-black animate-pulse" />

            AI Engine Active
          </div>
        </div>
      </div>
        <a
  href="/case-studies/rfq-delta-intelligence"
  className="inline-flex items-center gap-3 mt-8 text-stone-900 hover:text-black transition-colors duration-300"
>
  Read Technical Case Study →
</a>
      {/* Hero */}
      <div className="relative max-w-7xl mx-auto px-8 py-16">
        
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-stone-1000/5 blur-[180px] rounded-full pointer-events-none" />

        <div className="relative z-10">
          
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-stone-200 bg-stone-100/50 text-stone-900 text-sm mb-8">
            AI Procurement Intelligence
          </div>

          <h1 className="text-6xl font-bold leading-tight max-w-4xl">
            RFQ Intelligence
            <span className="block text-stone-900">
              Automation Platform
            </span>
          </h1>

          <p className="mt-8 text-xl text-stone-500 leading-relaxed max-w-3xl">
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
</div>
{/* AI Tender Analysis */}
<div className="max-w-7xl mx-auto px-8 pb-16">
  
  <div className="p-8 rounded-3xl border border-stone-200 bg-white shadow-[0_4px_20px_rgba(15,23,42,0.02)]">
    
    {/* Header */}
    <div className="flex items-center justify-between mb-10">
      
      <div>
        <h2 className="text-3xl font-semibold text-stone-900">
          AI Tender Intelligence
        </h2>

        <p className="mt-2 text-stone-400">
          AI-assisted RFQ analysis, profitability scoring, and procurement recommendations.
        </p>
      </div>

      <div className="flex items-center gap-3 px-4 py-2 rounded-full border border-stone-200 bg-stone-100/50 text-stone-900 text-sm">
        
        <div className="w-2 h-2 rounded-full bg-stone-900 text-white hover:bg-black animate-pulse" />

        AI Analysis Live
      </div>
    </div>

    {/* Table */}
    <div className="overflow-x-auto">
      
      <table className="w-full">
        
        <thead>
          <tr className="border-b border-stone-200 text-left text-sm text-stone-400">
            
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
              className="border-b border-stone-200/50 hover:bg-stone-50/50 transition-colors"
            >
              
              <td className="py-6 text-stone-900 font-medium">
                {item.customer}
              </td>

              <td className="py-6 text-stone-700">
                {item.lane}
              </td>

              <td className="py-6 text-stone-900">
                {item.value}
              </td>

              <td className="py-6">
                <span
                  className={`px-3 py-1 rounded-full text-sm border ${
                    item.status === "Risk Alert"
                      ? "bg-red-50 border-red-100 text-red-700"
                      : item.status === "Under Review"
                      ? "bg-amber-50 border-amber-100 text-amber-700"
                      : "bg-stone-100/50 border-stone-200 text-stone-900"
                  }`}
                >
                  {item.status}
                </span>
              </td>

              <td className="py-6 text-stone-400">
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
      <h2 className="text-3xl font-semibold text-stone-900">
        AI Recommendation Engine
      </h2>

      <p className="mt-2 text-stone-400">
        AI-generated procurement insights and tender optimization recommendations.
      </p>
    </div>

    <div className="px-4 py-2 rounded-full border border-stone-200 bg-stone-100/50 text-stone-900 text-sm">
      Predictive Intelligence Active
    </div>
  </div>

  <div className="grid lg:grid-cols-3 gap-6">
    {recommendations.map((item, index) => (
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
            Recommendation Confidence
          </span>

          <span className="text-stone-900 font-medium">
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
    <div className="p-10 rounded-3xl border border-stone-200 bg-white shadow-[0_4px_20px_rgba(15,23,42,0.02)]">
      
      <div className="inline-flex items-center px-4 py-2 rounded-full border border-stone-200 bg-stone-100/50 text-stone-900 text-sm mb-8">
        AI System Architecture
      </div>

      <h2 className="text-4xl font-bold text-stone-900 leading-tight">
        AI-assisted procurement intelligence
        powered by local inference and
        structured analytics workflows.
      </h2>

      <p className="mt-8 text-stone-500 text-lg leading-relaxed">
        The platform combines RFQ ingestion, AI parsing,
        structured querying, and operational analytics
        into a unified procurement intelligence system
        designed for enterprise tender workflows.
      </p>

      {/* Flow */}
      <div className="mt-12 space-y-6">
        
        <div className="flex items-start gap-5">
          
          <div className="w-10 h-10 rounded-2xl bg-stone-100/50 border border-stone-200 flex items-center justify-center text-stone-900 text-sm">
            01
          </div>

          <div>
            <h3 className="text-xl text-stone-900 font-medium">
              RFQ Document Ingestion
            </h3>

            <p className="mt-2 text-stone-500 leading-relaxed">
              Procurement documents and tender files processed through structured extraction workflows.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-5">
          
          <div className="w-10 h-10 rounded-2xl bg-stone-100/50 border border-stone-200 flex items-center justify-center text-stone-900 text-sm">
            02
          </div>

          <div>
            <h3 className="text-xl text-stone-900 font-medium">
              AI Parsing & Classification
            </h3>

            <p className="mt-2 text-stone-500 leading-relaxed">
              LLM workflows extract shipment structures, lanes, pricing signals, and operational entities.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-5">
          
          <div className="w-10 h-10 rounded-2xl bg-stone-100/50 border border-stone-200 flex items-center justify-center text-stone-900 text-sm">
            03
          </div>

          <div>
            <h3 className="text-xl text-stone-900 font-medium">
              Text-to-SQL Intelligence Layer
            </h3>

            <p className="mt-2 text-stone-500 leading-relaxed">
              AI-generated SQL workflows enable procurement analytics and operational querying across structured datasets.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-5">
          
          <div className="w-10 h-10 rounded-2xl bg-stone-100/50 border border-stone-200 flex items-center justify-center text-stone-900 text-sm">
            04
          </div>

          <div>
            <h3 className="text-xl text-stone-900 font-medium">
              Procurement Intelligence
            </h3>

            <p className="mt-2 text-stone-500 leading-relaxed">
              AI systems surface profitability signals, operational risks, and tender optimization recommendations.
            </p>
          </div>
        </div>

      </div>
    </div>

    {/* RIGHT */}
    <div className="p-10 rounded-3xl border border-stone-200 bg-gradient-to-br from-stone-200/20 to-transparent">
      
      <div className="inline-flex items-center px-4 py-2 rounded-full border border-stone-200 bg-stone-100/50 text-stone-900 text-sm mb-8">
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
          Designed as a scalable enterprise AI workflow
          for procurement operations, tender intelligence,
          and logistics decision support systems.
        </p>
      </div>
    </div>
  </div>
</div>
<div className="mt-16 rounded-3xl border border-stone-200 bg-white border-stone-200 shadow-[0_4px_25px_rgba(15,23,42,0.02)] p-8">

  <p className="text-stone-900 text-sm uppercase tracking-[0.2em] mb-4">
    Open Source Architecture
  </p>

  <h3 className="text-3xl font-semibold text-stone-900">
    AI Procurement Intelligence Systems
  </h3>

  <p className="mt-5 text-stone-900/65 leading-relaxed max-w-2xl">
    A public demonstration of the AI-native procurement
    intelligence architecture behind the RFQ Intelligence system —
    combining DuckDB, local LLM workflows,
    schema-aware prompting, and text-to-SQL orchestration.
  </p>

  <a
    href="https://github.com/pankajlp/ai-procurement-intelligence"
    target="_blank"
    className="inline-flex items-center gap-3 mt-8 px-6 py-4 rounded-2xl bg-stone-900 text-stone-50 hover:bg-stone-800 hover:text-white font-medium hover:scale-[1.02] transition-all duration-300"
  >
    View GitHub Repository →
  </a>
</div>
{/* AI Workflow Pipeline */}
<div className="max-w-7xl mx-auto px-8 pb-28">
  
  <div className="text-center max-w-4xl mx-auto">
    
    <div className="inline-flex items-center px-4 py-2 rounded-full border border-stone-200 bg-stone-100/50 text-stone-900 text-sm mb-8">
      AI Workflow Orchestration
    </div>

    <h2 className="text-5xl font-bold text-stone-900 leading-tight">
      Intelligent procurement workflows
      powered by AI-driven data pipelines.
    </h2>

    <p className="mt-8 text-xl text-stone-500 leading-relaxed">
      RFQ documents flow through structured extraction,
      AI classification, query orchestration, and
      operational intelligence layers designed for
      enterprise procurement teams.
    </p>
  </div>

  {/* Pipeline */}
  <div className="relative mt-24">
    
    {/* Connection Line */}
    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-stone-400/20 to-transparent" />

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
          className="group relative p-8 rounded-3xl border border-stone-200 bg-white shadow-[0_4px_20px_rgba(15,23,42,0.02)] backdrop-blur-xl hover:border-stone-200 transition-all duration-500"
        >
          
          {/* Hover Glow */}
          <div className="absolute inset-0 bg-stone-1000/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

          {/* Step */}
          <div className="relative z-10 flex items-center justify-between">
            
            <div className="w-12 h-12 rounded-2xl bg-stone-100/50 border border-stone-200 flex items-center justify-center text-stone-900 font-medium">
              {item.step}
            </div>

            <div className="w-2.5 h-2.5 rounded-full bg-stone-900 text-white hover:bg-black shadow-[0_0_12px_rgba(120, 113, 108,0.25)]" />
          </div>

          {/* Title */}
          <h3 className="relative z-10 mt-10 text-2xl font-semibold text-stone-900">
            {item.title}
          </h3>

          {/* Description */}
          <p className="relative z-10 mt-5 text-stone-500 leading-relaxed">
            {item.desc}
          </p>

          {/* Bottom Accent */}
          <div className="relative z-10 mt-10 h-px w-full bg-gradient-to-r from-stone-400/40 to-transparent" />
        </div>
      ))}
    </div>
  </div>
</div>
{/* Live Dashboard */}
<div className="max-w-7xl mx-auto px-8 pb-28">
  
  <div className="mb-10">
    
    <div className="inline-flex items-center px-4 py-2 rounded-full border border-stone-200 bg-stone-100/50 text-stone-900 text-sm mb-6">
      Live Enterprise Dashboard
    </div>

    <h2 className="text-5xl font-bold text-stone-900 leading-tight">
      Real-time procurement intelligence
      powered by Power BI Service.
    </h2>

    <p className="mt-6 text-xl text-stone-500 leading-relaxed max-w-4xl">
      Interactive analytics platform for RFQ intelligence,
      tender visibility, operational monitoring,
      and AI-assisted procurement workflows.
    </p>
  </div>

  {/* Embed Shell */}
  <div className="relative rounded-[32px] border border-stone-200 bg-white shadow-[0_4px_20px_rgba(15,23,42,0.02)] p-4 backdrop-blur-xl overflow-hidden shadow-[0_10px_50px_rgba(15,23,42,0.03)]">
    
    {/* Glow */}
    <div className="absolute inset-0 bg-stone-1000/5 pointer-events-none" />

    {/* Top Bar */}
    <div className="relative z-10 flex items-center justify-between px-4 py-4 border-b border-stone-200">
      
      <div className="flex items-center gap-3">
        
        <div className="w-3 h-3 rounded-full bg-stone-900 text-white hover:bg-black shadow-[0_0_12px_rgba(120, 113, 108,0.25)]" />

        <span className="text-stone-900/80">
          RFQ Intelligence Console
        </span>
      </div>

      <div className="text-sm text-stone-900">
        Live Analytics
      </div>
    </div>

    {/* Dashboard */}
    <div className="relative z-10 mt-4 rounded-2xl overflow-hidden">
      
      <iframe
        title="RFQ Intelligence Dashboard"
        width="100%"
        height="900"
        src="https://app.powerbi.com/view?r=eyJrIjoiZmNiOTJkNmQtYzgxNy00YWQ2LWJmNzUtN2I1NGUwNTY0ZDdiIiwidCI6ImM5OWExOWQ1LWFlMjAtNDg3Ni05M2JiLWU4ZTI1MTgwYmRmMyJ9"
        frameBorder="0"
        allowFullScreen={true}
        className="rounded-2xl bg-black"
      />
    </div>
  </div>
</div>
    </main>
  );
}