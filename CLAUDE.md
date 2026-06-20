# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Ink Anne is the web platform for **Anne Nogueira**, a tattoo artist at SALL Studio in Porto, Portugal. It's a bilingual (PT/EN) portfolio and booking site built with React + TypeScript + Vite + Tailwind CSS v4.

Key planned features (see `product.md`): portfolio gallery, flash tattoo reservation engine, availability calendar/booking flow, high-barrier consultation intake form, client testimonials, and e-commerce foundation.

## Commands

```bash
npm run dev       # start dev server (Vite HMR)
npm run build     # tsc -b && vite build
npm run lint      # ESLint
npm run preview   # preview production build
```

No test suite is configured yet.

## Architecture

**Stack:** React 19, TypeScript, Vite 8, Tailwind CSS v4 (via `@tailwindcss/vite`), React Router v7, i18next, lucide-react.

**Routing:** `src/router/index.tsx` — single page (`/` → `Home`). Add new routes here.

**Page composition:** Pages live in `src/pages/`, composed from layout components (`src/components/layout/`) and section components (`src/components/sections/`). The `Home` page currently renders `<Header>`, `<HeroSection>`, `<AboutSection>`.

**i18n:** `src/i18n/index.ts` initialises i18next with browser language detection; fallback language is **Portuguese (`pt`)**. Translation files are `src/i18n/locales/pt.json` and `en.json`. All user-facing strings must be added to both files and accessed via `useTranslation()`.

**Design system:** Refer to `DESIGN.md` for the full visual language — color tokens, typography scale (PP Neue Montreal + Cormorant Infant), spacing/grid rules, component specs, and motion guidelines. `product.md` contains the full feature specification and business requirements.

**Assets:** Hero video at `src/assets/hero-video.mov`; artist photo and logo variants in `src/assets/`. SVG icons sprite at `public/icons.svg`.
