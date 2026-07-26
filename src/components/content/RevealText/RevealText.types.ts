import { ReactNode } from "react";

/**
 * Supported spacing values for RevealText.Break.
 * These should map directly to your design system spacing tokens.
 *
 * Example:
 * "lg" -> var(--space-lg)
 */
export type Gap = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

/**
 * Props for the RevealText component.
 */
export interface RevealTextProps {
  /**
   * Content to animate.
   *
   * Any direct React element is supported:
   * - p
   * - h1-h6
   * - div
   * - span
   * - blockquote
   * - etc.
   *
   * RevealText.Break is also supported.
   */
  children: ReactNode;

  /**
   * Optional class names applied to the root container.
   *
   * Intended for typography and layout utilities.
   */
  className?: string;
}

/**
 * Props for RevealText.Break.
 */
export interface RevealTextBreakProps {
  /**
   * Vertical spacing after the break.
   *
   * @default "md"
   */
  gap?: Gap;
}
