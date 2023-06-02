import { LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useMemo } from "react";
import { getMdxContent } from "~/util/mdx.server";
import { getMDXComponent } from "mdx-bundler/client";

export async function loader({ params }: LoaderArgs) {
	if (!params.slug) {
		throw new Error("Slug not found");
	}

	const { code, frontmatter } = await getMdxContent(params.slug);
	return { code, frontmatter };
}

export default function BlogPostPage() {
	const { code } = useLoaderData<typeof loader>();

	const Component = useMemo(() => getMDXComponent(code), [code]);

	return (
		<article>
			<Component />
		</article>
	);
}
