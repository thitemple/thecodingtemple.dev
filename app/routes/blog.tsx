import { LoaderArgs, redirect } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

export function loader({ params }: LoaderArgs) {
	if (!params.slug) {
		return redirect("/");
	}

	return null;
}

export default function BlogLayout() {
	return (
		<main>
			<p>the layout</p>
			<Outlet />
		</main>
	);
}
