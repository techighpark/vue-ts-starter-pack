<template>
  <header
    class="fixed z-50 w-full py-1 bg-white/50 backdrop-blur-lg overflow-hidden inset-x-0 min-w-[20rem]"
  >
    <!-- <div
      class="sm:hidden w-full max-w-[20rem] bg-rose-600 text-center text-white font-bold"
    >
      xs / 320px / 20rem
    </div>
    <div
      class="hidden sm:inline-block md:hidden w-full max-w-screen-sm bg-rose-600 text-center text-white font-bold"
    >
      sm / 640px / 40rem
    </div>
    <div
      class="hidden md:inline-block lg:hidden w-full max-w-screen-md bg-rose-600 text-center text-white font-bold"
    >
      md / 768px / 48rem
    </div>
    <div
      class="hidden lg:inline-block w-full max-w-screen-lg bg-rose-600 text-center text-white font-bold"
    >
      lg / 1024px / 64rem
    </div> -->
    <!-- <div
      class="hidden xl:inline-block 2xl:hidden w-full max-w-screen-xl bg-rose-500"
    >
      xl
    </div>
    <div class="hidden 2xl:inline-block w-full max-w-screen-2xl bg-rose-500">
      2xl
    </div> -->
    <div class="hidden w-full max-w-3xl bg-rose-500">3xl</div>
    <nav class="w-full">
      <!-- ---------------------------------------------------------------- Navigation Bar: Mobile -->
      <div
        :class="isOpenedMobileMenu ? 'bg-white' : 'bg-transparent'"
        class="md:hidden relative transition-all duration-500"
      >
        <div class="flex justify-between items-center mx-4">
          <!-- Brand Logo or Title -->
          <h1
            @click="routerTo('home', router)"
            :class="isOpenedMobileMenu ? 'opacity-0' : 'opacity-100 '"
            class="font-bold text-lg uppercase transition-opacity duration-300 cursor-pointer"
          >
            marvel fitness
          </h1>

          <!-- Navigation - Close Button -->
          <MobileMenuButton
            v-model="isOpenedMobileMenu"
            @toggle-mobile-menu="toggleMobileMenu"
          />
        </div>
        <!-- Mobile Navigation -->
        <div
          class="transition-all duration-300"
          :class="
            isOpenedMobileMenu
              ? 'h-screen opacity-100 overflow-hidden'
              : 'h-0 opacity-0'
          "
        >
          <ul class="ml-10 flex flex-col gap-y-2">
            <template v-for="item in router.options.routes.slice(1)">
              <template v-if="item.meta?.label">
                <li class="mobile-nav-item" @click="routerTo(item, router)">
                  <span>{{ item.meta.label }}</span>
                  <span class="mobile-nav-chevron">
                    <ChevronRightIcon class="stroke-1" />
                  </span>
                </li>
              </template>
            </template>
          </ul>
        </div>
      </div>
      <!-- ---------------------------------------------------------------- Navigation Bar: Web -->
      <ul class="hidden md:flex justify-between mx-6">
        <li
          class="flex items-center cursor-pointer"
          @click="routerTo('home', router)"
        >
          <h1 class="font-bold text-lg text-black uppercase">marvel fitness</h1>
        </li>
        <template v-for="item in router.options.routes.slice(1)">
          <template v-if="item.meta?.label">
            <li class="web-nav-item" @click="routerTo(item, router)">
              <span class="">{{ item.meta.label }}</span>
            </li>
          </template>
        </template>
        <li class="web-nav-item">🛒</li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { Ref, ref } from "vue";
import { useRouter } from "vue-router";
import { ChevronRightIcon } from "@heroicons/vue/24/outline";
// vue
import MobileMenuButton from "@components/MobileMenuButton.vue";
// lib
import { routerTo } from "@router/useRouter";

const router = useRouter();
/*
|------------------------------------------------------------------------------------------
| Mobile Navigation toggle
|------------------------------------------------------------------------------------------
*/
const isOpenedMobileMenu: Ref<boolean> = ref(false);
function toggleMobileMenu(value: boolean) {
  isOpenedMobileMenu.value = value;
}
</script>

<style>
/* Navigation */
/* Web */
.web-nav-item {
  @apply h-10 px-2 flex items-center  leading-none text-xs text-gray-800 cursor-pointer;
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
  @apply relative text-3xl font-bold leading-relaxed cursor-pointer flex items-center;
}
.mobile-nav-chevron {
  @apply absolute right-4 h-5 w-5 text-gray-500 opacity-0 transition-all;
}

.mobile-nav-item:hover .mobile-nav-chevron {
  opacity: 1;
}
</style>
