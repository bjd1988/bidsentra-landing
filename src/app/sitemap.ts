import type { MetadataRoute } from "next";
import {
  SITE_URL,
  getAbsoluteUrl,
  getHomePath,
  getPolicyPath,
} from "@/lib/localized-site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: getAbsoluteUrl(getHomePath("en")),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: getAbsoluteUrl(getHomePath("de")),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: getAbsoluteUrl(getPolicyPath("pl")),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: getAbsoluteUrl(getPolicyPath("en")),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: getAbsoluteUrl(getPolicyPath("de")),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
