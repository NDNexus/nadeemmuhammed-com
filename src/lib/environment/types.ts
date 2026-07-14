/**
 * Environment Types
 *
 * Defines the public types used by the environment system.
 */

export type DeploymentEnvironment = "local" | "preview" | "production" | "unknown";

export type GitBranch = "main" | "beta" | "unknown";

export interface EnvironmentInfo {
  deployment: DeploymentEnvironment;
  branch: GitBranch;
  isLocal: boolean;
  isProduction: boolean;
  isPreview: boolean;
  isBeta: boolean;
}
