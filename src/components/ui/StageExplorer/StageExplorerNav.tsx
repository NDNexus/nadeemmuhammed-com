import { StageExplorerItem } from "./StageExplorerItem";
import type { Stage } from "./StageExplorer.types";

interface StageExplorerNavProps {
  /**
   * Ordered collection of stages.
   */
  stages: Stage[];

  /**
   * Currently active stage index.
   */
  activeIndex: number;

  /**
   * Called when the user selects a stage.
   */
  onStageChange: (index: number) => void;
}

/**
 * Renders the navigation rail for the StageExplorer.
 */
export function StageExplorerNav({ stages, activeIndex, onStageChange }: StageExplorerNavProps) {
  return (
    <nav className="stage-explorer-nav" aria-label="Stage navigation">
      <ol className="stage-explorer-nav-list">
        {stages.map((stage, index) => (
          <li key={stage.id}>
            <StageExplorerItem
              stage={stage}
              index={index}
              active={index === activeIndex}
              isLast={index === stages.length - 1}
              onClick={() => onStageChange(index)}
            />
          </li>
        ))}
      </ol>
    </nav>
  );
}
