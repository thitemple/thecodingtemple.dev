import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	darkMode: "class",
	theme: {
		colors: {
			transparent: "transparent",
			current: "currentColor",
			white: colors.white,
			zinc: colors.zinc,
			slate: colors.slate,
			violet: {
				100: "#D1B3F0",
				200: "#A376D0",
				300: "#965ACE",
				400: "#7535B6",
				500: "#6120A1",
				600: "#4F1A84",
				700: "#451773",
				800: "#361259",
				900: "#210B37"
			},
			fuchsia: {
				300: "#A02279",
				500: "#841C64",
				600: "#691650"
			},
			pink: {
				100: "#f5c6e3",
				200: "#f0a8d4",
				300: "#e97cbe",
				400: "#da449f",
				500: "#c42786",
				600: "#ae2377",
				700: "#7b1955",
				800: "#921d64",
				900: "#661446"
			}
		},
		fontFamily: {
			sans: ["IBM Plex Sans", "sans-serif"],
			heading: ["IBM Plex Sans Condensed", "sans-serif"]
		}
	},

	plugins: [require("@tailwindcss/typography")]
} satisfies Config;
