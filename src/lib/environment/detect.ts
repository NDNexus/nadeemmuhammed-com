/**
 * Environment Detection
 *
 * Central source of truth for the application's runtime environment.
 *
 * Responsibilities:
 * - Detect the current deployment environment.
 * - Detect the active Git branch.
 * - Generate the appropriate environment badge.
 * - Expose convenient boolean helpers.
 *
 * This module is intended for Server Components only.
 */

import { BRANCHES } from "./constants";
import { getGitBranch } from "./git.server";
import type { DeploymentEnvironment, EnvironmentInfo, GitBranch } from "./types";

/**
 * Safely converts any branch name into one of the supported application branches.
 *
 * Unknown or unsupported branch names are intentionally mapped to "unknown"
 * so the rest of the application never has to deal with arbitrary strings.
 */
function normalizeBranch(branch: string | undefined): GitBranch {
  switch (branch) {
    case BRANCHES.main:
      return "main";

    case BRANCHES.beta:
      return "beta";

    default:
      return "unknown";
  }
}

/**
 * Returns the current deployment environment.
 */
function getDeploymentEnvironment(): DeploymentEnvironment {
  if (!process.env.VERCEL) {
    return "local";
  }

  switch (process.env.VERCEL_ENV) {
    case "production":
      return "production";

    case "preview":
      return "preview";

    default:
      return "unknown";
  }
}

/**
 * Returns information about the current runtime environment.
 */
export function getEnvironment(): EnvironmentInfo {
  const deployment = getDeploymentEnvironment();

  const branch =
    deployment === "local"
      ? normalizeBranch(getGitBranch())
      : normalizeBranch(process.env.VERCEL_GIT_COMMIT_REF);

  const isLocal = deployment === "local";
  const isProduction = deployment === "production";
  const isPreview = deployment === "preview";
  const isBeta = branch === "beta";

  return {
    deployment,
    branch,

    isLocal,
    isProduction,
    isPreview,
    isBeta,
  };
}
