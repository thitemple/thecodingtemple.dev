import type { Post } from "$lib/types";
import { error } from "@sveltejs/kit";

export async function load({ params }) {
	try {
		const post = await import(`../../../posts/${params.slug}/index.md`);
		return {
			content: post.default,
			meta: post.metadata
		} as { content: ConstructorOfATypedSvelteComponent; meta: Post };
	} catch (e) {
		throw error(404, `Could not find post ${params.slug}`);
	}
}
