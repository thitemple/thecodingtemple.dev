import { NavLink } from "@remix-run/react";
import { clsx } from "clsx";
import { ReactNode } from "react";

export function DesktopNavLink({
	to,
	children,
}: {
	to: string;
	children: ReactNode;
}) {
	return (
		<div className="flex h-full items-center">
			<NavLink
				to={to}
				className={({ isActive }) => {
					return clsx(
						"transition-all duration-300 ease-in-out hover:text-violet-500 hover:underline dark:hover:text-pink-300",
						{
							"cursor-default text-slate-500 no-underline hover:text-slate-500 hover:no-underline dark:text-slate-400 dark:hover:text-slate-400":
								isActive,
						},
					);
				}}
			>
				{children}
			</NavLink>
		</div>
	);
}
