import type { LinksFunction } from "@remix-run/node";
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "@remix-run/react";
import { RemixDevTools } from "remix-development-tools";
import rdtStylesheet from "remix-development-tools/stylesheet.css";
import styles from "~/assets/css/tailwind.css";
import { Footer, Nav } from "./components";

export const links: LinksFunction = () => [
	...(rdtStylesheet ? [{ rel: "stylesheet", href: rdtStylesheet }] : []),
	{ rel: "stylesheet", href: styles },
];

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
				<div className="min-h-full bg-slate-100 dark:bg-zinc-900">
					<div className="mx-auto min-h-full max-w-5xl flex-col bg-white py-6 dark:bg-violet-900 lg:flex">
						<Nav />
						<main className="flex-1 py-2 md:py-4">
							<Outlet />
						</main>
						<Footer />
					</div>
					<ScrollRestoration />
					<Scripts />
					<LiveReload />
					<RemixDevTools />
				</div>
			</body>
		</html>
	);
}
