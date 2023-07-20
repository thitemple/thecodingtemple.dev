import { clsx } from "clsx";
import { ReactNode } from "react";

interface TitleProps {
	className?: string;
	children: ReactNode;
}

export function Title({ children, className }: TitleProps) {
	return (
		<h1
			className={clsx(
				"w-full font-heading text-2xl text-slate-700 dark:text-slate-100 lg:text-3xl",
				className,
			)}
		>
			{children}
		</h1>
	);
}
