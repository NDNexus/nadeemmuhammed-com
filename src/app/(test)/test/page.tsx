import Link from "next/link";

const tests = [
  {
    title: "Sanity Integration",
    description:
      "Tests the connection between Next.js, Sanity, Site Settings, and Sanity Live.",
    href: "/test/sanity-test",
  },
];

/**
 * =========================================================
 * TEST ARCHIVE
 * =========================================================
 *
 * Internal index of development and integration test pages.
 * =========================================================
 */
export default function TestArchivePage() {
  return (
    <>
      <section className="section">
        <div className="container-wide">
          <div className="space-y-xl">
            <header className="space-y-sm">
              <p className="text-overline">Development</p>

              <h1 className="heading-lg">Test Archive</h1>

              <p className="text-body">
                Internal pages used to test components, integrations, and application behavior
                during development.
              </p>
            </header>

            <div className="grid gap-lg">
              {tests.map((test) => (
                <article key={test.href} className="card">
                  <div className="card__body">
                    <h2 className="heading-md">{test.title}</h2>

                    <p className="text-body">{test.description}</p>
                  </div>

                  <div className="card__footer">
                    <Link href={test.href} className="btn btn-secondary">
                      Open Test Page
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
