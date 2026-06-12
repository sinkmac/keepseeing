import { describe, expect, it } from 'vitest';

import { aboutPage, footerLinks, privacyPage } from './site-pages';

describe('site pages content', () => {
  it('locks the about page title and copy', () => {
    expect(aboutPage.title).toBe('About KeepSeeing');
    expect(aboutPage.paragraphs).toEqual([
      'KeepSeeing is for the thing that will not stop turning up: a number, an animal, a sound, a face, a colour, a song. It gives people a quiet, private place to name recurrence without being mocked for noticing it.',
      'The tool answers in two parts. First, a pattern: what people across history, folklore, psychology, and ordinary life have made of the thing. Then a portrait: a short literary rendering of it as if it were a presence with its own habits.',
      'KeepSeeing does not claim certainty, prophecy, diagnosis, or private revelation. It treats repetition seriously, stays grounded in culture and human meaning, and leaves room for the user to decide what feels true.'
    ]);
    expect(aboutPage.contactEmail).toBe('hello@keepseeing.co.uk');
  });

  it('locks the privacy page sections and footer links', () => {
    expect(privacyPage.title).toBe('Privacy');
    expect(privacyPage.lastUpdated).toBe('Last updated: June 2026');
    expect(privacyPage.sections.map((section) => section.heading)).toEqual([
      'What we collect',
      'Sightings log on this device',
      'How readings use the log',
      'Clearing and exporting',
      'How the tool works',
      'Hosting',
      'Contact'
    ]);
    expect(privacyPage.sections[1].body).toContain('ks_log');
    expect(privacyPage.sections[3].body).toContain('Clearing browser data');
    expect(footerLinks).toEqual([
      { href: '/log', label: 'log' },
      { href: '/patterns', label: 'patterns' },
      { href: '/about', label: 'about' },
      { href: '/privacy', label: 'privacy' },
      { href: 'mailto:hello@keepseeing.co.uk', label: 'contact' }
    ]);
  });
});
