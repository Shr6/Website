# Shrijan Pokharel — Portfolio

A personal portfolio site built with **React + Vite**, styled with plain CSS
(no framework), themed around a security/terminal aesthetic that matches a
Cybersecurity Specialist + Programmer profile. It's a real multi-page site
(separate URLs per page — `/about`, `/projects`, etc. — not just scroll
anchors on one long page), with your photo on the home page.

## Stack

- React 18
- Vite 5
- Plain CSS with design tokens (no Tailwind/Bootstrap dependency)
- A tiny dependency-free client-side router (`src/router.jsx`) — no
  `react-router-dom` or similar; real `<a href>` links, browser back/forward
  support, and a GitHub Pages redirect trick for direct/deep links (see
  "How the routing works" below)
- Deploys as a static site — works great on GitHub Pages

## 1. Run it locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## 2. Before you deploy — edit your info

- `src/siteConfig.js` — **update this first**. It has placeholder values for:
  - `email` (currently a placeholder — replace with your real email)
  - `linkedin` (currently a guessed URL — replace with your exact profile URL)
  - `github` / `location` are already correct
- `src/components/Projects.jsx` — add/remove projects as your GitHub evolves
- `src/components/Experience.jsx`, `About.jsx`, `Certifications.jsx`,
  `Skills.jsx` — update wording/dates as your career progresses
- `src/assets/profile.jpg` — swap this for a new photo any time; it'll be
  auto-sized by the CSS (see "Swapping your photo" below)

## 3. Build for production

```bash
npm run build
```

Output goes to `dist/`. Preview it locally with `npm run preview`.

## 4. Deploy on GitHub Pages

This repo already includes `.github/workflows/deploy.yml`, which builds and
publishes `dist/` to GitHub Pages automatically on every push to `main`.

**One-time setup:**

1. Push this project to a GitHub repo (e.g. `github.com/Shr6/portfolio`).
2. In the repo, go to **Settings → Pages** and set **Source** to
   **"GitHub Actions"**.
3. Push to `main` — the workflow builds and deploys automatically.
4. Your site will be live at `https://Shr6.github.io/<repo-name>/`.

**If you are NOT using a custom domain**, open `vite.config.js` and set:

```js
base: "/<repo-name>/",
```

(replace `<repo-name>` with your actual repo name), then commit and push.
**Also** see "Deploying to a sub-path" below — the router's links are
absolute (`/about`, not `about`), so they need a small adjustment too in
that case.

## 5. Custom domain via Cloudflare

If you want e.g. `shrijanpokharel.com` instead of the `github.io` URL:

