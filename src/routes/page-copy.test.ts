import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';

describe('home page copy', () => {
  it('matches the reference interface copy and endpoint wiring', () => {
    const pagePath = path.resolve(import.meta.dirname, '+page.svelte');
    const page = fs.readFileSync(pagePath, 'utf8');

    expect(page).toContain('a place for recurring things');
    expect(page).toContain('What keeps');
    expect(page).toContain('finding you?');
    expect(page).toContain("A number. An animal. A song you didn't choose. A face.");
    expect(page).toContain('free to use · no accounts · no storage');
    expect(page).toContain('Ask what it means');
    expect(page).toContain('others have asked about');
    expect(page).toContain('the number 7');
    expect(page).toContain('a robin');
    expect(page).toContain('11:11');
    expect(page).toContain('a white feather');
    expect(page).toContain('a black cat');
    expect(page).toContain('the same song');
    expect(page).toContain('a magpie');
    expect(page).toContain('33');
    expect(page).toContain('/.netlify/functions/keepseeing');
    expect(page).toContain('— copy this reading —');
  });
});
