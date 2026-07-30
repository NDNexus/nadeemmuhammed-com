import type { Transition } from "framer-motion";

/**
 * Shared spring transition presets.
 *
 * Used for interactive and layout animations.
 */
export const spring = {
  /**
   * Balanced spring for most interactions.
   */
  default: {
    type: "spring",
    stiffness: 300,
    damping: 30,
    mass: 1,
  },

  /**
   * Softer spring for subtle motion.
   */
  gentle: {
    type: "spring",
    stiffness: 220,
    damping: 28,
    mass: 1,
  },

  /**
   * Responsive spring for quick feedback.
   */
  snappy: {
    type: "spring",
    stiffness: 450,
    damping: 35,
    mass: 1,
  },
} satisfies {
  default: Transition;
  gentle: Transition;
  snappy: Transition;
};
