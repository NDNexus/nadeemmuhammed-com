import type { MetadataRoute } from "next";

/**
 * =========================================================
 * ROBOTS CONFIGURATION
 * =========================================================
 *
 * PURPOSE
 * ---------------------------------------------------------
 * Defines crawler instructions for search engines.
 *
 * Next.js automatically exposes this as:
 *
 *   /robots.txt
 *
 *
 * RESPONSIBILITY
 * ---------------------------------------------------------
 * Developer-owned technical SEO.
 *
 * Editors should NOT control this.
 *
 *
 * FUTURE CMS INTEGRATION
 * ---------------------------------------------------------
 * If needed, specific page-level noindex behavior should
 * come from metadata generation logic, not this file.
 *
 * =========================================================
 */

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
        },

        sitemap: "https://nadeemmuhammed.com/sitemap.xml",

        host: "https://nadeemmuhammed.com",
    };
}