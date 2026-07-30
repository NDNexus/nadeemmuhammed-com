import type { TargetAndTransition } from "framer-motion";

import { spring } from "./spring";

/**
 * Shared hover animation presets.
 *
 * Used with `whileHover`.
 */
export const hover = {
  /**
   * Subtle scale for buttons and interactive elements.
   */
  default: {
    scale: 1.02,
    transition: spring.default,
  },

  /**
   * Slight lift for cards and larger surfaces.
   */
  lift: {
    y: -2,
    scale: 1.01,
    transition: spring.default,
  },

  /**
   * Gentle scale for icons.
   */
  icon: {
    scale: 1.08,
    transition: spring.snappy,
  },
} satisfies {
  default: TargetAndTransition;
  lift: TargetAndTransition;
  icon: TargetAndTransition;
};
