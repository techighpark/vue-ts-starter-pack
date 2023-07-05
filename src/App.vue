<template>
  <body ref="observerArea">
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
    <main ref="bodyRef">
      <div class="relative flex flex-col gap-y-4">
        <!-- first image -->
        <div class="observerTarget relative transition-all duration-500">
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
        <div
          class="observerTarget relative opacity-0 transition-all duration-500"
        >
          <img
            src="./assets/image4.jpg"
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
        <div
          class="observerTarget relative opacity-0 transition-all duration-500"
        >
          <img
            src="./assets/image6.jpg"
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
        <div
          class="flex flex-col gap-y-4 md:flex-row md:gap-x-4 transition-all duration-500"
        >
          <div
            class="w-full md:w-1/2 h-96 bg-black flex place-items-center place-content-center transition-all duration-500"
          >
            <p class="text-white text-3xl">bottom item 1</p>
          </div>
          <div
            class="w-full md:w-1/2 h-96 bg-black flex place-items-center place-content-center transition-all duration-500"
          >
            <p class="text-white text-3xl">bottom item 2</p>
          </div>
        </div>
      </div>
    </main>
  </body>
</template>

<script setup lang="ts">
import { Ref, onMounted, ref } from "vue";

const observerArea: Ref<Element | null> = ref(null);

interface InstersectionOption {
  root: Element | null;
  rootMargin: string;
  threshold: number;
}
interface ObserverCallbackParams {
  entries: IntersectionObserverEntry[];
  _observer?: IntersectionObserver;
}

const firstObserverOption: InstersectionOption = {
  root: observerArea.value,
  rootMargin: "0px",
  threshold: 0.4,
};
function firstObserverCallback({ entries }: ObserverCallbackParams): void {
  entries.forEach((entry: IntersectionObserverEntry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.remove("opacity-0");
      entry.target.classList.add("font-bold", "text-5xl");
    } else {
      entry.target.classList.add("opacity-0");
      entry.target.classList.remove("font-bold", "text-5xl");
    }
  });
}
// observe
onMounted(() => {
  const firstObserver = new IntersectionObserver(
    (entries) => firstObserverCallback({ entries }),
    firstObserverOption
  );
  let targets: HTMLCollectionOf<Element> =
    document.getElementsByClassName("observerTarget");
  // let targets: Element[] | null = observerTarget.value;
  if (targets !== null) {
    for (const target of targets) {
      firstObserver.observe(target);
    }
  }
});
</script>

<style scoped>
ul {
  background-color: white;
}
li {
  @apply h-10  px-2 flex items-center bg-white leading-none text-xs text-gray-500;
}
</style>
