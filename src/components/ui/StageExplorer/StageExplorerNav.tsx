import { Icon } from "@iconify/react";

import { useRef, useState, useEffect } from "react";


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
const navListRef = useRef<HTMLOListElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  /**
   * Updates the horizontal scroll state of the navigation.
   */
  function updateScrollState() {
    const viewport = navListRef.current;

    if (!viewport) {
      return;
    }

    const { scrollLeft, scrollWidth, clientWidth } = viewport;

    console.log({
      scrollLeft,
      scrollWidth,
      clientWidth,
    });

    setCanScrollLeft(scrollLeft > 0);

    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
  }

  useEffect(() => {
    const viewport = navListRef.current;

    if (!viewport) {
      return;
    }

    updateScrollState();

    viewport.addEventListener("scroll", updateScrollState);

    return () => {
      viewport.removeEventListener("scroll", updateScrollState);
    };
  }, []);

  console.log({
    canScrollLeft,
    canScrollRight,
  });

  const viewportClassName = [
    "stage-explorer-nav__viewport",
    canScrollLeft && "has-left-fade",
    canScrollRight && "has-right-fade",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <nav className="stage-explorer-nav" aria-label="Stage navigation">
      <button
        type="button"
        className={`stage-explorer-nav__arrow stage-explorer-nav__arrow--left ${
          canScrollLeft ? "" : "is-hidden"
        }`}
        aria-label="Scroll to previous stages"
      >
        <Icon icon="solar:alt-arrow-left-linear" width={20} />
      </button>

      <div className={viewportClassName}>
        <ol ref={navListRef} className="stage-explorer-nav-list">
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
      </div>

      <button
        type="button"
        className={`stage-explorer-nav__arrow stage-explorer-nav__arrow--right ${
          canScrollRight ? "" : "is-hidden"
        }`}
        aria-label="Scroll to next stages"
      >
        <Icon icon="solar:alt-arrow-right-linear" width={20} />
      </button>
    </nav>
  );
}
