// to setup robots
import type { MetadataRoute } from "next";

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
    sitemap: `https://zaibutcooler.vercel.app/sitemap.xml`,
  };
}
