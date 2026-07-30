"use client";

import { motion, type Variants } from "framer-motion";
import React, { ReactNode } from "react";
import { reveal, stagger, viewport } from "@/lib/animations";
import "./InfoBlock.css";

export interface InfoBlockProps {
  /** Path to an SVG displayed alongside the block heading. */
  icon?: string;

  /** Path to an SVG used as the custom list marker. */
  listMarker?: string;

  /** Controls how lists are displayed. */
  listStyle?: "bullet" | "number" | "icon" | "icon-number";

  /** Enables reveal animations. */
  animate?: boolean;

  /** Additional class names. */
  className?: string;

  /** Semantic HTML content. */
  children: ReactNode;
}

export default function InfoBlock({
  icon,
  listMarker,
  listStyle = "icon",
  animate = false,
  className,
  children,
}: InfoBlockProps) {
  const classes = [
    "info-block",
    `info-block--${listStyle}`,
    icon && "info-block--has-icon",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const style =
    icon || listMarker
      ? ({
          ...(icon && {
            "--info-block-icon": `url("${icon}")`,
          }),

          ...(listMarker && {
            "--info-block-list-marker": `url("${listMarker}")`,
          }),
        } as React.CSSProperties)
      : undefined;

  const motionElements = {
    header: motion.header,
    footer: motion.footer,

    h1: motion.h1,
    h2: motion.h2,
    h3: motion.h3,
    h4: motion.h4,
    h5: motion.h5,
    h6: motion.h6,

    p: motion.p,

    ul: motion.ul,
    ol: motion.ol,
    li: motion.li,
  } as const;

  const elementVariants = {
    header: stagger.tight,
    footer: reveal.up,

    h1: reveal.up,
    h2: reveal.up,
    h3: reveal.up,
    h4: reveal.up,
    h5: reveal.up,
    h6: reveal.up,

    p: reveal.up,

    ul: stagger.tight,
    ol: stagger.tight,

    li: reveal.up,
  } as const satisfies Record<keyof typeof motionElements, Variants>;

  /**
   * Recursively enhances semantic content with motion.
   */
  function enhanceNode(node: ReactNode): ReactNode {
    if (!React.isValidElement<{ children?: ReactNode }>(node)) {
      return node;
    }

    const children = React.Children.map(node.props.children, enhanceNode);

    const enhancedNode = React.cloneElement(node, undefined, children);

    const tag = enhancedNode.type;

    if (typeof tag === "string" && tag in motionElements) {
      const MotionComponent = motionElements[tag as keyof typeof motionElements];

      const variants = elementVariants[tag as keyof typeof elementVariants];

      return <MotionComponent {...enhancedNode.props} variants={variants} />;
    }

    return enhancedNode;
  }

  if (animate) {
    return (
      <motion.article
        className={classes}
        style={style}
        variants={stagger.normal}
        initial="hidden"
        whileInView="visible"
        viewport={viewport.default}
      >
        {React.Children.map(children, enhanceNode)}
      </motion.article>
    );
  }

  return (
    <article className={classes} style={style}>
      {children}
    </article>
  );
}
