/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
	theme: {
		fontSize: {
			sm: ["14px", "19.6px"],
			base: ["16px", "22.4px"],
			lg: ["18px", "25.2px"],
			xl: ["20px", "28px"],
			"5xl": ["48px", "52.8px"],
			"4xl": ["40px", "44px"],
			"3xl": ["32px", "35.2px"],
			"2xl": ["24px", "26.4px"],
		},
		extend: {
			colors: {
				primary: "#002C3F",
				secondary: "#00C2E7",
				tertiary: "#FF7658",
				accent: {
					one: "#80959F",
					two: "#E0F6FC",
					three: "#FFE7E2",
				},
				grey: {
					one: "#595D6E",
					two: "#656973",
					three: "#828282",
					four: "#74788D",
					five: "#F2F3F8",
				},
			},
			backgroundColor: {
				button: {
					hover: "linear-gradient(0deg, #0088A2, #0088A2), #092C4C;",
					active: "linear-gradient(0deg, #0088A2, #0088A2), #092C4C;",
					disabled: "#E0E6E8",
					default: "#00C2E7",
				},
			},
			backgroundImage: {
				home: "url('/assets/images/home_bg.png')",
			},
			fontFamily: {
				hellix: ["Hellix", "sans-serif"],
			},
		},
	},
	plugins: [],
}
