import fg from "fast-glob";
import fs from "fs";
import path from "path";

import { getMdxContentForFile } from "~/utils/mdx.server";

async function buildPostsIndex() {
	const allPosts = await fg("content/posts/**/*.mdx");

	const posts = await Promise.all(
		allPosts.map(async post => {
			const {
				readTime,
				slug,
				frontmatter: { title, date, summary },
			} = await getMdxContentForFile(post);
			return {
				title,
				date,
				summary,
				slug,
				readTime,
			};
		}),
	);

	posts.sort((a, b) => {
		return a.date > b.date ? -1 : 1;
	});

	return posts;
}

new Promise((resolve, reject) => {
	const postsIndex = buildPostsIndex();
	resolve(postsIndex);
})
	.then(postsIndex => {
		fs.writeFileSync(
			path.join(process.cwd(), "public/build/posts-index.json"),
			JSON.stringify(postsIndex, null, 2),
		);
		console.log("Posts index generated 📇");
	})
	.catch(err => {
		console.error("Error generating posts index", err);
	});
