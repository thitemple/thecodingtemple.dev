<script lang="ts">
	import { page } from "$app/stores";
	import * as config from "$lib/config";
</script>

<footer class="-mx-4 flex flex-col items-center gap-6 bg-slate-200 py-6 dark:bg-violet-500">
	<ul class="flex flex-wrap justify-center gap-6 px-6">
		<li>
			<a
				href="/"
				aria-disabled={$page.url.pathname === "/"}
				class="text-slate-700 hover:text-violet-500 hover:underline dark:text-slate-200 dark:hover:text-pink-300"
				>Home</a
			>
		</li>
		<li>
			<a
				href="/blog"
				aria-disabled={$page.url.pathname === "/blog"}
				class="text-slate-700 hover:text-violet-500 hover:underline dark:text-slate-200 dark:hover:text-pink-300"
				>Blog</a
			>
		</li>
		<li>
			<a
				href="/courses"
				aria-disabled={$page.url.pathname === "/courses"}
				class="text-slate-700 hover:text-violet-500 hover:underline dark:text-slate-200 dark:hover:text-pink-300"
				>Courses</a
			>
		</li>
		<li>
			<a
				href="/about"
				aria-disabled={$page.url.pathname === "/about"}
				class="text-slate-700 hover:text-violet-500 hover:underline dark:text-slate-200 dark:hover:text-pink-300"
				>About</a
			>
		</li>
	</ul>
	<p class="text-slate-500 dark:text-slate-400">
		{config.title} &copy; {new Date().getFullYear()}
	</p>
</footer>
