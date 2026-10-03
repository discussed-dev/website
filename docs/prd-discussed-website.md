# Discussed Website PRD

## Purpose

Discussed.dev is the public landing page for the Discussed browser extension. It should explain the product quickly, show the extension working, send visitors to a supported installation path, and provide an accurate privacy policy for store review and users.

## Audience

- People who want to find existing discussion about the page they are reading
- Potential contributors evaluating the open-source extension
- Browser-store reviewers verifying product behavior and privacy claims

## User outcomes

A visitor should be able to:

1. Understand that Discussed finds Hacker News, Reddit, and Lobsters threads for the current page.
2. See the real extension interface before installing.
3. Choose the correct installation path for Chrome, Firefox, or Edge.
4. Understand that summaries are optional and use the visitor's configured LLM provider.
5. Find the source code, privacy policy, license, and contact address.

## Content structure

1. **Hero:** product name, concrete promise, browser install actions, and a silent looping product demo.
2. **Workflow:** three steps from browsing to opening threads to requesting a summary.
3. **Technical detail:** the sources, URL normalization, optional LLM summaries, backend model, and license.
4. **Final action:** repeat the supported installation paths after the visitor has reviewed the details.
5. **Footer:** GitHub, privacy policy, contact, and license.
6. **Privacy page:** accurate description of page URL access, external services, local storage, and user-triggered summaries.

## Functional requirements

- Generate a static Astro site with no application runtime or account system.
- Provide live Chrome and Firefox store links.
- Send Edge visitors to the Chrome Web Store listing, which Edge installs from directly, while the Edge store listing is pending.
- Loop the silent product demo without native player controls.
- Show the static demo poster instead when the visitor prefers reduced motion.
- Work at mobile, tablet, and desktop widths without horizontal overflow.
- Support system light and dark color schemes.
- Use semantic landmarks, visible keyboard focus, and WCAG AA text contrast.
- Include complete page titles, descriptions, canonical URLs, and social sharing metadata.

## Privacy requirements

The policy must cover:

- Current-tab URL normalization and automatic searches sent directly to Hacker News Algolia and Reddit (full normalized URL) and Lobsters (domain only)
- Settings stored in browser sync storage; the API key kept in local storage and never synced
- Discussion and summary caching in browser storage
- User-triggered page text and comment access for summarization
- Local API-key storage and direct requests to the user's configured LLM provider
- The absence of a Discussed backend, account system, extension analytics, tracking, and telemetry

## Non-goals

- Reproducing the extension interface inside the website
- Hosting downloads other than links to browser stores or GitHub Releases
- Adding testimonials, invented usage metrics, pricing, newsletter capture, or decorative marketing sections
- Adding client-side themes, carousels, parallax, or autoplay motion unrelated to the product demo

## Done when

- The content structure and install paths above are present.
- The privacy policy matches current extension behavior.
- Format, lint, type checks, tests, and production build pass.
- Desktop, mobile, light, dark, keyboard, and reduced-motion states have been reviewed.
