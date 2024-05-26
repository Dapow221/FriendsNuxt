// https://nuxt.com/docs/api/configuration/nuxt-config
import path from 'path';

export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  devtools: { enabled: true },
  modules: [
    'nuxt-primevue',
    '@nuxtjs/tailwindcss',
  ],
  css: [
    'primeicons/primeicons.css'
  ],
  primevue: {
      options: {
        unstyled: true
      },
      importPT: { from: path.resolve(__dirname, './presets/lara/') }
  }
})
