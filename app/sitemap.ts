import { MetadataRoute } from "next";
import { projects } from "@/lib/projects";

const BASE_URL = "https://portflio-website.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: new Date(), priority: 1.0 },
    { url: `${BASE_URL}/projects`, lastModified: new Date(), priority: 0.9 },
    { url: `${BASE_URL}/journey`, lastModified: new Date(), priority: 0.8 },
    { url: `${BASE_URL}/about`, lastModified: new Date(), priority: 0.8 },
    { url: `${BASE_URL}/resume`, lastModified: new Date(), priority: 0.7 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), priority: 0.7 },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${BASE_URL}/projects/${p.slug}`,
    lastModified: new Date(),
    priority: p.isFlagship ? 0.85 : 0.65,
  }));

  return [...staticRoutes, ...projectRoutes];
}
