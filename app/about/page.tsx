export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      {/* Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-cyan-500/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-28">

        {/* Tag */}
        <div className="inline-flex items-center px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 text-sm mb-8">
          About NordNeuron
        </div>

        {/* Hero */}
        <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight max-w-5xl">
          Building AI-native
          <span className="block text-cyan-400">
            operational intelligence systems
          </span>
          for logistics and enterprise workflows.
        </h1>

        {/* Intro */}
        <div className="mt-12 grid lg:grid-cols-[1.2fr_0.8fr] gap-16">

          <div className="space-y-8 text-xl leading-[1.9] text-white/70">

            <p>
              I’m Pankaj Kumar — a data and AI systems engineer
              focused on operational intelligence,
              enterprise analytics,
              and AI-native workflow design.
            </p>

            <p>
              My background combines logistics operations,
              procurement workflows,
              analytics engineering,
              and enterprise reporting systems —
              spanning warehouse operations,
              freight intelligence,
              RFQ analysis,
              and automation platforms.
            </p>

            <p>
              Over the last several years,
              I’ve worked across supply chain environments
              where operational decisions depend on fragmented data:
              spreadsheets,
              dashboards,
              emails,
              carrier systems,
              and procurement workflows.
            </p>

            <p>
              That experience gradually shifted my focus
              from building dashboards
              toward designing systems that can reason across operational context itself.
            </p>
          </div>

          {/* Side Card */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 h-fit backdrop-blur-xl">

            <div className="text-sm uppercase tracking-[0.2em] text-cyan-300 mb-6">
              Background
            </div>

            <div className="space-y-6">

              <div>
                <div className="text-white font-medium">
                  MSc Data Science
                </div>

                <div className="text-white/50 mt-1">
                  Liverpool John Moores University
                </div>
              </div>

              <div>
                <div className="text-white font-medium">
                  Enterprise Logistics & Analytics
                </div>

                <div className="text-white/50 mt-1">
                  Freight • Warehousing • Procurement
                </div>
              </div>

              <div>
                <div className="text-white font-medium">
                  Core Focus
                </div>

                <div className="text-white/50 mt-1">
                  AI Systems • Operational Intelligence • Analytics Engineering
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Philosophy */}
        <section className="mt-32">

          <div className="max-w-4xl">

            <div className="text-sm uppercase tracking-[0.2em] text-cyan-300 mb-6">
              Philosophy
            </div>

            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              From dashboards
              <span className="block text-cyan-400">
                to intelligence systems.
              </span>
            </h2>

            <div className="mt-10 space-y-8 text-xl leading-[1.9] text-white/70">

              <p>
                Traditional analytics systems are excellent at visualization,
                but most operational reasoning still happens outside the platform.
              </p>

              <p>
                I’m interested in the transition toward systems that can:
                retrieve context,
                orchestrate workflows,
                assist operational decisions,
                and augment human reasoning directly inside enterprise environments.
              </p>

              <p>
                That intersection between AI,
                operational systems,
                and analytics infrastructure
                is what NordNeuron explores.
              </p>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="mt-32">

          <div className="text-sm uppercase tracking-[0.2em] text-cyan-300 mb-10">
            Journey
          </div>

          <div className="space-y-10 border-l border-white/10 pl-10">

            {[
              {
                year: "Engineering Foundation",
                desc: "Started with mechanical engineering before transitioning into analytics and enterprise systems.",
              },
              {
                year: "Logistics & Freight Operations",
                desc: "Worked closely with warehouse operations, procurement workflows, freight analytics, and operational reporting systems.",
              },
              {
                year: "Analytics Engineering",
                desc: "Built Power BI dashboards, workflow automation systems, operational analytics layers, and enterprise reporting solutions.",
              },
              {
                year: "AI-Native Systems",
                desc: "Began exploring local LLMs, text-to-SQL workflows, operational copilots, and AI-native intelligence architectures.",
              },
            ].map((item) => (
              <div key={item.year} className="relative">

                <div className="absolute -left-[46px] top-2 w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]" />

                <h3 className="text-2xl font-semibold text-white">
                  {item.year}
                </h3>

                <p className="mt-3 text-white/60 text-lg leading-relaxed max-w-3xl">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Closing */}
        <section className="mt-32 border-t border-white/10 pt-16">

          <div className="max-w-4xl">

            <p className="text-3xl md:text-4xl leading-relaxed text-white/90">
              NordNeuron is an exploration of what happens
              when operational systems evolve beyond reporting —
              toward contextual intelligence.
            </p>

            <p className="mt-10 text-xl text-white/60 leading-relaxed">
              Combining enterprise analytics,
              AI workflows,
              operational reasoning,
              and modern intelligence architectures
              to build systems that participate in operations,
              not just visualize them.
            </p>

            <div className="mt-16">
              <a
                href="/#work"
                className="group inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-400 transition-colors duration-300 text-xl font-medium"
              >
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>{" "}
                Explore the work
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}