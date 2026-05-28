# DESIGN.md — Ink Anne · Design System & Visual Architecture

> **Version:** 1.0.0
> **Last Updated:** 2026-05-28
> **Status:** Approved for Implementation
> **Author:** Principal UI/UX Designer
> **Platform:** Anne Nogueira · SALL Studio · Porto, Portugal

---

## Table of Contents

1. [Design Philosophy & Creative Direction](#1-design-philosophy--creative-direction)
2. [Visual Identity System](#2-visual-identity-system)
   - 2.1 [Color System](#21-color-system)
   - 2.2 [Typography System](#22-typography-system)
   - 2.3 [Iconography](#23-iconography)
   - 2.4 [Texture & Surface Language](#24-texture--surface-language)
3. [Spacing, Grid & Layout](#3-spacing-grid--layout)
4. [Component Design System](#4-component-design-system)
   - 4.1 [Buttons & CTAs](#41-buttons--ctas)
   - 4.2 [Navigation](#42-navigation)
   - 4.3 [Cards](#43-cards)
   - 4.4 [Forms & Inputs](#44-forms--inputs)
   - 4.5 [Badges & Status Indicators](#45-badges--status-indicators)
   - 4.6 [Modals & Lightboxes](#46-modals--lightboxes)
   - 4.7 [Testimonials](#47-testimonials)
5. [Motion & Interaction Design](#5-motion--interaction-design)
6. [Page-Level Design Specifications](#6-page-level-design-specifications)
   - 6.1 [Homepage](#61-homepage)
   - 6.2 [Portfolio Gallery](#62-portfolio-gallery)
   - 6.3 [Flash Drops Page](#63-flash-drops-page)
   - 6.4 [Booking Hub](#64-booking-hub)
   - 6.5 [Consultation Form](#65-consultation-form)
   - 6.6 [About / Biography](#66-about--biography)
   - 6.7 [FAQ](#67-faq)
   - 6.8 [Shop (Coming Soon)](#68-shop-coming-soon)
7. [UX Patterns & Interaction Principles](#7-ux-patterns--interaction-principles)
8. [Responsive Design System](#8-responsive-design-system)
9. [Accessibility Design Directives](#9-accessibility-design-directives)
10. [Dark Mode & Theme Architecture](#10-dark-mode--theme-architecture)
11. [Image & Media Treatment](#11-image--media-treatment)
12. [Design Tokens Reference](#12-design-tokens-reference)

---

## 1. Design Philosophy & Creative Direction

### 1.1 The Core Tension

The Ink Anne platform exists at the intersection of two worlds that rarely touch:

> **Underground subculture aesthetics** — raw, dark, honest, anti-corporate, rooted in the physical permanence of the craft.
> **Ultra-premium agency experience** — surgical precision, controlled whitespace, expensive silence, curatorial restraint.

Most tattoo platforms choose one. This one refuses to. The result is a design language that feels like a **private members' gallery in a decommissioned industrial space** — the architecture is severe, the lighting is moody, but every object on display has been chosen with ruthless intentionality.

### 1.2 The Four Design Pillars

#### I. Earned Darkness

Dark is not gloomy. Dark is authoritative. The backgrounds are near-black, not pure black — they carry depth and texture. Every use of darkness must earn its place by making the art on top of it more luminous. The darkness exists to serve the work.

#### II. Surgical Restraint

Nothing is decorative. Every element performs a function. Whitespace is not emptiness — it is breathing room granted to work that demands it. If an element cannot justify its presence, it is removed. The interface should feel like it was **considered over months, then edited mercilessly**.

#### III. Subterranean Premium

The platform must feel exclusive without being cold. It should feel like a place where the password was given to you specifically. There is no mass-market softness here — no stock photo smiles, no gradient hero overlays with system fonts. But it is not hostile. It rewards the right visitor with a sense of belonging.

#### IV. The Work is the Interface

Anne's tattoo work is the most powerful visual element on the platform. The design system's job is to disappear when a portfolio image is on screen. Colors, typography, and layout exist to create perfect conditions for the art — they do not compete with it.

### 1.3 Aesthetic References

| Reference                                           | What to Extract                                                   |
| --------------------------------------------------- | ----------------------------------------------------------------- |
| High-end fragrance brand websites (Byredo, Le Labo) | The use of silence, the typographic confidence, the anti-CTA feel |
| Independent art gallery websites                    | Editorial grid discipline, image-first thinking                   |
| Underground music labels (Warp Records, Hyperdub)   | Cultural authenticity, refusal of mainstream aesthetics           |
| Brutalist architecture photography                  | The beauty in raw materials and structural honesty                |
| Dark academia visual culture                        | Deep greens, aged papers, intellectual weight                     |
| Japanese tattooing culture digital presence         | Reverence for craft, zero compromise on imagery quality           |

### 1.4 What This Design System Explicitly Rejects

- Rounded "pill" buttons and soft card shadows
- Light backgrounds for body content
- Animated gradient hero sections
- Stock photography of any kind
- Generic icon libraries used without customization
- Any pattern commonly found on generic Squarespace tattoo sites
- Sans-serif fonts used without typographic counterweights
- Social-media-first design thinking (the platform sets the tone; Instagram responds to it)

---

## 2. Visual Identity System

### 2.1 Color System

The color palette is built around a **deep chromatic night** — near-blacks with warm undertones, accented by poisonous dark greens that feel botanical and dangerous simultaneously. Color is used sparingly; saturation is a reward, not a default.

#### 2.1.1 Core Palette

| Token                   | Hex       | Usage                                                   |
| ----------------------- | --------- | ------------------------------------------------------- |
| `--color-void`          | `#080A09` | Primary background — the base of everything             |
| `--color-abyss`         | `#0D0F0E` | Secondary background — cards, panels, elevated surfaces |
| `--color-shadow`        | `#141815` | Tertiary surface — hover states, subtle depth           |
| `--color-surface`       | `#1C211D` | Elevated UI surfaces — form backgrounds, modals         |
| `--color-border`        | `#252C26` | Default borders and dividers                            |
| `--color-border-subtle` | `#1E2420` | Subtle borders — barely-there separators                |

#### 2.1.2 Green Spectrum (The Signature Accent)

This green is not mint, not neon, not sage. It is the green of patina on ancient bronze, of absinthe at 3am, of moss forcing its way through concrete. It is alive and slightly threatening.

| Token              | Hex       | Usage                                               |
| ------------------ | --------- | --------------------------------------------------- |
| `--color-venom`    | `#1A3828` | Deep green — used as accent background, flush fills |
| `--color-moss`     | `#2D5A3D` | Mid green — interactive element backgrounds at rest |
| `--color-fern`     | `#3D7A52` | Active green — hover states, focused inputs         |
| `--color-phosphor` | `#4E9E68` | Bright green — primary CTA fills, key highlights    |
| `--color-glow`     | `#6DBF88` | Light green — icon highlights, progress indicators  |
| `--color-mist`     | `#A8D5B5` | Pale green — decorative accents, subtle text tints  |

#### 2.1.3 Text Hierarchy

| Token                    | Hex       | Usage                                                     |
| ------------------------ | --------- | --------------------------------------------------------- |
| `--color-text-primary`   | `#E8EDE9` | Primary readable text — near white with a green undertone |
| `--color-text-secondary` | `#9AA89B` | Secondary text — labels, captions, metadata               |
| `--color-text-tertiary`  | `#5C6B5E` | Muted text — placeholder text, disabled states            |
| `--color-text-accent`    | `#6DBF88` | Accent text — links, hover text, highlighted labels       |
| `--color-text-inverse`   | `#080A09` | Text on bright/green backgrounds                          |

#### 2.1.4 Semantic Colors

| Token                  | Hex       | Usage                                                |
| ---------------------- | --------- | ---------------------------------------------------- |
| `--color-error`        | `#C0392B` | Error states — form validation, submission failure   |
| `--color-error-subtle` | `#2A1010` | Error background — error message containers          |
| `--color-success`      | `#4E9E68` | Success states — intentionally green (matches brand) |
| `--color-warning`      | `#B8860B` | Scarcity signals — "Last available", "Closing soon"  |
| `--color-reserved`     | `#4A3520` | Reserved / unavailable states — warm dark amber      |

#### 2.1.5 Color Usage Principles

- **Never use pure black (`#000000`) as a background.** It is flat and lifeless. Use `--color-void` instead.
- **Never use pure white (`#FFFFFF`) as text.** Use `--color-text-primary` — the warm-green tint reads as refined, not clinical.
- **Green is earned, not defaulted.** It should appear where attention is intentionally directed: primary CTAs, active states, key interactive indicators. Its rarity is what gives it power.
- **Do not introduce new colors.** Every deviation from this palette must be escalated and approved. The palette's constraint IS the premium signal.

---

### 2.2 Typography System

Typography is the second most powerful expression of brand voice after color. The system uses a deliberate pairing that creates tension between the archaic and the modern — reflecting the craft of tattooing itself.

#### 2.2.1 Font Stack

| Role                   | Family             | Weights Used  | Rationale                                                                                                                    |
| ---------------------- | ------------------ | ------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| **Display / Headline** | `Playfair Display` | 400, 700, 900 | Deeply literary, high-contrast serifs with ink-like thick-to-thin transitions. Evokes engraving, permanence, old world craft |
| **Body / Reading**     | `Inter`            | 300, 400, 500 | Precision-engineered for screens. Its neutrality lets display type breathe without competition                               |
| **Accent / Label**     | `Space Grotesk`    | 500, 700      | Geometric, technical edge. Used for labels, categories, and metadata — grounds the romanticism of the display font           |
| **Monospace / Detail** | `JetBrains Mono`   | 400           | Rare use: price display, technical specs, form labels where data precision is implied                                        |

#### 2.2.2 Type Scale

```
--text-xs:    0.75rem   / 12px   → Micro-labels, legal copy
--text-sm:    0.875rem  / 14px   → Secondary captions, metadata
--text-base:  1rem      / 16px   → Body copy baseline
--text-lg:    1.125rem  / 18px   → Lead paragraphs, emphasized body
--text-xl:    1.25rem   / 20px   → Sub-section headings
--text-2xl:   1.5rem    / 24px   → Section headings (mobile H1)
--text-3xl:   1.875rem  / 30px   → Page-level headings
--text-4xl:   2.25rem   / 36px   → Feature headings
--text-5xl:   3rem      / 48px   → Hero sub-text, section headers (desktop)
--text-6xl:   3.75rem   / 60px   → Hero headline (tablet)
--text-7xl:   4.5rem    / 72px   → Display headline (desktop)
--text-8xl:   6rem      / 96px   → Monumental / artistic display text
--text-9xl:   8rem      / 128px  → Oversized decorative text — used behind content
```

#### 2.2.3 Typography Rules

**Line Height:**

```
Tight (display):      1.05 – 1.15   → Headlines, hero text
Normal (heading):     1.25 – 1.35   → Section headings
Relaxed (body):       1.60 – 1.75   → Reading copy
Loose (captions):     1.4           → Metadata, labels
```

**Letter Spacing:**

```
Display:     -0.03em to -0.05em  → Tight headlines feel luxurious
Heading:     -0.01em to -0.02em  → Comfortable tracking
Body:         0em                → Never touch body tracking
Labels:      +0.08em to +0.12em  → Uppercase labels need breathing room
```

**Text Transform Rules:**

- `UPPERCASE` is reserved for: category labels, navigation items, status badges, section eyebrows
- Never use `uppercase` on body copy or headings
- Never use `uppercase` on CTAs — it reads as shouting, not confidence

#### 2.2.4 Typographic Moments

These are designed to create visual punctuation across the platform:

| Pattern                  | Usage                                                                                            | Style                      |
| ------------------------ | ------------------------------------------------------------------------------------------------ | -------------------------- |
| **Oversized Ghost Text** | Behind section titles, `10–15%` opacity, `--color-text-tertiary`, `text-8xl` or `text-9xl`       | Decorative depth layer     |
| **Eyebrow / Kicker**     | Above headlines, `Space Grotesk`, `text-xs`, `tracking-[0.2em]`, `uppercase`, `--color-phosphor` | Contextual framing         |
| **Pull Quote**           | Testimonial excerpts, `Playfair Display italic`, `text-3xl`, `--color-text-accent`               | Editorial weight           |
| **Numerical Feature**    | Flash count, session count, large statistics, `JetBrains Mono`, `text-7xl`, `--color-phosphor`   | Data aestheticized         |
| **Long-Form Body**       | About page, FAQ, `Inter 300`, `text-lg`, `line-height: 1.75`, `max-width: 65ch`                  | Optimal reading conditions |

---

### 2.3 Iconography

#### 2.3.1 Icon Style

- **Style:** Stroke-only, 1.5px or 2px stroke weight, rounded line-caps, no fill
- **Grid:** 24×24px base grid; icons display at 16px, 20px, 24px, or 32px depending on context
- **Set:** Lucide Icons as the base library — geometric, precise, never "friendly"
- **Custom Icons:** 3–5 bespoke icons for brand-specific concepts (flash bolt for flash drops, needle for sessions, compass rose for international booking)

#### 2.3.2 Icon Usage Rules

- Icons never appear alone without a text label in primary navigation
- In compressed contexts (mobile bottom nav), icons may stand alone but must have `aria-label`
- Icon color inherits from surrounding text context unless explicitly overridden
- Green icon highlights used only for: active navigation states, success states, primary CTA icons
- Do not use icons decoratively to fill visual space — every icon must carry semantic meaning

---

### 2.4 Texture & Surface Language

The platform's surfaces are not flat digital planes. They carry the memory of physical materials.

#### 2.4.1 Grain Texture Overlay

A subtle film grain is applied as a global CSS overlay at `3–5% opacity` using an SVG noise filter. This is the single most impactful texture decision — it transforms a flat dark background into something that feels material, almost physical.

```css
/* Global grain layer — applied via ::before on <body> or a fixed overlay element */
.grain-overlay {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 9999;
  background-image: url("data:image/svg+xml,..."); /* SVG turbulence filter */
  opacity: 0.04;
  mix-blend-mode: overlay;
}
```

#### 2.4.2 Surface Depth System

Surfaces are differentiated by background color only — **no drop shadows**. Drop shadows are a web convention; this platform does not participate in web conventions.

```
Layer 0: --color-void        → Canvas / page background
Layer 1: --color-abyss       → Cards, panels resting on void
Layer 2: --color-shadow      → Hover elevation within a card
Layer 3: --color-surface     → Modals, drawers, elevated dialogs
```

#### 2.4.3 Border Language

Borders are `1px` only. Never `2px+` except for focus states (which use an outline, not a border).

```css
/* Default border */
border: 1px solid var(--color-border);

/* Subtle border — almost invisible but present */
border: 1px solid var(--color-border-subtle);

/* Accent border — green, used for active/focus states */
border: 1px solid var(--color-fern);
```

#### 2.4.4 Gradient Usage

Gradients are used in exactly two scenarios:

1. **Image vignette fades:** Portfolio images fade to `--color-void` at the bottom edge, allowing text overlays to be readable without opacity masks
2. **Hero atmospheric gradient:** A large, very low-opacity radial gradient of `--color-venom` positioned behind the hero — not visible as a gradient but contributing to the sense of depth

```css
/* Image-to-void fade */
background: linear-gradient(to bottom, transparent 60%, var(--color-void) 100%);

/* Hero atmospheric presence */
background: radial-gradient(
  ellipse 80% 60% at 30% 40%,
  rgba(29, 56, 40, 0.25) 0%,
  transparent 70%
);
```

---

## 3. Spacing, Grid & Layout

### 3.1 Spacing Scale

The spacing system is based on a `4px` base unit, expressed as a `0.25rem` increment:

```
--space-0:    0
--space-1:    0.25rem   /  4px
--space-2:    0.5rem    /  8px
--space-3:    0.75rem   / 12px
--space-4:    1rem      / 16px
--space-5:    1.25rem   / 20px
--space-6:    1.5rem    / 24px
--space-8:    2rem      / 32px
--space-10:   2.5rem    / 40px
--space-12:   3rem      / 48px
--space-16:   4rem      / 64px
--space-20:   5rem      / 80px
--space-24:   6rem      / 96px
--space-32:   8rem      / 128px
--space-40:   10rem     / 160px
--space-48:   12rem     / 192px
```

Sections use generous vertical spacing. **Compression is the enemy of premium.** Standard inter-section spacing on desktop is `--space-32` minimum.

### 3.2 Grid System

| Breakpoint              | Columns | Gutter | Margin | Max Container |
| ----------------------- | ------- | ------ | ------ | ------------- |
| Mobile (`< 640px`)      | 4       | `16px` | `16px` | 100%          |
| Tablet (`640–1024px`)   | 8       | `24px` | `32px` | 100%          |
| Desktop (`1024–1280px`) | 12      | `24px` | `48px` | `1280px`      |
| Wide (`> 1280px`)       | 12      | `32px` | Auto   | `1440px`      |
| Ultra-wide (`> 1920px`) | 12      | `32px` | Auto   | `1600px`      |

### 3.3 Layout Patterns

#### Full-Bleed Canvas

Portfolio images, hero sections, and atmospheric backgrounds extend to the full viewport edge. Content lives within the grid; the visual field extends beyond it.

#### Asymmetric Content Layouts

Avoid perfectly centered, symmetrical layouts for editorial content. The about page, testimonial sections, and hero layouts should use intentional visual imbalance:

```
┌─────────────────────────────────────────────┐
│  col 1–2: empty / decorative               │
│  col 3–8: primary content                  │
│  col 9–12: accent / supporting visual      │
└─────────────────────────────────────────────┘
```

#### Cinematic Proportions

Hero sections target a `16:9` or wider aspect ratio. Image compositions favor portrait and square crops for tattoo photography to respect the work's proportions.

---

## 4. Component Design System

### 4.1 Buttons & CTAs

#### Button Hierarchy

Three levels of button exist. Never introduce a fourth.

---

**Primary CTA**
The rarest and most powerful button. Used once per screen, never twice.

```
Background:   --color-phosphor (#4E9E68)
Text:         --color-text-inverse (#080A09)
Font:         Space Grotesk, 500, text-sm, tracking-[0.08em], uppercase
Padding:      14px 32px
Border:       none
Border-radius: 0px  ← zero radius. No pill. No softness.
Hover:        background → --color-fern (#3D7A52), subtle scale(1.01)
Active:       background → --color-moss (#2D5A3D), scale(0.99)
Transition:   background 200ms ease, transform 150ms ease
```

**Secondary CTA**
Used for secondary actions, "Learn More" style interactions.

```
Background:   transparent
Text:         --color-text-primary (#E8EDE9)
Font:         Space Grotesk, 500, text-sm, tracking-[0.08em], uppercase
Padding:      13px 31px (accounts for 1px border)
Border:       1px solid --color-border (#252C26)
Border-radius: 0px
Hover:        border-color → --color-fern, text → --color-text-accent
Transition:   border-color 200ms ease, color 200ms ease
```

**Ghost / Text Link CTA**
Inline CTAs, "View more", contextual actions.

```
Background:   transparent
Text:         --color-text-accent (#6DBF88)
Font:         Space Grotesk, 500, text-sm, tracking-[0.04em]
Padding:      0
Border:       none
Decoration:   underline, offset 3px, color: --color-moss
Hover:        text → --color-phosphor, decoration-color → --color-phosphor
```

#### CTA Copy Principles

- Primary CTAs use directive, specific language: **"Request a Session"**, **"Reserve This Design"**, **"View the Portfolio"** — not generic "Click Here" or "Learn More"
- Never use exclamation marks on CTAs
- Language is confident without urgency manipulation: no "Book Now — Limited Spots!" patterns
- Both languages (EN/PT) must be designed simultaneously — labels must not break layout when translated

---

### 4.2 Navigation

#### Desktop Navigation

```
Position:     Fixed top, full width
Height:       64px
Background:   --color-void at 90% opacity, backdrop-filter: blur(12px) saturate(150%)
Border-bottom: 1px solid --color-border-subtle
Scroll behavior: Remains fixed; opacity remains constant (no "transparent hero" scroll effect)
```

**Nav Layout:**

```
[LOGO / WORDMARK]  ·····················  [PORTFOLIO] [FLASH] [BOOK] [ABOUT]  [EN|PT]  [REQUEST A SESSION →]
 Left-aligned                              Center links                          Right group
```

- Navigation links: `Space Grotesk 500`, `text-xs`, `tracking-[0.15em]`, `uppercase`
- Active link: `--color-text-accent` with a `2px` bottom bar in `--color-phosphor`
- The `[REQUEST A SESSION →]` is the sole Primary CTA in the nav; it is the only colored element in the header

#### Mobile Navigation

```
Pattern:      Slide-in drawer from the right (not a centered overlay — too cliché)
Trigger:      Hamburger icon — 3 horizontal lines, 2px stroke, 24px, 24px target size
Drawer width: 80vw, max 320px
Background:   --color-surface (#1C211D)
Animation:    translateX from 100% to 0, 280ms cubic-bezier(0.16, 1, 0.3, 1) — spring-like
Backdrop:     --color-void at 60% opacity, backdrop-filter: blur(4px)
Close:        Tap backdrop OR swipe-right gesture
```

**Mobile Drawer Layout:**

```
┌─────────────────────────────────┐
│  [×]                Anne Nogueira│
│─────────────────────────────────│
│  Portfolio                  →   │
│  Flash                      →   │
│  Book a Session             →   │
│  About                      →   │
│  FAQ                        →   │
│─────────────────────────────────│
│  [Request a Session]            │
│─────────────────────────────────│
│  EN  ·  PT                      │
│─────────────────────────────────│
│  @inkanne  ↗                    │
└─────────────────────────────────┘
```

---

### 4.3 Cards

#### Portfolio Card

The portfolio card is the most rendered component on the platform. Every pixel must be considered.

```
Aspect ratio:   Portrait — variable (3:4 default, 1:1 square for certain pieces)
Background:     --color-abyss
Overflow:       hidden
Border-radius:  0px
Border:         none by default; 1px --color-border on hover
```

**States:**

- **Rest:** Image fills card. Metadata hidden. No text overlay.
- **Hover:** Subtle scale of image to `1.04`, 400ms ease. Bottom overlay fades in with: style tag, title (if named piece).
- **Hover overlay:**
  ```
  Background: linear-gradient(transparent 50%, rgba(8,10,9,0.95) 100%)
  Text:       Style tag in Space Grotesk uppercase, --color-phosphor
              Title in Playfair Display, --color-text-primary
  ```

**Performance note:** Images use `object-fit: cover`, `loading="lazy"`, and a `blur-up` placeholder technique with base64 LQIP.

#### Flash Card

Identical base to Portfolio Card with the addition of a **status badge** (see Section 4.5).

```
Status overlay: Top-right corner, 8px from edge
Price badge:    Bottom-left, above the hover overlay text layer
```

---

### 4.4 Forms & Inputs

Forms are the highest-stakes UI on this platform. The consultation form is a qualifying instrument — its design must be simultaneously demanding enough to deter the unserious and respectful enough to not alienate the serious collector.

#### Input Field

```
Height:         52px
Background:     --color-surface (#1C211D)
Border:         1px solid --color-border (#252C26)
Border-radius:  0px
Font:           Inter 400, text-base, --color-text-primary
Placeholder:    Inter 300, --color-text-tertiary
Padding:        14px 16px
Transition:     border-color 180ms ease, background 180ms ease
```

**States:**

```
Default:  border --color-border, background --color-surface
Hover:    border --color-border-subtle + 30% opacity increase
Focus:    border --color-fern (#3D7A52), outline: 2px solid rgba(61,122,82,0.3) offset 2px
Filled:   no change from default — filled state is visually neutral
Error:    border --color-error (#C0392B), background --color-error-subtle
Disabled: opacity 0.4, cursor: not-allowed
```

#### Label Typography

```
Font:         Space Grotesk 500, text-xs, tracking-[0.1em], uppercase
Color:        --color-text-secondary
Margin-bottom: --space-2 (8px)
```

#### Textarea

Identical to input field with:

```
Min-height:   120px
Resize:       vertical only
Max-height:   320px
```

#### Select / Dropdown

```
Appearance:   custom — native select hidden, custom dropdown rendered
Arrow icon:   Chevron-down, --color-text-tertiary, rotates 180° on open
Dropdown bg:  --color-surface
Dropdown item hover: background --color-shadow
```

#### File Upload

```
Pattern:      Drag-and-drop zone + click-to-browse fallback
Zone border:  1px dashed --color-border
Zone bg:      --color-abyss
Active drag:  border --color-fern, background --color-venom at 40% opacity
Icon:         Upload icon centered, --color-text-tertiary
Label:        "Drop reference images here or click to browse" — Inter 300, text-sm
Accepted:     "JPG, PNG, WebP · Max 10MB per file · Up to 5 files"
```

#### Form Step Indicator (Multi-Step Form)

```
Pattern:      Horizontal progress — numbered steps + connecting lines
Active:       Filled circle --color-phosphor, step number --color-text-inverse
Completed:    Checkmark icon, circle fill --color-venom, border --color-fern
Upcoming:     Empty circle, border --color-border, number --color-text-tertiary
Line:         1px solid — --color-fern for completed, --color-border for upcoming
```

---

### 4.5 Badges & Status Indicators

#### Flash Status Badge

```
AVAILABLE
  Background:   transparent
  Border:       1px solid --color-phosphor
  Text:         "AVAILABLE" — Space Grotesk 700, text-xs, tracking-[0.15em], --color-phosphor
  Padding:      4px 10px
  Border-radius: 0px
  Pulse dot:    4px circle, --color-phosphor, pulse animation 2s infinite

RESERVED
  Background:   --color-reserved (#4A3520)
  Border:       1px solid transparent
  Text:         "RESERVED" — Space Grotesk 700, text-xs, tracking-[0.15em], #8B6914
  Opacity:      0.7 on parent card image

SOLD / TATTOOED
  Background:   transparent
  Border:       1px solid --color-border
  Text:         "TATTOOED" — Space Grotesk 500, text-xs, tracking-[0.15em], --color-text-tertiary
  Image:        Grayscale filter applied to card image
```

#### Style Tag

```
Background:   --color-venom (#1A3828)
Text:         Space Grotesk 500, text-xs, tracking-[0.1em], uppercase, --color-glow
Padding:      3px 8px
Border-radius: 0px
```

---

### 4.6 Modals & Lightboxes

#### Portfolio Lightbox

The lightbox is where the work is seen at full fidelity. The design must vanish entirely.

```
Backdrop:       --color-void at 97% opacity — near-total submersion
Image:          Centered, max 90vw × 85vh, object-fit: contain
Controls:       Prev/next arrows at viewport edges — 40px × 40px hit targets
                Arrows are 2px stroke icons, --color-text-tertiary
                On hover: --color-text-primary
Close:          Top-right corner, "×" or X icon, 32px target
                Also: Escape key, click-outside backdrop
Metadata panel: Slides in from right (desktop) or bottom sheet (mobile)
                Contains: style tag, piece description, placement, year
Transition:     Fade in 250ms, image scales from 0.95 to 1.0
```

#### Flash Detail Modal

```
Layout:         Two-column — image left (60%), details right (40%)
Mobile:         Stacked — image top (56vw), details below as bottom sheet
Image:          Full bleed, no border-radius
Details panel:  Background --color-surface, padding --space-8 (desktop) --space-6 (mobile)
                Contains: title, style tags, size, placement note, price, Reserve CTA
```

---

### 4.7 Testimonials

```
Card background:  --color-abyss
Border-left:      3px solid --color-venom — the only decorative use of a thicker border
Padding:          --space-8
Quote mark:       Decorative large " in Playfair Display, --color-venom, opacity 0.6
Quote text:       Playfair Display italic, text-lg, --color-text-primary, line-height 1.7
Attribution:      Space Grotesk 500, text-xs, tracking-[0.1em], uppercase
                  Format: "FIRST NAME · COUNTRY · STYLE RECEIVED"
                  Color: --color-text-secondary
Healed photo:     If present: square 60px, border 1px --color-border, object-fit: cover
```

---

## 5. Motion & Interaction Design

### 5.1 Motion Philosophy

Motion on this platform must feel **inevitable, not energetic**. Animations do not celebrate interactions — they acknowledge them. The system uses slow, confident transitions that communicate control. Nothing bounces. Nothing spins. Nothing slides with spring physics unless it is a critical navigation gesture (mobile drawer).

### 5.2 Duration & Easing Reference

```
Micro (state change):       150ms — hover color, border color, opacity shifts
Short (element reveal):     250ms — fade ins, badge appearances
Medium (panel motion):      350ms — modals entering, drawers sliding
Long (page transition):     500ms — full route changes
Atmospheric (ambient):      2000–4000ms — pulse animations, hover parallax
```

**Easing Curves:**

```
Standard:         cubic-bezier(0.4, 0, 0.2, 1)  → Material-inspired, balanced
Enter:            cubic-bezier(0, 0, 0.2, 1)     → Elements entering the screen
Exit:             cubic-bezier(0.4, 0, 1, 1)     → Elements leaving the screen
Dramatic:         cubic-bezier(0.16, 1, 0.3, 1)  → Mobile drawer, hero reveals
```

### 5.3 Specific Interaction Patterns

#### Page Transitions

```
Pattern:      Fade in/out via opacity — no sliding, no clip-path
Duration:     Out 200ms, In 300ms with 100ms delay
Trigger:      React Router route change
Implementation: Wrap route components in a motion wrapper (Framer Motion or CSS)
```

#### Scroll-Triggered Reveals

```
Pattern:      Fade + subtle translateY (from +16px to 0)
Duration:     500ms
Delay:        Staggered — 100ms between sibling elements in a grid
Trigger:      IntersectionObserver at 15% viewport intersection
Reset:        Does NOT replay on scroll-up — each element reveals once
```

#### Portfolio Image Hover

```
Image scale:    1.0 → 1.04 over 400ms, standard easing
Overlay opacity: 0 → 1 over 300ms
Text position:  translateY(+8px) → 0 over 300ms, synced with overlay
```

#### Pulse Animation (Available Badge)

```
@keyframes pulse-available {
  0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(78, 158, 104, 0.6); }
  50%       { opacity: 0.8; box-shadow: 0 0 0 6px rgba(78, 158, 104, 0); }
}
Duration: 2s, infinite, ease-in-out
```

#### Cursor Treatment

```
Custom cursor:  32px circle, --color-phosphor, 40% opacity
On hover (interactive elements):  Cursor expands to 48px, 70% opacity
On hover (portfolio images):      Cursor label appears "VIEW →"
Implementation: CSS custom cursor or JS-driven cursor overlay
Mobile:         Native cursor only — no custom cursor on touch devices
```

### 5.4 Reduced Motion

All animations respect `prefers-reduced-motion: reduce`:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

Functional state changes (focus, error, success) are never purely animated — they always have a non-motion alternative indicator.

---

## 6. Page-Level Design Specifications

### 6.1 Homepage

The homepage answers one question in the first 3 seconds: **"Is this the kind of artist I need?"**

#### Hero Section

```
Height:         100vh (minus nav height: 64px) — fills the first viewport completely
Layout:         Asymmetric — artist's work dominates 60% of the visual field
Background:     --color-void with atmospheric green gradient (see Section 2.4.4)
```

**Hero Visual Composition:**

```
Left 40%:       Typography block
  - Eyebrow:    "TATTOO ARTIST · PORTO" — Space Grotesk 500, xs, --color-phosphor
  - H1:         "ANNE NOGUEIRA" — Playfair Display 900, text-7xl (desktop), line-height 1.05
  - Subtext:    2–3 lines describing style — Inter 300, text-lg, --color-text-secondary
  - CTA pair:   Primary "Request a Session" + Secondary "View Portfolio"
  - Spacing:    Generous — content is not stacked; it breathes

Right 60%:      Full-bleed image collage / single hero tattoo image
  - The image is cropped at viewport boundary — it extends to the edge
  - Bottom edge: gradient fade to --color-void
  - Image quality: minimum 2000px wide source, art-directed for the composition
```

**Below-fold Trigger:**

```
Position:       Centered, bottom of hero section
Content:        Scroll indicator — thin vertical line, 48px tall, animated fade pulse
                "SCROLL" in Space Grotesk 500, text-xs, tracking-[0.2em], --color-text-tertiary
```

#### Style Specializations Section

```
Layout:     Horizontal scroll on mobile / grid on desktop
Format:     6–7 style tiles — each tile: style name + 1-line descriptor + representative image background
Tile size:  Desktop 2-column span, aspect 3:2; Mobile 80vw × auto
Background: Style tile images — dark overlay at 70%
Text:       Style name in Playfair Display, descriptor in Inter 300
Hover:      Overlay reduces to 40%, image saturates, green border appears bottom
```

#### Social Proof Interlude

```
Pattern:    Single-line rotating text strip — "Traveling collectors from 18 countries" / "2,000+ pieces" / etc.
Speed:      Slow marquee — 30s loop, pauses on hover
Typography: Space Grotesk 500, text-sm, tracking-[0.1em], --color-text-secondary
Separator:  " · " in --color-phosphor
Background: --color-abyss, full width
Height:     48px
```

#### Portfolio Preview

```
Layout:     Asymmetric masonry — not a regular grid
Items:      6 pieces, art-directed selection (2 anime/illustrative, 2 color, 1 fine line, 1 blackwork)
CTA:        Below the grid — "View Full Portfolio →" (Ghost CTA)
```

#### Flash Drop Teaser

```
Condition:  Only shown when active flash designs are available
Background: --color-venom — the most saturated surface on the entire platform
Text:       "FLASH AVAILABLE NOW" — Playfair Display 900, text-5xl, --color-text-primary
            Number of available designs — JetBrains Mono, text-7xl, --color-phosphor
CTA:        "See Available Designs →" — Secondary CTA
Urgency:    Scarcity is communicated by the number, not by panic language
```

#### Testimonial Slice

```
Layout:     3-column desktop / stacked mobile
Items:      3 featured testimonials
Background: --color-void (contrasts with the portfolio section above)
```

#### Instagram / Living Portfolio Strip

```
Layout:     Horizontal strip — 6 most recent posts, fixed height 240px
Item style: Square images, 0 gap, 0 border-radius
Hover:      Individual image brightens, "↗ INSTAGRAM" appears center
CTA:        "Follow @inkanne on Instagram →" below the strip
```

---

### 6.2 Portfolio Gallery

#### Gallery Architecture

```
Route:      /portfolio
Layout:     Masonry grid — 3 columns desktop, 2 columns tablet, 1 column mobile
Gap:        --space-1 (4px) — near-seamless grid, the work is continuous
```

#### Filter Bar

```
Position:   Sticky — fixed below the navigation during scroll
Height:     52px
Background: --color-void at 95% opacity, backdrop-blur: 8px
Filters:    All / Anime & Illustrative / Color / Fine Line / Blackwork / Minimalist / Floral / Flash Art
Style:      Text-only filters — Space Grotesk 500, text-xs, tracking-[0.1em], uppercase
Active:     --color-text-accent, underline 2px --color-phosphor offset-4
Inactive:   --color-text-tertiary
Transition: Color 150ms, filter animation (grid reflow) 300ms layout transition
```

#### Load More Pattern

```
Pattern:    Infinite scroll with an explicit "Load More" waypoint
Initial:    24 images
Per load:   12 images
Indicator:  "Showing 24 of 147 works" — Inter 300, text-sm, --color-text-tertiary
Button:     Secondary CTA "Load More Work"
Loading:    Skeleton placeholders — --color-abyss rectangles that pulse (opacity 0.3 → 0.6, 1.5s loop)
```

---

### 6.3 Flash Drops Page

#### Page Header

```
Eyebrow:    "FLASH TATTOOS"
H1:         "Original Designs, One Time Only." — Playfair Display 700
Subtext:    Explanation of what flash means in the context of Anne's practice
            Inter 300, text-lg, max-w-prose, --color-text-secondary
```

#### Flash Grid

```
Layout:     3-column desktop / 2-column tablet / 1-column mobile
Gap:        --space-3 (12px) — slightly more breathable than portfolio
Card size:  Square (1:1) or portrait (3:4) — consistent per drop event
```

#### Empty State (No Active Flash)

```
Content:    "No flash available right now."
            "New drops are announced on Instagram first."
Icon:       Custom flash bolt icon, --color-text-tertiary, 48px
CTA:        "Follow @inkanne for drop alerts →" — Ghost CTA
Background: Full-page empty state — not a tiny inline message
```

---

### 6.4 Booking Hub

```
Route:      /book
Layout:     Two-column — left: explanation and process, right: CTA cards
Left:       "How to Book With Anne" — numbered steps, prose explanation
            Sets expectations: response time, deposit, design process
Right:      Two cards:
            [1] "Request a Custom Session" → Primary CTA → /book/consultation
            [2] "Reserve a Flash Design" → Secondary CTA → /flash
```

**Process Steps (Left Column):**

```
Step presentation: Large green number (JetBrains Mono), step title (Playfair Display), description (Inter 300)
Vertical connector line: 1px --color-border between steps
```

---

### 6.5 Consultation Form

The form is a designed experience, not a data collection tool. Each step has a visual identity.

#### Step Structure & Design

```
Step 1: "Tell me about your idea."
  Fields: Idea description (textarea, min 100 chars enforced), Style(s) desired (multi-select tags)
  Character counter: Visible below textarea — "72 / 100 minimum" — turns green when met

Step 2: "Where and how big?"
  Fields: Body placement (illustrated body diagram OR text input with suggestions)
          Approximate size (XS < 5cm / S 5–10cm / M 10–20cm / L 20cm+)
          Skin tone range (selector — used for color planning)

Step 3: "Help me understand the vision."
  Fields: Reference images upload (drag-and-drop zone)
          Reference URLs (comma-separated)
          Inspirational artists (free text)

Step 4: "Let's talk dates and budget."
  Fields: Preferred date range (date range picker, constrained to Anne's marked available dates)
          Realistic budget range (slider with labeled stops at €100, €200, €400, €800, €1500, €2000+)
          Heard about Anne via (select — Instagram / Referral / Search / Convention / Other)

Step 5: "Almost there."
  Fields: Name, Email, Country of residence, Phone (optional)
          Language preference (EN/PT)
          Checkbox: "I understand that responses take 3–5 business days."
          Checkbox: "I understand that a deposit is required to confirm any booking."
  Submit: Primary CTA "Send My Request →"
```

#### Budget Slider Design

```
Track background:   --color-surface
Track filled:       gradient from --color-venom to --color-phosphor
Thumb:              24px circle, --color-phosphor, border 2px --color-void
Labels:             Below track, Space Grotesk 500, text-xs, --color-text-tertiary
Active value:       Above thumb, JetBrains Mono, text-sm, --color-phosphor
```

---

### 6.6 About / Biography

```
Hero:       Split composition — portrait photo (art directed, high contrast) / intro text
            Image: 40% width desktop, full-bleed mobile header
            Text: H1 "Anne Nogueira", eyebrow "Porto · SALL Studio", opening statement
Body:       Long-form single column, max-w-[65ch], centered
            Inter 300, text-lg, line-height 1.75
Pullouts:   Key quotes from Anne's philosophy — left-border green rule, Playfair Display italic
Studio:     Image gallery of SALL Studio — 3 photos in a 3-col grid
            Address, hours, directions link, embedded map (consent-gated)
Styles:     Visual list of specializations with 1-line descriptors and style exemplar images
```

---

### 6.7 FAQ

```
Layout:     Single column, max-w-[75ch], generous padding
Pattern:    Accordion — questions collapsed by default, expand on click
Question:   Playfair Display 400, text-xl, --color-text-primary, cursor pointer
            On hover: --color-text-accent
Arrow:      Chevron-right that rotates to chevron-down on expand, transition 200ms
Answer:     Inter 300, text-base, line-height 1.75, --color-text-secondary
            Slides down — max-height transition 300ms ease
Divider:    1px --color-border-subtle between items
```

**FAQ Section Groups (with divider headers):**

- The Booking Process
- The Work: Style & Technique
- Pricing & Deposits
- Appointments & What to Expect
- What Anne Does Not Do

---

### 6.8 Shop (Coming Soon)

```
Layout:     Centered, full viewport — no navigation clutter, minimal
Eyebrow:    "COMING SOON"
H1:         "The Shop" — Playfair Display 900, text-6xl
Subtext:    Description of what will be available — prints, apparel, original art
Email form: Input + Submit in a single row — "Notify me when the shop opens"
Background: Atmospheric — very subtle green gradient suggesting depth
```

---

## 7. UX Patterns & Interaction Principles

### 7.1 Language Toggle

```
Position:   Navigation bar, right of nav links, left of primary CTA
Visual:     "EN · PT" — two codes separated by a centered dot
Active:     --color-text-primary, Space Grotesk 700
Inactive:   --color-text-tertiary, Space Grotesk 400
Transition: Language switch triggers content fade (200ms out, 200ms in)
Persistence: Stored in localStorage — preference remembered across sessions
URL:        Language does NOT change the URL path — same routes for both languages
            (hreflang meta tags handle SEO language signals)
```

### 7.2 Scarcity Communication

Flash design scarcity must feel real, not manufactured. Design principles:

- **Show the count, not pressure language.** "3 designs available" > "Book fast!"
- Reserved designs remain visible (greyed out) — the sold state is part of the evidence
- Never show fake countdown timers

### 7.3 Error States

```
Form field error:
  - Border: --color-error
  - Error message: Below the field, Inter 400, text-sm, --color-error
                  Accompanied by a small × icon
  - aria-describedby links message to field

Page-level error:
  - Centered content, icon (alert-triangle), H2 heading, single sentence explanation
  - One action: a way forward (retry, go home, contact)

404 Page:
  - Minimal — "Lost?" in Playfair Display, brief message, link back to portfolio
  - Dark, atmospheric — not playful, not apologetic
```

### 7.4 Loading States

**Skeleton Screens:**

- Used for: portfolio grid, flash grid, testimonials
- Skeleton color: `--color-abyss` with an animated shimmer (`--color-shadow` pass, 1.5s loop)
- Skeleton shape mirrors the actual content exactly

**Spinner:**

- Used only for: form submission, single-item loading
- Design: 24px circle, 2px stroke, `--color-phosphor` quarter-arc, rotation 800ms linear infinite
- Appears after 300ms delay (avoid flash of spinner for fast responses)

### 7.5 Empty States

Every state where content is absent must be a designed experience, not a missing piece:

- Vacuous white space is never acceptable
- Each empty state has: an icon (line art, relevant), a headline, an explanatory sentence, and an action

### 7.6 Confirmation & Success States

```
Form submission success:
  Layout:     Full-page replacement of the form — not a modal, not a toast
  Icon:       Large checkmark (48px), --color-phosphor, animated draw (stroke-dasharray)
  H1:         "Your request has been received."
  Body:       "Anne typically responds within 3–5 business days. Check your inbox."
  Secondary:  "While you wait, explore more of the work →" link to portfolio

Flash reservation success:
  Same pattern but tailored:
  H1:         "This design is now held for you."
  Body:       "Check your email for next steps. The hold lasts 48 hours."
```

---

## 8. Responsive Design System

### 8.1 Breakpoint Behavior

| Component         | Mobile (< 640px)                     | Tablet (640–1024px)               | Desktop (> 1024px)                                   |
| ----------------- | ------------------------------------ | --------------------------------- | ---------------------------------------------------- |
| Navigation        | Hamburger drawer                     | Hamburger drawer                  | Full horizontal nav                                  |
| Hero layout       | Stacked — image top, text below      | Stacked with larger image         | Side-by-side asymmetric                              |
| Portfolio grid    | 1 column                             | 2 columns                         | 3-column masonry                                     |
| Flash grid        | 1 column                             | 2 columns                         | 3 columns                                            |
| Consultation form | Single column, full-width inputs     | Single column, 80% width          | Two-column (label left, input right) for some fields |
| About page        | Full-bleed portrait, stacked content | Wide portrait + text side by side | Asymmetric 40/60 split                               |
| Footer            | Stacked, single column               | Two columns                       | Four columns                                         |
| Typography scale  | Down 1–2 steps on display sizes      | Intermediate                      | Full desktop scale                                   |

### 8.2 Touch-Specific Patterns

- Minimum touch target: 44×44px for all interactive elements
- Swipe gestures: right swipe closes mobile nav drawer; horizontal swipe on testimonial carousel
- Bottom sheet pattern preferred over centered modals on mobile (flash detail, image metadata)
- `active:` state styling for buttons on touch (no hover on touch)
- Keyboard avoidance: form fields trigger proper keyboard types (`type="email"`, `type="tel"`, `inputmode="numeric"`)

---

## 9. Accessibility Design Directives

### 9.1 Color & Contrast

| Pair                                         | Ratio   | Meets                                                      |
| -------------------------------------------- | ------- | ---------------------------------------------------------- |
| `--color-text-primary` on `--color-void`     | ≥ 12:1  | AAA                                                        |
| `--color-text-secondary` on `--color-void`   | ≥ 5.5:1 | AA                                                         |
| `--color-text-accent` on `--color-void`      | ≥ 4.7:1 | AA                                                         |
| `--color-text-inverse` on `--color-phosphor` | ≥ 8:1   | AAA                                                        |
| `--color-text-tertiary` on `--color-void`    | ≥ 3.1:1 | AA Large only — used only for decorative/non-critical text |

### 9.2 Focus Management

```
Focus ring:   outline: 2px solid var(--color-phosphor)
              outline-offset: 3px
              border-radius: 0 — matches the zero-radius design language
              Never hidden — :focus-visible used where :focus is too broad
Skip link:    "Skip to main content" — visually hidden until focused
              First focusable element on every page
```

### 9.3 Screen Reader Considerations

- All portfolio images: meaningful `alt` attributes — `"Anime-style full-sleeve tattoo, Anne Nogueira, SALL Studio"`
- Flash status: ARIA live region updates when status changes — `aria-live="polite"`
- Language toggle: announced to assistive technology on change — `aria-label="Switch to Portuguese"`
- Form steps: `aria-current="step"` on active step; `aria-describedby` for all error messages
- Modal: `role="dialog"`, `aria-modal="true"`, focus trapped within, returns focus on close
- Custom cursor: does not interfere with native cursor accessibility affordances

---

## 10. Dark Mode & Theme Architecture

The platform **is** dark mode. There is no light mode. This is a deliberate brand decision, not a technical limitation.

```
Reasoning:    A light mode would be a fundamentally different aesthetic — one that contradicts
              the brand positioning. The investment in maintaining dual themes is not justified.
              Users expecting a light mode option are not the target audience.

System:       prefers-color-scheme media query is monitored but used only to set
              meta theme-color for browser chrome — the palette does not change.

Implementation: All color values defined as CSS custom properties on :root
                No theme class toggling required
                No localStorage theme preference — no choice to persist
```

---

## 11. Image & Media Treatment

### 11.1 Portfolio Photography Standards

Images are the product. Standards are non-negotiable:

```
Source format:   JPEG or WEBP (original) at minimum 2000px on longest side
Delivery format: WEBP with JPEG fallback via <picture> element
Compression:     WEBP quality 85, JPEG quality 82 — visually lossless
Loading:         LQIP (Low Quality Image Placeholder) blur-up technique
                 20px × 20px base64 placeholder → full image fade in on load
CDN:             All images delivered via CDN with edge caching (Cloudflare recommended)
Lazy loading:    All images below fold — native loading="lazy" + IntersectionObserver for enhanced control
```

### 11.2 Art Direction Rules

- **Portrait over landscape** where possible — respects the vertical nature of most tattoo placements
- **Black backgrounds in photography** when controllable — the tattoo is the subject; surrounding skin and studio context are secondary
- **Healed work preferred** over fresh tattoos — represents the actual permanent result
- **No composite edits or saturation bumps** that misrepresent the actual color of the work
- **Consistent image color temperature** within each portfolio gallery page — warm-tinted studio photos don't jar against cool-toned portfolio pieces

### 11.3 Hero Image Direction

```
Composition:    Work on skin at close range — texture visible, NOT full-body shots
Lighting:       High contrast, directional light — shadows add depth
Post-processing: Minimal. Slight contrast enhancement only. Never oversaturation.
Format:         Shot in landscape but cropped to fill portrait/asymmetric hero compositions
Fallback:       If video is used as hero background — ensure static image fallback for prefers-reduced-motion and slow connections
```

### 11.4 Video Treatment

```
Hero video (if used):
  Autoplay:    Yes, muted
  Loop:        Yes
  Format:      MP4 (H.264) + WebM (VP9)
  Resolution:  1920×1080 source; displayed at viewport width
  Overlay:     --color-void at 30–50% opacity over video — maintains text legibility
  Poster:      Static hero image — displayed during video load
  Prefers-reduced-motion: Video replaced entirely with static image
```

---

## 12. Design Tokens Reference

Complete CSS custom property definitions:

```css
:root {
  /* ── Color: Backgrounds ──────────────────────── */
  --color-void: #080a09;
  --color-abyss: #0d0f0e;
  --color-shadow: #141815;
  --color-surface: #1c211d;
  --color-border: #252c26;
  --color-border-subtle: #1e2420;

  /* ── Color: Green Spectrum ───────────────────── */
  --color-venom: #1a3828;
  --color-moss: #2d5a3d;
  --color-fern: #3d7a52;
  --color-phosphor: #4e9e68;
  --color-glow: #6dbf88;
  --color-mist: #a8d5b5;

  /* ── Color: Text ─────────────────────────────── */
  --color-text-primary: #e8ede9;
  --color-text-secondary: #9aa89b;
  --color-text-tertiary: #5c6b5e;
  --color-text-accent: #6dbf88;
  --color-text-inverse: #080a09;

  /* ── Color: Semantic ─────────────────────────── */
  --color-error: #c0392b;
  --color-error-subtle: #2a1010;
  --color-success: #4e9e68;
  --color-warning: #b8860b;
  --color-reserved: #4a3520;

  /* ── Typography: Font Families ───────────────── */
  --font-display: "Playfair Display", Georgia, serif;
  --font-body: "Inter", -apple-system, BlinkMacSystemFont, sans-serif;
  --font-label: "Space Grotesk", sans-serif;
  --font-mono: "JetBrains Mono", "Courier New", monospace;

  /* ── Typography: Scale ───────────────────────── */
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 1.875rem;
  --text-4xl: 2.25rem;
  --text-5xl: 3rem;
  --text-6xl: 3.75rem;
  --text-7xl: 4.5rem;
  --text-8xl: 6rem;
  --text-9xl: 8rem;

  /* ── Spacing ─────────────────────────────────── */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.25rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-10: 2.5rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-20: 5rem;
  --space-24: 6rem;
  --space-32: 8rem;
  --space-40: 10rem;
  --space-48: 12rem;

  /* ── Motion ──────────────────────────────────── */
  --duration-micro: 150ms;
  --duration-short: 250ms;
  --duration-medium: 350ms;
  --duration-long: 500ms;
  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-enter: cubic-bezier(0, 0, 0.2, 1);
  --ease-exit: cubic-bezier(0.4, 0, 1, 1);
  --ease-dramatic: cubic-bezier(0.16, 1, 0.3, 1);

  /* ── Layout ──────────────────────────────────── */
  --container-max: 1440px;
  --nav-height: 64px;
  --border-radius: 0px; /* ← Zero radius across the system */
}
```

---

_This document is a living specification. All design decisions must be traceable back to the four pillars in Section 1.2. When in doubt: subtract, don't add._
