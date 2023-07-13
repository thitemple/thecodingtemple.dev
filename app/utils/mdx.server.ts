import path from "path";
import rehypeHighlight from "rehype-highlight";
import remarkMdxImages from "remark-mdx-images";
import fg from "fast-glob";

import { bundleMDX } from "mdx-bundler";

process.env.ESBUILD_BINARY_PATH = path.join(
	process.cwd(),
	'node_modules',
	'esbuild',
	'bin',
	'esbuild',
)

export interface PostFrontMatter {
	title: string;
	summary: string;
	slug: string;
	path: string;
	date: Date;
	tags?: string[];
	category?: string;
	banner?: string;
	thumbnail?: string;
	readTime?: number;
}

export interface Post {
	code: string;
	frontmatter: PostFrontMatter;
};

export function getMdxContentForFile(pathToFile: string) {
	return bundleMDX<PostFrontMatter>({
		file: path.join(process.cwd(), pathToFile),
		cwd: path.join(process.cwd(), path.dirname(pathToFile)),
		mdxOptions: options => {
			options.remarkPlugins = [
				...(options.remarkPlugins ?? []),
				remarkMdxImages,
			];
			options.rehypePlugins = [rehypeHighlight];
			return options;
		},
		esbuildOptions: options => {
			options.loader = {
				...options.loader,
				".png": "dataurl",
				".jpg": "dataurl",
				".gif": "dataurl",
			};

			return options;
		},
	});
}

export async function getMdxContent(slug: string) {
	const pathToContent = `/content/posts/${slug}/index.mdx`;
	return getMdxContentForFile(pathToContent);
}



export async function getPaginatedPosts(
	page: number,
	postsPerPage: number
): Promise<{ posts: Post[]; numPages: number }> {
	const posts = await getPosts();
	posts.sort((a, b) => Number(new Date(b.frontmatter.date)) - Number(new Date(a.frontmatter.date)));

	const numPages = Math.ceil(posts.length / postsPerPage);

	const paginatedPosts = posts.slice(
		(page - 1) * postsPerPage,
		page * postsPerPage
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
			const { code, frontmatter } = await getMdxContentForFile(post);

			return {
				code,
				frontmatter,
			};
		})
	);

	return postsWithFrontMatter;
}

