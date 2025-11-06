"use client";

import { motion } from "framer-motion";

const insights = [
  {
    title: "Persona-synced narratives",
    detail:
      "Tailor hero copy, proof, and CTAs per visitor signal. Competitors hard-code persona tabs that search engines can’t crawl.",
    metric: "+58%",
    metricLabel: "Projected engagement depth"
  },
  {
    title: "Adaptive content mesh",
    detail:
      "Generate entity-rich modules from AI knowledge graph to capture long-tail queries without manual publishing overhead.",
    metric: "3x",
    metricLabel: "Topical cluster growth"
  },
  {
    title: "Motion governance",
    detail:
      "Motion budget layer keeps cinematic experiences while locking 60fps interactions, outperforming heavy competitor hero builds.",
    metric: "<1%",
    metricLabel: "Layout shift variance"
  }
];

export function InsightHighlights() {
  return (
    <section className="section-padding" aria-labelledby="insights-heading">
      <div className="mx-auto max-w-7xl space-y-12 px-6">
        <div className="max-w-3xl space-y-6">
          <p className="subheading">Differentiated Edge</p>
          <h2 id="insights-heading" className="section-heading">
            Why the Agentic blueprint leaves current market leaders behind.
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {insights.map((insight, index) => (
            <motion.div
              key={insight.title}
              className="rounded-[2rem] border border-brand-muted/20 bg-white p-8 shadow-fly"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-60px" }}
            >
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-brand-secondary">
                Advantage
              </span>
              <h3 className="mt-4 font-display text-xl text-brand-primary">{insight.title}</h3>
              <p className="mt-3 text-sm text-brand-muted">{insight.detail}</p>
              <div className="mt-6 rounded-2xl bg-brand-surface p-5 text-brand-primary">
                <p className="text-3xl font-bold">{insight.metric}</p>
                <p className="text-xs uppercase tracking-[0.3em] text-brand-muted">{insight.metricLabel}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
