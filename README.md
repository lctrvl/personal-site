# Personal site

A working notebook. Professional projects, personal craft, and writing
held in one frame. Built with [Astro](https://astro.build), designed to
be maintained for a decade with a minimum of fuss.

---

## What's here

```
src/
  config.ts                    ← your name, links, nav (edit first)
  content/
    projects/*.md              ← every project, professional or personal
    writing/*.md               ← essays, notes, poems
    config.ts                  ← schema for both (rarely edited)
  pages/                       ← page templates (rarely edited)
  layouts/Base.astro           ← shared shell
  components/                  ← Header, Footer, ProjectCard
  styles/global.css            ← design system (palette, typography)
public/
  favicon.svg
  robots.txt
astro.config.mjs               ← set your real domain here
netlify.toml                   ← Netlify deploy config
```

---

## Running it locally

You need [Node.js](https://nodejs.org/) version 20 or newer. Then:

```bash
npm install
npm run dev
```

Visit `http://localhost:4321`. Edits to content or styles hot-reload.

To produce a built site (the static files you'd deploy):

```bash
npm run build
```

Output lands in `dist/`.

---

## Adding a project

Create a new `.md` file in `src/content/projects/`. The filename becomes
the URL slug. Use this frontmatter:

```yaml
---
title: "The project title"
summary: "One or two sentences. This shows on the listing card."
domain: "craft"        # craft (shop), code (keyboard), road (travel), table (kitchen)
kind: "What kind of project"   # subtitle, e.g. "Woodworking"
date: 2026-03-15
dateEnd: 2026-06-01    # optional, for ongoing projects
status: "complete"     # or "active", "ongoing", "shelved"
tags: ["Skill", "Tool", "Theme"]
pullquote: "One memorable line, shown prominently."  # optional
draft: false           # set true to hide while writing
---

## The brief
What you set out to do.

## What I did
The actual work — narrative, not bullet points.

## The friction
What didn't go to plan. **Include this.** Process honesty is the
reason anyone reads case studies.

## What I learned
The reflection. The part that compounds.
```

That's it. Save the file, refresh, it appears on the homepage and the
`/work` page in the right domain group.

---

## Adding writing

Same idea, in `src/content/writing/`:

```yaml
---
title: "The essay title"
subtitle: "Optional one-line subtitle"
date: 2026-03-10
kind: "essay"     # or "poem", "note", "reflection"
tags: ["Tag"]
draft: false
---

Your prose, in Markdown.
```

---

## Maintenance notes (so future-you isn't lost)

- **Updating the homepage tagline or nav:** `src/config.ts`
- **Updating "Now" page:** `src/pages/now.astro`
- **Updating the About page:** `src/pages/about.astro`
- **Changing colors or fonts:** the `:root` block at the top of `src/styles/global.css`
- **Changing what shows on homepage:** `src/pages/index.astro` — the `featured` slice picks the most recent four projects
- **Changing the project domains** (the four buckets — "In the shop", "At the keyboard", "On the road", "At the table"): edit `domains` in `src/config.ts` AND the `domain` enum in `src/content/config.ts` if you add new values

---

## Deploying

Two recommended paths — both free for personal sites.

### Option A: Netlify (easiest, recommended)

1. Push this folder to a new GitHub repository.
2. Sign in to [Netlify](https://netlify.com) with GitHub.
3. "Add new site" → "Import from Git" → pick your repo. Netlify reads
   `netlify.toml` and builds it automatically.
4. Netlify gives you a `something-something.netlify.app` URL immediately.
5. Point your custom domain at it via Netlify's domain settings.

From then on: every `git push` to your main branch redeploys the site
in about 30 seconds.

### Option B: GitHub Pages

1. Push to GitHub.
2. In `astro.config.mjs`, set `site` to `https://yourname.github.io`
   and add `base: '/repo-name/'` if it's a project page (skip for user/org pages).
3. Add the official Astro GitHub Pages workflow:
   <https://docs.astro.build/en/guides/deploy/github/>

---

## Custom domain

Get one from any registrar (Cloudflare, Porkbun, Namecheap are all
fine — Cloudflare is cheapest and has free DNS). Point it at Netlify
or GitHub Pages per their documentation. Then update `site` in
`astro.config.mjs` to match.

---

## A few words on longevity

This site is built to outlive the next half-dozen framework fashions.
That means:

- **Plain Markdown for content.** If Astro ever disappears, your writing
  and project pages are still plain text files you can move anywhere.
- **No database.** Everything regenerates from files. Nothing to back
  up except this folder.
- **Static output.** The built site is HTML and CSS. It will work in
  any browser, on any server, for as long as the web does.
- **No runtime JavaScript by default.** Pages load instantly and won't
  break when a library you forgot about goes unmaintained.

Update the Astro version once a year or so. Past that, this site asks
very little of you.
