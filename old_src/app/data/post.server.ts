import fs from "fs";
import path from "path";

import fg from "fast-glob";
import {
	PostFrontMatter,
	addMetaData,
	getMdxContent,
	getMdxContentForFile,
} from "~/utils/mdx.server";

const DIRECTORY_PATH = "./content/posts";

process.env.ESBUILD_BINARY_PATH = path.join(
	process.cwd(),
	"node_modules",
	"esbuild",
	"bin",
	"esbuild",
);

export interface Post {
	code: string;
	frontmatter: PostFrontMatter;
	slug: string;
	readTime: number;
	banner?: string;
}

type PostLike = {
	title: string;
	slug: string;
	date: Date;
};

interface PostReference {
	post: Pick<Post, "frontmatter" | "code">;
	file: string;
}

function processPostsIndex<T extends any>(
	fn: (postsIndex: PostLike[]) => Promise<T>,
) {
	if (
		fs.existsSync(
			path.join(process.cwd(), "./public/build/posts-index.json"),
		) === true
	) {
		const postsIndex = fs.readFileSync(
			path.join(process.cwd(), "public/build/posts-index.json"),
		);

		const postsIndexJson = JSON.parse(postsIndex.toString()) as PostLike[];
		if (postsIndexJson.length > 0) {
			return fn(postsIndexJson);
		}
	}
	return null;
}

export async function getPaginatedPosts(
	page: number,
	postsPerPage: number,
): Promise<{ posts: Post[]; numPages: number }> {
	const postsIndex = await processPostsIndex(async postsIndexJson => {
		const paginatedPosts = postsIndexJson.slice(
			(page - 1) * postsPerPage,
			page * postsPerPage,
		);

		return {
			posts: await Promise.all(
				paginatedPosts.map(async post => getMdxContent(post.slug)),
			),
			numPages: Math.ceil(postsIndexJson.length / postsPerPage),
		};
	});

	if (postsIndex !== null) {
		return postsIndex;
	}

	const posts = await getPosts();
	posts.sort(
		(a, b) =>
			Number(new Date(b.frontmatter.date)) -
			Number(new Date(a.frontmatter.date)),
	);

	const numPages = Math.ceil(posts.length / postsPerPage);

	const paginatedPosts = posts.slice(
		(page - 1) * postsPerPage,
		page * postsPerPage,
	);

	return {
		posts: paginatedPosts,
		numPages,
	};
}

async function getPosts(): Promise<Post[]> {
	const posts = await fg("content/posts/**/*.mdx");

	const postsWithFrontMatter = await Promise.all(
		posts.map(async (post: string) => {
			return await getMdxContentForFile(post);
		}),
	);

	return postsWithFrontMatter;
}

async function traverseDirectories(
	directoryPath: string,
): Promise<PostReference[]> {
	const files = fs.readdirSync(directoryPath);

	const all = await Promise.all(
		files.map(async file => {
			const filePath = path.join(directoryPath, file, "index.mdx");
			const stat = fs.statSync(filePath);

			if (fs.existsSync(filePath)) {
				const { frontmatter, code } = await getMdxContentForFile(filePath);
				return { post: { frontmatter, code }, file: filePath };
			}
			return null;
		}),
	);

	return all.filter((file): file is PostReference => Boolean(file));
}

function getAllArticles() {
	return traverseDirectories(DIRECTORY_PATH);
}

export async function getLatestArticle(): Promise<Post> {
	const latestArticleFromIndex = await processPostsIndex(
		async postsIndexJson => {
			if (postsIndexJson[0]) {
				return await getMdxContent(postsIndexJson[0].slug);
			}
		},
	);

	if (latestArticleFromIndex) {
		console.debug("Found latest article from index");
		return latestArticleFromIndex;
	}

	const allArticles = await getAllArticles();

	allArticles.sort((a, b) => {
		return a.post.frontmatter.date > b.post.frontmatter.date ? -1 : 1;
	});

	if (allArticles[0] === undefined) {
		throw new Response("No articles found");
	}

	return addMetaData(allArticles[0].post, allArticles[0].file);
}

export async function getPostForSlug(slug: string): Promise<Post> {
	return await getMdxContent(slug);
}
