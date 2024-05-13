/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      h1: {
        fontSize: '2.25rem',
        fontWeight: '800',
        lineHeight: '2.5rem',
      },
      h2: {
        fontSize: '1.5rem',
        fontWeight: '700',
        lineHeight: '2rem',
      },
      h3: {
        fontSize: '1.25rem',
        fontWeight: '600',
        lineHeight: '1.75rem',
      },
    },
  },
  plugins: [animations],
}

