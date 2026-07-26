"use client";

import { motion } from "framer-motion";
import { Children, cloneElement, isValidElement, ReactElement } from "react";

import "./RevealText.css";

import type { RevealTextBreakProps, RevealTextProps } from "./RevealText.types";

/**
 * Inserts vertical spacing between groups of animated text.
 *
 * This component is intended to be used exclusively as a direct child of
 * {@link RevealText}. It renders a spacer element and is not animated.
 *
 * Example:
 *
 * <RevealText>
 *     <p>First group</p>
 *
 *     <RevealTextBreak gap="lg" />
 *
 *     <p>Second group</p>
 * </RevealText>
 */
export function RevealTextBreak({ gap = "md" }: RevealTextBreakProps) {
  return <div className={`reveal-text__break reveal-text__break--${gap}`} aria-hidden="true" />;
}

/**
 * Reveals each direct child independently as it enters the viewport.
 *
 * Rather than animating one large block, every direct child is wrapped in its
 * own motion container. This allows paragraphs, headings, quotes, or other
 * elements to reveal individually while preserving their original markup.
 *
 * Supported direct children include:
 *
 * - p
 * - h1-h6
 * - div
 * - span
 * - blockquote
 * - RevealTextBreak
 *
 * Notes:
 *
 * - Only direct children are animated.
 * - Nested descendants are left untouched.
 * - RevealTextBreak is rendered as a spacer and intentionally skips animation.
 * - This component is a Client Component because it relies on Framer Motion.
 *
 * Example:
 *
 * <RevealText className="text-display">
 *     <p>When technology</p>
 *     <p>creates more work,</p>
 *
 *     <RevealTextBreak gap="lg" />
 *
 *     <p>The answer</p>
 *     <p>isn't another tool.</p>
 * </RevealText>
 */
export function RevealText({ children, className = "" }: RevealTextProps) {
  const content = Children.toArray(children).map((child, index) => {
    // Preserve primitive children.
    if (!isValidElement(child)) {
      return child;
    }

    // Spacer elements are rendered directly without animation.
    if (child.type === RevealTextBreak) {
      return cloneElement(child as ReactElement<RevealTextBreakProps>, {
        key: `break-${index}`,
      });
    }

    // Animate all other direct children.
    return (
      <motion.div
        key={`line-${index}`}
        initial={{
          color: "var(--color-fg-subtle)",
        }}
        whileInView={{
          color: "var(--color-fg-default)",
        }}
        viewport={{
          once: false,
          amount: 1,
        }}
        transition={{
          duration: 2.5, // Slow enough to create an amazing effect.
        }}
      >
        {child}
      </motion.div>
    );
  });

  return <div className={`reveal-text ${className}`.trim()}>{content}</div>;
}
