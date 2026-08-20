import { StageExplorer } from "@/components/ui/StageExplorer";

import type { ProjectsExplorerProps } from "./ProjectsExplorer.types";
import { ProjectStagePanel } from "./ProjectStagePanel";

/**
 * Adapts project data for rendering with the generic StageExplorer.
 *
 * ProjectsExplorer owns project-specific composition while
 * StageExplorer remains responsible for navigation and state.
 */
export function ProjectsExplorer({
  projects,
  activeIndex,
  defaultActiveIndex = 0,
  onProjectChange,
}: ProjectsExplorerProps) {
  /**
   * Convert each project into the generic stage shape expected
   * by StageExplorer.
   */
  const stages = projects.map((project) => ({
    id: project.id,
    title: project.title,
    subtitle: project.category,
    content: <ProjectStagePanel project={project} />,
  }));

  /**
   * Avoid rendering an empty explorer when no projects exist.
   */
  if (projects.length === 0) {
    return null;
  }

  return (
    <StageExplorer
      stages={stages}
      activeIndex={activeIndex}
      defaultActiveIndex={defaultActiveIndex}
      onStageChange={onProjectChange}
    />
  );
}
