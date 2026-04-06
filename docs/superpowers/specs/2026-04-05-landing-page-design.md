# Discussed Landing Page — Design Spec

**Date:** 2026-04-05
**Status:** Approved
**Phase:** 1 (pre-launch, "Coming Soon")

---

## Overview

Static single-page landing site for the Discussed browser extension at discussed.dev. English only. Minimal, clean, zero client-side JavaScript.

## Tech Stack

| Component | Choice |
|-----------|--------|
| Framework | Astro |
| Styling | Tailwind CSS v4 |
| Hosting | Cloudflare Pages (domain on Cloudflare) |
| Language | English only |

## Visual Style

- **Minimal neutral** — black/white/gray palette with a single blue accent color for interactive elements
- **Dark/light mode** — follows system `prefers-color-scheme`, no manual toggle
- **Typography** — system font stack (no custom fonts to load)
- **No logo yet** — use "Discussed" as a text wordmark for now; swap in a logo later
- **No extension screenshots yet** — Phase 1 uses text and icons only

## Pages

### 1. Home (`/`)

Four sections, top to bottom:

**Hero**
- Text wordmark: "Discussed"
- Tagline: "See what people are saying about any page on HN, Reddit & Lobsters"
- Primary button: "Star on GitHub" → `https://github.com/discussed-dev/extension`
- Muted text below button: "Coming Soon to Chrome, Firefox & Edge"

**How It Works (3 steps)**
- Step 1: "Browse normally" — badge auto-detects discussions
- Step 2: "Click to see" — popup shows discussions across platforms
- Step 3: "AI summary" — one click to summarize all discussions (BYO API key)
- Each step with a simple inline icon (no illustrations)

**Features**
- Auto-detection using Bloom filter (zero API calls for most pages)
- Covers HN, Reddit, Lobsters + search links for X and Google Discussions
- AI-powered cross-thread summary with your own API key
- Privacy-first: no data collection, no tracking, no backend
- Open source (MIT)

**Footer**
- GitHub repo link
- Privacy Policy link (`/privacy`)
- MIT License
- Contact: hi@discussed.dev

### 2. Privacy Policy (`/privacy`)

Standalone page with the same header/footer as home. Content covers:

- **What the extension accesses:** current tab URL only
- **External services contacted:**
  - HN Algolia API (search for discussions)
  - Reddit search API
  - Lobsters API
  - GitHub Releases (Bloom filter download, no user data sent)
- **Local storage:** API keys stored in browser local storage, never transmitted to any server
- **AI summarization:** sends comment text to the user's chosen LLM provider using the user's own API key
- **Data collection:** none — no personal data collected, stored, or shared
- **Tracking/analytics:** none
- **Contact:** hi@discussed.dev
- **Effective date:** 2026-04-05

## Responsive Design

- Mobile-first layout
- Hero stacks vertically on small screens
- "How It Works" steps stack vertically on mobile, horizontal on desktop
- No hamburger menu needed (no navigation)

## Out of Scope (Phase 1)

- Logo / custom branding (TBD later)
- Extension screenshots or GIFs
- Browser store links (extensions not yet published)
- Waitlist / email signup
- Analytics
- Blog, docs, or any additional pages
- Manual dark/light mode toggle

## Future Phases

- **Phase 2:** Add extension screenshots, GIF demo, store links once extension is published
- **Phase 3:** Enable store download buttons, finalize branding/logo
