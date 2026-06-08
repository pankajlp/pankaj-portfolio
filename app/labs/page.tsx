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

  const utilities = [
    {
      title: "NexConvert Tool",
      status: "Live",
      description:
        "A web-based configuration translator designed to parse and convert Clash settings (.yaml) into Sing-box compatible formats (.json) with a modern web dashboard.",
      liveUrl: "https://convert.nordneuron.com",
      githubUrl: "https://github.com/pankajlp/nexconvert-tool",
    },
    {
      title: "Folder Flow",
      status: "Live",
      description:
        "A client-side web application designed to organize local file directories engineered from first principles, utilizing a visual tree-like dashboard for real-time hierarchy previews.",
      liveUrl: "https://flow.nordneuron.com",
      githubUrl: "https://github.com/pankajlp/folder-organizer",
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

        {/* Section 1: AI-Native Systems */}
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

        {/* Section 2: Open Source & Developer Utilities */}
        <div className="mt-24 pt-16 border-t border-white/10">
          <p className="text-cyan-400 uppercase tracking-[0.2em] text-sm">
            Open Source
          </p>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold">
            Developer Utilities
          </h2>
          <p className="mt-4 max-w-2xl text-white/60 text-lg">
            Lightweight tools, packages, and utilities built for developers and proxy routing translation.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {utilities.map((util) => (
              <div
                key={util.title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 hover:border-cyan-400/40 hover:bg-white/[0.05] transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-cyan-400 text-sm font-medium">
                    {util.status}
                  </div>
                  <a
                    href={util.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/45 hover:text-white transition-colors duration-300 flex items-center gap-1.5 text-sm"
                  >
                    <svg
                      aria-hidden="true"
                      height="16"
                      viewBox="0 0 16 16"
                      version="1.1"
                      width="16"
                      fill="currentColor"
                    >
                      <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.35 3.12.92.01.44.01.86.01.99 0 .21-.15.46-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                    </svg>
                    Source Code
                  </a>
                </div>

                <h3 className="text-2xl font-semibold">
                  {util.title}
                </h3>

                <p className="mt-4 text-white/60 leading-relaxed text-base">
                  {util.description}
                </p>

                <div className="mt-8 flex items-center justify-between">
                  <a
                    href={util.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-5 py-2.5 rounded-full border border-cyan-400/20 bg-cyan-400/5 text-cyan-300 text-sm font-medium hover:bg-cyan-400/10 hover:border-cyan-400/40 transition-all duration-300"
                  >
                    Launch Tool
                    <span className="ml-1.5">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}