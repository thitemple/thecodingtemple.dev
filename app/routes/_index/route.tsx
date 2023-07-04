import type { V2_MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Page } from "~/components";
import { getLatestArticle } from "~/utils/blog.server";

import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Hero } from "./components/Hero";
import { LatestArticle } from "./components/LatestArticle";
import { NewsletterSubscription } from "./components/NewsletterSubscription";
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
	const latestArticle = await getLatestArticle();
	return { latestArticle };
}

export default function Index() {
	const { latestArticle } = useLoaderData<typeof loader>();

	return (
		<Page>
			<Hero />
			{latestArticle && <LatestArticle latestArticle={latestArticle} />}
			<Experience />
			<About />
			<Passions />
			<NewsletterSubscription />
		</Page>
	);
}
