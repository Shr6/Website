import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// If you deploy to a custom domain (e.g. via Cloudflare DNS pointing at
// GitHub Pages), keep base as "/".
// If you deploy to https://<username>.github.io/<repo-name>/ WITHOUT a
// custom domain, change base to "/<repo-name>/" AND update the route
// paths in src/App.jsx / src/components/Navbar.jsx (they're currently
// absolute, e.g. "/about", which assumes the site is hosted at the
// domain root — see README "Custom domain via Cloudflare").
export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    outDir: "dist",
  },
});
