import { describe, expect, it } from 'vitest';

import { aboutPage, footerLinks, privacyPage } from './site-pages';

describe('site pages content', () => {
  it('locks the about page title and copy', () => {
    expect(aboutPage.title).toBe('About KeepSeeing');
    expect(aboutPage.paragraphs).toEqual([
      'KeepSeeing is for the thing that will not stop turning up: a number, an animal, a sound, a face, a colour, a song. It gives people a place to name recurrence without being mocked for noticing it.',
      'The tool answers in two parts. First, a pattern: what people across history, folklore, psychology, and ordinary life have made of the thing. Then a portrait: a short literary rendering of it as if it were a presence with its own habits.',
      'KeepSeeing does not claim certainty, prophecy, or diagnosis. It treats repetition seriously, stays grounded in culture and human meaning, and leaves room for the user to decide what feels true.'
    ]);
    expect(aboutPage.contactEmail).toBe('hello@keepseeing.com');
  });

  it('locks the privacy page sections and footer links', () => {
    expect(privacyPage.title).toBe('Privacy');
    expect(privacyPage.lastUpdated).toBe('Last updated: April 2026');
    expect(privacyPage.sections).toEqual([
      {
        heading: 'What we collect',
        body: 'KeepSeeing does not require accounts and does not store what you type into the tool. Your prompt is sent only to the model provider long enough to generate a response.'
      },
      {
        heading: 'How the tool works',
        body: 'When you submit a recurring thing, the site sends the system prompt and your input to a Netlify function, which relays the request to Anthropic. The function returns only the generated pattern and portrait.'
      },
      {
        heading: 'Hosting',
        body: 'KeepSeeing is hosted on Netlify. Netlify may process standard technical logs needed to serve the site securely and reliably.'
      },
      {
        heading: 'Contact',
        body: 'Questions about privacy can be sent to hello@keepseeing.com.'
      }
    ]);
    expect(footerLinks).toEqual([
      { href: '/about', label: 'about' },
      { href: '/privacy', label: 'privacy' }
    ]);
  });
});
