<template>
  <!-- ------------------------------------------------------------------------------------------- Web -->
  <div
    id="contents-container"
    class="hidden sm:block min-h-screen w-full bg-black/0"
  >
    <div class="h-[200vh]">
      <div id="fixed-brand-name" class="fixed inset-x-0">
        <p
          id="brand-name"
          class="flex items-start justify-center uppercase font-bold text-black opacity-10 text-3xl sm:text-7xl origin-center transition-all duration-300"
        >
          marvel fitness
        </p>
      </div>
    </div>
    <div class="relative z-10">
      <!-- first image: Web -->
      <div
        id="first-container"
        class="relative w-full h-[calc(200vh-2.5rem)] opacity-0 transition-all duration-300 bg-black"
      >
        <div
          id="first-image"
          class="sticky top-10 h-[calc(100vh-2.5rem)] overflow-hidden"
        >
          <img
            src="/public/assets/m4-l.jpg"
            alt=""
            class="h-full w-full object-cover"
          />
        </div>

        <div
          id="first-text"
          class="absolute w-full text-white transition-all duration-200"
        >
          <div class="flex flex-col text-center gap-y-4">
            <span class="font-black md:text-5xl lg:text-7xl xl:text-9xl">
              Motivation
            </span>
            <span class="md:text-base lg:text-lg xl:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
              dicta.
            </span>
          </div>
        </div>
      </div>

      <!-- second image: Web  -->
      <div
        id="second-container"
        class="relative w-full opacity-0 transition-all duration-300 bg-black"
      >
        <div class="absolute -top-[calc(100vh-2.5rem)]">
          <div class="relative w-full h-[calc(200vh-2.5rem)]">
            <div
              id="second-image"
              class="sticky top-10 h-[calc(100vh-2.5rem)] overflow-hidden"
            >
              <img
                src="/public/assets/m5-l.jpg"
                alt=""
                class="h-full w-full object-cover"
              />
            </div>
            <div
              id="second-text"
              class="absolute w-full text-white transition-all duration-200"
            >
              <div class="flex flex-col text-center gap-y-4">
                <span class="font-black md:text-5xl lg:text-7xl xl:text-9xl">
                  Strategic
                </span>
                <span class="md:text-base lg:text-lg xl:text-xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
                  dicta.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="sm:hidden">
    <div class="min-h-screen">
      <div class="mx-6 mt-20 mb-32 flex justify-center items-center">
        <p class="uppercase text-7xl font-bold">marvel fitness</p>
      </div>
      <div class="mx-6">
        <span>DESIGN</span>
        <p class="font-medium text-4xl tracking-tighter leading-none">
          Your choice.
        </p>
        <p class="font-medium text-4xl tracking-tighter leading-none">
          Your Air.
        </p>
      </div>
      <div class="mt-6 h-96 overflow-hidden">
        <img
          src="/public/assets/image5.jpg"
          alt=""
          class="w-full h-full object-cover object-center"
        />
      </div>
      <div class="mx-6 mt-4">
        <p class="text-gray-500">
          <span class="font-bold text-black">MacBook Air is all you</span> —
          pick your size, pick your color, then go. Whichever model you choose,
          it’s built with the planet in mind, with a durable 100 percent
          recycled aluminum enclosure. And a fanless design means it stays
          silent even under intense workloads.
        </p>
      </div>
      <div class="mt-20 flex justify-end">
        <img
          src="/public/assets/image10.jpg"
          alt=""
          class="h-[30rem] object-cover"
        />
      </div>
      <div class="mx-6 mt-4">
        <p class="text-gray-500">
          <span class="font-bold text-black">MacBook Air is all you</span> —
          pick your size, pick your color, then go. Whichever model you choose,
          it’s built with the planet in mind, with a durable 100 percent
          recycled aluminum enclosure. And a fanless design means it stays
          silent even under intense workloads.
        </p>
      </div>
      <div class="space-y-4 mt-20">
        <div class="">
          <img
            src="/public/assets/image9.jpg"
            alt=""
            class="p-4 mx-auto w-96 object-cover bg-gray-50"
          />
        </div>
        <div class="">
          <img
            src="/public/assets/image8.jpg"
            alt=""
            class="p-4 mx-auto w-96 object-cover bg-gray-50"
          />
        </div>
        <div class="">
          <img
            src="/public/assets/image7.jpg"
            alt=""
            class="p-4 mx-auto w-96 object-cover bg-gray-50"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Ref, onMounted, ref } from "vue";

/*
|--------------------------------------------------------------------------------------------------------------
| First Area
|--------------------------------------------------------------------------------------------------------------
*/
// initial viewport height
const viewHeight: Ref<number> = ref(window.visualViewport?.height!);

let contentsContainer: HTMLElement | null;
let stickyContainer: HTMLElement | null;
let brandName: HTMLElement | null;

onMounted(() => {
  contentsContainer = document.getElementById("contents-container");
  stickyContainer = document.getElementById("fixed-brand-name");
  brandName = document.getElementById("brand-name");

  // target initial position
  const stickPosition = viewHeight.value / 2 - viewHeight.value * 0.1;

  if (stickyContainer !== null) {
    stickyContainer.style.top = `${stickPosition}px`;
  }

  document.body.addEventListener("wheel", (_: WheelEvent) => {
    if (brandName !== null) {
      window.requestAnimationFrame(updateOpacity);
      window.requestAnimationFrame(updateScale);
      updateDisplay();
    }
    if (contentsContainer !== null) {
      window.requestAnimationFrame(updateBackgroundColor);
    }
  });
});
/*
|------------------------------------------------------------------------
| Text Opacity
|------------------------------------------------------------------------
*/
let currentOpacity: Ref<number> = ref(0.1);
const minOpacity = 0.1;
const maxOpacity = 1;
let opacityRaf: number;

