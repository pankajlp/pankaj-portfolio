export default function LabsPage() {
  const labs = [
    {
      title: "RFQ Intelligence Sandbox",
      status: "Coming Soon",
      description:
        "Explore AI-assisted procurement intelligence workflows and RFQ analysis.",
    },
    {
      title: "Operational Maturity Scanner",
      status: "Live",
      description:
        "Assess analytics, automation, and AI readiness across operations.",
      href: "/labs/operational-maturity-scanner",
    },
    {
      title: "Freight Intelligence Engine",
      status: "Research",
      description:
        "Experimental logistics intelligence and market insights platform.",
    },
    {
      title: "Text-to-SQL Playground",
      status: "Prototype",
      description:
        "Convert business questions into executable analytical queries.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-24">

        <p className="text-cyan-400 uppercase tracking-[0.2em] text-sm">
          NordNeuron Labs
        </p>

        <h1 className="mt-6 text-5xl md:text-6xl font-bold">
          Experimental AI-Native
          <span className="block text-cyan-400">
            Intelligence Systems
          </span>
        </h1>

        <p className="mt-8 max-w-3xl text-white/60 text-xl">
          A collection of experimental tools, prototypes,
          and research projects exploring the future of
          operational intelligence.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-20">

          {labs.map((lab) =>
            lab.href ? (
              <a
                key={lab.title}
                href={lab.href}
                className="block rounded-3xl border border-white/10 bg-white/[0.03] p-8 hover:border-cyan-400/40 hover:bg-white/[0.05] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-cyan-400 text-sm mb-4">
                  {lab.status}
                </div>

                <h2 className="text-2xl font-semibold">
                  {lab.title}
                </h2>

                <p className="mt-4 text-white/60 leading-relaxed">
                  {lab.description}
                </p>

                <div className="mt-6 text-cyan-300">
                  Launch →
                </div>
              </a>
            ) : (
              <div
                key={lab.title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 opacity-80"
              >
                <div className="text-cyan-400 text-sm mb-4">
                  {lab.status}
                </div>

                <h2 className="text-2xl font-semibold">
                  {lab.title}
                </h2>

                <p className="mt-4 text-white/60 leading-relaxed">
                  {lab.description}
                </p>
              </div>
            )
          )}

        </div>
      </div>
    </main>
  );
}