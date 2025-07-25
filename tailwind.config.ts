	/* eslint-disable @typescript-eslint/no-require-imports */

	import type { Config } from "tailwindcss";

	export default {
		darkMode: ["class"],
		content: [
			"./index.html",
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
				fontFamily: {
					sans: ['Helvetica', 'Arial', 'sans-serif'],
					serif: ['Eyes for Serif1', 'serif'],
					display: ['Helvetica', 'Arial', 'sans-serif'],
				},
				colors: {
					border: 'hsl(var(--border))',
					input: 'hsl(var(--input))',
					ring: 'hsl(var(--ring))',
					background: 'hsl(var(--background))',
					foreground: 'hsl(var(--foreground))',
					primary: {
						DEFAULT: 'hsl(var(--primary))',
						foreground: 'hsl(var(--primary-foreground))'
					},
					secondary: {
						DEFAULT: 'hsl(var(--secondary))',
						foreground: 'hsl(var(--secondary-foreground))'
					},
					destructive: {
						DEFAULT: 'hsl(var(--destructive))',
						foreground: 'hsl(var(--destructive-foreground))'
					},
					muted: {
						DEFAULT: 'hsl(var(--muted))',
						foreground: 'hsl(var(--muted-foreground))'
					},
					accent: {
						DEFAULT: 'hsl(var(--accent))',
						foreground: 'hsl(var(--accent-foreground))'
					},
					popover: {
						DEFAULT: 'hsl(var(--popover))',
						foreground: 'hsl(var(--popover-foreground))'
					},
					card: {
						DEFAULT: 'hsl(var(--card))',
						foreground: 'hsl(var(--card-foreground))'
					},
					sidebar: {
						DEFAULT: 'hsl(var(--sidebar-background))',
						foreground: 'hsl(var(--sidebar-foreground))',
						primary: 'hsl(var(--sidebar-primary))',
						'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
						accent: 'hsl(var(--sidebar-accent))',
						'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
						border: 'hsl(var(--sidebar-border))',
						ring: 'hsl(var(--sidebar-ring))'
					},
					// Strong, bold color palette
					'charcoal': {
						DEFAULT: 'hsl(var(--charcoal))',
						50: '#f8f9fa',
						100: '#e9ecef',
						400: '#6c757d',
						500: '#495057',
						600: '#343a40',
						700: '#212529',
						900: '#1C1C1C',
					},
					'strong-green': {
						DEFAULT: 'hsl(var(--strong-green))',
						50: '#f0fdf4',
						100: '#dcfce7',
						400: '#4ade80',
						500: '#11864B',
						600: '#16a34a',
						700: '#15803d',
						800: '#166534',
						900: '#14532d',
					},
					'electric-blue': {
						DEFAULT: 'hsl(var(--electric-blue))',
						50: '#eff6ff',
						100: '#dbeafe',
						400: '#60a5fa',
						500: '#3b82f6',
						600: '#2563eb',
						700: '#1d4ed8',
						800: '#1e40af',
						900: '#1e3a8a',
					},
					'warm-orange': {
						DEFAULT: 'hsl(var(--warm-orange))',
						50: '#fff7ed',
						100: '#ffedd5',
						400: '#fb923c',
						500: '#f97316',
						600: '#ea580c',
						700: '#c2410c',
						800: '#9a3412',
						900: '#7c2d12',
					}
				},
				borderRadius: {
					lg: 'var(--radius)',
					md: 'calc(var(--radius) - 2px)',
					sm: 'calc(var(--radius) - 4px)'
				},
				keyframes: {
					'accordion-down': {
						from: { height: '0' },
						to: { height: 'var(--radix-accordion-content-height)' }
					},
					'accordion-up': {
						from: { height: 'var(--radix-accordion-content-height)' },
						to: { height: '0' }
					},
					'fade-in': {
						'0%': {
							opacity: '0',
							transform: 'translateY(10px)'
						},
						'100%': {
							opacity: '1',
							transform: 'translateY(0)'
						}
					},
					'hero-fade-in': {
						'0%, 50%': {
							opacity: '0',
							transform: 'translateY(20px)'
						},
						'100%': {
							opacity: '1',
							transform: 'translateY(0)'
						}
					},
					'delayed-fade-in': {
						'0%, 50%': {
							opacity: '0',
							transform: 'translateY(10px)'
						},
						'100%': {
							opacity: '1',
							transform: 'translateY(0)'
						}
					},
					'slide-in-left': {
						'0%': {
							opacity: '0',
							transform: 'translateX(-30px)'
						},
						'100%': {
							opacity: '1',
							transform: 'translateX(0)'
						}
					},
					'slide-in-right': {
						'0%': {
							opacity: '0',
							transform: 'translateX(30px)'
						},
						'100%': {
							opacity: '1',
							transform: 'translateX(0)'
						}
					},
					'scale-in': {
						'0%': {
							opacity: '0',
							transform: 'scale(0.9)'
						},
						'100%': {
							opacity: '1',
							transform: 'scale(1)'
						}
					},
					'gradient-shift': {
						'0%, 100%': {
							'background-position': '0% 50%'
						},
						'50%': {
							'background-position': '100% 50%'
						}
					},
					'slide': {
						'0%': { transform: 'translateX(0)' },
						'100%': { transform: 'translateX(-50%)' }
					},
					'float': {
						'0%, 100%': { transform: 'translateY(0)' },
						'50%': { transform: 'translateY(-10px)' }
					},
					'pulse-soft': {
						'0%, 100%': { opacity: '1' },
						'50%': { opacity: '0.8' }
					},
					'shimmer': {
						'0%': { backgroundPosition: '-1000px 0' },
						'100%': { backgroundPosition: '1000px 0' }
					}
				},
				animation: {
					'accordion-down': 'accordion-down 0.2s ease-out',
					'accordion-up': 'accordion-up 0.2s ease-out',
					'fade-in': 'fade-in 0.5s ease-out',
					'hero-fade-in': 'hero-fade-in 2s ease-out forwards',
					'delayed-fade-in': 'delayed-fade-in 2s ease-out',
					'slide-in-left': 'slide-in-left 0.5s ease-out',
					'slide-in-right': 'slide-in-right 0.5s ease-out',
					'scale-in': 'scale-in 0.3s ease-out',
					'gradient-shift': 'gradient-shift 3s ease-in-out infinite',
					'slide': 'slide 25s linear infinite',
					'float': 'float 3s ease-in-out infinite',
					'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
					'shimmer': 'shimmer 2s linear infinite'
				}
			}
		},
		plugins: [require("tailwindcss-animate")],
	} satisfies Config;