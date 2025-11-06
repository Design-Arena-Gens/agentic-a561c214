"use client";

import Script from "next/script";
import { ReactNode } from "react";

interface AnalyticsTrackerProps {
  children: ReactNode;
}

export function AnalyticsTracker({ children }: AnalyticsTrackerProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Agentic Competitive Intelligence Studio",
    description:
      "Competitor UX tear-downs, technical SEO audits, and AI-assisted product differentiation roadmaps.",
    url: "https://agentic-a561c214.vercel.app",
    serviceType: [
      "UX Strategy",
      "SEO Optimization",
      "Competitive Benchmarking",
      "AI Experience Design"
    ]
  };

  return (
    <>
      <Script id="structured-data" type="application/ld+json">{JSON.stringify(structuredData)}</Script>
      {children}
    </>
  );
}
