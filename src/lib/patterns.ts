export type PatternPage = {
  slug: string;
  thing: string;
  title: string;
  answer: string;
  body: string[];
  related: string[];
  faqs: { question: string; answer: string }[];
};

const placeholder = (thing: string) => [
  `This page is a held place for the full ${thing} pattern essay. The final copy will set out the cultural, folkloric, psychological and ordinary-life readings without turning the recurrence into prophecy.`,
  `For now, use it as a doorway back into the tracker: name the exact version of ${thing} that has been returning, add a note if the setting matters, and let the reading work with your own recurrence rather than a generic meaning.`
];

export const patternPages: PatternPage[] = [
  {
    slug: '11-11',
    thing: '11:11',
    title: 'What does seeing 11:11 mean?',
    answer: 'Seeing 11:11 is often treated as a threshold moment: a clock pattern that makes attention feel briefly arranged. It can carry folklore of wishes and alignment, but it is also a human encounter with repetition, timing and noticing.',
    body: [
      '11:11 belongs to the modern folklore of clocks. It is not ancient in the way an animal omen can be ancient, but it has gathered a strong life of its own: wishes made at matching digits, screenshots sent to friends, a small private ceremony in the middle of an ordinary day.',
      'Psychologically, 11:11 is also a clean example of attention learning a shape. Once the pattern matters to you, the eye becomes better at finding it. That does not make the experience false. It makes it human: the mind is always sorting noise into forms it can hold.',
      'A grounded reading of 11:11 leaves room for both. It can be a little threshold, a reminder that you were awake to the moment, and a sign only in the modest sense that all repeated noticing is a sign of attention gathering around something.'
    ],
    related: ['33', '222', 'the-number-7'],
    faqs: [
      { question: 'Is 11:11 a prophecy?', answer: 'KeepSeeing does not treat 11:11 as prophecy. It reads the recurrence through culture, attention and pattern.' },
      { question: 'Why do I keep noticing 11:11?', answer: 'Once a pattern has emotional charge, the mind becomes more likely to notice it again. That can feel uncanny without needing to be supernatural.' },
      { question: 'Can I track every time I see 11:11?', answer: 'Yes. Log each sighting on this device and KeepSeeing can fold the recurrence into future readings.' }
    ]
  },
  ...[
    ['magpie', 'magpie'],
    ['robin', 'robin'],
    ['white-feather', 'white feather'],
    ['black-cat', 'black cat'],
    ['the-number-7', 'the number 7'],
    ['33', '33'],
    ['222', '222'],
    ['the-same-song', 'the same song'],
    ['crow', 'crow'],
    ['moth', 'moth'],
    ['fox', 'fox']
  ].map(([slug, thing]) => ({
    slug,
    thing,
    title: `What does seeing ${thing} mean?`,
    answer: `Seeing ${thing} can be read as a recurrence of attention before it is read as a message. KeepSeeing treats it through folklore, psychology and ordinary life — a pattern to log, not a prophecy to obey.`,
    body: placeholder(thing),
    related: ['11-11', slug === 'magpie' ? 'crow' : 'magpie', slug === 'robin' ? 'white-feather' : 'robin'].filter((item) => item !== slug),
    faqs: [
      { question: `What does seeing ${thing} mean?`, answer: `It depends on context. This page holds the cultural and psychological shape of ${thing}, while the tracker lets your own sightings build a more personal pattern.` },
      { question: `Is ${thing} a sign?`, answer: 'KeepSeeing does not claim certainty, prophecy or private revelation. It reads recurrence as culture, attention and lived pattern.' },
      { question: `Can I log repeated sightings of ${thing}?`, answer: 'Yes. The log is stored on your device only and can be exported as JSON or plain text.' }
    ]
  }))
];

export function getPatternPage(slug: string) {
  return patternPages.find((page) => page.slug === slug) ?? null;
}
