import Link from "next/link";
import Image from "next/image";

export default function InsightsPage() {
  return (
    <main className="min-h-screen bg-[#fafaf8] text-[#1a1a18] px-6 py-10">
      
      {/* Back Button */}
      <div className="max-w-6xl mx-auto">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-[#6b7280] hover:text-[#1a4fd6] transition-colors duration-300 mb-12 text-sm"
        >
          ← Back
        </a>

        {/* Hero Section */}
        <div className="mb-16 max-w-4xl">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#eef2fd] text-[#1a4fd6] text-sm mb-6">
            Insights
          </div>

          <h1 className="text-3xl md:text-4xl font-serif leading-tight tracking-tight">
            Operational intelligence,
            AI systems, and enterprise architecture.
          </h1>

          <p className="mt-6 text-lg text-[#5a5a54] leading-relaxed max-w-2xl">
            Notes and essays exploring AI-native operations,
            logistics intelligence, analytics engineering,
            and the future of enterprise systems.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 gap-10">

          {/* Article 1 */}
          <Link
            href="/insights/from-dashboards-to-intelligence-systems"
            className="group block overflow-hidden rounded-3xl border border-black/10 bg-white hover:border-[#1a4fd6]/30 hover:shadow-xl transition-all duration-300"
          >
           <div className="relative w-full h-[260px] overflow-hidden">
              <Image
                src="/dashboard_to_ai.png"
                alt="From Dashboards to Intelligence Systems"
                fill
                priority
                className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
              />
            </div>

            <div className="p-8 md:p-10">
              <div className="text-sm text-[#1a4fd6] mb-4">
                Enterprise AI
              </div>

              <h2 className="text-3xl md:text-4xl font-serif leading-tight tracking-tight">
                From Dashboards to Intelligence Systems
              </h2>

              <p className="mt-5 text-[#5a5a54] text-base md:text-lg leading-relaxed max-w-3xl">
                Why visualizing data is no longer enough —
                and what comes after the dashboard era.
              </p>

              <div className="mt-6 text-sm text-[#9a9a92]">
                May 2026 · 6 min read
              </div>
            </div>
          </Link>

          {/* Article 2 */}
          <Link
            href="/insights/building-ai-procurement-intelligence-systems"
            className="group block overflow-hidden rounded-3xl border border-black/10 bg-white hover:border-[#1a4fd6]/30 hover:shadow-xl transition-all duration-300"
          >
            <div className="relative w-full h-[260px] overflow-hidden">
              <Image
                src="/procurement.png"
                alt="Building AI Procurement Intelligence Systems"
                fill
                className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
              />
            </div>

            <div className="p-8 md:p-10">
              <div className="text-sm text-[#1a4fd6] mb-4">
                Enterprise AI
              </div>

              <h2 className="text-3xl md:text-4xl font-serif leading-tight tracking-tight">
                Building AI Procurement Intelligence Systems
              </h2>

              <p className="mt-5 text-[#5a5a54] text-base md:text-lg leading-relaxed max-w-3xl">
                Procurement workflows are fragmented by design.
                RFQs arrive as spreadsheets, PDFs, emails,
                pricing tables, carrier notes, and operational updates —
                usually spread across disconnected systems.
              </p>

              <div className="mt-6 text-sm text-[#9a9a92]">
                May 2026 · 6 min read
              </div>
            </div>
          </Link>

        </div>
      </div>
    </main>
  );
}