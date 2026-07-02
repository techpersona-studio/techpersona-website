<?php
/**
 * Plugin Name: Headless Redirect
 * Description: Redirects the public WordPress frontend to the live Astro site so the
 *              bare CMS does not compete for indexing. Single posts 301 to their exact
 *              /blog/<slug> URL; everything else 301s to /blog. REST API, admin, login,
 *              cron, and CLI are left untouched.
 * Author: TechPersona Studio
 *
 * INSTALL: upload this file to wp-content/mu-plugins/ on the headless CMS
 * (dailycraft.techpersonastudio.com). Create the mu-plugins folder if it does
 * not exist. mu-plugins auto-activate — no "activate" step needed.
 */

if (!defined('ABSPATH')) {
    exit;
}

// Live public site (Astro). Blog lives at /blog. No trailing slash — the site
// uses trailingSlash:false, so /blog/<slug> is the canonical form.
const HEADLESS_FRONTEND_URL = 'https://www.techpersonastudio.com';

add_action('template_redirect', function () {
    // Never redirect the REST API, admin, ajax, cron, or CLI.
    if (
        (defined('REST_REQUEST') && REST_REQUEST) ||
        is_admin() ||
        (function_exists('wp_doing_ajax') && wp_doing_ajax()) ||
        (defined('DOING_CRON') && DOING_CRON) ||
        (defined('WP_CLI') && WP_CLI)
    ) {
        return;
    }

    // Extra guard: leave /wp-json/* and /wp-login.php alone.
    $uri = isset($_SERVER['REQUEST_URI']) ? $_SERVER['REQUEST_URI'] : '';
    if (strpos($uri, '/wp-json') === 0 || strpos($uri, '/wp-login.php') !== false) {
        return;
    }

    // A single blog post → its exact /blog/<slug> on the live site.
    if (is_singular('post')) {
        $slug = get_post_field('post_name', get_queried_object_id());
        if (!empty($slug)) {
            wp_redirect(HEADLESS_FRONTEND_URL . '/blog/' . $slug, 301);
            exit;
        }
    }

    // Everything else (home, archives, categories, tags, pages) → the blog index.
    wp_redirect(HEADLESS_FRONTEND_URL . '/blog', 301);
    exit;
});
