/**
 * =========================================================
 * PROJECT MODEL
 * =========================================================
 *
 * Represents a project displayed by the website.
 *
 * This model describes project information only.
 * Presentation belongs to ProjectsExplorer and its panel.
 *
 * =========================================================
 */

export interface Project {
  /**
   * Stable identifier used for keys and accessibility.
   *
   * Example:
   * "noblemens"
   */
  id: string;

  /**
   * Project name.
   *
   * Example:
   * "Noblemens"
   */
  title: string;

  /**
   * Short contextual label shown with the project.
   *
   * Example:
   * "Natural products · Digital strategy · Design & development"
   */
  category: string;

  /**
   * Concise explanation of the business context,
   * problem, or opportunity behind the project.
   */
  overview: string;

  /**
   * Structured summary of the work performed.
   */
  work: ProjectWorkItem[];

  /**
   * Concise description of the resulting system,
   * current state, or meaningful outcome.
   *
   * This should describe known facts rather than
   * invented metrics or unsupported claims.
   */
  outcome: string;

  /**
   * Project preview image.
   */
  image: ProjectImage;

  /**
   * Optional live project link.
   */
  link?: ProjectLink;
}

/**
 * =========================================================
 * PROJECT WORK ITEM
 * =========================================================
 */

export interface ProjectWorkItem {
  /**
   * Short heading describing an area of work.
   *
   * Example:
   * "Digital strategy"
   */
  title: string;

  /**
   * Concise explanation of what was done.
   */
  description: string;
}

/**
 * =========================================================
 * PROJECT IMAGE
 * =========================================================
 */

export interface ProjectImage {
  /**
   * Image source.
   */
  src: string;

  /**
   * Accessible image description.
   */
  alt: string;

  /**
   * Intrinsic image width in pixels.
   */
  width: number;

  /**
   * Intrinsic image height in pixels.
   */
  height: number;
}

/**
 * =========================================================
 * PROJECT LINK
 * =========================================================
 */

export interface ProjectLink {
  /**
   * Destination URL.
   */
  href: string;

  /**
   * Visible link label.
   *
   * ProjectsExplorer can fall back to "View project"
   * when this is omitted.
   */
  label?: string;

  /**
   * Whether the destination should open in a new tab.
   *
   * Defaults to true for external project URLs.
   */
  external?: boolean;
}
