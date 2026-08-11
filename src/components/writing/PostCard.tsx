import Image from "next/image";
import Link from "next/link";

import Badge from "@/components/ui/Badge";

import type { POSTS_QUERY_RESULT } from "@/sanity/sanity.types";

/**
 * =========================================================
 * POST CARD
 * =========================================================
 *
 * Displays a single writing article preview in the archive.
 *
 * Responsibilities:
 * - Render featured media
 * - Display category
 * - Display title and excerpt
 * - Display optional topics
 * - Link the card to the article
 *
 * The post type is derived directly from the generated
 * POSTS_QUERY_RESULT type.
 * =========================================================
 */

interface PostCardProps {
  post: POSTS_QUERY_RESULT["posts"][number];
}

export default function PostCard({ post }: PostCardProps) {
  const postHref = `/writing/${post.slug}`;

  return (
    <article className="card card-content">
      <Link href={postHref} className="card-content__link" aria-label={`Read ${post.title}`}>
        {/* =================================================
            MEDIA
        ================================================= */}

        <div className="card__media">
          {post.featuredImage.url ? (
            <Image
              src={post.featuredImage.url}
              alt={post.featuredImage.alt}
              fill
              sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
              className="card__media-image"
            />
          ) : (
            <div className="card__media-placeholder" aria-hidden="true" />
          )}
        </div>

        {/* =================================================
            BODY
        ================================================= */}

        <div className="card__body">
          {/* Category */}

          {post.category ? (
            <div
              className="card-content__category category-theme"
              data-theme={post.category.badgeTheme}
            >
              <span className="card-content__category-line" aria-hidden="true" />

              <span>{post.category.name}</span>
            </div>
          ) : null}

          {/* Title */}

          <h2 className="heading-md">{post.title}</h2>

          {/* Excerpt */}

          {post.excerpt ? <p className="text-body">{post.excerpt}</p> : null}

          {/* Topics */}

          {post.tags?.length ? (
            <div className="card__meta" aria-label="Topics">
              {post.tags.map((tag) => (
                <Badge key={tag._id} theme={tag.badgeTheme}>
                  {tag.name}
                </Badge>
              ))}
            </div>
          ) : null}

          {/* Subtle link indication */}

          <span className="card-content__indicator" aria-hidden="true">
            ↗
          </span>
        </div>
      </Link>
    </article>
  );
}
