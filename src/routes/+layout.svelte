<script lang="ts">
  import favicon from '$lib/assets/favicon.svg';
  import { siteSeo } from '$lib/site-seo';
  import '../app.css';

  let { children } = $props();
</script>

<svelte:head>
  <title>{siteSeo.title}</title>
  <link rel="icon" href={favicon} />
  <meta name="description" content={siteSeo.description} />
  <meta name="robots" content={siteSeo.robots} />
  <link rel="canonical" href={siteSeo.url} />
  <meta property="og:title" content={siteSeo.title} />
  <meta property="og:description" content={siteSeo.ogDescription} />
  <meta property="og:url" content={siteSeo.url} />
  <meta property="og:type" content={siteSeo.ogType} />
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "name": "KeepSeeing",
          "url": "https://keepseeing.co.uk",
          "description": "KeepSeeing is a free private recurring-things tracker. Type a number, animal, song, place, or sign that keeps appearing and get a quiet pattern reading. No account. No public profile."
        },
        {
          "@type": "WebApplication",
          "name": "KeepSeeing",
          "url": "https://keepseeing.co.uk",
          "description": "KeepSeeing is a free private recurring-things tracker. Type a number, animal, song, place, or sign that keeps appearing and get a quiet pattern reading. No account. No public profile.",
          "applicationCategory": "LifestyleApplication",
          "operatingSystem": "Web",
          "offers": { "@type": "Offer", "price": "0", "priceCurrency": "GBP" }
        },
        {
          "@type": "Organization",
          "name": "AI Scotland Productions",
          "url": "https://aiscotlandproductions.com"
        }
      ]
    }
  </script>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link
    href="https://fonts.googleapis.com/css2?family=IM+Fell+English:ital@0;1&family=Inconsolata:wght@300;400;500&display=swap"
    rel="stylesheet"
  />
</svelte:head>

{@render children()}
