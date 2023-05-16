// https://nuxt.com/docs/api/configuration/nuxt-config
import { Buffer } from "buffer";

export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  runtimeConfig: {
    apiSecret: Buffer.from("admin" + ":" + "admin").toString("base64"),
    public: {
      apiBase: "http://0.0.0.0:8080/PowerUpAPI",
    },
  },
});
