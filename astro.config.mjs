import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// Static site for TechPersona Studio.
// The hand-built marketing homepage is served verbatim from public/index.html;
// Astro owns the /blog/* routes, which are built from headless WordPress at build time.
export default defineConfig({
  site: process.env.PUBLIC_SITE_URL ?? "https://www.techpersonastudio.com",
  vite: {
    plugins: [tailwindcss()],
  },
});
