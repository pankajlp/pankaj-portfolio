"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, X } from "lucide-react";
import TransitionLink from "./TransitionLink";

type NavItem = {
  label: string;
  href: string;
  /** id of the on-homepage section this links to, if any */
  section?: string;
};

// Grouped for clarity: on-page sections first, then standalone pages.
const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "/#about", section: "about" },
  { label: "Work", href: "/#work", section: "work" },
  { label: "Stack", href: "/#stack", section: "stack" },
  { label: "Labs", href: "/labs" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const navRef = useRef<HTMLElement | null>(null);
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState(false);

  // Shrink / solidify the bar once the user scrolls past the hero fold.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scrollspy: highlight the section currently in view (homepage only).
  // Off the homepage we simply don't observe; `isActive` already gates the
  // highlight on `pathname === "/"`, so the last value is never shown.
  useEffect(() => {
    if (pathname !== "/") return;

    const ids = ["about", "work", "stack"];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [pathname]);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (item: NavItem) => {
    if (item.section) return pathname === "/" && activeSection === item.section;
    return pathname === item.href || pathname.startsWith(`${item.href}/`);
  };

  return (
    <>
      <motion.nav
        ref={navRef}
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 w-full z-50 border-b transition-all duration-500 ${
          scrolled || menuOpen
            ? "border-white/10 bg-[#0c0b0a]/85 backdrop-blur-xl"
            : "border-transparent bg-[#0c0b0a]/40 backdrop-blur-md"
        }`}
      >
        <div
          className={`max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between transition-all duration-500 ${
            scrolled ? "h-[70px]" : "h-[88px]"
          }`}
        >
          {/* Logo */}
          <TransitionLink
            href="/"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-3 shrink-0"
          >
            <NordNeuronMark />
          </TransitionLink>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item);
              return (
                <TransitionLink
                  key={item.label}
                  href={item.href}
                  className={`relative px-3.5 py-2 font-mono text-[11px] uppercase tracking-[0.18em] transition-colors duration-300 ${
                    active ? "text-[#f2ede3]" : "text-[#a89f8f] hover:text-[#f2ede3]"
                  }`}
                >
                  {item.label}
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute left-3.5 right-3.5 -bottom-0.5 h-px bg-[#c8a86b] shadow-[0_0_10px_#c8a86b]"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                </TransitionLink>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <TransitionLink
            href="/contact"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-mono text-[10px] uppercase tracking-[0.18em] text-[#171310] bg-[#c8a86b] border border-[#c8a86b] hover:bg-[#d8bd86] hover:border-[#d8bd86] transition-all duration-300 shadow-[0_0_24px_rgba(200, 168, 107,0.3)]"
          >
            Start a Project
            <ArrowUpRight size={13} strokeWidth={2.5} />
          </TransitionLink>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/10 text-[#f2ede3] hover:border-[#c8a86b] hover:text-[#c8a86b] transition-colors duration-300"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[120] md:hidden bg-[#0c0b0a] backdrop-blur-xl"
          >
            {/* accent aura */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_40%_at_50%_0%,rgba(200, 168, 107,0.12),transparent_70%)]" />

            {/* Overlay header (logo + close) */}
            <div className="relative flex items-center justify-between h-[88px] px-6">
              <TransitionLink href="/" onClick={() => setMenuOpen(false)} className="shrink-0">
                <NordNeuronMark />
              </TransitionLink>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/10 text-[#f2ede3] hover:border-[#c8a86b] hover:text-[#c8a86b] transition-colors duration-300"
              >
                <X size={18} />
              </button>
            </div>

            <nav className="relative flex flex-col justify-center h-[calc(100%-88px)] px-8 gap-1">
              {NAV_ITEMS.map((item, i) => {
                const active = isActive(item);
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.05, duration: 0.4 }}
                  >
                    <TransitionLink
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="group flex items-baseline gap-4 py-3 border-b border-white/[0.06]"
                    >
                      <span className="font-mono text-[11px] text-[#c8a86b] tabular-nums w-8">
                        0{i + 1}
                      </span>
                      <span
                        className={`font-syne font-medium tracking-tight text-4xl transition-colors duration-300 ${
                          active ? "text-[#c8a86b]" : "text-[#f2ede3] group-hover:text-[#c8a86b]"
                        }`}
                      >
                        {item.label}
                      </span>
                    </TransitionLink>
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.4 }}
                className="mt-10"
              >
                <TransitionLink
                  href="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full font-mono text-[11px] uppercase tracking-[0.18em] text-[#171310] bg-[#c8a86b] shadow-[0_0_28px_rgba(200, 168, 107,0.35)]"
                >
                  Start a Project
                  <ArrowUpRight size={15} strokeWidth={2.5} />
                </TransitionLink>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* Brand mark tuned for a dark ground with a gold-lit core. */
function NordNeuronMark() {
  const stroke = "#3f3f46";
  const edge = "#52525b";
  const nodeFill = "#141210";
  const nodeStroke = "#71717a";

  return (
    <svg
      width="200"
      height="40"
      viewBox="0 0 240 48"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      className="h-8 w-auto"
    >
      <title>NordNeuron Logo</title>
      <defs>
        <filter id="nn-glow" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="2.4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Hex outline */}
      <polygon
        points="24,5 40,14 40,32 24,41 8,32 8,14"
        fill="none"
        stroke={stroke}
        strokeWidth="1.1"
      />

      {/* Neural edges */}
      <line x1="24" y1="10" x2="24" y2="23" stroke={edge} strokeWidth="0.9" opacity="0.7" />
      <line x1="24" y1="23" x2="35" y2="29" stroke={edge} strokeWidth="0.9" opacity="0.7" />
      <line x1="24" y1="23" x2="13" y2="29" stroke={edge} strokeWidth="0.9" opacity="0.7" />
      <line x1="35" y1="17" x2="24" y2="23" stroke={edge} strokeWidth="0.9" opacity="0.7" />
      <line x1="13" y1="17" x2="24" y2="23" stroke={edge} strokeWidth="0.9" opacity="0.7" />

      {/* Outer nodes */}
      <circle cx="24" cy="10" r="2.5" fill={nodeFill} stroke={nodeStroke} strokeWidth="1.1" />
      <circle cx="35" cy="17" r="2.5" fill={nodeFill} stroke={nodeStroke} strokeWidth="1.1" />
      <circle cx="35" cy="29" r="2.5" fill={nodeFill} stroke={nodeStroke} strokeWidth="1.1" />
      <circle cx="24" cy="36" r="2.5" fill={nodeFill} stroke={nodeStroke} strokeWidth="1.1" />
      <circle cx="13" cy="29" r="2.5" fill={nodeFill} stroke={nodeStroke} strokeWidth="1.1" />
      <circle cx="13" cy="17" r="2.5" fill={nodeFill} stroke={nodeStroke} strokeWidth="1.1" />

      {/* Center node — gold-lit core */}
      <circle cx="24" cy="23" r="5.5" fill="#c8a86b" filter="url(#nn-glow)" />
      <circle cx="24" cy="23" r="2.6" fill="#171310" />

      {/* Wordmark */}
      <text
        x="54"
        y="30"
        fontFamily="var(--font-syne), 'Segoe UI', sans-serif"
        fontSize="20"
        fontWeight="800"
        fill="#fafafa"
        letterSpacing="-0.01em"
      >
        Nord
        <tspan dx="6" fontWeight="500" fill="#71717a">
          Neuron
        </tspan>
      </text>
    </svg>
  );
}
