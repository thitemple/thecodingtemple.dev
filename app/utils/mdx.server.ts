import rehypePrism from "@mapbox/rehype-prism";
import fg from "fast-glob";
import fs from "fs";
import path from "path";
import remarkMdxImages from "remark-mdx-images";

import { bundleMDX } from "mdx-bundler";
import { getMDXExport } from "mdx-bundler/client";
import { readingTime } from "./readingTime";

process.env.ESBUILD_BINARY_PATH = path.join(
	process.cwd(),
	"node_modules",
	"esbuild",
	"bin",
	"esbuild",
);

export interface PostFrontMatter {
	title: string;
	summary: string;
	path: string;
	date: Date;
	tags?: string[];
	category?: string;
	banner?: string;
}

export interface Post {
	code: string;
	frontmatter: PostFrontMatter;
	slug: string;
	readTime: number;
	banner?: string;
}

export function addMetaData(
	post: Pick<Post, "frontmatter" | "code">,
	pathToFile: string,
): Post {
	const { banner } = getMDXExport(post.code);
	return {
		...post,
		slug: slugify(pathToFile),
		readTime: readingTime(post.code),
		banner,
	};
}

export async function getMdxContentForFile(pathToFile: string) {
	const postDir = path.dirname(pathToFile).split("/").pop() ?? "";
	const imageDir = path.join(process.cwd(), "public", "images", postDir);

	const markdown = await bundleMDX<PostFrontMatter>({
		file: path.join(process.cwd(), pathToFile),
		cwd: path.join(process.cwd(), path.dirname(pathToFile)),
		mdxOptions: options => {
			options.remarkPlugins = [
				...(options.remarkPlugins ?? []),
				remarkMdxImages,
			];
			options.rehypePlugins = [rehypePrism];
			return options;
		},
		esbuildOptions: options => {
			options.loader = {
				...options.loader,
				".png": "file",
				".jpg": "file",
				".jpeg": "file",
				".gif": "file",
			};
			options.outdir = imageDir;
			options.write = true;
			options.publicPath = `/images/${postDir}/`;

			return options;
		},
	});

	return addMetaData(markdown, pathToFile);
}

export async function getMdxContent(slug: string) {
	const pathToContent = `/content/posts/${slug}/index.mdx`;
	return getMdxContentForFile(pathToContent);
}

type PostLike = {
	title: string;
	slug: string;
	date: Date;
};

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
		console.debug("📇 Using cached posts index");
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

	console.debug("🚫 Not cached posts");

	return {
		posts: paginatedPosts,
		numPages,
	};
}

function slugify(pathToFile: string) {
	return path.dirname(pathToFile).split("/").pop() ?? "";
}

async function getPosts(): Promise<Post[]> {
	const posts = await fg("content/posts/**/*.mdx");

	const postsWithFrontMatter = await Promise.all(
		posts.map(async (post: string) => {
			const { code, frontmatter } = await getMdxContentForFile(post);

			return addMetaData(
				{
					code,
					frontmatter,
				},
				post,
			);
		}),
	);

	return postsWithFrontMatter;
}
