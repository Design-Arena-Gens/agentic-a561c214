import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { BrandingBar } from "@/components/branding-bar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  metadataBase: new URL("https://agentic-a561c214.vercel.app"),
  title: {
    default: "Agentic Competitive Intelligence Studio",
    template: "%s | Agentic Competitive Intelligence Studio"
  },
  description:
    "Deep competitor tear-downs and AI-led web strategy to outperform market leaders with premium UX and best-in-class SEO.",
  keywords: [
    "competitor analysis",
    "seo strategy",
    "ui ux analysis",
    "web performance benchmarking",
    "ai website planner"
  ],
  openGraph: {
    siteName: "Agentic Competitive Intelligence Studio",
    type: "website",
    locale: "en_US",
    url: "https://agentic-a561c214.vercel.app",
    title: "Agentic Competitive Intelligence Studio",
    description:
      "Deep competitor tear-downs and AI-led web strategy to outperform market leaders with premium UX and best-in-class SEO.",
    images: [
      {
        url: "https://agentic-a561c214.vercel.app/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Agentic Competitive Intelligence Studio"
      }
    ]
  },
  alternates: {
    canonical: "https://agentic-a561c214.vercel.app"
  },
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png"
  },
  twitter: {
    card: "summary_large_image",
    title: "Agentic Competitive Intelligence Studio",
    description:
      "Deep competitor tear-downs and AI-led web strategy to outperform market leaders with premium UX and best-in-class SEO.",
    creator: "@agenticstudio"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <Providers>
          <BrandingBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
