<template>
  <header class="w-full">
    <!-- ----------------- banner ----------------- -->
    <div
      class="w-full flex flex-col md:flex-row md:items-center md:justify-between gap-y-6 md:gap-y-0 gap-x-0 md:gap-x-10 px-4 py-6 md:py-4 bg-gray-100"
    >
      <!-- banner text -->
      <div class="w-full md:w-1/2 flex items-center">
        <p class="text-xs text-gray-700">
          현재 계신 국가에 맞는 콘텐츠를 확인하거나 온라인 쇼핑을 하려면 해당
          국가 또는 지역을 선택하세요.
        </p>
      </div>
      <!-- banner form conatiner -->
      <div class="w-full md:w-1/2 flex h-9 leading-none">
        <input type="text" class="w-full max-w-sm mr-4 rounded-lg text-sm" />
        <button class="relative px-5 rounded-lg bg-black">
          <span class="text-sm text-white whitespace-nowrap">계속</span>
        </button>
        <button class="px-2 ml-2">😀</button>
      </div>
    </div>

    <!-- ----------------- navigation ----------------- -->
    <nav :class="isOpenMobileNavigation ? 'fixed inset-0 z-10' : 'relative'">
      <!-- Mobile Bar -->
      <div class="md:hidden relative border">
        <div class="w-full h-10 flex justify-between items-center">
          <div>a</div>
          <!-- Navigation - Close Button -->
          <div class="mx-4">
            <div>
              <input type="checkbox" id="mobile-nav-btn" class="hidden" />
              <label
                for="mobile-nav-btn"
                class=""
                @click="openMobileNavigation"
              >
                <span></span>
                <span></span>
              </label>
            </div>

            <!-- Mobile Navigation -->
            <div
              :class="isOpenMobileNavigation ? 'h-[100vh]' : 'h-0 '"
              class="mobile-nav absolute top-0 inset-x-0 overflow-hidden bg-white transition-all duration-500"
            >
              <ul class="">
                <li class="mobile-nav-item">
                  <span>Store</span>
                  <span class="mobile-nav-chevron">
                    <ChevronRightIcon class="stroke-1" />
                  </span>
                </li>
                <li class="mobile-nav-item">
                  <span>Mac</span>
                  <span class="mobile-nav-chevron">
                    <ChevronRightIcon class="stroke-1" />
                  </span>
                </li>
                <li class="mobile-nav-item">
                  <span>iPad</span>
                  <span class="mobile-nav-chevron">
                    <ChevronRightIcon class="stroke-1" />
                  </span>
                </li>
                <li class="mobile-nav-item">
                  <span>iPhone</span>
                  <span class="mobile-nav-chevron">
                    <ChevronRightIcon class="stroke-1" />
                  </span>
                </li>
                <li class="mobile-nav-item">
                  <span>Watch</span>
                  <span class="mobile-nav-chevron">
                    <ChevronRightIcon class="stroke-1" />
                  </span>
                </li>
                <li class="mobile-nav-item">
                  <span>Vision</span>
                  <span class="mobile-nav-chevron">
                    <ChevronRightIcon class="stroke-1" />
                  </span>
                </li>
                <li class="mobile-nav-item">
                  <span>AirPods</span>
                  <span class="mobile-nav-chevron">
                    <ChevronRightIcon class="stroke-1" />
                  </span>
                </li>
                <li class="mobile-nav-item">
                  <span> TV Home</span>
                  <span class="mobile-nav-chevron">
                    <ChevronRightIcon class="stroke-1" />
                  </span>
                </li>
                <li class="mobile-nav-item">
                  <span>Entertainment</span>
                  <span class="mobile-nav-chevron">
                    <ChevronRightIcon class="stroke-1" />
                  </span>
                </li>
                <li class="mobile-nav-item">
                  <span>Accessories</span>
                  <span class="mobile-nav-chevron">
                    <ChevronRightIcon class="stroke-1" />
                  </span>
                </li>
                <li class="mobile-nav-item">
                  <span>Support</span>
                  <span class="mobile-nav-chevron">
                    <ChevronRightIcon class="stroke-1" />
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Web Navigation Bar -->
      <ul class="hidden md:flex justify-around bg-white">
        <li class="web-nav-item">🍎</li>
        <li class="web-nav-item">Store</li>
        <li class="web-nav-item">Mac</li>
        <li class="web-nav-item">iPad</li>
        <li class="web-nav-item">iPhone</li>
        <li class="web-nav-item">Watch</li>
        <li class="web-nav-item">Vision</li>
        <li class="web-nav-item">AirPods</li>
        <li class="web-nav-item">TV & Home</li>
        <li class="web-nav-item">Entertainment</li>
        <li class="web-nav-item">Accessories</li>
        <li class="web-nav-item">Support</li>
        <li class="web-nav-item">🔍</li>
        <li class="web-nav-item">🛒</li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ChevronRightIcon } from "@heroicons/vue/24/outline";
import { Ref, ref } from "vue";

const isOpenMobileNavigation: Ref<boolean> = ref(false);
function openMobileNavigation() {
  isOpenMobileNavigation.value = !isOpenMobileNavigation.value;
}
</script>

<style scoped></style>
