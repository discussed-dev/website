# Design System — Discussed

## Product Context
- **What this is:** Landing page for the Discussed browser extension
- **Who it's for:** Developers who read Hacker News, Reddit, and Lobsters
- **Domain:** discussed.dev
- **Project type:** Static marketing site (Astro + Tailwind CSS v4, Cloudflare Pages)

## Aesthetic Direction
- **Direction:** Editorial Minimal
- **Decoration level:** Minimal — typography and whitespace do all the work. No panels, no cards, no rounded wrappers.
- **Mood:** Like a well-designed indie magazine, not a SaaS product page. Quiet confidence.
- **Layout:** Left-aligned editorial. Not everything centered. Generous breathing room.

## Typography
- **Display/Hero:** Fraunces — warm, round serif with personality. Stands out in a category where every dev tool uses sans-serif.
- **Body/UI:** Instrument Sans — clean modern sans, pairs naturally with serif headings.
- **Code/Data:** JetBrains Mono — tabular-nums, ligatures.
- **Loading:** Self-host via @fontsource (privacy-first, no Google Fonts dependency).
- **Scale:** 0.75rem (labels) / 0.85rem (small) / 0.9rem (body-sm) / 1rem (body) / 1.1rem (body-lg) / 2rem (h2) / clamp(2.8rem, 6vw, 4.5rem) (h1)

## Color
- **Approach:** Extremely restrained. Near-monochrome with one accent.
- **Background:** `#FAFAF8` (warm white) / dark `#111113`
- **Text:** `#1A1A1A` / dark `#E8E8E6`
- **Muted text:** `#6B6B6B` / dark `#999999`
- **Faint text:** `#999999` / dark `#666666`
- **Accent:** `#E8590C` (burnt orange) — used sparingly: one primary CTA, step numbers, rare highlights
- **Accent dark:** `#F06D2D` (slightly lighter for dark mode contrast)
- **Border:** `#E5E5E3` / dark `#2A2A2C` — used rarely, only for dividers and download buttons
- **Dark mode:** Follows system `prefers-color-scheme`, no manual toggle

## Spacing
- **Base unit:** 8px
- **Density:** Spacious — generous whitespace between sections
- **Scale:** xs(4) sm(8) md(16) lg(24) xl(32) 2xl(48) 3xl(64) 4xl(80)

## Layout
- **Approach:** Editorial, left-aligned primary flow
- **Max content width:** 64rem (1024px)
- **Border radius:** 0.5rem on buttons only. No rounded wrappers on content sections.
- **Depth strategy:** ZERO panels/cards/surfaces. Hierarchy through type size, weight, and whitespace. Dividers (1px border-top) separate major sections.

## Motion
- **Approach:** Minimal-functional
- **Transitions:** hover state color/opacity only, 150ms ease
- **No entrance animations, no scroll effects, no page transitions**

## Brand Assets
- **Logo:** `/public/brand/discussed-logo.svg` (header)
- **Mark:** `/public/brand/discussed-mark-brand.svg` (footer, favicon)
- **Favicon:** `/public/favicon.svg`
- **Demo GIF:** `/public/media/discussed-extension.gif`
- **Demo video:** `/public/media/discussed-extension.webm`, `/public/media/discussed-extension.mp4`
- **Demo poster:** `/public/media/discussed-extension-poster.png`
- **Store icons:** `/public/store-icons/chrome-web-store.png`, `firefox-addons.ico`, `edge-addons.ico`

## Content & Links
- **GitHub:** https://github.com/discussed-dev/extension
- **Contact:** hi@discussed.dev
- **Privacy:** /privacy
- **License:** MIT
- **Download (Phase 1):** GitHub Release zips at https://github.com/discussed-dev/extension/releases/download/v0.1.0/

## Copy Direction
- Short, direct, no marketing fluff
- Headline: "Every page has a conversation. Find it."
- Section titles: conversational ("Three steps, no setup", "Under the hood")
- Button labels: just the browser name ("Chrome", "Firefox", "Edge")
- Tone: developer-to-developer, not brand-to-consumer

## Decisions Log
| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-04-06 | Editorial Minimal direction | HN/Reddit audience detects "template feel" instantly. Serif + whitespace = differentiation. |
| 2026-04-06 | Zero panels/cards | White panels on gray background created visual "patches". Removing all surface containers solves the root cause. |
| 2026-04-06 | Fraunces over Instrument Serif | Instrument Serif too thin/narrow at display sizes. Fraunces is rounder, bolder, more confident. |
| 2026-04-06 | Full copy rewrite | Original copy was functional but generic. New copy is shorter, more specific, more editorial. |
