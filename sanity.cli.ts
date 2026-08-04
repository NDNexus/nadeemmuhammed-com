import { defineCliConfig } from "sanity/cli";

/**
 * =========================================================
 * SANITY CLI CONFIGURATION
 * =========================================================
 *
 * Configures Sanity developer tooling for the Next.js app.
 *
 * The frontend uses this configuration primarily for TypeGen,
 * which generates TypeScript types from the extracted Studio
 * schema and GROQ queries found in the application source.
 * =========================================================
 */
export default defineCliConfig({
  /**
   * Identifies the Sanity project used by CLI tooling.
   */
  api: {
    projectId: "p5f7m1cp",
    dataset: "production",
  },

  /**
   * Generates TypeScript definitions from the extracted
   * Sanity schema and GROQ queries used by the frontend.
   */
  typegen: {
    path: "./src/**/*.{ts,tsx,js,jsx}",
    schema: "./schema.json",
    generates: "./src/sanity/sanity.types.ts",

    /**
     * Enables generated query result types to be inferred
     * automatically when using the Sanity client.
     */
    overloadClientMethods: true,
  },
});
