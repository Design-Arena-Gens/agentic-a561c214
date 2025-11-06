import Link from "next/link";

export function CTA() {
  return (
    <section id="cta" className="section-padding bg-brand-primary" aria-labelledby="cta-heading">
      <div className="mx-auto max-w-6xl space-y-8 px-6 text-center text-white">
        <p className="text-sm uppercase tracking-[0.4em] text-white/60">Launch Sprint</p>
        <h2 id="cta-heading" className="font-display text-4xl leading-tight">
          Ready to orchestrate a website that thinks like an analyst and converts like a growth team?
        </h2>
        <p className="mx-auto max-w-3xl text-lg text-white/80">
          Book the Agentic Lab immersion—a 14-day engagement delivering a production-ready front-end system, AI
          automation stack, and SEO authority roadmap built from the insights on this page.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="mailto:lab@agentic.studio?subject=Agentic%20Lab%20Immersion"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-semibold text-brand-primary shadow-fly"
          >
            Reserve Lab Slot
          </Link>
          <Link
            href="#analysis"
            className="inline-flex items-center gap-2 rounded-full border border-white/50 px-8 py-3 text-sm font-semibold text-white hover:bg-white/10"
          >
            Review Competitive Deck
          </Link>
        </div>
      </div>
    </section>
  );
}
