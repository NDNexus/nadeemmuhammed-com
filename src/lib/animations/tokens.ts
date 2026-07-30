/**
 * Shared animation design tokens.
 *
 * These values define the motion language used throughout the website.
 * Prefer reusing these tokens over introducing component-specific values.
 */

export const tokens = {
  duration: {
    instant: 0.15,
    fast: 0.25,
    normal: 0.5,
    slow: 0.8,
  },

  ease: {
    /**
     * Default easing used for most animations.
     *
     * Smooth, deliberate and slightly decelerated.
     */
    standard: [0.22, 1, 0.36, 1] as const,

    /**
     * Slightly more expressive.
     *
     * Ideal for hero sections and featured content.
     */
    emphasized: [0.16, 1, 0.3, 1] as const,

    /**
     * Balanced easing for hover interactions.
     */
    gentle: [0.4, 0, 0.2, 1] as const,
  },

  distance: {
    sm: 8,
    md: 16,
    lg: 24,
  },

  blur: {
    sm: "2px",
    md: "6px",
    lg: "10px",
  },

  scale: {
    subtle: 0.98,
    small: 0.96,
  },
} as const;

export type AnimationTokens = typeof tokens;
