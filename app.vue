<script setup>
useHead({
  title: 'web-quickstart - web-quickstart',
  meta: [
    {
      name: 'description',
      content:
          'web-quickstart, description.',
    },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'robots', content: 'index,follow' },
    // {
    //   name: 'google-site-verification',
    //   content: 'YD6pMqJcy6YEPx5Cksat8qo0-fsFC6RXlLi477b2Vtg',
    // },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'web-quickstart' },
    { property: 'og:title', content: 'web-quickstart - web-quickstart' },
    {
      property: 'og:description',
      content:
          'web-quickstart, Fdescription.',
    },
    { property: 'og:url', content: 'https://www.web-quickstart.com/' },
    { property: 'og:locale', content: 'en_EN' },
    { property: 'og:image', content: '/logo.png' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'web-quickstart - web-quickstart' },
    {
      name: 'twitter:description',
      content:
          'web-quickstart, description.',
    },
    { name: 'twitter:image', content: '/logo.png' },
    { name: 'apple-mobile-web-app-title', content: 'web-quickstart' },
  ],
  link: [
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '96x96',
      href: '/favicon-96x96.png',
    },
    { rel: 'icon', type: 'image/ico', sizes: 'any', href: '/favicon.ico' },
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: '/favicon.svg',
    },
    {
      rel: 'shortcut icon',
      href: '/favicon.ico',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
  ],
})
</script>

<template>
  <!-- <NuxtRouteAnnouncer /> -->
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
