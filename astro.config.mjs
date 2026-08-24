import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import fs from "node:fs";
import path from "node:path";

// Dev-only parity with vercel.json's `cleanUrls: true`. In production Vercel
// serves /work from public/work.html; Astro's dev server only serves the
// literal path, so `/` and `/work` 404 locally while working fine deployed.
// This rewrites an extensionless path to its public/*.html file when one
// exists. Astro routes (/blog) have no public/blog.html, so they fall through
// untouched.
function devCleanUrls() {
  return {
    name: "dev-clean-urls",
    hooks: {
      "astro:server:setup"({ server }) {
        server.middlewares.use((req, _res, next) => {
          const [pathname, query] = (req.url || "/").split("?");
          if (path.extname(pathname)) return next();
          const rel = pathname === "/" ? "index.html" : pathname.replace(/^\/+/, "").replace(/\/+$/, "") + ".html";
          if (fs.existsSync(path.join(process.cwd(), "public", rel))) {
            req.url = "/" + rel + (query ? "?" + query : "");
          }
          next();
        });
      },
    },
  };
}

const SITE = process.env.PUBLIC_SITE_URL ?? "https://www.techpersonastudio.com";

// Static site for TechPersona Studio.
// The hand-built marketing homepage is served verbatim from public/index.html;
// Astro owns the /blog/* routes, which are built from headless WordPress at build time.
export default defineConfig({
  site: SITE,
  // vercel.json uses trailingSlash:false (strips the slash). Match it here so
  // sitemap URLs and Astro-generated links use the non-slash canonical form
  // and don't 308-redirect.
  trailingSlash: "never",
  integrations: [
    devCleanUrls(),
    sitemap({
      // The homepage and /work are static public/ files, not Astro routes, so
      // the integration can't discover them — add them explicitly. Astro
      // auto-adds /blog and every /blog/<slug>. Legal pages are noindex and
      // stay out.
      customPages: [`${SITE}/`, `${SITE}/work`],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
