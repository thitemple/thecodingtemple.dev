<script lang="ts">
	import * as config from "$lib/config";
	import { formatDate } from "$lib/utils.js";
	import Hero from "./hero.svelte";
	import LatestPost from "./latest-post.svelte";
	export let data;
</script>

<svelte:head>
	<title>{config.title}</title>
</svelte:head>

<Hero />
<LatestPost post={data.post} />
