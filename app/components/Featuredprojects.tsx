import Link from "next/link";
import { getProjects } from "../lib/prismic";

// Rendered on the server so the list is in the first HTML: no "Loading
// projects" flash, no layout shift, and the work is visible to search engines.
export default async function FeaturedProjects() {
  const projectList = await getProjects();

  return (
    <section id="work" className="section scroll-mt-[var(--nav-h)]">
      <div className="wrap">
        <div className="grid grid-cols-1 gap-x-[var(--gap-columns)] gap-y-4 md:grid-cols-12 md:items-end mb-12">
          <h2 className="md:col-span-6">Built for freight teams</h2>
          <p className="lead text-ink-2 md:col-span-5 md:col-start-8">
            The RFQ pilot grows out of these systems: rate analytics, tender tools and yard operations.
          </p>
        </div>

        <div className="rows">
          {projectList.map((project) => {
            const row = (
              <>
                <div>
                  <h3 className="text-2xl md:text-3xl">{project.title}</h3>
                  <p className="meta mt-2 m-0">{project.category}</p>
                </div>
                <div>
                  <p className="text-ink-2 m-0 max-w-[60ch]">{project.description}</p>
                  {project.stack?.length > 0 && <p className="meta mt-3 m-0">{project.stack.join(", ")}</p>}
                </div>
              </>
            );
            return project.link ? (
              <Link key={project.title} href={project.link} className="row-link">{row}</Link>
            ) : (
              <div key={project.title} className="row-link">{row}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
