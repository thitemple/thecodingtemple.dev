import { Outlet } from "@remix-run/react";

export default function PagesLayout() {
	return (
		<>
			<header></header>
			<main>
				<Outlet />
			</main>
		</>
	);
}
