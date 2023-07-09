import { ReactNode } from "react";
import { Footer } from "./Footer";
import { Nav } from "./Nav/Nav";

interface PageProps {
	children: ReactNode;
}

export function Page({ children }: PageProps) {
	return (
		<div className="bg-slate-100">
			<main className="mx-auto max-w-5xl bg-white py-6 dark:bg-violet-700">
				<Nav />
				{children}
				<Footer />
			</main>
		</div>
	);
}
