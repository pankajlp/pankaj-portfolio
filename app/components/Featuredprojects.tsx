"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BrainCircuit,
  BarChart3,
  Workflow,
} from "lucide-react";

const projects = [
  {
    title: "Freight Intelligence Platform",

    category: "Strategic Analytics Platform",

    description:
      "Enterprise analytics platform for monitoring freight profitability, RFQ trends, operational intelligence, and AI-driven logistics insights.",

    icon: BarChart3,

    link: "/projects/freight-intelligence",

    stack: ["Power BI", "DAX", "SQL"],
  },

  {
    title: "Gate Operations Platform",

    category: "Operational Control System",

    description:
      "Enterprise access control and logistics workflow platform for real-time vehicle tracking, dock visibility, operational automation, and AI-assisted warehouse monitoring.",

    icon: Workflow,

    link: "/projects/gate-operations",

    stack: [
      "Power Apps",
      "Power Automate",
      "SharePoint",
    ],
  },

  {
    title: "RFQ Intelligence Platform",

    category: "AI Procurement Engine",

    description:
      "AI-powered procurement intelligence system for RFQ processing, tender analytics, bid optimization, and operational automation across logistics workflows.",

    icon: BrainCircuit,

    link: "/projects/rfq-intelligence",

    stack: [
      "Python",
      "LLMs",
      "Automation",
    ],
  },
];

export default function FeaturedProjects() {
  return (
    <section
      id="work"
      className="relative py-32 px-6 md:px-10 bg-black overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-[160px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 text-sm mb-6">
            Featured Work
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Enterprise Projects
            <span className="block text-cyan-400">
              & AI Systems
            </span>
          </h2>

          <p className="mt-6 text-lg text-white/60 leading-relaxed max-w-2xl">
            Selected work focused on web development, analytics engineering,
            intelligent automation, logistics systems,
            and enterprise AI workflows.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="mt-20 grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;

            const Card = (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                }}
                className="group relative rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl overflow-hidden hover:border-cyan-400/20 transition-all duration-300"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-cyan-400/[0.02] opacity-0 group-hover:opacity-100 transition-all duration-500" />

                <div className="relative z-10 p-8">
                  
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-cyan-400/10 border border-cyan-400/20 mb-8">
                    <Icon className="text-cyan-400" size={28} />
                  </div>
                    {/* Category */}
                    <div className="inline-flex px-4 py-2 rounded-full border border-white/10 bg-black/30 text-xs text-white/50">
                    {project.category}
                    </div>
                  {/* Title */}
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-semibold text-white leading-snug">
                      {project.title}
                    </h3>

                    <ArrowUpRight
                      className="text-white/30 group-hover:text-cyan-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                      size={22}
                    />
                  </div>

                  {/* Description */}
                  <p className="mt-5 text-white/60 leading-relaxed">
                    {project.description}
                  </p>

                  {/* CTA */}
                  {project.link && (
                    <p className="mt-6 text-cyan-300 text-sm">
                      View Platform →
                    </p>
                  )}

                  {/* Stack */}
                  <div className="mt-8 flex flex-wrap gap-3">
                    {project.stack.map((tech) => (
                      <div
                        key={tech}
                        className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-sm text-white/70"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>

                  {/* Bottom Line */}
                  <div className="mt-10 h-px w-full bg-gradient-to-r from-cyan-400/40 to-transparent" />
                </div>
              </motion.div>
            );

            if (project.link) {
              return (
                <a
                  key={project.title}
                  href={project.link}
                  className="block"
                >
                  {Card}
                </a>
              );
            }

            return (
              <div key={project.title}>
                {Card}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}