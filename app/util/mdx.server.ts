import path from "path";
import remarkMdxImages from "remark-mdx-images";

import { bundleMDX } from "mdx-bundler";

export async function getMdxContent(slug: string) {
	const pathToContent = `/content/posts/${slug}/index.mdx`;
	const dir = path.dirname(pathToContent);
	return bundleMDX({
		file: path.join(process.cwd(), pathToContent),
		cwd: path.join(process.cwd(), dir),
		mdxOptions: options => {
			options.remarkPlugins = [
				...(options.remarkPlugins ?? []),
				remarkMdxImages,
			];
			return options;
		},
		esbuildOptions: options => {
			options.loader = {
				...options.loader,
				".png": "dataurl",
				".jpg": "dataurl",
			};

			return options;
		},
	});
}
