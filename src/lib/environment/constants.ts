/**
 * Environment Constants
 *
 * Central place for domains and branch names.
 * Avoid hardcoding these throughout the project.
 */

export const DOMAINS = {
  production: "nadeemmuhammed.com",
  beta: "beta.nadeemmuhammed.com",
  localhost: "localhost",
} as const;

export const BRANCHES = {
  main: "main",
  beta: "beta",
} as const;
