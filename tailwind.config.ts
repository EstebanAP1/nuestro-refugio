import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      textColor: {
        principal: '#0474B1',
        secondary: '#FBFCFB',
        tertiary: '#A9B6C9'
      },
      backgroundColor: {
        principal: '#0474B1',
        secondary: '#FBFCFB',
        page: '#88B3C9'
      },
      borderColor: {
        principal: '#0474B1'
      }
    }
  },
  plugins: [require('@midudev/tailwind-animations')]
}
export default config
