export type Post = {
	title: string;
	slug: string;
	description: string;
	summary: string;
	date: string;
	categories: string[];
	published: boolean;
	cover?: string;
	readTime: number;
};
