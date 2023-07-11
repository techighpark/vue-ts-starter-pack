<template>
  <div id="contents-container" class="min-h-screen bg-black/0">
    <div id="sticky-container" class="sticky w-full">
      <p
        id="brand-name"
        class="w-full h-full flex items-center justify-center uppercase font-bold text-black opacity-10 text-7xl origin-bottom"
      >
        marvel fitness
      </p>
    </div>
    <div class="h-[120vh]"></div>
    <!-- -------------------------------------------------------------------------------------------------------------------------------------------- Web -->
    <div class="z-10 py-10 flex flex-col items-center gap-y-20">
      <!-- first image: Web -->
      <div
        id="first-container"
        class="w-full h-[60rem] px-20 hidden md:flex justify-between opacity-0 transition-all duration-[1500ms]"
      >
        <div id="first-image" class="">
          <div
            class="w-full md:max-w-xs lg:max-w-md xl:max-w-xl shrink-0 bg-black overflow-hidden"
          >
            <img
              src="@assets/image2.jpg"
              alt=""
              class="w-full object-contain"
            />
          </div>
        </div>
        <div
          id="first-text"
          class="shrink-0 md:mt-20 lg:mt-28 xl:mt-40 text-white text-right"
        >
          <div class="flex flex-col gap-y-4">
            <span class="font-bold md:text-5xl lg:text-7xl xl:text-9xl">
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
        class="relative w-full h-[60rem] hidden md:flex justify-between"
      >
        <div
          id="second-text"
          class="absolute -left-4 opacity-0 shrink-0 md:mt-20 lg:mt-28 xl:mt-40 text-white transition-all duration-[1500ms]"
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
        class="relative w-full h-[90rem] hidden md:flex flex-col justify-start items-center"
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
import { onMounted } from "vue";
let brandName: HTMLElement | null;
let contentsContainer: HTMLElement | null;

/*
|--------------------------------------------------------------------------------------------------------------
| First Area
|--------------------------------------------------------------------------------------------------------------
*/
onMounted(() => {
  const viewHeight = window.innerHeight / 2;
  const stickyContainer: HTMLElement | null =
    document.getElementById("sticky-container");
  if (stickyContainer !== null)
    stickyContainer.style.top = `${viewHeight - 100}px`;

  brandName = document.getElementById("brand-name");
  contentsContainer = document.getElementById("contents-container");
  document.body.addEventListener("wheel", (_: WheelEvent) => {
    requestAnimationFrame(updateScale);
    requestAnimationFrame(updateOpacity);
    requestAnimationFrame(updateBackgroundColor);
  });
});

/*
|------------------------------------------------------------------------
| Text Scale
|------------------------------------------------------------------------
*/
let currentScale = 1;
const minScale = 1;
const maxScale = 40;
let scaleAnimation: number;
function updateScale() {
  const scrollY = window.scrollY - 500;
  const newScale = Math.max(minScale, Math.min(maxScale, scrollY * 0.03));

  currentScale = newScale;

  if (currentScale === newScale) {
    cancelAnimationFrame(scaleAnimation);
  } else {
    scaleAnimation = requestAnimationFrame(updateScale);
  }

  if (brandName !== null) {
    brandName.style.transform = `matrix(${newScale},0,0,${newScale},0,0)`;
    if (window.scrollY >= 850) {
      brandName.style.display = `none`;
    } else {
      brandName.style.display = `flex`;
    }
  }
}
/*
|------------------------------------------------------------------------
| Text Opacity
|------------------------------------------------------------------------
*/
let currentOpacity = 0.1;
const minOpcaity = 0.1;
const maxOpacity = 1;

let opacityAnimation: number;
function updateOpacity() {
  const scrollY = window.scrollY;
  const newOpacity = Math.max(
    minOpcaity,
    Math.min(maxOpacity, scrollY * 0.002)
  );
  currentOpacity = newOpacity;

  if (currentOpacity === newOpacity) {
    cancelAnimationFrame(opacityAnimation);
  } else {
    opacityAnimation = requestAnimationFrame(updateOpacity);
  }

  if (brandName !== null) {
    brandName.style.opacity = `${newOpacity}`;
  }
}
/*
|------------------------------------------------------------------------
| Background Opacity
|------------------------------------------------------------------------
*/
let currentBgOpacity = 0;
const minBgOpcaity = 0;
const maxBgOpacity = 1;
let bgOpacityAnimation: number;
function updateBackgroundColor() {
  const scrollY = window.scrollY - 750;
  const newBgOpacity = Math.max(
    minBgOpcaity,
    Math.min(maxBgOpacity, scrollY * 0.01)
  );

  if (currentBgOpacity === newBgOpacity) {
    cancelAnimationFrame(bgOpacityAnimation);
  } else {
    bgOpacityAnimation = requestAnimationFrame(updateScale);
  }
  if (contentsContainer !== null) {
    contentsContainer.style.backgroundColor = `rgb(0 0 0 / ${newBgOpacity})`;
  }
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

  const firstOptions = { threshold: 0.7 };
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
