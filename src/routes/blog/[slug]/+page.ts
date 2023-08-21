import type { Post } from "$lib/types";
import { error } from "@sveltejs/kit";

export async function load({ params }) {
	try {
		const post = await import(`../../../posts/${params.slug}/index.md`);

		if (!post.metadata) {
			throw error(404, `Could not find post: ${params.slug}`);
		}

		return {
			content: post.default,
			meta: post.metadata,
			cover: post.cover
		} as { content: ConstructorOfATypedSvelteComponent; meta: Post; cover?: string };
	} catch (e) {
		console.error("Error getting the post", e);
		throw error(404, `Could not find post ${params.slug}`);
	}
}
