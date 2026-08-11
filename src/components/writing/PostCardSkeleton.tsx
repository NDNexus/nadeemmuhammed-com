/**
 * =========================================================
 * POST CARD SKELETON
 * =========================================================
 *
 * Loading placeholder for the Writing archive.
 *
 * Mirrors the PostCard structure so the archive can stream
 * content without causing noticeable layout shift.
 * =========================================================
 */

export default function PostCardSkeleton() {
  return (
    <article className="card card-content card-content--skeleton">
      <div className="card-content__link">
        {/* =================================================
            MEDIA
        ================================================= */}

        <div className="card__media">
          <div className="card-skeleton__media" />
        </div>

        {/* =================================================
            BODY
        ================================================= */}

        <div className="card__body">
          {/* Category */}

          <div className="card-content__category">
            <span className="card-skeleton__category-line" />

            <span className="card-skeleton__category" />
          </div>

          {/* Title */}

          <div className="card-skeleton__title">
            <span />
            <span />
          </div>

          {/* Excerpt */}

          <div className="card-skeleton__excerpt">
            <span />
            <span />
            <span />
          </div>

          {/* Topics */}

          <div className="card__meta">
            <span className="card-skeleton__tag" />
            <span className="card-skeleton__tag card-skeleton__tag--medium" />
          </div>

          {/* Indicator */}

          <span className="card-skeleton__indicator" />
        </div>
      </div>
    </article>
  );
}
