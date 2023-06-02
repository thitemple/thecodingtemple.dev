import { LoaderArgs, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getMdxContent } from "~/util/mdx";

export function loader({ params }: LoaderArgs) {
	if (!params.slug) {
		// return redirect("/");
	}

	return getMdxContent(params.slug);
}

export default function BlogPostPage() {
	const data = useLoaderData<typeof loader>();
	return <article>The blog post for: {data}</article>;
}
