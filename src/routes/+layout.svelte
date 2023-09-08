<script lang="ts">
	import "$lib/assets/app.css";
	import { author } from "$lib/config";

	import Header from "$lib/components/header.svelte";
	import Footer from "$lib/components/footer.svelte";
	import { onNavigate } from "$app/navigation";

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition?.(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<svelte:head>
	<meta name="author" content={author} />
</svelte:head>

<div
	class="scr mx-auto grid h-full max-w-5xl grid-rows-[auto_1fr_auto] overflow-hidden bg-white px-4 dark:bg-violet-900 lg:px-8"
>
	<Header />
	<main class="my-2 lg:my-16">
		<slot />
	</main>
	<Footer />
</div>
