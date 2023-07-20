import rehypePrism from "@mapbox/rehype-prism";
import { getMDXExport } from "mdx-bundler/client";
import path from "path";
import remarkMdxImages from "remark-mdx-images";
import { Post } from "~/data/post.server";

import { bundleMDX } from "mdx-bundler";
import { readingTime } from "../utils/readingTime";

export interface PostFrontMatter {
	title: string;
	summary: string;
	path: string;
	date: Date;
	tags?: string[];
	category?: string;
	banner?: string;
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

function slugify(pathToFile: string) {
	return path.dirname(pathToFile).split("/").pop() ?? "";
}
