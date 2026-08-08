# Shrijan Pokharel — Portfolio

A personal portfolio site built with **React + Vite**, styled with plain CSS
(no framework), themed around a security/terminal aesthetic that matches a
Cybersecurity Specialist + Programmer profile.

## Stack

- React 18
- Vite 5
- Plain CSS with design tokens (no Tailwind/Bootstrap dependency)
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

## Project structure

```
src/
  App.jsx              # assembles all sections
  siteConfig.js         # your contact info — edit this
  index.css             # design tokens + all styling
  components/
    Navbar.jsx
    Hero.jsx             # animated terminal hero
    About.jsx
    Experience.jsx       # work + education timeline
    Projects.jsx         # pulled from github.com/Shr6
    Certifications.jsx
    Skills.jsx
    Contact.jsx
    Footer.jsx
    Reveal.jsx           # scroll-reveal animation wrapper
```

## Notes / things worth double-checking

- The **email** and **LinkedIn URL** in `src/siteConfig.js` are placeholders
  — the source material didn't include your email or a confirmed LinkedIn
  vanity URL, so update those before publishing.
- Project descriptions were written from the README/description of each of
  your 3 public GitHub repos at the time this was generated
  (`hackathon`, `loksewa-buddy-prep`, `AI-traffic-signal`) — edit freely if
  anything has changed since.
