export type categories = "svelteklit" | "svelte";

export type Post = {
	title: string;
	slug: string;
	description: string;
	date: string;
	categories: categories[];
	published: boolean;
};
