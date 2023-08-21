<script lang="ts">
	export let to: string;
</script>

<li
	class="border-b border-slate-200 py-4 last:border-0 focus:bg-slate-300 dark:focus:bg-violet-500"
>
	<a href={to} on:click>
		<slot />
	</a>
</li>
