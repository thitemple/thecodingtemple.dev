import { Link } from "@remix-run/react";
import { Button } from "~/components/Button";
import { formatDate } from "~/utils/dateFormats";
import { PostFrontMatter } from "~/utils/mdx.server";

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

interface LatestArticleProps {
	latestArticle: PostFrontMatter;
}

export function LatestArticle({ latestArticle }: LatestArticleProps) {
	return (
		<section className="grid px-4 py-8 md:px-6 lg:grid-cols-2 lg:grid-rows-[auto_auto_1fr_auto_auto] lg:px-8">
			<Link
				to={`/article/${latestArticle.slug}`}
				className="lg:col-start-2 lg:mt-4"
			>
				<h2 className="font-heading text-2xl text-slate-700 dark:text-slate-200">
					{latestArticle.title}
				</h2>
			</Link>
			{latestArticle.thumbnail && (
				<img
					src={latestArticle.thumbnail}
					className="mt-6 w-full object-cover opacity-75 lg:col-start-1 lg:row-span-5 lg:row-start-1 lg:pr-4"
				/>
			)}
			<p className="mt-6 text-slate-600 dark:text-slate-300 lg:col-start-2 lg:row-span-2 lg:row-start-3 lg:mt-4">
				{latestArticle.summary}
			</p>
			<p className="mt-6 text-slate-400 lg:col-start-2 lg:mt-2">
				<PostMeta date={latestArticle.date} readTime={latestArticle.readTime} />
			</p>
			<p className="mt-6 lg:col-start-2">
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
					to={`/blog/${latestArticle.slug}`}
				/>
			</p>
		</section>
	);
}
