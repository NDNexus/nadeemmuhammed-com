import { createImageUrlBuilder, type SanityImageSource } from "@sanity/image-url";

import { client } from "./client";

/**
 * Shared Sanity image URL builder.
 *
 * Uses the configured Sanity client to generate URLs
 * for images stored in the Sanity image CDN.
 */
const builder = createImageUrlBuilder(client);

/**
 * Creates an image URL builder for a Sanity image value.
 *
 * The returned builder can be chained with transformations
 * such as width, height, format, and quality.
 *
 * @param source - Sanity image value or asset reference.
 */
export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
