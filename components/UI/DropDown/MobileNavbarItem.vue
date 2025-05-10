<template>
  <div>
    <ul class="flex flex-col font-medium gap-4">
      <li v-for="page in routes" :key="page.linkName">
        <RouterLink
          v-if="!page?.subLinks?.length"
          :to="localePath({ name: page.linkName })"
          class="p-[10px] px-0 flex justify-start rounded-[5px]"
        >
          <span
            class="place-self-center text-[16px] font-medium flex items-center gap-[10px] text-[#000000] leading-[16px]"
          >
            {{ page.name }}
          </span>
        </RouterLink>
        <UIDropDownNavbarItemDropdown v-else :page="page" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps(["routes", "title"]);
const route = useRoute();
const localePath = useLocalePath();
// const isActiveRoute = (linkName: string) => {
//   const path = localePath({ name: linkName });
//   return route.path.startsWith(path);
// };
</script>

<style></style>
