import fs from "fs";
import path from "path";
import { Post, addMetaData, getMdxContentForFile } from "./mdx.server";

const DIRECTORY_PATH = "./app/content/posts";

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
	const allArticles = await getAllArticles();

	allArticles.sort((a, b) => {
		return a.post.frontmatter.date > b.post.frontmatter.date ? -1 : 1;
	});
	return addMetaData(allArticles[0].post, allArticles[0].file);
}
