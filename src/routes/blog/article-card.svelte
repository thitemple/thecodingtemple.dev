<script lang="ts">
	import OutlineLink from "$lib/components/outline-link.svelte";
	import PostMeta from "$lib/components/post-meta.svelte";
	import type { Post } from "$lib/types";
	import { cn } from "$lib/utils";
	import { ArrowRight } from "lucide-svelte";

	export let post: Post;
	export let featured = false;

	const shouldShowBanner = post.cover && !featured;
	const hasFeaturedBanner = post.cover && featured;
	const postUrl = `/blog/${post.slug}`;
</script>

<div
	class={cn(
		"flex flex-col gap-x-6 gap-y-4 py-4 md:rounded-md md:border md:border-slate-200 md:p-6 md:py-8 dark:md:border-pink-300/40 lg:px-8",
		{
			"lg:first:col-span-2": featured
		}
	)}
>
	<div>
		<a href={postUrl} class=" lg:mt-4">
			<h2
				style:--post-title={`title-${post.slug}`}
				class="font-heading text-2xl text-slate-700 [view-transition-name:var(--post-title)] dark:text-slate-200"
			>
				{post.title}
			</h2>
		</a>
		<p class="text-sm text-slate-500 dark:text-slate-400 lg:mt-2">
			<PostMeta date={post.date} readTime={post.readTime} />
		</p>
	</div>
	{#if hasFeaturedBanner}
		<img
			src={post.cover}
			alt={`Banner for ${post.title}`}
			style:--post-cover={`cover-${post.slug}`}
			class={`max-h-60 w-full object-none object-center [view-transition-name:var(--post-cover)]`}
		/>
	{/if}
	{#if shouldShowBanner}
		<img
			src={post.cover}
			alt={`Thumbnail for ${post.title}`}
			style:--post-cover={`cover-${post.slug}`}
			class={`aspect-auto object-cover opacity-90 [view-transition-name:var(--post-cover)] lg:pr-4`}
		/>
	{/if}
	<p class="flex-1 text-slate-600 dark:text-slate-300 lg:mt-4">
		{post.summary}
	</p>
	<p class="md:self-center lg:self-start">
		<OutlineLink href={postUrl}>
			Read more
			<ArrowRight slot="icon" />
		</OutlineLink>
	</p>
</div>
