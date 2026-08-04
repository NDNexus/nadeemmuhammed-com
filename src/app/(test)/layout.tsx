import type { Metadata } from "next";

import TestFooter from "@/Test/components/TestFooter";
import TestHeader from "@/Test/components/TestHeader";

/**
 * =========================================================
 * TEST LAYOUT
 * =========================================================
 *
 * Shared layout for internal testing routes.
 *
 * Provides a clearly identifiable testing environment with
 * its own header and footer while keeping development pages
 * separate from production-facing website layouts.
 *
 * All routes using this layout are excluded from search
 * engine indexing.
 * =========================================================
 */

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

type TestLayoutProps = {
  children: React.ReactNode;
};

export default function TestLayout({ children }: TestLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <TestHeader />

      <main className="flex-1">{children}</main>

      <TestFooter />
    </div>
  );
}
