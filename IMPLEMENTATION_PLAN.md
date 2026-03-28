# Homepage Implementation Plan
**Date:** 2026-03-28
**Status:** Ready for execution

---

## CHANGE 1 — Navbar: Restore Light Mode Toggle
**File:** `src/components/Navbar.tsx`

**Current state:** Toggle not visible on screen.
**Target:** Sun/Moon icon button on the far-right of the desktop nav bar, after the "Consult" CTA.

**Implementation:**
- Add `isDark` toggle state (useState) in Navbar or lift to App.tsx
- Render a button with `Sun` / `Moon` icon from lucide-react
- On click: toggle a `light` class on the HTML element
- Style: rounded icon button matching existing nav styles

---

## CHANGE 2 — Hero Section Restructure
**File:** `src/components/Hero.tsx`

### 2a. Two-Column Layout (Title LHS / Description RHS)
Replace centered single-column layout with a responsive two-column grid:

```
Left column:  [Badge] + Headline
Right column: Description paragraph
```

- Wrap in `grid md:grid-cols-2 gap-12 items-center`
- Canvas animation stays behind the full section as absolute overlay

### 2b. CTA Buttons Below the Grid
- Both CTAs ("Initiate Strategy Call" + "Explore the Architecture") move into a full-width flex row below the grid
- `flex gap-4 mt-10 justify-start`
- Keep existing button styles

### 2c. Partners Carousel ("Integrated with Global Markets")
- Add a compact marquee strip below the CTAs, still inside Hero
- Label: "Integrated with Global Markets" in small caps above strip
- Marquee scrolls LEFT TO RIGHT (use animation-direction: reverse)
- Items: Anthropic, Wavespeed, Eleven Labs, OpenAI, Make.com, Airtable, WhatsApp Business, n8n, Meta
- Gradient fade masks on both edges
- Strip height: ~60px

### 2d. 100% Zoom Full Visibility
- Hero min-height: 100vh, overflow: hidden
- Reduce vertical padding to py-16 if needed
- All 5 elements (badge, title, description, CTAs, partners strip) visible at 1920x1080 without scrolling

---

## CHANGE 3 — Two Growth Engines: "What You Really Get" Tiles
**File:** `src/components/TwoGrowthEngines.tsx`

After the two main cards, add a sub-section titled **"What You Really Get"** in a `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4` grid.

### Tile Descriptions

**1. Reputation Management Workflows**
Automated systems that monitor, respond to, and amplify your brand's online presence across platforms. AI-driven review responses, sentiment tracking, and proactive reputation signals operating 24/7 without human oversight.

**2. Database Reactivation Workflows**
Re-engage dormant leads and past customers through precision-timed, AI-personalized outreach sequences. Turn cold contacts into warm opportunities using behavioural triggers and multi-channel nudges.

**3. WhatsApp & Web Agents Setup**
Deploy conversational AI agents across WhatsApp and your website that qualify, capture, and route leads instantly. No missed messages, no delayed responses — intelligent agents that sell while you sleep.

**4. A.I Voice Agents**
Human-sounding AI voice agents that handle inbound inquiries, outbound follow-ups, and appointment setting over the phone. Consistent, scalable, and always on-brand.

**5. Local A.I Agent Installation**
Agentic workflow systems that run locally within your business ecosystem without being exposed to the online environment. Full AI capability, complete data sovereignty, zero cloud dependency.

### Closing Statement (end of section)
Center-aligned, italic, muted text:
"All systems integrate seamlessly. Attention Infrastructure fuels the Traffic stage, feeding the AI Sales System with qualified leads."

---

## CHANGE 4 — Trusted Teams: Tile Marquee (RHS to LHS)
**File:** `src/components/TrustedTeams.tsx`

**Current:** Single large auto-rotating carousel with arrows and dots.
**Target:** Multiple client logo tiles in a continuous horizontal marquee streaming right-to-left.

### Design
- Remove carousel + navigation controls
- Two rows of logo tiles, each scrolling at different speeds (Row 1: 30s, Row 2: 40s) for visual depth
- Each tile: rounded card ~160px wide, logo image + company name below
- Hover: pause animation + subtle glow border

