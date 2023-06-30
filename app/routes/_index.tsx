import type { V2_MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { Nav } from "~/components";
import { getLatestArticle } from "~/utils/blog.server";
import { formatDate } from "~/utils/dateFormats";

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

export function PostMeta({
	date,
	readTime,
}: {
	date: string;
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

export default function Index() {
	const { latestArticle } = useLoaderData<typeof loader>();

	return (
		<div className="py-6">
			<Nav />
			<section className="mt-6 w-full bg-gradient-to-b from-pink/10 to-fuchsia/20 px-4 py-12">
				<h1 className="font-heading  text-2xl text-fuchsia">
					Hi, I'm Thiago Temple. I love building products, writing code and
					learning through it.
				</h1>
				<p className="mt-6 hidden text-lg text-zinc-600">
					I'm a web-loving staff developer, driven by curiosity and a passion
					for learning. I'm eager to share my knowledge and always up for new
					challenges. With a friendly and open-minded approach, I embrace the
					ever-evolving world of web technologies, staying ahead of the game and
					inspiring others along the way.
				</p>
			</section>
			{latestArticle && (
				<section className="px-4 py-8">
					<Link to={`/blog/${latestArticle.slug}`}>
						<h2 className="font-heading text-2xl text-zinc-700">
							{latestArticle.title}
						</h2>
					</Link>
					{latestArticle.banner && (
						<img src={latestArticle.banner} className="mt-6 opacity-75" />
					)}
					<p className="mt-6 text-zinc-600">{latestArticle.summary}</p>
					<p className="mt-6 text-zinc-400">
						<PostMeta
							date={latestArticle.date}
							readTime={latestArticle.readTime}
						/>
					</p>
					<Link
						to={`/blog/${latestArticle.slug}`}
						className="mt-6 flex justify-center rounded-lg border-2 border-fuchsia bg-white py-2 uppercase text-fuchsia"
					>
						Read more
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
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
				</section>
			)}
			<section className="px-4 py-8">
				<h2 className="font-heading text-2xl text-zinc-700">Experience</h2>
				<p className="mt-6 text-zinc-600">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
					lobortis posuere urna sit amet malesuada. Mauris dapibus, mauris et
					tempus sollicitudin, tortor metus tempus ipsum.
				</p>
				<a
					href="https://bit.ly/thiago-temple-resume"
					className="mt-6 flex justify-center rounded-lg border-2 border-fuchsia bg-white py-2 uppercase text-fuchsia"
				>
					Download CV
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
							d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
						/>
					</svg>
				</a>
			</section>
		</div>
	);
}
