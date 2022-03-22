const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./public/**/*.{html, js}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
			},
			animation: {
				"spin-slow": "spin 5s linear infinite",
			},
			backgroundImage: {
				"section-bg": "url('/assets/img/wallpaperbetter.jpg')",
				"hero-bg": "url('/assets/img/hero.jpg')",
			},
		},
		container: {
			center: true,
			padding: {
				DEFAULT: "1rem",
				sm: "2rem",
				lg: "4rem",
				xl: "5rem",
				"2xl": "6rem",
			},
		},
		textFillColor: (theme) => theme("borderColor"),
		textStrokeColor: (theme) => theme("borderColor"),
		textStrokeWidth: (theme) => theme("borderWidth"),
		paintOrder: {
			fsm: { paintOrder: "fill stroke markers" },
			fms: { paintOrder: "fill markers stroke" },
			sfm: { paintOrder: "stroke fill markers" },
			smf: { paintOrder: "stroke markers fill" },
			mfs: { paintOrder: "markers fill stroke" },
			msf: { paintOrder: "markers stroke fill" },
		},
	},
	variants: {
		textFillColor: ["responsive"],
		textStrokeColor: ["responsive"],
		textStrokeWidth: ["responsive"],
		paintOrder: ["responsive"],
	},
	plugins: [require("tailwindcss-text-fill-stroke")()],
};
