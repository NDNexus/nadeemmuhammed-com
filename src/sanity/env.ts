/**
 * =========================================================
 * SANITY ENVIRONMENT CONFIGURATION
 * =========================================================
 *
 * PURPOSE
 * ---------------------------------------------------------
 * Provides the public configuration required to connect the
 * Next.js application to the correct Sanity project and
 * dataset.
 *
 * Keeping these values here gives the Sanity integration a
 * single configuration entry point instead of accessing
 * process.env throughout the application.
 *
 *
 * REQUIRED ENVIRONMENT VARIABLES
 * ---------------------------------------------------------
 *
 * NEXT_PUBLIC_SANITY_PROJECT_ID
 *   → Identifies the Sanity project.
 *
 * NEXT_PUBLIC_SANITY_DATASET
 *   → Identifies the dataset containing website content.
 *
 * NEXT_PUBLIC_SANITY_API_VERSION
 *   → Pins Sanity API behavior to a known version.
 *
 * NEXT_PUBLIC_SANITY_STUDIO_URL
 *   → Identifies the deployed Sanity Studio used by Visual Editing.
 *
 *
 * SECURITY
 * ---------------------------------------------------------
 * These values are public configuration and are safe to
 * expose to the frontend.
 *
 * Authentication tokens and other secrets must NEVER be
 * added here using NEXT_PUBLIC_* environment variables.
 *
 * =========================================================
 */

/**
 * Ensures a required environment value exists.
 *
 * Failing immediately during application startup is preferable
 * to allowing an incorrectly configured Sanity client to fail
 * later during a content request.
 */
function assertValue<T>(value: T | undefined, errorMessage: string): T {
  if (value === undefined) {
    throw new Error(errorMessage);
  }

  return value;
}

/**
 * Sanity project containing the website's CMS content.
 */
export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID"
);

/**
 * Sanity dataset queried by the frontend.
 *
 * This will normally be "production", while remaining
 * configurable for environments that use another dataset.
 */
export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  "Missing environment variable: NEXT_PUBLIC_SANITY_DATASET"
);

/**
 * Sanity API version used by all frontend queries.
 *
 * API versions are intentionally pinned to a fixed date so
 * behavior does not unexpectedly change as Sanity evolves.
 *
 * The environment variable allows the version to be changed
 * without modifying application code. The fallback provides
 * a known version when the variable is not explicitly set.
 */
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-03-01";

/**
 * URL of the separately deployed Sanity Studio.
 *
 * Used by Visual Editing to connect rendered website content
 * back to its source document and field inside the Studio.
 */
export const studioUrl = assertValue(
  process.env.NEXT_PUBLIC_SANITY_STUDIO_URL,
  "Missing environment variable: NEXT_PUBLIC_SANITY_STUDIO_URL"
);
