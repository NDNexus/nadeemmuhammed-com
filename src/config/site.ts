/**
 * =========================================================
 * SITE CONFIGURATION
 * =========================================================
 *
 * PURPOSE
 * ---------------------------------------------------------
 * Technical application configuration for the website.
 *
 * This module provides the canonical site origin used when
 * the application needs to construct absolute URLs.
 *
 * Editorial site identity belongs to Sanity Site Settings.
 *
 * RESPONSIBILITIES
 * ---------------------------------------------------------
 * - Provide the canonical site origin
 * - Provide a single source of truth for absolute URLs
 *
 * USED BY
 * ---------------------------------------------------------
 * - Canonical metadata
 * - Open Graph URLs
 * - JSON-LD
 * - Structured data identifiers
 * - Other absolute application URLs
 *
 * ENVIRONMENT
 * ---------------------------------------------------------
 * SITE_URL is defined per deployment environment.
 *
 * Development:
 * SITE_URL=http://localhost:3000
 *
 * Beta:
 * SITE_URL=https://beta.nadeemmuhammed.com
 *
 * Production:
 * SITE_URL=https://nadeemmuhammed.com
 *
 * IMPORTANT
 * ---------------------------------------------------------
 * Do not store editorial content here.
 *
 * Site name, description, tagline, social profiles, and
 * default social images belong to Sanity Site Settings.
 *
 * =========================================================
 */

const siteUrl = process.env.SITE_URL;

if (!siteUrl) {
  throw new Error("SITE_URL is not configured. Define SITE_URL for the current environment.");
}

/**
 * =========================================================
 * SITE CONFIG
 * =========================================================
 */

export const siteConfig = {
  /**
   * Canonical origin for the current deployment.
   *
   * The value is supplied by the environment rather than
   * hardcoded so development, beta, and production can each
   * generate correct absolute URLs.
   */
  url: siteUrl,
} as const;
