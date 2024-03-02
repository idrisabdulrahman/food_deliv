/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	theme: {
		// container: {
		// 	center: true,
		// 	padding: '2rem',
		// 	screens: {
		// 		'2xl': '1400px',
		// 	},
		// },
		extend: {
			width: {
				150: '150px',
				190: '190px',
				225: '225px',
				275: '275px',
				300: '300px',
				340: '340px',
				350: '350px',
				375: '375px',
				460: '460px',
				656: '656px',
				880: '880px',
				508: '508px',
			},
			height: {
				80: '80px',
				150: '150px',
				225: '225px',
				300: '300px',
				340: '340px',
				370: '370px',
				420: '420px',
				510: '510px',
				600: '600px',
				650: '650px',
				685: '685px',
				800: '800px',
				'90vh': '90vh',
			},
			minWidth: {
				210: '210px',
				350: '350px',
				620: '620px',
			},
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1536px',
			},
			colors: {
				headingColor: '#2e2e2e',
				textColor: '#515151',
				'txt-primary': '#f3f3f3',
				darkOverlay: 'rgba(0,0,0,0.2)',
				lightOverlay: 'rgba(255,255,255,0.4)',
				lighttextGray: '#9ca0ab',
				card: 'rgba(256,256,256,0.8)',
				cartBg: '#282a2c',
				cartItem: '#2e3033',
				cartTotal: '#343739',
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: 0 },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: 0 },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
	plugins: [require('tailwind-scrollbar')],
}
