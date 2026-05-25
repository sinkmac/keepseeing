<script lang="ts">
  import { tick } from 'svelte';
  import SiteFooter from '$lib/components/SiteFooter.svelte';
  import SiteHeader from '$lib/components/SiteHeader.svelte';
  import {
    buildKeepSeeingUserMessage,
    isKeepSeeingReading,
    KEEPSEEING_SYSTEM_PROMPT
  } from '$lib/keepseeing';

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
  let currentSubject = $state('');
  let pattern = $state('');
  let portrait = $state('');
  let errorMessage = $state('');
  let isLoading = $state(false);
  let isResultVisible = $state(false);
  let isPatternVisible = $state(false);
  let isPortraitVisible = $state(false);
  let isCopied = $state(false);
  let resultWrap: HTMLElement | null = null;
  let copyResetHandle: number | null = null;

  function fillInput(text: string) {
    subject = text;
  }

  function showError(message: string) {
    errorMessage = message;
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

  async function handleSubmit(event?: SubmitEvent) {
    event?.preventDefault();
    const trimmed = subject.trim();

    if (!trimmed) {
      showError('Type something first — a number, an animal, a sound, anything that keeps returning.');
      return;
    }

    errorMessage = '';
    isLoading = true;

    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          system: KEEPSEEING_SYSTEM_PROMPT,
          user: buildKeepSeeingUserMessage(trimmed)
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
    } catch {
      showError('connection error — try again in a moment');
    } finally {
      isLoading = false;
    }
  }

  async function copyResult() {
    if (!currentSubject || !pattern || !portrait) {
      return;
    }

    if (copyResetHandle) {
      clearTimeout(copyResetHandle);
    }

    const text = `What keeps finding me: ${currentSubject}\n\n${pattern}\n\n"${portrait}"\n\nkeepseeing.co.uk`;
    await navigator.clipboard.writeText(text);
    isCopied = true;
    copyResetHandle = window.setTimeout(() => {
      isCopied = false;
    }, 2000);
  }
</script>

<div class="page-shell">
  <SiteHeader />

  <main>
    <section class="hero">
      <div class="hero-eyebrow">a place for recurring things</div>
      <h1 class="hero-title">What keeps<br /><em>finding you?</em></h1>
      <p class="hero-sub">
        KeepSeeing is a free private recurring-things tracker. Type a number, animal, song, place,
        or sign that keeps appearing and get a quiet pattern reading. No account. No public profile.
      </p>
      <p class="hero-sub">
        Your prompt is sent to the model provider only to generate the reading. The site does not
        publish a profile or keep a public list. Save anything important yourself before clearing
        browser data.
      </p>

      <form class="input-wrap" onsubmit={handleSubmit}>
        <input
          class="input-field"
          bind:value={subject}
          type="text"
          maxlength="120"
          autocomplete="off"
          spellcheck="false"
          aria-label="What keeps finding you?"
        />
        <div class="input-hint">free to use · no account · no public profile</div>
        <button class="submit-btn" type="submit" disabled={isLoading}>
          {#if isLoading}
            <span><span class="spinner"></span>reading the pattern...</span>
          {:else}
            <span>Ask what it means →</span>
          {/if}
        </button>

        {#if errorMessage}
          <div class="error-msg" role="alert">{errorMessage}</div>
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

      <div class:visible={isPortraitVisible} class="portrait-card">
        <div class="portrait-label">a portrait</div>
        <div class="portrait-text">{portrait}</div>
      </div>

      <button class="share-hint" type="button" onclick={copyResult}>
        {#if isCopied}
          — copied —
        {:else}
          — copy this reading —
        {/if}
      </button>
    </section>
  </main>

  <SiteFooter />
</div>
