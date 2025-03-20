
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
				eci: {
					blue: '#1A73E8',
					indigo: '#4338CA', 
					green: '#34A853',
					orange: '#FF6B35',
					red: '#DC2626',
					purple: '#7C3AED',
					yellow: '#FCD34D',
					teal: '#0D9488',
					pink: '#EC4899',
					cyan: '#06B6D4',
					'light-blue': '#E8F0FE',
					'light-green': '#E6F4EA',
					'light-orange': '#FFECE3',
					'light-red': '#FEE2E2',
					'light-purple': '#EDE9FE',
					'light-yellow': '#FEF3C7',
					'light-teal': '#CCFBF1',
					'light-pink': '#FCE7F3',
					'light-cyan': '#CFFAFE',
					white: '#FFFFFF',
					'off-white': '#F8F9FA',
					gray: '#F1F3F4'
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
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				fadeOut: {
					'0%': { opacity: '1' },
					'100%': { opacity: '0' }
				},
				slideUp: {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				slideDown: {
					'0%': { transform: 'translateY(-20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				pulse: {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.5' }
				},
				bounce: {
					'0%, 100%': { transform: 'translateY(-5%)', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)' },
					'50%': { transform: 'translateY(0)', animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				fadeIn: 'fadeIn 0.5s ease-in-out',
				fadeOut: 'fadeOut 0.5s ease-in-out',
				slideUp: 'slideUp 0.5s ease-in-out',
				slideDown: 'slideDown 0.5s ease-in-out',
				pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				bounce: 'bounce 1s infinite'
			},
			backdropFilter: {
				'none': 'none',
				'blur': 'blur(20px)'
			},
			boxShadow: {
				'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
				'card': '0 2px 10px rgba(0, 0, 0, 0.05)',
				'button': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
				'hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				'blue-gradient': 'linear-gradient(90deg, #1A73E8 0%, #4338CA 100%)',
				'green-gradient': 'linear-gradient(90deg, #34A853 0%, #10B981 100%)',
				'orange-gradient': 'linear-gradient(90deg, #FF6B35 0%, #FF9E2D 100%)',
				'purple-gradient': 'linear-gradient(90deg, #7C3AED 0%, #A78BFA 100%)',
				'cyan-gradient': 'linear-gradient(90deg, #06B6D4 0%, #0EA5E9 100%)',
				'rainbow-gradient': 'linear-gradient(45deg, #FF5F6D 0%, #FFC371 100%)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
