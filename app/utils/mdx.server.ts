import path from "path";
import rehypeHighlight from "rehype-highlight";
import remarkMdxImages from "remark-mdx-images";

import { bundleMDX } from "mdx-bundler";

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
