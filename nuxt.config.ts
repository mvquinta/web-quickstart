// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/eslint', '@nuxtjs/seo'],
  // nuxt/eslint
  eslint: {
    config: {
      standalone: false,
    },
  },
  css: ['~/styles/main.css'],
  // nuxtui
  ui: {
    global: true, // sets nuxtui components globally. No need to import them individually.
  },
  // nuxt/seo
  site: {
    url: 'https://www.web-quickstart.com',
    name: 'web-quickstart',
    description: 'web-quickstart description.',
    defaultLocale: 'en',
  },
  schemaOrg: {
    identity: 'Organization',
  },
})
