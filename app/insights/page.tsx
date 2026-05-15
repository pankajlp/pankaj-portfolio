import Link from "next/link";

export default function InsightsPage() {
  return (
    <main className="min-h-screen bg-[#fafaf8] text-[#1a1a18] px-6 py-24">
        <a
  href="/"
  className="inline-flex items-center gap-2 text-white/40 hover:text-cyan-300 transition-colors duration-300 mb-10"
>
  ← Back to App
</a>
      <div className="max-w-5xl mx-auto">

        <div className="mb-20">
          
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#eef2fd] text-[#1a4fd6] text-sm mb-6">
            Insights
          </div>

          <h1 className="text-6xl font-serif leading-tight">
            Operational intelligence,
            AI systems, and enterprise architecture.
          </h1>

          <p className="mt-8 text-xl text-[#5a5a54] max-w-3xl leading-relaxed">
            Notes and essays exploring AI-native operations,
            logistics intelligence, analytics engineering,
            and the future of enterprise systems.
          </p>
        </div>

        {/* Articles */}
        <div className="space-y-8">

          <Link
            href="/insights/from-dashboards-to-intelligence-systems"
            className="block rounded-3xl border border-black/10 bg-white p-10 hover:border-[#1a4fd6]/30 transition-all duration-300"
          >
            <div className="text-sm text-[#1a4fd6] mb-4">
              Enterprise AI
            </div>

            <h2 className="text-4xl font-serif leading-tight">
              From Dashboards to Intelligence Systems
            </h2>

            <p className="mt-5 text-[#5a5a54] text-lg leading-relaxed max-w-3xl">
              Why visualizing data is no longer enough —
              and what comes after the dashboard era.
            </p>

            <div className="mt-6 text-sm text-[#9a9a92]">
              May 2026 · 6 min read
            </div>
          </Link>
          <Link
            href="/insights/building-ai-procurement-intelligence-systems"
            className="block rounded-3xl border border-black/10 bg-white p-10 hover:border-[#1a4fd6]/30 transition-all duration-300"
          >
            <div className="text-sm text-[#1a4fd6] mb-4">
              Enterprise AI
            </div>

            <h2 className="text-4xl font-serif leading-tight">
              Building AI Procurement Intelligence Systems
            </h2>

            <p className="mt-5 text-[#5a5a54] text-lg leading-relaxed max-w-3xl">
      Procurement workflows are fragmented by design.
      RFQs arrive as spreadsheets, PDFs, emails,
      pricing tables, carrier notes, and operational updates —
      usually spread across disconnected systems.
            </p>

            <div className="mt-6 text-sm text-[#9a9a92]">
              May 2026 · 6 min read
            </div>
          </Link>

        </div>
      </div>
    </main>
  );
}