function updateOpacity() {
  // scroll했을 때 viewHeight의 1/2지점에서 rafValue가 1이 되도록
  const rafValue = window.scrollY / (viewHeight.value * 0.5);
  // minOpacity보다 작지 않고 maxOpacity보다 크지 않은 값
  const newOpacity = Math.max(
    minOpacity,
    Math.min(maxOpacity, maxOpacity * rafValue)
  );

  // currentOpacity와 newOpacity의 값이 같으면 raf 정지
  if (currentOpacity.value !== newOpacity) {
    opacityRaf = window.requestAnimationFrame(updateOpacity);
  } else {
    window.cancelAnimationFrame(opacityRaf);
    return;
  }

  currentOpacity.value = newOpacity;
  brandName!.style.opacity = `${currentOpacity.value}`;
}

/*
|------------------------------------------------------------------------
| Text Scale
|------------------------------------------------------------------------
*/
let currentScale: Ref<number> = ref(1);
const minScale = 1;
const maxScale = 80;
let scaleRaf: number;

function updateScale() {
  // scroll했을 때 viewHeight의 1/2지점 이상부터 시작해서 viewHeight 3/2지점까지 rafValue가 1이 되도록
  const rafValue =
    Math.max(0, window.scrollY - viewHeight.value * 0.5) / viewHeight.value;

  const newScale = Math.max(minScale, Math.min(maxScale, maxScale * rafValue));

  if (currentScale.value !== newScale) {
    scaleRaf = window.requestAnimationFrame(updateScale);
  } else {
    window.cancelAnimationFrame(scaleRaf!);
    return;
  }
  currentScale.value = newScale;
  brandName!.style.transform = `matrix(${newScale},0,0,${newScale},0,0)`;
}
/*
|------------------------------------------------------------------------
| Text Display hidden
|------------------------------------------------------------------------
*/

function updateDisplay() {
  const rafValue = window.scrollY >= viewHeight.value * 1.5;
  if (rafValue) {
    brandName!.style.display = "none";
  } else {
    brandName!.style.display = "flex";
  }
}

/*
|------------------------------------------------------------------------
| Background Opacity
|------------------------------------------------------------------------
*/
let currentBgOpacity: Ref<number> = ref(0);
const minBgOpcaity = 0;
const maxBgOpacity = 1;
let bgOpacityRaf: number;

function updateBackgroundColor() {
  // scroll했을 때 viewHeight의 1지점 이상부터 시작해서 viewHeight 2지점까지 rafValue가 1이 되도록
  const rafValue =
    Math.max(0, window.scrollY - viewHeight.value * 1) / viewHeight.value;

  const newBgOpacity = Math.max(
    minBgOpcaity,
    Math.min(maxBgOpacity, maxBgOpacity * rafValue)
  );

  if (currentBgOpacity.value !== newBgOpacity) {
    bgOpacityRaf = window.requestAnimationFrame(updateBackgroundColor);
  } else {
    window.cancelAnimationFrame(bgOpacityRaf);
  }

  currentBgOpacity.value = newBgOpacity;
  contentsContainer!.style.backgroundColor = `rgb(0 0 0 / ${newBgOpacity})`;
}

/*
|--------------------------------------------------------------------------------------------------------------
| Second Area
|--------------------------------------------------------------------------------------------------------------
*/
/*
|------------------------------------------------------------------------
| First Image
|------------------------------------------------------------------------
*/
onMounted(() => {
  const firstConatiner: HTMLElement | null =
    document.getElementById("first-container");
  const firstContainerOptions = {
    threshold: 0.5,
  };
  new IntersectionObserver(
    (entries) => firstObserve(entries),
    firstContainerOptions
  ).observe(firstConatiner!);

  const firstText: HTMLElement | null = document.getElementById("first-text");
  const firstTextOptions = { threshold: 1, rootMargin: "-10% 0px" };
  new IntersectionObserver(
    (entries) => firstObserve(entries),
    firstTextOptions
  ).observe(firstText!);
});

function firstObserve(entries: IntersectionObserverEntry[]) {
  entries.forEach((entry) => {
    const element = entry.target as HTMLElement;
    if (entry.isIntersecting) {
      element.style.opacity = "1.0";
    } else {
      element.style.opacity = "0";
    }
  });
}
/*
|------------------------------------------------------------------------
| Second Image
|------------------------------------------------------------------------
*/
// let secondContainer: HTMLElement | null;
// let secondText: HTMLElement | null;
onMounted(() => {
  const secondContainer: HTMLElement | null =
    document.getElementById("second-container");
  const secondContainerOptions = {
    threshold: 0.5,
  };
  new IntersectionObserver(
    (entries) => secondObserve(entries),
    secondContainerOptions
  ).observe(secondContainer!);

  const secondText: HTMLElement | null = document.getElementById("second-text");
  const secondTextOptions = { threshold: 1, rootMargin: "-10% 0px" };
  new IntersectionObserver(
    (entries) => secondObserve(entries),
    secondTextOptions
  ).observe(secondText!);
});

function secondObserve(entries: IntersectionObserverEntry[]) {
  entries.forEach((entry) => {
    const element = entry.target as HTMLElement;
    if (entry.isIntersecting) {
      element.style.opacity = "1.0";
    } else {
      element.style.opacity = "0";
    }
  });
}
</script>

<style scoped></style>
