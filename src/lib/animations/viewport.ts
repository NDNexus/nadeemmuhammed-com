/**
 * Shared viewport settings for scroll-triggered animations.
 *
 * Most components should use `viewport.default`.
 */

import type { ViewportOptions } from "framer-motion";

export const viewport = {
  default: {
    once: true,
    amount: 0.2,
  },
} satisfies {
  default: ViewportOptions;
};
