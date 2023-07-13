import { LoaderArgs } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { Title } from "~/components";
import { Button } from "~/components/Button";
import { formatDate } from "~/utils/dateFormats";
import { Post, getPaginatedPosts } from "~/utils/mdx.server";

export async function loader({ request }: LoaderArgs): Promise<{
	posts: Post[];
	nextPage: number | null;
	previousPage: number | null;
}> {
	const page = Number(new URL(request.url).searchParams.get("page") ?? "1");
	const { posts, numPages } = await getPaginatedPosts(page, 5);
	return {
		posts,
		nextPage: page < numPages - 1 ? page + 1 : null,
		previousPage: page > 0 ? page - 1 : null,
	};
}

export function PostMeta({
	date,
	readTime,
}: {
	date: Date;
	readTime?: number;
}) {
	return (
		<>
			<span>{formatDate(date)}</span>
			{readTime && (
				<>
					{" "}
					• <span>{readTime} min read</span>
				</>
			)}
		</>
	);
}

function ArticleCard({ post }: { post: Post }) {
	return (
		<div className="flex flex-col gap-6 py-8 md:rounded-md md:border md:border-slate-200 md:p-6 dark:md:border-pink-300/40 lg:px-8 lg:first:col-span-2">
			<Link to={`/articles/${post.frontmatter.slug}`} className=" lg:mt-4">
				<h2 className="font-heading text-2xl text-slate-700 dark:text-slate-200">
					{post.frontmatter.title}
				</h2>
			</Link>
			{post.frontmatter.thumbnail && (
				<img
					src={post.frontmatter.thumbnail}
					className="w-full object-cover opacity-75  lg:pr-4"
				/>
			)}
			<p className="flex-1 text-slate-600 dark:text-slate-300 lg:mt-4">
				{post.frontmatter.summary}
			</p>
			<p className="text-slate-400  lg:mt-2">
				{/* <PostMeta date={post.frontmatter.date} readTime={post.frontmatter.readTime} /> */}
			</p>
			<p className="max-w-md">
				<Button
					label="Read more"
					icon={
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="ml-3 h-auto w-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
							/>
						</svg>
					}
					to={`/articles/${post.frontmatter.slug}`}
				/>
			</p>
		</div>
	);
}

export default function ArticlesPage() {
	const data = useLoaderData<typeof loader>();
	return (
		<div className="grid gap-4 px-4 md:px-6 lg:px-8">
			<Title>Articles</Title>
			<div className="grid md:gap-6 lg:grid-cols-2 lg:grid-rows-3">
				{data.posts.map(post => (
					<ArticleCard key={post.frontmatter.slug} post={post} />
				))}
			</div>
			<div className="flex justify-center gap-6">
				{data.previousPage !== null && (
					<div className="flex-1 md:max-w-[200px]">
						<Button
							to={`/articles?page=${data.previousPage}`}
							label="Previous"
						/>
					</div>
				)}
				{data.nextPage !== null && (
					<div className="flex-1 md:max-w-[200px]">
						<Button to={`/articles?page=${data.nextPage}`} label="Next" />
					</div>
				)}
			</div>
		</div>
	);
}
