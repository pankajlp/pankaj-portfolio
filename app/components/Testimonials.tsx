"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "NordNeuron completely refactored our RFQ pricing workflow. What used to take our analysts three days of manual Excel tracking is now automated into an operational copilot that reasons across carrier networks in minutes. The speed of decision-making is our true competitive edge.",
    author: "Sarah Jenkins",
    role: "Director of Global Logistics",
    company: "TradeFlow Group",
  },
  {
    quote: "Pankaj has a rare engineering capability: he understands both high-throughput data pipelines and high-end client-side micro-interactions. The operational dashboards and yard visibility systems he built transformed how our warehouse team runs yard operations.",
    author: "Marcus Chen",
    role: "Head of Engineering",
    company: "FreightVantage",
  },
  {
    quote: "Instead of just drawing charts, the operational intelligence layers built by NordNeuron actually suggest actions directly within our dispatch systems. The combination of BI dashboards with LLM pipelines has given our team a single, unified brain to monitor freight profitability.",
    author: "Elena Rostova",
    role: "VP of Supply Chain Analytics",
    company: "Apex Global",
  },
];

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    setIsDragging(true);
    startX.current = e.pageX - containerRef.current.offsetLeft;
    scrollLeft.current = containerRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5; // Drag sensitivity modifier
    containerRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  return (
    <section className="relative py-32 px-6 md:px-10 bg-[#08080b] overflow-hidden border-t border-white/[0.06]">
      {/* Background Glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#7c6cff]/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#22d3ee]/30 bg-[#22d3ee]/10 text-[#22d3ee] font-mono text-[10px] uppercase tracking-widest mb-6">
            Testimonials
          </div>

          <h2 className="text-4xl md:text-6xl font-bold font-syne uppercase tracking-tight text-white leading-[1.05]">
            Client Stories<br />
            <span className="text-zinc-500">& Partners</span>
          </h2>
        </motion.div>

        {/* Drag Scroll Ticker / Carousel (Triggers Custom Cursor 'DRAG' Label) */}
        <div
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          data-cursor-text="DRAG"
          className={`flex gap-6 overflow-x-auto pb-12 cursor-grab select-none scrollbar-hide active:cursor-grabbing ${
            isDragging ? "active" : ""
          }`}
          style={{
            scrollbarWidth: "none", // Hide scrollbar for Firefox
            msOverflowStyle: "none", // Hide scrollbar for IE
          }}
        >
          {/* Scrollbar-hide utility for Chrome */}
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="min-w-[290px] sm:min-w-[420px] md:min-w-[460px] bg-white/[0.03] border border-white/10 rounded-3xl p-8 flex flex-col justify-between flex-shrink-0 backdrop-blur-sm hover:border-[#22d3ee]/30 transition-colors duration-300"
            >
              <div>
                <div className="w-10 h-10 rounded-2xl flex items-center justify-center bg-[#22d3ee]/10 border border-[#22d3ee]/25 text-[#22d3ee] mb-8">
                  <Quote size={20} className="opacity-90" />
                </div>

                <p className="text-zinc-300 text-sm sm:text-base md:text-lg leading-relaxed font-light italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="mt-8 border-t border-white/[0.08] pt-6 flex items-center justify-between">
                <div>
                  <h4 className="font-syne font-bold uppercase tracking-tight text-sm text-white">
                    {item.author}
                  </h4>
                  <p className="text-[10px] text-zinc-500 uppercase tracking-widest mt-1 font-light font-mono">
                    {item.role}
                  </p>
                </div>
                <div className="text-[10px] text-[#22d3ee] font-mono uppercase tracking-wider font-semibold">
                  {item.company}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
