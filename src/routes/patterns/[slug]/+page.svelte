<script lang="ts">
  let { data } = $props();
  let pattern = $derived(data.pattern);
  let related = $derived(data.related);
  let faqSchema = $derived(data.faqSchema);
</script>

<svelte:head>
  <title>{pattern.title} — KeepSeeing</title>
  <meta name="description" content={pattern.answer} />
  <link rel="canonical" href={`https://keepseeing.co.uk/patterns/${pattern.slug}`} />
  {@html `<script type="application/ld+json">${JSON.stringify(faqSchema)}</script>`}
</svelte:head>

<div class="page-shell page-shell--content">
  <header class="site-header shell-wide">
    <a class="logo" href="/" aria-label="KeepSeeing home"><span class="logo-dot"></span>keepseeing.co.uk</a>
  </header>

  <main class="content-page pattern-page">
    <div class="content-kicker">pattern</div>
    <h1 class="content-title">{pattern.title}</h1>
    <p class="lede-answer">{pattern.answer}</p>

    <div class="content-stack">
      {#each pattern.body as paragraph (paragraph)}
        <p>{paragraph}</p>
      {/each}
    </div>

    <section class="ask-card" aria-label={`Ask about your own ${pattern.thing}`}>
      <h2>Ask about your own {pattern.thing}</h2>
      <p>The static page can only name the wider pattern. The tracker can hold what has actually been turning up for you.</p>
      <a class="submit-link" href={`/?thing=${encodeURIComponent(pattern.thing)}`}>ask about your own {pattern.thing} →</a>
    </section>

    <section class="related-patterns" aria-label="Related patterns">
      <h2>Related patterns</h2>
      <div class="pattern-index-list">
        {#each related as item (item.slug)}
          <a class="pattern-index-card" href={`/patterns/${item.slug}`}>
            <strong>{item.thing}</strong>
            <span>{item.answer}</span>
          </a>
        {/each}
      </div>
    </section>

    <section class="faq-list" aria-label="Questions">
      <h2>Questions</h2>
      {#each pattern.faqs as faq (faq.question)}
        <details>
          <summary>{faq.question}</summary>
          <p>{faq.answer}</p>
        </details>
      {/each}
    </section>
  </main>

  <footer class="site-footer">
    keepseeing.co.uk
    <span aria-hidden="true">&nbsp;·&nbsp;</span><a href="/patterns" title="patterns">patterns</a>
    <span aria-hidden="true">&nbsp;·&nbsp;</span><a href="/log" title="log">log</a>
    <span aria-hidden="true">&nbsp;·&nbsp;</span><a href="/privacy" title="privacy">privacy</a>
  </footer>
</div>
