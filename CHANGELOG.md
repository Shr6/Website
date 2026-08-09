# Changelog — Multi-page routing + home page photo

Everything below is relative to the project root (the folder you get when
you unzip `shrijan-portfolio.zip`).

## New files

| File | Lines | What it is |
|---|---|---|
| `src/router.jsx` | 68 | Dependency-free client-side router (History API). Exports `RouterProvider`, `useRouter`, `RouterLink`. |
| `src/pages/Home.jsx` | 5 | `/` — renders `Hero` |
| `src/pages/AboutPage.jsx` | 5 | `/about` — renders `About` |
| `src/pages/ExperiencePage.jsx` | 5 | `/experience` — renders `Experience` |
| `src/pages/ProjectsPage.jsx` | 5 | `/projects` — renders `Projects` |
| `src/pages/SkillsPage.jsx` | 11 | `/skills` — renders `Skills` + `Certifications` together |
| `src/pages/ContactPage.jsx` | 5 | `/contact` — renders `Contact` |
| `src/pages/NotFoundPage.jsx` | 24 | Fallback for unknown routes, with a link back home |
| `public/404.html` | 25 | GitHub Pages SPA-redirect trick, so direct links like `/projects` don't 404 |
| `src/assets/profile.jpg` | — | Your photo — auto-rotated, center-cropped to a square, resized to 640×640 |
| `CHANGELOG.md` | — | This file |

## Modified files

**`src/App.jsx`** — fully rewritten. Was a flat list of every section
stacked on one page; now it's a `ROUTES` path→component table rendered
inside `RouterProvider`.

**`src/components/Navbar.jsx`** — fully rewritten. Nav links were `<a
href="#about">` (in-page scroll anchors); now they're `RouterLink to="/about"`
(real separate pages), plus `aria-current`/`.active` highlighting for
whichever page you're on, and the mobile menu now auto-closes on navigation
(new `useEffect` watching `path`).

**`src/components/Footer.jsx`** — "Back to top" changed from `href="#top"`
(only worked on the home page, where `#top` existed) to an `onClick` handler
that scrolls the current page to top, so it works correctly on every page.

**`src/components/Hero.jsx`**
- Added `import { RouterLink } from "../router.jsx";` and `import
  profilePhoto from "../assets/profile.jpg";`
- Added a `.profile-chip` block (photo + name + title) above the
  "AVAILABLE FOR…" badge — this is your photo on the home page
- `href="#projects"` / `href="#contact"` buttons changed to `RouterLink
  to="/projects"` / `to="/contact"`

**`src/components/About.jsx`, `Experience.jsx`, `Projects.jsx`, `Skills.jsx`,
`Certifications.jsx`, `Contact.jsx`** — one-line change each: added a
`page-section` class (and `page-section-tight` for `Certifications`, which
now sits directly under `Skills` on the same page) to the root `<section>`,
e.g.:
```diff
- <section id="about">
+ <section id="about" className="page-section">
```
This swaps the old "stacked scroll section" spacing/divider for spacing
that makes sense when the section is its own standalone page.

**`src/index.css`** — added three new rule blocks (no existing rules were
removed):
- `.page-section` / `.page-section-tight` — top-spacing for standalone pages
- `.profile-chip` / `.avatar` / `.profile-name` / `.profile-role` — the
  photo block styling
- `.nav-links a.active` — active-page nav highlighting

**`index.html`** — added a small inline `<script>` right after `<head>`
that's the second half of the GitHub Pages redirect trick (decodes the
path `public/404.html` encoded, before the app mounts).

**`vite.config.js`** — comment updated to note that the router's paths are
absolute, which matters only if you deploy without a custom domain (see
README → "Deploying to a sub-path").

**`README.md`** — updated throughout to describe the new multi-page
structure, plus new sections: "How the routing works", "Swapping your
photo", "Deploying to a sub-path".

## Not changed

`src/siteConfig.js`, `src/components/Reveal.jsx`, `package.json`,
`.github/workflows/deploy.yml`, `public/favicon.svg`, `.gitignore` — all
identical to the previous version.

## Verification performed

- `tsc --noEmit` syntax check across every `.jsx`/`.js` file — clean
- Full bundle build (esbuild, mirroring what `vite build` will do) — clean
- Real browser test (Playwright + Chromium) covering:
  - Direct navigation to a deep link (`/projects`) — confirmed the 404
    redirect trick correctly restores the page instead of 404ing
  - Clicking every nav link, round-trip (forward through all 5, then back
    through all 5) — correct URL and content every time, zero console
    errors
  - Browser back/forward buttons — correct
  - `/skills` renders both the Skills and Certifications sections
  - Photo loads and decodes correctly (640×640, `complete: true`)
