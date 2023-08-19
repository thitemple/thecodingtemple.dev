import type { Post } from "$lib/types";
import { json } from "@sveltejs/kit";

export async function GET() {
	const posts = await getPosts();
	return json(posts);
}

type File = {
	metadata: Omit<Post, "slug" | "readTime">;
	default: {
		render: () => { html: string };
	};
};

async function getPosts() {
	let posts: Post[] = [];
	const paths = import.meta.glob("/src/posts/**/*.md", { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split("/").at(-2)?.replace(".md", "");

		if (isFile(file) && slug) {
			const metadata = file.metadata as Omit<Post, "slug" | "readTime">;
			const readTime = readingTime(file.default.render().html);
			const post = { ...metadata, slug, readTime } satisfies Post;
			post.published && posts.push(post);
		}
	}

	posts = posts.sort((first, second) =>
		new Date(first.date).getTime() > new Date(second.date).getTime() ? -1 : 1
	);

	return posts;
}

function isFile(file: unknown): file is File {
	return !!file && typeof file === "object" && "metadata" in file && "default" in file;
}

function readingTime(postContent: string) {
	const text = postContent;
	const wpm = 265;
	const words = text.trim().split(/\s+/).length;
	return Math.ceil(words / wpm);
}
