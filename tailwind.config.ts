import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#131313',
        slate: '#2d2d2d',
        mint: '#3cffd0',
        ultraviolet: '#5200ff',
        yellow: '#f4ff3c',
        pink: '#ff3cae',
        orange: '#ff6a3c',
        blue: '#3c8aff',
        muted: '#949494',
      },
      fontFamily: {
        display: ['var(--font-display)'],
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
        serif: ['var(--font-serif)'],
      },
    },
  },
  plugins: [],
}

export default config
