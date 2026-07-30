# Animation System

A shared motion library used throughout the website.

The goal is not to create many animations, but to create a consistent motion language that feels calm, deliberate and premium across the entire experience.

Animations should enhance content and interaction—not compete with them.

---

## Philosophy

The animation system follows the same principles as the rest of the project.

### Simplify

Prefer a small number of reusable motion patterns over many one-off animations.

### Clarify

Name animations by **what they do**, not **where they are used**.

Good:

```ts
reveal.up

hover.lift

stagger.normal
```

Avoid:

```ts
heroAnimation

servicesReveal

cardHover
```

### Enhance

Motion should support content, reinforce hierarchy and improve usability.

If an animation exists purely because it "looks cool", it probably doesn't belong.

---

# Structure

```
animations/

README.md

index.ts

tokens.ts

viewport.ts

reveal.ts

stagger.ts

hover.ts

spring.ts
```

---

## tokens

Shared design tokens used by every animation.

Contains reusable values such as:

- durations
- easing curves
- distances
- blur values
- scale values

Never use magic numbers inside animations.

---

## viewport

Reusable viewport presets for scroll-triggered animations.

Most components should use:

```ts
viewport.default
```

---

## reveal

Defines how individual elements enter the page.

Examples:

```ts
reveal.fade

reveal.up

reveal.down

reveal.left

reveal.right

reveal.scale
```

---

## stagger

Defines how groups of elements reveal.

Examples:

```ts
stagger.tight

stagger.normal

stagger.relaxed
```

---

## hover

Defines interactive hover behaviours.

Examples:

```ts
hover.default

hover.lift

hover.icon
```

---

## spring

Shared spring presets for interactive animations.

Examples:

```ts
spring.default

spring.gentle

spring.snappy
```

---

# Composition

Components should compose motion primitives rather than creating new animations.

Example:

```tsx
<motion.article
    variants={reveal.up}
>

    <motion.ul
        variants={stagger.normal}
    >

        <motion.li
            variants={reveal.fade}
        />

    </motion.ul>

</motion.article>
```

The component owns the choreography.

The animation library owns the behaviour.

---

# Motion Principles

The website should feel:

- Calm
- Deliberate
- Editorial
- Premium
- Consistent

Prefer:

- Opacity
- Blur
- Small translations
- Gentle scaling

Avoid:

- Large movement
- Bouncing
- Rotations
- Elastic effects
- Distracting motion

The best animations are often felt more than they are consciously noticed.

---

# Public API

Every component should import from:

```ts
import {
    tokens,
    viewport,
    reveal,
    stagger,
    hover,
    spring,
} from "@/lib/animations";
```

Never import internal files directly.

This keeps the animation system maintainable and allows its implementation to evolve without affecting components.
