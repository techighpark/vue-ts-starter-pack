<template>
  <header class="w-full">
    <!-- banner -->
    <div
      class="w-full flex flex-col md:flex-row md:items-center md:space-x-10 md:justify-between p-4 bg-gray-100"
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
    <!-- navigation -->
    <nav class="">
      <ul class="flex justify-around">
        <li>🍎</li>
        <li>Store</li>
        <li>Mac</li>
        <li>iPad</li>
        <li>iPhone</li>
        <li>Watch</li>
        <li>Vision</li>
        <li>AirPods</li>
        <li>TV & Home</li>
        <li>Entertainment</li>
        <li>Accessories</li>
        <li>Support</li>
        <li>🔍</li>
        <li>🛒</li>
      </ul>
    </nav>
  </header>
  <body ref="bodyRef">
    <div class="relative">
      <!-- first image -->
      <div class="relative">
        <img
          src="./assets/image1.jpg"
          alt=""
          class="aspect-square object-cover object-top"
        />
        <!-- text -->
        <div
          class="absolute inset-x-0 top-1/4 flex flex-col items-center justify-center gap-y-6 transition-all duration-500"
        >
          <p class="flex text-white font-bold font-mono text-7xl italic">
            Techigh Studio
          </p>
          <p
            class="flex text-white font-normal font-mono text-3xl italic after:content-['&'] after:text-pink-500 after:text-5xl after:font-black"
          >
            Front-end Developer
          </p>
        </div>
      </div>
      <img src="./assets/image4.jpg" alt="" />
      <img src="./assets/image6.jpg" alt="" />
      <img src="./assets/image2.jpg" alt="" />
    </div>
  </body>
</template>

<script setup lang="ts">
interface InstersectionOption {
  root: HTMLElement | null;
  rootMargin: string;
  threshold: number;
}
const firstObserverOption: InstersectionOption = {
  root: document.querySelector("#scrollArea"),
  rootMargin: "0px",
  threshold: 1.0,
};

// type ObserverFunctionArgs

const firstObserver = new IntersectionObserver(
  (entires) => firstObserverCallback({ entires }),
  firstObserverOption
);

interface ObserverCallbackParams {
  entries: IntersectionObserverEntry[];
  _observer?: IntersectionObserver;
}
function firstObserverCallback({
  entries,
  _observer,
}: ObserverCallbackParams): void {
  entries.forEach((entry: IntersectionObserverEntry) => {
    console.log(entry);
  });
}

let target = document.querySelector("#listItem");
if (target !== null) firstObserver.observe(target);
</script>

<style scoped>
li {
  @apply h-10  px-2 flex items-center leading-none text-xs text-gray-500;
}
</style>
