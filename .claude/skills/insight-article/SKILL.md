---
name: insight-article
description: >-
  Create a new NordNeuron Insights article (blog post / essay / field note) for
  this portfolio site, matching the site's dark quiet-luxury design system and
  wiring it into every place it needs to appear. Use this whenever the user asks
  to write, add, or publish an article, insight, essay, blog post, or write-up on
  the Insights section — including phrasings like "write another article",
  "add an insight on X", "new blog post", "narrate the findings", or "make a
  piece about Y" — even if they don't mention the design or the file layout. It
  covers the exact page template, the palette and type tokens, the three-file
  registration (page + shared list + sitemap), optional inline diagrams and
  comparison tables, and the build/verify/ship steps.
---

# NordNeuron Insights article

Every Insights article on this site is one client-rendered page in the dark
"quiet luxury" theme (charcoal ground, warm ivory text, champagne-gold accent,
Fraunces serif display). Adding one cleanly is three files, always:

1. **The page** — `app/insights/<slug>/page.tsx` (copy the template, fill it in).
2. **The shared list** — prepend an entry to `app/lib/insights.ts`. This is the
   single source of truth: the `/insights` index and the homepage "Latest
   Thinking" section (`app/components/LatestInsights.tsx`, which shows
   `articles.slice(0, 3)`) both read from it, so a newest-first entry surfaces
   in both places automatically. **Newest goes at the top of the array.**
3. **The sitemap** — add the route to the `insights` array in `app/sitemap.ts`.

Miss any of the three and the article is broken or invisible: no page, or not
listed, or not indexed. Do all three every time.

## Workflow

1. **Get the content right first.** Match the house voice (see "Voice" below).
   If the piece makes claims about real products, companies, models, CVEs, laws,
   or current events, **research them on the web before writing** — do not write
   current-events claims from memory. State facts with dates, and label a
   vendor's performance/safety numbers as *their claims*, not established fact.
2. **Pick a slug** — short, hyphenated, lowercase, derived from the title
   (e.g. `the-accountability-gap`). It becomes the URL `/insights/<slug>`.
3. **Create the page.** Copy `assets/article-template.tsx` (in this skill folder)
   to `app/insights/<slug>/page.tsx` and replace every `{{PLACEHOLDER}}`. Keep
   the boilerplate (scroll-progress bar, nav, footer) exactly as-is — that shell
   is identical across all articles and is what makes them feel like one site.
4. **Register in the shared list.** Prepend an object to `articles` in
   `app/lib/insights.ts` (see "List entry" below). Newest first.
5. **Add the sitemap route** — one string at the top of the `insights` array in
   `app/sitemap.ts`, matching the new order.
6. **Build.** Run `npm run build` and confirm it prints `Compiled
   successfully` and lists `/insights/<slug>` as a prerendered route. Fix any
   error before shipping — a broken build does not deploy.
7. **Verify visually (recommended when the page has a diagram or table).**
   `npm run start -- -p <port>`, then screenshot with playwright-core against
   the pre-installed Chromium at `/opt/pw-browsers/chromium`. Check desktop and
   ~390px mobile. (See `references/components.md` for the screenshot snippet.)
8. **Ship.** Commit with a descriptive message, push the working branch, then
   fast-forward `main` — the site deploys from `main`. Match whatever
   commit-attribution and branch conventions the session is already using.

## List entry (`app/lib/insights.ts`)

```ts
{
  href: "/insights/<slug>",
  title: "The Full Title, Same As The Page H1",
  category: "AI Governance",          // see category list below
  description: "1-2 sentences, the card blurb. Plain, specific, no hype.",
  image: "",                          // "" -> dark brand tile; or "/cover.png" in public/
  meta: "September 2026 · 8 min read" // "<Month Year> · <N> min read"
},
```

- **Thumbnail:** leave `image: ""` for the clean dark brand tile (a faint gold
  radial glow with the accent dot — the index renders this automatically when
  `image` is empty). Only set a path if a real cover image exists in `public/`.
- **Categories in use:** AI Research, AI Governance, AI Security, Agentic AI,
  AI Economics, Enterprise AI, LLM Engineering, Analytics Engineering, LLMOps.
  Reuse an existing one unless the piece genuinely needs a new label.

## Design tokens

The article shell already encodes these; use them for any custom markup you add
(diagrams, tables, callouts). The pages are always-dark, so literal hex is fine.

| Role | Value |
| --- | --- |
| Page ground | `#0c0b0a` |
| Body text | `#efe9df` / `#e7e0d2` |
| Heading text | `#efe9df` / `#f2ede3` |
| Muted / secondary | `#8a8175`, `#a89f8f`; faint `#6f675b` |
| Accent (gold) | `#c8a86b`; hover/bright `#d8bd86` |
| Card fill / border | `bg-white/[0.02]` or `#16130f`; border `white/10` |
| Serif display face | `font-serif` (Fraunces) — titles, section headings |
| Label / mono face | `font-mono` (Inter) — uppercase tracked eyebrow labels |

## Article structure

The template lays this out; keep the rhythm:

- **Tag** — the category, as a pill.
- **Title** — Fraunces, sentence-style, the same string as the list `title`.
- **Subtitle** — one italic sentence stating the thesis.
- **Meta** — `Pankaj Kumar • <Month Year> • <N> min read`.
- **Intro** — ~3 paragraphs that set up the tension before any heading.
- **3-4 sections** — each an `<h2>` claim + 2-3 paragraphs. The last section is
  usually a short set of **bolded lead-in** recommendations ("What changes when…").
- **Closing** — a divider, then one italic blockquote-style sign-off (the
  template's closing line about NordNeuron).

## Voice

Analytical, calm, and specific — the register of a sharp field note, not a
listicle or a sales page. Lead with a real tension, name concrete things
(products, frameworks, numbers, dates), and earn the conclusion. Prefer plain
declaratives; avoid hype words and exclamation. Fairness reads as credibility:
when you cite a claim, say whose it is and when. A useful diagram or comparison
table is welcome where it shows a mechanism prose can't — see
`references/components.md` for the inline-SVG diagram and dark-gold table
patterns, both theme-matched and mobile-safe.

## Reference files

- `assets/article-template.tsx` — the page boilerplate with `{{PLACEHOLDER}}`s.
  Copy it to `app/insights/<slug>/page.tsx` and fill in.
- `references/components.md` — optional building blocks: the inline-SVG diagram
  pattern, the dark-gold comparison table (with the mobile horizontal-scroll
  rule), and the playwright screenshot snippet.
