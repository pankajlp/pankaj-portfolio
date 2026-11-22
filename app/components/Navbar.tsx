"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import TransitionLink from "./TransitionLink";

type NavItem = {
  label: string;
  href: string;
  /** id of the on-homepage section this links to, if any */
  section?: string;
};

// The offer leads; Labs lives in the footer so the bar stays about freight.
const NAV_ITEMS: NavItem[] = [
  { label: "RFQ pilot", href: "/rfq" },
  { label: "Work", href: "/#work", section: "work" },
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

    const ids = ["work"];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
        // Clear the highlight once the section has scrolled out of view.
        else if (entries.every((e) => !e.isIntersecting)) setActiveSection("");
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
      <a href="#main" className="skip btn btn-sm">Skip to content</a>
      <nav
        ref={navRef}
        aria-label="Primary"
        className={`fixed top-0 left-0 w-full z-[300] bg-paper border-b transition-colors duration-200 ${scrolled || menuOpen ? "border-rule-2" : "border-rule"}`}
      >
        <div className="wrap flex items-center justify-between h-[var(--nav-h)]">
          <TransitionLink href="/" onClick={() => setMenuOpen(false)} className="flex items-center shrink-0" aria-label="NordNeuron home">
            <NordNeuronMark />
          </TransitionLink>

          <div className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <TransitionLink key={item.label} href={item.href} className="nav-link" aria-current={isActive(item) ? "true" : undefined}>
                {item.label}
              </TransitionLink>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <TransitionLink href="/rfq#pilot" className="hidden sm:inline-flex btn btn-sm">Try it free</TransitionLink>
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="lg:hidden btn btn-quiet btn-sm w-11 px-0"
            >
              {menuOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[290] lg:hidden bg-paper pt-[var(--nav-h)]"
          >
            <nav aria-label="Menu" className="wrap flex flex-col h-full py-8">
              <div className="rows">
                {NAV_ITEMS.map((item) => (
                  <TransitionLink
                    key={item.label}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    aria-current={isActive(item) ? "true" : undefined}
                    className={`block py-4 font-display text-3xl transition-colors duration-200 hover:text-accent-2 active:text-accent ${isActive(item) ? "text-accent" : "text-ink"}`}
                  >
                    {item.label}
                  </TransitionLink>
                ))}
              </div>
              <TransitionLink href="/rfq#pilot" onClick={() => setMenuOpen(false)} className="btn mt-10 self-start">Try it free on 5 RFQs</TransitionLink>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* Brand mark tuned for a dark ground with a gold-lit core. */
function NordNeuronMark() {
  const edges = [[24, 10, 24, 23], [24, 23, 35, 29], [24, 23, 13, 29], [35, 17, 24, 23], [13, 17, 24, 23]];
  const nodes = [[24, 10], [35, 17], [35, 29], [24, 36], [13, 29], [13, 17]];
  return (
    <svg width="200" height="40" viewBox="0 0 240 48" xmlns="http://www.w3.org/2000/svg" role="img" className="h-8 w-auto">
      <title>NordNeuron</title>
      <polygon points="24,5 40,14 40,32 24,41 8,32 8,14" fill="none" stroke="var(--color-muted)" strokeWidth="1.1" />
      {edges.map(([x1, y1, x2, y2], i) => <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--color-muted)" strokeWidth="0.9" />)}
      {nodes.map(([cx, cy]) => <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="2.5" fill="var(--color-paper-2)" stroke="var(--color-ink-2)" strokeWidth="1.1" />)}
      <circle cx="24" cy="23" r="5.5" fill="var(--color-accent)" />
      <circle cx="24" cy="23" r="2.6" fill="var(--color-accent-ink)" />
      <text x="54" y="30" fontFamily="var(--font-display)" fontSize="20" fontWeight="600" fill="var(--color-ink)">
        Nord<tspan dx="6" fontWeight="500" fill="var(--color-ink-2)">Neuron</tspan>
      </text>
    </svg>
  );
}
