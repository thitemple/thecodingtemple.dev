<script lang="ts">
	import * as config from "$lib/config";
	import FooterNavItem from "./footer-nav-item.svelte";
</script>

<footer class="-mx-4 flex flex-col items-center gap-6 bg-slate-200 py-6 dark:bg-violet-700">
	<ul class="flex flex-wrap justify-center gap-6 px-6">
		<FooterNavItem href="/">Home</FooterNavItem>
		<FooterNavItem href="/blog" exact={false}>Blog</FooterNavItem>
		<FooterNavItem href="/courses">Courses</FooterNavItem>
		<FooterNavItem href="/about">About</FooterNavItem>
	</ul>
	<p class="text-slate-500 dark:text-slate-400">
		{config.title} &copy; {new Date().getFullYear()}
	</p>
</footer>
