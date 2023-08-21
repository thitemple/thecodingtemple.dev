<script lang="ts">
	import "$lib/assets/app.css";

	import Header from "$lib/components/header.svelte";
	import Footer from "$lib/components/footer.svelte";
	import PageTransition from "$lib/components/transition.svelte";

	export let data;
</script>

<div
	class="mx-auto grid h-full max-w-5xl grid-rows-[auto_1fr_auto] overflow-hidden bg-white px-4 dark:bg-violet-900 lg:px-8"
>
	<Header />
	<main class="my-2 lg:my-16">
		<PageTransition url={data.url}>
			<slot />
		</PageTransition>
	</main>
	<Footer />
</div>
