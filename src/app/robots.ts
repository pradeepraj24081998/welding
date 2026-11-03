import { MetadataRoute } from "next";
import { SITE_DATA } from "@/data/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: `${SITE_DATA.meta.siteUrl}/sitemap.xml`
  };
}

