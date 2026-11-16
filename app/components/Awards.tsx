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
    <section className="relative py-32 px-6 md:px-10 bg-paper-3 overflow-hidden border-t border-rule-2">

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">

            <h2 className="text-4xl md:text-5xl font-display font-medium text-ink leading-[1.05]">
              Awards &<br />
              <span className="text-ink">Industry Honors</span>
            </h2>
          </div>

          {/* Animated Award Count Counter */}
          <div className="flex items-center gap-4">
            <div className="text-6xl md:text-8xl font-display font-medium text-ink select-none">
              {displayCount}
            </div>
            <div className="text-xs font-display text-muted leading-relaxed">
              Design & Dev<br />Honors Won
            </div>
          </div>
        </div>

        {/* Tab Buttons */}
        <div className="flex border-b border-rule-2 mb-10 font-display text-xs gap-8">
          {Object.keys(awardData).map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setExpandedId(null);
              }}
              className={`pb-4 relative transition duration-300 ${
                activeTab === tab ? "text-ink font-bold" : "text-muted hover:text-ink"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <motion.div
                  layoutId="activeTabUnderline"
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-paper-3 text-ink"
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
                  className={`rounded-card border transition duration-300 overflow-hidden ${
                    isExpanded
                      ? "border-rule-2 bg-paper-3"
                      : "border-rule-2 bg-paper-3 hover:border-rule-2 hover:bg-paper-3"
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
                        <Trophy size={16} className={isExpanded ? "text-ink" : "text-muted"} />
                        <span className="text-xs font-display text-muted">
                          {award.year}
                        </span>
                      </div>

                      {/* Title & Project */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8 flex-1">
                        <h4 className="font-display font-medium text-ink text-base sm:text-lg">
                          {award.title}
                        </h4>
                        <p className="text-sm text-ink/80">
                          {award.project}
                        </p>
                      </div>
                    </div>

                    {/* Chevron Indicator */}
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-muted hover:text-ink shrink-0 ml-4"
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
                        <div className="px-8 pb-8 pt-2 border-t border-rule-2 grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-8 text-ink-2 text-sm md:text-base leading-relaxed">
                          <div>
                            <h5 className="text-xs font-display text-ink mb-2 font-bold">
                              Summary
                            </h5>
                            <p>{award.description}</p>
                            
                            <h5 className="text-xs font-display text-ink mt-6 mb-2 font-bold">
                              Evaluation details
                            </h5>
                            <p className="text-xs text-muted">{award.details}</p>
                          </div>

                          <div className="bg-paper-3 border border-rule-2 p-6 rounded-card h-fit space-y-4">
                            <div className="flex items-center gap-3">
                              <Star size={16} className="text-ink-2" />
                              <span className="text-xs font-display text-muted">
                                Categories Judged
                              </span>
                            </div>
                            
                            <div className="flex flex-wrap gap-2 pt-1">
                              <span className="px-2.5 py-1 rounded-full border border-rule-2 bg-paper-3 text-xs font-display text-ink-2">
                                Interface Layout
                              </span>
                              <span className="px-2.5 py-1 rounded-full border border-rule-2 bg-paper-3 text-xs font-display text-ink-2">
                                Canvas Frame Rate
                              </span>
                              <span className="px-2.5 py-1 rounded-full border border-rule-2 bg-paper-3 text-xs font-display text-ink-2">
                                Custom Physics
                              </span>
                            </div>

                            {award.score && (
                              <div className="pt-4 border-t border-rule-2 flex items-center justify-between text-xs">
                                <span className="text-muted">Score Metric:</span>
                                <span className="font-display font-medium text-ink">{award.score}</span>
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
