"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, ChevronDown, Calendar, Star } from "lucide-react";

interface AwardItem {
  id: string;
  title: string;
  project: string;
  year: string;
  description: string;
  details: string;
  score?: string;
}

const awardData: Record<string, AwardItem[]> = {
  Awwwards: [
    {
      id: "aw-1",
      title: "Site of the Day",
      project: "NordNeuron Enterprise Intelligence",
      year: "2026",
      description: "Recognized for exceptional visual design, creativity, and front-end engineering performance.",
      details: "Judged by international design experts on usability, graphic styling, layout, typography, and canvas graphics rendering speeds.",
      score: "8.65 / 10",
    },
    {
      id: "aw-2",
      title: "Developer Award",
      project: "Freight Intelligence Platform",
      year: "2026",
      description: "Awarded for advanced engineering practices, React architecture, and real-time visualization performance.",
      details: "Evaluated on codebase structures, clean styling guidelines, page loading speed indexes, and smooth grid component layouts.",
      score: "Developer Choice",
    },
    {
      id: "aw-3",
      title: "Honorable Mention",
      project: "Gate Operations Control System",
      year: "2025",
      description: "Selected for high-end aesthetic presentation and smooth interactive animations.",
      details: "Featured in the international web design inspiration catalog for custom cursor physics and layout transitions.",
      score: "Honorable Mention",
    },
  ],
  FWA: [
    {
      id: "fwa-1",
      title: "FWA of the Day",
      project: "RFQ Intelligence AI Engine",
      year: "2026",
      description: "Recognized for cutting-edge UI design, custom interactive components, and real-time LLM feedback loops.",
      details: "Given by the FWA industry panel for creative thinking, high-speed interaction rendering, and user experience excellence.",
    },
    {
      id: "fwa-2",
      title: "FWA of the Month",
      project: "NordNeuron Digital Ecosystem",
      year: "2026",
      description: "Nominated for monthly design honors due to high interactive complexity and immersive layouts.",
      details: "Top-voted portfolio entry showcasing WebGL canvas grid layouts and inertial scrolling implementations.",
    },
  ],
  Webby: [
    {
      id: "web-1",
      title: "Best Visual Design (Web)",
      project: "Operational Analytics Dashboard",
      year: "2026",
      description: "Winner of the Webby award for professional portfolio layouts, typography hierarchies, and dark aesthetics.",
      details: "Honoring excellence in online visual presentation, branding aesthetics, color harmonies, and responsive design systems.",
    },
    {
      id: "web-2",
      title: "Webby Nominee",
      project: "NordNeuron Labs Experiments",
      year: "2026",
      description: "Selected as one of the top five globally in the science and technology category for interactive research projects.",
      details: "Reviewed for content clarity, technical innovations, and design accessibility standard compliance.",
    },
  ],
};

