import { CodeBlock } from "@/components/content/CodeBlock";
import { getSiteSettings } from "@/sanity/lib/fetch/siteSettings";

/**
 * =========================================================
 * SANITY TEST
 * =========================================================
 *
 * Internal development page for verifying the connection
 * between the Next.js application and Sanity.
 *
 * Fetches the global Site Settings document through the
 * application's Sanity Live fetching infrastructure and
 * displays the returned data for inspection.
 * =========================================================
 */

export default async function SanityTestPage() {
  const settings = await getSiteSettings();

  const settingsJson = JSON.stringify(settings, null, 2);

  return (
    <section className="section">
      <div className="container-wide">
        <div className="space-y-lg">
          <header>
            <p className="text-overline">Sanity Integration</p>

            <h1 className="heading-lg">Sanity Connection Test</h1>

            <p className="text-body">
              Published Site Settings fetched from Sanity through the application&apos;s live
              content infrastructure.
            </p>
          </header>

          <CodeBlock code={settingsJson} language="json" />
        </div>
      </div>
    </section>
  );
}
