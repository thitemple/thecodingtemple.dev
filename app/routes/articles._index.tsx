import { LoaderArgs } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { clsx } from "clsx";
import { typedjson, useTypedLoaderData } from "remix-typedjson";
import { OutlineLink, PostMeta, Title } from "~/components";
import { Post, getPaginatedPosts } from "~/utils/mdx.server";

export async function loader({ request }: LoaderArgs) {
	const page = Number(new URL(request.url).searchParams.get("page") ?? "1");
	const { posts, numPages } = await getPaginatedPosts(page, 5);
	return typedjson({
		posts,
		nextPage: page < numPages - 1 ? page + 1 : null,
		hasNextPage: page < numPages - 1,
		previousPage: page > 1 ? page - 1 : null,
		hasPreviousPage: page > 1,
		currentPage: page,
	});
}

function ArticleCard({ post }: { post: Post }) {
	return (
		<div className="flex flex-col gap-x-6 gap-y-4 py-4 md:rounded-md md:border md:border-slate-200 md:p-6 md:py-8 dark:md:border-pink-300/40 lg:px-8 lg:first:col-span-2">
			<div>
				<Link to={`/articles/${post.slug}`} className=" lg:mt-4">
					<h2 className="font-heading text-2xl text-slate-700 dark:text-slate-200">
						{post.frontmatter.title}
					</h2>
				</Link>
				<p className="text-sm text-slate-500 dark:text-slate-400 lg:mt-2">
					<PostMeta date={post.frontmatter.date} readTime={post.readTime} />
				</p>
			</div>
			{post.banner && (
				<img
					src={post.banner}
					alt={`Thumbnail for ${post.frontmatter.title}`}
					className="w-full object-cover opacity-90 lg:pr-4"
				/>
			)}
			<p className="flex-1 text-slate-600 dark:text-slate-300 lg:mt-4">
				{post.frontmatter.summary}
			</p>
			<p className="md:self-center lg:self-start">
				<OutlineLink
					icon={
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
							/>
						</svg>
					}
					to={`/articles/${post.slug}`}
					className="md:px-12 md:py-3"
				>
					Read more
				</OutlineLink>
			</p>
		</div>
	);
}

export default function ArticlesPage() {
	const data = useTypedLoaderData<typeof loader>();
	data.posts[0].frontmatter.date;
	return (
		<div className="grid gap-4 px-4 md:px-6 lg:px-8">
			<Title>Articles</Title>
			<div className="grid md:gap-6 lg:grid-cols-2 lg:grid-rows-3">
				{data.posts.map(post => (
					<ArticleCard key={post.slug} post={post} />
				))}
			</div>
			<div className="flex justify-center gap-6">
				{
					<div className="flex flex-1 justify-end">
						<Link
							aria-disabled={!data.hasPreviousPage}
							to={
								data.hasPreviousPage
									? `/articles?page=${data.previousPage}`
									: ""
							}
							className={clsx(
								"flex items-center text-fuchsia-500 hover:underline dark:text-slate-300",
								{
									"cursor-not-allowed text-slate-500  hover:no-underline dark:text-slate-500":
										!data.hasPreviousPage,
								},
							)}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="mr-3 h-auto w-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
								/>
							</svg>
							Previous
						</Link>
					</div>
				}
				{
					<div className="flex flex-1">
						<Link
							aria-disabled={!data.hasNextPage}
							to={data.hasNextPage ? `/articles?page=${data.nextPage}` : ""}
							className={clsx(
								"flex items-center text-fuchsia-500 hover:underline dark:text-slate-300",
								{
									"cursor-not-allowed hover:no-underline dark:text-slate-500":
										!data.hasNextPage,
								},
							)}
						>
							Next
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
						</Link>
					</div>
				}
			</div>
		</div>
	);
}
