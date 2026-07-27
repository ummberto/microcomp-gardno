import type { MetadataRoute } from "next";
import { SERVICES } from "@/lib/services";
import { LOCATIONS } from "@/lib/locations";
import { BLOG_POSTS } from "@/lib/facts";

// Sitemap generated from the same data that drives the routes, so it can never
// drift from the actual pages (the old hand-written public/sitemap.xml did).
const BASE = "https://microcomp.co";

// Required for `output: export` — emit a fully static sitemap.xml at build time.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/o-firmie`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/lokalizacja`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/kontakt`, changeFrequency: "yearly", priority: 0.9 },
    { url: `${BASE}/blog`, changeFrequency: "weekly", priority: 0.6 },
    { url: `${BASE}/polityka-prywatnosci`, changeFrequency: "yearly", priority: 0.3 },
  ];

  const services: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${BASE}/uslugi/${s.slug}`,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const locations: MetadataRoute.Sitemap = LOCATIONS.map((l) => ({
    url: `${BASE}/lokalizacja/${l.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const blog: MetadataRoute.Sitemap = BLOG_POSTS.map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    changeFrequency: "yearly",
    priority: 0.5,
  }));

  return [...staticPages, ...services, ...locations, ...blog].map((e) => ({
    ...e,
    lastModified: now,
  }));
}
