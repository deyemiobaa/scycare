/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
	theme: {
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
				},
			},
		},
	},
	plugins: [],
}
