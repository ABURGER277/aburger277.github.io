// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  ssr: true,
  target: 'static',
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/content", "@nuxt/icon", "@nuxt/image"]
})