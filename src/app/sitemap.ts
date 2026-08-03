import type { MetadataRoute } from "next";

/**
 * =========================================================
 * SITEMAP CONFIGURATION
 * =========================================================
 *
 * PURPOSE
 * ---------------------------------------------------------
 * Defines the canonical, indexable URLs that should be
 * discoverable by search engines.
 *
 * Next.js automatically exposes this as:
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
 * Dynamic Sanity content can be added here later, including:
 *
 * - writing posts
 * - case studies
 * - other indexable CMS-managed content
 *
 * =========================================================
 */

const SITE_URL = "https://nadeemmuhammed.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/about`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/services`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/contact`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/writing`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}
