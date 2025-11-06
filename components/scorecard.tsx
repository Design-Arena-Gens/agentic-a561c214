"use client";

import { competitors } from "@/lib/competitors";
import { motion } from "framer-motion";

const performanceBands = [
  { label: "Lighthouse", key: "lighthouse", max: 100, suffix: "/100" },
  { label: "Cumulative Layout Shift", key: "cls", max: 0.25, suffix: "" },
  { label: "Time to Interactive", key: "tti", max: 6.5, suffix: "s" }
] as const;

const mobileBadgeColor = {
  excellent: "text-emerald-500",
  good: "text-lime-500",
  average: "text-amber-500",
  poor: "text-rose-500"
} as const;

export function Scorecard() {
  return (
    <section id="scorecard" className="section-padding bg-white" aria-labelledby="scorecard-heading">
      <div className="mx-auto max-w-7xl space-y-12 px-6">
        <div className="max-w-3xl space-y-6">
          <p className="subheading">Operational Scorecard</p>
          <h2 id="scorecard-heading" className="section-heading">
            Strengths, vulnerabilities, and performance realities shaping the opportunity gap.
          </h2>
          <p className="text-lg text-brand-muted">
            Quantitative vitals paired with qualitative insight reveal where the next-generation experience must grow. Use
            the matrix to pinpoint the delta we will over-deliver on.
          </p>
        </div>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-5">
            {competitors.map((competitor) => (
              <motion.div
                key={competitor.id}
                className="rounded-3xl border border-brand-muted/20 bg-brand-surface p-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true, margin: "-80px" }}
              >
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl text-brand-primary">{competitor.name}</h3>
                    <p className="text-sm text-brand-muted">Overall Impact Score: {competitor.overallScore}/100</p>
                  </div>
                  <span className={`text-xs font-semibold uppercase tracking-[0.3em] ${mobileBadgeColor[competitor.performance.mobileFriendly]}`}>
                    {competitor.performance.mobileFriendly} mobile
                  </span>
                </div>
                <div className="mt-6 grid gap-4 md:grid-cols-3">
                  {performanceBands.map((band) => {
                    const value = competitor.performance[band.key];
                    const percent = Math.min(100, (Number(value) / band.max) * 100);
                    return (
                      <div key={band.key} className="rounded-2xl bg-white p-4 shadow-inner">
                        <p className="text-xs font-medium text-brand-muted uppercase tracking-[0.3em]">{band.label}</p>
                        <p className="mt-2 text-xl font-semibold text-brand-primary">
                          {value}
                          {band.suffix}
                        </p>
                        <div className="mt-3 h-2 rounded-full bg-brand-muted/10">
                          <div className="h-2 rounded-full bg-brand-secondary" style={{ width: `${percent}%` }} />
                        </div>
                      </div>
                    );
                  })}
                </div>
                <dl className="mt-6 grid gap-3 text-sm text-brand-muted">
                  {competitor.strengthsWeaknesses.map((item, index) => (
                    <div key={index} className="rounded-2xl border border-brand-muted/20 bg-white/60 p-5">
                      <dt className="font-semibold text-brand-primary">{item.strength}</dt>
                      <dd className="mt-2 text-sm text-brand-muted">{item.weakness}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-5 text-xs text-brand-muted">{competitor.performance.notes}</p>
              </motion.div>
            ))}
          </div>
          <aside className="space-y-6">
            <div className="rounded-3xl bg-brand-primary/95 p-8 text-white shadow-fly">
              <p className="text-sm uppercase tracking-[0.4em] text-white/60">Gap Synopsis</p>
              <h3 className="mt-4 font-display text-3xl leading-tight">
                Competitors prioritise storytelling over technical resilience. We win with speed, depth, and intelligence.
              </h3>
              <ul className="mt-6 space-y-4 text-sm text-white/90">
                <li>• Only one player clears Core Web Vitals thresholds consistently.</li>
                <li>• Schema coverage and FAQ depth remain under-developed despite topical expertise.</li>
                <li>• No adaptive personalization layers respond to visitor intent in real time.</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-brand-secondary/30 bg-white p-8 shadow-fly">
              <p className="text-xs uppercase tracking-[0.4em] text-brand-secondary">Strategic Differentiators</p>
              <ul className="mt-5 space-y-3 text-sm text-brand-muted">
                <li>• Launch AI-led journeys that recommend next best action for each persona.</li>
                <li>• Enforce <span className="font-semibold text-brand-primary">sub-2s</span> mobile TTI through component-level budgets.</li>
                <li>• Deploy entity-rich knowledge architecture with automated internal linking.</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
