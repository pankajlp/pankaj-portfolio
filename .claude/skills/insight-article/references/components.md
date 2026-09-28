# Optional building blocks

Reach for these only when they show something prose can't. Both render in the
always-dark article theme; use the palette from SKILL.md. Place either inside the
article, between two `<section>`s, wrapped in a `<figure>`.

## Inline SVG diagram

Draw the mechanism, not its name. If it's a comparison, draw both sides so the
reader can point at the difference. Hand-author the SVG (no libraries), size it
with `viewBox`, let it scale with `className="w-full h-auto"`, and give it
`role="img"` + an `aria-label` carrying the same claim. Neutral marks in
`#6f675b`/`#34302a`, the one meaningful element in gold `#c8a86b`. Keep label
text ~10–13px and short; the sentence goes in the `<figcaption>`.

```tsx
<figure className="mt-16 rounded-2xl border border-white/10 bg-white/[0.02] p-5 md:p-7">
  <svg viewBox="0 0 680 300" role="img" aria-label="{{ONE-SENTENCE CLAIM}}"
       className="w-full h-auto" style={{ maxWidth: "100%" }}>
    <defs>
      <marker id="arw" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
        <path d="M0,0 L10,5 L0,10 z" fill="#6f675b" />
      </marker>
      <marker id="arwg" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
        <path d="M0,0 L10,5 L0,10 z" fill="#c8a86b" />
      </marker>
    </defs>
    {/* neutral box */}
    <rect x="12" y="42" width="120" height="60" rx="8" fill="#16130f" stroke="#34302a" />
    <text x="72" y="77" fill="#e7e0d2" fontSize="12" textAnchor="middle">Label</text>
    {/* neutral connector */}
    <line x1="132" y1="72" x2="172" y2="72" stroke="#6f675b" strokeWidth="1.4" markerEnd="url(#arw)" />
    {/* the meaningful element in gold */}
    <rect x="174" y="40" width="120" height="64" rx="10" fill="#1c1710" stroke="#c8a86b" strokeWidth="1.4" />
    <text x="234" y="76" fill="#efe9df" fontSize="14" textAnchor="middle" fontWeight="700">Key</text>
    <line x1="296" y1="72" x2="336" y2="72" stroke="#c8a86b" strokeWidth="1.4" markerEnd="url(#arwg)" />
  </svg>
  <figcaption className="mt-5 text-[13px] leading-[1.7] text-[#8a8175] italic">
    {{What the picture shows. If any number is a vendor claim, say so here.}}
  </figcaption>
</figure>
```

Confidence/score bars, when useful: a track `<rect fill="#2a2620">` with a gold
fill `<rect fill="#c8a86b">` sized to the value, and the number in `#d8bd86`.

## Comparison table

Wide tables must sit in their own `overflow-x-auto` box with a `min-w-[…]` so
they scroll horizontally on phones instead of breaking the page body — the body
must never scroll sideways. Serif (`font-syne` / `font-serif`) headers, muted
cells, gold or ivory for the emphasized column.

```tsx
<figure className="mt-16 rounded-2xl border border-white/10 bg-white/[0.02] p-5 md:p-6">
  <div className="overflow-x-auto">
    <table className="w-full border-collapse text-left text-[13px] md:text-[14px] min-w-[640px]">
      <thead>
        <tr className="border-b border-white/15">
          <th className="py-3 pr-4 font-serif font-medium text-[#f2ede3] tracking-tight">Col A</th>
          <th className="py-3 px-4 font-serif font-medium text-[#f2ede3] tracking-tight">Col B</th>
          <th className="py-3 pl-4 font-serif font-medium text-[#f2ede3] tracking-tight">Col C</th>
        </tr>
      </thead>
      <tbody className="text-[#a89f8f] align-top">
        <tr className="border-b border-white/[0.06]">
          <td className="py-4 pr-4 text-[#e7e0d2] font-medium">Row label</td>
          <td className="py-4 px-4">cell</td>
          <td className="py-4 pl-4 text-[#cfc7b6]">emphasized cell</td>
        </tr>
      </tbody>
    </table>
  </div>
  <figcaption className="mt-5 text-[13px] leading-[1.7] text-[#8a8175] italic">
    {{Caption. For fast-moving facts, add "verify current terms before relying on them."}}
  </figcaption>
</figure>
```

## Screenshot verification

The container ships Chromium at `/opt/pw-browsers/chromium` and `playwright-core`
is available. Build, `npm run start -- -p <port>`, wait until the URL responds,
then run a small ESM script:

```js
import { chromium } from 'playwright-core';
const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
const p = await b.newPage({ viewport: { width: 900, height: 1200 }, deviceScaleFactor: 1.5 });
await p.goto('http://localhost:<port>/insights/<slug>', { waitUntil: 'domcontentloaded' });
await p.waitForTimeout(1500);                 // let the preloader clear
await (await p.$('figure')).screenshot({ path: '/tmp/shot.png' });  // or p.screenshot for full page
await b.close();
```

Also capture ~390px width to confirm the layout stacks and no element overflows
the viewport. Analytics hosts (googlesyndication, googletagmanager) are blocked
by the egress proxy — those console/proxy warnings during a screenshot run are
harmless.
