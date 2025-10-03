import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			rotate: {
				'15': '15deg',
			},
			backgroundImage: {
				'noise': "url('https://www.reactbits.dev/assets/noise.png')",
			},
			fontFamily: {
				sans: ['Poppins', 'system-ui', 'sans-serif'],
				poppins: ['Poppins', 'system-ui', 'sans-serif'],
			},
			colors: {
				background: 'hsl(var(--background))',
				'background-alt': 'hsl(var(--background-alt))',
				foreground: 'hsl(var(--foreground))',
				
				// Brand Colors
				brand: {
					orange: 'hsl(var(--brand-orange))',
					pink: 'hsl(var(--brand-pink))',
					purple: 'hsl(var(--brand-purple))',
				},
				
				// Text Colors
				heading: 'hsl(var(--heading))',
				body: 'hsl(var(--body))',
				'body-light': 'hsl(var(--body-light))',
				
				// UI Colors
				border: 'hsl(var(--border))',
				'border-light': 'hsl(var(--border-light))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
				
				// Status Colors
				success: {
					DEFAULT: 'hsl(var(--success))',
					foreground: 'hsl(var(--success-foreground))',
				},
				whatsapp: 'hsl(var(--whatsapp))',
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				
				// Legacy Support
				primary: {
					DEFAULT: 'hsl(var(--brand-orange))',
					foreground: 'hsl(var(--success-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--background-alt))',
					foreground: 'hsl(var(--heading))'
				},
				muted: {
					DEFAULT: 'hsl(var(--background-alt))',
					foreground: 'hsl(var(--body-light))'
				},
				accent: {
					DEFAULT: 'hsl(var(--brand-pink))',
					foreground: 'hsl(var(--success-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--background-alt))',
					foreground: 'hsl(var(--body))',
					primary: 'hsl(var(--heading))',
					'primary-foreground': 'hsl(var(--background))',
					accent: 'hsl(var(--background))',
					'accent-foreground': 'hsl(var(--heading))',
					border: 'hsl(var(--border))',
					ring: 'hsl(var(--ring))'
				}
			},
			backgroundImage: {
				'gradient-brand': 'var(--gradient-brand)',
				'gradient-brand-subtle': 'var(--gradient-brand-subtle)',
				'gradient-text': 'var(--gradient-text)',
			},
			boxShadow: {
				'brand': '0 4px 15px hsl(var(--shadow-brand))',
				'brand-lg': '0 8px 25px hsl(var(--shadow-brand))',
				'card': '0 4px 15px hsl(var(--shadow-card))',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			transitionTimingFunction: {
				'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
				'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
