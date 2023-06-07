/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
	ignoredRouteFiles: ["**/.*"],
	server:
		process.env.NETLIFY || process.env.NETLIFY_LOCAL
			? "./server.ts"
			: undefined,
	serverBuildPath: ".netlify/functions-internal/server.js",
	serverDependenciesToBundle: [
		/^remark.*/,
		/mdx-bundler/,
		/fault/,
		/^unist-util-*/,
		/^micromark-*/,
		/^mdast-util-frontmatter*/,
		/rehype-highlight/,
		/hast-util-*/,
		/lowlight/,
	],
	// appDirectory: "app",
	// assetsBuildDirectory: "public/build",
	// publicPath: "/build/",
	serverModuleFormat: "cjs",
	future: {
		v2_errorBoundary: true,
		v2_meta: true,
		v2_normalizeFormMethod: true,
		v2_routeConvention: true,
	},
};
