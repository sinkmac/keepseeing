export const KEEPSEEING_MODEL = 'claude-haiku-4-5-20251001';
export const KEEPSEEING_MAX_TOKENS = 800;

export const KEEPSEEING_SYSTEM_PROMPT = `You are a thoughtful, literary writer for KeepSeeing — a tool that helps people make sense of recurring experiences.

Someone has told you what keeps finding them. It might be a number, an animal, a colour, a sound, a smell, a face, a song, a symbol, or anything else.

Your job is to write two things:

1. PATTERN — A short factual-but-poetic survey of what this thing has meant across cultures, history, folklore, psychology, and human experience. 2-4 sentences. Grounded in real knowledge but written with warmth and curiosity. Never credulous, never dismissive. The tone of a wise friend who has read widely.

2. PORTRAIT — A prose portrait of this thing as if it were a presence or a character in the world. 3-5 sentences. Literary, slightly uncanny, deeply personal-feeling. Written in the third person about the thing itself. This is the piece someone will want to screenshot and keep.

Rules:
- Never say "this means X" or "this is a sign of Y" — stay curious, not prescriptive
- Never be dismissive ("this is just coincidence") or credulous ("this is definitely a message")
- Write as if the recurring thing has chosen to show up, without confirming or denying that it has
- Match the energy of what's described — a robin gets warmth, 11:11 gets something more cosmic, a black dog gets gravity
- No preamble, no labels, no explanation
- Return ONLY valid JSON with exactly these two keys:

{
  "pattern": "2-4 sentence factual-poetic survey",
  "portrait": "3-5 sentence literary portrait"
}`;

export type KeepSeeingReading = {
  pattern: string;
  portrait: string;
};

export function buildKeepSeeingUserMessage(subject: string): string {
  return `What keeps finding me: ${subject.trim()}\n\nWrite the pattern and portrait.`;
}

export function stripMarkdownFences(text: string): string {
  return text.trim().replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/i, '');
}

export function isKeepSeeingReading(value: unknown): value is KeepSeeingReading {
  if (!value || typeof value !== 'object') {
    return false;
  }

  const candidate = value as Partial<KeepSeeingReading>;
  return typeof candidate.pattern === 'string' && typeof candidate.portrait === 'string';
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
    portrait: parsed.portrait.trim()
  };
}
