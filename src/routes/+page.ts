import type { Post } from "$lib/types";
import { error } from "@sveltejs/kit";

export async function load({ fetch }) {
	const response = await fetch("api/posts");
	const posts: Post[] = await response.json();

	if (posts.length > 0) {
		return { post: posts[0] };
	}

	return error(404, "No posts found");
}
