import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';

describe('home page copy', () => {
  it('matches the tracker interface copy and endpoint wiring', () => {
    const pagePath = path.resolve(import.meta.dirname, '+page.svelte');
    const page = fs.readFileSync(pagePath, 'utf8');

    expect(page).toContain('a place for recurring things');
    expect(page).toContain('What keeps');
    expect(page).toContain('finding you?');
    expect(page).toContain('KeepSeeing is a free, private tracker for recurring things.');
    expect(page).toContain('Logged on this device only. Nothing leaves your browser except the reading request.');
    expect(page).toContain('Log and ask what it means');
    expect(page).toContain('just noting it');
    expect(page).toContain('view sightings log');
    expect(page).toContain('A reading of culture and pattern — not prophecy, not diagnosis.');
    expect(page).toContain('share portrait card');
    expect(page).toContain('download PNG');
    expect(page).toContain('copy text fallback');
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
  });
});
