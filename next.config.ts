import type { NextConfig } from "next";
import { sanity } from "next-sanity/live/cache-life";

/**
 * =========================================================
 * NEXT.JS CONFIGURATION
 * =========================================================
 *
 * Configures application-wide Next.js behavior including:
 *
 * - Sanity-aware Cache Components
 * - legacy URL redirects
 *
 * Sanity Live handles content revalidation when published
 * content changes, allowing the site to remain fast without
 * relying on arbitrary time-based cache expiration.
 * =========================================================
 */

const nextConfig: NextConfig = {
  /* =========================================================
     CACHE COMPONENTS
  ========================================================= */

  /**
   * Enables Next.js Cache Components.
   *
   * Sanity's cache-life preset works with Sanity Live to
   * provide cached content with on-demand revalidation.
   */
  cacheComponents: true,

  cacheLife: {
    default: sanity,
  },

  /* =========================================================
     LEGACY URL REDIRECTS
  ========================================================= */

  /**
   * Preserve relevant URLs from the previous WordPress
   * website by permanently redirecting them to their
   * equivalent routes on the new website.
   */
  async redirects() {
    return [
      {
        source: "/about-me",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/contact-me",
        destination: "/contact",
        permanent: true,
      },
    ];
  },
} satisfies NextConfig;

export default nextConfig;
