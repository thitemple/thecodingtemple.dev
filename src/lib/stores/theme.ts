import { browser } from "$app/environment";
import { writable } from "svelte/store";

type Theme = "light" | "dark";

const userTheme = browser && (localStorage.getItem("color-scheme") as Theme);
const userPrefersDark = browser && window.matchMedia("(prefers-color-scheme: dark)").matches;
const defaultTheme = userTheme || (userPrefersDark ? "dark" : "light");

export const theme = writable<Theme>(defaultTheme);

export function toggleTheme() {
	theme.update((currentTheme) => {
		const newTheme = currentTheme === "light" ? "dark" : "light";
		document.documentElement.setAttribute("color-scheme", newTheme);
		localStorage.setItem("color-scheme", newTheme);
		return newTheme;
	});
}

export function setTheme(newTheme: Theme) {
	theme.set(newTheme);
}
