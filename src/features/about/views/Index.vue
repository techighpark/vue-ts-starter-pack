<template>
  <div id="contents-container" class="min-h-screen w-full bg-black/0">
    <div class="h-[250vh]">
      <div id="fixed-brand-name" class="fixed inset-x-0">
        <p
          id="brand-name"
          class="flex items-start justify-center uppercase font-bold text-black opacity-10 text-3xl sm:text-7xl origin-center transition-all duration-300"
        >
          marvel fitness
        </p>
      </div>
    </div>
    <!-- -------------------------------------------------------------------------------------------------------------------------------------------- Web -->
    <div class="z-10 py-10 gap-y-20">
      <!-- first image: Web -->
      <div
        id="first-container"
        class="relative w-full h-[200vh] transition-all duration-300"
      >
        <div id="first-image" class="sticky top-10 h-[100vh] overflow-hidden">
          <img
            src="@assets/m4-l.jpg"
            alt=""
            class="h-full w-full object-cover"
          />
        </div>
        <div id="first-text" class="absolute shrink-0 w-full text-white">
          <div class="flex flex-col text-center gap-y-4">
            <span class="font-black md:text-5xl lg:text-7xl xl:text-9xl">
              첫번째 문구
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
        class="relative w-full h-screen overflow-hidden md:flex justify-between border"
      >
        <div
          id="second-text"
          class="absolute -left-4 opacity-0 shrink-0 md:mt-20 lg:mt-28 xl:mt-40 text-white transition-all duration-300"
        >
          <div class="flex flex-col gap-y-4">
            <span class="font-bold md:text-5xl lg:text-7xl xl:text-9xl">
              두번째 문구
            </span>
            <span class="md:text-base lg:text-lg xl:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
              dicta.
            </span>
          </div>
        </div>
        <div
          id="second-image"
          class="absolute -right-4 opacity-0 transition-all duration-[1500ms]"
        >
          <div
            class="w-full md:max-w-xs lg:max-w-md xl:max-w-xl shrink-0 bg-black overflow-hidden"
          >
            <img
              src="@assets/image4.jpg"
              alt=""
              class="w-full object-contain"
            />
          </div>
        </div>
      </div>

      <!-- third image: Web -->
      <div
        id="third-container"
        class="relative w-full h-[90rem] md:flex flex-col justify-start items-center"
      >
        <div
          id="third-text"
          class="shrink-0 mt-28 mb-16 text-white transition-all duration-[1500ms]"
        >
          <div class="flex flex-col gap-y-4">
            <span class="font-bold md:text-5xl lg:text-7xl xl:text-9xl">
              세번째 문구
            </span>
            <span class="md:text-base lg:text-lg xl:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
              dicta.
            </span>
          </div>
        </div>
        <div id="third-image" class="transition-all duration-[1500ms]">
          <div
            class="w-full md:max-w-xl lg:max-w-3xl xl:max-w-5xl shrink-0 bg-black overflow-hidden"
          >
            <img
              src="@assets/image5.jpg"
              alt=""
              class="w-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- -------------------------------------------------------------------------------------------------------------------------------------------- Mobile -->
    <!-- first image -->
    <!-- <div class="w-full flex md:hidden flex-col gap-y-20">
      <div class="shrink-0 mt-40 text-white text-right">
        <div class="flex flex-col gap-y-4">
          <span class="font-bold text-4xl sm:text-6xl">첫번째 문구</span>
          <span class="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, dicta.
          </span>
        </div>
      </div>
      <div class="w-full max-w-xl shrink-0 m-auto bg-black overflow-hidden">
        <img src="@assets/image2.jpg" alt="" class="w-full object-contain" />
      </div>
    </div> -->
  </div>
</template>

<script setup lang="ts">
import { Ref, onMounted, ref } from "vue";

/*
|--------------------------------------------------------------------------------------------------------------
| First Area
|--------------------------------------------------------------------------------------------------------------
*/
const viewHeight: Ref<number> = ref(window.visualViewport?.height!);
let contentsContainer: HTMLElement | null;
let stickyContainer: HTMLElement | null;
let brandName: HTMLElement | null;

onMounted(() => {
  contentsContainer = document.getElementById("contents-container");
  stickyContainer = document.getElementById("fixed-brand-name");
  brandName = document.getElementById("brand-name");

  const stickPosition = viewHeight.value / 2 - viewHeight.value * 0.1;
  if (stickyContainer !== null) {
    stickyContainer.style.top = `${stickPosition}px`;
  }

  document.body.addEventListener("wheel", (_: WheelEvent) => {
    if (brandName !== null) {
      updateScale();
      updateOpacity();
    }
    if (contentsContainer !== null) {
      updateBackgroundColor();
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

function updateOpacity() {
  const scrollY = window.scrollY;
  const newOpacity = Math.max(
    minOpacity,
    Math.min(maxOpacity, (maxOpacity * scrollY) / (viewHeight.value * 0.5))
  );
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
function updateScale() {
  const scrollY = window.scrollY - viewHeight.value / 2;
  const newScale = Math.max(
    minScale,
    Math.min(maxScale, (maxScale * scrollY) / (viewHeight.value * 1))
  );
  currentScale.value = newScale;
  brandName!.style.transform = `matrix(${newScale},0,0,${newScale},0,0)`;
  if (window.scrollY >= viewHeight.value! * 1.5) {
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
function updateBackgroundColor() {
  const scrollY = window.scrollY - viewHeight.value! * 1.5;
  const newBgOpacity = Math.max(
    minBgOpcaity,
    Math.min(maxBgOpacity, (maxBgOpacity * scrollY) / (viewHeight.value * 0.5))
  );
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
let firstContainer: HTMLElement | null;
onMounted(() => {
  firstContainer = document.getElementById("first-container");

  const firstOptions = { threshold: 0.2 };
  new IntersectionObserver(
    (entries) => firstObserve(entries),
    firstOptions
  ).observe(firstContainer!);
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
let secondContainer: HTMLElement | null;
let secondImage: HTMLElement | null;
let secondText: HTMLElement | null;
onMounted(() => {
  secondContainer = document.getElementById("second-container");
  secondImage = document.getElementById("second-image");
  secondText = document.getElementById("second-text");

  const secondOptions = { threshold: 0.7 };
  new IntersectionObserver(
    (entries) => secondObserve(entries),
    secondOptions
  ).observe(secondContainer!);
});

function secondObserve(entries: IntersectionObserverEntry[]) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      secondText!.style.opacity = "1";
      secondText!.style.left = "5rem";
      secondImage!.style.opacity = "1";
      secondImage!.style.right = "5rem";
    } else {
      secondText!.style.opacity = "0";
      secondText!.style.left = "-1rem";
      secondImage!.style.opacity = "0";
      secondImage!.style.right = "-1rem";
    }
  });
}
</script>

<style scoped></style>
