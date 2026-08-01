"use client";

import { useId } from "react";

import { Icon } from "@iconify/react";

import type { AccordionItemProps } from "./Accordion.types";

/**
 * Renders a single expandable Accordion item.
 */
export function AccordionItem({
  item,
  index,
  showNumber,
  isOpen,
  expandIcon,
  collapseIcon,
  onToggle,
}: AccordionItemProps) {
  const internalId = useId();

  const itemNumber = String(index + 1).padStart(2, "0");

  const triggerId = `${internalId}-trigger`;
  const panelId = `${internalId}-panel`;

  return (
    <div className={`accordion-item ${isOpen ? "is-open" : ""}`}>
      <button
        id={triggerId}
        type="button"
        className={`accordion-item__trigger ${showNumber ? "" : "without-number"}`}
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
      >
        {showNumber && (
          <span className="accordion-item__number" aria-hidden="true">
            {itemNumber}
          </span>
        )}

        <span className="accordion-item__title">{item.title}</span>

        <span className="accordion-item__icon" aria-hidden="true">
          <Icon className="accordion-item__icon-expand" icon={expandIcon} width={24} />

          <Icon className="accordion-item__icon-collapse" icon={collapseIcon} width={24} />
        </span>
      </button>

      <div
        id={panelId}
        className="accordion-item__panel"
        role="region"
        aria-labelledby={triggerId}
        aria-hidden={!isOpen}
      >
        <div className="accordion-item__panel-inner">
          <div className="accordion-item__content">{item.content}</div>
        </div>
      </div>
    </div>
  );
}
