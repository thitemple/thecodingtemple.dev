<script lang="ts">
	export let href: string;
</script>

<a
	{href}
	class="flex cursor-pointer justify-center rounded-lg border-2 border-fuchsia-500 bg-white px-4 py-2 uppercase text-fuchsia-500 shadow-md transition-colors duration-300 ease-in-out hover:border-pink-500 hover:bg-slate-100 hover:text-pink-500 dark:border-fuchsia-500 dark:bg-violet-700 dark:text-slate-200 dark:hover:bg-violet-500 dark:hover:text-slate-100 lg:col-start-2"
	><slot />
	<span class="ml-2">
		<slot name="icon" />
	</span>
</a>
