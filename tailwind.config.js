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
				slate: colors.slate,
				violet: {
					300: "#4F1A84",
					500: "#3C1464",
					700: "#301051",
					900: "#210B37",
				},
				fuchsia: {
					500: "#841C64",
				},
				pink: {
					300: "#E45FB0",
					500: "#921D64",
				},
			},
			fontFamily: {
				sans: ["IBM Plex Sans", "sans-serif"],
				heading: ["IBM Plex Sans Condensed", "sans-serif"],
			},
		},
	},
	plugins: [],
};
