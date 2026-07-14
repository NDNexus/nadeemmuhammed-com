import Link from "next/link";

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
        <main>
            <section className="section">
                <div className="container-wide flow text-center">
                    <p className="text-caption text-subtle text-5xl">404</p>

                    <h1 className="heading-display">
                        The page you’re looking for doesn’t exist.
                    </h1>

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
    );
}