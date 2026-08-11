import { createLoader, parseAsInteger, parseAsString } from "nuqs/server";

/**
 * =========================================================
 * WRITING SEARCH PARAMS
 * =========================================================
 *
 * Defines the URL state used by the Writing archive.
 *
 * Supported parameters:
 * - q         — search query
 * - category  — category slug
 * - tag       — tag slug
 * - page      — pagination page
 *
 * `createLoader()` provides typed server-side parsing for
 * Next.js App Router search parameters.
 * =========================================================
 */

export const writingSearchParams = {
  q: parseAsString.withDefault(""),
  category: parseAsString.withDefault(""),
  topic: parseAsString.withDefault(""),
  page: parseAsInteger.withDefault(1),
};

/**
 * Parses and validates Writing archive search parameters.
 *
 * Defaults are applied when parameters are missing or invalid.
 */
export const loadWritingSearchParams = createLoader(writingSearchParams);
