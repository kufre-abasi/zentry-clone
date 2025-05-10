<template>
    <div class="flex justify-center flex-grow">
        <div
            class="loader simple-circle"
            :style="{
                width: `${loaderWidth}px`,
                height: `${loaderHeight}px`,
                borderColor: loaderColorSecondary,
                borderRightColor: loaderColorPrimary
            }"
        ></div>
    </div>
</template>

<script setup>
// Props with default values
const {
    loaderWidth = 20,
    loaderHeight = 20,
    loaderColorPrimary = "#fff",
    loaderColorSecondary = "#fff"
} = defineProps([
    "loaderWidth",
    "loaderHeight",
    "loaderColorPrimary",
    "loaderColorSecondary"
]);
</script>

<style>
@keyframes circle-loader {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

.loader.simple-circle {
    transform-origin: center center;
    border: var(--line-width, 2px) solid transparent;
    border-right-color: var(--loader-color-primary, rgb(248, 239, 239));
    width: var(--loader-width, 20px);
    height: var(--loader-height, 20px);
    border-radius: 50%;
    animation: circle-loader var(--animation-duration, 1s) infinite ease-out;
}
</style>
