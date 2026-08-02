import type { MetadataRoute } from "next";
import { siteConfig } from "@/constants/site";
import { NAV_ITEMS } from "@/constants/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: siteConfig.url,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...NAV_ITEMS.filter((item) => item.href !== "#home").map((item) => ({
      url: `${siteConfig.url}/${item.href}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
