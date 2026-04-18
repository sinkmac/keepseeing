import { afterAll, beforeEach, describe, expect, it, vi } from 'vitest';

import { handler } from '../../netlify/functions/keepseeing.js';

const originalEnv = process.env.ANTHROPIC_API_KEY;

describe('keepseeing netlify function', () => {
  beforeEach(() => {
    process.env.ANTHROPIC_API_KEY = 'test-key';
    vi.restoreAllMocks();
  });

  it('rejects non-post requests', async () => {
    const response = await handler({ httpMethod: 'GET' });
    expect(response.statusCode).toBe(405);
  });

  it('requires both system and user strings', async () => {
    const response = await handler({ httpMethod: 'POST', body: JSON.stringify({ system: '', user: 'x' }) });
    expect(response.statusCode).toBe(400);
  });

  it('forwards the prompts to anthropic and returns parsed json fields', async () => {
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        content: [
          {
            type: 'text',
            text: '```json\n{"pattern":"Across traditions, 11:11 is a threshold number.","portrait":"It arrives like a watchful hinge in the day."}\n```'
          }
        ]
      })
    });

    vi.stubGlobal('fetch', fetchMock);

    const response = await handler({
      httpMethod: 'POST',
      body: JSON.stringify({ system: 'system text', user: 'user text' })
    });

    expect(fetchMock).toHaveBeenCalledWith(
      'https://api.anthropic.com/v1/messages',
      expect.objectContaining({
        method: 'POST',
        body: JSON.stringify({
          model: 'claude-haiku-4-5-20251001',
          max_tokens: 800,
          system: 'system text',
          messages: [{ role: 'user', content: 'user text' }]
        })
      })
    );

    expect(response.statusCode).toBe(200);
    expect(JSON.parse(response.body)).toEqual({
      pattern: 'Across traditions, 11:11 is a threshold number.',
      portrait: 'It arrives like a watchful hinge in the day.'
    });
  });
});

afterAll(() => {
  process.env.ANTHROPIC_API_KEY = originalEnv;
});
