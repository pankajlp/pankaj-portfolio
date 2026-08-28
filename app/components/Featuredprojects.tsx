"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { getProjects } from "../lib/prismic";

const videoMap: Record<string, string> = {
  "NordNeuron Logistics AI Suite": "https://assets.mixkit.co/videos/preview/mixkit-blockchain-connection-network-concept-loopable-34283-large.mp4",
  "Freight Intelligence Platform": "https://assets.mixkit.co/videos/preview/mixkit-abstract-laser-lights-background-31732-large.mp4",
  "Gate Operations Platform": "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-screens-and-numbers-31907-large.mp4",
  "RFQ Intelligence Platform": "https://assets.mixkit.co/videos/preview/mixkit-blockchain-connection-network-concept-loopable-34283-large.mp4",
};

interface Project {
  title: string;
  category: string;
  description: string;
  link: string;
  stack: string[];
}

export default function FeaturedProjects() {
  const [projectList, setProjectList] = useState<Project[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  const cursorX = useMotionValue(-200);
  const cursorY = useMotionValue(-200);
  const springX = useSpring(cursorX, { stiffness: 200, damping: 25 });
  const springY = useSpring(cursorY, { stiffness: 200, damping: 25 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [cursorX, cursorY]);

  useEffect(() => {
    async function loadData() {
      const data = await getProjects();
      setProjectList(data);
    }
    loadData();
  }, []);

  const handleMouseEnter = (title: string, index: number) => {
    setHoveredIndex(index);
    const video = videoRefs.current[title];
    if (video) video.play().catch(() => {});
  };

  const handleMouseLeave = (title: string) => {
    setHoveredIndex(null);
    const video = videoRefs.current[title];
    if (video) video.pause();
  };

  return (
    <section
      id="work"
      className="relative bg-[#0f0e0d] overflow-hidden"
    >
      {/* Floating video preview that follows cursor */}
      <motion.div
        className="fixed pointer-events-none z-[100] w-[340px] h-[220px] rounded-2xl overflow-hidden"
        style={{
          left: springX,
          top: springY,
          x: "-50%",
          y: "-50%",
          opacity: hoveredIndex !== null ? 1 : 0,
          scale: hoveredIndex !== null ? 1 : 0.85,
          transition: "opacity 0.3s ease, scale 0.3s ease",
        }}
      >
        {projectList.map((project) => {
          const videoUrl = videoMap[project.title];
          return (
            <video
              key={project.title}
              ref={(el) => { videoRefs.current[project.title] = el; }}
              src={videoUrl}
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              style={{
                display: hoveredIndex !== null && projectList[hoveredIndex]?.title === project.title ? "block" : "none",
              }}
            />
          );
        })}
      </motion.div>

      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-28 pb-12 border-b border-white/[0.06]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/10 text-stone-500 font-syne text-[10px] uppercase tracking-widest mb-6">
              Featured Work
            </div>
            <h2 className="text-5xl md:text-7xl font-bold font-syne uppercase tracking-tight text-white leading-[0.95]">
              Selected<br />
              <span className="text-stone-500">Projects</span>
            </h2>
          </div>
          <p className="text-stone-500 text-sm md:text-base leading-relaxed max-w-xs font-light">
            Enterprise AI systems, logistics intelligence, and operational platforms.
          </p>
        </motion.div>
      </div>

      {/* Project List */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 pb-28">
        {projectList.map((project, index) => {
          const isHovered = hoveredIndex === index;

          const RowContent = (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => handleMouseEnter(project.title, index)}
              onMouseLeave={() => handleMouseLeave(project.title)}
              className="group relative border-b border-white/[0.06] py-10 md:py-12 flex items-center justify-between gap-6 cursor-none"
              style={{ opacity: hoveredIndex !== null && !isHovered ? 0.35 : 1, transition: "opacity 0.4s ease" }}
            >
              {/* Left: number + title */}
              <div className="flex items-center gap-6 md:gap-10 min-w-0">
                <span className="text-stone-700 font-syne text-xs tracking-widest shrink-0 w-8">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <h3 className={`text-2xl md:text-4xl lg:text-5xl font-bold font-syne uppercase tracking-tight leading-none transition-colors duration-300 ${isHovered ? "text-white" : "text-stone-300"}`}>
                    {project.title}
                  </h3>
                  <p className="mt-2 text-stone-600 text-sm font-light leading-relaxed max-w-xl hidden md:block">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Right: category + arrow */}
              <div className="flex items-center gap-6 shrink-0">
                <span className="hidden lg:block text-stone-600 font-syne text-[10px] uppercase tracking-widest">
                  {project.category}
                </span>
                <div className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${isHovered ? "border-white bg-white" : "border-white/10 bg-transparent"}`}>
                  <ArrowUpRight
                    size={16}
                    className={`transition-colors duration-300 ${isHovered ? "text-black" : "text-stone-600"}`}
                  />
                </div>
              </div>
            </motion.div>
          );

          return project.link ? (
            <Link key={project.title} href={project.link} className="block">
              {RowContent}
            </Link>
          ) : (
            <div key={project.title}>{RowContent}</div>
          );
        })}
      </div>
    </section>
  );
}
