import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// If you deploy to a custom domain (e.g. via Cloudflare DNS pointing at
// GitHub Pages), keep base as "/".
// If you deploy to https://<username>.github.io/<repo-name>/ WITHOUT a
// custom domain, change base to "/<repo-name>/".
export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    outDir: "dist",
  },
});
