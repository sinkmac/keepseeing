import { describe, expect, it } from 'vitest';

import { siteSeo } from './site-seo';

describe('site seo', () => {
  it('defines the canonical KeepSeeing SEO values', () => {
    expect(siteSeo).toEqual({
      title: 'KeepSeeing — private recurring-things tracker',
      description: 'KeepSeeing is a free, private tracker for recurring things. Log the number, animal, song, or sign that keeps appearing, watch the pattern build, and get a reading grounded in folklore, psychology, and ordinary life. No account. Nothing stored off your device except the reading request.',
      ogDescription: 'KeepSeeing is a free, private tracker for recurring things. Log what keeps appearing, watch the pattern build, and get a grounded reading. No account. Stored on your device.',
      url: 'https://keepseeing.co.uk',
      robots: 'index, follow',
      ogType: 'website'
    });
  });
});
