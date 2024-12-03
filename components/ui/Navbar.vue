<script setup lang="ts">
const navigation = [
  [{ label: 'web-quickstart', to: '/' }],
  // [
  //   { label: 'About', to: '/' },
  //   { label: 'Contact', to: '/contact' },
  // ],
]
</script>

<template>
  <div class="pb-8">
    <UHorizontalNavigation :links="navigation" />
  </div>
</template>
