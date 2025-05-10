<template>
  <button
    :type="type"
    :disabled="loading"
    class="w-full btn-brand !text-black !rounded-[8px] !py-3 font-medium"
    :class="class"
  >
    <PreloadersButtonPreloader
      :loaderColorPrimary="loadingColor ?? '#000000'"
      v-if="loading"
    />
    <span v-else>
      {{ name }}
    </span>
  </button>
</template>

<script setup>
const props = defineProps(["name", "type", "loading", "class", "loadingColor"]);
</script>

<style></style>