1. Buy/manage the domain and add it to Cloudflare, so Cloudflare is your DNS.
2. In Cloudflare DNS, add these records (GitHub Pages' IPs), all **proxied
   off (DNS only)** at first so GitHub can verify the domain:
   - `A @ 185.199.108.153`
   - `A @ 185.199.109.153`
   - `A @ 185.199.110.153`
   - `A @ 185.199.111.153`
   - `CNAME www Shr6.github.io`
3. In your GitHub repo, go to **Settings → Pages → Custom domain**, enter
   your domain, save, and wait for the DNS check to pass, then enable
   **Enforce HTTPS**.
4. Open `.github/workflows/deploy.yml` and uncomment the line:
   ```
   echo "yourdomain.com" > ./dist/CNAME
   ```
   replacing `yourdomain.com` with your real domain, so the `CNAME` file is
   written into every deploy (otherwise GitHub Pages forgets the custom
   domain on the next build).
5. Keep `base: "/"` in `vite.config.js` when using a custom domain.
6. Once DNS has propagated (can take a few minutes to a few hours), you can
   turn Cloudflare's proxy (orange cloud) back on if you want Cloudflare's
   CDN/SSL in front of GitHub Pages.

## How the routing works

This site has real, separate pages — `/`, `/about`, `/experience`,
`/projects`, `/skills`, `/contact` — not one long scrolling page with `#`
anchors. There's no routing library; `src/router.jsx` is a small
(~70-line) router built on the browser's native History API:

- `RouterLink` renders a real `<a href="/about">` tag. With JS running, a
  plain click is intercepted and handled client-side (no full page
  reload); without JS, or on middle-click/"open in new tab", it's just a
  normal link.
- Adding a new page: create a component under `src/pages/`, then add it
  to the `ROUTES` table in `src/App.jsx` and, if it should appear in the
  nav, to the `LINKS` array in `src/components/Navbar.jsx`.

**Why this matters for GitHub Pages:** GitHub Pages only serves static
files, so directly visiting (or refreshing) a URL like `/projects` would
normally 404 — there's no `projects/index.html` file. `public/404.html`
works around this with the well-known "spa-github-pages" trick: GitHub
Pages serves that file for any unmatched path, it redirects to
`index.html` with the real path tucked into a query string, and a small
inline script at the top of `index.html` restores it before the app
mounts. You don't need to do anything for this to work — it's already
wired up — but don't delete `public/404.html` or the script block near
the top of `index.html`.

## Swapping your photo

The home page photo is `src/assets/profile.jpg` (already cropped to a
square and resized to 640×640 for a fast load). To replace it:

1. Drop your new image in as `src/assets/profile.jpg` (same filename), or
2. Use a different filename and update the `import profilePhoto from
   "../assets/profile.jpg"` line in `src/components/Hero.jsx` to match.

The `.avatar` CSS class in `src/index.css` handles sizing (a 64px circle,
`object-fit: cover`) — it'll crop any reasonably-square photo sensibly, but
starting from a square (or near-square) source image gives the cleanest
result.

## Deploying to a sub-path (no custom domain)

If you deploy to `https://Shr6.github.io/<repo-name>/` instead of a custom
domain, the router's paths (`/about`, `/projects`, etc.) need a
`<repo-name>` prefix, or they'll point at the wrong place. The simplest
fix: in `src/router.jsx`, `src/App.jsx`'s `ROUTES` keys, and
`src/components/Navbar.jsx`'s `LINKS` array, prefix each path with your
repo name (e.g. `/about` → `/portfolio/about`). If you're using a custom
domain (as the Cloudflare setup above assumes), you can ignore this
entirely — the paths work as-is.

## Project structure

```
public/
  404.html              # GitHub Pages SPA redirect (see "How the routing works")
  favicon.svg
src/
  App.jsx                # route table (path -> page component)
  router.jsx              # tiny dependency-free client-side router
  siteConfig.js           # your contact info — edit this
  index.css               # design tokens + all styling
  assets/
    profile.jpg            # home page photo
  pages/                  # one file per route
    Home.jsx
    AboutPage.jsx
    ExperiencePage.jsx
    ProjectsPage.jsx
    SkillsPage.jsx          # renders Skills + Certifications together
    ContactPage.jsx
    NotFoundPage.jsx
  components/
    Navbar.jsx              # route links + active-page highlighting
    Hero.jsx                # animated terminal + photo (home page)
    About.jsx
    Experience.jsx          # work + education timeline
    Projects.jsx            # pulled from github.com/Shr6
    Certifications.jsx
    Skills.jsx
    Contact.jsx
    Footer.jsx
    Reveal.jsx              # scroll-reveal animation wrapper
```

## Notes / things worth double-checking

- The **email** and **LinkedIn URL** in `src/siteConfig.js` are placeholders
  — the source material didn't include your email or a confirmed LinkedIn
  vanity URL, so update those before publishing.
- Project descriptions were written from the README/description of each of
  your 3 public GitHub repos at the time this was generated
  (`hackathon`, `loksewa-buddy-prep`, `AI-traffic-signal`) — edit freely if
  anything has changed since.
- See `CHANGELOG.md` for a full list of what changed in the most recent
  update (multi-page routing + photo).
