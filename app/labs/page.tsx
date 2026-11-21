import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function LabsPage() {
  const labs: {
    title: string;
    status: string;
    description: string;
    href?: string;
    githubUrl?: string;
  }[] = [
    {
      title: "RFQ Intelligence Pilot",
      status: "Live",
      description:
        "Send 5 real RFQs and your rate sheet; get back clean lane tables with suggested rates from your own history within 24 hours. Free for freight forwarders.",
      href: "/rfq",
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
    <>
      <Navbar />
      <main id="main" className="bg-paper text-ink pt-[var(--nav-h)]">
        <section className="wrap pt-20 pb-12 md:pt-24 md:pb-16">
          <h1 className="max-w-[18ch]">Experimental AI-native intelligence systems</h1>
          <p className="lead mt-6 text-ink-2">
            A collection of experimental tools, prototypes,
            and research projects exploring the future of
            operational intelligence.
          </p>
        </section>

        <section className="wrap pb-[var(--section-gap-s)]">
          <div className="rows">
            {labs.map((lab) => {
              const href = lab.href || lab.githubUrl;
              const body = (
                <>
                  <div>
                    <h2 className="text-2xl md:text-3xl">{lab.title}</h2>
                    <p className="meta mt-2 m-0">{lab.status}</p>
                  </div>
                  <div>
                    <p className="text-ink-2 m-0 max-w-[60ch]">{lab.description}</p>
                    {href && <p className="mt-3 m-0 text-accent-2 font-semibold">{lab.href ? "Launch platform" : "View research on GitHub"}</p>}
                  </div>
                </>
              );
              return lab.href ? (
                <a key={lab.title} href={lab.href} className="row-link">{body}</a>
              ) : lab.githubUrl ? (
                <a key={lab.title} href={lab.githubUrl} target="_blank" rel="noopener noreferrer" className="row-link">{body}</a>
              ) : (
                <div key={lab.title} className="row-link text-muted">{body}</div>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
