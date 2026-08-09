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
} from "../queries/posts";

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
 * Returns posts for the /writing index.
 */
export async function getPosts() {
  const options = await getDynamicFetchOptions();

  return getCachedPosts(options);
}

/**
 * Cached Sanity fetch for the writing index.
 */
async function getCachedPosts(options: DynamicFetchOptions) {
  "use cache";

  const { data } = await sanityFetch({
    query: POSTS_QUERY,
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
async function getCachedPost(
  slug: string,
  options: DynamicFetchOptions,
) {
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
