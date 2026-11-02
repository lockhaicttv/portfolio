# Lê Minh Chiến - Personal Portfolio

Personal portfolio website built with Next.js (App Router), TypeScript and Tailwind CSS. Deployable to Vercel.

## Tech Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- CSS variables for theming (light/dark)

## Getting Started

### Install dependencies
```bash
npm install
```

### Run development server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build
```bash
npm run build
```

### Lint
```bash
npm run lint
```

### Type check
```bash
npx tsc --noEmit
```

## Edit Content
All content is stored in typed data files under `src/data/`:
- `site.ts` - Name, role, tagline, social links (update TODOs), CV URL
- `about.ts` - Intro, skills, infrastructure, soft skills, education, awards
- `experience.ts` - Work/education history
- `projects.ts` - Project details

Update `public/cv.pdf` with your actual CV. Update `public/avatar.jpg` if you want to replace the initials avatar.

## Deploy
Deploy to [Vercel](https://vercel.com) - it will auto-detect Next.js settings.

## Notes
- Horizontal scroll-snap layout with keyboard, wheel (Shift+wheel), touch support
- Theme toggle with prefers-color-scheme support
- Scroll-spy updates URL hash
- SEO metadata, Open Graph, JSON-LD Person schema, sitemap, robots
- Accessible (skip link, focus rings, semantic landmarks)
- Respects prefers-reduced-motion
