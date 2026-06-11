"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorDotRef = useRef<HTMLDivElement | null>(null);
  const cursorRingRef = useRef<HTMLDivElement | null>(null);
  const cursorTextRef = useRef<HTMLDivElement | null>(null);

  const [isVisible, setIsVisible] = useState(false);
  const [cursorText, setCursorText] = useState("");

  const mouseCoords = useRef({ x: 0, y: 0 });
  const ringCoords = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Only enable custom cursor if device has a fine pointer (desktop)
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!mediaQuery.matches) return;

    setIsVisible(true);

    const onMouseMove = (e: MouseEvent) => {
      mouseCoords.current.x = e.clientX;
      mouseCoords.current.y = e.clientY;
      
      // Instantly position the center dot (centering handled by CSS translate)
      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Check if target is interactive or has custom hover requests
      const isLink = target.closest("a") || target.closest("button") || target.closest('input[type="submit"]') || target.closest('[role="button"]');
      
      if (isLink) {
        // Expand the outer ring on hover
        if (cursorRingRef.current) {
          cursorRingRef.current.classList.add("cursor-hover");
        }
        
        // Show interactive text on cards or specific elements
        const customText = (target.closest("[data-cursor-text]") as HTMLElement)?.dataset.cursorText;
        if (customText) {
          setCursorText(customText);
          if (cursorRingRef.current) cursorRingRef.current.classList.add("cursor-has-text");
        }
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isLink = target.closest("a") || target.closest("button") || target.closest('input[type="submit"]') || target.closest('[role="button"]');
      
      if (isLink) {
        if (cursorRingRef.current) {
          cursorRingRef.current.classList.remove("cursor-hover");
          cursorRingRef.current.classList.remove("cursor-has-text");
        }
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseOver);
    window.addEventListener("mouseout", onMouseOut);

    // Smooth animation loop for the outer ring (lerp lag effect)
    let animFrameId: number;
    const updateRing = () => {
      // Linear interpolation: current + (target - current) * ease
      const ease = 0.15; // Lower values = more lag
      
      ringCoords.current.x += (mouseCoords.current.x - ringCoords.current.x) * ease;
      ringCoords.current.y += (mouseCoords.current.y - ringCoords.current.y) * ease;

      if (cursorRingRef.current) {
        cursorRingRef.current.style.transform = `translate3d(${ringCoords.current.x}px, ${ringCoords.current.y}px, 0)`;
      }

      animFrameId = requestAnimationFrame(updateRing);
    };

    animFrameId = requestAnimationFrame(updateRing);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      window.removeEventListener("mouseout", onMouseOut);
      cancelAnimationFrame(animFrameId);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Inner Dot — white + difference blend so it inverts on any background */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-white mix-blend-difference rounded-full z-[99999] pointer-events-none transition-transform duration-75 ease-out [translate:-50%_-50%]"
      />

      {/* Outer Ring */}
      <div
        ref={cursorRingRef}
        className="fixed top-0 left-0 w-10 h-10 border border-white/70 mix-blend-difference rounded-full z-[99998] pointer-events-none transition-[width,height,background-color,border-color] duration-300 ease-out flex items-center justify-center [translate:-50%_-50%]"
      >
        <span
          ref={cursorTextRef}
          className="text-[8px] font-syne font-bold uppercase tracking-widest text-white opacity-0 transition-opacity duration-300"
        >
          {cursorText}
        </span>
      </div>

      <style jsx global>{`
        /* Custom hover styles */
        .cursor-hover {
          width: 56px !important;
          height: 56px !important;
          border-color: rgba(255, 255, 255, 0.9) !important;
          background-color: rgba(255, 255, 255, 0.08) !important;
        }

        .cursor-has-text {
          width: 72px !important;
          height: 72px !important;
          background-color: #ffffff !important;
          border-color: #ffffff !important;
        }

        .cursor-has-text span {
          opacity: 1 !important;
          color: #000000 !important;
        }
      `}</style>
    </>
  );
}
