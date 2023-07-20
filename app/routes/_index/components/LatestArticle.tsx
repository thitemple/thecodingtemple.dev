import { Link } from "@remix-run/react";
import { OutlineLink, PostMeta } from "~/components";
import { PostFrontMatter } from "~/utils/mdx.server";

interface LatestArticleProps {
	latestArticle: PostFrontMatter;
	slug: string;
	banner?: string;
	readTime: number;
}

export function LatestArticle({
	latestArticle,
	slug,
	readTime,
	banner,
}: LatestArticleProps) {
	return (
		<section className="grid px-4 py-8 md:px-6 lg:grid-cols-2 lg:grid-rows-[auto_auto_1fr_auto_auto] lg:px-8">
			<Link to={`/article/${slug}`} className="lg:col-start-2 lg:mt-4">
				<h2 className="font-heading text-2xl text-slate-700 dark:text-slate-200">
					{latestArticle.title}
				</h2>
			</Link>
			{banner && (
				<img
					src={banner}
					alt={`Thumbnail for ${latestArticle.title}`}
					className="mt-6 w-full object-cover opacity-90 lg:col-start-1 lg:row-span-5 lg:row-start-1 lg:pr-4"
				/>
			)}
			<p className="mt-6 text-slate-600 dark:text-slate-300 lg:col-start-2 lg:row-span-2 lg:row-start-3 lg:mt-4">
				{latestArticle.summary}
			</p>
			<p className="mt-6 text-slate-400 lg:col-start-2 lg:mt-2">
				<PostMeta date={latestArticle.date} readTime={readTime} />
			</p>
			<p className="mt-6 lg:col-start-2">
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
					to={`/blog/${slug}`}
				>
					Read more
				</OutlineLink>
			</p>
		</section>
	);
}
