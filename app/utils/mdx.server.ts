import rehypePrism from "@mapbox/rehype-prism";
import fg from "fast-glob";
import path from "path";
import remarkMdxImages from "remark-mdx-images";

import { bundleMDX } from "mdx-bundler";
import { getMDXExport } from "mdx-bundler/client";

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

export async function getPaginatedPosts(
	page: number,
	postsPerPage: number,
): Promise<{ posts: Post[]; numPages: number }> {
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

function readingTime(postContent: string) {
	const text = postContent;
	const wpm = 265;
	const words = text.trim().split(/\s+/).length;
	return Math.ceil(words / wpm);
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
