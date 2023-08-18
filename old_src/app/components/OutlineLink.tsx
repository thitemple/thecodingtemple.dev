import { Link } from "@remix-run/react";
import { clsx } from "clsx";
import { ReactNode } from "react";

type OutlineLinkProps = (
	| {
			to: string;
			disabled?: false;
	  }
	| { to: ""; disabled: true }
) & {
	icon?: ReactNode;
	className?: string;
	children: ReactNode;
};

export function OutlineLink({
	children,
	icon,
	to,
	className,
	disabled,
}: OutlineLinkProps) {
	return (
		<Link
			to={to}
			className={clsx(
				"flex cursor-pointer justify-center rounded-lg border-2 border-fuchsia-500 bg-white px-4 py-2 uppercase text-fuchsia-500 shadow-md transition-colors duration-300 ease-in-out hover:border-pink-500 hover:bg-slate-100 hover:text-pink-500 dark:border-fuchsia-500 dark:bg-violet-700 dark:text-slate-200 dark:hover:bg-violet-500 dark:hover:text-slate-100",
				className ?? "",
			)}
			aria-disabled={disabled}
		>
			{children}
			{icon && <span className="ml-3 h-auto w-6">{icon}</span>}
		</Link>
	);
}
