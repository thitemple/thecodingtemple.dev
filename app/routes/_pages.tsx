import { Outlet } from "@remix-run/react";

export default function PagesLayout() {
	return (
		<main>
			<Outlet />
		</main>
	);
}
