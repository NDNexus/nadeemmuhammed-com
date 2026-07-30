# InfoBlock

A semantic content component that enhances standard HTML into a structured, editorial information block.

`InfoBlock` is intentionally lightweight. Rather than accepting props for titles, paragraphs or lists, it relies on semantic HTML and enhances it with consistent spacing, typography, list styles, icons and optional animations.

---

## Features

- Semantic HTML-first API
- Supports any heading level (`h1`–`h6`)
- Optional introductory paragraphs
- Supports unordered and ordered lists
- Custom SVG icon support
- Multiple list styles
- Automatic CSS numbering
- Optional Framer Motion animations
- Responsive layout
- Accessible by default

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `icon` | `string` | `undefined` | Path to an SVG used as the block icon and custom list marker. |
| `listStyle` | `"bullet" \| "number" \| "icon" \| "icon-number"` | `"icon"` | Controls how list markers are rendered. |
| `animate` | `boolean` | `false` | Enables Framer Motion reveal animations. |
| `className` | `string` | `undefined` | Additional class names. |
| `children` | `ReactNode` | — | Semantic HTML content. |

---

# Supported HTML

Officially supported elements:

```html
<h1> ... <h6>

<p>

<ul>

<ol>

<li>

<footer>
```

Any other HTML will render normally but receives no guaranteed styling.

---

# Expected Structure

```tsx
<InfoBlock
    icon="/icons/strategy.svg"
    listStyle="icon"
>

    <h3>
        Digital Strategy & Consulting
    </h3>

    <p>
        Better decisions begin with better understanding.
    </p>

    <ul>

        <li>Understand your business</li>

        <li>Identify opportunities</li>

        <li>Create a roadmap</li>

    </ul>

    <footer>

        Move forward with clarity and confidence.

    </footer>

</InfoBlock>
```

---

## Minimum Structure

Only a heading is required.

```tsx
<InfoBlock>

    <h3>
        My Heading
    </h3>

</InfoBlock>
```

---

## Valid Variations

### Heading + Paragraph

```tsx
<InfoBlock>

    <h3>Heading</h3>

    <p>Intro paragraph.</p>

</InfoBlock>
```

---

### Heading + List

```tsx
<InfoBlock>

    <h3>Heading</h3>

    <ul>

        <li>Item</li>

        <li>Item</li>

    </ul>

</InfoBlock>
```

---

### Heading + Footer

```tsx
<InfoBlock>

    <h3>Heading</h3>

    <footer>

        Final takeaway.

    </footer>

</InfoBlock>
```

---

# List Styles

## bullet

Uses the browser's default unordered list.

```text
• Item

• Item

• Item
```

---

## number

Uses the browser's default ordered numbering.

```text
1. Item

2. Item

3. Item
```

---

## icon

Replaces list bullets with the provided SVG icon.

```text
✓ Item

✓ Item

✓ Item
```

---

## icon-number

Displays the SVG icon followed by an automatically generated number.

```text
✓ 01

Understand your business

✓ 02

Identify opportunities

✓ 03

Create a roadmap
```

Numbers are generated automatically using CSS counters.

---

# Animation

Animations are disabled by default.

When enabled, InfoBlock will:

- Reveal the article on scroll
- Stagger list item animations
- Respect `prefers-reduced-motion`

Animations are intentionally subtle and should support readability rather than distract from it.

---

# Accessibility

InfoBlock renders as:

```html
<article>
```

It preserves all semantic child elements exactly as authored.

No additional ARIA roles are added.

---

# Responsibilities

InfoBlock is responsible for:

- Layout
- Typography rhythm
- Icon rendering
- List marker styling
- CSS counters
- Responsive spacing
- Hover interactions
- Reveal animations

The page is responsible for:

- Content
- Heading hierarchy
- Ordering of blocks
- Overall page layout

---

# Philosophy

Write semantic HTML.

Let the component enhance it.

Avoid configuration where semantics already exist.
