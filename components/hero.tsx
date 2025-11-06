"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <section className="section-padding" aria-labelledby="hero-heading">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 md:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-8">
          <p className="subheading">Competitive Intelligence Benchmark</p>
          <motion.h1
            id="hero-heading"
            className="section-heading text-balance"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            Out-design, outrank, and outperform the leading CRO experience platforms.
          </motion.h1>
          <p className="text-lg leading-relaxed text-brand-muted">
            We reverse-engineered three flagship competitors to audit their UI systems, SEO infrastructure, and
            performance guardrails. The result: a premium, faster, and smarter blueprint engineered to win buyer
            confidence and search visibility simultaneously.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#vision"
              className="gradient-border inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-primary shadow-fly"
            >
              Explore the Blueprint
              <span aria-hidden className="text-brand-secondary">→</span>
            </Link>
            <Link
              href="#ai-suite"
              className="inline-flex items-center gap-2 rounded-full border border-brand-secondary/60 px-5 py-3 text-sm font-semibold text-brand-secondary hover:bg-brand-secondary/10"
            >
              Launch AI Strategist
            </Link>
          </div>
          <dl className="grid gap-6 sm:grid-cols-3">
            {[
              { metric: "+38%", label: "Projected conversion lift" },
              { metric: "1.9s", label: "Targeted TTI on mobile" },
              { metric: "Top 3", label: "SERP placements within 90 days" }
            ].map((item) => (
              <div key={item.metric} className="rounded-2xl border border-white/40 bg-white/70 p-6 shadow-fly">
                <dt className="text-sm font-medium text-brand-muted">{item.label}</dt>
                <dd className="text-3xl font-semibold text-brand-primary">{item.metric}</dd>
              </div>
            ))}
          </dl>
        </div>
        <motion.div
          className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-primary via-brand-secondary/20 to-brand-accent/30 p-12 text-white shadow-fly"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.8, ease: "easeOut" }}
        >
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.4em] text-white/70">Signal Summary</p>
            <div className="space-y-4 text-sm text-white/90">
              <div className="flex items-start justify-between gap-6">
                <span className="font-semibold">SEO Authority</span>
                <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase">Needs Depth</span>
              </div>
              <p>
                Content depth remains thin across persona tabs. Implement intent clusters and schema automation to
                dominate entity coverage.
              </p>
              <div className="flex items-start justify-between gap-6">
                <span className="font-semibold">Experience Velocity</span>
                <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase">Opportunity</span>
              </div>
              <p>
                Competitors over-index on visuals without intelligent personalization. Introduce predictive journeys and
                adaptive proof modules.
              </p>
              <div className="flex items-start justify-between gap-6">
                <span className="font-semibold">Performance Integrity</span>
                <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase">Critical</span>
              </div>
              <p>
                Heavy hero assets and scripts throttle web vitals. Target sub-2s interactive loads through asset diets
                and motion budgets.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
