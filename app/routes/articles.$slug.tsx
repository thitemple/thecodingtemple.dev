import { LinksFunction, LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getMDXComponent } from "mdx-bundler/client";
import { useMemo } from "react";
import articleStyles from "~/assets/css/article.page.css";
import { Title } from "~/components";
import { getMdxContent } from "~/utils/mdx.server";

export const links: LinksFunction = () => [
	{
		rel: "stylesheet",
		href: "https://unpkg.com/dracula-prism/dist/css/dracula-prism.min.css",
	},
	{
		rel: "stylesheet",
		href: articleStyles,
	},
];

export async function loader({ params }: LoaderArgs) {
	if (!params.slug) {
		throw new Error("Slug not found");
	}

	const { code, frontmatter } = await getMdxContent(params.slug);
	return { code, frontmatter };
}

export default function BlogPostPage() {
	const { code, frontmatter } = useLoaderData<typeof loader>();

	const Component = useMemo(() => getMDXComponent(code), [code]);

	return (
		<article className="article grid gap-4 px-4 md:gap-y-6 md:px-6 lg:px-8">
			<Title className="mb-4 leading-10 underline decoration-violet-300 decoration-double decoration-4 underline-offset-8 dark:decoration-pink-500">
				{frontmatter.title}
			</Title>
			<div className="flex flex-col gap-y-2 overflow-hidden dark:text-slate-200 md:gap-y-6">
				<Component />
			</div>
		</article>
	);
}
