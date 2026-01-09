/**
 * Converts a heading or phrase into a URL-safe slug.
 *
 * Used for generating stable anchor IDs for headings
 * (e.g. "Typography as a Calmness Multiplier" →
 * "typography-as-a-calmness-multiplier").
 *
 * Rules:
 * - Lowercases all characters
 * - Trims leading/trailing whitespace
 * - Removes punctuation and special characters
 * - Replaces spaces with hyphens
 *
 * This function is intentionally simple and deterministic
 * to ensure anchor links remain stable over time.
 *
 * @param text - The raw heading text to be converted into a slug
 * @returns A URL-friendly, lowercase slug string
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
}
