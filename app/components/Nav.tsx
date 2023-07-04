import { Link } from "@remix-run/react";
import classnames from "classnames";
import { ReactNode, useState } from "react";

import { Temple } from "~/assets/images";

function NavLink({ to, children }: { to: string; children: ReactNode }) {
	return (
		<Link to={to} className="">
			{children}
		</Link>
	);
}

function MobileNav({ open = false }: { open?: boolean }) {
	return (
		<div
			className={classnames({
				hidden: !open,
			})}
		></div>
	);
}

export function Nav() {
	const [mobileOpened, setMobileOpened] = useState(false);
	return (
		<header className="mx-auto max-w-7xl lg:px-8">
			<MobileNav open={mobileOpened} />
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
						className="bg-gr group flex items-center rounded-full px-4 py-2 text-sm font-medium text-zinc-800 shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur"
						onClick={() => setMobileOpened(!mobileOpened)}
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
			</div>
		</header>
	);
}
