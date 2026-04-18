export const aboutPage = {
  title: 'About KeepSeeing',
  paragraphs: [
    'KeepSeeing is for the thing that will not stop turning up: a number, an animal, a sound, a face, a colour, a song. It gives people a place to name recurrence without being mocked for noticing it.',
    'The tool answers in two parts. First, a pattern: what people across history, folklore, psychology, and ordinary life have made of the thing. Then a portrait: a short literary rendering of it as if it were a presence with its own habits.',
    'KeepSeeing does not claim certainty, prophecy, or diagnosis. It treats repetition seriously, stays grounded in culture and human meaning, and leaves room for the user to decide what feels true.'
  ],
  contactEmail: 'hello@keepseeing.com'
} as const;

export const privacyPage = {
  title: 'Privacy',
  lastUpdated: 'Last updated: April 2026',
  sections: [
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
  ]
} as const;

export const footerLinks = [
  { href: '/about', label: 'about' },
  { href: '/privacy', label: 'privacy' }
] as const;
