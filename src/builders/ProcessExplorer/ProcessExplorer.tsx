import { StageExplorer } from "@/components/ui/StageExplorer";

import type { ProcessExplorerProps } from "./ProcessExplorer.types";
import { ProcessStagePanel } from "./ProcessStagePanel";

/**
 * Adapts a process definition for rendering with the generic StageExplorer.
 */
export function ProcessExplorer({ process }: ProcessExplorerProps) {
  const stages = process.stages.map((stage) => ({
    id: stage.id,
    title: stage.title,
    subtitle: stage.subtitle,
    content: <ProcessStagePanel stage={stage} />,
  }));

  return <StageExplorer stages={stages} />;
}
