# NyverZ Portfolio

Modern, fast, SEO-friendly, and fully responsive portfolio for **Muh. Noval Thurfah** — Fullstack Developer, Software Engineer & QA Engineer. Built with Next.js 16, React 19, TypeScript, Tailwind CSS, and Framer Motion, with a dark-mode-first, glassmorphic design inspired by Vercel, Linear, Stripe, and Framer.

## Tech Stack

- **Framework:** Next.js 16 (App Router), React 19, TypeScript (strict)
- **Styling:** Tailwind CSS v4, shadcn/ui (Radix primitives), tailwindcss-animate
- **Animation:** Framer Motion, Lenis smooth scroll, custom canvas particles
- **Icons:** lucide-react + react-icons (brand/tech logos)
- **Theming:** next-themes (dark mode first, light mode supported)
- **Forms:** react-hook-form + zod
- **Fonts:** Geist / Geist Mono (next/font)

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/            Routes, layout, metadata, SEO files, server actions
components/
  ui/           Design-system primitives (shadcn/ui + custom: spotlight, blobs, particles, etc.)
  layout/       Navbar, footer, theme & smooth-scroll providers
  sections/     Page sections (hero, about, skills, projects, experience, ...)
  shared/       Composed content components (project card/modal, timeline, contact form, ...)
hooks/          Reusable client hooks (scroll progress, active section, media query, ...)
lib/            Utilities, motion variants, SEO metadata builder, zod schemas
types/          Shared TypeScript types
constants/      Site config & navigation
data/           Content layer (profile, skills, projects, experience, certificates, achievements)
public/         Static assets (generated placeholder images, resume, etc.)
scripts/        Dev utilities (placeholder image generator)
```

## Content

All copy and content lives in `data/` and `constants/` — no hardcoded strings in components. To personalize the site:

1. Edit `data/profile.ts`, `data/socials.ts`, `data/skills.ts`, `data/projects.ts`, `data/experience.ts`, `data/certificates.ts`, and `data/achievements.ts`.
2. Replace placeholder images in `public/images/**` and `public/cv/**` with real assets (or re-run `node scripts/generate-placeholders.mjs` to regenerate gradient placeholders).
3. Update `constants/site.ts` with your real domain, keywords, and social handles.

## Contact Form

`app/actions/contact.ts` is a server action that validates submissions with zod. It currently logs submissions server-side — wire it up to an email provider (e.g. Resend, Postmark) by adding your API key as an environment variable and sending the email inside that action.

## SEO

- Fully populated metadata (Open Graph, Twitter Card, canonical URL) via `lib/metadata.ts`
- Dynamic OG image, favicon, and Apple touch icon (`app/opengraph-image.tsx`, `app/icon.tsx`, `app/apple-icon.tsx`)
- `app/sitemap.ts`, `app/robots.ts`, `app/manifest.ts`
- JSON-LD structured data (`components/shared/structured-data.tsx`)

## Scripts

```bash
pnpm dev      # start dev server (Turbopack)
pnpm build    # production build
pnpm start    # run production build
pnpm lint     # eslint
```

## Deployment

Optimized for zero-config deployment on [Vercel](https://vercel.com).
