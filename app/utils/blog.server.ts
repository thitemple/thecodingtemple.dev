import fs from "fs";
import path from "path";
import { PostFrontMatter, getMdxContentForFile } from "./mdx.server";

const DIRECTORY_PATH = "./content/posts";

async function traverseDirectories(
	directoryPath: string,
): Promise<PostFrontMatter[]> {
	const files = fs.readdirSync(directoryPath);

	const all = await Promise.all(
		files.map(async file => {
			const filePath = path.join(directoryPath, file, "index.mdx");
			const stat = fs.statSync(filePath);

			if (fs.existsSync(filePath)) {
				const { frontmatter } = await getMdxContentForFile(filePath);
				return frontmatter;
			}
			return null;
		}),
	);

	return all.filter((file): file is PostFrontMatter => Boolean(file));
}

async function getAllArticles() {
	return traverseDirectories(DIRECTORY_PATH);
}

export async function getLatestArticle() {
	const allArticles = await getAllArticles();

	allArticles.sort((a, b) => {
		return a.date > b.date ? -1 : 1;
	});
	return allArticles[0];
}
