# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Governing Docs

- `docs/prd-discussed-website.md` — PRD for the landing page (read on every session start)
- `DESIGN.md` — Design system (read before any visual/UI decisions)

## Project Overview

Landing page for the **Discussed** browser extension at **discussed.dev**. Single-page static site that explains the extension, links to browser store listings, and hosts a privacy policy (required by Chrome Web Store and Firefox Add-ons).

Chrome and Firefox store listings are live. Edge store listing still pending (zip download).

## Tech Stack

| Component | Choice |
|-----------|--------|
| Framework | Astro |
| Styling | Tailwind CSS v4 |
| Hosting | Cloudflare Pages |
| Domain | discussed.dev |

Target: zero or minimal client-side JavaScript. Static output only.

## Architecture

Single-page site with these sections (defined in PRD):
- Hero with tagline, browser install actions, and a silent looping product demo
- "How It Works" (3 steps)
- Features list
- Final browser install action
- Footer with GitHub, privacy policy, license
- Privacy Policy (separate section or `/privacy`)
- 404 page (`src/pages/404.astro`, so Cloudflare Pages stops serving the home page for unknown URLs)

## Build Commands

```
npm install          # install dependencies
npm run dev          # dev server (http://localhost:4321)
npm run build        # production build (output: dist/)
npm run preview      # preview production build locally
npm run verify       # format check, lint, Astro check, tests, and build
```

## Design System

Always read `DESIGN.md` before making any visual or UI decisions. All font choices, colors, spacing, and aesthetic direction are defined there. Do not deviate without explicit user approval.

Key points:
- Editorial Minimal aesthetic — zero panels/cards, typography does the work
- Fraunces (display) + Instrument Sans (body)
- Near-monochrome palette with accessible burnt orange `#C2410C` accent
- Brand mark plus a theme-aware HTML wordmark in the header
- Dark/light mode via system `prefers-color-scheme`
- Self-host fonts via @fontsource (no Google Fonts)
- The product demo loops silently without player chrome; reduced-motion users see its poster
- No decorative animation
- Avoid generic AI defaults: gradients, glass panels, pill spam, icon tiles, decorative emoji, and empty marketing copy

## Constraints

- Mobile-friendly, responsive
- Analytics via Cloudflare Web Analytics (auto-injected by Cloudflare Pages, no code needed)
- No third-party tracking, no cookies, no dynamic content
- Privacy policy must cover: tab URL access, external API calls (HN Algolia, Reddit, Lobsters), local API key storage, Bloom filter from GitHub Releases, AI summarization via user's own LLM provider
