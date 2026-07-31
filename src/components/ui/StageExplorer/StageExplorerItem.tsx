import type { Stage } from "./StageExplorer.types";
import { StageExplorerTimeline } from "./StageExplorerTimeline";
import type { StageExplorerTimelineState } from "./StageExplorerTimeline";

interface StageExplorerItemProps {
  /**
   * Stage represented by this navigation item.
   */
  stage: Stage;

  /**
   * Position within the navigation.
   */
  index: number;

  /**
   * Whether this stage is currently active.
   */
  active: boolean;

  /**
   * Whether this is the final stage.
   */
  isLast: boolean;

  /**
   * Called when the item is selected.
   */
  onClick: () => void;
}

/**
 * A single interactive navigation item within the StageExplorer.
 */
export function StageExplorerItem({ stage, active, index, isLast, onClick }: StageExplorerItemProps) {

  const state: StageExplorerTimelineState = active ? "active" : "upcoming";

  return (
    <button
      type="button"
      className={`stage-explorer-item ${active ? "is-active" : ""}`}
      onClick={onClick}
      aria-current={active ? "step" : undefined}
    >
      <span className="stage-explorer-item__number" aria-hidden="true">
        {String(index + 1).padStart(2, "0")}
      </span>

      <StageExplorerTimeline state={state} isLast={isLast} />

      <span className="stage-explorer-item__content">
        <span className="stage-explorer-item__title">{stage.title}</span>

        {stage.subtitle && <span className="stage-explorer-item__subtitle">{stage.subtitle}</span>}
      </span>
    </button>
  );
}
