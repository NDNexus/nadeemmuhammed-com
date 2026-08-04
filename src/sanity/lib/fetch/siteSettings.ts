import { sanityFetch } from "../live";
import { SITE_SETTINGS_QUERY } from "../queries/siteSettings";

/**
 * Fetches the global Site Settings singleton from Sanity.
 *
 * Uses Sanity Live so the result can participate in cached
 * fetching and automatic revalidation when content changes.
 *
 * Site Settings is the primary CMS source of truth for
 * editable values shared across the website.
 *
 * @throws If the Site Settings document does not exist.
 */
export async function getSiteSettings() {
   "use cache";
   
  const { data: settings } = await sanityFetch({
    query: SITE_SETTINGS_QUERY,
    perspective: "published",
    stega: false,
  });

  if (!settings) {
    throw new Error(
      "Site Settings could not be found. Ensure the singleton exists and is published in Sanity.",
    );
  }

  return settings;
}
