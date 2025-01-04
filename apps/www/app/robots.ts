import type { MetadataRoute } from "next";
import { siteConfig } from "@repo/data/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "Googlebot",
        allow: ["/"],
      },
      {
        userAgent: ["Applebot", "Bingbot"],
        disallow: ["/"],
      },
    ],
    sitemap: `${siteConfig.productionUrl}/sitemap.xml`,
  };
}
