import type { ReactNode } from "react";

/**
 * A single expandable item displayed inside an Accordion.
 */
export interface AccordionItemData {
  /**
   * Stable, unique identifier for the item.
   */
  id: string;

  /**
   * Content displayed in the Accordion trigger.
   */
  title: ReactNode;

  /**
   * Content revealed when the item is expanded.
   */
  content: ReactNode;
}

/**
 * Props accepted by the Accordion component.
 */
export interface AccordionProps {
  /**
   * Items displayed by the Accordion.
   */
  items: AccordionItemData[];

  /**
   * Whether automatically generated item numbers are displayed.
   *
   * @default true
   */
  showNumbers?: boolean;

  /**
   * Iconify icon displayed when an item is collapsed.
   *
   * @default "solar:double-alt-arrow-down-linear"
   */
  expandIcon?: string;

  /**
   * Iconify icon displayed when an item is expanded.
   *
   * @default "solar:double-alt-arrow-up-linear"
   */
  collapseIcon?: string;
}

/**
 * Internal props used by an individual Accordion item.
 */
export interface AccordionItemProps {
  /**
   * Item content.
   */
  item: AccordionItemData;

  /**
   * Zero-based position used for automatic numbering.
   */
  index: number;

  /**
   * Whether the automatic number should be displayed.
   */
  showNumber: boolean;

  /**
   * Whether the item is currently expanded.
   */
  isOpen: boolean;

  /**
   * Iconify icon displayed when the item is collapsed.
   */
  expandIcon: string;

  /**
   * Iconify icon displayed when the item is expanded.
   */
  collapseIcon: string;

  /**
   * Called when the item's trigger is activated.
   */
  onToggle: () => void;
}
