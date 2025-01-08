/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
	theme: {
		extend: {
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			colors: {
				"main-dark": "#030e2f",
				"main-grey": "#bbbbbb",
				"main-blue": "#436de9",
			},
			screens: {
				"mobile-xs": "375px",
				mobile: "450px",
				"mobile-xl": "576px",
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
}
