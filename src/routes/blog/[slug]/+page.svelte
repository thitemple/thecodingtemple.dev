<script lang="ts">
	import * as config from "$lib/config";
	import Title from "$lib/components/title.svelte";
	import { formatDate } from "$lib/utils.js";

	export let data;
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
	<meta property="og:url" content={data.meta.url}>
	<meta property="description" content={data.meta.summary}>
	{#if data.cover}
		<meta property="twitter:image" content={data.cover}>
		<meta property="og:image" content={data.cover}>
	{/if}
	<meta property="twitter:title" content={data.meta.title}>
	<meta property="twitter:creator" content={config.twitterHandle}>
	<meta property="twitter:description" content={data.meta.summary}>
	<meta property="twitter:card" content="summary">
	<link rel="stylesheet" href="https://unpkg.com/dracula-prism/dist/css/dracula-prism.min.css" />
</svelte:head>

<article class="mx-auto grid max-w-prose gap-4 md:gap-6">
	<hgroup>
		<Title
			classes="mb-4 leading-10 lg:leading-loose underline decoration-violet-500 decoration-double decoration-4 underline-offset-8 dark:decoration-pink-500"
			>{data.meta.title}</Title
		>
		<p class="text-sm text-slate-700 dark:text-slate-300 lg:mt-2">
			Published at {formatDate(data.meta.date)}
		</p>
	</hgroup>

	{#if data.cover}
		<div>
			<img src={data.cover} alt={`Cover for ${data.meta.title}`} class="w-full object-cover" />
		</div>
	{/if}

	<div class="hidden gap-4">
		{#each data.meta.categories as category}
			<span class="rounded-3xl bg-zinc-200 px-3 py-2">&num;{category}</span>
		{/each}
	</div>

	<div class="prose prose-slate overflow-hidden dark:prose-invert">
		<svelte:component this={data.content} />
	</div>
</article>
