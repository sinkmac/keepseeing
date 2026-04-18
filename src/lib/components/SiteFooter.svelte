<script lang="ts">
  import { footerLinks } from '$lib/site-pages';
</script>

<footer class="site-footer">
  keepseeing.com
  {#each footerLinks as link, index (link.href)}
    <span aria-hidden="true">&nbsp;·&nbsp;</span><a href={link.href}>{link.label}</a>
  {/each}
</footer>
