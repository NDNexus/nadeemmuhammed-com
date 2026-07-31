import type { ProcessCollection } from "@/builders/models/Process";

/**
 * Props for the ProcessExplorer component.
 */
export interface ProcessExplorerProps {
  /**
   * The process definition to render.
   */
  process: ProcessCollection;
}
