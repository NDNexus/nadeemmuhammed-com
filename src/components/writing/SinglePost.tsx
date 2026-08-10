import Image from "next/image";
import Link from "next/link";

import TableOfContents from "./TableOfContents/TableOfContents";
import { extractTableOfContents } from "./TableOfContents/headingUtils";
import PostBody from "./PostBody";

import Badge from "@/components/ui/Badge";

import type { POST_QUERY_RESULT } from "@/sanity/sanity.types";

/**
 * =========================================================
 * SINGLE POST
 * =========================================================
 *
 * PURPOSE
 * ---------------------------------------------------------
 * Presentation template for an individual writing article.
 *
* RESPONSIBILITIES
 * ---------------------------------------------------------
 *
 * - Render article breadcrumbs
 * - Render the premium article header
 * - Render featured media
 * - Render category
 * - Render title and excerpt
 * - Render tags
 * - Render article metadata
 * - Provide the article reading layout
 * - Pass article content to PostBody
 * - Pass normalized headings to TableOfContents
 *
 * DOES NOT OWN
 * ---------------------------------------------------------
 *
 * - Data fetching
 * - Sanity queries
 * - SEO metadata
 * - JSON-LD
 * - Routing
 * - Portable Text rendering logic
 * - TOC extraction or interaction logic
 *
 * Child components own article content rendering and
 * Table of Contents behavior.
 *
 * LAYOUT SYSTEM
 * ---------------------------------------------------------
 * Page rhythm:
 *
 * section
 *   ↓
 * container-wide
 *   ↓
 * grid / component
 *
 * Typography, spacing, colours, badges and containers are
 * provided by the existing design system.
 *
 * =========================================================
 */

type SinglePostProps = {
  post: NonNullable<POST_QUERY_RESULT>;
};

export default function SinglePost({ post }: SinglePostProps) {

    const tocItems = extractTableOfContents(post.body);

  return (
    <article className="post">
      {/* =================================================
          ARTICLE HEADER
      ================================================= */}

      <section className="section post__header-section">
        <div className="container-wide">
          {/* =================================================
              BREADCRUMBS
          ================================================= */}

          <nav className="post__breadcrumbs" aria-label="Breadcrumb">
            <ol>
              <li>
                <Link href="/">Home</Link>
              </li>

              <li aria-hidden="true">/</li>

              <li>
                <Link href="/writing">Writing</Link>
              </li>

              <li aria-hidden="true">/</li>

              <li aria-current="page">{post.title}</li>
            </ol>
          </nav>

          {/* =================================================
              HEADER
          ================================================= */}

          <div className="grid-xl gap-xl post__header-grid grid">
            {/* ===============================================
                FEATURED IMAGE
            =============================================== */}

            <div className="post__featured-image">
              {post.featuredImage?.asset?.url ? (
                <Image
                  src={post.featuredImage.asset.url}
                  alt={post.featuredImage.alt}
                  fill
                  priority
                  sizes="(max-width: 767px) 100vw, 50vw"
                />
              ) : (
                <div className="post__featured-image-placeholder" aria-hidden="true" />
              )}
            </div>

            {/* ===============================================
                POST INFORMATION
            =============================================== */}

            <header className="post__header-content">
              {/* -------------------------------------------
                  CATEGORY
              ------------------------------------------- */}

              {post.category ? (
                <div className="post__category">
                  <span className="post__category-line" aria-hidden="true" />

                  <Badge theme={post.category.badgeTheme}>{post.category.name}</Badge>
                </div>
              ) : null}

              {/* -------------------------------------------
                  TITLE
              ------------------------------------------- */}

              <h1 className="heading-xl text-balance">{post.title}</h1>

              {/* -------------------------------------------
                  EXCERPT
              ------------------------------------------- */}

              {post.excerpt ? <p className="text-body-lg text-subtle">{post.excerpt}</p> : null}

              {/* -------------------------------------------
                  TAGS
              ------------------------------------------- */}

              {post.tags?.length ? (
                <div className="post__tags" aria-label="Topics">
                  {post.tags.map((tag) => (
                    <Badge key={tag._id} theme={tag.badgeTheme}>
                      {tag.name}
                    </Badge>
                  ))}
                </div>
              ) : null}

              {/* -------------------------------------------
                  METADATA
              ------------------------------------------- */}

              <div className="post__meta">
                <span>By {post.author.name}</span>

                <span className="meta-separator" aria-hidden="true" />

                <time dateTime={post.publishedAt}>
                  {new Intl.DateTimeFormat("en", {
                    dateStyle: "long",
                  }).format(new Date(post.publishedAt))}
                </time>
              </div>
            </header>
          </div>
        </div>
      </section>

      {/* =================================================
          ARTICLE
      ================================================= */}

      <section className="section post__body-section">
        <div className="container-wide">
          <div
            className={`post__reading-layout${
              tocItems.length === 0 ? "post__reading-layout--without-toc" : ""
            }`}
          >
            {/* =================================================
                TABLE OF CONTENTS
            ================================================= */}

            {tocItems.length > 0 ? (
              <aside className="post__toc">
                <TableOfContents items={tocItems} />
              </aside>
            ) : null}

            {/* =================================================
                ARTICLE CONTENT
            ================================================= */}

            <div className="post__content text-content">
              <PostBody value={post.body} />
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
