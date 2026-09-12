"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  const [isVisible, setIsVisible] = useState(false);

  // Target (true mouse) vs the ring's eased position.
  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const state = useRef({ hover: false, down: false, active: false });

  useEffect(() => {
    // Desktop / fine-pointer only.
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!mq.matches) return;
    setIsVisible(true);

    const onMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      // The precise dot tracks the pointer exactly — clicks land where you expect.
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
      if (!state.current.active) {
        state.current.active = true;
        // Snap the ring to the cursor on first move so it doesn't fly in.
        ring.current.x = e.clientX;
        ring.current.y = e.clientY;
        document.body.classList.add("cursor-active");
      }
    };

    const isInteractive = (t: EventTarget | null) => {
      const el = t as HTMLElement | null;
      return !!el?.closest?.(
        'a, button, [role="button"], label, summary, input, textarea, select'
      );
    };

    const onOver = (e: MouseEvent) => {
      state.current.hover = isInteractive(e.target);
      ringRef.current?.classList.toggle("cursor-hover", state.current.hover);
    };
    const onDown = () => {
      state.current.down = true;
      ringRef.current?.classList.add("cursor-down");
    };
    const onUp = () => {
      state.current.down = false;
      ringRef.current?.classList.remove("cursor-down");
    };
    const onLeave = () => document.body.classList.add("cursor-hidden");
    const onEnter = () => document.body.classList.remove("cursor-hidden");

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    // Smoothly ease the ring toward the pointer.
    let raf = 0;
    const loop = () => {
      const ease = 0.2;
      ring.current.x += (mouse.current.x - ring.current.x) * ease;
      ring.current.y += (mouse.current.y - ring.current.y) * ease;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(raf);
      document.body.classList.remove("cursor-active", "cursor-hidden");
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div ref={dotRef} className="nn-cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="nn-cursor-ring" aria-hidden="true" />

      <style jsx global>{`
        .nn-cursor-dot,
        .nn-cursor-ring {
          position: fixed;
          top: 0;
          left: 0;
          z-index: 99999;
          pointer-events: none;
          border-radius: 9999px;
          opacity: 0;
          will-change: transform;
        }

        /* fade in once the pointer is on the page */
        .cursor-active .nn-cursor-dot,
        .cursor-active .nn-cursor-ring {
          opacity: 1;
        }
        .cursor-hidden .nn-cursor-dot,
        .cursor-hidden .nn-cursor-ring {
          opacity: 0;
        }

        .nn-cursor-dot {
          width: 6px;
          height: 6px;
          background: #c8a86b;
          transition: opacity 0.25s ease, width 0.2s ease, height 0.2s ease;
        }

        .nn-cursor-ring {
          width: 34px;
          height: 34px;
          border: 1.5px solid rgba(200, 168, 107, 0.55);
          background: rgba(200, 168, 107, 0);
          transition: opacity 0.25s ease, width 0.25s ease, height 0.25s ease,
            background-color 0.25s ease, border-color 0.25s ease;
        }

        /* hovering something clickable: ring grows and fills faintly */
        .nn-cursor-ring.cursor-hover {
          width: 52px;
          height: 52px;
          border-color: rgba(200, 168, 107, 0.9);
          background: rgba(200, 168, 107, 0.08);
        }

        /* click feedback: ring dips inward */
        .nn-cursor-ring.cursor-down {
          width: 26px;
          height: 26px;
          background: rgba(200, 168, 107, 0.14);
        }

        @media (prefers-reduced-motion: reduce) {
          .nn-cursor-ring {
            transition: opacity 0.25s ease;
          }
        }
      `}</style>
    </>
  );
}
