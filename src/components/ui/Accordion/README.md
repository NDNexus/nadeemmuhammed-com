# Accordion

A reusable UI component for showing expandable and collapsible content.

The Accordion handles the **interaction and layout only**. It does not know what kind of content it is displaying.

This allows it to be reused for FAQs, case study details, additional information, blog content, and other expandable sections.

---

## Structure

```text
Accordion/
├── Accordion.tsx
├── AccordionItem.tsx
├── Accordion.types.ts
├── Accordion.css
├── index.ts
└── README.md
```

### Accordion.tsx

Manages the accordion collection and shared configuration.

### AccordionItem.tsx

Renders an individual accordion item containing:

1. Optional number
2. Title / trigger
3. Expand or collapse icon
4. Expandable content

### Accordion.types.ts

Contains the TypeScript types used by the component.

### Accordion.css

Contains the layout, states, transitions, and responsive styles.

### index.ts

Exports the public Accordion API.

---

## Default Layout

Each item has a trigger row:

```text
┌────────┬──────────────────────────────────────┬────────┐
│   01   │  Item title                          │   ˅˅   │
└────────┴──────────────────────────────────────┴────────┘
```

When expanded:

```text
┌────────┬──────────────────────────────────────┬────────┐
│   01   │  Item title                          │   ˄˄   │
└────────┴──────────────────────────────────────┴────────┘

┌────────────────────────────────────────────────────────┐
│                                                        │
│  Expandable content                                    │
│                                                        │
└────────────────────────────────────────────────────────┘
```

The expanded content always uses the full available width.

---

## Defaults

The Accordion provides sensible defaults:

- Numbers are shown automatically.
- Numbers are generated from the item order.
- Items start collapsed.
- Double-chevron icons indicate expand/collapse.
- The component handles its own interaction and accessibility.

---

## Basic Usage

```tsx
import { Accordion } from "@/components/ui/Accordion";

const items = [
  {
    title: "First item",
    content: <p>Content for the first item.</p>,
  },
  {
    title: "Second item",
    content: <p>Content for the second item.</p>,
  },
];

<Accordion items={items} />;
```

This automatically displays:

```text
01  First item       ˅˅
02  Second item      ˅˅
```

---

## Hide Numbers

Numbers are enabled by default.

Disable them when the leading column is not needed:

```tsx
<Accordion
  items={items}
  showNumbers={false}
/>
```

The number column is removed completely rather than left empty.

---

## Custom Icons

The default expand/collapse icons can be overridden:

```tsx
<Accordion
  items={items}
  expandIcon="solar:alt-arrow-down-linear"
  collapseIcon="solar:alt-arrow-up-linear"
/>
```

Icons use Iconify icon names.

---

## Example: FAQ

The Accordion is a generic UI component.

A content-specific component such as `FAQ` can use it internally:

```tsx
<FAQ items={servicesFAQs} />
```

The architecture is:

```text
Page Data
   ↓
FAQ
   ↓
Accordion
   ↓
AccordionItem
```

This keeps FAQ content separate from the generic expand/collapse behaviour.

---

## When to Use

Use Accordion when content is useful but does not need to remain visible all the time.

Examples:

- FAQs
- Case study details
- Additional service information
- Blog or article details
- Optional technical information

Do not hide important primary content inside an accordion simply to reduce page length.
