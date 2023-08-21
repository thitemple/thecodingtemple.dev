import fs from "fs";
import path from "path";

const BASE_URL = "thecodingtemple.dev";

// TODO: move this to a shared file
export const navbar = [
	{ to: "/", text: "Home" },
	{ to: "/blog", text: "Blog" },
	{ to: "/courses", text: "Courses" },
	{ to: "/about", text: "About" },
];

function toXmlSitemap(urls: string[]) {
	const urlsAsXml = urls.map(url => `<url><loc>${url}</loc></url>`).join("\n");

	return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
    >
      ${urlsAsXml}
    </urlset>
  `;
}

export async function buildSitemap() {
	try {
		let blogPosts: { slug: string }[] = [];
		if (
			fs.existsSync(
				path.join(process.cwd(), "./public/build/posts-index.json"),
			) === true
		) {
			const postsIndex = fs.readFileSync(
				path.join(process.cwd(), "public/build/posts-index.json"),
			);
			blogPosts = JSON.parse(postsIndex.toString());
		}

		return toXmlSitemap([
			...navbar
				.filter(({ to }) => to !== "/")
				.map(({ to }) => `${BASE_URL}${to}`),

			...blogPosts.map(({ slug }) => `${BASE_URL}/blog/${slug}`),
		]);
	} catch (e) {
		throw new Response("Internal Server Error", { status: 500 });
	}
}

new Promise<string>(resolve => {
	const sitemap = buildSitemap();
	resolve(sitemap);
})
	.then(sitemap => {
		fs.writeFileSync(path.join(process.cwd(), "public/sitemap.xml"), sitemap);
		console.log("Sitemap generated 🌎");
	})
	.catch(err => {
		console.error("Error generating sitemap", err);
	});
