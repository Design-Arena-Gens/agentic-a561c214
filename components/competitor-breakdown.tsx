"use client";

import { competitors } from "@/lib/competitors";
import { motion } from "framer-motion";

export function CompetitorBreakdown() {
  return (
    <section id="analysis" className="section-padding" aria-labelledby="analysis-heading">
      <div className="mx-auto max-w-7xl space-y-12 px-6">
        <div className="max-w-3xl space-y-6">
          <p className="subheading">Tear-down Inventory</p>
          <h2 id="analysis-heading" className="section-heading">
            Feature systems, UI choreography, and SEO architecture across the competitive set.
          </h2>
          <p className="text-lg text-brand-muted">
            Each site was audited for its structural composition—from hero messaging to schema utilization. Below is a
            synthesis of the most decisive modules, experience flows, and search mechanics deployed today.
          </p>
        </div>
        <div className="grid gap-10 lg:grid-cols-3">
          {competitors.map((competitor) => (
            <motion.article
              key={competitor.id}
              className="card-surface gradient-border relative overflow-hidden px-8 py-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, margin: "-80px" }}
            >
              <div className="space-y-4">
                <span className="subheading text-brand-secondary">{competitor.name}</span>
                <h3 className="font-display text-2xl text-brand-primary">{competitor.heroMessage}</h3>
                <p className="text-sm text-brand-muted">{competitor.url.replace("https://", "")}</p>
              </div>
              <dl className="mt-6 space-y-4 text-sm text-brand-muted">
                <div className="flex gap-3">
                  <dt className="w-28 font-semibold text-brand-primary">Palette</dt>
                  <dd className="flex flex-wrap gap-2">
                    {competitor.colorPalette.map((color) => (
                      <span
                        key={color}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-white/50 text-[10px]"
                        style={{ backgroundColor: color, color: "#fff" }}
                      >
                        {color.replace("#", "")}
                      </span>
                    ))}
                  </dd>
                </div>
                <div className="flex gap-3">
                  <dt className="w-28 font-semibold text-brand-primary">Typography</dt>
                  <dd className="space-x-2">
                    {competitor.typography.map((font) => (
                      <span key={font} className="rounded-full bg-brand-surface px-3 py-1 text-xs font-medium">
                        {font}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
              <div className="mt-6 space-y-6">
                {competitor.featureBreakdown.map((feature) => (
                  <div key={feature.title} className="rounded-2xl border border-brand-muted/20 bg-brand-surface p-5">
                    <h4 className="font-semibold text-brand-primary">{feature.title}</h4>
                    <p className="mt-2 text-sm text-brand-muted">{feature.description}</p>
                    <div className="mt-4 grid gap-3 text-xs">
                      <div>
                        <p className="font-semibold uppercase tracking-[0.3em] text-brand-primary/70">UX Patterns</p>
                        <div className="mt-1 flex flex-wrap gap-2">
                          {feature.uxPatterns.map((pattern) => (
                            <span key={pattern} className="rounded-full bg-white px-3 py-1 text-[11px]">
                              {pattern}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="font-semibold uppercase tracking-[0.3em] text-brand-primary/70">SEO Notes</p>
                        <ul className="mt-2 space-y-1 text-left text-[11px]">
                          {feature.seoNotes.map((note) => (
                            <li key={note}>• {note}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold uppercase tracking-[0.3em] text-brand-primary/70">Interactions</p>
                        <div className="mt-1 flex flex-wrap gap-2">
                          {feature.interactions.map((interaction) => (
                            <span key={interaction} className="rounded-full border border-brand-secondary/40 px-3 py-1 text-[11px]">
                              {interaction}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
