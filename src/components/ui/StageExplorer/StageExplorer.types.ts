import { ReactNode } from "react";

/**
 * Represents a single stage displayed by the StageExplorer.
 *
 * The component is intentionally content-agnostic. Each stage simply provides
 * metadata for the navigation and a ReactNode that will be rendered inside the
 * active content panel.
 */
export interface Stage {
  /**
   * Unique identifier.
   */
  id: string;

  /**
   * Navigation title.
   */
  title: string;

  /**
   * Optional short description displayed beneath the title.
   */
  subtitle?: string;

  /**
   * Arbitrary content rendered in the active panel.
   *
   * This can contain any valid React elements including:
   * - text
   * - cards
   * - diagrams
   * - images
   * - motion components
   * - custom layouts
   */
  content: ReactNode;
}

/**
 * Props accepted by the StageExplorer component.
 */
export interface StageExplorerProps {
  /**
   * Ordered collection of stages.
   */
  stages: Stage[];

  /**
   * Controlled active stage.
   *
   * When provided, the parent component is responsible for managing state.
   */
  activeIndex?: number;

  /**
   * Initial active stage for uncontrolled usage.
   *
   * Ignored when `activeIndex` is provided.
   *
   * Defaults to 0.
   */
  defaultActiveIndex?: number;

  /**
   * Fired whenever the active stage changes.
   */
  onStageChange?: (index: number) => void;
}
