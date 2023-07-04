import { ReactNode } from "react";
import { Footer } from "./Footer";
import { Nav } from "./Nav";

interface PageProps {
	children: ReactNode;
}

export function Page({ children }: PageProps) {
	return (
		<main className="py-6">
			<Nav />
			{children}
			<Footer />
		</main>
	);
}
