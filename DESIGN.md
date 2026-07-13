# Discussed Website Design System

## Visual thesis

Discussed should feel like an editorial reading companion built into the browser: quiet, precise, and credible, with the real product carrying more visual weight than decorative UI.

## Content plan

- **Hero:** identify Discussed, state what it finds, offer installation, and show the extension working.
- **Support:** explain the three-step workflow in a scannable numbered sequence.
- **Detail:** expose the concrete technical and privacy properties that differentiate the extension.
- **Final CTA:** provide one last direct installation choice without adding a new marketing claim.

Each section has one job and one dominant visual idea. Do not add sections solely to create visual variety.

## Interaction thesis

- The product demo loops silently without native player chrome.
- Reduced-motion visitors see the static product poster instead of the loop.
- Links and installation actions use short color transitions to clarify hover state.
- Keyboard focus is immediate and high-contrast.

Do not add entrance sequences, scroll-linked animation, parallax, or decorative motion. The product demo is the only autoplay exception because it directly demonstrates the extension.

## Typography

- **Display:** Fraunces Variable for page and section headings only.
- **Body and UI:** Instrument Sans Variable.
- Use at most these two families.
- Headings use normal display weight rather than fake bold or italic emphasis.
- Paragraphs use plain sentences without highlighted keywords, decorative strikes, or marketing fragments.

## Color

### Light

- Background: `#FAFAF8`
- Primary text: `#1A1A1A`
- Muted text: `#6B6B6B`
- Accent: `#C2410C`
- Accent hover: `#A83A0B`
- Border: `#E5E5E3`

### Dark

- Background: `#111113`
- Primary text: `#E8E8E6`
- Muted text: `#999999`
- Accent: `#F06D2D`
- Accent hover: `#F5824C`
- Border: `#2A2A2C`

The off-white background mirrors quiet reading surfaces rather than a yellow paper effect. Burnt orange comes from the Discussed mark and is the only accent. Do not introduce gradients, framework semantic colors, tinted icon containers, or atmospheric glows.

## Layout and rhythm

- The default content shell is `64rem`; product-led media may use a wider shell up to `72rem`.
- Body copy should remain between `32rem` and `42rem` for comfortable reading.
- Create hierarchy through width, alignment, whitespace, and type scale.
- Vary section composition intentionally; do not repeat the same centered heading, equal-column grid, divider, and spacing pattern through the page.
- Prefer ordered lists, aligned rows, and open columns over cards.
- Use a small `0.375rem` radius only for interactive controls and real media boundaries.

## Hero

- The product name must be visible in the first viewport.
- Use one headline, one supporting sentence, one installation group, and one product demo.
- The demo poster must show Discussed itself, not only the underlying webpage.
- Loop the video silently without native controls so it reads as a product demonstration rather than embedded media.
- Do not place the hero inside a decorative card, glass panel, gradient, or fake browser frame.

## Installation actions

- Chrome and Firefox are slightly preferred because they use verified browser-store installation paths.
- Edge remains slightly quieter because it requires a manual ZIP installation, but it keeps the same control structure and size.
- Use outlined actions throughout; stronger border and text contrast distinguish the store links without creating one dominant filled button.
- Labels describe the action: add to a browser or download a ZIP.
- Edge copy must disclose the version and manual-install format.
- Keep controls at least `44px` high and use a modest radius, never a pill.

## Responsive behavior

- Start with one-column mobile flow and move to multi-column composition only when both text and media remain readable.
- The Hero text must appear before the demo in source order.
- Installation actions may wrap but must not overflow.
- Avoid fixed heights; respect browser UI through normal document flow.

## Accessibility

- Include a visible-on-focus skip link.
- Use semantic heading order, lists, navigation labels, and landmarks.
- Keep all small text and focus indicators at WCAG AA contrast.
- Provide a text description for the silent demo and preserve reduced-motion behavior.
- Do not communicate meaning through color alone.

## Anti-slop checks

Reject these defaults unless a future requirement provides a specific reason:

- Rounded card grids and feature icon tiles
- Pill-shaped controls, badge collections, and glowing status dots
- Gradients, glassmorphism, oversized shadows, and tint-on-tint icons
- Emoji as decoration
- All-caps micro-label grids
- Empty claims, punchy triads, and repeated slogans
- Monospace terminal styling outside code

The system is intentionally restrained, but restraint alone is not the goal. Every section must still make the product easier to understand or install.
