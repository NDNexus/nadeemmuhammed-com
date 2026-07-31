import { ReactNode } from "react";

/**
 * Represents a single step within a process stage.
 *
 * A stage step highlights one important part of the work
 * carried out during a stage.
 */
export interface ProcessStageStep {
  /**
   * Optional visual icon used to reinforce the step.
   */
  icon?: ReactNode;

  /**
   * Short descriptive heading.
   */
  title: string;

  /**
   * Brief explanation of what the step involves.
   */
  description: string;
}

/**
 * Represents a single stage within a process.
 */
export interface ProcessStage {
  /**
   * Unique identifier.
   */
  id: string;

  /**
   * Stage name.
   */
  title: string;

  /**
   * Short supporting statement describing the stage.
   */
  subtitle: string;

  /**
   * High-level introduction displayed before the stage steps.
   */
  overview: string;

  /**
   * Key steps performed during this stage.
   */
  steps: ProcessStageStep[];

  /**
   * Expected result after completing the stage.
   */
  outcome: {
    /**
     * Outcome section heading.
     */
    title: string;

    /**
     * Description of the expected result.
     */
    description: string;
  };

  /**
   * Optional supporting illustration.
   */
  illustration?: ReactNode;
}

/**
 * Represents a complete reusable process.
 */
export interface ProcessCollection {
  /**
   * Unique identifier.
   */
  id: string;

  /**
   * Human-readable process name.
   */
  title: string;

  /**
   * Ordered collection of process stages.
   */
  stages: ProcessStage[];
}
