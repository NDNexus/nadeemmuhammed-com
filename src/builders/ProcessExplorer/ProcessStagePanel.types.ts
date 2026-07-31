import type { ProcessStage } from "@/builders/models/Process";

/**
 * Props for the ProcessStagePanel component.
 */
export interface ProcessStagePanelProps {
  /**
   * The process stage to display.
   */
  stage: ProcessStage;
}
