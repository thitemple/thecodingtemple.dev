import type { PaginatedPosts } from "../api/posts/types";

export async function load({ url, fetch }) {
	const response = await fetch(`/api/posts?page=${url.searchParams.get("page")}`);
	const { data, pageInfo } = (await response.json()) as PaginatedPosts;

	return {
		posts: data,
		pageInfo
	};
}
