<template>
  <header class="w-full">
    <nav :class="isOpenedMenu ? 'fixed inset-0 z-10' : 'relative'">
      <!-- -------------------------------------------------------------------------------------------------------------------------------------------- Navigation Bar: Mobile -->
      <div class="md:hidden relative">
        <div class="w-full h-10 flex justify-between items-center">
          <!-- Brand Logo or Title -->
          <div class="pl-4">
            <h1 class="font-bold text-lg uppercase">marvel fitness</h1>
          </div>

          <!-- Navigation - Close Button -->
          <!-- TODO -->
          <MenumCloseButton @toggle="(value) => (isOpenedMenu = value)" />

          <!-- Mobile Navigation -->
          <div
            :class="isOpenedMenu ? 'h-[100vh]' : 'h-0'"
            class="mobile-nav absolute top-0 inset-x-0 overflow-hidden bg-white transition-all duration-500"
          >
            <ul>
              <template v-for="item in routers">
                <li class="mobile-nav-item" @click="routerTo(item.routeName)">
                  <span>{{ item.label }}</span>
                  <span class="mobile-nav-chevron">
                    <ChevronRightIcon class="stroke-1" />
                  </span>
                </li>
              </template>
            </ul>
          </div>
        </div>
      </div>
      <!-- -------------------------------------------------------------------------------------------------------------------------------------------- Navigation Bar: Web -->
      <ul class="hidden px-4 md:flex justify-between bg-white">
        <li class="flex items-center cursor-pointer" @click="routerTo('home')">
          <h1 class="font-bold text-lg text-black uppercase">marvel fitness</h1>
        </li>
        <template v-for="item in routers">
          <li class="web-nav-item" @click="routerTo(item.routeName)">
            <span class="">{{ item.label }}</span>
          </li>
        </template>
        <li class="web-nav-item">🛒</li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ChevronRightIcon } from "@heroicons/vue/24/outline";
import { Ref, ref } from "vue";
import { useRouter } from "vue-router";
// vue
import MenumCloseButton from "@components/MenuCloseButton.vue";

// Mobile
const isOpenedMenu: Ref<boolean> = ref(false);

// routers
const routers = [
  {
    label: "Center",
    routeName: "center",
  },
  {
    label: "Trainer",
    routeName: "trainer",
  },
  {
    label: "Machine",
    routeName: "center",
  },
];
// router push
const router = useRouter();
function routerTo(value: string): void {
  router.push({ name: value });
}
</script>

<style>
ul {
  background-color: white;
}

/* Navigation */
/* Web */
.web-nav-item {
  @apply h-10 px-2 flex items-center bg-white leading-none text-xs text-gray-500 cursor-pointer;
}
/* Mobile */
body::-webkit-scrollbar {
  display: none;
}

body {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

body input[id="mobile-nav-btn"]:checked ~ ::-webkit-scrollbar {
  display: none;
}

body input[id="mobile-nav-btn"]:checked ~ body {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.mobile-nav-item {
  @apply relative px-10 py-1 flex items-center justify-between text-3xl font-medium leading-relaxed cursor-pointer;
}
.mobile-nav-chevron {
  @apply absolute right-4 h-5 w-5 text-gray-500 opacity-0 transition-all;
}

.mobile-nav-item:hover .mobile-nav-chevron {
  opacity: 1;
}
</style>
