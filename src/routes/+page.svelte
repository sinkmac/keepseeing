<script lang="ts">
  import { onMount, tick } from 'svelte';
  import SiteFooter from '$lib/components/SiteFooter.svelte';
  import SiteHeader from '$lib/components/SiteHeader.svelte';
  import {
    buildKeepSeeingUserMessage,
    isKeepSeeingReading,
    KEEPSEEING_SYSTEM_PROMPT
  } from '$lib/keepseeing';
  import {
    addSighting,
    buildRecurrenceContext,
    findSightingsForThing,
    normaliseThing,
    type Sighting
  } from '$lib/sightings';

  const apiEndpoint = '/.netlify/functions/keepseeing';
  const examplePills = [
    'the number 7',
    'a robin',
    '11:11',
    'a white feather',
    'a black cat',
    'the same song',
    'a magpie',
    '33'
  ] as const;

  let subject = $state('');
  let note = $state('');
  let currentSubject = $state('');
  let pattern = $state('');
  let portrait = $state('');
  let errorMessage = $state('');
  let logMessage = $state('');
  let isLoading = $state(false);
  let isResultVisible = $state(false);
  let isPatternVisible = $state(false);
  let isPortraitVisible = $state(false);
  let isCopied = $state(false);
  let isCardBusy = $state(false);
  let loggedSightings = $state<Sighting[]>([]);
  let resultWrap: HTMLElement | null = null;
  let copyResetHandle: number | null = null;

  onMount(() => {
    const params = new URLSearchParams(window.location.search);
    const thing = params.get('thing');
    if (thing) {
      subject = thing;
      refreshSightings(thing);
    }
  });

  function fillInput(text: string) {
    subject = text;
    refreshSightings(text);
  }

  function showError(message: string) {
    errorMessage = message;
  }

  function refreshSightings(value = subject) {
    loggedSightings = value.trim() ? findSightingsForThing(value) : [];
  }

  function recurrenceLine() {
    if (!loggedSightings.length) return '';
    const first = new Date(loggedSightings[0].timestamp).toLocaleDateString('en-GB', { month: 'short', day: 'numeric', year: 'numeric' });
    return `You have logged ${normaliseThing(subject || currentSubject)} ${loggedSightings.length} ${loggedSightings.length === 1 ? 'time' : 'times'} since ${first}.`;
  }

  async function showResult(nextSubject: string, nextPattern: string, nextPortrait: string) {
    currentSubject = nextSubject;
    pattern = nextPattern;
    portrait = nextPortrait;
    isPatternVisible = false;
    isPortraitVisible = false;
    isResultVisible = true;
    await tick();
    resultWrap?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.setTimeout(() => {
      isPatternVisible = true;
    }, 100);
    window.setTimeout(() => {
      isPortraitVisible = true;
    }, 300);
  }

  function logOnly() {
    const trimmed = subject.trim();
    if (!trimmed) {
      showError('Type something first — a number, an animal, a sound, anything that keeps returning.');
      return;
    }
    const sighting = addSighting(trimmed, note);
    if (!sighting) return;
    errorMessage = '';
    logMessage = `Logged on this device: ${sighting.thing}.`;
    note = '';
    refreshSightings(trimmed);
  }

  async function handleSubmit(event?: SubmitEvent) {
    event?.preventDefault();
    const trimmed = subject.trim();

    if (!trimmed) {
      showError('Type something first — a number, an animal, a sound, anything that keeps returning.');
      return;
    }

    const readingId = crypto.randomUUID();
    addSighting(trimmed, note, readingId);
    const recurrenceContext = buildRecurrenceContext(trimmed);
    refreshSightings(trimmed);

    errorMessage = '';
    logMessage = `Logged on this device: ${trimmed}.`;
    isLoading = true;

    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          system: KEEPSEEING_SYSTEM_PROMPT,
          user: buildKeepSeeingUserMessage(trimmed, recurrenceContext)
        })
      });

      if (!response.ok) {
        const errorBody = (await response.json().catch(() => ({}))) as { error?: string };
        showError(errorBody.error ?? 'something went wrong — try again in a moment');
        return;
      }

      const data = (await response.json()) as unknown;
      if (!isKeepSeeingReading(data)) {
        showError('something went wrong — try again in a moment');
        return;
      }

      await showResult(trimmed, data.pattern, data.portrait);
      note = '';
    } catch {
      showError('connection error — try again in a moment');
    } finally {
      isLoading = false;
    }
  }

  async function copyResult() {
    if (!currentSubject || !pattern) {
      return;
    }

    if (copyResetHandle) {
      clearTimeout(copyResetHandle);
    }

    const text = `What keeps finding me: ${currentSubject}\n\n${pattern}${portrait ? `\n\n"${portrait}"` : ''}\n\nkeepseeing.co.uk`;
    await navigator.clipboard.writeText(text);
    isCopied = true;
    copyResetHandle = window.setTimeout(() => {
      isCopied = false;
    }, 2000);
  }

  function cardPortraitText() {
    const words = portrait.trim().split(/\s+/);
    if (words.length <= 90) return portrait.trim();
    return `${words.slice(0, 90).join(' ')} —`;
  }

  async function renderShareCard() {
    if (!currentSubject || !portrait) return null;
    const canvas = document.createElement('canvas');
    canvas.width = 1080;
    canvas.height = 1350;
    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    ctx.fillStyle = '#0c0b09';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#161410';
    ctx.fillRect(70, 70, 940, 1210);
    ctx.strokeStyle = 'rgba(200, 146, 42, 0.45)';
    ctx.lineWidth = 3;
    ctx.strokeRect(70, 70, 940, 1210);

    ctx.fillStyle = '#c8922a';
    ctx.font = '36px Georgia, serif';
    ctx.fillText(currentSubject.toLowerCase(), 120, 150);

    ctx.fillStyle = '#e8e0cc';
    ctx.font = 'italic 58px Georgia, serif';
    const words = cardPortraitText().split(' ');
    const lines: string[] = [];
    let line = '';
    for (const word of words) {
      const test = `${line}${line ? ' ' : ''}${word}`;
      if (ctx.measureText(test).width > 820 && line) {
        lines.push(line);
        line = word;
      } else {
        line = test;
      }
    }
    if (line) lines.push(line);
    lines.slice(0, 13).forEach((row, index) => ctx.fillText(row, 120, 280 + index * 78));

    ctx.fillStyle = '#a89880';
    ctx.font = '28px Inconsolata, monospace';
    ctx.fillText('keepseeing.co.uk', 120, 1210);

    return await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, 'image/png'));
  }

  async function downloadShareCard() {
    isCardBusy = true;
    try {
      const blob = await renderShareCard();
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `keepseeing-${normaliseThing(currentSubject)}.png`;
      a.click();
      URL.revokeObjectURL(url);
    } finally {
      isCardBusy = false;
    }
  }

  async function shareCard() {
    isCardBusy = true;
    try {
      const blob = await renderShareCard();
      if (!blob) return;
      const file = new File([blob], `keepseeing-${normaliseThing(currentSubject)}.png`, { type: 'image/png' });
      const nav = navigator as Navigator & { canShare?: (data: ShareData) => boolean };
      if (navigator.share && (!nav.canShare || nav.canShare({ files: [file] }))) {
        await navigator.share({ files: [file], title: 'KeepSeeing', text: currentSubject });
      } else {
        await downloadShareCard();
      }
    } finally {
      isCardBusy = false;
    }
  }
