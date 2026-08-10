import { defineQuery } from "next-sanity";

/**
 * =========================================================
 * SITE SETTINGS QUERY
 * =========================================================
 *
 * Fetches the single Site Settings document used as the
 * source of truth for editable site-wide information.
 *
 * Only fields required by the frontend are projected.
 * Technical configuration remains owned by Next.js.
 *
 * The default social image expands its Sanity asset
 * reference so the frontend can access the resolved asset
 * data, including its CDN URL.
 *
 * =========================================================
 */

/**
 * Global site settings shared across the application.
 *
 * Used for site identity, default metadata, contact details,
 * social profiles, and other site-wide frontend content.
 */

export const SITE_SETTINGS_QUERY = defineQuery(`
  *[_type == "siteSettings"][0] {
    _id,

    siteName,
    tagline,
    siteDescription,

    defaultSocialImage {
      ...,
      asset->,
      crop,
      hotspot
    },

    contactEmail,

    github,
    linkedin,
    x,
    youtube,
    instagram
  }
`);
