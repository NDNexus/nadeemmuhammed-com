/**
 * Visual states supported by the timeline.
 */
export type StageExplorerTimelineState = "upcoming" | "active" | "completed";

/**
 * Props accepted by the StageExplorerTimeline component.
 */
export interface StageExplorerTimelineProps {
  /**
   * Current visual state.
   */
  state: StageExplorerTimelineState;

  /**
   * Whether this is the final stage.
   */
  isLast: boolean;
}
