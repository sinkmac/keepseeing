<script lang="ts">
  import { page } from '$app/state';
  import favicon from '$lib/assets/favicon.svg';
  import { siteSeo } from '$lib/site-seo';
  import '../app.css';

  let { children } = $props();

  const routeSeo = $derived.by(() => {
    const path = page.url.pathname.replace(/\/$/, '') || '/';
    if (path === '/about') {
      return {
        title: 'About KeepSeeing — quiet recurring-things tracker',
        description:
          'About KeepSeeing: a quiet private tool for naming numbers, animals, songs, places, or signs that keep appearing without claiming certainty or diagnosis.',
        url: `${siteSeo.url}/about`
      };
    }
    if (path === '/privacy') {
      return {
        title: 'Privacy — KeepSeeing',
        description:
          'KeepSeeing privacy: no account, no public profile, and prompts are sent only long enough to generate a reading through the model provider.',
        url: `${siteSeo.url}/privacy`
      };
    }
    return {
      title: siteSeo.title,
      description: siteSeo.description,
      url: siteSeo.url
    };
  });
</script>

<svelte:head>
  <title>{routeSeo.title}</title>
  <link rel="icon" href={favicon} />
  <meta name="description" content={routeSeo.description} />
  <meta name="robots" content={siteSeo.robots} />
  <link rel="canonical" href={routeSeo.url} />
  <meta property="og:title" content={routeSeo.title} />
  <meta property="og:description" content={routeSeo.description} />
  <meta property="og:url" content={routeSeo.url} />
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
