export const aboutPage = {
  title: 'About KeepSeeing',
  paragraphs: [
    'KeepSeeing is for the thing that will not stop turning up: a number, an animal, a sound, a face, a colour, a song. It gives people a quiet private place to name recurrence without being mocked for noticing it.',
    'The tool answers in two parts. First, a pattern: what people across history, folklore, psychology, and ordinary life have made of the thing. Then a portrait: a short literary rendering of it as if it were a presence with its own habits.',
    'KeepSeeing does not claim certainty, prophecy, diagnosis, or private revelation. It treats repetition seriously, stays grounded in culture and human meaning, and leaves room for the user to decide what feels true.'
  ],
  contactEmail: 'hello@keepseeing.co.uk'
} as const;

export const privacyPage = {
  title: 'Privacy',
  lastUpdated: 'Last updated: May 2026',
  sections: [
    {
      heading: 'What we collect',
      body: 'KeepSeeing does not require accounts and does not store what you type as a public profile or saved list. Your prompt is sent only to the model provider long enough to generate a response.'
    },
    {
      heading: 'How the tool works',
      body: 'When you submit a recurring thing, the site sends the system prompt and your input to a Netlify function, which relays the request to Anthropic. The function returns only the generated pattern and portrait.'
    },
    {
      heading: 'Local records',
      body: 'If your browser keeps any temporary form or page state, clearing browser data can remove it. KeepSeeing is designed as a quiet tool, not a permanent archive.'
    },
    {
      heading: 'Hosting',
      body: 'KeepSeeing is hosted on Netlify. Netlify may process standard technical logs needed to serve the site securely and reliably.'
    },
    {
      heading: 'Contact',
      body: 'Questions about privacy can be sent to hello@keepseeing.co.uk.'
    }
  ]
} as const;

export const footerLinks = [
  { href: '/about', label: 'about' },
  { href: '/privacy', label: 'privacy' },
  { href: 'mailto:hello@keepseeing.co.uk', label: 'contact' }
] as const;
