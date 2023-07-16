import { LinksFunction, LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getMDXComponent } from "mdx-bundler/client";
import { useMemo } from "react";
import { Title } from "~/components";
import { getMdxContent } from "~/utils/mdx.server";

export const links: LinksFunction = () => [
	{
		rel: "stylesheet",
		href: "https://unpkg.com/dracula-prism/dist/css/dracula-prism.min.css",
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
		<article className="grid gap-4 px-4 md:gap-y-6 md:px-6 lg:px-8">
			<Title>{frontmatter.title}</Title>
			<div className="flex flex-col gap-y-2 dark:text-slate-200 md:gap-y-6">
				<Component />
			</div>
		</article>
	);
}
