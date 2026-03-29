# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # start dev server at http://localhost:5173
npm run build      # production build → dist/index.html (single inlined file)
npm run preview    # serve the dist build locally
```

There is no lint script and no test suite. TypeScript type-checking happens implicitly during `vite build`. Always run `npm run build` before committing to catch type errors.

## Architecture

### Single-file output
`vite-plugin-singlefile` inlines all JS and CSS into a single `dist/index.html`. This is intentional for Netlify deployment (see `netlify.toml`: publish = `dist`). Do not introduce dynamic imports or code-splitting — they will break the single-file output.

### Routing
There is no React Router. Navigation is hash-based and manual:
- `/` or `/#` → main homepage (`App.tsx`)
- `/#/academy` → Academy page

`App.tsx` reads `window.location.hash` and a `hashchange` listener to switch between rendering `<Academy>` and the main homepage layout. All other "pages" (Features, HowItWorks, Pricing, etc.) exist as components but are **not currently mounted** in `App.tsx` — they are legacy/unused.

### Modal system
Three modals exist and are always mounted at the App root:
- `BookingModal` — main lead capture form, submits to Airtable
- `PricingModal` — Attention Infrastructure pricing details
- `SalesPricingModal` — AI Sales System pricing details

Modals are opened via **custom window events** (not props/context), so any component can trigger them without prop drilling:
```ts
window.dispatchEvent(new CustomEvent('open-booking-modal'));
window.dispatchEvent(new CustomEvent('open-pricing-modal'));
window.dispatchEvent(new CustomEvent('open-sales-modal'));
```

`App.tsx` also intercepts clicks on `<a>` and `<button>` elements whose text matches a hardcoded list of booking trigger phrases (e.g. "Initiate Strategy Call", "Start Implementation") and opens the booking modal. Add new trigger phrases to the `bookingTriggers` array in `App.tsx` when adding CTAs.

### Theme (light/dark mode)
- Dark is the default. Light mode applies the `html.light` class on `<html>`.
- Preference is saved to `localStorage` under key `"nf-theme"`.
- The `html.light` CSS block in `src/index.css` provides all overrides — it uses `[class*="text-white"]`, `[class*="bg-[#0"]`, etc. to override Tailwind utilities globally. Extend this block when adding new dark-specific styles that won't automatically invert.
- `isDark` state and `toggleTheme` live in `App.tsx` and are passed as props to `Navbar`.

### Styling
- Tailwind CSS v4 via `@tailwindcss/vite` (no `tailwind.config.js` — configured in `src/index.css` via `@theme`).
- Brand tokens defined in `@theme`: `--color-brand-bg`, `--color-brand-primary` (#8b5cf6 violet), `--color-brand-secondary` (#06b6d4 cyan), `--color-brand-accent` (#f0abfc magenta).
- Display font: Syne. Body font: Inter (loaded via CDN in `index.html`).
- Custom animations in `index.css`: `animate-marquee` (RTL scroll), `animate-marquee-ltr` (LTR scroll), `animate-float`, `animate-pulse-soft`.
- `src/utils/cn.ts` exports a `cn()` helper (clsx + tailwind-merge) — use it when conditionally composing class names.
- Path alias `@/` maps to `src/`.

### External integrations
| Service | Where | Purpose |
|---------|-------|---------|
| Airtable | `BookingModal.tsx` | Stores lead form submissions. Env vars: `VITE_AIRTABLE_TOKEN`, `VITE_AIRTABLE_LEADS_BASE`, `VITE_AIRTABLE_LEADS_TABLE` |
| Railway webhook | `FloatingChatWidget.tsx` | Powers the Nova AI chat assistant. URL hardcoded as `WEBHOOK_URL` constant |
| YouTube embed | `YouTubeSection.tsx` | Autoplay playlist from `@Neuralab-v6b` channel |
| WhatsApp | `Footer.tsx`, `Academy.tsx` | Direct contact link to `+254757485677` |

### Animations — marquee direction
- `animate-marquee` scrolls **right-to-left** (standard, used in TrustedTeams row 1)
- `animate-marquee-ltr` scrolls **left-to-right** (used in Hero partners strip and TrustedTeams row 2)
- Both duplicate their data arrays (`[...items, ...items]`) for seamless looping

## Environment variables
Required in `.env` (never commit this file):
```
VITE_AIRTABLE_TOKEN
VITE_AIRTABLE_LEADS_BASE
VITE_AIRTABLE_LEADS_TABLE
VITE_AIRTABLE_PAID_BASE      # used for paid customer records
VITE_AIRTABLE_PAID_TABLE
```
All vars must be prefixed `VITE_` to be accessible in the browser bundle.
