import type { Project } from "@/builders/models/Project";

/**
 * Props accepted by ProjectsExplorer.
 */
export interface ProjectsExplorerProps {
  /**
   * Ordered collection of projects to display.
   */
  projects: Project[];

  /**
   * Controlled active project index.
   */
  activeIndex?: number;

  /**
   * Initial active project index for uncontrolled usage.
   */
  defaultActiveIndex?: number;

  /**
   * Called whenever the active project changes.
   */
  onProjectChange?: (index: number) => void;

  /**
   * Accessible label for the project navigation.
   */
  navigationLabel?: string;

  /**
   * Optional class name for page-level composition.
   */
  className?: string;
}
