import type { QueryParams } from "next-sanity";
import {
  defineLive,
  resolvePerspectiveFromCookies,
  type LivePerspective,
} from "next-sanity/live";
import { cookies, draftMode } from "next/headers";

import { client } from "./client";

/**
 * =========================================================
 * SANITY LIVE
 * =========================================================
 *
 * Provides the shared fetching and live-update infrastructure
 * for Sanity content.
 *
 * Responsibilities:
 * - cached Sanity queries
 * - automatic content revalidation
 * - published/draft perspective handling
 * - future Visual Editing support
 * =========================================================
 */

const token = process.env.SANITY_API_READ_TOKEN;

if (!token) {
  throw new Error("Missing environment variable: SANITY_API_READ_TOKEN");
}

/**
 * Shared Sanity Live utilities.
 *
 * `sanityFetch` replaces direct `client.fetch()` calls for
 * application content that should participate in Sanity Live.
 *
 * `SanityLive` listens for content changes and triggers
 * automatic revalidation of affected cached queries.
 */
export const { sanityFetch, SanityLive } = defineLive({
  client,

  /**
   * Used by server-side requests that need authenticated
   * access, including draft content.
   */
  serverToken: token,

  /**
   * Used by live preview in the browser.
   *
   * This token must have read-only Viewer permissions because
   * it can be exposed to the browser during preview sessions.
   */
  browserToken: token,

  /**
   * Requires every fetch to explicitly provide its content
   * perspective and stega configuration.
   */
  strict: true,
});

/**
 * Request-specific options passed into cached Sanity queries.
 */
export interface DynamicFetchOptions {
  perspective: LivePerspective;
  stega: boolean;
}

/**
 * Resolves whether Sanity should return published or draft
 * content for the current request.
 *
 * Published visitors receive normal content without stega.
 * Draft Mode enables draft content and Visual Editing data.
 */
export async function getDynamicFetchOptions(): Promise<DynamicFetchOptions> {
  const { isEnabled: isDraftMode } = await draftMode();

  if (!isDraftMode) {
    return {
      perspective: "published",
      stega: false,
    };
  }

  const cookieStore = await cookies();

  const perspective = await resolvePerspectiveFromCookies({
    cookies: cookieStore,
  });

  return {
    perspective: perspective ?? "drafts",
    stega: true,
  };
}

/**
 * Fetches published Sanity data while generating static
 * route parameters.
 *
 * Intended for `generateStaticParams()`.
 */
export async function sanityFetchStaticParams<const QueryString extends string>({
  query,
  params = {},
}: {
  query: QueryString;
  params?: QueryParams;
}) {
  "use cache";

  const { data } = await sanityFetch({
    query,
    params,
    perspective: "published",
    stega: false,
  });

  return { data };
}

/**
 * Fetches Sanity data for metadata-generation functions.
 *
 * Stega is disabled because encoded strings must never appear
 * inside titles, descriptions, canonical URLs, or other
 * document metadata.
 */
export async function sanityFetchMetadata<const QueryString extends string>({
  query,
  params = {},
  perspective,
}: {
  query: QueryString;
  params?: QueryParams;
  perspective: LivePerspective;
}) {
  "use cache";

  const { data } = await sanityFetch({
    query,
    params,
    perspective,
    stega: false,
  });

  return { data };
}
