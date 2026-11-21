const domains = [
  {
    title: "AI Agents & LLM Systems",
    description:
      "Autonomous agents, RAG pipelines, and LLM orchestration that turn language models into reliable operational tools.",
    tools: ["AI Agents", "RAG", "LangChain", "OpenAI / Claude", "Prompt Engineering"],
  },
  {
    title: "Machine Learning",
    description:
      "Predictive models for demand, pricing, and logistics, built, deployed, and monitored in production.",
    tools: ["Python", "Scikit-learn", "Forecasting", "MLOps"],
  },
  {
    title: "Data & Analytics Engineering",
    description:
      "Scalable pipelines, semantic models, and executive-grade analytics that operations teams actually use.",
    tools: ["SQL", "Power BI", "Data Pipelines", "Semantic Models"],
  },
  {
    title: "Automation & Integration",
    description:
      "Workflow automation across approvals, reporting, and operations, connecting systems through APIs.",
    tools: ["Power Automate", "Power Apps", "REST APIs", "Workflow Design"],
  },
  {
    title: "Web Engineering",
    description:
      "Modern, performant web platforms and interfaces for data products and intelligent applications.",
    tools: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
];

export default function TechStack() {
  return (
    <section id="stack" className="section band scroll-mt-[var(--nav-h)]">
      <div className="wrap grid grid-cols-1 gap-x-[var(--gap-columns)] gap-y-10 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h2>What we build with</h2>
          <p className="lead text-ink-2 mt-5">
            Five focused domains, from autonomous AI agents to the data infrastructure underneath them.
          </p>
        </div>
        <ol className="rows lg:col-span-8 m-0 p-0 list-none">
          {domains.map((item) => (
            <li key={item.title} className="py-7">
              <h3>{item.title}</h3>
              <p className="text-ink-2 mt-2 m-0 max-w-[60ch]">{item.description}</p>
              <p className="meta mt-3 m-0">{item.tools.join(", ")}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
