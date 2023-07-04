import { ReactNode } from "react";

export function Section({
	title,
	children,
}: {
	title: string;
	children: ReactNode;
}) {
	return (
		<section className="px-4 py-8">
			<h2 className="font-heading text-2xl text-slate-700">{title}</h2>
			{children}
		</section>
	);
}
