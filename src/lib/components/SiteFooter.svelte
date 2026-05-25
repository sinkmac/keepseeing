<script lang="ts">
  import { footerLinks } from '$lib/site-pages';
</script>

<footer class="site-footer">
  keepseeing.co.uk
  {#each footerLinks as link (link.href)}
    <span aria-hidden="true">&nbsp;·&nbsp;</span><a href={link.href} title={link.label}>{link.label}</a>
  {/each}
</footer>
