import type { Variants } from "framer-motion";

/**
 * Shared stagger animation variants.
 *
 * Used to stagger child animations.
 */
export const stagger = {
  /**
   * Minimal delay between children.
   */
  tight: {
    hidden: {},

    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  },

  /**
   * Balanced delay for most layouts.
   */
  normal: {
    hidden: {},

    visible: {
      transition: {
        staggerChildren: 0.20,
      },
    },
  },

  /**
   * Relaxed delay for featured content.
   */
  relaxed: {
    hidden: {},

    visible: {
      transition: {
        staggerChildren: 0.30,
      },
    },
  },
} satisfies {
  tight: Variants;
  normal: Variants;
  relaxed: Variants;
};
