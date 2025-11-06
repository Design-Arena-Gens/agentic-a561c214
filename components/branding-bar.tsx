"use client";

import { motion } from "framer-motion";

const highlights = [
  "Premium UX Research",
  "AI Strategy Workflows",
  "Enterprise SEO Ops",
  "Design Systems",
  "Conversion Playbooks"
];

export function BrandingBar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/60 border-b border-white/30">
      <div className="mx-auto flex h-[var(--header-height)] max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-secondary text-white font-bold text-lg shadow-fly">
            AI
          </span>
          <div>
            <p className="font-display text-lg leading-tight">Agentic Intelligence Lab</p>
            <p className="text-sm text-brand-muted">Competitive UX & SEO Architects</p>
          </div>
        </div>
        <nav className="hidden items-center gap-8 text-sm font-medium text-brand-muted md:flex">
          {[
            { href: "#analysis", label: "Competitor Analysis" },
            { href: "#scorecard", label: "Scorecard" },
            { href: "#vision", label: "Vision" },
            { href: "#ai-suite", label: "AI Suite" },
            { href: "#cta", label: "Engage" }
          ].map((item) => (
            <a key={item.href} href={item.href} className="hover:text-brand-secondary">
              {item.label}
            </a>
          ))}
        </nav>
        <motion.div
          className="hidden rounded-full bg-brand-primary px-4 py-2 text-sm font-semibold text-white md:flex"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-flex items-center gap-2"
            initial="initial"
            animate="animate"
            variants={{
              initial: { opacity: 0 },
              animate: {
                opacity: 1,
                transition: { staggerChildren: 0.5, delayChildren: 0.8 }
              }
            }}
          >
            {highlights.map((highlight) => (
              <motion.span
                key={highlight}
                className="flex items-center gap-2"
                variants={{
                  initial: { opacity: 0, y: 8 },
                  animate: { opacity: 1, y: 0 }
                }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-brand-secondary" />
                {highlight}
              </motion.span>
            ))}
          </motion.span>
        </motion.div>
      </div>
    </header>
  );
}
