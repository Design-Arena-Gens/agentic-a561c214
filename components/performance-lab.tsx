"use client";

import { motion } from "framer-motion";

const initiatives = [
  {
    title: "Component-level budgets",
    description:
      "Every layout ships with defined weight ceilings, automated in CI. Assets over budget trigger fail-fast alerts.",
    benefit: "Guarantees sub-2s interactive loads even with cinematic hero sequences."
  },
  {
    title: "Edge-side personalization",
    description:
      "Persona-aware variants render at the edge using request metadata—zero client hydration tax.",
    benefit: "Delivers real-time journey orchestration without compromising Core Web Vitals."
  },
  {
    title: "Schema-first CMS blocks",
    description:
      "Composable blocks publish with baked-in FAQ, HowTo, and Product schema. Editors can’t ship unstructured content.",
    benefit: "Sustains authority and improves SERP click-through across mid and bottom funnel queries."
  }
];

export function PerformanceLab() {
  return (
    <section className="section-padding bg-brand-surface" aria-labelledby="performance-heading">
      <div className="mx-auto max-w-7xl space-y-10 px-6">
        <div className="max-w-3xl space-y-6">
          <p className="subheading">Delivery Framework</p>
          <h2 id="performance-heading" className="section-heading">
            Execution mechanics that keep the experience fast, future-proof, and search-dominant.
          </h2>
          <p className="text-lg text-brand-muted">
            Our delivery approach bakes performance, personalization, and SEO guardrails into the development pipeline—so
            marketing teams scale without accruing tech debt.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {initiatives.map((initiative, index) => (
            <motion.article
              key={initiative.title}
              className="rounded-[2rem] border border-brand-muted/20 bg-white p-8 shadow-fly"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true, margin: "-80px" }}
            >
              <h3 className="font-display text-xl text-brand-primary">{initiative.title}</h3>
              <p className="mt-3 text-sm text-brand-muted">{initiative.description}</p>
              <p className="mt-4 text-sm font-semibold text-brand-primary/80">{initiative.benefit}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
