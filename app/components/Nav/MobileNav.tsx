import { Link } from "@remix-run/react";
import { ReactNode, useEffect, useRef } from "react";

function MobileNavItem({
	to,
	children,
	autoFocus,
}: {
	to: string;
	autoFocus?: boolean;
	children: ReactNode;
}) {
	return (
		<li className="border-b border-slate-200 py-4 last:border-0">
			<Link to={to} autoFocus={autoFocus}>
				{children}
			</Link>
		</li>
	);
}

export function MobileNav({
	open = false,
	onClose,
}: {
	open?: boolean;
	onClose: () => void;
}) {
	const ref = useRef<HTMLDialogElement>(null);
	useEffect(() => {
		if (ref.current && open && !ref.current.open) {
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
			className="backdrop:bg-gray-900/50 z-50 w-5/6 rounded-2xl bg-white px-4 py-6 backdrop:backdrop-blur-sm dark:bg-violet-700"
			onClick={handleClick}
			ref={ref}
		>
			<header className="flex justify-between text-slate-500 dark:text-slate-200">
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
			<ul className="mt-6 flex flex-col text-lg text-slate-600 dark:text-slate-200">
				<MobileNavItem to="/">Home</MobileNavItem>
				<MobileNavItem to="/articles" autoFocus>
					Articles
				</MobileNavItem>
				<MobileNavItem to="/courses">Courses</MobileNavItem>
				{/* <MobileNavItem to="/speaking">Speaking</MobileNavItem>
				<MobileNavItem to="/uses">Uses</MobileNavItem> */}
				<MobileNavItem to="/about">About</MobileNavItem>
			</ul>
		</dialog>
	);
}
