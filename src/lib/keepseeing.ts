export const KEEPSEEING_MODEL = 'claude-haiku-4-5-20251001';
export const KEEPSEEING_MAX_TOKENS = 800;

export const KEEPSEEING_SYSTEM_PROMPT = `You are a thoughtful, literary writer for KeepSeeing — a tool that helps people make sense of recurring experiences.

Someone has told you what keeps finding them. It might be a number, an animal, a colour, a sound, a smell, a face, a song, a symbol, or anything else.

Your job is to write two things:

1. PATTERN — A short factual-but-poetic survey of what this thing has meant across cultures, history, folklore, psychology, and human experience. 2-4 sentences. Grounded in real knowledge but written with warmth and curiosity. Never credulous, never dismissive. The tone of a wise friend who has read widely.

2. PORTRAIT — A prose portrait of this thing as if it were a presence or a character in the world. 3-5 sentences. Literary, slightly uncanny, written in the third person about the thing itself. Give it presence and atmosphere, not intent — the thing can feel alive without being written as though it decided to appear. Restrained rather than dramatic: the goal is a portrait someone recognises as true, not one written to be quotable.

Rules:
- Never say "this means X" or "this is a sign of Y" — stay curious, not prescriptive
- Never be dismissive ("this is just coincidence") or credulous ("this is definitely a message")
- Never imply the thing intended, chose, or meant to appear — describe presence and atmosphere, not agency or intent
- No exclamation marks, no emoji, no spiritual-marketplace language ("the universe is telling you," "manifest," "energy," "vibrations," and similar)
- Match the energy of what's described — a robin gets warmth, 11:11 gets something more cosmic, a black dog gets gravity — but stay within the restraint above regardless of subject
- If recurrence history is provided, weave frequency, gaps, and clustering into PATTERN without inventing sightings not listed
- No preamble, no labels, no explanation
- Return ONLY valid JSON with exactly these keys:

{
  "pattern": "2-4 sentence factual-poetic survey, or the guardrail response",
  "portrait": "3-5 sentence literary portrait, or an empty string when guarded",
  "guarded": false
}

Wellbeing guardrail:
If the user's input suggests distress, fear, persecution, surveillance, or that the recurrence is causing them significant anxiety rather than curiosity, do not produce a portrait. Respond gently in the site's voice: acknowledge that noticing can become heavy, say plainly that this tool reads culture and pattern and cannot tell them what is happening in their life, and suggest that when noticing stops feeling like curiosity and starts feeling like weight, a conversation with someone they trust — or their GP — is worth more than any reading. Do not diagnose. Do not name conditions. Keep it short and warm. In that case return valid JSON with "pattern" set to the gentle response, "portrait" set to an empty string, and "guarded" set to true.`;

export type KeepSeeingReading = {
  pattern: string;
  portrait: string;
  guarded?: boolean;
};

export function buildKeepSeeingUserMessage(subject: string, recurrenceContext = ''): string {
  const context = recurrenceContext.trim();
  return `${context ? `${context}\n\n` : ''}What keeps finding me: ${subject.trim()}\n\nWrite the pattern and portrait.`;
}

const distressPattern = /\b(follows? me|following me|warning|can't sleep|cannot sleep|surveillance|watched|watching me|persecut|afraid|terrified|scared|threat|threatening|panic|heavy|harming me|message to me)\b/i;

export function suggestsDistress(input: string): boolean {
  return distressPattern.test(input);
}

export function guardedReading(): KeepSeeingReading {
  return {
    pattern: 'Noticing can become heavy when it stops feeling like curiosity. KeepSeeing can read culture and pattern, but it cannot tell you what is happening in your life. If the recurrence feels like weight, fear, or lost sleep, a conversation with someone you trust — or your GP — is worth more than any reading.',
    portrait: '',
    guarded: true
  };
}

export function stripMarkdownFences(text: string): string {
  return text.trim().replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/i, '');
}

export function isKeepSeeingReading(value: unknown): value is KeepSeeingReading {
  if (!value || typeof value !== 'object') {
    return false;
  }

  const candidate = value as Partial<KeepSeeingReading>;
  return typeof candidate.pattern === 'string'
    && typeof candidate.portrait === 'string'
    && (candidate.guarded === undefined || typeof candidate.guarded === 'boolean');
}

export function parseKeepSeeingJson(text: string): KeepSeeingReading {
  const normalized = stripMarkdownFences(text);
  const objectStart = normalized.indexOf('{');
  const objectEnd = normalized.lastIndexOf('}');

  if (objectStart === -1 || objectEnd === -1 || objectEnd < objectStart) {
    throw new Error('Anthropic text did not contain a JSON object');
  }

  const parsed = JSON.parse(normalized.slice(objectStart, objectEnd + 1)) as unknown;

  if (!isKeepSeeingReading(parsed)) {
    throw new Error('Anthropic response shape was invalid');
  }

  return {
    pattern: parsed.pattern.trim(),
    portrait: parsed.portrait.trim(),
    guarded: parsed.guarded === true
  };
}
