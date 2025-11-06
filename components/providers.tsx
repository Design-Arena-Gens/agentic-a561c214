"use client";

import { ReactNode, useEffect } from "react";
import { usePathname } from "next/navigation";
import { AnalyticsTracker } from "@/components/tracking/analytics-tracker";

export function Providers({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname) {
      document.documentElement.style.setProperty("--current-path", pathname);
    }
  }, [pathname]);

  return (
    <AnalyticsTracker>
      <main className="min-h-screen pb-24">{children}</main>
    </AnalyticsTracker>
  );
}
