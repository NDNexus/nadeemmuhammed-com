import { defineQuery } from "next-sanity";

/**
 * =========================================================
 * POSTS
 * =========================================================
 *
 * GROQ queries for blog post content.
 *
 * Query responsibilities are intentionally separated:
 *
 * - POSTS_QUERY
 *   Data required by the /writing index.
 *
 * - POST_QUERY
 *   Full content required by an individual post page.
 *
 * - POST_METADATA_QUERY
 *   Clean, minimal data required by generateMetadata().
 *
 * - POST_SLUGS_QUERY
 *   Published post slugs used by generateStaticParams().
 * =========================================================
 */

/**
 * =========================================================
 * WRITING ARCHIVE
 * =========================================================
 *
 * Returns filtered and paginated posts for the /writing
 * archive together with the total matching result count.
 *
 * Supported filters:
 * - q         — search query
 * - category  — category slug
 * - topic       — tag slug
 * - offset    — pagination start position
 * - limit     — pagination end position
 * =========================================================
 */
export const POSTS_QUERY = defineQuery(`
  {
    "posts": *[
      _type == "post" &&
      defined(title) &&
      defined(slug.current) &&
      defined(excerpt) &&
      defined(featuredImage.asset) &&
      defined(featuredImage.alt) &&
      defined(author) &&
      defined(category) &&
      defined(publishedAt) &&
      publishedAt <= now() &&

      (
        $category == "" ||
        category->slug.current == $category
      ) &&

      (
        $topic == "" ||
        count(tags[@->slug.current == $topic]) > 0
      ) &&

      (
        $q == "" ||
        title match $q ||
        excerpt match $q ||
        category->name match $q ||
        count(tags[@->name match $q]) > 0
      )
    ]
    | order(publishedAt desc)
    [$offset...$limit]
    {
      _id,
      title,
      "slug": slug.current,
      excerpt,
      publishedAt,

     featuredImage {
      "url": asset->url,
      alt
    },

      category-> {
        _id,
        name,
        "slug": slug.current,
        badgeTheme
      },

      tags[]-> {
        _id,
        name,
        "slug": slug.current,
        badgeTheme
      },

      author-> {
        _id,
        name,
        "slug": slug.current
      }
    },

    "total": count(*[
      _type == "post" &&
      defined(title) &&
      defined(slug.current) &&
      defined(excerpt) &&
      defined(featuredImage.asset) &&
      defined(featuredImage.alt) &&
      defined(author) &&
      defined(category) &&
      defined(publishedAt) &&
      publishedAt <= now() &&

      (
        $category == "" ||
        category->slug.current == $category
      ) &&

      (
        $topic == "" ||
        count(tags[@->slug.current == $topic]) > 0
      ) &&

      (
        $q == "" ||
        title match $q ||
        excerpt match $q ||
        category->name match $q ||
        count(tags[@->name match $q]) > 0
      )
    ])
  }
`);

/**
 * =========================================================
 * SINGLE POST
 * =========================================================
 *
 * Returns the complete content required to render an
 * individual /writing/[post-slug] page.
 */
export const POST_QUERY = defineQuery(`
  *[
    _type == "post" &&
    slug.current == $slug
  ][0] {
    _id,
    _updatedAt,

    title,
    "slug": slug.current,
    excerpt,
    publishedAt,

    featuredImage {
      ...,
      asset->
    },

    body[] {
      ...,

      _type == "image" => {
        ...,
        asset->
      }
    },

    author-> {
      _id,
      name,
      "slug": slug.current,
      avatar {
        ...,
        asset->
      },
      bio,
      website,
      github,
      linkedin,
      x,
      expertise
    },

    category-> {
      _id,
      name,
      "slug": slug.current,
      description,
      badgeTheme
    },

    tags[]-> {
      _id,
      name,
      "slug": slug.current,
      badgeTheme
    },

    technologies[]-> {
      _id,
      title,
      "slug": slug.current,
      description,
      logo {
        ...,
        asset->
      },
      badgeTheme
    }
  }
`);

/**
 * =========================================================
 * POST METADATA
 * =========================================================
 *
 * Returns only the information required to resolve metadata
 * for an individual post.
 *
 * The reusable `metadata` object contains optional editorial
 * overrides. Next.js remains responsible for applying
 * fallbacks and constructing technical metadata.
 */
export const POST_METADATA_QUERY = defineQuery(`
  *[
    _type == "post" &&
    slug.current == $slug
  ][0] {
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    _updatedAt,

    featuredImage {
      ...,
      asset->
    },

    metadata {
      title,
      description,

      socialImage {
        ...,
        asset->
      },

      socialImageAlt,
      canonical,
      noIndex
    },

    author-> {
      name
    }
  }
`);

/**
 * =========================================================
 * POST SLUGS
 * =========================================================
 *
 * Returns known post slugs for generateStaticParams().
 */
export const POST_SLUGS_QUERY = defineQuery(`
  *[
    _type == "post" &&
    defined(slug.current)
  ] {
    "slug": slug.current
  }
`);

/**
 * =========================================================
 * WRITING FILTER OPTIONS
 * =========================================================
 *
 * Returns the available categories and topics used by the
 * Writing archive filters.
 * =========================================================
 */
export const WRITING_FILTERS_QUERY = defineQuery(`
  {
    "categories": *[
      _type == "category" &&
      defined(name) &&
      defined(slug.current)
    ] | order(name asc) {
      _id,
      name,
      "slug": slug.current,
      badgeTheme
    },

    "topics": *[
      _type == "tag" &&
      defined(name) &&
      defined(slug.current)
    ] | order(name asc) {
      _id,
      name,
      "slug": slug.current,
      badgeTheme
    }
  }
`);

/**
 * =========================================================
 * LATEST POSTS
 * =========================================================
 *
 * Returns the latest published posts for homepage and other
 * limited editorial sections.
 *
 * The number of posts is controlled by the $limit parameter.
 * =========================================================
 */
export const LATEST_POSTS_QUERY = defineQuery(`
  *[
    _type == "post" &&
    defined(title) &&
    defined(slug.current) &&
    defined(excerpt) &&
    defined(featuredImage.asset) &&
    defined(featuredImage.alt) &&
    defined(author) &&
    defined(category) &&
    defined(publishedAt) &&
    publishedAt <= now()
  ]
  | order(publishedAt desc)
  [0...$limit]
  {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,

    featuredImage {
      "url": asset->url,
      "alt": alt
},

    category-> {
      _id,
      name,
      "slug": slug.current,
      badgeTheme
    },

    tags[]-> {
      _id,
      name,
      "slug": slug.current,
      badgeTheme
    },

    author-> {
      _id,
      name,
      "slug": slug.current
    }
  }
`);
