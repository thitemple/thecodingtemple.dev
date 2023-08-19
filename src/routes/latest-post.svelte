<script lang="ts">
	import PostMeta from "$lib/components/post-meta.svelte";
	import type { Post } from "$lib/types";

	export let post: Post;

	let postLink = `/blog/${post.slug}`;
</script>

<section>
	<a href={postLink}>
		<h2>{post.title}</h2>
	</a>
	{#if post.cover}
		<img
			src="https://thecodingtemple.dev/images/real-immutable-types-with-typescript/banner-VXXNI2NR.png"
			alt={`Thumbnail for ${post.title}`}
		/>
	{/if}
	<p class="summary">
		{post.summary}
	</p>
	<p class="meta">
		<PostMeta date={post.date} readTime={post.readTime} />
	</p>
	<a href={postLink} class="button">Read more</a>
</section>

<style>
	section {
		display: grid;
		padding-block: var(--size-7);
		gap: var(--size-5);
		overflow: hidden;
	}

	h2 {
		font-size: var(--font-size-4);
	}

	img {
		aspect-ratio: var(--ration-widescreen);
		opacity: 0.9;
		width: 100%;
	}

	.summary {
		color: var(--text-2);
	}

	.meta {
		color: var(--text-2);
		font-size: var(--font-size-1);
	}

	a.button {
		border: 2px solid var(--brand);
		display: flex;
		justify-content: center;
		border-radius: var(--radius-2);
		width: 100%;
		text-transform: uppercase;
		transition: all 0.1s ease-in-out;
		margin: 0;
	}
	a.button:hover {
		background-color: var(--purple-1);
		text-decoration: none;
	}
</style>
