/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.{vue,js}',
    './pages/**/*.{vue,js}',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './content/**/*.{md,vue}'
  ],
  theme: {
    extend: {
      fontFamily: {
        gmarket: ['GmarketSansTTF', 'sans-serif'],
        serif:["NanumGothic", "serif"],
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

