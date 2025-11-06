import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://agentic-a561c214.vercel.app";
  const paths = ["/", "/analysis", "/vision", "/scorecard", "/ai-suite"];

  return paths.map((path) => ({
    url: `${baseUrl}${path === "/" ? "" : path}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: path === "/" ? 1 : 0.6
  }));
}
