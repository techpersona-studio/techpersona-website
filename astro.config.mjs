import { defineConfig } from "astro/config";
import { loadEnv } from "vite";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

// Dev-only parity with vercel.json's `cleanUrls: true`. Astro's dev server only
// serves the literal path, so extensionless public/*.html paths (privacy-policy,
// terms) 404 locally. The homepage is now an Astro route (/ and /vi).
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

// Real lastmod for the homepages (/ and /vi), taken from the latest git commit
// date across the files that render them. Falls back to the old
// public/index.html history while the new files are still uncommitted.
// Blog posts intentionally aren't given a lastmod here - their WordPress
// dates are currently wrong for all 15 posts, so a lastmod sourced from that
// same field would just repeat the bad date rather than add a real signal.
function gitLastMod(...relFiles) {
  const dates = relFiles
    .map((f) => {
      try {
        return execFileSync("git", ["log", "-1", "--format=%cI", "--", f], { cwd: process.cwd() }).toString().trim();
      } catch {
        return "";
      }
    })
    .filter(Boolean)
    .map((d) => new Date(d))
    .filter((d) => !isNaN(d));
  return dates.length ? new Date(Math.max(...dates)).toISOString() : undefined;
}
const HOME_LASTMOD = gitLastMod(
  "src/components/HomePage.astro",
  "src/i18n/home.ts",
  "src/i18n/home-meta.ts",
  "public/index.css",
  "public/index.js",
  "public/index.html",
);
const STATIC_LASTMOD = {
  [`${SITE}/`]: HOME_LASTMOD,
  [`${SITE}/vi`]: HOME_LASTMOD,
};

// Blog post lastmod = WordPress `modified` (real edit time). One request per
// build; if WP is down/rate-limited the sitemap just ships without post lastmod.
async function wpPostLastmod() {
  // .env isn't in process.env inside the config; Vercel sets it directly
  const api = process.env.PUBLIC_WORDPRESS_API_URL ?? loadEnv("production", process.cwd(), "").PUBLIC_WORDPRESS_API_URL;
  if (!api) return {};
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const res = await fetch(`${api.replace(/\/$/, "")}/posts?status=publish&per_page=100&_fields=slug,modified_gmt`);
      if (res.ok) {
        const posts = await res.json();
        return Object.fromEntries(posts.map((p) => [`${SITE}/blog/${p.slug}`, `${p.modified_gmt}Z`]));
      }
    } catch {}
    await new Promise((r) => setTimeout(r, 3000 * attempt));
  }
  return {};
}
const POST_LASTMOD = await wpPostLastmod();

// Static site for TechPersona Studio.
// The hand-built marketing homepage is src/components/HomePage.astro, rendered
// at / (en) and /vi (vi) from src/i18n/home.ts; /blog/* is built from headless
// WordPress at build time; /work and /vi/work come from src/data/cases.ts.
export default defineConfig({
  site: SITE,
  // vercel.json uses trailingSlash:false (strips the slash). Match it here so
  // sitemap URLs and Astro-generated links use the non-slash canonical form
  // and don't 308-redirect.
  trailingSlash: "never",
  integrations: [
    devCleanUrls(),
    sitemap({
      // Astro auto-adds every route (/, /vi, /blog, /work, /vi/work, slugs).
      // Legal pages are static public/ files and stay out. The i18n block
      // writes xhtml:link hreflang pairs for the EN/VI routes that exist.
      i18n: { defaultLocale: "en", locales: { en: "en", vi: "vi" } },
      serialize(item) {
        const lastmod = STATIC_LASTMOD[item.url] ?? POST_LASTMOD[item.url];
        return lastmod ? { ...item, lastmod } : item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
