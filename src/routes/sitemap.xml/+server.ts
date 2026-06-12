import { siteSeo } from '$lib/site-seo';
import { patternPages } from '$lib/patterns';

export const prerender = true;

const routes = ['', '/about', '/privacy', '/log', '/patterns'];
const patternRoutes = patternPages.map((page) => `/patterns/${page.slug}`);

export function GET() {
  const locs = [...routes, ...patternRoutes].map((route) => `  <url><loc>${siteSeo.url}${route}</loc></url>`).join('\n');
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${locs}
</urlset>
`;
  return new Response(body, { headers: { 'content-type': 'application/xml; charset=utf-8' } });
}
