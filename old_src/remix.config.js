/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
	ignoredRouteFiles: ["**/.*"],
	tailwind: true,
	serverDependenciesToBundle: [
		/^mdx-bundler.*/,
		/^remark.*/,
		/^unist.*/,
		/^micromark.*/,
		/^mdast.*/,
		/^fault.*/,
		/^estree.*/,
		/^is-plain-obj.*/,
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
