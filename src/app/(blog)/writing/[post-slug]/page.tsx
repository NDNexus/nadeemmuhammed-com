import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import SinglePost from "@/components/writing/SinglePost";
import { siteConfig } from "@/config/site";

import {
  getPost,
  getPostMetadata,
  getPostSlugs,
} from "@/sanity/lib/fetch/posts";
import { getSiteSettings } from "@/sanity/lib/fetch/siteSettings";

/**
 * =========================================================
 * SINGLE WRITING POST
 * =========================================================
 *
 * ROUTE
 * ---------------------------------------------------------
 * /writing/[post-slug]
 *
 * PURPOSE
 * ---------------------------------------------------------
 * Server-side route entry point for an individual writing
 * article.
 *
 * RESPONSIBILITIES
 * ---------------------------------------------------------
 * - Resolve the dynamic post slug
 * - Generate known post paths
 * - Fetch the complete post
 * - Handle missing posts with notFound()
 * - Generate dynamic SEO metadata
 * - Generate article structured data
 * - Generate breadcrumb structured data
 * - Pass the resolved post to SinglePost
 *
 * DOES NOT OWN
 * ---------------------------------------------------------
 * - GROQ queries
 * - Sanity client logic
 * - Article presentation
 * - Portable Text rendering
 * - Table of contents behaviour
 * - Article styling
 *
 * DATA SOURCES
 * ---------------------------------------------------------
 *
 * Technical configuration
 *   → siteConfig
 *
 * Global CMS settings
 *   → getSiteSettings()
 *
 * Post content
 *   → getPost()
 *
 * Post SEO overrides
 *   → getPostMetadata()
 *
 * ARCHITECTURE
 * ---------------------------------------------------------
 *
 * Route
 *   ↓
 * getPost()
 *   ↓
 * POST_QUERY
 *   ↓
 * SinglePost
 *
 * SEO
 *   ↓
 * getPostMetadata()
 *   ↓
 * POST_METADATA_QUERY
 *   ↓
 * generateMetadata()
 *
 * Structured data
 *   ↓
 * JSON-LD
 *
 * CACHE
 * ---------------------------------------------------------
 * Cache Components and Sanity Live behaviour are owned by
 * the Sanity data-access layer.
 *
 * This route does not use manual caching.
 *
 * =========================================================
 */

type BlogPostPageProps = {
  params: Promise<{
    "post-slug": string;
  }>;
};

/**
 * =========================================================
 * URL HELPERS
 * =========================================================
 *
 * Converts relative URLs into absolute URLs using the
 * current deployment's canonical site origin.
 *
 * This allows development, beta, and production to generate
 * the correct URLs without changing application code.
 * =========================================================
 */

function toAbsoluteUrl(value: string): string {
  return new URL(value, siteConfig.url).toString();
}

/**
 * =========================================================
 * JSON-LD SERIALIZATION
 * =========================================================
 *
 * Safely serializes structured data before placing it inside
 * a script element.
 *
 * Escaping "<" prevents HTML-sensitive content from
 * terminating the script context unexpectedly.
 * =========================================================
 */

function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

/**
 * =========================================================
 * STATIC ROUTE PARAMETERS
 * =========================================================
 *
 * Provides known post slugs to Next.js.
 *
 * The Sanity query and data-access behaviour remain inside
 * getPostSlugs().
 * =========================================================
 */

export async function generateStaticParams() {
  const posts = await getPostSlugs();

  return posts.map((post) => ({
    "post-slug": post.slug,
  }));
}

