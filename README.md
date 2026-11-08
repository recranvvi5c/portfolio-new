# Portfolio

A responsive, single-page developer portfolio built with plain HTML, CSS and JavaScript.

## Features
- Dark / light theme toggle (teal + indigo accent)
- Sections: hero, about, skills, projects (with filters), experience timeline, testimonials, contact
- Scroll reveal animations and animated stats
- Mobile menu, fully responsive
- No build step

## Customize
- **Content:** edit `index.html` (name, text, projects, links).
- **Colors:** change the CSS variables at the top of `styles.css` (`--accent`, `--accent-2`).
- **Images:** sample images come from [picsum.photos](https://picsum.photos). Replace the `src` URLs with your own files in `assets/`.
- **Contact form:** currently a demo. Connect it to a service like Formspree or Netlify Forms.

## Run locally
Open `index.html` in a browser, or serve it:

```bash
python3 -m http.server 8000
```

## Deploy to GitHub Pages
Settings → Pages → Source: `main` branch, `/ (root)`.
