import { Section } from "./Section";

export function About() {
	return (
		<Section title="About">
			<div className="flex flex-col">
				<img
					src="https://res.cloudinary.com/duacbnsfa/image/upload/f_auto,q_auto/nfhbzkqa7by6n6znan0s"
					alt="Thiago Temple"
					className="mt-6 h-32 w-32 content-center place-self-center rounded-full"
				/>
				<p className="mt-6 text-slate-600">
					As a software engineer based in Ottawa, Canada, I'm passionate about
					web and mobile technologies. I've always been captivated by the
					ever-evolving world of tech, and I love sharing my learning journey on
					my blog. When I'm not immersed in code, you'll find me enjoying board
					games, diving into a good book, or spending quality time with my
					family. It's all about balance!
				</p>
			</div>
		</Section>
	);
}
