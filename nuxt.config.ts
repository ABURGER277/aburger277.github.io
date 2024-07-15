// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  ssr: true, // SSR 활성화
  target: process.env.NODE_ENV === 'production' ? 'static' : 'server', // 배포 환경에서는 정적 사이트
  server: {
    port: 3000,
    host: '0.0.0.0'
  },
  vite: {
    server: {
      hmr: process.env.NODE_ENV !== 'production' ? {
        protocol: 'ws',
        host: 'localhost',
        port: 3000,
      } : false,
    }
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/content", "@nuxt/icon", "@nuxt/image"]
})