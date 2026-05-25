import { siteSeo } from '$lib/site-seo';

export const prerender = true;

export function GET() {
  return new Response(`User-agent: *
Allow: /
Sitemap: ${siteSeo.url}/sitemap.xml
`, {
    headers: { 'content-type': 'text/plain; charset=utf-8' }
  });
}
