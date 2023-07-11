import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "@remix-run/react";
import styles from "~/assets/css/tailwind.css";
import { Footer, Nav } from "./components";

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];

export default function App() {
	return (
		<html lang="en" className="h-full">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width,initial-scale=1" />
				<Meta />
				<Links />
			</head>
			<body className="h-full">
				<main className="mx-auto max-w-7xl bg-slate-100">
				<main className="mx-auto max-w-5xl bg-white py-6 dark:bg-violet-700">
				<Nav />
				<Outlet />
				<Footer />
			</main>
					<ScrollRestoration />
					<Scripts />
					<LiveReload />
				</main>
			</body>
		</html>
	);
}
