import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                teal: {
                    500: '#6EC7C0',
                    200: '#A7E8E3',
                },
                red: {
                    500: '#E53946',
                },
                'yellow-orange': '#FFB300',
                'light-gray': '#F5F5F5',
            },
            fontFamily: {
                montserrat: ['Montserrat', 'sans-serif'],
                'source-sans': ['Source Sans Pro', 'sans-serif'],
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
                'fade-in': 'fadeIn 0.6s ease-out forwards',
                'scale-in': 'scaleIn 0.4s ease-out forwards',
                'bounce-subtle': 'bounce 1.2s infinite',
            },
        },
    },
    plugins: [],
};

export default config; 