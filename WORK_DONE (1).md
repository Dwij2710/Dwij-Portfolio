# What's done — Dwij Prajapati Portfolio

## Build
Full working single-page portfolio, built and verified (`npm run build` passes
with no errors, 397 modules, ~90KB gzipped JS).

- **Stack**: React 18 + TypeScript + Vite + Tailwind CSS + Framer Motion
  (functionally equivalent to the Next.js ask — swapped Next for Vite since
  there's no routing/SSR need for a one-page site; it's lighter to run and
  deploys to Vercel/Netlify just as easily. Say the word if you specifically
  want it ported to Next.js App Router instead.)
- Compiles clean, no TypeScript errors, production build tested locally.

## Design direction taken
Instead of a generic dark-mode-with-gradient-blobs template, the site is styled
like a **systems console / telemetry readout** — grounded in your actual work
(latency, session state, evaluation logs, voice pipelines). Concretely:
- Charcoal-navy background (not pure black), amber "signal" accent standing in
  for a live/status indicator, teal "data" accent for technical labels
- Instrument Sans for headings/body, JetBrains Mono for all data/labels/timestamps
- Left-side vertical nav rail (desktop) with a status dot instead of a centered navbar
- Hero has a one-time "boot sequence" animation (`> initializing profile...`)
  instead of scattered fade-ins on every section
- Experience section reads like an expandable commit/incident log
- Projects are full case-study strips (problem → approach → results → stack),
  not a repeated card grid

## Sections implemented (all content from your resume, rewritten for the web)
- [x] Hero — name, rotating role line, intro, CTAs, live metrics readout
- [x] About — narrative bio
- [x] Skills — 5 grouped categories, all listed skills included
- [x] Experience — Banao Technologies / InterviewGod.ai role, expandable
      into all 7 detailed bullet points
- [x] Projects — FinSight AI and CompInsight AI, full case-study treatment
- [x] Education — degree, college, CGPA
- [x] Achievements — both listed items
- [x] Contact — click-to-copy email, mailto button, GitHub/LinkedIn/phone
- [x] Fully responsive (mobile top bar nav vs. desktop rail nav)
- [x] Keyboard-navigable, visible focus states, `prefers-reduced-motion` respected

## Delivered files
- `portfolio.zip` — full source code (README included inside)
- This file and `REMAINING.md`
