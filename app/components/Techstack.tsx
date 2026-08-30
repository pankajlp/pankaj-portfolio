"use client";

import { motion } from "framer-motion";

const domains = [
  {
    number: "01",
    title: "AI Agents & LLM Systems",
    description:
      "Autonomous agents, RAG pipelines, and LLM orchestration that turn language models into reliable operational tools.",
    tools: ["AI Agents", "RAG", "LangChain", "OpenAI / Claude", "Prompt Engineering"],
  },
  {
    number: "02",
    title: "Machine Learning",
    description:
      "Predictive models for demand, pricing, and logistics — built, deployed, and monitored in production.",
    tools: ["Python", "Scikit-learn", "Forecasting", "MLOps"],
  },
  {
    number: "03",
    title: "Data & Analytics Engineering",
    description:
      "Scalable pipelines, semantic models, and executive-grade analytics that operations teams actually use.",
    tools: ["SQL", "Power BI", "Data Pipelines", "Semantic Models"],
  },
  {
    number: "04",
    title: "Automation & Integration",
    description:
      "Workflow automation across approvals, reporting, and operations — connecting systems through APIs.",
    tools: ["Power Automate", "Power Apps", "REST APIs", "Workflow Design"],
  },
  {
    number: "05",
    title: "Web Engineering",
    description:
      "Modern, performant web platforms and interfaces for data products and intelligent applications.",
    tools: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
];

export default function TechStack() {
  return (
    <section
      id="stack"
      className="relative py-32 px-6 md:px-10 bg-[#08080b] overflow-hidden border-t border-white/[0.06]"
    >
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-gradient-to-r from-[#22d3ee] to-transparent" />
              <span className="text-[#22d3ee] font-mono text-[10px] uppercase tracking-[0.3em]">
                Capabilities
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold font-syne uppercase tracking-tight text-white leading-[1.02]">
              What We Build<br />
              <span className="text-zinc-500">With</span>
            </h2>
          </div>
          <p className="text-base text-zinc-400 leading-relaxed max-w-sm font-light">
            Five focused domains — from autonomous AI agents to the
            data infrastructure underneath them.
          </p>
        </motion.div>

        {/* Domain rows */}
        <div>
          {domains.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group border-t border-white/[0.08] py-10 grid md:grid-cols-[60px_1fr_1fr] gap-6 md:gap-10 hover:bg-white/[0.02] transition-colors duration-300 md:px-4 md:-mx-4 rounded-lg"
            >
              {/* Number */}
              <div className="text-sm text-zinc-600 group-hover:text-[#22d3ee] font-mono font-bold tracking-[0.2em] pt-1.5 transition-colors duration-300">
                {item.number}
              </div>

              {/* Title + description */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold font-syne uppercase tracking-tight text-white leading-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm md:text-base text-zinc-400 leading-relaxed font-light max-w-md">
                  {item.description}
                </p>
              </div>

              {/* Tool chips */}
              <div className="flex flex-wrap content-start gap-2.5 md:justify-end">
                {item.tools.map((tool) => (
                  <span
                    key={tool}
                    className="h-fit px-4 py-2 rounded-full border border-white/12 text-[11px] font-mono uppercase tracking-widest text-zinc-400 group-hover:border-[#22d3ee]/40 group-hover:text-zinc-200 transition-colors duration-300"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
