<script lang="ts">
	import Toggle from "../toggle.svelte";
	import MobileNavItem from "./mobile-nav-item.svelte";

	export let open = false;

	let dialog: HTMLDialogElement;

	$: if (dialog && open) {
		dialog.showModal();
	}

	function handleClose() {
		dialog.close();
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<dialog
	bind:this={dialog}
	on:click|self={handleClose}
	on:close={() => (open = false)}
	class="backdrop:bg-gray-900/50 z-50 w-5/6 rounded-2xl bg-slate-100 px-4 py-6 backdrop:backdrop-blur-sm dark:bg-violet-700"
>
	<div>
		<header class="flex justify-between text-slate-500 dark:text-slate-200">
			<h2>Navigation</h2>
			<button on:click={handleClose}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="h-6 w-6"
				>
					<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
				</svg>
			</button>
		</header>
		<ul class="mt-6 flex flex-col text-lg text-slate-600 dark:text-slate-200">
			<MobileNavItem on:click={handleClose} to="/">Home</MobileNavItem>
			<MobileNavItem on:click={handleClose} to="/blog">Blog</MobileNavItem>
			<MobileNavItem on:click={handleClose} to="/courses">Courses</MobileNavItem>
			<MobileNavItem on:click={handleClose} to="/about">About</MobileNavItem>
			<li
				class="border-b border-slate-200 py-4 last:border-0 focus:bg-slate-300 dark:focus:bg-violet-500"
			>
				<Toggle />
			</li>
		</ul>
	</div>
</dialog>

<style>
	dialog[open] {
		animation: fly 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes fly {
		from {
			transform: translateY(-50px);
		}
		to {
			transform: translateY(0);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	button {
		display: block;
	}
</style>
