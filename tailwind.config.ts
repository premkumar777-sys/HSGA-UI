import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    light: 'hsl(215, 60%, 25%)',
                    DEFAULT: 'hsl(215, 60%, 15%)', // Modern Navy
                    dark: 'hsl(215, 60%, 10%)',
                },
                accent: {
                    light: 'hsl(20, 95%, 65%)',
                    DEFAULT: 'hsl(20, 95%, 55%)', // Saffron
                    dark: 'hsl(20, 95%, 45%)',
                },
                slate: {
                    50: '#f8fafc',
                    100: '#f1f5f9',
                    200: '#e2e8f0',
                    800: '#1e293b',
                    900: '#0f172a',
                }
            },
            fontFamily: {
                heading: ['var(--font-poppins)', 'sans-serif'],
                body: ['var(--font-inter)', 'sans-serif'],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            borderRadius: {
                'xl': '1rem',
                '2xl': '1.5rem',
                '3xl': '2rem',
            },
            boxShadow: {
                'premium': '0 10px 30px -5px rgba(0, 40, 85, 0.1), 0 4px 12px -2px rgba(0, 40, 85, 0.05)',
                'glass': 'inset 0 0 0 1px rgba(255, 255, 255, 0.1), 0 8px 32px 0 rgba(0, 0, 0, 0.08)',
            }
        },
    },
    plugins: [],
};
export default config;
