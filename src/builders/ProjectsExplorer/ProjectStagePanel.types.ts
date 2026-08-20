import type { Project } from "@/builders/models/Project";

/**
 * Props for the project detail panel.
 */
export interface ProjectStagePanelProps {
  /**
   * Project currently selected in the explorer.
   */
  project: Project;
}
