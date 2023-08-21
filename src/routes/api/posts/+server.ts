import { json } from "@sveltejs/kit";
import type { PaginatedPosts } from "./types.js";
import type { Paginated } from "../types.js";
import { getPosts } from "$lib/posts.js";

export async function GET({ url: { searchParams } }) {
	const pageFromParams = searchParams.get("page") ?? "1";
	const pageSizeFromParams = searchParams.get("pageSize") ?? "";
	const page = isNaN(parseInt(pageFromParams)) ? 1 : parseInt(pageFromParams);
	const pageSize = isNaN(parseInt(pageSizeFromParams)) ? 5 : parseInt(pageSizeFromParams);

	const posts = await getPosts();
	const hasNextPage = posts.length > page * pageSize;
	const hasPreviousPage = page > 1;
	const pageInfo: Paginated<unknown>["pageInfo"] = {
		currentPage: page,
		total: posts.length,
		totalPages: Math.ceil(posts.length / pageSize),
		nextPage: hasNextPage ? page + 1 : undefined,
		previousPage: hasPreviousPage ? page - 1 : undefined
	};

	const paginatedPosts = posts.slice((page - 1) * pageSize, page * pageSize);

	const response: PaginatedPosts = {
		data: paginatedPosts,
		pageInfo
	};

	return json(response);
}