export default function Awards() {
  const [activeTab, setActiveTab] = useState<string>("Awwwards");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [displayCount, setDisplayCount] = useState<number>(0);

  const activeAwards = awardData[activeTab] || [];
  const targetCount = activeAwards.length;

  // Animated Count-Up effect
  useEffect(() => {
    setDisplayCount(0);
    let start = 0;
    const duration = 500; // ms
    const stepTime = Math.abs(Math.floor(duration / targetCount)) || 50;
    
    const timer = setInterval(() => {
      start += 1;
      setDisplayCount(start);
      if (start >= targetCount) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [activeTab, targetCount]);

  const toggleRow = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="relative py-32 px-6 md:px-10 bg-[#f5f4f0] overflow-hidden border-t border-stone-200">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-stone-1000/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-stone-200 bg-white/50 text-stone-900 font-syne text-[10px] uppercase tracking-widest mb-6">
              Recognition
            </div>

            <h2 className="text-4xl md:text-6xl font-bold font-syne uppercase tracking-tight text-stone-900 leading-[1.05]">
              Awards &<br />
              <span className="text-stone-900">Industry Honors</span>
            </h2>
          </div>

          {/* Animated Award Count Counter */}
          <div className="flex items-center gap-4">
            <div className="text-7xl md:text-8xl font-syne font-bold text-stone-900 select-none">
              {displayCount}
            </div>
            <div className="text-xs uppercase font-syne tracking-widest text-stone-400 leading-relaxed">
              Design & Dev<br />Honors Won
            </div>
          </div>
        </div>

        {/* Tab Buttons */}
        <div className="flex border-b border-stone-200 mb-10 font-syne text-xs uppercase tracking-widest gap-8">
          {Object.keys(awardData).map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setExpandedId(null);
              }}
              className={`pb-4 relative transition-all duration-300 ${
                activeTab === tab ? "text-stone-900 font-bold" : "text-stone-400 hover:text-stone-800"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <motion.div
                  layoutId="activeTabUnderline"
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-stone-900 text-white"
                />
              )}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {activeAwards.map((award) => {
              const isExpanded = expandedId === award.id;

              return (
                <motion.div
                  key={award.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                    isExpanded
                      ? "border-stone-450/25 bg-white shadow-[0_8px_30px_rgba(15,23,42,0.03)]"
                      : "border-stone-200/80 bg-white/60 hover:border-stone-400 hover:bg-white/95"
                  }`}
                >
                  {/* Row Header */}
                  <div
                    onClick={() => toggleRow(award.id)}
                    data-cursor-text="VIEW"
                    className="p-8 flex items-center justify-between cursor-pointer select-none"
                  >
                    <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 flex-1">
                      {/* Year Icon */}
                      <div className="flex items-center gap-2 shrink-0">
                        <Trophy size={16} className={isExpanded ? "text-stone-900" : "text-stone-400"} />
                        <span className="text-xs font-syne text-stone-400 tracking-wider">
                          {award.year}
                        </span>
                      </div>

                      {/* Title & Project */}
                      <div className="grid md:grid-cols-2 gap-2 md:gap-8 flex-1">
                        <h4 className="font-syne font-bold uppercase tracking-tight text-stone-900 text-base sm:text-lg">
                          {award.title}
                        </h4>
                        <p className="text-sm font-light text-stone-900/80">
                          {award.project}
                        </p>
                      </div>
                    </div>

                    {/* Chevron Indicator */}
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-stone-400 hover:text-stone-700 shrink-0 ml-4"
                    >
                      <ChevronDown size={18} />
                    </motion.div>
                  </div>

                  {/* Expanded Content Accordion */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-8 pb-8 pt-2 border-t border-stone-200/60 grid md:grid-cols-[1.3fr_1fr] gap-8 text-stone-500 text-sm md:text-base font-light leading-relaxed">
                          <div>
                            <h5 className="text-[10px] uppercase font-syne tracking-widest text-stone-900 mb-2 font-bold">
                              Summary
                            </h5>
                            <p>{award.description}</p>
                            
                            <h5 className="text-[10px] uppercase font-syne tracking-widest text-stone-900 mt-6 mb-2 font-bold">
                              Evaluation details
                            </h5>
                            <p className="text-xs text-stone-400">{award.details}</p>
                          </div>

                          <div className="bg-stone-50 border border-stone-200/60 p-6 rounded-2xl h-fit space-y-4">
                            <div className="flex items-center gap-3">
                              <Star size={16} className="text-stone-600" />
                              <span className="text-[10px] uppercase font-syne tracking-wider text-stone-400">
                                Categories Judged
                              </span>
                            </div>
                            
                            <div className="flex flex-wrap gap-2 pt-1">
                              <span className="px-2.5 py-1 rounded-full border border-stone-200 bg-white text-[10px] font-syne uppercase text-stone-500">
                                Interface Layout
                              </span>
                              <span className="px-2.5 py-1 rounded-full border border-stone-200 bg-white text-[10px] font-syne uppercase text-stone-500">
                                Canvas Frame Rate
                              </span>
                              <span className="px-2.5 py-1 rounded-full border border-stone-200 bg-white text-[10px] font-syne uppercase text-stone-500">
                                Custom Physics
                              </span>
                            </div>

                            {award.score && (
                              <div className="pt-4 border-t border-stone-200 flex items-center justify-between text-xs">
                                <span className="text-stone-400">Score Metric:</span>
                                <span className="font-syne font-bold text-stone-900">{award.score}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
