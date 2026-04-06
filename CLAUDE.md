# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Governing Docs

- `docs/prd-discussed-website.md` — PRD for the landing page (read on every session start)

## Project Overview

Landing page for the **Discussed** browser extension at **discussed.dev**. Single-page static site that explains the extension, links to browser store listings, and hosts a privacy policy (required by Chrome Web Store and Firefox Add-ons).

Currently in **Phase 1** — "coming soon" version with GitHub link as primary CTA, no store links yet.

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
- Hero with tagline, CTA buttons, GitHub badge
- "How It Works" (3 steps)
- Features list
- Footer with GitHub, privacy policy, license
- Privacy Policy (separate section or `/privacy`)

## Build Commands

```
npm install          # install dependencies
npm run dev          # dev server (http://localhost:4321)
npm run build        # production build (output: dist/)
npm run preview      # preview production build locally
```

## Design Constraints

- Dark/light mode support required
- Mobile-friendly
- Must match the extension's visual identity
- No analytics, no tracking, no dynamic content
- Privacy policy content must cover: tab URL access, external API calls (HN Algolia, Reddit, Lobsters), local API key storage, Bloom filter from GitHub Releases, AI summarization via user's own LLM provider
