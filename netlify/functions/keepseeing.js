import {
  KEEPSEEING_MAX_TOKENS,
  KEEPSEEING_MODEL,
  isKeepSeeingReading,
  parseKeepSeeingJson
} from '../../src/lib/keepseeing.ts';

function json(statusCode, body) {
  return {
    statusCode,
    headers: {
      'content-type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify(body)
  };
}

function parsePayload(body) {
  if (!body) {
    return null;
  }

  try {
    const parsed = JSON.parse(body);

    if (
      !parsed ||
      typeof parsed !== 'object' ||
      typeof parsed.system !== 'string' ||
      !parsed.system.trim() ||
      typeof parsed.user !== 'string' ||
      !parsed.user.trim()
    ) {
      return null;
    }

    return {
      system: parsed.system.trim(),
      user: parsed.user.trim()
    };
  } catch {
    return null;
  }
}

function extractAnthropicText(responseBody) {
  if (!responseBody || typeof responseBody !== 'object' || !Array.isArray(responseBody.content)) {
    throw new Error('Anthropic response missing content');
  }

  const textBlock = responseBody.content.find(
    (block) => block && typeof block === 'object' && block.type === 'text' && typeof block.text === 'string'
  );

  if (!textBlock) {
    throw new Error('Anthropic response missing text block');
  }

  return textBlock.text;
}

export async function handler(event) {
  if (event.httpMethod !== 'POST') {
    return json(405, { error: 'Method Not Allowed' });
  }

  const payload = parsePayload(event.body);
  if (!payload) {
    return json(400, { error: 'Invalid payload' });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return json(500, { error: 'Missing ANTHROPIC_API_KEY' });
  }

  try {
    const anthropicResponse = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: KEEPSEEING_MODEL,
        max_tokens: KEEPSEEING_MAX_TOKENS,
        system: payload.system,
        messages: [
          {
            role: 'user',
            content: payload.user
          }
        ]
      })
    });

    if (!anthropicResponse.ok) {
      throw new Error(`Anthropic request failed with status ${anthropicResponse.status}`);
    }

    const anthropicBody = await anthropicResponse.json();
    const reading = parseKeepSeeingJson(extractAnthropicText(anthropicBody));

    if (!isKeepSeeingReading(reading)) {
      throw new Error('Anthropic response shape was invalid');
    }

    return json(200, reading);
  } catch (error) {
    console.error('keepseeing function failed', error);
    return json(500, { error: 'Failed to generate reading' });
  }
}
