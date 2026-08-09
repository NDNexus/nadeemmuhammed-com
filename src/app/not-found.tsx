import Link from "next/link";
import Header from "@layout/Header";
import Footer from "@layout/Footer";

/**
 * =========================================================
 * NOT FOUND PAGE
 * =========================================================
 *
 * PURPOSE
 * ---------------------------------------------------------
 * Custom branded 404 experience.
 *
 * Next.js automatically renders this when:
 *
 * - a route does not exist
 * - notFound() is called
 *
 *
 * UX GOALS
 * ---------------------------------------------------------
 * - explain clearly
 * - preserve trust
 * - provide recovery path
 * - maintain brand consistency
 *
 * =========================================================
 */

export default function NotFoundPage() {
  return (
    <>
      <Header />

      <main>

        {/** 404 Section */}
        <section className="section">
          <div className="container-wide flow items-center text-center">
            <p className="text-subtle hover:text-accent text-9xl font-extrabold transition-colors duration-900 ease-in-out">
              404
            </p>

            <h1 className="heading-lg">This page doesn&rsquo;t seem to exist.</h1>

            <p className="text-body-lg text-subtle">
              It may have been moved, removed, or the URL may be incorrect. You can head home or
              continue exploring below.
            </p>

            <div className="flex justify-center pt-4">
              <Link href="/" className="btn btn-primary">
                Return Home
              </Link>

              <Link href="/services" className="btn btn-secondary">
                Explore Services
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
