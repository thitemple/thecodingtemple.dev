import { LinksFunction, LoaderArgs, V2_MetaFunction } from "@remix-run/node";
import { getMDXComponent } from "mdx-bundler/client";
import { useMemo } from "react";
import { typedjson, useTypedLoaderData } from "remix-typedjson";
import postStyles from "~/assets/css/post.page.css";
import prismLight from "~/assets/css/prism-light.css";
import { PostMeta, Title } from "~/components";
import { getPostForSlug } from "~/data/post.server";

export const links: LinksFunction = () => [
	{
		rel: "stylesheet",
		href: "https://unpkg.com/dracula-prism/dist/css/dracula-prism.min.css",
		media: "(prefers-color-scheme: dark)",
	},
	{
		rel: "stylesheet",
		href: prismLight,
		media: "(prefers-color-scheme: light)",
	},
	{
		rel: "stylesheet",
		href: postStyles,
	},
];

export const meta: V2_MetaFunction<typeof loader> = metaParams => {
	return [
		{ title: `${metaParams.data.frontmatter.title} - The Coding Temple` },
	];
};

export async function loader({ params }: LoaderArgs) {
	if (!params.slug) {
		throw new Error("Slug not found");
	}

	const { code, frontmatter, readTime, banner } = await getPostForSlug(
		params.slug,
	);
	return typedjson({ code, frontmatter, readTime, banner });
}

export default function BlogPostPage() {
	const { code, frontmatter, readTime, banner } =
		useTypedLoaderData<typeof loader>();

	const Component = useMemo(() => getMDXComponent(code), [code]);

	return (
		<article className="article grid gap-4 px-4 md:gap-y-6 md:px-6 lg:px-8">
			<header>
				<Title className="mb-4 leading-10 underline decoration-violet-300 decoration-double decoration-4 underline-offset-8 dark:decoration-pink-500">
					{frontmatter.title}
				</Title>
				<p className="text-sm text-slate-500 dark:text-slate-400 lg:mt-2">
					<PostMeta date={frontmatter.date} readTime={readTime} />
				</p>
			</header>
			{banner && (
				<div>
					<img
						src={banner}
						alt={`Banner for ${frontmatter.title}`}
						className="w-full object-cover"
					/>
				</div>
			)}
			<div className="flex flex-col gap-y-2 overflow-hidden dark:text-slate-200 md:gap-y-6">
				<Component />
			</div>
		</article>
	);
}
