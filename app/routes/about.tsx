import me from "~/assets/images/me.jpg";
import { Title } from "~/components";

function SubTitle({ children }: { children: React.ReactNode }) {
	return (
		<h2 className="my-2 font-heading text-xl dark:text-slate-200">
			{children}
		</h2>
	);
}

export default function AboutPage() {
	return (
		<article className="flex flex-col items-center gap-4 px-4">
			<img src={me} alt="Me" className="h-52 w-52 rounded-full" />
			<Title>Hi, I'm Thiago Temple</Title>
			<div className="text-slate-600 dark:text-slate-300">
				<p>
					Hello, I'm Thiago Temple, a Brazilian currently residing and working
					in Ottawa, Canada. You can reach me on{" "}
					<a href="https://twitter.com/ThiagoTemple">Twitter</a> or via{" "}
					<a href="mailto:thitemple@gmail.com">email</a>.
				</p>
				<SubTitle>What I do?</SubTitle>
				<p>
					I am a staff developer at <a href="http://shopify.com">Shopify</a>,
					primarily focused on programming with web-related technologies.
				</p>
				<SubTitle>Why I do it?</SubTitle>
				<p>
					My fascination with computers dates back to the 90s, even before my
					family purchased our first computer. At the age of 13, I would utilize
					my neighbor's computer. Today, I am passionate about the art of
					software development and thrive on the challenge of staying updated
					with the latest technologies. The constant evolution of technology is
					a major driving force for me, along with the knowledge that the
					software I help build contributes to enhancing people's productivity.
				</p>
				<SubTitle>Why this blog?</SubTitle>
				<p>
					This blog serves as an opportunity for me to practice and reinforce
					what I am learning. As the saying goes, teaching others is one of the
					most effective ways to solidify one's understanding. Or even if I am
					not teaching anyone, I am documenting for my future self.
					Additionally, I am eager to share the new things I learn and
					contribute to the community by sharing my experiences.
				</p>
				<SubTitle>What I do for fun?</SubTitle>
				<p>
					Living in Canada, I have discovered a new passion due to its harsh
					winters: board games. I now thoroughly enjoy them and have been
					steadily growing my collection.
				</p>
				<p>
					<a href="https://boardgamegeek.com/user/vintem">
						<img
							alt="Board games collection"
							src="https://boardgamegeek.com/jswidget.php?username=vintem&numitems=5&header=1&text=title&images=medium&show=recentplays&imagesonly=1&imagepos=center&inline=1&domains%5B%5D=boardgame&imagewidget=1"
						/>
					</a>
				</p>
				<p>
					Additionally, I indulge in watching a few{" "}
					<a href="https://www.tvtime.com/en/user/13947508/profile">TV shows</a>{" "}
					and always have at least one book on the go
				</p>
				<p>
					However, one thing I cherish the most is spending quality time with my
					family. I am married and a proud father of a two kids, as well as the
					owner of two very active greyhounds.
				</p>
			</div>
		</article>
	);
}
