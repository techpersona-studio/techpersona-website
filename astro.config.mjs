import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

const SITE = process.env.PUBLIC_SITE_URL ?? "https://www.techpersonastudio.com";

// Static site for TechPersona Studio.
// The hand-built marketing homepage is served verbatim from public/index.html;
// Astro owns the /blog/* routes, which are built from headless WordPress at build time.
export default defineConfig({
  site: SITE,
  integrations: [
    sitemap({
      // The homepage is a static public/ file, not an Astro route, so the
      // integration can't discover it — add it explicitly. Astro auto-adds
      // /blog and every /blog/<slug>. Legal pages are noindex and stay out.
      customPages: [`${SITE}/`],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
