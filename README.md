# Portfolio

React 19 + Vite + React Router + Tailwind. Four routed pages, styled as a security "case file" — dossier-style dividers, redaction bars, a verified stamp, and a service-record log.

## Structure

```
portfolio/
├── public/
│   └── _redirects        # Cloudflare Pages SPA fallback
├── src/
│   ├── components/
│   │   ├── Nav.jsx
│   │   ├── Footer.jsx
│   │   ├── ExhibitHeader.jsx
│   │   └── Reveal.jsx     # scroll-reveal hook + Section wrapper
│   ├── data/
│   │   └── profile.js     # all editable content lives here
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Editing content

Everything text-based — name, role, skills, service record, projects, email, links — lives in `src/data/profile.js`. Edit that file; no component code needed for content changes.

## Local dev

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Outputs to `dist/`.

## Deploy (Cloudflare Pages)

Matches your existing setup for `github.com/Shr6/Website`:
- Root directory: `portfolio`
- Build command: `npm run build`
- Output directory: `dist`

The `public/_redirects` file is required for React Router — without it, direct links to `/about`, `/projects`, or `/contact` (or a page refresh on those routes) will 404 on Cloudflare Pages.
