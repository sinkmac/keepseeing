export const SIGHTINGS_LOG_KEY = 'ks_log';

export type Sighting = {
  id: string;
  thing: string;
  thing_normalised: string;
  timestamp: string;
  note: string;
  reading_id: string | null;
};

export type SightingsLog = {
  sightings: Sighting[];
};

export type SightingGroup = {
  key: string;
  label: string;
  count: number;
  firstSeen: string;
  lastSeen: string;
  sightings: Sighting[];
};

const articlePattern = /^(a|an|the)\s+/i;

export function createId() {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

export function normaliseThing(value: string) {
  let normalised = value.toLowerCase().trim().replace(articlePattern, '').replace(/\s+/g, ' ');

  if (normalised.endsWith('pies') && normalised.length > 5) {
    normalised = normalised.slice(0, -1);
  } else if (normalised.endsWith('ies') && normalised.length > 4) {
    normalised = `${normalised.slice(0, -3)}y`;
  } else if (normalised.endsWith('s') && !normalised.endsWith('ss') && normalised.length > 3) {
    normalised = normalised.slice(0, -1);
  }

  return normalised;
}

export function emptyLog(): SightingsLog {
  return { sightings: [] };
}

export function readSightingsLog(): SightingsLog {
  if (typeof localStorage === 'undefined') return emptyLog();

  const raw = localStorage.getItem(SIGHTINGS_LOG_KEY);
  if (!raw) return emptyLog();

  try {
    const parsed = JSON.parse(raw) as Partial<SightingsLog>;
    if (!Array.isArray(parsed.sightings)) return emptyLog();

    return {
      sightings: parsed.sightings.filter((item): item is Sighting => {
        return Boolean(item)
          && typeof item.id === 'string'
          && typeof item.thing === 'string'
          && typeof item.thing_normalised === 'string'
          && typeof item.timestamp === 'string'
          && typeof item.note === 'string'
          && (typeof item.reading_id === 'string' || item.reading_id === null);
      })
    };
  } catch {
    return emptyLog();
  }
}

export function writeSightingsLog(log: SightingsLog) {
  if (typeof localStorage === 'undefined') return;
  localStorage.setItem(SIGHTINGS_LOG_KEY, JSON.stringify(log));
}

export function addSighting(thing: string, note = '', readingId: string | null = null, timestamp = new Date().toISOString()) {
  const trimmed = thing.trim();
  if (!trimmed) return null;

  const sighting: Sighting = {
    id: createId(),
    thing: trimmed,
    thing_normalised: normaliseThing(trimmed),
    timestamp,
    note: note.trim(),
    reading_id: readingId
  };

  const log = readSightingsLog();
  log.sightings = [...log.sightings, sighting];
  writeSightingsLog(log);
  return sighting;
}

export function groupSightings(log: SightingsLog): SightingGroup[] {
  const groups = new Map<string, Sighting[]>();

  for (const sighting of log.sightings) {
    const current = groups.get(sighting.thing_normalised) ?? [];
    current.push(sighting);
    groups.set(sighting.thing_normalised, current);
  }

  return [...groups.entries()]
    .map(([key, sightings]) => {
      const sorted = sightings.slice().sort((a, b) => Date.parse(a.timestamp) - Date.parse(b.timestamp));
      const last = sorted[sorted.length - 1];
      const label = last?.thing ?? key;
      return {
        key,
        label,
        count: sorted.length,
        firstSeen: sorted[0]?.timestamp ?? '',
        lastSeen: last?.timestamp ?? '',
        sightings: sorted
      };
    })
    .sort((a, b) => Date.parse(b.lastSeen) - Date.parse(a.lastSeen));
}

export function findSightingsForThing(thing: string, log = readSightingsLog()) {
  const key = normaliseThing(thing);
  return log.sightings
    .filter((sighting) => sighting.thing_normalised === key)
    .sort((a, b) => Date.parse(a.timestamp) - Date.parse(b.timestamp));
}

export function buildRecurrenceContext(thing: string, log = readSightingsLog()) {
  const sightings = findSightingsForThing(thing, log);
  if (!sightings.length) return '';

  const first = sightings[0];
  const recent = sightings.slice(-5).reverse().map((sighting) => {
    const note = sighting.note ? ` — ${sighting.note}` : '';
    return `${sighting.timestamp}${note}`;
  }).join('\n');

  return `The user has logged this ${sightings.length} ${sightings.length === 1 ? 'time' : 'times'} since ${first.timestamp}. Most recent sightings:\n${recent}\n\nWeave the shape of this recurrence into the pattern reading — frequency, gaps, clustering — without inventing sightings not listed.`;
}

export function formatHumanDate(timestamp: string) {
  const date = new Date(timestamp);
  if (Number.isNaN(date.getTime())) return timestamp;
  return new Intl.DateTimeFormat('en-GB', { dateStyle: 'medium', timeStyle: 'short' }).format(date);
}

export function exportLogAsText(log: SightingsLog) {
  const groups = groupSightings(log);
  if (!groups.length) return 'KeepSeeing sightings log\n\nNothing logged yet.';

  return groups.map((group) => {
    const rows = group.sightings.map((sighting) => {
      const note = sighting.note ? ` — ${sighting.note}` : '';
      return `- ${formatHumanDate(sighting.timestamp)}${note}`;
    }).join('\n');

    return `${group.label} (${group.count})\nFirst seen: ${formatHumanDate(group.firstSeen)}\nLast seen: ${formatHumanDate(group.lastSeen)}\n${rows}`;
  }).join('\n\n');
}
