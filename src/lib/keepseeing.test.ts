import { describe, expect, it } from 'vitest';

import {
  buildKeepSeeingUserMessage,
  guardedReading,
  isKeepSeeingReading,
  KEEPSEEING_MAX_TOKENS,
  KEEPSEEING_MODEL,
  KEEPSEEING_SYSTEM_PROMPT,
  parseKeepSeeingJson,
  stripMarkdownFences,
  suggestsDistress
} from './keepseeing';

describe('keepseeing helpers', () => {
  it('locks the anthropic model contract', () => {
    expect(KEEPSEEING_MODEL).toBe('claude-haiku-4-5-20251001');
    expect(KEEPSEEING_MAX_TOKENS).toBe(800);
    expect(KEEPSEEING_SYSTEM_PROMPT).toContain('Return ONLY valid JSON');
    expect(KEEPSEEING_SYSTEM_PROMPT).toContain('"pattern"');
    expect(KEEPSEEING_SYSTEM_PROMPT).toContain('"portrait"');
    expect(KEEPSEEING_SYSTEM_PROMPT).toContain('Wellbeing guardrail');
  });

  it('builds the user message around the recurring thing', () => {
    expect(buildKeepSeeingUserMessage(' 11:11 ')).toBe(
      'What keeps finding me: 11:11\n\nWrite the pattern and portrait.'
    );
    expect(buildKeepSeeingUserMessage('magpie', 'The user has logged this 6 times since March.')).toContain(
      'The user has logged this 6 times since March.\n\nWhat keeps finding me: magpie'
    );
  });

  it('strips code fences before parsing', () => {
    expect(stripMarkdownFences('```json\n{"pattern":"P","portrait":"Q"}\n```')).toBe(
      '{"pattern":"P","portrait":"Q"}'
    );
  });

  it('parses and validates the reading shape', () => {
    const parsed = parseKeepSeeingJson('Prelude ```json\n{"pattern":"P","portrait":"Q"}\n``` tail');

    expect(parsed).toEqual({ pattern: 'P', portrait: 'Q', guarded: false });
    expect(isKeepSeeingReading(parsed)).toBe(true);
    expect(isKeepSeeingReading({ pattern: 'P' })).toBe(false);
    expect(() => parseKeepSeeingJson('{"pattern":1,"portrait":"Q"}')).toThrow(
      /shape was invalid/i
    );
  });

  it('detects distress and returns a guarded reading', () => {
    expect(suggestsDistress("the number follows me, I think it's a warning, I can't sleep")).toBe(true);
    expect(suggestsDistress("I keep seeing 33 everywhere lately, what's that about")).toBe(false);
    expect(guardedReading()).toEqual(expect.objectContaining({ guarded: true, portrait: '' }));
  });
});
