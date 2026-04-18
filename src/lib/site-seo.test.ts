import { describe, expect, it } from 'vitest';

import { siteSeo } from './site-seo';

describe('site seo', () => {
  it('defines the canonical KeepSeeing SEO values', () => {
    expect(siteSeo).toEqual({
      title: 'KeepSeeing — What keeps finding you?',
      description: "Type what keeps finding you — a number, an animal, a sound, a face. We'll take it seriously.",
      ogDescription: "Type what keeps finding you — a number, an animal, a sound, a face. We'll take it seriously.",
      url: 'https://keepseeing.com',
      robots: 'index, follow',
      ogType: 'website'
    });
  });
});
