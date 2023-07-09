import { NavLink } from "@remix-run/react";
import classNames from "classnames";
function FooterLink({ to, label }: { to: string; label: string }) {
	return (
		<li>
			<NavLink
				to={to}
				className={({ isActive }) => {
					return classNames(
						"text-slate-700 hover:text-violet-500 hover:underline",
						{
							"text-gray-400 hover:text-gray-400 hover:no-underline": isActive,
						},
					);
				}}
			>
				{label}
			</NavLink>
		</li>
	);
}

export function Footer() {
	return (
		<div className="mt-6 flex flex-col items-center gap-6 bg-slate-200 py-6">
			<ul className="flex flex-wrap justify-center gap-6 px-6 ">
				<FooterLink to="/" label="Home" />
				<FooterLink to="/articles" label="Articles" />
				<FooterLink to="/courses" label="Courses" />
				<FooterLink to="/speaking" label="Speaking" />
				<FooterLink to="/uses" label="Uses" />
				<FooterLink to="/about" label="About" />
			</ul>
			<p className="text-slate-500">The Coding Temple © 2023</p>
		</div>
	);
}
