import colors from "tailwindcss/colors";

export default {
	content: ["./app/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				transparent: "transparent",
				current: "currentColor",
				white: colors.white,
				black: colors.black,
				zinc: colors.zinc,
				violet: "#3C2360",
				fuchsia: "#641C64",
				pink: "#921D64",
			},
			fontFamily: {
				sans: ["IBM Plex Sans", "sans-serif"],
				heading: ["IBM Plex Sans Condensed", "sans-serif"],
			},
		},
	},
	plugins: [],
};
