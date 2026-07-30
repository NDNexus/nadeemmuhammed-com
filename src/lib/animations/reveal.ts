import type { Variants } from "framer-motion";

import { tokens } from "./tokens";

/**
 * Shared reveal animation variants.
 *
 * Used for individual element entrance animations.
 */
export const reveal = {
  /**
   * Reveals an element by fading in.
   */
  fade: {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,

      transition: {
        duration: tokens.duration.normal,
        ease: tokens.ease.standard,
      },
    },
  },

  /**
   * Reveals an element by fading upward.
   */
  up: {
    hidden: {
      opacity: 0,
      y: tokens.distance.md,
      filter: `blur(${tokens.blur.md})`,
    },

    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",

      transition: {
        duration: tokens.duration.normal,
        ease: tokens.ease.standard,
      },
    },
  },

  /**
   * Reveals an element by fading downward.
   */
  down: {
    hidden: {
      opacity: 0,
      y: -tokens.distance.md,
      filter: `blur(${tokens.blur.md})`,
    },

    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",

      transition: {
        duration: tokens.duration.normal,
        ease: tokens.ease.standard,
      },
    },
  },

  /**
   * Reveals an element from the left.
   */
  left: {
    hidden: {
      opacity: 0,
      x: -tokens.distance.md,
      filter: `blur(${tokens.blur.md})`,
    },

    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",

      transition: {
        duration: tokens.duration.normal,
        ease: tokens.ease.standard,
      },
    },
  },

  /**
   * Reveals an element from the right.
   */
  right: {
    hidden: {
      opacity: 0,
      x: tokens.distance.md,
      filter: `blur(${tokens.blur.md})`,
    },

    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",

      transition: {
        duration: tokens.duration.normal,
        ease: tokens.ease.standard,
      },
    },
  },

  /**
   * Reveals an element with a subtle scale.
   */
  scale: {
    hidden: {
      opacity: 0,
      scale: tokens.scale.subtle,
      filter: `blur(${tokens.blur.sm})`,
    },

    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",

      transition: {
        duration: tokens.duration.normal,
        ease: tokens.ease.standard,
      },
    },
  },
} satisfies {
  fade: Variants;
  up: Variants;
  down: Variants;
  left: Variants;
  right: Variants;
  scale: Variants;
};
