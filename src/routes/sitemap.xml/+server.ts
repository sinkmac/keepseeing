import type { RequestHandler } from '@sveltejs/kit';

const pages = [
  '/',
  '/patterns',
  '/about',
  '/privacy',
  '/log',
  '/patterns/11-11',
  '/patterns/magpie',
  '/patterns/robin',
  '/patterns/white-feather',
  '/patterns/black-cat',
  '/patterns/the-number-7',
  '/patterns/33',
  '/patterns/222',
  '/patterns/the-same-song',
  '/patterns/crow',
  '/patterns/moth',
  '/patterns/fox',
  '/patterns/111',
  '/patterns/123',
  '/patterns/333',
  '/patterns/444',
  '/patterns/555',
  '/patterns/777',
  '/patterns/888',
  '/patterns/999',
  '/patterns/1212',
  '/patterns/owl',
  '/patterns/butterfly',
  '/patterns/deer',
  '/patterns/dragonfly',
  '/patterns/heron',
  '/patterns/spider',
  '/patterns/wren',
  '/patterns/jay',
  '/patterns/hare',
  '/patterns/bat',
];

export const GET: RequestHandler = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>https://keepseeing.co.uk${page}</loc>
    <changefreq>weekly</changefreq>
    <priority>${page === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'max-age=0, s-maxage=3600'
    }
  });
};