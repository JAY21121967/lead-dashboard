# Lead Generation Dashboard

A React frontend that visualizes verified business leads produced by an **n8n automation pipeline** — the kind of pipeline I build for clients through [VarahiAI](https://varahiai.com).
 
## What it does

- Displays leads pulled from a Google Maps → Outscraper → NeverBounce verification workflow
- Live search across business name / contact
- Filter by verification status (Verified / Pending) and industry
- Summary stat cards: total leads, verified count, verification rate, industries covered

This project uses sample data (`src/data/leads.json`) standing in for what the real n8n workflow outputs, since the live pipeline writes to a private Google Sheet. The goal here is to demonstrate the frontend/React layer — building the UI a team would actually use to review automation output.

## Tech stack

- React 18 (functional components, hooks: `useState`, `useMemo`)
- Vite for the build tooling
- Plain CSS (no framework) — component-scoped styling in `src/index.css`

## Running locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```
   🔗 **Live demo:** https://lead-dashboard-six-beta.vercel.app
## Background

I'm a freelance web developer (WordPress/PHP, 10 years) who has moved into building AI/automation workflows with n8n — this dashboard connects both sides: real backend automation, paired with a clean frontend to make the output usable for a non-technical team.
