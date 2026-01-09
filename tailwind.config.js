/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                serif: ['Spectral', 'serif'],
                sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
            },
            fontSize: {
                body: ['17px', { lineHeight: '1.7' }],
                sm: ['15px', { lineHeight: '1.6' }],
                h4: ['18px', { lineHeight: '1.4' }],
                h3: ['20px', { lineHeight: '1.35' }],
                h2: ['24px', { lineHeight: '1.3' }],
                h1: ['30px', { lineHeight: '1.25' }],
            },
        },
    },
    plugins: [],
}
