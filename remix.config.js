/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
	ignoredRouteFiles: ["**/.*"],
	tailwind: true,
	server:
		process.env.NETLIFY || process.env.NETLIFY_LOCAL
			? "./server.ts"
			: undefined,
	serverBuildPath: ".netlify/functions-internal/server.js",
	serverDependenciesToBundle: [
    /^mdx-bundler.*/,
    /^remark.*/,
    /^unist.*/,
    /^micromark.*/,
    /^mdast.*/,
    /^fault.*/,
    /^estree.*/,
	],
	serverModuleFormat: "cjs",
	future: {
		v2_errorBoundary: true,
		v2_meta: true,
		v2_normalizeFormMethod: true,
		v2_routeConvention: true,
		v2_headers: true,
		v2_dev: true,
	},
};
