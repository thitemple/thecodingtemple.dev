<script lang="ts">
	import { ArrowRight } from "lucide-svelte";
	import PostMeta from "$lib/components/post-meta.svelte";
	import type { Post } from "$lib/types";

	export let post: Post;

	let postLink = `/blog/${post.slug}`;
</script>

<section
	class="grid gap-6 overflow-hidden lg:grid-cols-2 lg:grid-rows-[auto_auto_1fr_auto_auto] lg:gap-0"
>
	<a href={postLink} class="lg:col-start-2">
		<h2 class="font-heading text-2xl text-slate-700 dark:text-slate-200">{post.title}</h2>
	</a>
	{#if post.cover}
		<img
			src="https://thecodingtemple.dev/images/real-immutable-types-with-typescript/banner-VXXNI2NR.png"
			alt={`Thumbnail for ${post.title}`}
			class="aspect-video w-full opacity-90 lg:col-start-1 lg:row-span-5 lg:row-start-1 lg:pr-4"
		/>
	{/if}
	<p class="text-slate-600 dark:text-slate-300 lg:col-start-2 lg:row-span-2 lg:row-start-3 lg:mt-4">
		{post.summary}
	</p>
	<p class="text-sm text-slate-600 dark:text-slate-300 lg:col-start-2 lg:mt-2">
		<PostMeta date={post.date} readTime={post.readTime} />
	</p>
	<a
		href={postLink}
		class="flex cursor-pointer justify-center rounded-lg border-2 border-fuchsia-500 bg-white px-4 py-2 uppercase text-fuchsia-500 shadow-md transition-colors duration-300 ease-in-out hover:border-pink-500 hover:bg-slate-100 hover:text-pink-500 dark:border-fuchsia-500 dark:bg-violet-700 dark:text-slate-200 dark:hover:bg-violet-500 dark:hover:text-slate-100 lg:col-start-2"
		>Read more
		<ArrowRight />
	</a>
</section>
