import { LoaderArgs, redirect } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { Page } from "~/components";

export function loader({ params }: LoaderArgs) {
	if (!params.slug) {
		return redirect("/");
	}

	return null;
}

export default function BlogLayout() {
	return (
		<Page>
			<Outlet />
		</Page>
	);
}
