import { Link } from "@remix-run/react";
import { useState } from "react";

import { Temple } from "~/assets/images";
import { DesktopNavLink } from "./DesktopNavLink";
import { MobileNav } from "./MobileNav";

export function Nav() {
	const [mobileOpened, setMobileOpened] = useState(false);
	return (
		<header className="mx-auto max-w-7xl">
			<div className="relative flex gap-4 px-4 py-2 md:px-6 lg:px-8">
				<div className="flex flex-1">
					<Link to="/">
						<img src={Temple} className="w-10" />
					</Link>
					<div className="hidden w-full justify-end lg:flex">
						<nav className="flex items-center gap-4 rounded-xl border border-slate-300 bg-white px-4 py-2 text-slate-600 shadow-md ring-1 ring-slate-300">
							<DesktopNavLink to="/articles">Articles</DesktopNavLink>
							<DesktopNavLink to="/courses">Courses</DesktopNavLink>
							<DesktopNavLink to="/speaking">Speaking</DesktopNavLink>
							<DesktopNavLink to="/uses">Uses</DesktopNavLink>
							<DesktopNavLink to="/about">About</DesktopNavLink>
						</nav>
					</div>
				</div>
				<div className="flex flex-1 justify-end lg:hidden">
					<button
						title="Toggle mobile menu"
						className="bg-gr group flex items-center rounded-full px-4 py-2 text-sm font-medium text-zinc-800 shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur"
						onClick={() => setMobileOpened(true)}
					>
						Menu
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="ml-3 h-auto w-4 stroke-zinc-500 backdrop:backdrop-blur-sm group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M19.5 8.25l-7.5 7.5-7.5-7.5"
							/>
						</svg>
					</button>
					<MobileNav
						open={mobileOpened}
						onClose={() => setMobileOpened(false)}
					/>
				</div>
			</div>
		</header>
	);
}
