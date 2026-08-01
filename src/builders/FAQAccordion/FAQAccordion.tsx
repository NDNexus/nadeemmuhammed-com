import { Accordion } from "@/components/ui/Accordion";

import type { AccordionItemData } from "@/components/ui/Accordion";
import type { FAQAccordionProps } from "./FAQAccordion.types";

/**
 * Renders structured FAQ content using the reusable Accordion component.
 */
export function FAQAccordion({ faq, showNumbers, expandIcon, collapseIcon }: FAQAccordionProps) {
  const accordionItems: AccordionItemData[] = faq.items.map((item) => ({
    id: item.id,
    title: item.question,
    content: <p className="text-subtle">{item.answer}</p>,
  }));

  return (
    <Accordion
      items={accordionItems}
      showNumbers={showNumbers}
      expandIcon={expandIcon}
      collapseIcon={collapseIcon}
    />
  );
}
