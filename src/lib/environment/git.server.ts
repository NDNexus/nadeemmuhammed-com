/**
 * Git Utilities (Server Only)
 *
 * Reads Git metadata directly from the local repository.
 *
 * This file must NEVER be imported by Client Components.
 */

import "server-only";

import fs from "node:fs";
import path from "node:path";

/**
 * Cache the detected branch.
 */
let cachedBranch: string | null = null;

/**
 * Walk upwards until a .git directory is found.
 */
function findGitDirectory(startDir: string): string | null {
  let current = startDir;

  while (true) {
    const gitDir = path.join(current, ".git");

    if (fs.existsSync(gitDir)) {
      return gitDir;
    }

    const parent = path.dirname(current);

    if (parent === current) {
      return null;
    }

    current = parent;
  }
}

/**
 * Returns the current Git branch.
 */
export function getGitBranch(): string {
  if (cachedBranch) {
    return cachedBranch;
  }

  try {
    console.log("Current working directory:", process.cwd());

    const gitDir = findGitDirectory(process.cwd());

    console.log("Git directory:", gitDir);

    if (!gitDir) {
      return "unknown";
    }

    const headPath = path.join(gitDir, "HEAD");

    console.log("HEAD path:", headPath);

    const head = fs.readFileSync(headPath, "utf8").trimEnd();

    console.log("HEAD contents:", head);

    const match = head.match(/^ref: refs\/heads\/(.+)$/);

    console.log("Regex match:", match);

    if (!match) {
      return "unknown";
    }

    cachedBranch = match[1];

    return cachedBranch;
  } catch (error) {
    console.error(error);

    return "unknown";
  }
}
