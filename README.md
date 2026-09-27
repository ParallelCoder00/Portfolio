# Jatin Singh — Portfolio Website

A personal portfolio website built with plain HTML, CSS and JavaScript (no frameworks, no build tools).

## Project structure

```
jatin-portfolio/
├── index.html        All page content and structure
├── css/
│   └── style.css      All styling (colors, layout, animations)
├── js/
│   └── script.js       Mobile menu, scroll reveal, active nav link, contact form
└── README.md
```

## How to run it locally

No installation or build step needed.

1. Download/unzip the `jatin-portfolio` folder.
2. Double-click `index.html` to open it in your browser.

   OR, for a nicer local dev experience (recommended, especially if you add more assets later):
   - If you use VS Code, install the **Live Server** extension, right-click `index.html`, and choose "Open with Live Server".
   - Or run a simple local server from inside the folder:
     ```bash
     # Python 3
     python -m http.server 5500
     ```
     Then open `http://localhost:5500` in your browser.

## What to edit before submitting

Search for these placeholders and replace them with your real details:

| Location | Placeholder | File |
|---|---|---|
| Education section | `[College / University Name]`, `[City]`, `[Start Year] — [End Year]` | `index.html` |
| Education section | `[School Name]`, `[Year]` | `index.html` |
| Contact section | `your.email@example.com` | `index.html` (appears twice — link text and `href`) |
| Contact section | `linkedin.com/in/your-profile` | `index.html` |
| Contact section | `github.com/your-username` | `index.html` |
| Project cards | `href="#"` on GitHub / Live Demo buttons | `index.html` |
| Project cards | Descriptions marked "Replace this with your actual project description." | `index.html` |
| Beyond Code section | "Sketch 1 / 2 / 3" placeholders | `index.html` — swap the `.sketch-placeholder` div for an `<img>` tag once you have photos of your sketches |

## Notes on the contact form

The contact form is front-end only — it validates the fields and shows a confirmation message, but it does **not** send an email anywhere yet. To make it functional, you have a few options:

- Use a free form backend like [Formspree](https://formspree.io) or [Getform](https://getform.io) — just point the form's `action` attribute at the endpoint they give you.
- Build a small backend (Node.js/Express, since you're already learning it) that receives the form data and emails it to you.

## Customizing the design

All colors, fonts and spacing are controlled by CSS variables at the top of `css/style.css`, inside the `:root { }` block. Change values there to retheme the whole site — you don't need to hunt through the rest of the file.

```css
:root {
  --bg: #0A0C10;            /* page background */
  --accent-cyan: #6FE3D6;   /* primary accent color */
  --accent-blue: #7C9EFF;   /* secondary accent color */
  --accent-amber: #E8B75E;  /* "Beyond Code" section accent */
  ...
}
```

## Browser support

Built with modern, widely-supported CSS and JS (CSS variables, `IntersectionObserver`, `backdrop-filter`). Works well in current versions of Chrome, Edge, Firefox and Safari.
