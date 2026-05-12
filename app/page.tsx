
"use client";

import React from "react";
import Lenis from "lenis";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BrainCircuit,
  Database,
  BarChart3,
  Sparkles,
  Workflow,
} from "lucide-react";

export default function Home() {
  React.useEffect(() => {
  const lenis = new Lenis();

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return () => {
    lenis.destroy();
  };
}, []);
  return (
    <main className="bg-[#f8fafc] text-[#0f172a] overflow-hidden min-h-screen relative">
      {/* Background gradients */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] bg-blue-200/40 blur-3xl rounded-full" />
        <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-cyan-200/40 blur-3xl rounded-full" />
      </div>

      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="fixed top-0 left-0 w-full z-50"
      >
        <div className="max-w-7xl mx-auto px-6 py-5">
          <div className="backdrop-blur-xl bg-white/60 border border-white/40 rounded-full px-8 py-4 flex items-center justify-between shadow-lg">
            <h1 className="font-semibold text-lg tracking-wide">
              Pankaj Kumar
            </h1>

            <div className="hidden md:flex items-center gap-8 text-sm text-slate-600">
              <a href="#about" className="hover:text-black transition">
                About
              </a>
              <a href="#skills" className="hover:text-black transition">
                Skills
              </a>
              <a href="#projects" className="hover:text-black transition">
                Projects
              </a>
              <a href="#contact" className="hover:text-black transition">
                Contact
              </a>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center px-6 pt-32">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, y: 80, filter: "blur(10px)"}}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-8 border border-blue-200">
              <Sparkles size={16} />
              AI • Analytics • Automation
            </div>

            <h1 className="text-6xl lg:text-8xl font-semibold leading-[0.95] tracking-[-0.05em]">
              Building
              <br />
              intelligent
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                data experiences.
              </span>
            </h1>

            <p className="mt-10 text-slate-600 text-lg leading-relaxed max-w-xl">
              IT Analyst at DSV specializing in enterprise analytics,
              Power BI, AI systems, automation workflows, and machine
              learning solutions.
            </p>

            <div className="mt-12 flex flex-wrap gap-4">
              <button className="group px-7 py-4 rounded-2xl bg-slate-900 text-white flex items-center gap-2 hover:scale-105 transition-all duration-300 shadow-xl">
                View Projects
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition"
                />
              </button>

              <button className="px-7 py-4 rounded-2xl border border-slate-200 bg-white/70 backdrop-blur-xl hover:bg-white transition-all duration-300 shadow-sm">
                Download Resume
              </button>
            </div>
          </motion.div>

          {/* Right Side Floating Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative h-[650px] hidden lg:block"
          >
            <FloatingCard
              className="top-0 left-0"
              icon={<BarChart3 size={28} />}
              title="Power BI"
              desc="Enterprise dashboards"
            />

            <FloatingCard
              className="top-28 right-0"
              icon={<Database size={28} />}
              title="SQL & Databricks"
              desc="ETL & data engineering"
            />

            <FloatingCard
              className="bottom-28 left-10"
              icon={<BrainCircuit size={28} />}
              title="AI/ML Systems"
              desc="Predictive intelligence"
            />

            <FloatingCard
              className="bottom-0 right-10"
              icon={<Workflow size={28} />}
              title="Automation"
              desc="Power Apps workflows"
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[350px] h-[350px] rounded-full bg-gradient-to-r from-blue-300/40 to-cyan-300/40 blur-3xl" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="max-w-7xl mx-auto px-6 py-24"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-blue-600 font-medium mb-4">
              About Me
            </p>

            <h2 className="text-5xl font-semibold tracking-tight leading-tight">
              Enterprise analytics with an AI-first mindset.
            </h2>
          </div>

          <p className="text-slate-600 text-lg leading-relaxed">
            I work on real-world business systems involving logistics,
            warehouse digitization, RFQ automation, AI agents, and
            predictive analytics. My focus is building scalable
            intelligence systems that create measurable operational
            impact.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="max-w-7xl mx-auto px-6 py-24"
      >
        <div className="flex items-end justify-between mb-14">
          <div>
            <p className="text-blue-600 font-medium mb-4">
              Core Expertise
            </p>
            <h2 className="text-5xl font-semibold tracking-tight">
              Skills & Technologies
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "Power BI",
            "SQL",
            "Python",
            "Databricks",
            "Machine Learning",
            "Power Apps",
            "Power Automate",
            "Agentic AI",
          ].map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="rounded-[32px] p-8 bg-white/70 backdrop-blur-xl border border-white shadow-lg"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-400 mb-6" />

              <h3 className="text-xl font-semibold mb-3">
                {skill}
              </h3>

              <p className="text-slate-500 text-sm leading-relaxed">
                Building scalable enterprise-grade intelligence systems.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="max-w-7xl mx-auto px-6 py-24"
      >
        <div className="mb-14">
          <p className="text-blue-600 font-medium mb-4">
            Selected Work
          </p>

          <h2 className="text-5xl font-semibold tracking-tight">
            Featured Projects
          </h2>
        </div>

        <div className="space-y-8">
          <ProjectCard
            title="Digital Gate Pass System"
            desc="Automated warehouse entry and exit management using Power Apps, Power BI, and workflow automation."
          />

          <ProjectCard
            title="RFQ AI Automation"
            desc="AI-powered workflow solution for quotation analysis, tender insights, and automation."
          />

          <ProjectCard
            title="Freight Prediction ML Model"
            desc="Machine learning model designed to predict logistics pricing using historical freight datasets."
          />
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="max-w-7xl mx-auto px-6 py-24"
      >
        <div className="rounded-[40px] p-14 bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-500/20 blur-3xl rounded-full" />

          <div className="relative z-10">
            <p className="text-blue-300 font-medium mb-4">
              Let’s Connect
            </p>

            <h2 className="text-5xl font-semibold leading-tight max-w-3xl">
              Building the future of enterprise intelligence.
            </h2>

            <p className="mt-6 text-slate-300 max-w-2xl text-lg">
              Open to AI, analytics, automation, consulting, and
              enterprise transformation opportunities.
            </p>

            <button className="mt-10 px-7 py-4 rounded-2xl bg-white text-black font-medium hover:scale-105 transition-all duration-300">
              Get In Touch
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
<div className="pointer-events-none absolute inset-0 overflow-hidden">
  <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-blue-300/20 rounded-full blur-3xl animate-pulse" />

  <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-cyan-300/20 rounded-full blur-3xl animate-pulse" />
</div>
function FloatingCard({
  icon,
  title,
  desc,
  className,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  className?: string;
}) {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 5,
        repeat: Infinity,
      }}
      className={`absolute w-[260px] rounded-[32px] bg-white/70 backdrop-blur-2xl border border-white shadow-2xl p-8 ${className}`}
    >
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center text-white mb-6">
        {icon}
      </div>

      <h3 className="text-2xl font-semibold mb-3">
        {title}
      </h3>

      <p className="text-slate-500 leading-relaxed text-sm">
        {desc}
      </p>
    </motion.div>
  );
}
function ProjectCard({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group rounded-[40px] p-10 bg-white/70 backdrop-blur-xl border border-white shadow-xl overflow-hidden relative"
    >
      <div className="absolute top-0 right-0 w-[250px] h-[250px] bg-blue-100 blur-3xl rounded-full opacity-60" />

      <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center"/>
        <div>
          <p className="text-blue-600 font-medium mb-4">
            Enterprise Project
          </p>

          <h3 className="text-4xl font-semibold mb-6 tracking-tight">
            {title}
          </h3>

          <p className="text-slate-600 text-lg leading-relaxed">
            {desc}
          </p>
        </div>

        <div className="h-[280px] rounded-[32px] bg-gradient-to-br from-slate-900 to-blue-900 relative overflow-hidden p-8">
  
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#60a5fa55,transparent_40%)]" />

  <div className="relative z-10 h-full flex flex-col justify-between">
    
    <div className="flex gap-3">
      <div className="w-3 h-3 rounded-full bg-red-400" />
      <div className="w-3 h-3 rounded-full bg-yellow-400" />
      <div className="w-3 h-3 rounded-full bg-green-400" />
    </div>

    <div className="space-y-3">
        <div className="h-4 w-[80%] rounded-full bg-white/20" />
        <div className="h-4 w-[60%] rounded-full bg-white/10" />
        <div className="h-32 rounded-2xl bg-gradient-to-r from-cyan-400/20 to-blue-500/20 border border-white/10" />
      </div>
    </div>
  </div>
    </motion.div>
  );
}
