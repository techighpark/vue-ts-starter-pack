<template>
  <header
    class="fixed z-10 bg-white/50 backdrop-blur-lg overflow-hidden inset-x-0 px-4"
  >
    <!-- :class="isOpenedMenu ? 'inset-0' : 'inset-x-0'" -->
    <nav class="">
      <!-- ---------------------------------------------------------------- Navigation Bar: Mobile -->
      <div class="md:hidden relative">
        <div
          :class="isOpenedMenu ? 'bg-white' : 'bg-transparent'"
          class="transition-all duration-500"
        >
          <div class="flex justify-between items-center">
            <!-- Brand Logo or Title -->
            <div class="">
              <h1
                :class="isOpenedMenu ? 'opacity-0' : 'opacity-100 '"
                class="font-bold text-lg uppercase transition-opacity duration-300"
              >
                marvel fitness
              </h1>
            </div>

            <!-- Navigation - Close Button -->
            <MenumCloseButton
              v-model="isOpenedMenu"
              @toggle="(value) => (isOpenedMenu = value)"
            />
          </div>
          <!-- Mobile Navigation -->
          <div
            class="transition-all duration-300"
            :class="
              isOpenedMenu ? 'h-screen mt-4 opacity-100' : 'h-0 opacity-0'
            "
          >
            <ul>
              <template v-for="item in router.options.routes.slice(1)">
                <template v-if="item.meta?.label">
                  <li class="mobile-nav-item" @click="routerTo(item.name)">
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
      </div>
      <!-- ---------------------------------------------------------------- Navigation Bar: Web -->
      <ul class="hidden md:flex justify-between">
        <li class="flex items-center cursor-pointer" @click="routerTo('home')">
          <h1 class="font-bold text-lg text-black uppercase">marvel fitness</h1>
        </li>
        <template v-for="item in router.options.routes.slice(1)">
          <template v-if="item.meta?.label">
            <li class="web-nav-item" @click="routerTo(item.name)">
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
import { useRouter, RouteRecordName } from "vue-router";
import { ChevronRightIcon } from "@heroicons/vue/24/outline";
// vue
import MenumCloseButton from "@components/MenuCloseButton.vue";

const router = useRouter();
/*
|------------------------------------------------------------------------------------------
| Mobile Navigation 
|------------------------------------------------------------------------------------------
*/
const isOpenedMenu: Ref<boolean> = ref(false);

/*
|------------------------------------------------------------------------------------------
| Navigation Push
|------------------------------------------------------------------------------------------
*/
function routerTo(value: RouteRecordName | undefined): void {
  router.push({ name: value });
  isOpenedMenu.value = false;
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
  @apply relative px-10 py-1 flex items-center justify-between text-3xl font-medium leading-relaxed  cursor-pointer;
}
.mobile-nav-chevron {
  @apply absolute right-4 h-5 w-5 text-gray-500 opacity-0 transition-all;
}

.mobile-nav-item:hover .mobile-nav-chevron {
  opacity: 1;
}
</style>
