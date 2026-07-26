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
        <section className="section">
          <div className="container-wide flow text-center items-center">
            <p className="text-9xl font-extrabold text-subtle hover:text-accent transition-colors duration-900 ease-in-out ">404</p>

            <h1 className="heading-lg">The page you&rsquo;re looking for doesn&rsquo;t exist.</h1>

            <p className="text-body-lg text-subtle">
              It may have been moved, removed, or the link may be incorrect.
            </p>

            <div className="flex justify-center pt-4">
              <Link href="/" className="btn btn-primary">
                Return Home
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
