<script setup>
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const localePath = useLocalePath();

const emit = defineEmits(["closeDropdown"]);

const onClickOutside = (element, callback) => {
  document.addEventListener("click", (e) => {
    let dropdown = document.getElementById("feature-dropdown");
    if (!dropdown?.contains(e?.target)) callback();
  });
};

const props = defineProps(["showFeaturesDropdown", "list"], {
  hide: Boolean,
});

const showFeaturesDropdown = computed(() => props.showFeaturesDropdown);

onMounted(() => {
  setTimeout(() => {
    onClickOutside("#feature-dropdown", () => {
      if (showFeaturesDropdown.value == true) {
        emit("closeDropdown", false);
      }
    });
  }, 600);
});
</script>
<template>
  <div
    id="feature-dropdown"
    class="absolute bg-white -left-4 top-[40px] lg:w-[220px] p-[12px] rounded-[0px_20px_20px_20px] shadow-[#0000004D] shadow-md"
  >
    <div class="flex flex-col gap-2">
      <div v-for="item in list" :key="item" class="w-full">
        <router-link
          :to="localePath({ name: item.name })"
          :class="route.name === item.name ? 'active' : ''"
          class="p-[16px_20px_16px_20px] dropdown-item rounded-[5px]"
        >
          <div class="text-[16px] font-medium">{{ item.context }}</div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<style scoped>
.dropdown-item {
  @apply flex flex-col gap-2 p-4 rounded-md hover:bg-[#FEFBF1] hover:!text-brand transition-colors ease-in-out duration-200;
}
.active {
  @apply flex flex-col gap-2 p-4 rounded-md !bg-brand/[25%] !text-brand transition-colors ease-in-out duration-200;
}
.dropdown-menu-title {
  @apply text-brand;
}
.dropdown-item:hover .dropdown-menu-title {
  @apply text-gray-100;
}
</style>
