# NFK Training Center — Website

This repository holds the small, focused landing site for NFK Training Center (Kingarooo). The goal is to present class schedules, coaches and contact information with a clear, bold visual language that matches the gym's branding.

Design notes
- Visual style: bold typography (Bebas), strong red accent for CTAs and highlights, and dark, high-contrast backgrounds to match the gym feel.
- Layout: a single-page feel for the landing with dedicated pages for schedules. Components are small and composable so sections can be rearranged or reused.
- Accessibility: color contrast and sensible focus states were considered; keep an eye on font sizes for small screens and adjust Tailwind breakpoints if needed.

What’s in this repo
- `src/components` — reusable UI pieces (Navbar, Footer, Timetable, etc.).
- `src/pages` — page-level containers and views (Landing, Schedules).
- `src/constants` — static data like default schedules.
- `tailwind.config.js` — theme tokens, custom colors and animations.

Quick run (if you want to preview locally)
If you do want to run the project, a typical local workflow is installing dependencies and starting the dev server (this project uses Vite):

```bash
npm install
npm run dev
```

If you'd like the README to include deployment steps (Vercel/Netlify) or a short design spec (colors, type scale, spacing), tell me which you'd prefer and I'll add it.

