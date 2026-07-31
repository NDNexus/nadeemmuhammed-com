import "./StageExplorerTimeline.css";

import type { StageExplorerTimelineProps } from "./StageExplorerTimeline.types";

/**
 * Renders the vertical timeline for a stage navigation item.
 */
export function StageExplorerTimeline({ state, isLast }: StageExplorerTimelineProps) {
  return (
    <span
      className={`stage-explorer-timeline stage-explorer-timeline--${state}`}
      aria-hidden="true"
    >
      <span className="stage-explorer-timeline__head">
        <span className="stage-explorer-timeline__dot" />
      </span>

      {!isLast && <span className="stage-explorer-timeline__line" />}
    </span>
  );
}
