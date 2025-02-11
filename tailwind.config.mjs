export default {
	darkMode: "class",
	content: [
	  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
	  "./components/**/*.{js,ts,jsx,tsx,mdx}",
	  "./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
	  extend: {
		colors: {
		  primary:"#25121f",
		  accent:{
			DEFAULT: "#916538",
			hover: "#ECB176",
		  },
		},
		screens: {
		  lg: "960px",
		  md: "768px",
		  sm: "640px",
		  xl: "1200px",
		},
		fontFamily: {
		  primary: ['Lora'],
		},
	  },
	},
	plugins: [require("tailwindcss-animate")],
  };
  