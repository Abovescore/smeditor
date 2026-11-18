// Public base path the site is served from.
// - GitHub Pages serves the repo at /smeditor/ (default).
// - Cloudflare Pages serves at the domain root; it sets CF_PAGES=1 during builds.
// - Override explicitly with BASE_PATH (e.g. BASE_PATH=/ npm run build).
export function getBasePath() {
  let base = process.env.BASE_PATH ?? (process.env.CF_PAGES ? "/" : "/smeditor/")
  if (!base.startsWith("/")) base = "/" + base
  if (!base.endsWith("/")) base += "/"
  return base
}
