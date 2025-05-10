<script setup>
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const localePath = useLocalePath();

const emit = defineEmits(["closeDropdown", "changeLang"]);

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
const changeLang = (value) => {
  emit("changeLang", value);
};

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
    class="absolute bg-white -left-4 top-[40px] lg:w-fit p-[10px] rounded-[0px_20px_20px_20px] shadow-[#0000004D] shadow-md"
  >
    <div class="flex flex-col gap-2">
      <div v-for="item in list" :key="item" class="w-full">
        <button
          @click="changeLang(item.code)"
          class="p-[16px_20px_16px_20px] !py-0 dropdown-item cursor-pointer rounded-[5px]"
        >
          <div class="text-[16px] capitalize font-medium">{{ item.code }}</div>
        </button>
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
