// https://nuxt.com/docs/api/configuration/nuxt-config

import { resolve } from "path";

export default defineNuxtConfig({
   typescript: {
    shim: false
  },
  alias: {
    "@": resolve(__dirname, "/"),
  },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  css: ["~/assets/css/input.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
