import Link from "next/link";
/**
 * Header used across internal testing routes.
 *
 * Clearly distinguishes test pages from production-facing
 * website pages while providing a consistent test environment.
 */
export default function TestHeader() {
  return (
    <header className="border-b border-amber-300 bg-amber-50">
      {/* Persistent test-environment ribbon */}
      <div className="bg-amber-400 px-4 py-2 text-center text-sm font-semibold text-amber-950">
        ⚠ Internal Testing Area — Not Production UI
      </div>

      <div className="container-wide flex items-center justify-between py-6">
        <div>
          <p className="text-overline">Development</p>
          <p className="font-semibold">Nadeem Muhammed — Test Environment</p>
        </div>

        <Link href="/" className="text-sm font-medium underline underline-offset-4">
          Return to website homepage
        </Link>
      </div>
    </header>
  );
}
