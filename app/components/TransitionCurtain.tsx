"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

type TransitionState = "idle" | "entering" | "leaving";

export default function TransitionCurtain() {
  const router = useRouter();
  const [transitionState, setTransitionState] = useState<TransitionState>("idle");
  const [targetHref, setTargetHref] = useState("");

  useEffect(() => {
    const handleStart = (e: Event) => {
      const customEvent = e as CustomEvent<{ href: string }>;
      setTargetHref(customEvent.detail.href);
      setTransitionState("entering");
    };

    window.addEventListener("page-transition-start", handleStart);
    return () => {
      window.removeEventListener("page-transition-start", handleStart);
    };
  }, []);

  const handleAnimationComplete = () => {
    if (transitionState === "entering" && targetHref) {
      // Trigger Next.js router navigation
      router.push(targetHref);
      
      // Let the navigation load and page render, then wipe out to top
      setTimeout(() => {
        setTransitionState("leaving");
      }, 150);
    } else if (transitionState === "leaving") {
      // Transition complete, reset to idle (bottom of screen) instantly
      setTransitionState("idle");
      setTargetHref("");
    }
  };

  // Define dynamic Y coordinates for each state
  const getY = () => {
    switch (transitionState) {
      case "entering":
        return "0%";
      case "leaving":
        return "-100%";
      case "idle":
      default:
        return "100%";
    }
  };

  // Turn off transitions when moving back to idle to avoid sliding animation back down
  const getTransition = () => {
    if (transitionState === "idle") {
      return { duration: 0 };
    }
    return { duration: 0.6, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] };
  };

  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: getY() }}
      transition={getTransition()}
      onAnimationComplete={handleAnimationComplete}
      className="fixed inset-0 z-[9999] bg-[#f5f4f0] pointer-events-none"
    />
  );
}
