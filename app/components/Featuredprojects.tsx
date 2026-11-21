"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getProjects } from "../lib/prismic";

interface Project {
  title: string;
  category: string;
  description: string;
  link: string;
  stack: string[];
}

export default function FeaturedProjects() {
  const [projectList, setProjectList] = useState<Project[]>([]);

  useEffect(() => {
    async function loadData() {
      const data = await getProjects();
      setProjectList(data);
    }
    loadData();
  }, []);

  return (
    <section id="work" className="section scroll-mt-[var(--nav-h)]">
      <div className="wrap">
        <div className="grid grid-cols-1 gap-x-[var(--gap-columns)] gap-y-4 md:grid-cols-12 md:items-end mb-12">
          <h2 className="md:col-span-6">Selected projects</h2>
          <p className="lead text-ink-2 md:col-span-5 md:col-start-8">
            Enterprise AI systems, logistics intelligence, and operational platforms.
          </p>
        </div>

        <div className="rows" aria-busy={projectList.length === 0}>
          {projectList.length === 0 && <p role="status" className="meta py-8 m-0">Loading projects…</p>}
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
