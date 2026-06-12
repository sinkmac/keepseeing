<script lang="ts">
  import SiteFooter from '$lib/components/SiteFooter.svelte';
  import SiteHeader from '$lib/components/SiteHeader.svelte';
  import { patternPages } from '$lib/patterns';
</script>

<svelte:head>
  <title>Pattern canon — KeepSeeing</title>
  <meta name="description" content="Index of KeepSeeing pattern pages for recurring numbers, animals, songs and signs." />
  <link rel="canonical" href="https://keepseeing.co.uk/patterns" />
</svelte:head>

<div class="page-shell page-shell--content">
  <SiteHeader />

  <main class="content-page">
    <div class="content-kicker">patterns</div>
    <h1 class="content-title">A small canon of returning things</h1>
    <div class="content-stack">
      <p>Static pages for recurring things people ask about often. Each one gives a plain answer, then sends you back to the tracker for your own version.</p>
      <div class="pattern-index-list">
        {#each patternPages as page (page.slug)}
          <a class="pattern-index-card" href={`/patterns/${page.slug}`}>
            <strong>{page.thing}</strong>
            <span>{page.answer}</span>
          </a>
        {/each}
      </div>
    </div>
  </main>

  <SiteFooter />
</div>
