import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, studioUrl } from "../env";

/**
 * =========================================================
 * SANITY CLIENT
 * =========================================================
 *
 * Shared Sanity client used by the Next.js frontend.
 *
 * Provides the base connection to the Sanity Content Lake
 * for published content, live queries, and Visual Editing.
 *
 * Authentication is configured separately where required.
 * =========================================================
 */

/**
 * Base Sanity client shared across the application.
 *
 * Individual fetching utilities may override the default
 * perspective or other query behavior when required.
 */
export const client = createClient({
  projectId,
  dataset,
  apiVersion,

  /**
   * Uses Sanity's CDN for efficient delivery of published
   * content where CDN caching is applicable.
   */
  useCdn: true,

  /**
   * Normal website visitors receive published content.
   * Preview infrastructure may override this with drafts.
   */
  perspective: "published",

  /**
   * Identifies the separate Sanity Studio application used
   * by Visual Editing to link rendered content back to its
   * source document and field.
   */
  stega: {
    studioUrl,
  },
});
