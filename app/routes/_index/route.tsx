import type { V2_MetaFunction } from "@remix-run/node";
import { getLatestArticle } from "~/utils/blog.server";

import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Hero } from "./components/Hero";
import { LatestArticle } from "./components/LatestArticle";
import { Passions } from "./components/Passions";
import { typedjson, useTypedLoaderData } from "remix-typedjson";

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
	const latestArticle = await getLatestArticle();
	return typedjson({ latestArticle });
}

export default function Index() {
	const { latestArticle } = useTypedLoaderData<typeof loader>();

	return (
			<div className="flex flex-col lg:gap-4">
				<Hero />
				{latestArticle && <LatestArticle latestArticle={latestArticle} />}
				<Experience />
				<About />
				<Passions />
				{/* <NewsletterSubscription /> */}
			</div>
	);
}
