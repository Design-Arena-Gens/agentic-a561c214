"use client";

import { benchmarkNarrative } from "@/lib/competitors";
import { motion } from "framer-motion";

const pillars = [
  {
    title: "Lightning-first Architecture",
    description:
      "Edge-rendered Next.js stack with granular code-splitting, font subsetting, and realtime vitals monitoring ensures top-tier page experience scores.",
    outcomes: ["TTI < 2s mobile", "LCP < 2.5s", "Constant Web Vitals governance"],
    gradient: "from-brand-secondary/60 via-white to-brand-accent/30"
  },
  {
    title: "AI Augmented UX",
    description:
      "Predictive personalization, adaptive proof modules, and automated experiment suggestions create a living experience design system.",
    outcomes: ["+38% conversion lift", "Dynamic persona narratives", "Autonomous experiment queue"],
    gradient: "from-brand-accent/50 via-white to-brand-secondary/40"
  },
  {
    title: "Authority-first SEO",
    description:
      "Entity-rich schema, strategic internal linking blueprints, and AI-assisted content compose a defensible search moat.",
    outcomes: ["Topical cluster dominance", "FAQ and HowTo schema", "Search-controlled design ops"],
    gradient: "from-brand-primary/70 via-brand-secondary/30 to-white"
  }
];

export function VisionBlueprint() {
  return (
    <section id="vision" className="section-padding" aria-labelledby="vision-heading">
      <div className="mx-auto max-w-7xl space-y-12 px-6">
        <div className="max-w-4xl space-y-6">
          <p className="subheading">Next-gen Blueprint</p>
          <h2 id="vision-heading" className="section-heading">
            Premium interface, smarter automation, and search-grade authority wrapped into one flagship experience.
          </h2>
          <p className="text-lg text-brand-muted">{benchmarkNarrative.summary}</p>
          <ul className="space-y-2 text-sm text-brand-muted">
            {benchmarkNarrative.highlights.map((highlight) => (
              <li key={highlight}>• {highlight}</li>
            ))}
          </ul>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.title}
              className={`relative overflow-hidden rounded-[2rem] border border-white/40 bg-gradient-to-br ${pillar.gradient} p-8 shadow-fly`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              viewport={{ once: true, margin: "-60px" }}
            >
              <h3 className="font-display text-xl text-brand-primary">{pillar.title}</h3>
              <p className="mt-4 text-sm text-brand-primary/80">{pillar.description}</p>
              <ul className="mt-6 space-y-2 text-sm text-brand-primary/70">
                {pillar.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-brand-primary/50" />
                    {outcome}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="card-surface gradient-border mx-auto max-w-5xl space-y-6 px-10 py-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className="font-display text-2xl text-brand-primary">AI-enabled Experience Orchestration</h3>
          <p className="text-sm text-brand-muted">
            A unified orchestration layer listens to visitor behavior, CRM triggers, and campaign signals—then feeds a
            rules engine that adapts content, proof, and CTAs in real time. This removes the content bottleneck and keeps
            the site evolving without manual redesigns.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                label: "Persona Sensing",
                detail: "Edge functions map UTM, firmographic, and behavior patterns to tailored journeys."
              },
              {
                label: "Intent Modulation",
                detail: "Hero narratives, proof assets, and offers swap instantly based on detected funnel stage."
              },
              {
                label: "Outcome Telemetry",
                detail: "Experiment results auto-sync to the AI queue, refining recommendations with each sprint."
              }
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-brand-muted/30 bg-white/80 p-5 text-sm text-brand-muted">
                <p className="font-semibold text-brand-primary">{item.label}</p>
                <p className="mt-2">{item.detail}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
