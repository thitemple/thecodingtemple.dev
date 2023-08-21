import { getPosts } from "$lib/posts";

export const prerender = true;

const BASE_URL = "thecodingtemple.dev";
const navbar = [
	{ to: "/blog", text: "Blog" },
	{ to: "/courses", text: "Courses" },
	{ to: "/about", text: "About" }
];

export async function GET() {
	const posts = await getPosts();

	const allPaths = [
		...navbar,
		...posts.map((post) => ({ to: `/blog/${post.slug}`, text: post.title }))
	];

	return new Response(
		`
    <?xml version="1.0" encoding="UTF-8" ?>
    <urlset
      xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xhtml="https://www.w3.org/1999/xhtml"
      xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
      xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
      xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
      xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
    >
      ${allPaths.map(({ to }) => `<url><loc>${BASE_URL}${to}</loc></url>`).join("\n")}
    </urlset>`.trim(),
		{
			headers: {
				"Content-Type": "application/xml"
			}
		}
	);
}
