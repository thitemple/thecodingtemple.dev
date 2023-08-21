<script lang="ts">
	import { formatDate } from "$lib/utils";

	export let date: string;
	export let readTime: number;
</script>

<span>
	{formatDate(date)} •
	{#if readTime > 1}
		{readTime} mins read
	{/if}
	{#if readTime === 0}
		&lt; 1 min read
	{/if}
</span>
