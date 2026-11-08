# Portfolio

A responsive developer portfolio built with **Next.js (App Router) + React**, exported as a static site.

## Features
- Dark / light theme toggle (teal + indigo accent), no flash on load
- Sections: hero, about, skills, projects (with filters), experience timeline, testimonials, contact
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
- **Content:** everything (name, bio, projects, experience, testimonials, links) lives in `data/content.js`.
- **Layout / sections:** components are in `components/`, page composition is in `app/page.js`.
- **Colors:** change the CSS variables at the top of `app/globals.css` (`--accent`, `--accent-2`).
- **Images:** sample images come from [picsum.photos](https://picsum.photos). Put your own files in `public/` and reference them as `/my-photo.jpg` in `data/content.js`.
- **Contact form:** currently a demo (`components/Contact.js`). Connect it to Formspree, Resend, etc.

## Deploy to GitHub Pages
A workflow is included at `.github/workflows/deploy.yml`.

1. In the repo, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
2. Push to `main`. The site will be published at `https://<username>.github.io/<repo>/`.
