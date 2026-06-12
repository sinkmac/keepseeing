<script lang="ts">
  import { onMount } from 'svelte';
  import SiteFooter from '$lib/components/SiteFooter.svelte';
  import SiteHeader from '$lib/components/SiteHeader.svelte';
  import {
    exportLogAsText,
    formatHumanDate,
    groupSightings,
    readSightingsLog,
    type SightingGroup,
    type SightingsLog
  } from '$lib/sightings';

  let log = $state<SightingsLog>({ sightings: [] });
  let openGroup = $state<string | null>(null);
  let groups = $derived(groupSightings(log));

  onMount(() => {
    log = readSightingsLog();
  });

  function toggleGroup(group: SightingGroup) {
    openGroup = openGroup === group.key ? null : group.key;
  }

  function download(filename: string, content: string, type: string) {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = filename;
    anchor.click();
    URL.revokeObjectURL(url);
  }

  function exportJson() {
    download('keepseeing-log.json', JSON.stringify(log, null, 2), 'application/json');
  }

  function exportText() {
    download('keepseeing-log.txt', exportLogAsText(log), 'text/plain');
  }

  function exportLog() {
    exportJson();
    window.setTimeout(exportText, 100);
  }
</script>

<svelte:head>
  <title>Your sightings log — KeepSeeing</title>
  <meta name="description" content="Your private KeepSeeing sightings log. Stored on this device only, with JSON and text export." />
  <meta name="robots" content="noindex, follow" />
  <link rel="canonical" href="https://keepseeing.co.uk/log" />
</svelte:head>

<div class="page-shell page-shell--content">
  <SiteHeader />

  <main class="content-page log-page">
    <div class="content-kicker">sightings log</div>
    <h1 class="content-title">What has returned?</h1>
    <p class="content-meta">Stored on this device only. Clearing browser data deletes the log.</p>

    {#if groups.length === 0}
      <div class="empty-log">Nothing logged yet. When something turns up again, note it here.</div>
      <p><a class="content-link" href="/">Return to the tracker</a></p>
    {:else}
      <div class="export-actions">
        <button class="secondary-btn" type="button" onclick={exportLog}>download log as JSON and plain text</button>
      </div>

      <div class="log-groups">
        {#each groups as group (group.key)}
          <article class="log-group">
            <button class="log-group-head" type="button" onclick={() => toggleGroup(group)} aria-expanded={openGroup === group.key}>
              <span>
                <strong>{group.label}</strong>
                <small>{group.count} {group.count === 1 ? 'sighting' : 'sightings'} · first seen {formatHumanDate(group.firstSeen)} · last seen {formatHumanDate(group.lastSeen)}</small>
              </span>
              <span class="dot-row" aria-label={`${group.count} sightings`}>
                {#each group.sightings.slice(-24) as sighting (sighting.id)}
                  <i title={formatHumanDate(sighting.timestamp)}></i>
                {/each}
              </span>
            </button>

            {#if openGroup === group.key}
              <ol class="sighting-list">
                {#each group.sightings.slice().reverse() as sighting (sighting.id)}
                  <li>
                    <time datetime={sighting.timestamp}>{formatHumanDate(sighting.timestamp)}</time>
                    {#if sighting.note}<p>{sighting.note}</p>{/if}
                  </li>
                {/each}
              </ol>
            {/if}
          </article>
        {/each}
      </div>
    {/if}
  </main>

  <SiteFooter />
</div>
