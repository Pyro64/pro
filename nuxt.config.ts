// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxt/image", "@pinia/nuxt", "@vueuse/nuxt"],
  css: ["~/assets/styles/global.scss"],
  image: {
    quality: 100,
    format: ["webp"],
    lazy: true,
  },
});