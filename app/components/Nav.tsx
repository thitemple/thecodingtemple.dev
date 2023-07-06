import { Link } from "@remix-run/react";
import { ReactNode, useEffect, useRef, useState } from "react";

import { Temple } from "~/assets/images";

function NavLink({ to, children }: { to: string; children: ReactNode }) {
	return (
		<Link to={to} className="">
			{children}
		</Link>
	);
}

function MobileNavItem({ to, children }: { to: string; children: ReactNode }) {
	return (
		<li className="border-b border-slate-200 py-4 last:border-0">
			<Link to={to}>{children}</Link>
		</li>
	);
}

function MobileNav({
	open = false,
	onClose,
}: {
	open?: boolean;
	onClose: () => void;
}) {
	const ref = useRef<HTMLDialogElement>(null);
	useEffect(() => {
		if (ref.current && open) {
			ref.current.showModal();
			ref.current.focus();
		}
		if (ref.current?.open && !open) {
			ref.current.close();
		}
	}, [ref.current, open]);

	useEffect(() => {
		function handleCancel() {
			onClose();
		}
		ref.current?.addEventListener("cancel", handleCancel);
		return () => {
			ref.current?.removeEventListener("cancel", handleCancel);
		};
	}, []);

	function handleClick(e: React.MouseEvent<HTMLDialogElement, MouseEvent>) {
		if (e.target === e.currentTarget) {
			onClose();
		}
	}

	return (
		<dialog
			className="z-50 w-5/6 rounded-2xl bg-white px-4 py-6 backdrop:bg-gray-900/50 backdrop:backdrop-blur-sm"
			onClick={handleClick}
			ref={ref}
		>
			<header className="flex justify-between text-slate-500">
				<h2>Navigation</h2>
				<button onClick={onClose}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						className="h-6 w-6"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
			</header>
			<ul className="mt-6 flex flex-col text-lg text-slate-600">
				<MobileNavItem to="/">Home</MobileNavItem>
				<MobileNavItem to="/articles">Articles</MobileNavItem>
				<MobileNavItem to="/courses">Courses</MobileNavItem>
				<MobileNavItem to="/speaking">Speaking</MobileNavItem>
				<MobileNavItem to="/uses">Uses</MobileNavItem>
				<MobileNavItem to="/about">About</MobileNavItem>
			</ul>
		</dialog>
	);
}

export function Nav() {
	const [mobileOpened, setMobileOpened] = useState(false);
	return (
		<header className="mx-auto max-w-7xl lg:px-8 ">
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
