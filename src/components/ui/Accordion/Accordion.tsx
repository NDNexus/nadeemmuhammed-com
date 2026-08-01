"use client";

import { useState } from "react";

import { AccordionItem } from "./AccordionItem";
import type { AccordionProps } from "./Accordion.types";

import "./Accordion.css";

const DEFAULT_EXPAND_ICON = "solar:double-alt-arrow-down-linear";
const DEFAULT_COLLAPSE_ICON = "solar:double-alt-arrow-up-linear";

/**
 * Ensures every Accordion item has a unique ID.
 */
function validateItemIds(items: AccordionProps["items"]) {
  const seenIds = new Set<string>();

  for (const item of items) {
    if (seenIds.has(item.id)) {
      throw new Error(
        `Accordion: Duplicate item ID "${item.id}" found. Each item must have a unique ID.`
      );
    }

    seenIds.add(item.id);
  }
}

/**
 * Renders a collection of expandable Accordion items.
 */
export function Accordion({
  items,
  showNumbers = true,
  expandIcon = DEFAULT_EXPAND_ICON,
  collapseIcon = DEFAULT_COLLAPSE_ICON,
}: AccordionProps) {

  validateItemIds(items); // Validate item IDs to ensure uniqueness

  const [openItemId, setOpenItemId] = useState<string | null>(null);

  /**
   * Opens the selected item or closes it when already open.
   */
  function handleToggle(itemId: string) {
    setOpenItemId((currentId) => (currentId === itemId ? null : itemId));
  }

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <AccordionItem
          key={item.id}
          item={item}
          index={index}
          showNumber={showNumbers}
          isOpen={openItemId === item.id}
          expandIcon={expandIcon}
          collapseIcon={collapseIcon}
          onToggle={() => handleToggle(item.id)}
        />
      ))}
    </div>
  );
}
