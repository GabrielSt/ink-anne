# product.md — Ink Anne · Web Platform Specification

> **Version:** 1.0.0  
> **Last Updated:** 2026-05-28  
> **Status:** Approved for Development  
> **Owner:** Anne Nogueira · SALL Studio, Porto, Portugal

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Business Profile & Positioning](#2-business-profile--positioning)
3. [Strategic Objectives & Success Metrics](#3-strategic-objectives--success-metrics)
4. [Target Audience & Personas](#4-target-audience--personas)
5. [User Journey Map](#5-user-journey-map)
6. [Information Architecture](#6-information-architecture)
7. [Feature Specifications](#7-feature-specifications)
   - 7.1 [Native Bilingual Architecture](#71-native-bilingual-architecture)
   - 7.2 [Premium Digital Portfolio](#72-premium-digital-portfolio)
   - 7.3 [Flash Tattoo Reservation Engine](#73-flash-tattoo-reservation-engine)
   - 7.4 [Availability Calendar & Booking Flow](#74-availability-calendar--booking-flow)
   - 7.5 [High-Barrier Consultation Intake Form](#75-high-barrier-consultation-intake-form)
   - 7.6 [Biography & Profile Page](#76-biography--profile-page)
   - 7.7 [Client Testimonials & Social Proof](#77-client-testimonials--social-proof)
   - 7.8 [E-Commerce Foundation](#78-e-commerce-foundation)
   - 7.9 [Integrations](#79-integrations)
8. [Non-Functional Requirements](#8-non-functional-requirements)
9. [Design Language & UX Principles](#9-design-language--ux-principles)
10. [Content & SEO Strategy](#10-content--seo-strategy)
11. [Out of Scope](#11-out-of-scope)
12. [Open Questions & Risks](#12-open-questions--risks)

---

## 1. Executive Summary

Ink Anne is the official digital presence for **Anne Nogueira**, a Porto-based tattoo artist operating out of **SALL Studio**. The platform is not a generic portfolio site — it is a precision-engineered conversion funnel designed to simultaneously project elite artistic authority and aggressively repel misaligned clientele.

The core product tension this platform must resolve: the work is underground in aesthetic but elite in execution and price. Every interface decision must honour this duality. The platform should feel like walking into a high-end gallery that happens to be housed in a brutalist building — intimidating, intentional, and utterly self-assured.

**The single most important metric this platform must move:** the ratio of qualified consultation requests to total inquiries. Currently this ratio is low. The platform must invert it.

---

## 2. Business Profile & Positioning

### 2.1 Artist Profile

| Field | Detail |
|---|---|
| Artist Name | Anne Nogueira |
| Studio | SALL Studio |
| Location | Porto, Portugal |
| Experience | 3–5 years established practice |
| Languages | Portuguese (native), English (professional) |

### 2.2 Style Specializations

| Style | Notes |
|---|---|
| Anime / Geek Illustrative | **Primary flagship style** — character-faithful renditions with a strong illustrative voice; collector-level fandom work |
| Color | **Primary flagship style** — vibrant, intentional color work grounded in illustrative precision |
| Fine Line | Secondary specialization — ultra-thin linework demanding technical precision |
| Blackwork | High-contrast, bold graphic compositions |
| Minimalist | Negative space mastery; deliberate restraint |
| Floral | Botanical precision; bridging organic and geometric |
| Custom / Flash Art | Original pre-drawn designs; limited-availability collector pieces |

### 2.3 Strictly Excluded Styles

> **Traditional Maori / Tribal work is categorically declined.**  
> This boundary must be surfaced prominently in the FAQ and the booking intake form to eliminate these inquiries at the earliest touchpoint.

### 2.4 Competitive Positioning

The platform must communicate positioning in the intersection of three vectors:

```
        AVANT-GARDE
             ▲
             │
             │          ● Ink Anne
             │
ACCESSIBLE ──┼─────────────────── EXCLUSIVE
             │
             │
             ▼
         COMMERCIAL
```

Competitors in Porto's tattoo market tend to cluster either toward the purely commercial (walk-in studios, accessible pricing, broad styles) or toward extreme underground obscurity (no digital presence, intentionally difficult to book). Ink Anne's platform occupies the vacant position: **elite and discoverable, but uncompromising on standards.**

---

## 3. Strategic Objectives & Success Metrics

### 3.1 Primary Objectives

| Priority | Objective | Rationale |
|---|---|---|
| P0 | Aggressive lead qualification | Eliminate low-budget, low-intent inquiries before they reach Anne |
| P0 | International client acquisition | Porto attracts tattoo-traveling collectors; the platform must capture this segment |
| P1 | Scaled brand authority | Position Anne as a named artist with a distinct voice, not just a studio employee |
| P1 | Premium portfolio showcase | High-fidelity presentation that honors the vibrancy of color work and the detail of anime/illustrative pieces |
| P2 | Organic SEO positioning | Long-term discoverability without paid acquisition dependency |
| P2 | E-commerce revenue stream | Secondary income via prints and merchandise; diversifies revenue |

### 3.2 Key Performance Indicators

| KPI | Current Baseline | 6-Month Target | 12-Month Target |
|---|---|---|---|
| Qualified inquiry rate | Low (undefined) | >40% of total submissions | >65% of total submissions |
| Avg. budget of booked clients | — | +30% above current avg | +60% above current avg |
| International client bookings | Minimal | 15% of total bookings | 30% of total bookings |
| Portfolio page engagement (time on page) | — | >2 min avg | >3 min avg |
| Flash design sell-through rate | — | >70% per drop | >85% per drop |
| Organic search impressions (EN) | 0 | 5,000/mo | 20,000/mo |
| E-commerce conversion rate | N/A | 1.5% | 2.5% |

### 3.3 Guardrail Metrics (Must Not Worsen)

- Bounce rate on home page must not exceed **65%**
- Mobile page load (LCP) must remain below **2.5s**
- Form abandonment rate must not exceed **50%** (the form is deliberately demanding, but must not be broken)

---

## 4. Target Audience & Personas

### 4.1 Primary Persona — "The Traveling Collector"

> **"I plan my travel around artists I want to get tattooed by."**

| Attribute | Detail |
|---|---|
| Age | 25–42 |
| Geography | EU (DE, FR, UK, NL), North America, Brazil |
| Budget | €400–€2,000+ per session |
| Motivation | Adding a geographically and artistically significant piece to a curated body collection |
| Digital Behaviour | Discovers via Instagram, validates via website, books via direct channel |
| Pain Points | Difficulty finding artists who work in anime/illustrative and vibrant color at a high level outside major capitals |
| Decision Trigger | Quality of portfolio + professional booking infrastructure + clear artist identity |

**Persona Goal on Platform:** Quickly confirm Anne's style matches their vision, validate her professionalism, understand availability for travel dates, and submit a detailed request.

---

### 4.2 Secondary Persona — "The Local Serious Collector"

> **"My body is a curated space. I research for months before booking."**

| Attribute | Detail |
|---|---|
| Age | 22–38 |
| Geography | Porto, Lisbon, Northern Portugal |
| Budget | €200–€800 per session |
| Motivation | A technically precise piece from an artist with a defined aesthetic |
| Digital Behaviour | Follows Anne on Instagram for months before visiting the website to book |
| Pain Points | Finding artists who won't talk them into something simpler; being taken seriously |
| Decision Trigger | Evidence of range within specialization + testimonials from similar collectors |

**Persona Goal on Platform:** Confirm Anne accepts the complexity of their idea, understand the process, and initiate a consultation without friction for serious inquiries.

---

### 4.3 Tertiary Persona — "The Flash Hunter"

> **"I want something unique but immediately available — I saw a design and I need it."**

| Attribute | Detail |
|---|---|
| Age | 20–35 |
| Geography | Local to Porto; tourists |
| Budget | €100–€400 |
| Motivation | Acquiring a limited pre-drawn design; the exclusivity of flash is part of the appeal |
| Digital Behaviour | Impulse-driven; acts fast when a flash design resonates |
| Decision Trigger | Design aesthetics + scarcity signal + low-friction reservation |

**Persona Goal on Platform:** Find an available flash design, understand what "available" means, and reserve it with minimal steps.

---

### 4.4 Anti-Persona (Explicitly NOT the Target)

The platform must be designed to repel — not just fail to attract — the following profile:

> Someone who opens with "how much for a small tattoo?", is unwilling to provide references, has a budget below €80, is looking for walk-in availability, or requests Tribal/Maori work.

Every friction point in the intake form is a feature, not a bug, for this anti-persona. The goal is zero-cost rejection before Anne's time is spent.

---

## 5. User Journey Map

### 5.1 Journey: Traveling Collector Booking a Custom Session

```
STAGE          TOUCHPOINT              EMOTION          PLATFORM ACTION
─────────────────────────────────────────────────────────────────────────
Discovery    │ Instagram post / Reel  │ Intrigued       │ Bio link → Homepage
             │                        │                 │
Landing      │ Homepage               │ Impressed /     │ Show: hero video/
             │                        │ Evaluating      │ reel, style tags,
             │                        │                 │ "Book a session" CTA
             │                        │                 │
Validation   │ Portfolio page         │ Excited /       │ High-fidelity grid,
             │                        │ Deeply engaged  │ category filters,
             │                        │                 │ lightbox detail view
             │                        │                 │
Authority    │ About page             │ Trust building  │ Artist story, philosophy,
             │                        │                 │ studio context, press
             │                        │                 │
Availability │ Calendar page          │ Pragmatic /     │ Real-time availability,
             │                        │ Planning mode   │ travel date visibility
             │                        │                 │
Commitment   │ Consultation form      │ Serious /       │ Multi-step form:
             │                        │ Self-qualifying │ idea → size → placement
             │                        │                 │ → references → budget
             │                        │                 │ → date preferences
             │                        │                 │
Confirmation │ Submission + email     │ Anticipation    │ Auto-response with
             │                        │                 │ timeline expectation,
             │                        │                 │ next steps
             │                        │                 │
Nurture      │ Email from Anne        │ Valued /        │ Personal reply,
(off-platform)│                       │ Chosen          │ consultation scheduled
─────────────────────────────────────────────────────────────────────────
```

### 5.2 Journey: Flash Hunter

```
STAGE          TOUCHPOINT              EMOTION          PLATFORM ACTION
─────────────────────────────────────────────────────────────────────────
Discovery    │ Instagram story/post   │ Impulsive /     │ Direct link to
             │ of flash drop          │ excited         │ Flash page
             │                        │                 │
Browsing     │ Flash gallery          │ Scanning /      │ Grid of available
             │                        │ Decisive        │ designs, "AVAILABLE"
             │                        │                 │ / "RESERVED" badges
             │                        │                 │
Selection    │ Flash detail modal     │ Decided         │ Design detail, size,
             │                        │                 │ placement notes,
             │                        │                 │ price, "Reserve" CTA
             │                        │                 │
Reservation  │ Lightweight form       │ Urgent /        │ Name, contact,
             │                        │ hopeful         │ preferred dates,
             │                        │                 │ deposit intent
             │                        │                 │
Confirmation │ Confirmation page      │ Satisfied /     │ "Design held for 48h"
             │                        │ relieved        │ message + contact info
─────────────────────────────────────────────────────────────────────────
```

### 5.3 Journey: Local Serious Collector

```
STAGE          TOUCHPOINT              EMOTION          PLATFORM ACTION
─────────────────────────────────────────────────────────────────────────
Pre-visit    │ Months of Instagram    │ Anticipatory    │ (off-platform)
             │ observation            │                 │
             │                        │                 │
Research     │ Portfolio → About      │ Confirming      │ Style depth, artist
             │                        │ a pre-decision  │ philosophy alignment
             │                        │                 │
FAQ Review   │ FAQ page               │ Practical /     │ Answers to: process,
             │                        │ de-risking      │ pricing model, healing,
             │                        │                 │ what to bring, style
             │                        │                 │ exclusions
             │                        │                 │
Booking      │ Consultation form      │ Ready           │ Detailed intake →
             │                        │                 │ qualified submission
─────────────────────────────────────────────────────────────────────────
```

---

## 6. Information Architecture

### 6.1 Route Structure

```
/                          → Homepage (SPA-style hero + style overview + CTA)
/portfolio                 → Full portfolio gallery with category filters
/portfolio/:styleSlug      → Filtered view (e.g. /portfolio/fine-line)
/flash                     → Flash tattoo available designs
/flash/:designId           → Individual flash design detail
/book                      → Booking hub (calendar + form entry point)
/book/consultation         → Multi-step consultation intake form
/book/flash/:designId      → Flash reservation form (pre-linked from flash page)
/about                     → Anne's biography and studio info
/faq                       → Frequently asked questions
/shop                      → E-commerce storefront (Phase 2)
/shop/:productId           → Product detail page (Phase 2)
/testimonials              → Client testimonials (or section on homepage)
```

### 6.2 Navigation Architecture

**Primary Navigation (Desktop):**
```
[Ink Anne]    Portfolio    Flash    Book    About    FAQ    [EN | PT]
```

**Primary Navigation (Mobile):**
```
[Hamburger]  →  Full-screen overlay menu
```

**Footer Navigation:**
```
Portfolio | Flash | Book | About | FAQ | Shop
Instagram | Studio Location
© Anne Nogueira · SALL Studio, Porto
Privacy Policy | [EN | PT]
```

---

## 7. Feature Specifications

---

### 7.1 Native Bilingual Architecture

#### Context

English is the primary language for international reach. Portuguese serves the local market. The language experience must be seamless, persistent, and never feel like an afterthought.

#### User Stories

**US-7.1.1** — Language Detection  
> As an international visitor arriving from abroad,  
> I want the platform to automatically present content in English,  
> So that I don't need to manually switch languages to understand the content.

**Acceptance Criteria:**
- The platform detects browser locale on first visit and sets the initial language accordingly (EN for non-PT locales, PT for PT/BR locales)
- Language preference is persisted in `localStorage` and survives page refreshes and navigation
- Language detection does not cause a visible flash of untranslated content (FOUC)
- Detection logic is client-side only; no server-side redirects or locale-based URL differences (e.g., no `/en/` or `/pt/` prefixes — the URL remains canonical)

**US-7.1.2** — Manual Language Toggle  
> As any visitor,  
> I want a persistent, accessible language toggle visible in the navigation,  
> So that I can switch between English and Portuguese at any point in my visit.

**Acceptance Criteria:**
- The toggle is visible at all times in both desktop and mobile navigation
- Toggle renders as `EN | PT` with the active language visually distinct (not just color — must also be distinguishable without color for accessibility)
- Switching language immediately re-renders all on-screen text without a full page reload
- The toggle is reachable via keyboard navigation (Tab-accessible, Enter/Space activatable)
- Active language state is announced to screen readers

**US-7.1.3** — Complete Translation Coverage  
> As a user in either language,  
> I want every visible string on the platform to be in my selected language,  
> So that I never encounter a page with mixed-language content.

**Acceptance Criteria:**
- Zero hardcoded UI strings in component files; all text sourced via i18n keys
- All form labels, error messages, placeholder text, ARIA labels, and meta tags are translated
- `<html lang="">` attribute updates dynamically when language is switched
- `<title>` and `<meta name="description">` tags reflect the active language
- Missing translation keys fall back to English (never to a raw key string like `"home.hero.title"`)

#### Technical Notes

- i18n library: `i18next` + `react-i18next` (already installed)
- Namespace: single `translation` namespace is sufficient at this scale; split into namespaces (`portfolio`, `booking`, `shop`) only if file size exceeds 500 lines
- Date/number formatting must use `Intl` API respecting locale (e.g., Portuguese date formatting: `28 de maio de 2026`)

---

### 7.2 Premium Digital Portfolio

#### Context

The portfolio is the single highest-stakes page on the platform. For the Traveling Collector persona, this page is the primary decision-making surface. Image quality, load performance, and presentation density must all be treated as product decisions, not aesthetic preferences.

#### User Stories

**US-7.2.1** — Portfolio Overview with Category Filtering  
> As a visiting collector evaluating Anne's work,  
> I want to browse her full portfolio and filter by tattoo style,  
> So that I can quickly find work that is relevant to what I'm looking to get.

**Acceptance Criteria:**
- Portfolio page displays a masonry or fixed-ratio grid of portfolio images
- Filter options map to Anne's active specializations: Fine Line, Blackwork, Anime/Geek, Minimalist, Color, Floral, Flash/Custom
- Filters are multi-selectable (AND logic within a session — selecting "Fine Line" AND "Floral" shows pieces tagged with both)
- Active filters are visually distinct and persist during the session
- Filtering is client-side (no page reload); transition between states is animated (fade or slide, ≤200ms)
- An "All" option resets all active filters
- The URL query string updates to reflect active filters (e.g., `?style=fine-line,floral`) to support shareable filtered views
- Grid reflows gracefully on all viewport sizes without layout shift (CLS score < 0.1)

**US-7.2.2** — High-Fidelity Image Presentation  
> As a collector evaluating anime/color work specifically,  
> I want to view portfolio images at their highest available resolution,  
> So that I can assess the detail, color accuracy, and illustrative quality — which are the primary evaluation criteria.

**Acceptance Criteria:**
- Clicking any portfolio image opens a full-viewport lightbox modal
- Lightbox supports: next/previous navigation (arrow keys + swipe on touch), zoom (pinch-to-zoom on mobile, scroll-to-zoom on desktop), close (Escape key + click outside)
- Images are served in WebP format with AVIF as next-gen alternative where supported
- Lazy loading is applied to all images below the fold (`loading="lazy"`)
- The first 12 images in the default sort order are eager-loaded (`loading="eager"`) to ensure above-the-fold content renders immediately
- Image captions in lightbox display: style tags, approximate size, placement area (body location), and year — no client identifiers
- Lightbox state is announced to screen readers (role="dialog", focus trapped inside)

**US-7.2.3** — Portfolio Navigation Flow to Booking  
> As a visitor who has spent time in the portfolio and is now convinced,  
> I want a clear and persistent path to initiate a booking,  
> So that the momentum of my decision is not broken by having to find the booking page.

**Acceptance Criteria:**
- A sticky "Book a Consultation" CTA is visible within the portfolio page after the user scrolls past the first viewport height
- The CTA does not obscure portfolio images on mobile (anchored at bottom, dismissible or auto-hides when scrolling down)
- CTA links directly to `/book/consultation` pre-populated with the last active style filter as a suggested style field in the form

---

### 7.3 Flash Tattoo Reservation Engine

#### Context

Flash drops are high-engagement events. A flash design represents a pre-drawn piece available for a limited number of executions (usually one). The reservation system must communicate scarcity authentically without manufactured urgency. The experience should feel like a collector drop, not an e-commerce cart.

#### User Stories

**US-7.3.1** — Flash Gallery Overview  
> As a user looking for an immediately available design,  
> I want to see all currently available flash designs in a clean gallery,  
> So that I can quickly identify designs that appeal to me and understand which are still available.

**Acceptance Criteria:**
- Flash page renders a grid of designs with real-time availability status: `Available`, `Reserved`, or `Tattooed` (permanent)
- `Reserved` and `Tattooed` designs remain visible in the gallery but are visually de-emphasized (desaturated overlay, status badge)
- Designs are sorted by: Available first, then Recently Added, then Tattooed (archived last)
- Each grid card displays: design thumbnail, design name/title, style tag, approximate size, price (or "Consultation for Price"), and availability badge
- The gallery supports a filter for `Available Only` toggle

**US-7.3.2** — Flash Design Detail  
> As a user who has found a design they want,  
> I want to see full details of the flash design before committing to a reservation,  
> So that I have complete information about size, placement, and pricing before I contact Anne.

**Acceptance Criteria:**
- Clicking a flash card opens a detail modal or navigates to `/flash/:designId`
- Detail view displays: full-resolution design image (with zoom), title, style, description of the piece (Anne's note on the design), suggested placement(s), size range, price or price range, and number of available executions (e.g., "1 of 1" or "2 of 3 remaining")
- A "Reserve This Design" button is prominently displayed for available pieces
- A "Join Waitlist" option is available for `Reserved` designs
- `Tattooed` pieces display a "Healed Result" image if available, and a note directing the user to request a similar custom piece

**US-7.3.3** — Flash Reservation Lightweight Form  
> As a user who wants to reserve a specific flash design,  
> I want to complete a short, fast reservation form,  
> So that I can secure the design without going through the full consultation intake process.

**Acceptance Criteria:**
- Flash reservation form is a lightweight, single-page (not multi-step) form
- Required fields: Full Name, Email, Phone (optional), Preferred Session Dates (date picker, minimum 3 options), Body Placement (text or dropdown of common placements), and a checkbox confirming they understand a non-refundable deposit is required to confirm the reservation
- The form does not ask for budget (price is already set on the flash design)
- On submission, the system marks the design as `Reserved` in the UI immediately (optimistic update) pending Anne's confirmation
- Submitter receives an automated email: design name, their submitted dates, a note that Anne will confirm within 48 hours, and what to expect next
- Anne receives a notification email with all submission details and a link to confirm or decline the reservation
- If Anne declines (or does not confirm within 48h), the design automatically reverts to `Available` and the submitter is notified

**US-7.3.4** — Flash Drop Announcement (Future Integration)  
> As a returning user interested in flash drops,  
> I want to be notified when new flash designs are added,  
> So that I can act quickly before designs are reserved by others.

**Acceptance Criteria:**
- A "Notify Me on Next Drop" email capture field exists on the flash page (when no designs are available) and optionally as a footer subscription
- Captured emails are stored and triggered when a new batch of designs is published
- Notification email includes direct links to the flash gallery

> **Note:** Email notification delivery mechanism is out of scope for Phase 1 and is listed here to ensure the data capture infrastructure is built now to enable it in Phase 2.

---

### 7.4 Availability Calendar & Booking Flow

#### Context

The calendar serves two functions: it communicates professional capacity (Anne is booked because she is in demand) and it gives serious collectors the practical information they need to plan travel or time-off around an appointment.

#### User Stories

**US-7.4.1** — Availability Calendar View  
> As a traveling collector planning a trip to Porto,  
> I want to see Anne's real-time availability at a glance,  
> So that I can plan my visit around dates that actually work.

**Acceptance Criteria:**
- The `/book` page displays a monthly calendar view with available and unavailable dates visually distinct
- Dates are color-coded: `Available` (neutral/accent), `Fully Booked` (muted), `Blocked/Holiday` (clearly distinct), `Today` (highlighted)
- Users can navigate forward up to 3 months; past months are not navigable
- Calendar is timezone-aware and displays times in the user's local timezone where relevant
- A legend explaining the color coding is always visible adjacent to the calendar
- The calendar is read-only; it does not allow date selection in isolation — clicking an available date pre-fills the date in the consultation form and navigates to it

**US-7.4.2** — Booking Hub as Decision Support  
> As a user who has reached the booking page but is not yet sure of their concept,  
> I want to understand what options exist for how to work with Anne,  
> So that I am directed to the right path (consultation vs. flash reservation).

**Acceptance Criteria:**
- The `/book` page presents two distinct pathways before the calendar: "Book a Custom Session" and "Reserve a Flash Design"
- Each pathway has a 1-sentence description of what it involves and who it is for
- Both pathways are visually equal in weight — no implied hierarchy
- A brief summary of what to prepare before filling out a consultation (references, body placement, size idea) is visible on this page
- The FAQ link is surfaced here with a note: "Questions about the process? Read the FAQ first."

---

### 7.5 High-Barrier Consultation Intake Form

#### Context

This is the most strategically critical feature on the platform. The form's design philosophy is: every additional required field is a lead quality filter. A user unwilling to describe their idea, provide their budget range, or upload references is a user whose inquiry would waste Anne's time. The form must feel demanding but not hostile — it communicates that Anne takes custom work seriously and expects the client to do the same.

#### User Stories

**US-7.5.1** — Multi-Step Form Flow  
> As a serious collector initiating a custom tattoo consultation,  
> I want to complete a structured intake form that walks me through each aspect of my request step by step,  
> So that I can provide all necessary information without feeling overwhelmed by a single long page.

**Acceptance Criteria:**
- The form is divided into 5 distinct steps with a persistent progress indicator
- Users can navigate back to previous steps without losing entered data
- Forward navigation requires all required fields in the current step to be valid
- Progress is saved in `sessionStorage` so a refresh within the session does not lose data
- Steps are:
  1. **About Your Idea** — concept description, style preference, reference images
  2. **Placement & Sizing** — body area (interactive body map or dropdown), approximate size, skin tone (for technical planning)
  3. **Your Timeline** — preferred session dates (min. 3 dates), travel dates if applicable, urgency level
  4. **Your Budget** — budget range selector (ranges defined below), acknowledgment of deposit requirement
  5. **Your Contact** — name, email, phone, how they found Anne, any additional notes

**US-7.5.2** — Budget Range Gate  
> As Anne reviewing incoming requests,  
> I want the form to require a budget range selection,  
> So that I can immediately identify inquiries that are below my minimum and decline them efficiently.

**Acceptance Criteria:**
- Step 4 presents budget as a required single-select radio group with the following tiers:
  - `Under €100` — *Note displayed: "Minimum session fee is €150. If your budget is below this, flash designs may be a better fit."*
  - `€100 – €300`
  - `€300 – €600`
  - `€600 – €1,000`
  - `€1,000 – €2,000`
  - `€2,000+`
  - `I'd prefer Anne to quote based on the concept`
- Selecting `Under €100` displays an inline soft warning (not a blocker) that redirects to the flash page: *"It looks like your budget may not align with custom session pricing. Check our flash designs for immediately available pieces starting from €XX."* The user may still proceed.
- This data is prominently displayed at the top of the submission notification Anne receives
- No budget tier is pre-selected; the user must make an active choice

**US-7.5.3** — Reference Image Upload  
> As a collector submitting a custom request,  
> I want to upload visual references with my inquiry,  
> So that Anne can understand my vision without extensive back-and-forth.

**Acceptance Criteria:**
- Step 1 includes a drag-and-drop file upload zone accepting: JPG, PNG, WebP, HEIC, and PDF
- Maximum 10 files, maximum 20MB per file, maximum 80MB total
- Images display as thumbnails immediately upon upload with individual remove buttons
- A note adjacent to the upload reads: *"References don't need to be tattoos. Artworks, photographs, illustrations — anything that captures the mood or elements you're envisioning."*
- File uploads are validated client-side for type and size before any network request
- The field is required: the form cannot proceed past Step 1 without at least one reference image OR the user explicitly checking a box: *"I don't have references yet — I'll describe my concept in detail below"* (which makes the concept description textarea required with a minimum 100-character count)

**US-7.5.4** — Style Exclusion Guard  
> As Anne managing inbound requests,  
> I want the form to explicitly surface excluded styles,  
> So that I never receive a request for Traditional Maori or Tribal work from someone who claims they didn't know.

**Acceptance Criteria:**
- Step 1 includes a style preference multi-select
- The option list includes all active specializations and an explicit entry: `Traditional / Tribal / Maori — Not Available`
- This option is visually marked (greyed out, strikethrough, or a lock icon) and is non-selectable
- A tooltip or inline note on hover/focus reads: *"Anne does not accept commissions for traditional tribal or Maori styles. This is a firm boundary."*
- If the concept description field contains keywords (`tribal`, `maori`, `polynesian`, `samoan`, `traditional tribal`) a soft client-side warning appears: *"It sounds like your concept may involve a style Anne doesn't work in. Please review the available styles."*

**US-7.5.5** — Submission Confirmation & Expectations Management  
> As a user who has completed and submitted the form,  
> I want to receive an immediate on-screen and email confirmation with clear next steps,  
> So that I know my submission was received and what to expect.

**Acceptance Criteria:**
- On successful submission, the user is shown a full-page confirmation view (not a toast notification) with:
  - A personalized thank-you message using their first name
  - A summary of their submission (style, placement, budget tier, dates requested)
  - An explicit expected response time: *"Anne reviews all requests within 5 business days and responds personally to each one."*
  - A note on what happens next: *"If your concept is a good fit, Anne will reach out to schedule a brief video or voice consultation before confirming your booking."*
- The confirmation page includes an Instagram follow CTA: *"While you wait, follow Anne's work in progress."*
- An automated confirmation email mirrors the on-screen confirmation
- The submission data sent to Anne's notification includes: all form fields, uploaded images (as attachments or links), submission timestamp, detected language, and detected timezone

---

### 7.6 Biography & Profile Page

#### Context

The about page is where authority is established. For the Traveling Collector persona, this page answers: *"Who is this person, and why should I let them put a permanent mark on my body?"* The tone must balance personal warmth with artistic seriousness. It should not feel like a LinkedIn bio.

#### User Stories

**US-7.6.1** — Artist Story & Philosophy  
> As a collector evaluating whether Anne's artistic identity aligns with mine,  
> I want to read a genuine, opinionated account of Anne's background and artistic philosophy,  
> So that I can make a values-based decision, not just a quality-based one.

**Acceptance Criteria:**
- The about page contains a primary text section of 200–400 words covering: origin story (how Anne came to tattooing), artistic influences, what drives her style choices, and what she looks for in a collaboration
- Language is first-person (Anne's voice), not third-person biography
- A high-quality portrait photograph of Anne is featured (minimum 1200×1600px source, displayed at appropriate screen size)
- A secondary section covers studio context: SALL Studio name, Porto location with embedded Google Maps, studio atmosphere (1–3 photos)
- A "Specializations" summary section visually lists the active styles with brief (1-line) descriptors

**US-7.6.2** — Industry Authority Signals  
> As a collector who discovers Anne through search or referral rather than Instagram,  
> I want to see signals of professional credibility,  
> So that I am confident in the quality and safety of the experience before I've seen the portfolio.

**Acceptance Criteria:**
- The page surfaces (where applicable): years of experience, notable conventions attended or participated in, any press mentions or features, certifications (e.g., bloodborne pathogen training — not displayed explicitly but hygiene standards noted)
- A "What to Expect" subsection outlines Anne's process from first inquiry to healed tattoo — this doubles as objection handling
- Social proof count: Instagram followers / portfolio pieces count displayed if sufficiently impressive (threshold: do not display if below 5,000 followers; display once above)

---

### 7.7 Client Testimonials & Social Proof

#### Context

Testimonials in the tattoo industry carry different weight than in other services — the permanence of the product makes client trust signals extraordinarily important. However, generic star ratings feel incongruous with the premium positioning. Social proof here must be curated, not crowdsourced.

#### User Stories

**US-7.7.1** — Curated Testimonial Display  
> As a prospective client building trust in Anne's work,  
> I want to read testimonials from previous clients that speak specifically to the experience of working with her,  
> So that I understand what it feels like to be her client, not just what her finished work looks like.

**Acceptance Criteria:**
- Testimonials section displays a minimum of 6 testimonials at launch, expandable to 12+ over time
- Each testimonial card contains: client quote (verbatim), client first name and country of origin (no last names), tattoo style received, and optionally a healed photo of the piece (with client permission)
- Testimonials focus on: the consultation experience, communication quality, pain management / comfort, final result vs. expectation
- No star ratings are displayed — the curatorial choice of which testimonials to show IS the quality signal
- Testimonials are sourced from Google Reviews, Instagram DMs (with consent), and direct post-session feedback — content managed via CMS or JSON file

**US-7.7.2** — Instagram Feed Integration as Living Portfolio  
> As a user who has finished exploring the static portfolio,  
> I want to see Anne's most recent Instagram posts,  
> So that I can see work-in-progress content, healed results, and flash drops that may not be in the curated portfolio.

**Acceptance Criteria:**
- A live Instagram feed section displays the latest 9–12 posts from Anne's account
- Feed is embedded via Instagram Basic Display API or a compliant third-party service
- Clicking a post image opens the original Instagram post in a new tab (not a lightbox)
- The section includes a follow CTA linking to the Instagram profile
- If the API fails or is rate-limited, the section gracefully falls back to a static grid with a "View on Instagram" link — no broken UI state

---

### 7.8 E-Commerce Foundation

#### Context

Phase 2 feature. The infrastructure is scoped now to ensure architectural decisions in Phase 1 do not block e-commerce implementation. No shopping cart, payment processing, or product management UI is required in Phase 1.

#### User Stories

**US-7.8.1** — Shop Page Placeholder (Phase 1)  
> As a visitor who navigates to the shop,  
> I want to see that a shop is coming and be able to sign up for early access,  
> So that my interest is captured before the shop launches.

**Acceptance Criteria:**
- `/shop` route exists and renders a "Coming Soon" page
- Page includes: a brief description of what will be available (prints, apparel, original art), and an email capture field for "Early Access" notification
- Page is indexed by search engines (not set to `noindex`) with appropriate meta content

**US-7.8.2** — Product Infrastructure (Phase 2 Scope)  
> As a collector who wants to own Anne's art in non-tattoo form,  
> I want to purchase limited edition art prints and merchandise,  
> So that I can collect her work even if I'm not in Porto.

**Acceptance Criteria (Phase 2):**
- Product catalog with: title, description, dimensions (for prints), material, edition size, price in EUR, high-resolution product photography
- Cart and checkout flow with Stripe integration
- Order confirmation email
- Inventory management (manual CSV import acceptable for Phase 2; API sync with a print-on-demand provider in Phase 3)
- Shipping to EU + international (configurable rates)
- Product types: Fine Art Prints (limited edition, signed), Apparel (t-shirts, tote bags), Original Drawings/Sketchbook Pages (one-of-one)

---

### 7.9 Integrations

#### 7.9.1 Instagram API

| Parameter | Detail |
|---|---|
| Purpose | Live feed embed on homepage and about page |
| API | Instagram Basic Display API (official) or Behold.so / EmbedSocial (compliant third-party) |
| Fallback | Static image grid with direct profile link |
| Refresh Rate | Every 4 hours (cached) |
| Data Cached | Yes — API response cached at edge/CDN; no client-side API calls |

#### 7.9.2 Google Maps — Studio Location

| Parameter | Detail |
|---|---|
| Purpose | Studio location on About page |
| Implementation | Google Maps Embed API (iframe, no JavaScript Maps API required for static embed) |
| Content | SALL Studio pin, street view if available, directions link |
| Privacy | No Google Maps JavaScript API loaded until user interacts with the map (consent-gated lazy load) |

#### 7.9.3 Form Submission & Notifications

| Parameter | Detail |
|---|---|
| Consultation Form | Backend endpoint (serverless function or form service) submits data and triggers email |
| Flash Reservation | Same infrastructure as consultation form |
| Email Service | Resend or Postmark for transactional email delivery |
| Anne's Notification | Formatted HTML email with all submission fields and file attachments |
| Client Confirmation | Branded HTML confirmation email |
| Anti-spam | reCAPTCHA v3 (invisible) or hCaptcha on all form submissions |

#### 7.9.4 Analytics

| Parameter | Detail |
|---|---|
| Provider | Plausible Analytics (privacy-first, GDPR compliant, no cookie banner required) |
| Events tracked | Page views, language toggle, form step completions, form abandonment per step, flash design views, reservation submissions, CTA clicks |
| No | Google Analytics 4 (unnecessary complexity; GDPR overhead; Plausible is sufficient) |

---

## 8. Non-Functional Requirements

### 8.1 Performance

| Metric | Target | Priority |
|---|---|---|
| Largest Contentful Paint (LCP) | < 2.5s (mobile 4G) | P0 |
| First Input Delay (FID) / INP | < 200ms | P0 |
| Cumulative Layout Shift (CLS) | < 0.1 | P0 |
| Total Blocking Time (TBT) | < 300ms | P1 |
| Time to Interactive (TTI) | < 3.5s | P1 |
| Portfolio image load (lightbox open) | < 800ms on 4G | P1 |

### 8.2 Accessibility

- WCAG 2.1 AA compliance across all pages
- All images have meaningful `alt` text (or `alt=""` for decorative images)
- Color contrast ratio: minimum 4.5:1 for normal text, 3:1 for large text
- All interactive elements are keyboard-navigable with visible focus indicators
- Form errors are associated with fields via `aria-describedby`
- The language toggle is announced to screen readers on change
- No reliance on color alone to convey information (especially flash availability status)

### 8.3 Security

- All form submissions over HTTPS exclusively; HTTP redirects to HTTPS
- Uploaded files validated for type (magic bytes, not just extension) and scanned before storage
- File storage: cloud object storage (S3 or equivalent) with private access — files not directly publicly accessible
- Rate limiting on form submission endpoints (max 5 submissions per IP per hour)
- No third-party analytics JavaScript that sets cookies without consent
- CSP headers configured to restrict script sources

### 8.4 SEO

| Element | Requirement |
|---|---|
| `<title>` tags | Unique per route, include artist name and keyword |
| Meta descriptions | Unique per route, 150–160 characters |
| `<h1>` | One per page, keyword-informed |
| Structured data | `Person` schema on About page, `LocalBusiness` schema on homepage |
| Image alt text | All portfolio images tagged with style, placement, and artist name |
| Sitemap | Auto-generated `sitemap.xml` submitted to Google Search Console |
| `robots.txt` | Correctly configured; `/book/consultation` and `/flash` crawlable |
| Canonical tags | Implemented to avoid duplicate content between EN and PT content (same URL, different render) |
| Open Graph | Per-route OG tags for social sharing previews |
| Twitter/X Cards | Implemented with portfolio images for sharing |

### 8.5 Browser & Device Support

| Category | Support Level |
|---|---|
| Chrome (last 2 versions) | Full |
| Safari (last 2 versions, iOS) | Full |
| Firefox (last 2 versions) | Full |
| Edge (last 2 versions) | Full |
| Chrome Android (last 2 versions) | Full |
| Safari iOS 16+ | Full |
| Internet Explorer | Not supported |

**Mobile-first design is mandatory.** Given the Instagram-to-web discovery path, the majority of initial visits will be on mobile. Every feature must be designed for mobile first and enhanced for desktop.

---

## 9. Design Language & UX Principles

### 9.1 Core Design Tension

> **"Velvet rope, not brick wall."**  
> The platform is exclusive but not alienating. It filters by seriousness, not by hostility.

### 9.2 Visual Identity Principles

| Principle | Application |
|---|---|
| **Restraint as luxury** | Generous whitespace (or blackspace). No visual noise. Every element earns its place. |
| **Typography-forward** | Large, confident typographic treatment. The wordmark and headings do more visual work than decorative elements. |
| **Photography as the hero** | Interface chrome recedes; the work is the content. Nothing competes with portfolio images. |
| **Monochromatic foundation** | The colour palette is black, white, and one accent. Color enters through the portfolio images themselves. |
| **Deliberate friction** | The intake form is long by design. The platform does not apologize for this. |

### 9.3 Typography Direction

- **Display / Wordmark:** A serif or high-contrast display typeface with editorial credibility (e.g., a grotesque serif or ink-like quality)
- **Body:** A clean, high-legibility sans-serif for long-form reading
- **Accent / Labels:** Monospaced or condensed type for metadata, tags, and labels — signals technical precision
- All typefaces must be served via Google Fonts or self-hosted (no Adobe Fonts dependency)
- Minimum body font size: 16px

### 9.4 Color Direction

| Token | Light Mode | Dark Mode |
|---|---|---|
| `--color-bg` | `#FAFAF8` (warm off-white) | `#0A0A08` (near-black) |
| `--color-surface` | `#F2F0EC` | `#141412` |
| `--color-text-primary` | `#0A0A08` | `#F5F3EE` |
| `--color-text-secondary` | `#5C5A55` | `#8A8880` |
| `--color-accent` | `#1A1A14` (near-black, used sparingly) | `#F5F3EE` |
| `--color-border` | `#E0DED8` | `#2A2A24` |
| `--color-available` | `#2D6A4F` (deep green) | `#52B788` |
| `--color-reserved` | `#9B7E46` (muted gold) | `#C9A96E` |
| `--color-tattooed` | `#4A4A48` (muted grey) | `#666663` |

> The platform should default to **dark mode** as the primary experience, reflective of the underground aesthetic. A light mode is implemented for accessibility and user preference, not as the primary intended experience.

### 9.5 Motion & Interaction Principles

- **Purposeful animation only** — no decorative looping animations
- Page transitions: a subtle fade (150ms ease-out); no slide or scale transitions between full pages
- Gallery filter transitions: 200ms opacity + transform
- Lightbox open/close: 200ms scale from 0.95 to 1.0 + fade
- Scroll-triggered reveals: single-direction fade-in (bottom to current position), 400ms, only on initial viewport entry
- Hover states on interactive elements: 100ms color transitions; no delay
- No parallax scrolling (performance and motion sensitivity concern)
- `prefers-reduced-motion` must be respected: all animations are disabled when the user has set this preference

---

## 10. Content & SEO Strategy

### 10.1 Priority Keyword Targets

| Keyword | Language | Search Intent | Target Page |
|---|---|---|---|
| tattoo artist porto | EN | Commercial | Homepage |
| tatuadora porto | PT | Commercial | Homepage |
| anime tattoo porto | EN | Commercial | Portfolio / Homepage |
| color tattoo artist porto | EN | Commercial | Portfolio / Homepage |
| anime tattoo portugal | EN | Commercial | Portfolio |
| blackwork tattoo portugal | EN | Commercial | Portfolio |
| fine line tattoo porto | EN | Commercial | Portfolio |
| tatuagem fine line porto | PT | Commercial | Portfolio |
| tattoo artist porto portugal | EN | Navigational | Homepage |
| custom tattoo porto portugal | EN | Commercial | Booking |
| best tattoo artist porto | EN | Commercial | About / Homepage |
| flash tattoo porto | EN | Commercial | Flash |
| traveling tattoo collector portugal | EN | Informational | About / FAQ |

### 10.2 Content Pillars

1. **Portfolio Showcase** — The primary evergreen content. Each new piece added strengthens long-tail image search presence.
2. **Style Education** — Brief explanatory content per style (fine line, blackwork, etc.) on portfolio sub-pages doubles as SEO content targeting style-specific searches.
3. **Process Transparency** — The FAQ and booking page content targets informational queries ("how to book a tattoo in portugal", "what to bring to a tattoo consultation").
4. **Local + International Signal** — Content explicitly references Porto, Portugal, and European travel to capture geo-qualified intent.

### 10.3 Structured Data Implementation

```json
// Homepage — LocalBusiness + Person
{
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "TattooParlor"],
  "name": "Ink Anne — Anne Nogueira",
  "url": "https://inkanne.com",
  "image": "https://inkanne.com/og-image.jpg",
  "telephone": "+351-XXX-XXX-XXX",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[SALL Studio Address]",
    "addressLocality": "Porto",
    "addressCountry": "PT"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "[SALL Studio Lat]",
    "longitude": "[SALL Studio Lng]"
  },
  "openingHoursSpecification": "[Studio Hours]",
  "priceRange": "€€€",
  "sameAs": ["https://instagram.com/[anne_handle]"]
}
```

---

## 11. Out of Scope

The following are explicitly **not** in scope for Phase 1 and must not influence Phase 1 architecture decisions beyond the infrastructure notes already documented:

| Feature | Phase | Rationale |
|---|---|---|
| Online payment / deposit collection | Phase 2 | Requires payment processor integration; out of scope until booking volume justifies automation |
| Client login / portal | Phase 3 | No current demand signal; adds auth complexity |
| Blog / editorial content | Phase 2 | Good for SEO long-term; not day-one critical |
| E-commerce checkout | Phase 2 | Shop page is a placeholder in Phase 1 |
| Automated booking confirmation | Phase 2 | Manual confirmation is preferred at Anne's current booking volume |
| SMS notifications | Phase 2 | Email is sufficient for Phase 1 |
| Push notifications | Not planned | No mobile app; web push is low-ROI for this use case |
| Referral or loyalty program | Not planned | Brand positioning is exclusivity; loyalty mechanics risk diluting it |

---

## 12. Open Questions & Risks

| # | Question / Risk | Owner | Priority | Status |
|---|---|---|---|---|
| 1 | **Domain name confirmed?** `inkanne.com` or `annenogueira.com` or other? Brand decision needed before DNS setup. | Anne | P0 | Open |
| 2 | **CMS or static content?** Portfolio and flash content managed via JSON files (developer-edited) or a headless CMS (e.g., Sanity, Contentful) for Anne to self-manage? CMS adds upfront complexity but removes developer dependency for day-to-day content. Recommended: Sanity.io for Phase 1. | Product + Dev | P0 | Open |
| 3 | **SALL Studio relationship.** Does the platform link to SALL Studio's own web presence? Is there a branding hierarchy to maintain (Anne's brand subordinate to or independent of the studio)? | Anne | P1 | Open |
| 4 | **Deposit collection process.** Until Phase 2 automated deposit, how is the deposit collected after a booking is confirmed? Bank transfer? MBWay? This needs to be documented in the booking flow even if off-platform. | Anne | P1 | Open |
| 5 | **Flash design inventory.** How many flash designs will be available at launch? A minimum of 6 is recommended for the flash page to feel like a real catalog. | Anne | P1 | Open |
| 6 | **Portfolio image library.** Confirmed permission from all clients whose work appears in the portfolio? GDPR and image rights for any identifiable body parts or client-adjacent identifying features must be reviewed. | Anne + Legal | P0 | Open |
| 7 | **Instagram API access.** Does Anne have a Creator or Business Instagram account (required for API access)? Personal accounts cannot use the API. | Anne | P1 | Open |
| 8 | **Minimum budget threshold.** The form uses €150 as the minimum session fee in the soft warning copy. Is this the correct current minimum? | Anne | P0 | Open |
| 9 | **Response time SLA.** The confirmation copy states "5 business days." Is this realistic given Anne's current volume? If she responds faster, the stated time builds positive surprise. If slower, it erodes trust. | Anne | P1 | Open |
| 10 | **Dark mode as default.** Design direction specifies dark mode as primary. Confirm this aligns with Anne's brand preference — it is a strong aesthetic statement and should be intentional. | Anne + Design | P1 | Open |

---

*This document is a living specification. All acceptance criteria should be treated as a contract between product and engineering. Any deviation requires explicit approval and a documented rationale.*

*Ink Anne · Web Platform · product.md · v1.0.0*
