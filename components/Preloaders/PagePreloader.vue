<template>
    <div v-if="loading" :class="class" class="h-full flex items-center">
        <ButtonPreloader
            :loaderWidth="40"
            :loaderHeight="40"
            loaderColorSecondary="#16283A"
        />
    </div>
    <slot v-else></slot>
</template>

<script lang="ts" setup>
import ButtonPreloader from "./ButtonPreloader.vue";
const props = defineProps(["loading", "class"]);
</script>

<style></style>
