"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { AiPromptSignal, AiSuggestion } from "@/lib/competitors";
import { aiSuggestionLibrary } from "@/lib/competitors";
import clsx from "clsx";

const signalLabels: Record<AiPromptSignal, string> = {
  conversion: "Conversion",
  experience: "Experience",
  seo: "SEO",
  performance: "Performance"
};

const signalDescriptions: Record<AiPromptSignal, string> = {
  conversion: "Increase pipeline velocity with adaptive proof and AI experiment orchestration.",
  experience: "Craft predictive UX flows that respond to each visitor's micro-signals.",
  seo: "Dominate search intent clusters via entity-rich content automation.",
  performance: "Enforce lightning-fast interactions even under heavy animations."
};

export function AiSuite() {
  const [activeSignal, setActiveSignal] = useState<AiPromptSignal>("conversion");
  const [priorityFilter, setPriorityFilter] = useState<AiSuggestion["priority"] | "all">("all");

  const suggestions = useMemo(() => {
    const pool = aiSuggestionLibrary[activeSignal];
    if (priorityFilter === "all") return pool;
    return pool.filter((suggestion) => suggestion.priority === priorityFilter);
  }, [activeSignal, priorityFilter]);

  return (
    <section id="ai-suite" className="section-padding bg-brand-surface" aria-labelledby="ai-suite-heading">
      <div className="mx-auto max-w-7xl space-y-10 px-6">
        <div className="max-w-3xl space-y-6">
          <p className="subheading">AI Strategy Control Room</p>
          <h2 id="ai-suite-heading" className="section-heading">
            Embedded intelligence transforms competitive insights into deployable product sprints.
          </h2>
          <p className="text-lg text-brand-muted">
            Toggle between strategic signals to reveal AI-generated initiatives. Each recommendation includes rationale,
            implementation guidance, and sprint priority to accelerate execution.
          </p>
        </div>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-6">
            <div className="rounded-3xl border border-brand-secondary/30 bg-white p-6 text-sm text-brand-muted">
              <p className="font-semibold text-brand-primary">Signal Definition</p>
              <p className="mt-2">{signalDescriptions[activeSignal]}</p>
            </div>
            <div className="rounded-3xl border border-brand-muted/20 bg-white p-6 text-sm">
              <p className="text-xs uppercase tracking-[0.4em] text-brand-muted">Filter by Priority</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {["all", "now", "next", "later"].map((priority) => (
                  <button
                    key={priority}
                    onClick={() => setPriorityFilter(priority as typeof priorityFilter)}
                    className={clsx(
                      "rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] transition",
                      priorityFilter === priority
                        ? "bg-brand-secondary text-white"
                        : "bg-brand-surface text-brand-muted hover:bg-brand-secondary/10 hover:text-brand-secondary"
                    )}
                  >
                    {priority}
                  </button>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-brand-muted/10 bg-white p-6">
              <p className="text-xs uppercase tracking-[0.4em] text-brand-muted">Execution Radar</p>
              <ul className="mt-4 space-y-3 text-sm text-brand-muted">
                <li>
                  <span className="font-semibold text-brand-primary">Now</span>: High-urgency sprints delivering immediate
                  lift across conversion or speed.
                </li>
                <li>
                  <span className="font-semibold text-brand-primary">Next</span>: Strategic build-outs that anchor long-term
                  defensibility.
                </li>
                <li>
                  <span className="font-semibold text-brand-primary">Later</span>: Experimental concepts tracked in the
                  roadmap backlog.
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex flex-wrap gap-3">
              {(Object.keys(signalLabels) as AiPromptSignal[]).map((signal) => (
                <button
                  key={signal}
                  onClick={() => setActiveSignal(signal)}
                  className={clsx(
                    "rounded-full border px-5 py-3 text-sm font-semibold transition",
                    activeSignal === signal
                      ? "border-brand-secondary bg-brand-secondary text-white shadow-fly"
                      : "border-brand-muted/30 bg-white text-brand-muted hover:border-brand-secondary/40 hover:text-brand-secondary"
                  )}
                >
                  {signalLabels[signal]}
                </button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeSignal}-${priorityFilter}`}
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                {suggestions.map((suggestion) => (
                  <motion.article
                    key={suggestion.title}
                    className="gradient-border relative overflow-hidden rounded-[2rem] bg-white px-8 py-7 shadow-fly"
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35 }}
                  >
                    <span className="inline-flex items-center rounded-full bg-brand-secondary/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-brand-secondary">
                      {signalLabels[suggestion.signal]}
                    </span>
                    <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                      <div className="max-w-2xl space-y-3">
                        <h3 className="font-display text-xl text-brand-primary">{suggestion.title}</h3>
                        <p className="text-sm text-brand-muted">{suggestion.rationale}</p>
                        <p className="text-sm text-brand-primary/80">{suggestion.implementation}</p>
                      </div>
                      <span
                        className={clsx(
                          "flex h-20 w-20 items-center justify-center rounded-full border text-xs font-semibold uppercase",
                          suggestion.priority === "now"
                            ? "border-brand-secondary text-brand-secondary"
                            : suggestion.priority === "next"
                              ? "border-brand-accent text-brand-accent"
                              : "border-brand-muted text-brand-muted"
                        )}
                      >
                        {suggestion.priority}
                      </span>
                    </div>
                  </motion.article>
                ))}
                {suggestions.length === 0 && (
                  <div className="rounded-3xl border border-dashed border-brand-muted/40 bg-white/70 px-10 py-16 text-center text-sm text-brand-muted">
                    No recommendations match this filter yet. Capture new telemetry to populate this signal.
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
