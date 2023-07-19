import { NavLink } from "@remix-run/react";
import { clsx } from "clsx";
function FooterLink({ to, label }: { to: string; label: string }) {
	return (
		<li>
			<NavLink
				to={to}
				className={({ isActive }) => {
					return clsx(
						"text-slate-700 hover:text-violet-500 hover:underline dark:text-slate-200 dark:hover:text-pink-300",
						{
							"cursor-default text-slate-400 hover:text-slate-400 hover:no-underline":
								isActive,
						},
					);
				}}
				end
			>
				{label}
			</NavLink>
		</li>
	);
}

export function Footer() {
	return (
		<div className="mt-6 flex flex-col items-center gap-6 bg-slate-200 py-6 dark:bg-violet-500">
			<ul className="flex flex-wrap justify-center gap-6 px-6 ">
				<FooterLink to="/" label="Home" />
				<FooterLink to="/blog" label="Blog" />
				<FooterLink to="/courses" label="Courses" />
				{/* <FooterLink to="/speaking" label="Speaking" />
				<FooterLink to="/uses" label="Uses" /> */}
				<FooterLink to="/about" label="About" />
			</ul>
			<p className="text-slate-500 dark:text-slate-400">
				The Coding Temple © 2023
			</p>
		</div>
	);
}