</script>

<div class="page-shell">
  <SiteHeader />

  <main>
    <section class="hero">
      <div class="hero-eyebrow">a place for recurring things</div>
      <h1 class="hero-title">What keeps<br /><em>finding you?</em></h1>
      <p class="hero-sub">
        KeepSeeing is a free, private tracker for recurring things. Log the number, animal, song,
        place, or sign that keeps appearing, watch the pattern build, and get a reading grounded in
        folklore, psychology, and ordinary life.
      </p>
      <p class="hero-sub">
        No account. Nothing stored off your device except the reading request. Save anything
        important yourself before clearing browser data.
      </p>

      <form class="input-wrap" onsubmit={handleSubmit}>
        <input
          class="input-field"
          bind:value={subject}
          oninput={(event) => refreshSightings((event.currentTarget as HTMLInputElement).value)}
          type="text"
          maxlength="120"
          autocomplete="off"
          spellcheck="false"
          aria-label="What keeps finding you?"
        />
        <textarea
          class="note-field"
          bind:value={note}
          maxlength="280"
          rows="2"
          placeholder="optional note — where, when, how it arrived"
          aria-label="Optional sighting note"
        ></textarea>
        <div class="input-hint">Logged on this device only. Nothing leaves your browser except the reading request.</div>
        {#if recurrenceLine()}
          <div class="recurrence-hint">{recurrenceLine()}</div>
        {/if}
        <button class="submit-btn" type="submit" disabled={isLoading}>
          {#if isLoading}
            <span><span class="spinner"></span>reading the pattern...</span>
          {:else}
            <span>Log and ask what it means →</span>
          {/if}
        </button>
        <button class="secondary-btn" type="button" onclick={logOnly}>just noting it</button>
        <a class="log-link" href="/log">view sightings log</a>

        {#if errorMessage}
          <div class="error-msg" role="alert">{errorMessage}</div>
        {/if}
        {#if logMessage}
          <div class="log-msg" role="status">{logMessage}</div>
        {/if}
      </form>

      <div class="examples">
        <div class="examples-label">others have asked about</div>
        <div class="examples-pills">
          {#each examplePills as example (example)}
            <button class="pill" type="button" onclick={() => fillInput(example)}>{example}</button>
          {/each}
        </div>
      </div>
    </section>

    <hr class="divider" />

    <section class:visible={isResultVisible} bind:this={resultWrap} class="result-wrap" aria-live="polite">
      <div class="result-subject">{currentSubject}</div>

      <div class:visible={isPatternVisible} class="pattern-card">
        <div class="pattern-label">what the world has made of it</div>
        <div class="pattern-text">{pattern}</div>
      </div>

      {#if portrait}
        <div class:visible={isPortraitVisible} class="portrait-card">
          <div class="portrait-label">a portrait</div>
          <div class="portrait-text">{portrait}</div>
        </div>

        <div class="share-actions" aria-label="Share this portrait">
          <button class="share-hint" type="button" onclick={shareCard} disabled={isCardBusy}>— share portrait card —</button>
          <button class="share-hint" type="button" onclick={downloadShareCard} disabled={isCardBusy}>— download PNG —</button>
        </div>
      {/if}

      <button class="share-hint" type="button" onclick={copyResult}>
        {#if isCopied}
          — copied —
        {:else}
          — copy text fallback —
        {/if}
      </button>

      <p class="tool-disclaimer">A reading of culture and pattern — not prophecy, not diagnosis.</p>
    </section>
  </main>

  <SiteFooter />
</div>