### Client Logos
1. Shoshana Farms Africa Limited — public/Screenshot 2026-03-08 200546.png
2. House of Allure (Events and Decor) — public/Screenshot 2026-03-08 200632.png
3. Artsynine Concept KE — public/Screenshot 2026-03-08 200638.png
4. ReHome — text placeholder
5. Safisha Hub — text placeholder
6. Nestic Agriventures — text placeholder
7. SkillPath.ai — text placeholder

Duplicate array x2 for seamless infinite scroll.

### Keep 2 Static Featured Quotes
Below the marquee, show 2 static testimonial cards (no carousel) from the highest-impact clients.

---

## CHANGE 5 — The Problem Section: Improvements
**File:** `src/components/ProblemSection.tsx`

### New Heading
"You're Not Failing. The System Is."

### New Sub-copy (before the comparison table)
"Every day you rely on manual outreach, inconsistent content, and human-dependent follow-ups, you are leaving compounding revenue on the table. The market has already moved."

### Comparison Improvements
- Add a center "The Gap" column showing the measurable cost of each problem
- Stronger icon contrast
- Subtle red/green color bands per row

### Outcome Statement Upgrades
- Problem side: "Human-rate growth ceiling. Burnout loop. Budget bleed."
- Solution side: "Machine-rate growth. Zero dependency. Compounding returns."

### CTA Upgrades
- Primary button: "Break the Old Cycle"
- Secondary ghost: "See the system" (scrolls to system-architecture anchor)

---

## CHANGE 6 — Structural Intelligence: Compact Pipeline
**File:** `src/components/SystemArchitecture.tsx`

**Current:** 2x2 grid of large verbose cards.
**Target:** Horizontal 4-step pipeline visualization.

### Layout
```
[01 Attention] --> [02 Capture] --> [03 Nurture] --> [04 Convert]
  Genesis Layer    Intelligence     Trust Layer      Revenue Layer
  (2-line desc)      Layer          (2-line desc)    (2-line desc)
                   (2-line desc)
```

- Cards: ~220px wide, ~180px tall max
- Connected by animated arrow lines between steps
- Descriptions: CSS line-clamp-2 (2 lines max per card)
- Responsive: 2x2 on tablet, 1-col on mobile
- Matches the "5-Stage Sales Engine" pipeline aesthetic from TwoGrowthEngines

---

## CHANGE 7 — CTA Section Redesign ("Ready to Decentralize Your Growth?")
**File:** `src/components/SystemArchitecture.tsx` (bottom of file)

**Current:** Simple text, one button, SVG cube decoration.
**Target:** High-contrast "Command Center" final conversion section.

### Layout
```
[animated radial glow background]

    READY TO DECENTRALIZE YOUR GROWTH?
  Stop trading time for revenue. Install the machine.

  [ Start Implementation --> ]    [ Book Strategy Call ]

  check 30-Day Implementation   check Done-For-You   check ROI-Backed
```

### Changes
- Headline split: "Ready to Decentralize" line 1, "Your Growth?" line 2 in brand gradient
- Sub-copy: "Stop trading time for revenue. Install the machine that runs without you."
- Two buttons: Primary "Start Implementation" + Ghost "Book a Strategy Call"
- Trust badges row: 3 items with check icons
- Background: Replace SVG cube with animate-pulse-soft radial glow in brand-primary
- Top border: gradient from brand-primary via brand-secondary to transparent

---

## EXECUTION ORDER

| # | Change | File | Complexity |
|---|--------|------|------------|
| 1 | Navbar light mode toggle | Navbar.tsx | Low |
| 2 | Hero restructure | Hero.tsx | High |
| 3 | Growth Engines tiles | TwoGrowthEngines.tsx | Medium |
| 4 | Trusted Teams marquee | TrustedTeams.tsx | Medium |
| 5 | Problem Section improvements | ProblemSection.tsx | Low-Medium |
| 6 | Structural Intelligence pipeline | SystemArchitecture.tsx | Medium |
| 7 | CTA Section redesign | SystemArchitecture.tsx | Medium |

---

## NOTES
- Screenshots 200546/200632/200638 are client logos for Change 4 (Trusted Teams).
- Light mode: add CSS variable overrides under html.light class in index.css.
- All marquee animations should respect prefers-reduced-motion.
- Hero "Ref screenshot" was not provided — implementation follows written spec above.
