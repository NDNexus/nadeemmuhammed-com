"use client";

import { useEffect } from "react";
import Link from "next/link";

/**
 * =========================================================
 * GLOBAL ERROR BOUNDARY
 * =========================================================
 *
 * PURPOSE
 * ---------------------------------------------------------
 * Handles unexpected runtime rendering errors.
 *
 * Next.js automatically renders this when route rendering
 * fails unexpectedly.
 *
 *
 * UX GOALS
 * ---------------------------------------------------------
 * - preserve professionalism
 * - prevent ugly framework crashes
 * - offer recovery actions
 * - maintain user trust
 *
 * =========================================================
 */

type ErrorPageProps = {
    error: Error & {
        digest?: string;
    };

    reset: () => void;
};

export default function ErrorPage({
    error,
    reset,
}: ErrorPageProps) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <main>
            <section className="section">
                <div className="container-wide flow text-center">
                    <p className="text-caption text-subtle">
                        Something went wrong
                    </p>

                    <h1 className="heading-display">
                        An unexpected error occurred.
                    </h1>

                    <p className="text-body-lg text-subtle">
                        Please try again, or return to the homepage.
                    </p>

                    <div className="flex justify-center gap-4 pt-4">
                        <button
                            type="button"
                            onClick={reset}
                            className="btn btn-primary"
                        >
                            Try Again
                        </button>

                        <Link
                            href="/"
                            className="btn btn-secondary"
                        >
                            Return Home
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}