/**
 * =========================================================
 * DYNAMIC METADATA
 * =========================================================
 *
 * Metadata resolution follows the site's editorial fallback
 * hierarchy.
 *
 * TITLE
 * ---------------------------------------------------------
 * post.metadata.title
 *        ↓
 * post.title
 *
 * DESCRIPTION
 * ---------------------------------------------------------
 * post.metadata.description
 *        ↓
 * post.excerpt
 *        ↓
 * siteSettings.siteDescription
 *
 * SOCIAL IMAGE
 * ---------------------------------------------------------
 * post.metadata.socialImage
 *        ↓
 * post.featuredImage
 *        ↓
 * siteSettings.defaultSocialImage
 *
 * CANONICAL
 * ---------------------------------------------------------
 * post.metadata.canonical
 *        ↓
 * generated article URL
 *
 * ROBOTS
 * ---------------------------------------------------------
 * post.metadata.noIndex
 *        ↓
 * indexable
 *
 * Technical URL information comes from siteConfig.
 * Editorial defaults come from Site Settings.
 * Article-specific overrides come from the post metadata.
 *
 * =========================================================
 */

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { "post-slug": slug } = await params;

  const [post, settings] = await Promise.all([
    getPostMetadata(slug),
    getSiteSettings(),
  ]);

  /**
   * If the post does not exist, there is no article metadata
   * to generate.
   *
   * The actual page fetch independently handles the 404.
   */
  if (!post) {
    return {};
  }

  const title = post.metadata?.title ?? post.title;

  const description =
    post.metadata?.description ??
    post.excerpt ??
    settings.siteDescription;

  /**
   * Editorial canonical values may be either absolute or
   * relative URLs.
   *
   * Relative values are resolved against the current
   * environment's site URL.
   */
  const canonical = toAbsoluteUrl(
    post.metadata?.canonical ??
      `/writing/${post.slug}`,
  );

  /**
   * Social image fallback hierarchy:
   *
   * 1. Post-specific editorial social image
   * 2. Post featured image
   * 3. Global Site Settings social image
   */
  const socialImage =
    post.metadata?.socialImage?.asset?.url ??
    post.featuredImage?.asset?.url ??
    settings.defaultSocialImage?.asset?.url;

  const socialImageAlt =
    post.metadata?.socialImageAlt ??
    post.featuredImage?.alt ??
    settings.siteName;

  return {
    /**
     * Allows relative metadata URLs to resolve against the
     * current deployment environment.
     */
    metadataBase: new URL(siteConfig.url),

    title,

    description,

    alternates: {
      canonical,
    },

    /**
     * Only explicitly set robots directives when the editor
     * has requested no indexing.
     *
     * Otherwise Next.js/search engines receive the normal
     * indexable default.
     */
    robots: post.metadata?.noIndex
      ? {
          index: false,
          follow: false,
        }
      : undefined,

    openGraph: {
      type: "article",

      title,

      description,

      url: canonical,

      siteName: settings.siteName,

      publishedTime: post.publishedAt,

      modifiedTime: post._updatedAt,

      authors: [post.author.name],

      ...(socialImage
        ? {
            images: [
              {
                url: socialImage,
                alt: socialImageAlt,
              },
            ],
          }
        : {}),
    },

    twitter: {
      card: "summary_large_image",

      title,

      description,

      ...(socialImage
        ? {
            images: [socialImage],
          }
        : {}),
    },
  };
}

/**
 * =========================================================
 * ARTICLE STRUCTURED DATA
 * =========================================================
 *
 * Generates Schema.org Article structured data.
 *
 * Technical identity:
 *   → siteConfig
 *
 * Editorial site identity:
 *   → Site Settings
 *
 * Article facts:
 *   → Sanity post
 *
 * This structured data is generated by Next.js rather than
 * stored in Sanity.
 * =========================================================
 */

