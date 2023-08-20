<script lang="ts">
	import Toggle from "./toggle.svelte";
	import symbolDark from "$lib/assets/img/symbol-dark-mode.svg";
	import symbolLight from "$lib/assets/img/symbol-transparent.svg";
	import logoDark from "$lib/assets/img/logo-dark-mode.svg";
	import logoLight from "$lib/assets/img/logo-transparent.svg";
	import { ChevronDown } from "lucide-svelte";
</script>

<nav class="relative flex items-center justify-between py-5 lg:py-8">
	<a href="/">
		<picture class="hidden dark:block">
			<source srcset={logoDark} media="(min-width: 1024px)" />
			<source srcset={symbolDark} />
			<img src={symbolLight} alt="The Coding Temple logo" class="w-10 lg:w-48" />
		</picture>

		<picture class="dark:hidden">
			<source srcset={logoLight} media="(min-width: 1024px)" />
			<source srcset={symbolLight} />
			<img src={symbolLight} alt="The Coding Temple logo" class="w-10 lg:w-48" />
		</picture>
	</a>

	<div class="hidden lg:flex">
		<ul
			class="flex items-center gap-4 rounded-xl border border-slate-300 bg-white px-4 py-2 text-slate-600 shadow-md ring-1 ring-slate-300 dark:border-slate-400 dark:bg-violet-700 dark:text-slate-200 dark:ring-slate-400"
		>
			<li>
				<a href="/blog">Blog</a>
			</li>
			<li>
				<a href="/about">Courses</a>
			</li>
			<li>
				<a href="/about">About</a>
			</li>
			<li>
				<a href="/rss.xml" target="_blank">RSS</a>
			</li>
		</ul>
	</div>
	<div class="hidden lg:block">
		<Toggle />
	</div>
	<button
		title="Toggle mobile menu"
		class="group flex items-center rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-800 shadow-md shadow-slate-800/5 ring-1 ring-slate-900/5 backdrop-blur dark:bg-violet-700 dark:text-slate-200 dark:shadow-slate-700 dark:ring-slate-300 lg:hidden"
	>
		Menu
		<ChevronDown />
	</button>
</nav>
