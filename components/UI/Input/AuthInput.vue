<template>
  <div
    :class="error ? 'border-[#DA5252]' : ' border-[#8D8D8D]'"
    class="w-full font-light flex flex-row items-center text-[#8D8D8D] outline-none overflow-hidden bg-[#FFFFFF] border-[1px] opacity-[0.8029] rounded-[5px] text-[18px]"
  >
    <!-- <Label v-if="label" :class="labelClasses">{{ label }}</Label> -->
    <div class="lg:pl-4 pl-2"><slot></slot></div>
    <input
      :class="error ? 'border-[#DA5252]' : ' border-neutral-900'"
      class="w-full font-light text-[18px] placeholder:text-[#8D8D8D] !pl-2 outline-none !p-3"
      :placeholder="placeholder"
      :type="type"
      :value="modelValue"
      :disabled="disabled"
      :required="required"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script setup>
import { defineAsyncComponent } from "vue";

const Label = defineAsyncComponent(() => import("./Label.vue"));
defineProps({
  modelValue: String | Number,
  type: String,
  placeholder: String,
  error: Boolean,
  errorsMsg: String,
  label: String,
  labelClasses: String,
  disabled: Boolean,
  required: Boolean,
});

const emit = defineEmits(["update:modelValue"]);
</script>
