import { MetadataRoute } from "next";
import { SITE_DATA } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_DATA.meta.siteUrl,
      lastModified: "2026-11-04",
      changeFrequency: "weekly",
      priority: 1.0
    }
  ];
}
