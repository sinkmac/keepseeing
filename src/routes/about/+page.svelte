<script lang="ts">
  import SiteFooter from '$lib/components/SiteFooter.svelte';
  import SiteHeader from '$lib/components/SiteHeader.svelte';
  import { aboutPage } from '$lib/site-pages';
</script>

<div class="page-shell page-shell--content">
  <SiteHeader />

  <main class="content-page">
    <div class="content-kicker">about</div>
    <h1 class="content-title">{aboutPage.title}</h1>

    <div class="content-stack">
      {#each aboutPage.paragraphs as paragraph (paragraph)}
        <p>{paragraph}</p>
      {/each}

      <p>
        Contact: <a class="content-link" href={`mailto:${aboutPage.contactEmail}`}>{aboutPage.contactEmail}</a>
      </p>
    </div>
  </main>

  <SiteFooter />
</div>
