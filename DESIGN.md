# Design: nordneuron.com

The locked system. Every Hallmark run reads this first and pages share it. Change it on purpose; the file is the rule.

## System
- Genre: modern-minimal
- Shape of the first page: Index-First (the home page leads with the work index)
- Theme: brand (warm charcoal, ivory ink, one champagne gold; the same family as nordneuron.com)
- Axes: dark/roman-serif/warm · posture: restrained
- Signature: the priced lane table. Each messy RFQ line sits beside the row it becomes.

## Tokens
`app/tokens.css` is the source of truth. The roles (dark only):
```css
:root {
  --color-paper: #0c0b0a;  --color-paper-2: #141210;  --color-paper-3: #1b1815;  --color-paper-4: #231f1b;
  --color-ink: #efe9df;  --color-ink-2: #b3aa9a;  --color-muted: #958c7f;  --color-rule: rgb(239 233 223 / 0.1);
  --color-accent: #c8a86b;  --color-accent-ink: #17130c;  --color-focus: #d8bd86;
  --font-display: Fraunces, Georgia, serif;  --font-body: Inter, system-ui, sans-serif;  --font-outlier: ui-monospace, monospace;
  --radius-card: 6px;  --radius-pill: 999px;  --rule-hair: 1px;  --shadow-card: none;
}
```
The spacing scale, the fluid type scale, the easings and the durations live in `tokens.css`.

## Rules the pages follow
- Fraunces on headings and the wordmark, one weight (500), one colour. No italic or gold word inside a heading.
- Labels are sentence case, untracked, never uppercase. No eyebrow above a heading, no pill over a title.
- One container (`.wrap`, 1440px with a 64px gutter, 24px on tablets, 16px on phones). Sections part by `--section-gap-s` (120px) or a band of `--color-paper-2`.
- Elevation is lightness, never a shadow, a glow or a blur. One hairline per container, no box inside a box.
- Lists join with commas or columns, never middle dots; links and buttons carry no arrows.
- Figures and quotes on the page are the owner's. Demo data carries the demo notice.

## Controls
- Primary: `.btn`, gold fill, charcoal text, 6px radius, 48px tall. One per screen.
- Secondary: `.btn-quiet`, a 1px outline, same radius and height. Text links use `.link`.
- Inputs: 48px, a 1px edge in `--color-muted`, focus by a 2px outline that appears at once.

## Motion
- Character: still. Colour transitions at 120 to 220ms on controls. No preloader, no scroll reveal that hides content, no canvas. Under reduced motion everything ends at once.

## Exports
`tokens.css` in this project, written as a Tailwind 4 `@theme static` block, so every colour and face is also a utility (`bg-paper-2`, `text-muted`, `font-display`).
