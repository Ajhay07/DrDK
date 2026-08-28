import type { MetadataRoute } from "next";
import { concerns } from "@/config/concerns";
import { educationEntries } from "@/config/education";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes = [
    "",
    "/about",
    "/procedures",
    "/education",
    "/consultation",
    "/gallery",
    "/faq",
  ].map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified,
  }));

  const procedureRoutes = concerns.map((concern) => ({
    url: `${siteConfig.url}/procedures/${concern.slug}`,
    lastModified,
  }));

  const educationRoutes = educationEntries.map((entry) => ({
    url: `${siteConfig.url}${entry.href}`,
    lastModified,
  }));

  return [...staticRoutes, ...procedureRoutes, ...educationRoutes];
}
