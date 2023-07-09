import { NavLink } from "@remix-run/react";
import classNames from "classnames";
import { ReactNode } from "react";

export function DesktopNavLink({
	to,
	children,
}: {
	to: string;
	children: ReactNode;
}) {
	return (
		<div className="h-full">
			<NavLink
				to={to}
				className={({ isActive }) => {
					return classNames(
						"transition-all duration-300 ease-in-out hover:text-violet-500 hover:underline",
						{
							"cursor-default text-slate-500 no-underline hover:text-slate-500 hover:no-underline":
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
