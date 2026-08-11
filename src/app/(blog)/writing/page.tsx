import Footer from "@layout/Footer";
import Header from "@layout/Header";

import { Suspense } from "react";

import WritingArchive from "@/components/writing/WritingArchive";
import PostCardSkeleton from "@/components/writing/PostCardSkeleton";


type WritingPageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

/**
 * =========================================================
 * WRITING ARCHIVE SKELETON
 * =========================================================
 *
 * Renders the same grid geometry as the archive while
 * filtered post data is being resolved.
 * =========================================================
 */

function WritingArchiveSkeleton() {
  return (
    <section className="section">
      <div className="container-wide">
        <div className="grid-md gap-lg grid" aria-hidden="true">
          {Array.from({ length: 6 }).map((_, index) => (
            <PostCardSkeleton key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * =========================================================
 * WRITING ARCHIVE
 * =========================================================
 *
 * Server-rendered archive for published writing.
 *
 * URL search parameters are parsed with nuqs and passed to
 * the Sanity data layer for filtering and pagination.
 * =========================================================
 */

export default async function WritingPage({ searchParams }: WritingPageProps) {

  return (
    <>
      <Header />

      <main>
        {/* =========================================
            WRITING INTRO
        ========================================= */}
        <section className="section bg-canvas-dark text-fg-on-dark">
          <div className="container-wide flow">
            <p className="text-overline text-fg-on-emphasis">Writing</p>

            <div className="flow-lg text-content">
              <h1 className="heading-lg text-fg-on-emphasis">
                Thoughts on digital systems, development, business, and technology.
              </h1>

              <p className="text-body-lg text-fg-on-dark-subtle">
                Practical ideas, lessons, and perspectives from building digital products, systems,
                and businesses.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================
            WRITING ARCHIVE
        ========================================= */}
        <Suspense fallback={<WritingArchiveSkeleton />}>
          <section className="section">
            <div className="container-wide">
              <WritingArchive searchParams={searchParams} />
            </div>
          </section>
        </Suspense>
      </main>

      <Footer />
    </>
  );
}
