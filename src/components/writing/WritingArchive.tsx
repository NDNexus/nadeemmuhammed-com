import { getPosts, getWritingFilters } from "@/sanity/lib/fetch/posts";

import { loadWritingSearchParams } from "@/sanity/lib/searchParams";

import PostCard from "./PostCard";
import WritingFilters from "./WritingFilters";

type WritingArchiveProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

/**
 * =========================================================
 * WRITING ARCHIVE
 * =========================================================
 *
 * Server-rendered archive content driven by the current
 * Writing URL search parameters.
 *
 * Filter options and filtered posts are resolved on the
 * server while interactive controls remain client-side.
 * =========================================================
 */

export default async function WritingArchive({ searchParams }: WritingArchiveProps) {
  const filters = await loadWritingSearchParams(searchParams);

  const [{ posts, total }, filterOptions] = await Promise.all([
    getPosts(filters),
    getWritingFilters(),
  ]);

  return (
    <>
      <WritingFilters categories={filterOptions.categories} topics={filterOptions.topics} />

      <div className="writing-archive__results">
        <p className="text-body">
          {total} {total === 1 ? "article" : "articles"}
        </p>
      </div>

      {posts.length > 0 ? (
        <div className="writing-archive__grid grid-md gap-lg grid">
          {posts.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      ) : (
        <div className="writing-archive__empty" role="status">
          <h2 className="heading-md">No articles found</h2>

          <p className="text-body">
            Try adjusting your search or choosing a different category or topic.
          </p>
        </div>
      )}

      {/* Pagination will go here. */}
    </>
  );
}
