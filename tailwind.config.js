/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          ivory: 'rgb(var(--color-ivory-rgb) / <alpha-value>)',
          beige: 'rgb(var(--color-beige-rgb) / <alpha-value>)',
          champagne: 'rgb(var(--color-champagne-rgb) / <alpha-value>)',
          taupe: 'rgb(var(--color-taupe-rgb) / <alpha-value>)',
          navy: 'rgb(var(--color-navy-rgb) / <alpha-value>)',
          charcoal: 'rgb(var(--color-charcoal-rgb) / <alpha-value>)',
          cream: 'rgb(var(--color-cream-rgb) / <alpha-value>)',
          muted: 'rgb(var(--color-muted-rgb) / <alpha-value>)',
        },
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['var(--font-manrope)', 'Inter', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        editorial: '0.2em',
        widest: '0.15em',
      },
      boxShadow: {
        subtle: '0 4px 20px -2px rgba(21, 23, 19, 0.05)',
        elevated: '0 20px 40px -15px rgba(21, 23, 19, 0.08)',
        card: '0 10px 30px -10px rgba(7, 19, 27, 0.06)',
      },
    },
  },
  plugins: [],
};
