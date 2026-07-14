import type { MetadataRoute } from "next";

/**
 * =========================================================
 * SITEMAP CONFIGURATION
 * =========================================================
 *
 * PURPOSE
 * ---------------------------------------------------------
 * Defines discoverable URLs for search engines.
 *
 * Next.js automatically exposes:
 *
 *   /sitemap.xml
 *
 *
 * RESPONSIBILITY
 * ---------------------------------------------------------
 * Developer-owned technical SEO infrastructure.
 *
 *
 * FUTURE CMS INTEGRATION
 * ---------------------------------------------------------
 * Later this sitemap will include dynamic Sanity content:
 *
 * - blog posts
 * - service pages
 * - case studies
 *
 * This initial implementation establishes the architecture.
 *
 * =========================================================
 */

const SITE_URL = "https://nadeemmuhammed.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}