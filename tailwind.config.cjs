/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		colors: {
			slate: {
				100: 'var(--slate-100)',
				200: 'var(--slate-200)',
				300: 'var(--slate-300)',
				400: 'var(--slate-400)',
				500: 'var(--slate-500)',
				600: 'var(--slate-600)',
				700: 'var(--slate-700)',
				800: 'var(--slate-800)',
				900: 'var(--slate-900)',
				1000: 'var(--slate-1000)',
			},
			blue: {
				100: 'var(--blue-100)',
				200: 'var(--blue-200)',
				300: 'var(--blue-300)',
				400: 'var(--blue-400)',
				500: 'var(--blue-500)',
				600: 'var(--blue-600)',
				700: 'var(--blue-700)',
				800: 'var(--blue-800)',
				900: 'var(--blue-900)',
			},
			purple: {
				100: 'var(--purple-100)',
				200: 'var(--purple-200)',
				300: 'var(--purple-300)',
				400: 'var(--purple-400)',
				500: 'var(--purple-500)',
				600: 'var(--purple-600)',
				700: 'var(--purple-700)',
				800: 'var(--purple-800)',
				900: 'var(--purple-900)',
			},
			green: {
				100: 'var(--green-100)',
				200: 'var(--green-200)',
				300: 'var(--green-300)',
				400: 'var(--green-400)',
				500: 'var(--green-500)',
				600: 'var(--green-600)',
				700: 'var(--green-700)',
				800: 'var(--green-800)',
				900: 'var(--green-900)',
			},
			red: {
				100: 'var(--red-100)',
				200: 'var(--red-200)',
				300: 'var(--red-300)',
				400: 'var(--red-400)',
				500: 'var(--red-500)',
				600: 'var(--red-600)',
				700: 'var(--red-700)',
				800: 'var(--red-800)',
				900: 'var(--red-900)',
			},
		},
		extend: {
			animation: {
				floats: 'floats 2000ms ease-in-out infinite',
				pause: 'floats 2000ms ease-in-out infinite 1000ms',
			},

			keyframes: {
				floats: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': {
						transform: 'translateY(-10px)',
					},
				},
			},
		},
	},
	plugins: [],
};
