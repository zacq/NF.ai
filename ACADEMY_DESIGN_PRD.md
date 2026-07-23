# PRD: NeuraFlow Academy Page

**Route:** `/#/academy` (also `#academy`) · **Component:** [`src/components/Academy.tsx`](src/components/Academy.tsx) · **Status:** Live

## 1. Purpose

A standalone, full-page landing experience (no site Navbar/Footer) that positions NeuraFlow Academy as a structured, Anthropic/Claude-powered training program and drives cohort enrolment via the shared `BookingModal`. It is reached only via hash routing — `App.tsx` swaps it in place of the homepage when `window.location.hash` matches `#/academy` or `#academy`.

## 2. Goals

- Communicate the curriculum's structure (4 layers) clearly enough that a visitor can self-qualify in under 30 seconds.
- Lean on the Anthropic/Claude affiliation as a credibility signal throughout, not just in one section.
- Convert interested visitors into a booking (via `onBookingClick`) or an Anthropic resource click.
- Stay visually distinct from the main site (separate dark palette, own nav/footer) while still feeling part of the NeuraFlow brand.

## 3. Non-goals

- No payment/checkout flow — enrolment is a booking call, not self-serve purchase.
- No real backend for the on-page chat widget content (static suggested questions only; see §6.1).
- No actual course/lesson content or LMS — this is a marketing/enrolment page, not the learning platform itself.

## 4. Audience

Founders/operators evaluating whether to join a cohort-based, hands-on AI systems training program. Assumed to already have some context on automation/AI tooling (the copy assumes familiarity with terms like APIs, webhooks, LLMs).

## 5. Information Architecture

Single scrolling page, in this order:

| # | Section | Anchor ID | Intent |
|---|---|---|---|
| 1 | Academy Nav | — | Escape hatch back to `/` |
| 2 | Hero | — | Positioning statement + layer index + Anthropic callout |
| 3 | Social Proof Strip | — | Quick-hit stats |
| 4 | Training Environment | — | Explain *how* training happens (Claude Code as the interface) |
| 5 | Layer 1: Foundations | `#foundations` | Curriculum: infra primitives |
| 6 | Layer 2: Intelligence | `#intelligence` | Curriculum: Claude/LLM skills |
| 7 | Layer 3: Application | `#application` | Curriculum: user-facing systems |
| 8 | Final Layer: Capstone | `#capstone` | Culminating project + primary CTA |
| 9 | Community Alignment | — | Belonging / ecosystem framing |
| 10 | Enrolment | — | Secondary/final CTA |
| 11 | Footer | — | Anchor nav back into the 4 layers + links to homepage sections |
| — | Academy Chat Widget | — | Floating, page-scoped (separate from site-wide `FloatingChatWidget`) |

Two CTA buttons both call the same `onBookingClick` prop (opens `BookingModal` from `App.tsx`): "Start Capstone Course" (§8) and "Reserve Your Spot" (§10).

## 6. Section-by-section design spec

### 6.1 Academy Chat Widget (`AcademyChatWidget`, local to this file)
- Floating action button, bottom-right, violet→fuchsia gradient circle, `MessageCircle` icon.
- Opens a 320px panel above the button with a header ("NeuraFlow Academy Assistant", "Online"), a scrollable message area seeded with a static welcome message and three static "suggested question" buttons, and an input bar with a send button.
- **Current state: presentational only** — the input and send button are not wired to any backend/webhook (unlike the site-wide `FloatingChatWidget`, which posts to the n8n Railway webhook). Typing and sending does nothing.

### 6.2 Nav
- Sticky-feel top bar (not actually `sticky`, just `relative z-40`), border-bottom, blurred dark background.
- Left: NeuraFlow "N" mark + "NeuraFlow / Academy" wordmark, links to `/`.
- Right: "← Back to Home" link.

### 6.3 Hero
- Eyebrow pill: "NeuraFlow Academy".
- Two-line gradient headline: "Build Intelligent Systems." / "Not Just Automations."
- Two lines of supporting copy introducing the 4-layer structure.
- Layer index: 4 inline pills with colored dots (blue/fuchsia/orange/violet) previewing each layer name — sets the color-coding used later.
- Anthropic callout card: bordered box, "Built on Anthropic's AI Ecosystem" label, two lines of copy, outbound link to `anthropic.com/learn`.

### 6.4 Social Proof Strip
- Thin bordered band, 4 stat pairs (`200+ Systems Built`, `4-Layer Curriculum`, `Live Build Sessions`, `Done-With-You Support`), centered, wraps on mobile.

### 6.5 Training Environment
- Two-column card (stacks on mobile) with a vertical divider on desktop.
- Left: "Training Environment" eyebrow, heading "Train Inside Real AI Systems", 3 paragraphs, outbound Anthropic link.
- Right: "What this means for you" label + 5-item bullet list using unicode glyphs (◈ ⚡ ▸ ◉ ∞) instead of icon components as visual markers.

### 6.6 Curriculum layers (`LayerSection` + `CourseCard`, reusable within this file)
Shared layout via `LayerSection`: centered eyebrow-less gradient `h2` (color varies per layer), subtitle, optional intro copy block, then children.

