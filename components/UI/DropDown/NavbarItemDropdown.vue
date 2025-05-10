<template>
  <a
    href="javascript:(void)"
    class="flex p-[10px] px-0 justify-between"
    @click="toggleDropdown"
  >
    <span
      class="place-self-center text-[16px] font-medium flex items-center gap-[10px] text-[#000000] leading-[16px]"
    >
      {{ page.name }}
    </span>

    <IconsArrowDown :class="{ 'rotate-180': showDropdown }" />
  </a>

  <ul
    v-if="showDropdown"
    class="flex flex-col overflow-hidden mt-4 pl-4 font-medium gap-4"
  >
    <li v-for="link in page.subLinks" :key="link.linkName">
      <RouterLink
        :to="localePath({ name: link.linkName })"
        class="p-[10px] px-0 flex justify-start rounded-[5px]"
      >
        <span
          class="place-self-center text-[16px] font-medium flex items-center gap-[10px] text-[#4D4D4D] leading-[16px]"
        >
          {{ link.name }}
        </span>
      </RouterLink>
    </li>
  </ul>
</template>

<script lang="ts" setup>
const props = defineProps(["page"]);
const localePath = useLocalePath();

const route = useRoute();
const showDropdown = ref(false);
const toggleDropdown = () => (showDropdown.value = !showDropdown.value);
// const isActiveRoute = (linkName: string) => {
//   const path = localePath({ name: linkName });
//   return route.path.startsWith(path);
// };

// onMounted(() => {
//   if (localePath(props.page.linkName)) {
//     showDropdown.value = true;
//   }

//   console.log(props.page);
// });
</script>

<style></style>
