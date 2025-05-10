<template>
  <main>
    <Header />
    <LandingPage404 />
    <FooterLandingPageFooter />
  </main>
</template>
<script setup lang="ts">
useHead({
  title: 'zentry-clone - Not Found',
  meta: [{ name: 'description', content: `Effortlessly summon your journey with our App.` }],
  bodyAttrs: {
    class: ''
  }
})
useSeoMeta({
  title: 'zentry-clone - Not Found',
  ogTitle: 'zentry-clone  - Not Found',
  description: `Effortlessly summon your journey with our App.`,
  ogDescription: `Effortlessly summon your journey with our App.`
  // ogImage: "https://example.com/image.png",
  // twitterCard: "summary_large_image",
})
</script>
