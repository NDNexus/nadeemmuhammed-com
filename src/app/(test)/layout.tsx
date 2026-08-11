import type { Metadata } from "next";
import { Suspense } from "react";


import TestAccessBoundary from "./test/TestAccessBoundary";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

type TestLayoutProps = {
  children: React.ReactNode;
};

/**
 * =========================================================
 * TEST LAYOUT
 * =========================================================
 *
 * Shared layout for the internal test environment.
 *
 * Request-specific authentication is intentionally handled
 * by TestAccessBoundary rather than directly in this layout.
 *
 * This allows Next.js to keep the route shell prefetched and
 * stream the runtime-dependent access check separately.
 * =========================================================
 */
export default function TestLayout({ children }: TestLayoutProps) {
  return (
    <Suspense fallback={<TestAccessFallback />}>
      <TestAccessBoundary>{children}</TestAccessBoundary>
    </Suspense>
  );
}

/**
 * =========================================================
 * ACCESS FALLBACK
 * =========================================================
 *
 * Lightweight UI displayed while the server resolves the
 * request-specific test-area access state.
 * =========================================================
 */
function TestAccessFallback() {
  return (
    <main className="section">
      <div className="container-wide">
        <div className="space-y-sm max-w-prose">
          <p className="text-overline">Private Area</p>

          <h1 className="heading-lg">Test Environment</h1>

          <p className="text-body">Checking access…</p>
        </div>
      </div>
    </main>
  );
}
