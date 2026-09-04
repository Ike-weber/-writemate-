# WriteMate AI

A Next.js + Tailwind rebuild of the WriteMate AI marketing site
(https://writemate.demos.tailgrids.com/).

## Stack

- Next.js 16 (App Router, Turbopack) + TypeScript
- Tailwind CSS v4 (theme tokens in `src/app/globals.css`)
- `motion` for scroll-reveal animations, `swiper` for the "What You Get" carousel

## Run

```bash
npm run dev     # http://localhost:3000
npm run build
npm start
```

## Routes

| Route      | Sections                                                              |
| ---------- | --------------------------------------------------------------------- |
| `/`        | Hero, Clients, What You Get, Use Cases, Pricing, Testimonials, FAQ, CTA |
| `/pricing` | Pricing cards, Clients, Comparison table, FAQ, CTA                     |
| `/docs`    | Sidebar nav + Introduction article                                     |
| `/support` | Quick answer card + contact form                                       |
| `*`        | 404 page                                                               |

## Theme

Monochrome, near-black (`--color-theme-dark: #030303`) with white text and
`white/20` hairline borders. Inter for body copy, a mono stack for buttons and
labels. Tokens live in the `@theme` block of `src/app/globals.css`.

Images under `public/images/` come from the original TailGrids demo — swap them
for your own before shipping anything public.
