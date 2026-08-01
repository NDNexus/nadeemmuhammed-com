import type { FAQData } from "../models/FAQ";

/**
 * Props accepted by the FAQAccordion builder.
 */
export interface FAQAccordionProps {
  /**
   * FAQ content rendered by the accordion.
   */
  faq: FAQData;

  /**
   * Whether automatically generated item numbers are displayed.
   *
   * @default true
   */
  showNumbers?: boolean;

  /**
   * Iconify icon displayed when an FAQ item is collapsed.
   */
  expandIcon?: string;

  /**
   * Iconify icon displayed when an FAQ item is expanded.
   */
  collapseIcon?: string;
}
