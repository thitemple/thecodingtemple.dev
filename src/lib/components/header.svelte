<script lang="ts">
	import Toggle from "./toggle.svelte";
	import symbolDark from "$lib/assets/img/symbol-dark-mode.svg";
	import symbolLight from "$lib/assets/img/symbol-transparent.svg";
	import logoDark from "$lib/assets/img/logo-dark-mode.svg";
	import logoLight from "$lib/assets/img/logo-transparent.svg";
	import { ChevronDown } from "lucide-svelte";
</script>

<nav>
	<a href="/">
		<picture class="logo-dark">
			<source srcset={logoDark} media="(min-width: 1024px)" />
			<source srcset={symbolDark} />
			<img src={symbolLight} alt="The Coding Temple logo" class="logo" />
		</picture>

		<picture class="logo-light">
			<source srcset={logoLight} media="(min-width: 1024px)" />
			<source srcset={symbolLight} />
			<img src={symbolLight} alt="The Coding Temple logo" class="logo" />
		</picture>
	</a>

	<ul class="links">
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
	<div class="toggle">
		<Toggle />
	</div>
	<button title="Toggle mobile menu">
		Menu
		<ChevronDown />
	</button>
</nav>

<style>
	.logo-dark {
		display: none;
	}

	:global(html[color-scheme="dark"]) .logo-dark {
		display: block;
	}

	:global(html[color-scheme="dark"]) .logo-light {
		display: none;
	}

	button {
		border-radius: var(--radius-3);
	}

	nav {
		display: flex;
		position: relative;
		padding: var(--size-4) 0;
		justify-content: space-between;
	}

	.toggle {
		display: none;
	}

	.logo {
		height: var(--size-8);
	}

	.links {
		margin-block: var(--size-7);
		border: 1px solid var(--border);
		border-radius: var(--radius-3);
		padding: var(--size-2) var(--size-3);
		display: none;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
		color: var(--brand);
	}

	@media (min-width: 1024px) {
		nav {
			padding-block: var(--size-7);
			justify-content: space-between;
			align-items: center;
		}

		.links {
			display: flex;
			gap: var(--size-7);
			margin-block: 0;
		}

		.toggle {
			display: block;
		}

		button {
			display: none;
		}
	}
</style>
