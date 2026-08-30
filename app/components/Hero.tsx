"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { gsap } from "gsap";
import SplitText from "./SplitText";

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isHeroVisible = useRef(true);
  const renderFrameId = useRef<number | null>(null);

  // GSAP Text Stagger
  useEffect(() => {
    gsap.to(".hero-char", {
      transform: "translateY(0%)",
      duration: 1.0,
      stagger: 0.015,
      ease: "power4.out",
      delay: 0.2,
    });
  }, []);

  // 3D Canvas animation loop with IntersectionObserver optimization
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates (interpolated for smoothness)
    const mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };
    
    // Scroll depth tracker
    let scrollY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Generate 3D grid particles
    const rows = 35;
    const cols = 35;
    const spacing = 45; // Spacing between grid points
    const particles: { x: number; y: number; z: number; ox: number; oz: number }[] = [];

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = (c - cols / 2) * spacing;
        const z = (r - rows / 2) * spacing;
        particles.push({
          x: x,
          y: 0,
          z: z,
          ox: x,
          oz: z,
        });
      }
    }

    const focalLength = 350;

    // Canvas render loop
    const render = () => {
      if (!isHeroVisible.current) return;

      // Clear canvas with the base ground color
      ctx.fillStyle = "rgba(8, 8, 11, 1)";
      ctx.fillRect(0, 0, width, height);

      // Lerp mouse coordinates
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      const time = Date.now() * 0.0008;

      // Compute rotation angles based on mouse and scroll
      const angleY = (mouse.x - width / 2) * 0.0004;
      const angleX = -0.6 + (mouse.y - height / 2) * 0.0003 + scrollY * 0.0005;

      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);

      const projected: { sx: number; sy: number; alpha: number; visible: boolean }[] = [];

      particles.forEach((p) => {
        // Calculate dynamic wave amplitude
        const wave = Math.sin(p.ox * 0.006 + time) * Math.cos(p.oz * 0.006 + time) * 35;
        p.y = wave + Math.sin(time + p.ox * 0.01) * 10;

        // Apply 3D Rotations
        // 1. Rotate around Y axis
        let rx1 = p.ox * cosY - p.oz * sinY;
        let rz1 = p.ox * sinY + p.oz * cosY;
        let ry1 = p.y;

        // 2. Rotate around X axis
        let ry2 = ry1 * cosX - rz1 * sinX;
        let rz2 = ry1 * sinX + rz1 * cosX;
        let rx2 = rx1;

        // Shift camera offset
        const camZ = 550;
        const camY = 120;
        const tz = rz2 + camZ;
        const ty = ry2 - camY;
        const tx = rx2;

        if (tz > 50) {
          const scale = focalLength / tz;
          const sx = width / 2 + tx * scale;
          const sy = height / 2 + ty * scale;

          // Depth alpha fading
          const alpha = Math.max(0, Math.min(0.65, (1 - (tz - 200) / 700)));
          
          projected.push({ sx, sy, alpha, visible: sx >= 0 && sx <= width && sy >= 0 && sy <= height });
        } else {
          projected.push({ sx: 0, sy: 0, alpha: 0, visible: false });
        }
      });

      // Draw Connection Mesh Lines
      ctx.lineWidth = 0.5;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const idx = r * cols + c;
          const curr = projected[idx];
          if (!curr || !curr.visible) continue;

          // Draw line to right neighbor
          if (c < cols - 1) {
            const right = projected[idx + 1];
            if (right && right.visible) {
              ctx.strokeStyle = `rgba(110, 125, 150, ${Math.min(curr.alpha, right.alpha) * 0.16})`;
              ctx.beginPath();
              ctx.moveTo(curr.sx, curr.sy);
              ctx.lineTo(right.sx, right.sy);
              ctx.stroke();
            }
          }

          // Draw line to bottom neighbor
          if (r < rows - 1) {
            const bottom = projected[idx + cols];
            if (bottom && bottom.visible) {
              ctx.strokeStyle = `rgba(110, 125, 150, ${Math.min(curr.alpha, bottom.alpha) * 0.16})`;
              ctx.beginPath();
              ctx.moveTo(curr.sx, curr.sy);
              ctx.lineTo(bottom.sx, bottom.sy);
              ctx.stroke();
            }
          }

          // Draw Particle Point — cyan-lit nodes
          ctx.fillStyle = `rgba(34, 211, 238, ${curr.alpha * 0.7})`;
          ctx.beginPath();
          ctx.arc(curr.sx, curr.sy, 1.2 * curr.alpha + 0.3, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      renderFrameId.current = requestAnimationFrame(render);
    };

    // Set up IntersectionObserver to pause rendering when out of view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isHeroVisible.current = entry.isIntersecting;
          if (entry.isIntersecting) {
            // Resume rendering loop
            if (renderFrameId.current) cancelAnimationFrame(renderFrameId.current);
            render();
          } else {
            // Cancel loop to save resources
            if (renderFrameId.current) {
              cancelAnimationFrame(renderFrameId.current);
              renderFrameId.current = null;
            }
          }
        });
      },
      { threshold: 0.05 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
      if (renderFrameId.current) {
        cancelAnimationFrame(renderFrameId.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-transparent px-6 md:px-10 pt-32 pb-28"
    >
      {/* 3D WebGL-Style Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none z-0"
      />

      {/* Background Glow */}
      <div className="absolute top-[-220px] left-1/2 -translate-x-1/2 w-[900px] h-[620px] bg-[#22d3ee]/10 blur-[190px] rounded-full pointer-events-none z-0" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none z-0">
        <div className="h-full w-full bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Bottom fade into page */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#08080b] to-transparent pointer-events-none z-0" />

      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col items-start justify-center mt-10">
        
        {/* Main Display Headline */}
        <div className="w-full text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-12 h-px bg-gradient-to-r from-[#22d3ee] to-transparent" />
            <span className="text-[#22d3ee] font-mono text-[10px] uppercase tracking-[0.3em]">
              AI Systems · Analytics · Automation
            </span>
          </motion.div>

          <div className="block">
            <SplitText
              text={"WHERE DATA\nBECOMES"}
              charClass="hero-char"
              className="font-syne font-bold uppercase tracking-tighter leading-[0.9] text-[48px] sm:text-[72px] md:text-[100px] lg:text-[116px] text-white"
            />
          </div>
          <div className="block mt-2">
            <SplitText
              text="DECISION."
              charClass="hero-char"
              className="font-syne font-bold uppercase tracking-tighter leading-[0.9] text-[48px] sm:text-[72px] md:text-[100px] lg:text-[116px] text-[#22d3ee]"
            />
          </div>

          {/* Subtitle & Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="mt-12 max-w-2xl text-left"
          >
            <p className="text-base md:text-lg text-zinc-400 leading-relaxed font-light">
              NordNeuron designs intelligent decision systems, predictive logistics platforms,
              and AI-driven operations for enterprise teams—merging data engineering
              with modern machine reasoning.
            </p>
          </motion.div>

          {/* Interactive CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
            className="mt-12 flex flex-wrap gap-4"
          >
            <Link
              href="/#work"
              className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#22d3ee] text-[#041014] font-mono text-xs uppercase tracking-widest hover:bg-[#67e8f9] transition-all duration-300 shadow-[0_0_30px_rgba(34,211,238,0.28)]"
            >
              Explore Work
              <ArrowUpRight
                size={16}
                strokeWidth={2.5}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
              />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/15 bg-white/[0.03] text-white font-mono text-xs uppercase tracking-widest hover:border-[#22d3ee] hover:text-[#22d3ee] transition-all duration-300"
            >
              Let’s Connect
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/[0.08]">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
          <div className="flex items-center gap-8 sm:gap-12">
            <div className="flex items-center gap-3">
              <span className="text-2xl font-syne font-bold text-white tabular-nums">12+</span>
              <span className="text-[9px] uppercase font-mono tracking-widest text-zinc-500 leading-tight">AI<br/>Projects</span>
            </div>
            <div className="w-px h-5 bg-white/10" />
            <div className="flex items-center gap-3">
              <span className="text-2xl font-syne font-bold text-white tabular-nums">3</span>
              <span className="text-[9px] uppercase font-mono tracking-widest text-zinc-500 leading-tight">Active<br/>Products</span>
            </div>
            <div className="hidden sm:block w-px h-5 bg-white/10" />
            <div className="hidden sm:flex items-center gap-3">
              <span className="text-sm font-syne font-semibold text-zinc-200">LLM · BI · MLOps</span>
              <span className="text-[9px] uppercase font-mono tracking-widest text-zinc-500 leading-tight">Core<br/>Stack</span>
            </div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="flex items-center gap-2 text-zinc-500"
          >
            <span className="font-mono text-[9px] uppercase tracking-widest hidden sm:block">Scroll</span>
            <div className="w-px h-8 bg-white/15 relative overflow-hidden rounded-full">
              <motion.div
                className="absolute top-0 left-0 w-full bg-[#22d3ee] rounded-full"
                style={{ height: "40%" }}
                animate={{ y: ["0%", "160%", "0%"] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}