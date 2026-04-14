# Shivang Sharma — Portfolio Website

Personal portfolio built with Next.js 14, Tailwind CSS, Framer Motion, and MDX.

---

## Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (strict)
- **Styling**: Tailwind CSS with custom design tokens
- **Animation**: Framer Motion
- **Content**: MDX for case studies
- **Icons**: Lucide React
- **Deploy**: Vercel

---

## Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000

---

## How to add deck links

All project data lives in one file: `/lib/projects.ts`

Find the project by `slug` and set `deckUrl` to your embed URL:

```typescript
{
  slug: "ey-techathon",
  // ...
  deckUrl: "https://docs.google.com/presentation/d/YOUR_ID/embed",
}
```

**Getting embed URLs:**
- **Google Slides**: Share → Published to web → Embed tab → copy the `src` from the `<iframe>`
- **Figma**: Share → Copy link (prototype viewer URL)
- **Notion**: Make public → copy the page URL

Once set, the "View deck →" button appears on the card automatically. Empty string = "Deck coming soon" placeholder.

---

## Deploy to Vercel

**Option A — CLI:**
```bash
npm i -g vercel
vercel          # first deploy
vercel --prod   # production deploys
```

**Option B — GitHub:**
1. Push to GitHub
2. vercel.com → New Project → Import repo
3. Auto-detected as Next.js — click Deploy
4. Every push to `main` redeploys automatically

---

## File structure

```
app/
  layout.tsx          Root layout (Nav, Footer, CursorGlow, fonts)
  page.tsx            Homepage
  journey/            Placeholder (draggable timeline in Session 2)
  projects/
    page.tsx          All 14 projects, filterable
    ey-techathon/     Flagship case study
    why-ai/           Flagship case study
    salesgen/         Flagship case study
  about/              Placeholder
  contact/            Placeholder

components/
  Nav.tsx             Sticky nav with mobile slide-over
  Footer.tsx          Social links footer
  Container.tsx       max-w-6xl wrapper
  Section.tsx         py-24 section with optional kicker
  Magnetic.tsx        Cursor-pull Framer Motion wrapper
  CursorGlow.tsx      Coral radial gradient follows cursor
  ProjectCard.tsx     Project card with conditional deck/live/case-study CTAs
  DeckEmbed.tsx       iframe embed + loading + empty state

lib/
  projects.ts         Single source of truth for all 14 projects

content/projects/     MDX case studies (Session 2)
```

---

## Session 2 roadmap

- [ ] Draggable timeline for /journey
- [ ] Full MDX case studies for EY Techathon, Why.AI, SalesGen
- [ ] Real photo in hero (replace SS monogram)
- [ ] LinkedIn / email / Calendly links
- [ ] Deck URLs for all projects
