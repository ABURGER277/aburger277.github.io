// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-07-13",
  ssr: true,

  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/content", "@nuxt/icon", "@nuxt/image"],
  css: [
    '@/assets/css/tailwind.css'
  ],
  content: {
    highlight: {
      // Theme used in all color schemes.
      theme: 'github-dark'
    }
  }
})