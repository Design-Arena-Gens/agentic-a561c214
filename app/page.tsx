import { Hero } from "@/components/hero";
import { CompetitorBreakdown } from "@/components/competitor-breakdown";
import { Scorecard } from "@/components/scorecard";
import { SeoMatrix } from "@/components/seo-matrix";
import { VisionBlueprint } from "@/components/vision-blueprint";
import { InsightHighlights } from "@/components/insight-highlights";
import { PerformanceLab } from "@/components/performance-lab";
import { AiSuite } from "@/components/ai-suite";
import { CTA } from "@/components/cta";
import { Suspense } from "react";

export default function Page() {
  return (
    <>
      <Hero />
      <CompetitorBreakdown />
      <Scorecard />
      <SeoMatrix />
      <VisionBlueprint />
      <InsightHighlights />
      <PerformanceLab />
      <Suspense fallback={null}>
        <AiSuite />
      </Suspense>
      <CTA />
    </>
  );
}
