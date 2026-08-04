/**
 * Footer used across internal testing routes.
 *
 * Provides basic context about the purpose of the test area
 * and quick navigation back to the main website.
 */
export default function TestFooter() {
  return (
    <footer className="mt-auto border-t border-gray-200 bg-gray-50">
      <div className="container-wide py-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold">Internal Test Environment</p>

            <p className="mt-1 max-w-xl text-sm text-gray-600">
              Sandbox for testing components, integrations, CMS data, and application behavior
              without affecting production-facing pages.
            </p>
          </div>

          <div className="text-sm text-gray-500">
            <p>Environment: Development</p>
            <p>Framework: Next.js</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
