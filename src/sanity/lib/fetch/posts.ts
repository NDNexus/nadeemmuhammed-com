import {
  getDynamicFetchOptions,
  sanityFetch,
  sanityFetchMetadata,
  sanityFetchStaticParams,
  type DynamicFetchOptions,
} from "../live";

import {
  POST_METADATA_QUERY,
  POST_QUERY,
  POSTS_QUERY,
  POST_SLUGS_QUERY,
  WRITING_FILTERS_QUERY,
  LATEST_POSTS_QUERY,
} from "../queries/posts";

/**
 * =========================================================
 * POST FILTERS
 * =========================================================
 *
 * URL-derived state used by the Writing archive.
 * =========================================================
 */

export type PostFilters = {
  q: string;
  category: string;
  topic: string;
  page: number;
};

/**
 * =========================================================
 * POSTS DATA ACCESS
 * =========================================================
 *
 * Application-facing data access for blog posts.
 *
 * Request-specific state is resolved outside cached functions.
 * Cached functions receive that state as normal arguments.
 * =========================================================
 */

/**
 * Returns filtered and paginated posts for the /writing
 * archive.
 */
export async function getPosts(filters: PostFilters) {
  const options = await getDynamicFetchOptions();

  return getCachedPosts(filters, options);
}

/**
 * Cached Sanity fetch for the Writing archive.
 */
async function getCachedPosts(filters: PostFilters, options: DynamicFetchOptions) {
  "use cache";

  const { data } = await sanityFetch({
    query: POSTS_QUERY,
    params: {
      q: filters.q,
      category: filters.category,
      topic: filters.topic,
      offset: (filters.page - 1) * 12,
      limit: filters.page * 12,
    },
    ...options,
  });

  return data;
}

/**
 * Returns a single post by slug.
 */
export async function getPost(slug: string) {
  const options = await getDynamicFetchOptions();

  return getCachedPost(slug, options);
}

/**
 * Cached Sanity fetch for an individual post.
 */
async function getCachedPost(slug: string, options: DynamicFetchOptions) {
  "use cache";

  const { data } = await sanityFetch({
    query: POST_QUERY,
    params: { slug },
    ...options,
  });

  return data;
}

/**
 * Returns the content required to generate metadata for a
 * single post.
 *
 * Stega is deliberately disabled by sanityFetchMetadata().
 */
export async function getPostMetadata(slug: string) {
  const { perspective } = await getDynamicFetchOptions();

  const { data } = await sanityFetchMetadata({
    query: POST_METADATA_QUERY,
    params: { slug },
    perspective,
  });

  return data;
}

/**
 * Returns published post slugs for generateStaticParams().
 */
export async function getPostSlugs() {
  const { data } = await sanityFetchStaticParams({
    query: POST_SLUGS_QUERY,
  });

  return data;
}

/**
 * =========================================================
 * WRITING FILTER OPTIONS
 * =========================================================
 *
 * Returns categories and topics available to the Writing
 * archive controls.
 * =========================================================
 */
export async function getWritingFilters() {
  const options = await getDynamicFetchOptions();

  return getCachedWritingFilters(options);
}

/**
 * Cached Sanity fetch for Writing archive filter options.
 */
async function getCachedWritingFilters(
  options: DynamicFetchOptions,
) {
  "use cache";

  const { data } = await sanityFetch({
    query: WRITING_FILTERS_QUERY,
    ...options,
  });

  return data;
}

/**
 * =========================================================
 * LATEST POSTS
 * =========================================================
 *
 * Returns the latest published posts for editorial sections
 * such as the homepage.
 * =========================================================
 */
export async function getLatestPosts(limit = 3) {
  const options = await getDynamicFetchOptions();

  return getCachedLatestPosts(limit, options);
}

/**
 * Cached Sanity fetch for latest published posts.
 */
async function getCachedLatestPosts(
  limit: number,
  options: DynamicFetchOptions,
) {
  "use cache";

  const { data } = await sanityFetch({
    query: LATEST_POSTS_QUERY,
    params: {
      limit,
    },
    ...options,
  });

  return data;
}
