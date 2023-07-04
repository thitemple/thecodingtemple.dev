import { Link } from "@remix-run/react";

function FooterLink({ to, label }: { to: string; label: string }) {
	return (
		<li>
			<Link to={to} className="hover:underline">
				{label}
			</Link>
		</li>
	);
}

export function Footer() {
	return (
		<div className="mt-6 flex flex-col items-center gap-6 bg-slate-200 py-6">
			<ul className="flex flex-wrap justify-center gap-6 px-6 text-slate-700">
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
