import { Link } from "@remix-run/react";
import { ReactNode } from "react";

import { Temple } from "~/assets/images";

function NavLink({ to, children }: { to: string; children: ReactNode }) {
	return (
		<Link to={to} className="">
			{children}
		</Link>
	);
}

export function Nav() {
	return (
		<header className="mx-auto max-w-7xl lg:px-8">
			<div className="relative flex gap-4 px-4 py-2">
				<div className="flex flex-1">
					<Link to="/">
						<img src={Temple} className="w-10" />
					</Link>
					<div className="hidden">
						<nav className="">
							<ul className="">
								<li className="">
									<NavLink to="blog">Blog</NavLink>
								</li>
								<li className="">
									<NavLink to="about">About</NavLink>
								</li>
								<li className="">
									<NavLink to="speaking">Speaking</NavLink>
								</li>
								<li className="">
									<NavLink to="uses">Uses</NavLink>
								</li>
							</ul>
						</nav>
					</div>
				</div>
				<div className="flex flex-1 justify-end md:justify-center">
					<button
						title="Toggle mobile menu"
						className="group flex items-center rounded-full px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur"
					>
						Menu
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="ml-3 h-auto w-4 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M19.5 8.25l-7.5 7.5-7.5-7.5"
							/>
						</svg>
					</button>
				</div>
				<div className="flex justify-end md:flex-1">
					<button className="group ml-2 rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							className="h-auto w-6 stroke-yellow-600"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
							/>
						</svg>
					</button>
				</div>
			</div>
		</header>
	);
}
