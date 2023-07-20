import type { V2_MetaFunction } from "@remix-run/node";

import { typedjson, useTypedLoaderData } from "remix-typedjson";
import { getLatestArticle } from "~/data/post.server";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Hero } from "./components/Hero";
import { LatestArticle } from "./components/LatestArticle";
import { Passions } from "./components/Passions";

export const meta: V2_MetaFunction = () => {
	return [
		{ title: "The Coding Temple" },
		{
			name: "description",
			content: "Hi, I'm Thiago Temple, a developer, geek and this is my site.",
		},
	];
};

export async function loader() {
	const post = await getLatestArticle();
	return typedjson({ post });
}

export default function Index() {
	const { post } = useTypedLoaderData<typeof loader>();

	return (
		<div className="flex flex-col lg:gap-4">
			<Hero />
			{post && (
				<LatestArticle
					latestArticle={post.frontmatter}
					readTime={post.readTime}
					slug={post.slug}
					banner={post.banner}
				/>
			)}
			<Experience />
			<About />
			<Passions />
			{/* <NewsletterSubscription /> */}
		</div>
	);
}
