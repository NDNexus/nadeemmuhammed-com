"use client";

import "./StageExplorer.css";

import { useState } from "react";

import type { StageExplorerProps } from "./StageExplorer.types";
import { StageExplorerNav } from "./StageExplorerNav";
import { StageExplorerPanel } from "./StageExplorerPanel";

/**
 * StageExplorer
 *
 * A reusable editorial navigation component for presenting sequential content.
 *
 * Responsibilities:
 * - Manage the active stage
 * - Coordinate the navigation and content panel
 * - Support both controlled and uncontrolled usage
 * - Notify consumers when the active stage changes
 *
 * The component is intentionally content-agnostic and knows nothing about
 * the structure of the content it renders.
 */
export function StageExplorer({
  stages,
  activeIndex,
  defaultActiveIndex = 0,
  onStageChange,
}: StageExplorerProps) {
  /**
   * Internal state used when the component is uncontrolled.
   */
  const [internalIndex, setInternalIndex] = useState(defaultActiveIndex);

  /**
   * Resolve the current active stage.
   *
   * When `activeIndex` is provided, the component is controlled by the parent.
   * Otherwise, it falls back to its own internal state.
   */
  const currentIndex = activeIndex ?? internalIndex;

  /**
   * Nothing to render if no stages are provided.
   */
  if (stages.length === 0) {
    return null;
  }

  /**
   * Handles stage selection.
   *
   * Updates internal state only when uncontrolled, then notifies consumers.
   */
  function handleStageChange(index: number) {
    if (activeIndex === undefined) {
      setInternalIndex(index);
    }

    onStageChange?.(index);
  }

  return (
    <section className="stage-explorer">
      <div className="stage-explorer__layout">
        <StageExplorerNav
          stages={stages}
          activeIndex={currentIndex}
          onStageChange={handleStageChange}
        />

        <StageExplorerPanel stage={stages[currentIndex]} />
      </div>
    </section>
  );
}
