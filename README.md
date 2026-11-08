# Portfolio

A responsive developer portfolio built with **Next.js (App Router) + React**, exported as a static site.

## Pages
| Route | What it is |
| --- | --- |
| `/` | Home: hero, about, skills, projects, experience, testimonials |
| `/about` | Story, values, process, skills, experience |
| `/case-studies` | Case study list + a detail page per project (`/case-studies/<slug>`) |
| `/insights` | Blog powered by Markdown files (`/insights/<slug>`) |
| `/careers` | Collaboration openings and perks |
| `/contact` | Contact form, details and FAQ |

## Features
- Dark / light theme toggle (teal + indigo accent), no flash on load
- Shared navigation with active-page highlighting
- Scroll reveal animations and animated stats
- Mobile menu, fully responsive
- Static export (`out/`) that works on GitHub Pages, Netlify, Vercel or any host

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static site in ./out
```

## Customize
- **Content:** name, bio, projects, experience, values, FAQ, openings and links live in `data/content.js`.
- **Case studies:** edit or add entries in `data/caseStudies.js`. Each one gets its own page automatically.
- **Blog posts:** add a `.md` file to `content/insights/` with `title`, `excerpt`, `date`, `category` and `image` front matter.
- **Layout / sections:** components are in `components/`, page composition is in `app/page.js`.
- **Colors:** change the CSS variables at the top of `app/globals.css` (`--accent`, `--accent-2`).
- **Images:** sample images come from [picsum.photos](https://picsum.photos). Put your own files in `public/` and reference them as `/my-photo.jpg` in `data/content.js`.
- **Contact form:** currently a demo (`components/Contact.js`). Connect it to Formspree, Resend, etc.

## Deploy to GitHub Pages
A workflow is included at `.github/workflows/deploy.yml`.

1. In the repo, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
2. Push to `main`. The site will be published at `https://<username>.github.io/<repo>/`.
