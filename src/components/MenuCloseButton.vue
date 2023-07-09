<template>
  <div class="h-10 pr-4 flex items-center justify-end">
    <input type="checkbox" id="mobile-nav-btn" class="hidden" />
    <label for="mobile-nav-btn" @click="openMobileNavigation">
      <span></span>
      <span></span>
    </label>
  </div>
</template>

<script setup lang="ts">
import { Ref, ref } from "vue";

// Mobile
const isOpenedMenu: Ref<boolean> = ref(false);
function openMobileNavigation() {
  isOpenedMenu.value = !isOpenedMenu.value;
  emit("toggle", isOpenedMenu.value);
}
const emit = defineEmits<{
  toggle: [value: boolean];
}>();
</script>

<style scoped>
/* Navigation - Close Button */
label[for="mobile-nav-btn"] {
  @apply w-[1.25rem] h-3 flex flex-col justify-between cursor-pointer;
}

label[for="mobile-nav-btn"] span {
  @apply w-full h-[1.3px] bg-black rounded-xl transition-all;
}

input[id="mobile-nav-btn"]:checked + label {
  @apply w-4 h-4;
}
input[id="mobile-nav-btn"]:checked + label span {
  width: 1.3rem;
}
input[id="mobile-nav-btn"]:checked + label span:first-child {
  transform: rotate(45deg);
  transform-origin: 0% 0%;
}
input[id="mobile-nav-btn"]:checked + label span:last-child {
  transform: rotate(-45deg);
  transform-origin: 0% 100%;
}
</style>
