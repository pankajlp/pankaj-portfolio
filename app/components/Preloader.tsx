"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Disable scroll during loading
    document.body.style.overflow = "hidden";

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoading(false);
            document.body.style.overflow = "";
          }, 600); // Small pause at 100% for aesthetic release
          return 100;
        }
        // Realistic step speed variation
        const remaining = 100 - prev;
        const step = Math.max(1, Math.min(remaining, Math.floor(Math.random() * 8) + 1));
        return prev + step;
      });
    }, 40);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-paper overflow-hidden"
        >
          {/* Subtle Background Grid Overlay */}
          <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
            
          </div>


          {/* Background Big Progress Text (Noomo Style) */}
          <div className="absolute bottom-8 right-8 pointer-events-none select-none overflow-hidden">
            <h1 className="font-display font-medium leading-none text-[15vw] md:text-[12vw] text-rule-2 select-none">
              {progress.toString().padStart(3, "0")}%
            </h1>
          </div>

          {/* Center Content */}
          <div className="relative z-10 flex flex-col items-center">
            
            {/* SVG Logo Drawing Animation */}
            <svg
              width="100"
              height="100"
              viewBox="0 0 100 100"
              aria-hidden="true"
              className="text-ink"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {/* Outer hexagonal shape or neural network lines */}
              <motion.polygon
                points="50,15 80,32 80,68 50,85 20,68 20,32"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2.2, ease: "easeInOut" }}
              />
              {/* Inner connection pathways */}
              <motion.path
                d="M50,15 L50,50 L80,68 M50,50 L20,68 M50,50 L50,85"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2.5, ease: "easeInOut", delay: 0.3 }}
              />
              {/* Core active node */}
              <motion.circle
                cx="50"
                cy="50"
                r="4"
                fill="var(--color-accent)"
                stroke="none"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: [0, 1.3, 1], opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                              />
            </svg>

            {/* Brand Label Reveal */}
            <div className="mt-8 overflow-hidden h-[24px]">
              <motion.p
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1], delay: 0.4 }}
                className="font-display font-medium text-xs text-ink"
              >
                NordNeuron
              </motion.p>
            </div>

            {/* Muted Status Text */}
            <div className="mt-2 overflow-hidden h-[16px]">
              <motion.p
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 0.4 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                className="text-xs text-muted"
              >
                Initializing Intelligence Systems
              </motion.p>
            </div>
          </div>

          {/* Loading bar in center */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-paper-3 pointer-events-none">
            <motion.div
              className="h-full bg-accent"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.05 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
