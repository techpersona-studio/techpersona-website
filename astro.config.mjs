import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

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

// Real lastmod for the two static public/*.html pages, taken from their last
// git commit date. The sitemap integration has no way to discover these
// (they're not Astro routes), so they're fed in through serialize() below.
// Blog posts intentionally aren't given a lastmod here - their WordPress
// dates are currently wrong for all 15 posts, so a lastmod sourced from that
// same field would just repeat the bad date rather than add a real signal.
function gitLastMod(relFile) {
  try {
    return execFileSync("git", ["log", "-1", "--format=%cI", "--", relFile], {
      cwd: process.cwd(),
    })
      .toString()
      .trim() || undefined;
  } catch {
    return undefined;
  }
}
const STATIC_LASTMOD = {
  [`${SITE}/`]: gitLastMod("public/index.html"),
  [`${SITE}/work`]: gitLastMod("public/work.html"),
};

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
      serialize(item) {
        const lastmod = STATIC_LASTMOD[item.url];
        return lastmod ? { ...item, lastmod } : item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
