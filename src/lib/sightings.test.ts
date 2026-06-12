import { describe, expect, it, vi } from 'vitest';
import { addSighting, buildRecurrenceContext, exportLogAsText, groupSightings, normaliseThing, readSightingsLog } from './sightings';

const store = new Map<string, string>();
vi.stubGlobal('localStorage', {
  getItem: (key: string) => store.get(key) ?? null,
  setItem: (key: string, value: string) => store.set(key, value),
  removeItem: (key: string) => store.delete(key),
  clear: () => store.clear()
});

describe('sightings log', () => {
  it('normalises light variants for grouping', () => {
    expect(normaliseThing(' Magpies ')).toBe('magpie');
    expect(normaliseThing('a magpie')).toBe('magpie');
    expect(normaliseThing('the number 7')).toBe('number 7');
  });

  it('stores sightings and builds recurrence context', () => {
    store.clear();
    addSighting('Magpies', 'on the fence', 'r1', '2026-03-01T09:00:00Z');
    addSighting('a magpie', 'alone again', null, '2026-06-12T09:14:00Z');

    const log = readSightingsLog();
    const groups = groupSightings(log);
    expect(groups).toHaveLength(1);
    expect(groups[0].count).toBe(2);
    expect(buildRecurrenceContext('magpie', log)).toContain('The user has logged this 2 times since 2026-03-01T09:00:00Z');
    expect(exportLogAsText(log)).toContain('alone again');
  });
});
