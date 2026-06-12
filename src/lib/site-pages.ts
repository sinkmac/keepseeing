export const aboutPage = {
  title: 'About KeepSeeing',
  paragraphs: [
    'KeepSeeing is for the thing that will not stop turning up: a number, an animal, a sound, a face, a colour, a song. It gives people a quiet, private place to name recurrence without being mocked for noticing it.',
    'The tool answers in two parts. First, a pattern: what people across history, folklore, psychology, and ordinary life have made of the thing. Then a portrait: a short literary rendering of it as if it were a presence with its own habits.',
    'KeepSeeing does not claim certainty, prophecy, diagnosis, or private revelation. It treats repetition seriously, stays grounded in culture and human meaning, and leaves room for the user to decide what feels true.'
  ],
  contactEmail: 'hello@keepseeing.co.uk'
} as const;

export const privacyPage = {
  title: 'Privacy',
  lastUpdated: 'Last updated: June 2026',
  sections: [
    {
      heading: 'What we collect',
      body: 'KeepSeeing does not require accounts and does not store what you type as a public profile or server-side saved list. Your prompt is sent only to the model provider long enough to generate a response.'
    },
    {
      heading: 'Sightings log on this device',
      body: 'If you log a sighting, KeepSeeing stores it in your browser localStorage under ks_log. The log can include the thing you named, a lightly normalised grouping key, the time, an optional note, and whether it came from a reading request. This log does not leave your device unless you export it or include recurrence history in a reading request.'
    },
    {
      heading: 'How readings use the log',
      body: 'When you ask for a reading about something already in your log, the browser can add the count, first seen date, and recent notes to the reading request so the response can recognise the recurrence. KeepSeeing does not invent sightings and does not sync this history across devices.'
    },
    {
      heading: 'Clearing and exporting',
      body: 'The log page lets you download your sightings as JSON or plain text. Clearing browser data, localStorage, or site data for KeepSeeing will delete the log from this device.'
    },
    {
      heading: 'How the tool works',
      body: 'When you submit a recurring thing for a reading, the site sends the system prompt and your input to a Netlify function, which relays the request to Anthropic. The function returns only the generated pattern and portrait.'
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
  { href: '/log', label: 'log' },
  { href: '/patterns', label: 'patterns' },
  { href: '/about', label: 'about' },
  { href: '/privacy', label: 'privacy' },
  { href: 'mailto:hello@keepseeing.co.uk', label: 'contact' }
] as const;
