// https://nuxt.com/docs/api/configuration/nuxt-config
import { Buffer } from "buffer";

export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  runtimeConfig: {
    apiSecret: process.env.NUXT_API_SECRET,
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE_URL,
    },
  },
});
