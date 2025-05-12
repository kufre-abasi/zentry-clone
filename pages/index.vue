<template>
  <main>
    <SectionsHero />

    <SectionsWelcomeSection />

    <SectionsExploreSection />
  </main>
</template>
<script setup lang="ts">
useHead({
  title: "zentry-clone - Home",
  meta: [
    { name: "description", content: `Effortlessly summon your journey with our App.` },
  ],
});
useSeoMeta({
  title: "zentry-clone",
  ogTitle: "zentry-clone",
  description: `Effortlessly summon your journey with our App.`,
  ogDescription: `Effortlessly summon your journey with our App.`,
  // ogImage: "https://example.com/image.png",
  // twitterCard: "summary_large_image",
});
</script>
