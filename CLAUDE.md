# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # start dev server at http://localhost:5173
npm run build      # production build → dist/index.html (single inlined file)
npm run preview    # serve the dist build locally
```

No lint script or test suite. TypeScript type-checking happens implicitly during `vite build`. Always run `npm run build` before committing to catch type errors.

## Architecture

### Single-file output
`vite-plugin-singlefile` inlines all JS and CSS into a single `dist/index.html`. This is intentional for Netlify deployment (`netlify.toml`: publish = `dist`). Do not introduce dynamic imports or code-splitting — they break the single-file output.

### Routing
No React Router. Navigation is hash-based:
- `/` or `/#` → main homepage
- `/#/academy` or `#academy` → Academy page (full-page replacement, **no** Navbar/Footer wrapper)

`App.tsx` reads `window.location.hash` on mount and a `hashchange` listener to switch between `<Academy>` and the homepage layout.

**Active homepage section render order** (top → bottom):
`Navbar` → `Hero` → `TwoGrowthEngines` → `TrustedTeams` → `ProblemSection` → `SystemArchitecture` → `YouTubeSection` → `Footer` → `FloatingChatWidget`

`Features`, `HowItWorks`, `Pricing`, `Integrations`, `Testimonials`, `FAQ`, `LogoStrip` exist as components but are **not mounted** in `App.tsx` — legacy/unused.

### Modal system
Three modals are always mounted at the App root:
- `BookingModal` — lead capture form (props-controlled via `isModalOpen` state in `App.tsx`)
- `PricingModal` — Attention Infrastructure pricing (self-managed: listens for its own window event internally)
- `SalesPricingModal` — AI Sales System pricing (self-managed: listens for its own window event internally)

Any component opens modals via custom window events:
```ts
window.dispatchEvent(new CustomEvent('open-booking-modal'));
window.dispatchEvent(new CustomEvent('open-pricing-modal'));
window.dispatchEvent(new CustomEvent('open-sales-modal'));
```

`App.tsx` also intercepts clicks on `<a>` and `<button>` whose text matches the `bookingTriggers` array and opens the booking modal. Add new CTA phrases to that array when adding new booking CTAs.

### Theme (light/dark mode)
- Dark is default. Light mode applies the `html.light` class on `<html>`.
- Preference saved to `localStorage` key `"nf-theme"`.
- `isDark` state and `toggleTheme` live in `App.tsx`, passed as props to `Navbar`.
- The `html.light` block in `src/index.css` uses attribute selectors (`[class*="text-white"]`, `[class*="bg-[#0"]`, etc.) to override Tailwind utilities globally without touching component markup. Extend this block when adding new dark-specific styles that won't automatically invert.

### Styling
- Tailwind CSS v4 via `@tailwindcss/vite` — no `tailwind.config.js`. All config lives in `src/index.css` via `@theme`.
- Brand color tokens in `@theme` (target state — migration in progress):
  - `--color-brand-navy: #0D1F35` — dark backgrounds, primary CTAs
  - `--color-brand-blue: #1B6EC2` — interactive elements, buttons
  - `--color-brand-accent: #0EA5D6` — cyan highlights, icons, gradients
  - `--color-brand-gold: #D4AF37` — badges, premium accents
  - `--color-brand-light: #E8F4FD` — light tinted backgrounds
- Font tokens: `--font-sans: "Inter"` (body/UI, weights 300–700), `--font-display: "Playfair Display"` (headings h1–h5, weights 400/600/700 + italics). Both loaded via Google Fonts CDN in `index.html`.
- Typography base rules in `@layer base`: body uses `font-sans antialiased` with `letter-spacing: -0.01em`; headings use `font-display font-bold` with `letter-spacing: -0.02em`.
- Utility classes in `index.css`: `.glass-card` (dark glass surface), `.glass-card-light` (light glass surface), `animate-marquee` (RTL scroll), `animate-marquee-ltr` (LTR scroll), `animate-float`, `animate-pulse-soft`.
- `src/utils/cn.ts` exports `cn()` (clsx + tailwind-merge) — use for conditional class composition.
- Path alias `@/` → `src/`.
- Marquee strips duplicate their data arrays (`[...items, ...items]`) for seamless looping.

### External integrations
| Service | File | Notes |
|---------|------|-------|
| Airtable | `BookingModal.tsx` | Lead form submissions. Env vars: `VITE_AIRTABLE_TOKEN`, `VITE_AIRTABLE_LEADS_BASE`, `VITE_AIRTABLE_LEADS_TABLE` |
| Airtable | _(paid records)_ | `VITE_AIRTABLE_PAID_BASE`, `VITE_AIRTABLE_PAID_TABLE` |
| Railway webhook | `FloatingChatWidget.tsx` | Nova AI chat. URL hardcoded as `WEBHOOK_URL` constant (not an env var) |
| YouTube embed | `YouTubeSection.tsx` | Autoplays video `tpqnjngREQU` (muted) when section scrolls into view via IntersectionObserver |
| WhatsApp | `Footer.tsx`, `Academy.tsx` | Direct link to `+254757485677` |

## Environment variables
Required in `.env`:
```
VITE_AIRTABLE_TOKEN
VITE_AIRTABLE_LEADS_BASE
VITE_AIRTABLE_LEADS_TABLE
VITE_AIRTABLE_PAID_BASE
VITE_AIRTABLE_PAID_TABLE
```
All vars must be prefixed `VITE_` to be accessible in the browser bundle.
