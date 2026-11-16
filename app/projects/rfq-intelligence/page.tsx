import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import DemoDataNotice from "../../components/DemoDataNotice";

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
    lane: "Shanghai Rotterdam",
    value: "$420K",
    status: "AI Recommended",
    confidence: "96%",
  },
  {
    customer: "Nestlé",
    lane: "Singapore Hamburg",
    value: "$310K",
    status: "Under Review",
    confidence: "82%",
  },
  {
    customer: "Amazon",
    lane: "Nhava Sheva Los Angeles",
    value: "$880K",
    status: "High Margin",
    confidence: "94%",
  },
  {
    customer: "IKEA",
    lane: "Busan Antwerp",
    value: "$270K",
    status: "Risk Alert",
    confidence: "71%",
  },
];
const recommendations = [
  {
    title: "High Profitability Opportunity",
    description:
      "AI identified strong margin potential for APAC EU refrigerated cargo lanes based on historical conversion and carrier trends.",
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
    <main id="main" className="min-h-dvh bg-paper text-ink pt-[var(--nav-h)]">
      
      {/* Navbar */}
      <Navbar />
        <a
  href="/case-studies/rfq-delta-intelligence"
  className="inline-flex items-center gap-3 mt-8 text-ink hover:text-accent-ink transition-colors duration-300"
>
  Read Technical Case Study
</a>
      {/* Hero */}
      <div className="relative wrap py-16">
        

        <div className="relative z-10">
          

          <h1 className="text-5xl font-medium leading-tight max-w-4xl">
            RFQ Intelligence
            <span className="block text-ink">
              Automation Platform
            </span>
          </h1>

          <p className="mt-8 text-xl text-muted leading-relaxed max-w-3xl">
            AI-powered procurement intelligence system designed
            for RFQ processing, tender analytics, operational automation,
            and intelligent bid decision support across logistics operations.
          </p>

          <DemoDataNotice />
        </div>
      </div>
      {/* KPI Dashboard */}
<div className="wrap pb-10">
  
  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
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
</div>
{/* AI Tender Analysis */}
<div className="wrap pb-16">
  
  <div className="p-6 md:p-8 rounded-card border border-rule-2 bg-paper-2">
    
    {/* Header */}
    <div className="flex flex-wrap gap-3 items-center justify-between mb-10">
      
      <div>
        <h2 className="text-3xl font-semibold text-ink">
          AI Tender Intelligence
        </h2>

        <p className="mt-2 text-muted">
          AI-assisted RFQ analysis, profitability scoring, and procurement recommendations.
        </p>
      </div>

      <div className="flex items-center gap-3 px-4 py-2 rounded-full border border-rule-2 bg-paper-3/50 text-ink text-sm">
        
        <div className="w-2 h-2 rounded-full bg-accent text-accent-ink hover:bg-accent-2 animate-pulse" />

        AI Analysis Live
      </div>
    </div>

    {/* Table */}
    <DemoDataNotice compact />
    <div className="overflow-x-auto max-w-full" tabIndex={0} role="region" aria-label="Data table, scrolls sideways">
      
      <table className="w-full">
        
        <thead>
          <tr className="border-b border-rule-2 text-left text-sm text-muted">
            
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
              className="border-b border-rule-2 hover:bg-paper-3/50 transition-colors"
            >
              
              <td className="py-6 text-ink font-medium">
                {item.customer}
              </td>

              <td className="py-6 text-ink-2">
                {item.lane}
              </td>

              <td className="py-6 text-ink">
                {item.value}
              </td>

              <td className="py-6">
                <span
                  className={`px-3 py-1 rounded-full text-sm border ${
                    item.status === "Risk Alert"
                      ? "bg-paper-3 border-error text-error"
                      : item.status === "Under Review"
                      ? "bg-paper-3 border-warning text-warning"
                      : "bg-paper-3/50 border-rule-2 text-ink"
                  }`}
                >
                  {item.status}
                </span>
              </td>

              <td className="py-6 text-muted">
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
<div className="wrap pb-24">
  
  <div className="flex flex-wrap gap-3 items-center justify-between mb-10">
    
    <div>
      <h2 className="text-3xl font-semibold text-ink">
        AI Recommendation Engine
      </h2>

      <p className="mt-2 text-muted">
        AI-generated procurement insights and tender optimization recommendations.
      </p>
    </div>

    <div className="px-4 py-2 rounded-full border border-rule-2 bg-paper-3/50 text-ink text-sm">
      Predictive Intelligence Active
    </div>
  </div>

  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
    {recommendations.map((item, index) => (
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
            Recommendation Confidence
          </span>

          <span className="text-ink font-medium">
            95%
          </span>
        </div>
      </div>
    ))}
  </div>
</div>
{/* AI Architecture */}
<div className="wrap pb-24">
  
  <div className="grid gap-6 md:gap-10">
    
    {/* LEFT */}
    <div className="p-6 md:p-10 rounded-card border border-rule-2 bg-paper-2">
      

      <h2 className="text-4xl font-medium text-ink leading-tight">
        AI-assisted procurement intelligence
        powered by local inference and
        structured analytics workflows.
      </h2>

      <p className="mt-8 text-muted text-lg leading-relaxed">
        The platform combines RFQ ingestion, AI parsing,
        structured querying, and operational analytics
        into a unified procurement intelligence system
        designed for enterprise tender workflows.
      </p>

      {/* Flow */}
      <div className="mt-12 space-y-6">
        
        <div className="flex items-start gap-5">
          
          <div className="w-10 h-10 rounded-control bg-paper-3/50 border border-rule-2 flex items-center justify-center text-ink text-sm">
            01
          </div>

          <div>
            <h3 className="text-xl text-ink font-medium">
              RFQ Document Ingestion
            </h3>

            <p className="mt-2 text-muted leading-relaxed">
              Procurement documents and tender files processed through structured extraction workflows.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-5">
          
          <div className="w-10 h-10 rounded-control bg-paper-3/50 border border-rule-2 flex items-center justify-center text-ink text-sm">
            02
          </div>

          <div>
            <h3 className="text-xl text-ink font-medium">
              AI Parsing & Classification
            </h3>

            <p className="mt-2 text-muted leading-relaxed">
              LLM workflows extract shipment structures, lanes, pricing signals, and operational entities.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-5">
          
          <div className="w-10 h-10 rounded-control bg-paper-3/50 border border-rule-2 flex items-center justify-center text-ink text-sm">
            03
          </div>

          <div>
            <h3 className="text-xl text-ink font-medium">
              Text-to-SQL Intelligence Layer
            </h3>

            <p className="mt-2 text-muted leading-relaxed">
              AI-generated SQL workflows enable procurement analytics and operational querying across structured datasets.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-5">
          
          <div className="w-10 h-10 rounded-control bg-paper-3/50 border border-rule-2 flex items-center justify-center text-ink text-sm">
            04
          </div>

          <div>
            <h3 className="text-xl text-ink font-medium">
              Procurement Intelligence
            </h3>

            <p className="mt-2 text-muted leading-relaxed">
              AI systems surface profitability signals, operational risks, and tender optimization recommendations.
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>
<div className="mt-16 rounded-card border border-rule-2 bg-paper-2 border-rule-2 p-6 md:p-8">

  <p className="text-ink text-sm mb-4">
    Open Source Architecture
  </p>

  <h3 className="text-3xl font-semibold text-ink">
    AI Procurement Intelligence Systems
  </h3>

  <p className="mt-5 text-ink/65 leading-relaxed max-w-2xl">
    A public demonstration of the AI-native procurement
    intelligence architecture behind the RFQ Intelligence system , 
    combining DuckDB, local LLM workflows,
    schema-aware prompting, and text-to-SQL orchestration.
  </p>

  <a
    href="https://github.com/NordNeuron/ai-procurement-intelligence"
    target="_blank"
    className="inline-flex items-center gap-3 mt-8 px-6 py-4 rounded-control bg-accent text-accent-ink hover:bg-accent-2 hover:text-ink font-medium transition duration-300"
  >
    View GitHub Repository
  </a>
</div>
{/* AI Workflow Pipeline */}
<div className="wrap pb-28">
  
  <div className="text-center max-w-4xl mx-auto">
    

    <h2 className="text-4xl font-medium text-ink leading-tight">
      Intelligent procurement workflows
      powered by AI-driven data pipelines.
    </h2>

    <p className="mt-8 text-xl text-muted leading-relaxed">
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

    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 relative z-10">
      
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
          className="group relative p-6 md:p-8 rounded-card border border-rule-2 bg-paper-2 hover:border-rule-2 transition duration-500"
        >
          
          {/* Hover Glow */}
          <div className="absolute inset-0 bg-accent-wash opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-card" />

          {/* Step */}
          <div className="relative z-10 flex flex-wrap gap-3 items-center justify-between">
            
            <div className="w-12 h-12 rounded-control bg-paper-3/50 border border-rule-2 flex items-center justify-center text-ink font-medium">
              {item.step}
            </div>

            <div className="w-2.5 h-2.5 rounded-full bg-accent text-accent-ink hover:bg-accent-2" />
          </div>

          {/* Title */}
          <h3 className="relative z-10 mt-10 text-2xl font-semibold text-ink">
            {item.title}
          </h3>

          {/* Description */}
          <p className="relative z-10 mt-5 text-muted leading-relaxed">
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
<div className="wrap pb-28">
  
  <div className="mb-10">
    
    <div className="inline-flex items-center px-4 py-2 rounded-full border border-rule-2 bg-paper-3/50 text-ink text-sm mb-6">
      Live Enterprise Dashboard
    </div>

    <h2 className="text-4xl font-medium text-ink leading-tight">
      Real-time procurement intelligence
      powered by Power BI Service.
    </h2>

    <p className="mt-6 text-xl text-muted leading-relaxed max-w-4xl">
      Interactive analytics platform for RFQ intelligence,
      tender visibility, operational monitoring,
      and AI-assisted procurement workflows.
    </p>
  </div>

  {/* Embed Shell */}
  <div className="relative rounded-card border border-rule-2 bg-paper-2 p-4 overflow-hidden">
    
    {/* Glow */}
    <div className="absolute inset-0 bg-accent-wash pointer-events-none" />

    {/* Top Bar */}
    <div className="relative z-10 flex flex-wrap gap-3 items-center justify-between px-4 py-4 border-b border-rule-2">
      
      <div className="flex items-center gap-3">
        
        <div className="w-3 h-3 rounded-full bg-accent text-accent-ink hover:bg-accent-2" />

        <span className="text-ink/80">
          RFQ Intelligence Console
        </span>
      </div>

      <div className="text-sm text-ink">
        Live Analytics
      </div>
    </div>

    {/* Dashboard */}
    <div className="relative z-10 mt-4 rounded-control overflow-hidden">
      
      <iframe
        title="RFQ Intelligence Dashboard"
        width="100%"
        height="900"
        src="https://app.powerbi.com/view?r=eyJrIjoiZmNiOTJkNmQtYzgxNy00YWQ2LWJmNzUtN2I1NGUwNTY0ZDdiIiwidCI6ImM5OWExOWQ1LWFlMjAtNDg3Ni05M2JiLWU4ZTI1MTgwYmRmMyJ9"
        frameBorder="0"
        allowFullScreen={true}
        tabIndex={0}
        className="rounded-card bg-paper"
      />
    </div>
  </div>
</div>
      <Footer />
    </main>
  );
}