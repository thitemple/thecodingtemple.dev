<script lang="ts">
	import * as config from "$lib/config";
	import Hero from "./hero.svelte";
	import LatestPost from "./latest-post.svelte";
	export let data;
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<Hero />
{#if data.post}
	<LatestPost post={data.post} />
{/if}
