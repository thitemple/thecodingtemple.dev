<script lang="ts">
	import { cn } from "$lib/utils";

	export let classes = "";
</script>

<h1
	class={cn("w-full font-heading text-2xl text-slate-700 dark:text-slate-100 lg:text-3xl", classes)}
>
	<slot />
</h1>