function createArticleSchema(
  post: NonNullable<Awaited<ReturnType<typeof getPost>>>,
  siteName: string,
) {
  const canonicalUrl = `${siteConfig.url}/writing/${post.slug}`;

  const imageUrl = post.featuredImage?.asset?.url;

  return {
    "@context": "https://schema.org",

    "@type": "Article",

    "@id": `${canonicalUrl}#article`,

    url: canonicalUrl,

    headline: post.title,

    description: post.excerpt,

    datePublished: post.publishedAt,

    dateModified: post._updatedAt,

    author: {
      "@type": "Person",

      "@id": `${siteConfig.url}/#person`,

      name: post.author.name,
    },

    publisher: {
      "@type": "Person",

      "@id": `${siteConfig.url}/#person`,

      name: siteName,

      url: siteConfig.url,
    },

    mainEntityOfPage: {
      "@type": "WebPage",

      "@id": canonicalUrl,
    },

    isPartOf: {
      "@type": "WebSite",

      "@id": `${siteConfig.url}/#website`,

      name: siteName,

      url: siteConfig.url,
    },

    ...(post.category?.name
      ? {
          articleSection: post.category.name,
        }
      : {}),

    ...(imageUrl
      ? {
          image: [imageUrl],
        }
      : {}),
  };
}

/**
 * =========================================================
 * BREADCRUMB STRUCTURED DATA
 * =========================================================
 *
 * Provides machine-readable navigation hierarchy.
 *
 * Current hierarchy:
 *
 * Home
 *   ↓
 * Writing
 *   ↓
 * Article
 *
 * Category is intentionally not included as a linked
 * breadcrumb because the website does not currently have
 * a dedicated category archive route.
 *
 * The visual breadcrumb remains the responsibility of
 * SinglePost.
 *
 * =========================================================
 */

function createBreadcrumbSchema(
  post: NonNullable<Awaited<ReturnType<typeof getPost>>>,
) {
  const canonicalUrl = `${siteConfig.url}/writing/${post.slug}`;

  return {
    "@context": "https://schema.org",

    "@type": "BreadcrumbList",

    itemListElement: [
      {
        "@type": "ListItem",

        position: 1,

        name: "Home",

        item: siteConfig.url,
      },

      {
        "@type": "ListItem",

        position: 2,

        name: "Writing",

        item: `${siteConfig.url}/writing`,
      },

      {
        "@type": "ListItem",

        position: 3,

        name: post.title,

        item: canonicalUrl,
      },
    ],
  };
}

/**
 * =========================================================
 * DYNAMIC POST CONTENT
 * =========================================================
 *
 * Fetches the complete post and the global Site Settings
 * required for structured data.
 *
 * The dynamic content remains behind Suspense while
 * Cache Components are enabled.
 * =========================================================
 */

async function BlogPostContent({
  params,
}: BlogPostPageProps) {
  const { "post-slug": slug } = await params;

  const [post, settings] = await Promise.all([
    getPost(slug),
    getSiteSettings(),
  ]);

  /**
   * A missing Sanity document is a genuine 404.
   */
  if (!post) {
    notFound();
  }

  const articleSchema = createArticleSchema(
    post,
    settings.siteName,
  );

  const breadcrumbSchema =
    createBreadcrumbSchema(post);

  return (
    <>
      {/* =================================================
          ARTICLE STRUCTURED DATA
      ================================================= */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(articleSchema),
        }}
      />

      {/* =================================================
          BREADCRUMB STRUCTURED DATA
      ================================================= */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(
            breadcrumbSchema,
          ),
        }}
      />

      {/* =================================================
          ARTICLE PRESENTATION
      ================================================= */}

      <SinglePost post={post} />
    </>
  );
}

/**
 * =========================================================
 * PAGE
 * =========================================================
 *
 * The route itself intentionally remains thin.
 *
 * Next.js concerns:
 * - Dynamic routing
 * - Static parameters
 * - Metadata
 * - 404 handling
 * - Structured data
 *
 * Data access:
 * - Sanity fetch layer
 *
 * Presentation:
 * - SinglePost
 *
 * =========================================================
 */

export default function BlogPostPage({
  params,
}: BlogPostPageProps) {
  return (
    <main className="post-page">
      <Suspense fallback={null}>
        <BlogPostContent params={params} />
      </Suspense>
    </main>
  );
}
