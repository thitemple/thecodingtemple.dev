import fs from "fs";
import path from "path";
import {
	Post,
	addMetaData,
	getMdxContent,
	getMdxContentForFile,
} from "./mdx.server";

const DIRECTORY_PATH = "./content/posts";

interface PostReference {
	post: Pick<Post, "frontmatter" | "code">;
	file: string;
}

async function traverseDirectories(
	directoryPath: string,
): Promise<PostReference[]> {
	const files = fs.readdirSync(directoryPath);

	const all = await Promise.all(
		files.map(async file => {
			const filePath = path.join(directoryPath, file, "index.mdx");
			const stat = fs.statSync(filePath);

			if (fs.existsSync(filePath)) {
				const { frontmatter, code } = await getMdxContentForFile(filePath);
				return { post: { frontmatter, code }, file: filePath };
			}
			return null;
		}),
	);

	return all.filter((file): file is PostReference => Boolean(file));
}

async function getAllArticles() {
	return traverseDirectories(DIRECTORY_PATH);
}

export async function getLatestArticle(): Promise<Post> {
	if (
		fs.existsSync(
			path.join(process.cwd(), "./public/build/posts-index.json"),
		) === true
	) {
		const postsIndex = fs.readFileSync(
			path.join(process.cwd(), "public/build/posts-index.json"),
		);
		const postsIndexJson = JSON.parse(postsIndex.toString());
		if (postsIndexJson.length > 0) {
			console.debug("DAS using posts-index.json");
			return await getMdxContent(postsIndexJson[0].slug);
		}
	}

	const allArticles = await getAllArticles();

	allArticles.sort((a, b) => {
		return a.post.frontmatter.date > b.post.frontmatter.date ? -1 : 1;
	});

	if (allArticles[0] === undefined) {
		throw new Response("No articles found");
	}

	console.debug("DAS using traverseDirectories");

	return addMetaData(allArticles[0].post, allArticles[0].file);
}
