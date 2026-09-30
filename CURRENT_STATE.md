# AYAZ.EXE — Current Project State

## Project

Interactive developer portfolio for Ayaz Ahmed.

Primary identity:

* MERN Developer
* DSA / Problem Solving
* Gaming-inspired personality
* Anime-inspired motion
* Recruiter-first experience

Design balance:

* 70% professional developer portfolio
* 20% gaming/anime personality
* 10% experimental interaction

The portfolio should feel premium, technical, minimal, and interactive.

---

# Completed

## 1. Project Setup

Completed:

* Vite + React project
* Git repository initialized
* Project documentation created
* Architecture established
* Design system established
* AI development rules established

## 2. Portfolio Shell

Completed:

* Layout
* Navbar
* Footer
* Section navigation
* Responsive shell
* Accessibility/focus states
* Reduced-motion support

## 3. Hero

Completed:

* AYAZ.EXE system identity
* AYAZ AHMED
* MERN DEVELOPER
* 170+ LeetCode
* View Missions CTA
* Resume CTA placeholder
* Anime.js boot animation
* Dark graphite visual system

Anime.js version:

* 4.5.0

IMPORTANT:
Anime.js v4 uses named imports such as:

```js
import { animate, stagger } from "animejs";
```

Do NOT use:

```js
import anime from "animejs";
```

## 4. Missions

Completed:

* Missions section
* Data-driven project rendering
* Responsive project cards
* Project screenshots
* Project metadata
* Live Demo buttons when available
* GitHub buttons when available
* Hover interactions
* Responsive desktop/mobile layout

Current projects:

### Wanderlust

Status:
COMPLETED / DEPLOYED

Live:
https://mern-travel-listings.onrender.com/listings

GitHub:
https://github.com/Ayaz-Ahmed181/mern-travel-listings

Image:
`/assets/projects/wanderlust.webp`

### Face/Web Blockchain

Status:
COMPLETED HACKATHON MVP

Type:
Node.js / TypeScript CLI

Live URL:
None

GitHub:
Not currently verified

Image:
`/assets/projects/face-blockchain.webp`

### Simon Says

Status:
COMPLETED / DEPLOYED

Live:
https://simonsayagame.netlify.app/

GitHub:
Not currently verified

Image:
`/assets/projects/simon-says.webp`

---

# Projects NOT READY FOR PORTFOLIO

Do NOT add these to Missions yet:

* SAKSHYA AI
* Zerodha-like project

They are still under development.

Only add them after explicitly instructed.

---

# Current Visual System

The original UI was too black.

It has now been changed to a layered graphite system.

Main colors:

```text
Background:
#0B0D10

Secondary background:
#0F1216

Surface:
rgba(255,255,255,0.045)

Surface hover:
rgba(255,255,255,0.075)

Border:
rgba(255,255,255,0.12)

Strong border:
rgba(255,255,255,0.18)

Primary text:
#F2F3F5

Secondary text:
#A2A7AF

Muted text:
#6F7680

Accent:
#FF4655
```

The goal is:

"premium charcoal/graphite dark interface"

NOT:

"pure black cyberpunk website"

---

# Current Problem

The current portfolio is still visually too empty.

The major issue is NOT the color system anymore.

The problem is:

* large empty dark areas
* insufficient visual depth
* weak scroll transitions
* no strong visual anchor on the right side of Hero
* scrolling currently feels mostly static

The next task is therefore a VISUAL / ANIMATION UPGRADE.

---

# NEXT TASK

Improve visual depth without redesigning the portfolio.

## Hero visual

Use the empty right side of Hero for an original:

"WEB NETWORK / DIGITAL SYSTEM"

visual.

It should contain:

* thin geometric lines
* nodes
* connecting paths
* subtle circles
* tiny system markers
* restrained red signal points

It should feel like:

developer infrastructure + web movement + tactical interface.

It must NOT use:

* Spider-Man
* Marvel
* Valorant
* Riot assets
* copyrighted character renders
* generic cyberpunk stock images

Prefer original SVG/CSS generated visuals.

---

# Background

Add subtle visual layers:

* faint technical grid
* very subtle radial gradients
* subtle grain/noise if lightweight
* dark graphite base

Do NOT make the background bright.

Do NOT add a random background image.

---

# Scroll Animations

The portfolio needs noticeable but professional scroll animation.

Use Anime.js 4.5.0.

Desired effects:

Section heading:

* opacity
* translateY

Project cards:

* staggered reveal
* opacity
* translateY

Technical lines:

* subtle SVG path reveal

Section transitions:

* thin animated technical lines
* subtle background changes
* system labels

Animations must remain fast and unobtrusive.

Respect:

`prefers-reduced-motion`

Do not add:

* GSAP
* Three.js
* another animation library

---

# Hero → Missions Transition

Currently the sections feel like separate dark blocks.

Create a subtle visual connection between them.

Possible elements:

```text
SYSTEM ONLINE
       ↓
thin animated connection
       ↓
MISSIONS // 03
```

Keep this subtle.

---

# Important Design Rules

Do NOT:

* redesign the entire portfolio
* change project data
* add fake statistics
* add fake project information
* add SAKSHYA AI
* add Zerodha
* add copyrighted assets
* use generic cyberpunk stock images
* use excessive neon
* use rainbow colors
* add huge 3D elements
* make animations block content
* add unnecessary libraries

Recruiter information must always remain immediately accessible.

---

# Responsive Requirements

Must work at:

* 360px
* 390px
* 768px
* 1024px
* 1280px
* 1440px
* 1920px

Hero network visual:

Desktop:

* right side of Hero

Mobile:

* below primary Hero content
* must not push important content excessively far down

---

# Verification

After every major change:

```bash
npm run build
```

Check:

* no build errors
* no console errors
* no broken images
* no broken links
* no horizontal overflow
* responsive behavior
* reduced-motion behavior

Do not commit automatically.

---

# Development Rule

Before changing anything:

1. Read PROJECT_SPEC.md
2. Read ARCHITECTURE.md
3. Read DESIGN_SYSTEM.md
4. Read AI_RULES.md
5. Read TASKS.md
6. Read CONTENT.md
7. Read this CURRENT_STATE.md
8. Inspect the existing implementation

Modify only what is necessary.

If requirements are ambiguous, stop and ask rather than inventing information.
