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
  })),
  // === Angel numbers (modern folklore, not ancient mysticism) ===
  {
    slug: '111',
    thing: '111',
    title: 'What does seeing 111 mean?',
    answer: 'Seeing 111 belongs to the modern cultural language of clock patterns: a triple repetition that signals beginning. It has no fixed ancient meaning, but it has gathered a strong contemporary life as a marker of alignment and fresh start.',
    body: [
      '111 is part of the same family as 11:11 — a digital pattern that became meaningful because people agreed to notice it together. Its reputation as a number of awakening or new cycle comes from internet-era folklore and new-age spiritual writing, not from any pre-digital tradition. That does not make the experience empty. It makes it contemporary: a shared language for the feeling that something is starting.',
      'Psychologically, 111 is a clean example of attentional tuning. When the number carries a sense of alignment, the mind runs a more efficient search for it. Seeing it repeatedly can be a sign that you are in a period of orientation — not the blueprint for what comes next, but the faint evidence that you are facing a direction.',
      'A grounded reading of 111 keeps the aperture open. It can be a coincidence, it can be an emotional signal your mind is amplifying, or it can be both. The useful question is not what the number means but what the noticing itself is pointing toward.'
    ],
    related: ['11-11', '222', '33'],
    faqs: [
      { question: 'Is 111 a prophecy?', answer: 'KeepSeeing does not treat 111 as prophecy. It reads the recurrence through attention culture and pattern psychology.' },
      { question: 'Why do some people say 111 means manifestation?', answer: 'That reading comes from contemporary spiritual culture, not established folklore. KeepSeeing treats it as a culturally acquired belief about the number, not a property of the number itself.' },
      { question: 'Should I take action when I see 111?', answer: 'That depends on the context of your life, not the number. The recurrence may reflect a moment of readiness; the decision is yours.' }
    ]
  },
  {
    slug: '123',
    thing: '123',
    title: 'What does seeing 123 mean?',
    answer: 'Seeing 123 is a sequence pattern — a sense of order, progression, or one-thing-after-another. Its resonance comes from the satisfaction of a clear sequence rather than from any supernatural claim.',
    body: [
      '123 has no deep folkloric tradition. It is a modern pattern, noticed because it feels orderly in a world that mostly is not. The appeal of 123 is that it represents simple forward motion: each digit follows the last without skipping, without repeating, without hesitation.',
      'Psychologically, sequential patterns are processed differently from repeating ones. A repetition like 111 asks the mind to dwell. A sequence like 123 asks it to move. People who notice 123 often describe a feeling of things falling into place — not a dramatic sign but a quiet sense that the order of events is coherent.',
      'A grounded reading of 123 honours that coherence without inflating it. The pattern may coincide with a period of clarity, but the sequence is a description of the feeling, not its cause. The noticing is the pulse; what you do with it is the work.'
    ],
    related: ['11-11', '1212', '33'],
    faqs: [
      { question: 'Is 123 the same kind of sign as 111?', answer: 'They share a digital origin, but the psychology differs. 111 asks the mind to pause on a repetition. 123 asks it to follow a sequence.' },
      { question: 'Does 123 mean I am on the right path?', answer: 'It might mean you feel aligned with the direction of events. KeepSeeing does not treat the number as confirmation from an external source, but as a signal from your own attention about your own orientation.' },
      { question: 'Can 123 appear in non-clock contexts?', answer: 'Yes. Receipts, street numbers, page counts — any setting where a clear forward sequence appears can carry the same felt quality.' }
    ]
  },
  {
    slug: '333',
    thing: '333',
    title: 'What does seeing 333 mean?',
    answer: 'Seeing 333 is often described in contemporary spiritual culture as a number of encouragement or creative support. Its folklore is recent and internet-born, rooted in the satisfying shape of a triple that is neither too small nor too large.',
    body: [
      '333 has no significant pre-digital tradition. Its meaning has assembled itself in the same period as most other clock-and-number folklore: through social media posts, spiritual account feeds, and the human appetite for patterns that feel like messages. The triplet shape is inherently satisfying — three is the smallest number that still feels like a crowd, a trinity, a complete set.',
      'Psychologically, 333 is often noticed during periods of creative work or decision fatigue. The number itself may carry a self-talk function: a quiet prompting that the work is supported, that the next step is permitted, that you are not alone in what you are making. This is not an external message. It is a useful internal one that happens to wear a pattern.',
      'A grounded reading of 333 accepts the encouragement without handing the authority to the number. If the recurrence coincides with moments of doubt or effort, the pattern may be the mind giving itself permission to continue — and that is worth letting it do.'
    ],
    related: ['33', '111', 'the-number-7'],
    faqs: [
      { question: 'Is 333 a prophecy?', answer: 'No. KeepSeeing treats 333 as a culturally acquired pattern with contemporary spiritual associations, not a prophetic message.' },
      { question: 'Why do I see 333 when I am creating something?', answer: 'Creative periods are rich with internal signals. The number may be a marker of readiness or permission that your mind has learned to associate with the work.' },
      { question: 'Does 333 mean I have spiritual support?', answer: 'If that reading is useful to you, it is a private belief. KeepSeeing does not claim or deny access to external support through number patterns.' }
    ]
  },
  {
    slug: '444',
    thing: '444',
    title: 'What does seeing 444 mean?',
    answer: 'Seeing 444 is widely read as a number of stability, foundation and structure in contemporary pattern folklore. Its weight comes less from ancient tradition than from the feeling of four as a solid, square, grounded number.',
    body: [
      '444 has gathered its reputation through the same modern channels as other triple-number patterns — online spiritual communities, social media shorthand, and the human preference for meaning over randomness. Four is culturally associated with the physical world: the four directions, the four seasons, the four walls of a room. A triple four takes that grounded quality and intensifies it into a claim of stability.',
      'Psychologically, 444 tends to appear at times when structure is the question. People who notice it are often mid-decision, wondering whether the foundation they are standing on is solid, or whether they need to build one before they can move. The recurrence can feel like the mind confirming its own scaffolding rather than the universe providing one.',
      'A grounded reading of 444 leans into that feeling without mistaking it for an external guarantee. If the number keeps returning during a period of planning or construction — literal or metaphorical — it may be a sign that your own attention has already chosen the ground, not that the ground has been chosen for you.'
    ],
    related: ['111', '33', 'the-number-7'],
    faqs: [
      { question: 'Is 444 a prophecy?', answer: 'No. KeepSeeing treats 444 as a culturally minted pattern, not a predictive signal.' },
      { question: 'Does 444 guarantee that my foundation is secure?', answer: 'It does not. The recurrence may reflect your own investment in stability, not an external confirmation that stability exists.' },
      { question: 'Why is four associated with the physical world?', answer: 'Cross-culturally, four shows up in cardinal directions, seasons and elemental systems. That pre-existing association gives 444 a solid quality that other triple numbers lack.' }
    ]
  },
  {
    slug: '555',
    thing: '555',
    title: 'What does seeing 555 mean?',
    answer: 'Seeing 555 is associated with change, transition and disruption in contemporary number folklore. Its character comes from five being the unstable centre of the single-digit range: neither small nor large, neither beginning nor end.',
    body: [
      '555 has no substantial pre-modern tradition. Its modern meaning — change is coming, or change is already here — was built through the same online spiritual channels that shaped the other triple-digit patterns. Five breaks symmetry, and the repetition of an asymmetrical number carries a different felt quality from the solid repetition of 444 or the threshold of 111.',
      'Psychologically, 555 tends to surface during periods of transition or anticipation: before a move, after a loss, during a decision that will change the terms of everyday life. The pattern may feel like the mind externalising its own readiness for a shift. It is not the signal that change is coming; it is the signal that you are already oriented toward it.',
      'A grounded reading of 555 allows the sense of movement without needing to say who or what is moving it. The recurrence may be the attention rehearsing a transition it has not yet fully made — and the noticing may be the first step of making it real.'
    ],
    related: ['111', '333', 'the-number-7'],
    faqs: [
      { question: 'Is 555 a prophecy?', answer: 'KeepSeeing does not treat 555 as prophecy. It reads recurrence through psychology and cultural pattern.' },
      { question: 'Does 555 mean something bad is going to happen?', answer: 'Change is not disaster. The quality of the transition depends on context, not the number.' },
      { question: 'Can 555 appear during neutral or positive transitions?', answer: 'Yes. The pattern carries the feeling of movement, not the value of the outcome.' }
    ]
  },
  {
    slug: '777',
    thing: '777',
    title: 'What does seeing 777 mean?',
    answer: 'Seeing 777 is commonly read as a number of luck, reflection, or spiritual insight in contemporary pattern culture. Its reputation borrows from the older folklore of seven as a significant number and adds a modern layer of digital-age mystique.',
    body: [
      'Seven has genuine pre-modern weight — the seven classical planets, the seven days of the week, the seven notes of the diatonic scale, the seven wonders. 777 draws on that accumulated gravity while having no tradition of its own before the internet. The triple amplifies the existing cultural charge of seven into something that feels like an exclamation.',
      'Psychologically, 777 often appears at times of inner work: periods of reading, thinking, withdrawal, or practice. The pattern may feel like a confirmation that the reflection is worthwhile, or that insight is near. That feeling is not proof of an external source, but it is real as a state of mind, and it can be genuinely orienting.',
      'A grounded reading of 777 distinguishes the signal from the interpretation. The recurrence may be real; the luck or insight it seems to promise is a reading, not a guarantee. The noticing itself is the event worth following.'
    ],
    related: ['the-number-7', '111', '333'],
    faqs: [
      { question: 'Is 777 a prophecy?', answer: 'No. KeepSeeing does not treat 777 as prophetic.' },
      { question: 'Why is seven considered lucky?', answer: 'Seven carries a long cultural history of significance across multiple traditions. 777 inherits that weight without being bound to any single tradition.' },
      { question: 'Does seeing 777 mean I am on the right track?', answer: 'It may mean you feel aligned with your own direction. The recurrence is a readout of attention, not a verdict.' }
    ]
  },
  {
    slug: '888',
    thing: '888',
    title: 'What does seeing 888 mean?',
    answer: 'Seeing 888 is associated with cycles, return, and material flow in contemporary number folklore. The character of the pattern comes from eight being the number of the double loop — a shape that turns back on itself.',
    body: [
      '888 has no pre-digital tradition, but eight itself carries long-standing cultural weight: the infinity symbol rotated sideways, the octave, the eighth day as renewal. The triple form taps that existing resonance and applies it to questions of movement, return and material conditions.',
      'Psychologically, 888 tends to surface during periods of pay-off or reckoning — when something that was set in motion earlier is now completing a circuit. It may appear around financial events, seasonal shifts, or the return of a person or situation from the past. The pattern can feel like a closed loop announcing itself.',
      'A grounded reading of 888 treats the feeling of return with care. Cycles do complete themselves; investments do mature; seasons do change. The recurrence may be the mind marking a completion that was already under way, not a supernatural nudge that it has arrived.'
    ],
    related: ['555', '999', 'the-number-7'],
    faqs: [
      { question: 'Is 888 a prophecy?', answer: 'No. KeepSeeing treats it as a culturally layered pattern, not a prediction.' },
      { question: 'Does 888 mean financial abundance?', answer: 'Some contemporary spiritual readings associate 888 with money. KeepSeeing does not treat number patterns as financial indicators.' },
      { question: 'Can a cycle be recognised before it completes?', answer: 'Sometimes. The recurrence of 888 may surface during the closing phase of a process, not only after it has finished.' }
    ]
  },
  {
    slug: '999',
    thing: '999',
    title: 'What does seeing 999 mean?',
    answer: 'Seeing 999 is read as a number of completion, release and threshold in contemporary pattern folklore. Its charge comes from being the last single digit — the point at which the cycle must either close or become something new.',
    body: [
      '999 has no traditional precedent. Its meaning was assembled in the same online spiritual environment that minted the other triple-digit patterns, drawing on the symbolic weight of endings and the visual gravity of a number that fills the available space. Nine is the exhaustion of possibility within a single digit: there is no higher whole number before ten resets the sequence.',
      'Psychologically, 999 surfaces at the end of things — not always dramatic endings, but the quiet completions that make up ordinary life: the last session of a course, the final week in a flat, the closing chapter of a project. The recurrence may be the attention marking a threshold that the conscious mind has not yet fully acknowledged.',
      'A grounded reading of 999 honours the ending without dramatising it. Completion is not always loss, and it is not always the precursor to triumph. It is the natural shape of processes that had a beginning and will have a continuation in some other form. The noticing may be the moment the mind lets go.'
    ],
    related: ['888', '555', 'the-number-7'],
    faqs: [
      { question: 'Is 999 a prophecy?', answer: 'No. KeepSeeing does not treat number patterns as prophetic.' },
      { question: 'Does 999 mean something is ending for good?', answer: 'Not necessarily. Completion of one phase does not foreclose another. The number marks a boundary, not a terminus.' },
      { question: 'Can 999 appear alongside positive endings?', answer: 'Yes. Graduations, completed projects, and welcome departures can carry the same pattern weight as loss.' }
    ]
  },
  {
    slug: '1212',
    thing: '1212',
    title: 'What does seeing 1212 mean?',
    answer: 'Seeing 1212 is often read as a number of harmony, mirrored structure and alignment in modern pattern folklore. Its felt quality comes from the satisfying balance of a two-part pattern that reflects itself.',
    body: [
      '1212 has the same digital-era origin as the triple numbers. Its distinctive character is structural: a pair of numbers that mirror each other across a centre point. The pattern appeals to the same cognitive preference for symmetry that makes human faces and architecture feel right — it is not a message, but it is a satisfying shape.',
      'Psychologically, 1212 may surface during periods of relational or structural attention: questions of partnership, balance, reciprocity, or the alignment of two previously separate things. The recurrence may be the mind making a pair out of material that was previously felt as separate.',
      'A grounded reading of 1212 treats the symmetry as a way of thinking, not a property of the universe. If the pattern keeps appearing at moments when you are weighing two options, reconciling two positions, or noticing the shape of a relationship, the attention itself is doing the work. The number is its signature.'
    ],
    related: ['11-11', '111', '123'],
    faqs: [
      { question: 'Is 1212 a prophecy?', answer: 'No. KeepSeeing treats it as a structural pattern with no predictive power.' },
      { question: 'Why is 1212 different from 111 or 222?', answer: '1212 has a mirrored structure rather than a repeated one. The mind processes symmetry differently from repetition, which gives 1212 a distinct felt quality.' },
      { question: 'Does 1212 mean a relationship is significant?', answer: 'It may mean a relationship is on your mind. KeepSeeing reads the attention, not the fate of what you are attending to.' }
    ]
  },
  // === Animals (distinct folklore, distinct psychology) ===
  {
    slug: 'owl',
    thing: 'owl',
    title: 'What does seeing an owl mean?',
    answer: 'Owls carry one of the richest folkloric traditions of any British bird — associated with wisdom, death, silence and the transition between night and day. A sighting of an owl is an encounter with a creature that occupies a different sensory world to our own.',
    body: [
      'In British and European folklore, the owl has a split reputation. In some traditions it is a creature of wisdom, associated with Athena and the ability to see in darkness. In others it is a creature of ill omen, its call interpreted as a death warning or a signal that something hidden is about to surface. Both readings share a common root: the owl moves and hunts in conditions where humans cannot see well, and that gives it an uncanny authority.',
      'Psychologically, an owl sighting is  sharp event. Owls are rarely glimpsed in passing; they are either heard first — a call that cuts through the dark — or they appear as a sudden shape where no shape was expected. The encounter forces a pause. That quality alone — the interruption of ordinary visual attention — carries more weight than any specific folkloric meaning.',
      'A grounded reading of an owl encounter stays with the event itself. The creature is not a metaphor, but the moment of noticing it may be. What was the context? Were you walking home in the dark, disturbed by a call you could not place? Were you sitting quietly and something moved where nothing should move? The owl is real. The attention it drew is real. The meaning is something the context will provide.'
    ],
    related: ['crow', 'bat', 'moth'],
    faqs: [
      { question: 'Does seeing an owl mean someone will die?', answer: 'Some folk traditions attach that meaning to an owl call at night. KeepSeeing does not treat the owl as a death omen, but it respects that the tradition exists and that the encounter can feel grave.' },
      { question: 'What kind of owl was it?', answer: 'If you can identify the species — tawny, barn, little owl — the context and habitat will differ. A barn owl over open fields is a different encounter from a tawny owl in a suburban garden.' },
      { question: 'Should I log repeated owl sightings?', answer: 'Yes. Repeated owl encounters across different contexts may be worth closer attention, especially if the circumstances share a pattern.' }
    ]
  },
  {
    slug: 'butterfly',
    thing: 'butterfly',
    title: 'What does seeing a butterfly mean?',
    answer: 'Butterflies are among the most widely recognised symbols of transformation in global culture. A recurring butterfly encounter can carry the felt quality of visible change — something that was one thing becoming something else in front of you.',
    body: [
      'The butterfly as a symbol of transformation crosses cultures with remarkable consistency. In Japanese tradition it represents impermanence and marital joy. In Celtic folklore it was sometimes associated with the soul or with fairies in transition between states. The Christian tradition uses the butterfly as a symbol of resurrection. The common thread is not mystical — it is literal. The butterfly is the only common creature that visibly completes a metamorphosis in a form humans can recognise and name.',
      'Psychologically, a butterfly encounter during a period of personal transition can feel pointed in a way that is hard to dismiss. The creature is brief, beautiful, and entirely occupied with its own life cycle. The coincidence of its appearance with a human moment of change is just that — a coincidence — but the human mind is designed to notice such alignments and to find them meaning.',
      'A grounded reading of a butterfly sighting accepts the transformation symbolism as part of the cultural furniture without treating the butterfly as a deliberate messenger. The encounter may mark a moment that was already significant. The butterfly did not cause the significance. It arrived in the middle of it, and the attention did the rest.'
    ],
    related: ['moth', 'dragonfly', 'white-feather'],
    faqs: [
      { question: 'Is a butterfly a sign from a loved one who has died?', answer: 'That is a common personal belief, especially following a bereavement. KeepSeeing does not claim or deny that interpretation, but it respects the emotional gravity of the encounter.' },
      { question: 'Can the colour of a butterfly change the meaning?', answer: 'Different species and colours carry different folkloric associations in different cultures. A red admiral may read differently from a cabbage white. The context matters more than the colour.' },
      { question: 'Why do butterflies appear at funerals?', answer: 'The association between butterflies and the soul is old and widespread. An encounter at a funeral draws on that existing symbolism whether or not the encounter was arranged.' }
    ]
  },
  {
    slug: 'deer',
    thing: 'deer',
    title: 'What does seeing a deer mean?',
    answer: 'Deer hold a complex place in British and European folklore — associated with gentleness, alertness, the wild edge of cultivated land, and the moment of being seen without threat. An encounter with a deer is often an encounter with mutual attention.',
    body: [
      'In Celtic and medieval European folklore, the deer was a psychopomp creature — a guide between worlds — and an animal of the hunt, the forest, and the boundary between civilisation and wilderness. The white stag in particular carries a deep folkloric charge across British, Irish and French traditions, appearing in Arthurian legend as a creature that leads the hunter into unknown territory and then vanishes. The deer is never fully owned by the human world.',
      'Psychologically, a deer encounter is distinctive because the deer often sees you before you see it. The moment is mutual: two animals have registered each other, and neither has acted. That shared stillness — the held breath between detection and flight — carries a weight that the folklore has always recognised. The deer is not a message, but the pause is real.',
      'A grounded reading of a deer encounter stays with the stillness and the boundary. Where were you when it happened? Were you at the edge of a wood, on a road that cuts through farmland, in a garden that meets open land? The deer marks a threshold. The threshold is the thing worth tracking.'
    ],
    related: ['fox', 'hare', 'crow'],
    faqs: [
      { question: 'Is a white deer a special omen?', answer: 'The white stag appears in Arthurian folklore as a guide and a trickster. KeepSeeing treats it as an encounter with a rare animal whose folkloric weight is real but whose function is not predictive.' },
      { question: 'What if the deer did not run away?', answer: 'A deer that holds its ground rather than fleeing is unusually habituated or unusually compelled. Either way, the extension of the encounter is worth noting.' },
      { question: 'Does a deer encounter mean I am too gentle?', answer: 'The deer is not a personality test. Its appearance in your awareness may say more about the quality of the encounter than about your character.' }
    ]
  },
  {
    slug: 'dragonfly',
    thing: 'dragonfly',
    title: 'What does seeing a dragonfly mean?',
    answer: 'Dragonflies are among the most visually striking insects in the British landscape — iridescent, fast, and entirely committed to a brief adult life. An encounter with a dragonfly is often an encounter with intensity and impermanence in the same moment.',
    body: [
      'In European folklore, the dragonfly has a mixed reputation. In some regions it was called the "devil\u2019s darning needle" and believed to sew up the mouths of children who lied. In others it was seen as a creature of transition, associated with the boundary between water and air — the two elements it inhabits across its life cycle. The dragonfly spends most of its life underwater as a nymph and surfaces for a single season as a winged adult. That structure alone carries symbolic weight independent of any tradition.',
      'Psychologically, a dragonfly encounter is visually commanding. The iridescence, the hovering capability, the speed — it does not behave like other insects. A dragonfly that pauses near you has done something most dragonflies do not do. The encounter demands a different quality of attention from a passing bee or a settled butterfly.',
      'A grounded reading of a dragonfly encounter begins with the brevity. The adult dragonfly lives for weeks, not years. Its intensity is a function of that compression. If the encounter coincided with a period of your own life that felt compressed or accelerated, the correspondence may be worth noting — not as a message from the dragonfly, but as a reflection of the attention it earned.'
    ],
    related: ['butterfly', 'moth', 'heron'],
    faqs: [
      { question: 'Is a dragonfly a sign of change?', answer: 'Its life cycle involves dramatic transformation. If you are in a period of transition, the coincidence may feel apt without being arranged.' },
      { question: 'Why is a dragonfly iridescent?', answer: 'The iridescence is structural, not pigmented — microscopic ridges on the wing membrane refract light. It is not a message, but it is a property that makes the insect unforgettable at close range.' },
      { question: 'Can I track dragonfly encounters alongside other patterns?', answer: 'Yes. The tracker accepts any recurring thing. A dragonfly that returns across different locations or seasons may be carrying attention in a direction you have not yet named.' }
    ]
  },
  {
    slug: 'heron',
    thing: 'heron',
    title: 'What does seeing a heron mean?',
    answer: 'Herons are solitary, patient hunters that stand still in moving water for longer than seems reasonable. An encounter with a heron is an encounter with stillness as a strategy — a creature that achieves its purpose by not moving.',
    body: [
      'In Celtic and British folklore, the heron carries associations of patience, solitude and the liminal space between water and land. It is not a gregarious bird; it does not travel in flocks or announce itself. The heron appears when it is ready, stands where the water has food, and waits. That waiting is the core of its folkloric character: the heron is what it looks like when attention becomes a tactic.',
      'Psychologically, a heron encounter often coincides with a period of forced or chosen waiting — a job application, a health result, a decision that belongs to someone else. The heron does not hurry. It does not fidget. It adjusts its angle by degrees and then stays. That quality in a living creature can be either irritating or deeply calming, depending on the observer\u2019s own relationship with patience.',
      'A grounded reading of a heron encounter treats the bird as a fact and the patience as a possibility. The heron did not arrive to teach you anything about waiting. But if the encounter occurred during a period of your own impatience, the coincidence is real and the comparison is available.'
    ],
    related: ['owl', 'crow', 'dragonfly'],
    faqs: [
      { question: 'Is a heron a sign of good luck?', answer: 'Some fishing traditions treat a heron sighting as good luck for the catch. KeepSeeing does not treat it as a luck token, but the tradition is worth knowing.' },
      { question: 'What if the heron was standing in an unusual place?', answer: 'Herons are adaptable and appear in urban ponds, garden water features, and roadside ditches. An unusual setting may say more about the availability of food than about the meaning of the encounter.' },
      { question: 'Does a heron sighting mean I need to be more patient?', answer: 'Not necessarily. The coincidence may invite the question, but the bird is not an instruction.' }
    ]
  },
  {
    slug: 'spider',
    thing: 'spider',
    title: 'What does seeing a spider mean?',
    answer: 'Spiders carry some of the oldest and most culturally layered symbolism in the natural world — weaving, patience, domesticity, predation, and the connection between all things. An encounter with a spider is almost always an encounter with something that was already there before you noticed it.',
    body: [
      'Spider folklore is globally dense. In West African and Caribbean traditions, Anansi the spider is a trickster and culture hero who outwits larger creatures. In Native American traditions, the spider is often a teacher of pattern and weaving. In European folklore, the spider is more ambiguous: a domestic companion (the money spider promising good fortune), a creature of dread (the spider as hidden danger), and a symbol of patience and industry derived from its web. The common thread across all these readings is that the spider is a maker — it creates the conditions of its own survival.',
      'Psychologically, spider encounters are frequently noted for their timing. A spider descending at eye level during a conversation, or appearing on a piece of clothing at a moment of decision, is hard to ignore. The spider is not delivering a message, but the conditions of the encounter — where, when, at what height, in what light — may carry more information than the spider itself.',
      'A grounded reading of a spider encounter stays with the web. The spider built something before you arrived. That structure — invisible until you were at the right angle to see it — is the more durable pattern. What have you been building that you have not yet seen from the right angle?'
    ],
    related: ['moth', 'fox', 'crow'],
    faqs: [
      { question: 'Is a money spider really lucky?', answer: 'The money spider tradition is a genuine piece of British folklore, probably originating from the idea that a small spider crossing your path brings financial good fortune. KeepSeeing treats it as folklore, not economics.' },
      { question: 'What if I am afraid of spiders?', answer: 'Fear changes the encounter. A spider seen through fear is not a neutral observation. The emotional context is part of the pattern.' },
      { question: 'Does the time of day matter?', answer: 'Yes. A spider encountered in the morning, when webs are freshly visible with dew, is a different event from a spider encountered in a dark corner at night.' }
    ]
  },
  {
    slug: 'wren',
    thing: 'wren',
    title: 'What does seeing a wren mean?',
    answer: 'The wren is one of the smallest British birds and one of the loudest. Its folkloric weight is out of all proportion to its size — associated with the winter solstice, the turning of the year, and the paradox of immense power in a tiny body.',
    body: [
      'The wren has an extraordinary folkloric position. In Celtic and Gaelic tradition, the wren was the "druid bird" or "the little king", and the Wren Hunt on St Stephen\u2019s Day (26 December) was a widespread custom across Ireland, Wales and parts of England. Boys would hunt a wren and carry it through the village on a pole, collecting money and singing verses. The tradition is complex and troubling by modern standards, but it testifies to the wren\u2019s unusual cultural weight: the smallest bird was treated as the most significant.',
      'Psychologically, a wren encounter is almost always a sound-first event. The wren\u2019s song is disproportionately loud for its body, and it often sings from cover. You hear it before you see it, and the gap between the volume and the size of the bird when you finally locate it is its own kind of revelation. The wren is a lesson in the unreliability of appearances.',
      'A grounded reading of a wren encounter starts with the volume. What else in your life is making more noise than its size would suggest? The wren is not an answer to that question, but it is a very good prompt for it.'
    ],
    related: ['jay', 'robin', 'crow'],
    faqs: [
      { question: 'What is the Wren Hunt?', answer: 'A traditional folk practice on St Stephen\u2019s Day involving the hunting and parading of a wren. It has largely died out but survives in revived form in some communities.' },
      { question: 'Is a wren a sign of good luck?', answer: 'In Irish tradition, finding a wren feather or having a wren near the house was considered good fortune. KeepSeeing treats it as a genuine folkloric association, not a guarantee.' },
      { question: 'Why is the wren called the little king?', answer: 'A folk tale attributes the title to a contest among the birds to see who could fly highest. The wren hid in the eagle\u2019s feathers and flew higher when the eagle tired.' }
    ]
  },
  {
    slug: 'jay',
    thing: 'jay',
    title: 'What does seeing a jay mean?',
    answer: 'The jay is the most colourful of the British corvids and among the most vocal. Its reputation in folklore is split between beauty and warning — a bird that stands out in the woodland and uses its voice to alert every other creature to a disturbance.',
    body: [
      'In British and European folklore, the jay is treated as the sentinel of the forest. Other birds and animals rely on the jay\u2019s alarm call to know when a predator is moving through the trees. Its Latin name, Garrulus glandarius, references both its chattering voice and its habit of storing acorns — the jay is a hoarder of information as well as food. The folklore casts it as a gossip, a lookout, and a creature that always has something to say.',
      'Psychologically, a jay encounter is rarely neutral. The bird is not subtle. Its blue flash across a path, its harsh call, its evident awareness of your presence — the jay makes sure you know that it has seen you. That experience of being marked by a wild creature is the core of the encounter, independent of any interpretation.',
      'A grounded reading of a jay encounter follows the direction of its attention. What was the jay responding to? If it called at you, what else was in the area? The jay is not a messenger, but its behaviour is a reliable index of disturbance in the environment. The question is not what the jay means, but what it was noticing.'
    ],
    related: ['crow', 'magpie', 'wren'],
    faqs: [
      { question: 'Is a jay a bad omen?', answer: 'Some traditions treat the jay\u2019s harsh call as a warning. Others treat it simply as a characteristic of the bird. KeepSeeing leans toward the latter.' },
      { question: 'What if a jay follows me?', answer: 'Corvids are intelligent and may follow an observer out of curiosity. A jay that tracks your movement is demonstrating the species\u2019 capacity for attention, not delivering a verdict.' },
      { question: 'Does the jay\u2019s blue colour have significance?', answer: 'Blue is rare in British birds, so the jay\u2019s plumage is visually salient. The colour is structural, produced by light scattering in the feather barbs, not by pigment.' }
    ]
  },
  {
    slug: 'hare',
    thing: 'hare',
    title: 'What does seeing a hare mean?',
    answer: 'The hare occupies a deep place in British and European folklore — associated with the moon, with speed, with madness, and with the boundary between the natural and the supernatural. A hare encounter is rarely forgettable.',
    body: [
      'The hare\u2019s folklore is among the richest of any British mammal. In Celtic tradition, the hare was associated with the goddess Eostre (from whom Easter takes its name) and with the moon. It was believed to be a shape-shifting creature, sometimes a witch in animal form, and its appearance could be an omen of both good and ill fortune. The hare does not burrow like a rabbit; it lives in open fields, relying entirely on speed and evasive movement. That vulnerability and the means of surviving it are the basis of its folkloric charge.',
      'Psychologically, a hare encounter is defined by movement. The hare does not freeze like a rabbit. It runs in a zigzag, changes direction without warning, and disappears into a landscape that did not seem to contain it. The encounter is a study in escape: the hare is always showing you how it leaves.',
      'A grounded reading of a hare encounter follows the direction of the escape. The hare is not fleeing from you personally, but the experience of being left behind by something that did not want to be seen is potent. What else in your life is moving away faster than you can follow? The hare does not answer the question. It just demonstrates the shape of departure.'
    ],
    related: ['fox', 'deer', 'butterfly'],
    faqs: [
      { question: 'Are hares and rabbits the same in folklore?', answer: 'No. The hare carries much heavier folkloric weight. Rabbits were domestic or agricultural; the hare was wild, solitary, and associated with the supernatural.' },
      { question: 'What does it mean if a hare crosses my path?', answer: 'In British folklore, a hare crossing the path could be either good or ill fortune depending on the region and the direction. The older traditions tend to treat the hare with caution rather than celebration.' },
      { question: 'What is "mad as a March hare"?', answer: 'The phrase describes the boxing and leaping behaviour of hares during the breeding season in early spring. It is a real behaviour with a real seasonal context.' }
    ]
  },
  {
    slug: 'bat',
    thing: 'bat',
    title: 'What does seeing a bat mean?',
    answer: 'Bats occupy a distinct folkloric space — creatures of the threshold between daylight and darkness, capable of navigation in conditions that humans experience as blindness. An encounter with a bat is an encounter with a sensory world operating alongside our own.',
    body: [
      'Bat folklore is marked by ambivalence. In European traditions, the bat was associated with witches, vampires, and the underworld — a creature of caves, dusk and hidden places. In Chinese tradition, by contrast, the bat is a symbol of happiness and good fortune (the word for bat, fu, sounds like the word for good fortune). In Native American traditions, the bat is often a creature of initiation and the unknown. The diversity of these readings testifies to the bat\u2019s fundamental strangeness: it is a mammal that flies, a warm-blooded creature that lives in darkness, an animal that sees with sound.',
      'Psychologically, a bat encounter is almost always a dusk or dawn event — the liminal light makes the bat hard to track and easy to lose. The experience of following a bat\u2019s flight and failing to keep up is a small lesson in the limits of human perception. The bat is not hiding from you deliberately. It is simply operating in a sensory register that your biology cannot access.',
      'A grounded reading of a bat encounter begins with the light level. Bats are not omens of darkness; they are creatures that evolved to do something useful in it. The encounter may be a reminder that most of the world operates outside your sensory range, and that is ordinary, not ominous.'
    ],
    related: ['owl', 'moth', 'crow'],
    faqs: [
      { question: 'Is a bat a bad omen?', answer: 'In some European traditions, yes. In others, no. The bat is culturally contested. KeepSeeing treats it as a creature of threshold ecology rather than omen.' },
      { question: 'What if a bat entered my house?', answer: 'A bat indoors is a practical event — the animal is lost, disoriented, or following insects. Open a window and turn off the lights. It will find its way out.' },
      { question: 'Are bats blind?', answer: 'No. Bats have functional eyesight and use echolocation for fine-grained navigation in darkness. The phrase "blind as a bat" is not accurate.' }
    ]
  }
];

export function getPatternPage(slug: string) {
  return patternPages.find((page) => page.slug === slug) ?? null;
}