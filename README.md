# ZhaoxiangSimonCai.github.io

Personal website of **Zhaoxiang (Simon) Cai** — cancer data scientist at CMRI / University of Sydney.

Live at <https://zhaoxiangsimoncai.github.io/>.

Built with [Astro](https://astro.build) + Tailwind CSS + TypeScript. Deployed to GitHub Pages via Actions.

## Local development

```bash
nvm use            # Node 22 (via .nvmrc)
npm install
npm run dev        # http://localhost:4321
```

Commands:

| Command | Purpose |
|---|---|
| `npm run dev` | Start dev server with hot reload |
| `npm run build` | Build production site into `dist/` |
| `npm run preview` | Preview the production build |
| `npm run check` | Type-check + content-schema validate |
| `npm run format` | Format with Prettier |

## Content — how to edit

### Add a publication

Create `src/content/publications/<slug>/index.mdx`. Required frontmatter:

```yaml
---
title: "Paper title"
authors: ["Zhaoxiang Cai", "Coauthor A", "Coauthor B"]
venue: "Nature Communications"
venueShort: "Nat Commun"
year: 2026
date: "2026-01-15"
doi: "10.1038/s41467-026-xxxxx-x"
publicationType: "journal"       # journal | conference | preprint | review
featured: true                    # show on homepage + highlight
tags: ["Federated Learning", "Proteomics"]
fwci: 3.58                        # optional, from Scopus
firstAuthor: true                 # or coFirstAuthor: true
abstract: "Optional abstract…"
pdf: "https://…/paper.pdf"        # or a filename in public/pdfs/
code: "https://github.com/…"
---
```

Anything in the body becomes a long-form summary on the detail page. The card on
the homepage / research list uses the abstract for the teaser.

### Add a project

Create `src/content/projects/<slug>/index.mdx`. Required frontmatter:

```yaml
---
title: "Project name"
summary: "One-sentence teaser."
date: "2026-01-15"
tags: ["Multi-omics", "Deep Learning"]
featured: true
image: "./featured.png"           # colocated image, optional
imageAlt: "Alt text"
github: "https://github.com/…"
paper: "https://doi.org/…"
---
```

### Update Experience

`src/content/experience/NN-slug.json` — ordered JSON files.

### Update citation / fellowship metrics

Edit [`src/data/metrics.ts`](src/data/metrics.ts). One file, sourced by the
homepage spotlight strip. Update h-index, citations, etc. once a month from
[Google Scholar](https://scholar.google.com/citations?user=J-pGEioAAAAJ&hl=en).

### Update bio / site details

- Bio prose: [`src/pages/about.astro`](src/pages/about.astro)
- Site name, socials, nav, affiliations: [`src/data/site.ts`](src/data/site.ts)
- Education / awards / skills: [`src/data/education.ts`](src/data/education.ts)

### Replace the CV

Drop the new PDF at `public/cv/zhaoxiang-cai-cv-research.pdf` (overwrite).
Update `cv.lastUpdated` in `src/data/site.ts`.

### Add a profile photo

Place a square JPG/PNG at `public/profile.jpg`, then edit
[`src/components/Hero.astro`](src/components/Hero.astro) and replace the
initials-monogram block with an `<img src="/profile.jpg" ... />`.

## Design system

- **Colour tokens** (light/dark pairs) — CSS variables in
  [`src/styles/global.css`](src/styles/global.css), wired into Tailwind as
  `bg-bg`, `bg-surface`, `text-fg`, `text-muted`, `text-accent`, etc.
- **Fonts** — Fraunces Variable (display), Inter Variable (body), JetBrains
  Mono (DOIs / code). Self-hosted via `@fontsource`.
- **Dark mode** — class-based (`<html class="dark">`), toggled by the button
  in the header; defaults to system preference.

## Deployment

Every push to `main` triggers `.github/workflows/deploy.yml`:

1. `withastro/action@v3` installs deps + builds with Node 22.
2. `actions/deploy-pages@v4` publishes `dist/` to GitHub Pages.

Required one-time setup: **Settings → Pages → Source = GitHub Actions**.

To add a custom domain later: drop a `public/CNAME` file containing the
domain, update the DNS A/CNAME records, and tick "Enforce HTTPS" in Pages
settings.

## Tech stack

- [Astro 4](https://astro.build) with content collections + MDX
- [Tailwind CSS 3](https://tailwindcss.com) + custom CSS tokens
- TypeScript (strict), Zod for content schemas
- `astro-icon` with Lucide + Simple Icons
- `@astrojs/sitemap` + `@astrojs/rss`

## Licence

Content (text, CV, publication lists) © Zhaoxiang Cai.
Site source code MIT.
