import type { MetadataRoute } from "next";
import { SITE } from "@/lib/business";

export const dynamic = "force-static";

const paths: { path: string; priority: number; cf: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1.0, cf: "weekly" },
  { path: "/countertops", priority: 0.9, cf: "monthly" },
  { path: "/countertops/butcher-block", priority: 0.9, cf: "monthly" },
  { path: "/countertops/live-edge", priority: 0.85, cf: "monthly" },
  { path: "/countertops/epoxy", priority: 0.85, cf: "monthly" },
  { path: "/countertops/laminate", priority: 0.85, cf: "monthly" },
  { path: "/commercial-casework", priority: 0.9, cf: "monthly" },
  { path: "/gallery", priority: 0.8, cf: "weekly" },
  { path: "/about", priority: 0.7, cf: "monthly" },
  { path: "/contact", priority: 0.7, cf: "monthly" },
  { path: "/locations/lincoln-ne", priority: 0.85, cf: "monthly" },
  { path: "/locations/omaha-ne", priority: 0.85, cf: "monthly" },
  { path: "/locations/council-bluffs-ia", priority: 0.8, cf: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();
  return paths.map((e) => ({
    url: `${SITE.url}${e.path === "/" ? "" : e.path}`,
    lastModified: now,
    changeFrequency: e.cf,
    priority: e.priority,
  }));
}
