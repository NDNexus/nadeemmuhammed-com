import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

import TableOfContents from "./TableOfContents/TableOfContents";
import { extractTableOfContents } from "./TableOfContents/headingUtils";
import PostBody from "./PostBody";

import Badge from "@/components/ui/Badge";
import { DiamondIcon } from "@/components/ui/DiamondIcon";

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

      <section className="section bg-canvas-subtle post__header-section">
        <div className="container-wide">
          {/* =================================================
              BREADCRUMBS
          ================================================= */}

          <nav className="post__breadcrumbs" aria-label="Breadcrumb">
            <ol>
              <li>
                <Link href="/" aria-label="Home" className="post__breadcrumb-home">
                  <Icon icon="solar:home-2-linear" aria-hidden="true" />

                  <span>Home</span>
                </Link>
              </li>

              <li className="post__breadcrumb-separator" aria-hidden="true">
                <Icon icon="solar:alt-arrow-right-linear" />
              </li>

              <li>
                <Link href="/writing">Writing</Link>
              </li>

              <li className="post__breadcrumb-separator" aria-hidden="true">
                <Icon icon="solar:alt-arrow-right-linear" />
              </li>

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
                  className="post__featured-image-image"
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
                <div
                  className="post__category category-theme"
                  data-theme={post.category.badgeTheme}
                >
                  <span
                    className="post__category-line"
                    data-theme={post.category.badgeTheme}
                    aria-hidden="true"
                  />

                  <span className="post__category-name">{post.category.name}</span>
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
                  <span className="post__tags-label">Tagged:</span>
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
                <div className="post__author">
                  <div className="post__author-avatar">
                    {post.author.avatar?.asset?.url ? (
                      <Image
                        src={post.author.avatar.asset.url}
                        alt={post.author.name}
                        width={48}
                        height={48}
                      />
                    ) : (
                      <div className="post__author-avatar-placeholder" aria-hidden="true" />
                    )}
                  </div>

                  <div className="post__author-info">
                    <span className="post__author-name">{post.author.name}</span>

                    <span className="post__author-role">Digital Systems Consultant</span>
                  </div>
                </div>

                <span className="post__meta-separator" aria-hidden="true">
                  <DiamondIcon />
                </span>

                <time className="post__published" dateTime={post.publishedAt}>
                  <span className="post__published-label">Published</span>

                  <span>
                    {new Intl.DateTimeFormat("en", {
                      dateStyle: "long",
                    }).format(new Date(post.publishedAt))}
                  </span>
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
