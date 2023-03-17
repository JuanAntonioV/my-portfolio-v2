/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',

        // Or if using `src` directory:
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#ccd6f6',
                secondary: '#8892b0',
                highlight: '#64ffda',
                dark: '#0a192f',
                active: '#8892b021',
                card: '#112240',
            },
            fontFamily: {
                calibre: ['var(--font-calibre)', 'sans-serif'],
                sfmono: ['var(--font-sfmono)', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
