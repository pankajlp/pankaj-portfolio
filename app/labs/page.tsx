import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function LabsPage() {
  const labs = [
    {
      title: "Job Application Tailor",
      status: "Live",
      description:
        "Paste a resume and job description for an instant ATS match score, a role-tailored resume, and a ready-to-send cover letter.",
      href: "/labs/job-tailor",
    },
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
    <main className="min-h-screen bg-[#f5f4f0] text-[#1c1917] overflow-hidden">
      <Navbar />
      
      {/* Background Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-stone-900/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-40 pb-28">

        <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-stone-200 bg-white/60 text-stone-500 font-syne text-[10px] uppercase tracking-widest mb-6 shadow-sm">
          Labs
        </div>

        <h1 className="text-4xl md:text-7xl font-bold font-syne uppercase tracking-tight text-stone-900 leading-[1.05] max-w-5xl">
          Experimental AI-Native<br />
          <span className="text-stone-950">Intelligence Systems</span>
        </h1>

        <p className="mt-8 max-w-3xl text-stone-400 text-base md:text-lg leading-relaxed font-light">
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
                className="group relative block rounded-3xl border border-stone-200 bg-white/60 p-8 hover:border-stone-200/40 hover:bg-white/95 transition-all duration-300 flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="text-stone-950 font-syne text-[10px] uppercase tracking-widest mb-6">
                    {lab.status}
                  </div>

                  <h2 className="text-2xl font-bold font-syne uppercase tracking-tight text-stone-900 leading-tight">
                    {lab.title}
                  </h2>

                  <p className="mt-4 text-stone-400 text-sm md:text-base leading-relaxed font-light">
                    {lab.description}
                  </p>
                </div>

                <div className="mt-8 text-stone-500 font-syne text-xs uppercase tracking-widest flex items-center gap-1">
                  Launch Platform <span>→</span>
                </div>
              </a>
            ) : (
              <div
                key={lab.title}
                className="group relative block rounded-3xl border border-stone-200 bg-white/40 p-8 opacity-60 flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="text-stone-400 font-syne text-[10px] uppercase tracking-widest mb-6">
                    {lab.status}
                  </div>

                  <h2 className="text-2xl font-bold font-syne uppercase tracking-tight text-stone-500 leading-tight">
                    {lab.title}
                  </h2>

                  <p className="mt-4 text-stone-400 text-sm md:text-base leading-relaxed font-light">
                    {lab.description}
                  </p>
                </div>
              </div>
            )
          )}
        </div>

        {/* Section 2: Open Source & Developer Utilities */}
        <div className="mt-28 pt-20 border-t border-stone-200">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-stone-200 bg-white/60 text-stone-500 font-syne text-[10px] uppercase tracking-widest mb-6 shadow-sm">
            Open Source
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold font-syne uppercase tracking-tight text-stone-900 leading-tight">
            Developer Utilities
          </h2>
          
          <p className="mt-4 max-w-2xl text-stone-400 text-base md:text-lg leading-relaxed font-light">
            Lightweight tools, packages, and utilities built for developers and proxy routing translation.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {utilities.map((util) => (
              <div
                key={util.title}
                className="group relative block rounded-3xl border border-stone-200 bg-white/60 p-8 hover:border-stone-200/40 hover:bg-white/95 transition-all duration-300 flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-stone-950 font-syne text-[10px] uppercase tracking-widest">
                      {util.status}
                    </div>
                    <a
                      href={util.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-400 hover:text-stone-500 transition-colors duration-300 flex items-center gap-1.5 font-syne text-[10px] uppercase tracking-wider"
                    >
                      <svg
                        aria-hidden="true"
                        height="14"
                        viewBox="0 0 16 16"
                        version="1.1"
                        width="14"
                        fill="currentColor"
                      >
                        <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.35 3.12.92.01.44.01.86.01.99 0 .21-.15.46-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                      </svg>
                      GitHub
                    </a>
                  </div>

                  <h3 className="text-2xl font-bold font-syne uppercase tracking-tight text-stone-900 leading-tight">
                    {util.title}
                  </h3>

                  <p className="mt-4 text-stone-400 text-sm md:text-base leading-relaxed font-light">
                    {util.description}
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between">
                  <a
                    href={util.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center px-6 py-3 rounded-full border border-stone-200 bg-stone-900 text-stone-50 font-syne text-[10px] uppercase tracking-widest hover:bg-stone-800 hover:text-white hover:border-stone-400 transition-all duration-300"
                  >
                    Launch Tool
                    <span className="ml-1">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
      <Footer />
    </main>
  );
}