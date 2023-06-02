import path from "path";

import { bundleMDX } from "mdx-bundler";

export async function getMdxContent(slug: string) {
	const pathToContent = `/content/posts/${slug}/index.mdx`;
	const dir = path.dirname(pathToContent);
	return bundleMDX({
		file: path.join(process.cwd(), pathToContent),
		cwd: path.join(process.cwd(), dir),
	});
}
