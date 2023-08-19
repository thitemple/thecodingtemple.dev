<script lang="ts">
	import "open-props/style";
	import "open-props/normalize";
	import "open-props/buttons";
	import "$lib/assets/app.css";

	import Header from "$lib/components/header.svelte";
	import Footer from "$lib/components/footer.svelte";
	import PageTransition from "$lib/components/transition.svelte";

	export let data;
</script>

<div class="layout">
	<Header />
	<main>
		<PageTransition url={data.url}>
			<slot />
		</PageTransition>
	</main>
	<Footer />
</div>

<style>
	.layout {
		height: 100%;
		max-inline-size: 1024px;
		display: grid;
		grid-template-rows: auto 1fr auto;
		margin-inline: auto;
		background-color: var(--surface-1);
		padding-inline: var(--size-3);
	}

	main {
		margin-block: var(--size-2);
		overflow-x: hidden;
	}

	@media (min-width: 1024px) {
		.layout {
			padding-inline: var(--size-7);
		}
		main {
			margin-block: var(--size-9);
		}
	}
</style>
