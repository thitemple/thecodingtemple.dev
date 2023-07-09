export function About() {
	return (
		<section className="grid px-4 py-8 md:px-6 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:px-8">
			<h2 className="font-heading text-2xl text-slate-700 dark:text-slate-200 lg:col-start-2">
				About
			</h2>
			<img
				src="https://res.cloudinary.com/duacbnsfa/image/upload/f_auto,q_auto/nfhbzkqa7by6n6znan0s"
				alt="Thiago Temple"
				className="mt-6 h-32 w-32 content-center place-self-center rounded-full lg:row-span-2 lg:row-start-1 lg:mt-0 lg:h-64 lg:w-64"
			/>
			<p className="mt-6 text-slate-600 dark:text-slate-300 lg:col-start-2">
				As a software engineer based in Ottawa, Canada, I'm passionate about web
				and mobile technologies. I've always been captivated by the
				ever-evolving world of tech, and I love sharing my learning journey on
				my blog. When I'm not immersed in code, you'll find me enjoying board
				games, diving into a good book, or spending quality time with my family.
				It's all about balance!
			</p>
		</section>
	);
}