- **Layer 1 — Foundations** (blue gradient): 4-card grid — Triggers & Events, Webhooks, APIs & Integrations, Databases & Vector Databases. Framed as "technical primitives."
- **Layer 2 — Intelligence** (fuchsia/purple gradient): 4-card grid — LLMs, Prompt Engineering, AI Vibe Coding, Claude Code Workflows (has a "New" badge). Framed as Claude-specific reasoning/tooling skills.
- **Layer 3 — Application** (orange gradient): 3-card grid — AI Chatbots & Voice Agents, CRM Systems & Automations, AI Content Generation. Framed as revenue-facing deployment.

`CourseCard` is a static, non-interactive-feeling card: icon in a tinted rounded square, title, description, and a "Learn More →" affordance — **note: `CourseCard`'s "Learn More" button has no `onClick`, it's currently decorative.**

### 6.7 Capstone (`#capstone`, violet gradient)
- Intro copy: "This is where everything converges."
- Primary card: centered target icon, "Business Process Automation" heading, 2 paragraphs, a 5-item two-column checklist of deliverables (lead-to-sale automation, support automation, ops automation, AI decision systems, revenue/cost pipelines), and the **"Start Capstone Course"** CTA (primary conversion point).
- Secondary card: "Real-World Deployment with Claude" — icon + heading + paragraph + 3-point row (portfolio proof, working systems, ecosystem contribution). No CTA — reinforcement only.

### 6.8 Community Alignment
- Cyan-accented eyebrow (only cyan use on the page, breaks from the violet/fuchsia/blue/orange system — intentional differentiation for the "community" theme).
- Heading + 2 paragraphs + 3 pill-style value props (AI education/adoption, real-world use cases, community-driven systems).

### 6.9 Enrolment
- Centered card, violet-bordered, gradient background.
- Heading "Join the Next Cohort.", 2 lines of copy (cohort model, Claude/Anthropic tooling reassurance).
- **"Reserve Your Spot"** CTA (secondary/final conversion point) + urgency microcopy ("Limited cohort size. Applications reviewed within 24 hours.").

### 6.10 Footer
- 3-column grid: brand mark + tagline / layer anchor links (`#foundations`, `#intelligence`, `#application`, `#capstone`) / links back to homepage sections (`/`, `/#two-engines`, `/#system-architecture`).
- Copyright line.

## 7. Visual design system

- **Background:** `#050508` base, with three fixed, blurred radial gradient blobs (blue/violet/fuchsia at 5% opacity) for ambient depth — independent of the main site's `brand-navy` theme.
- **Card surface:** `#0d0d14` with `border-white/5`, hover brightens to `border-white/10`.
- **Color coding by layer:** blue (Foundations) → fuchsia/purple (Intelligence) → orange (Application) → violet (Capstone). Reinforced via the hero's layer-index dots and each `LayerSection`'s gradient heading.
- **Typography:** same Inter/Playfair Display stack as the main site (inherited from global `index.css`), gradient-clipped headlines for hero and section titles.
- **Iconography:** `lucide-react` icons for structured UI elements (cards, nav, footer); unicode glyphs used ad hoc in the Training Environment bullet list.
- **CTAs:** consistent violet→fuchsia gradient pill/rect buttons with `ArrowRight` icon, hover-lightens + scale on the final CTA.

This page's palette (violet/fuchsia/blue/orange/cyan on near-black) is deliberately its own system, distinct from the brand-navy/blue/gold tokens defined in `src/index.css` — it does not participate in the site's light/dark theme toggle (`html.light`), so it always renders dark regardless of the user's site-wide theme preference.

## 8. Functional requirements

| Requirement | Implementation |
|---|---|
| Route in/out without page reload | `App.tsx` hash check + `hashchange` listener |
| Booking CTA opens shared modal | `onBookingClick` prop → `setIsModalOpen(true)` in `App.tsx` → `<BookingModal>` |
| In-page layer navigation | Footer anchor links (`#foundations` etc.) + native browser anchor scroll, smoothed via `document.documentElement.style.scrollBehavior = 'smooth'` set/cleared in `useEffect` |
| Outbound Anthropic links | `target="_blank" rel="noopener noreferrer"` on both Anthropic CTAs |
| Page-scoped chat affordance | `AcademyChatWidget`, local state only, no network call |

## 9. Open gaps / risks (as of current implementation)

1. **Academy chat widget is non-functional** — visually complete but doesn't send/receive messages, unlike the homepage's `FloatingChatWidget` (n8n-backed). Risk: visitors may expect a working assistant and be disappointed.
2. **`CourseCard` "Learn More" is decorative** — no destination, could read as a broken affordance.
3. **Anchor links use bare `#foundations` style hrefs** rather than `/#academy#foundations` — fine while already on the Academy page, but would break the anchor scroll if someone links directly with `#foundations` from elsewhere (the hash routing logic in `App.tsx` only checks for exact `#/academy` / `#academy`, so `#foundations` alone would fall through to the homepage view).
4. **No theme toggle support** — page is always dark; if the site's light-mode push continues (per project `CLAUDE.md`), Academy would need its own light variant or an explicit decision to stay dark-only.

## 10. Success signals (proposed — not currently instrumented)

- Click-through rate on "Start Capstone Course" vs. "Reserve Your Spot" (which CTA position converts better).
- Scroll depth to `#capstone` (are visitors reading the full curriculum before deciding).
- Outbound clicks to `anthropic.com/learn` (credibility-link engagement).

No analytics events currently exist in the codebase for any of the above — would require adding tracking calls at each CTA `onClick`.
