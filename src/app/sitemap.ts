import { MetadataRoute } from "next";
import { SITE_DATA } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_DATA.meta.siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0
    }
  ];
}
