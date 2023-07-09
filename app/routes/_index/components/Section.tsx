import classNames from "classnames";
import { ReactNode } from "react";

interface SectionProps {
	title: string;
	children: ReactNode;
	className?: string;
}

export function Section({ title, children, className }: SectionProps) {
	return (
		<section className={classNames("px-4 py-8 md:px-6 lg:px-8", className)}>
			<h2 className="font-heading text-2xl text-slate-700 dark:text-slate-200">
				{title}
			</h2>
			{children}
		</section>
	);
}
