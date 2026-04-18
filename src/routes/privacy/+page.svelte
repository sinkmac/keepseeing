<script lang="ts">
  import SiteFooter from '$lib/components/SiteFooter.svelte';
  import SiteHeader from '$lib/components/SiteHeader.svelte';
  import { privacyPage } from '$lib/site-pages';
</script>

<div class="page-shell page-shell--content">
  <SiteHeader />

  <main class="content-page">
    <div class="content-kicker">privacy</div>
    <h1 class="content-title">{privacyPage.title}</h1>
    <p class="content-meta">{privacyPage.lastUpdated}</p>

    <div class="content-stack">
      {#each privacyPage.sections as section (section.heading)}
        <section class="policy-section">
          <h2>{section.heading}</h2>
          <p>{section.body}</p>
        </section>
      {/each}
    </div>
  </main>

  <SiteFooter />
</div>
