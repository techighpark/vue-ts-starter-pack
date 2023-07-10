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
    <div class="z-10">
      <div class="px-20 py-10 flex flex-col items-center gap-y-20">
        <!-- first image: Web -->
        <div
          id="first-container"
          class="w-full hidden md:flex justify-between opacity-0 transition-all duration-1000"
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
          class="w-full hidden md:flex justify-between opacity-1 transition-all duration-1000"
        >
          <div
            id="second-text"
            class="shrink-0 md:mt-20 lg:mt-28 xl:mt-40 text-white"
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
          <div id="second-image" class="">
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

        <!-- first image: Mobile -->
        <div class="w-full flex md:hidden flex-col gap-y-20">
          <div class="shrink-0 mt-40 text-white text-right">
            <div class="flex flex-col gap-y-4">
              <span class="font-bold text-4xl sm:text-6xl">첫번째 문구</span>
              <span class="text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
                dicta.
              </span>
            </div>
          </div>
          <div class="w-full max-w-xl shrink-0 m-auto bg-black overflow-hidden">
            <img
              src="@assets/image2.jpg"
              alt=""
              class="w-full object-contain"
            />
          </div>
        </div>
        <!-- second image: Web  -->
        <div class="min-w-[5rem] bg-black overflow-hidden">
          <img src="@assets/image4.jpg" alt="" class="w-full object-contain" />
        </div>
        <div class="min-w-[5rem] bg-black overflow-hidden">
          <img src="@assets/image5.jpg" alt="" class="w-full object-contain" />
        </div>
        <div class="min-w-[5rem] bg-black overflow-hidden">
          <img src="@assets/image6.jpg" alt="" class="w-full object-contain" />
        </div>
      </div>
    </div>
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
  const newOpacity = Math.max(minOpcaity, Math.min(maxOpacity, scrollY * 0.02));

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
const firstOptions = { threshold: 0.5 };

onMounted(() => {
  firstContainer = document.getElementById("first-container");

  const firstObserver = new IntersectionObserver(
    (entries) => firstObserve(entries),
    firstOptions
  );
  if (firstContainer !== null) {
    firstObserver.observe(firstContainer);
  }
});

function firstObserve(entries: IntersectionObserverEntry[]) {
  entries.forEach((entry) => {
    console.log(entry.isIntersecting);
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
let secondImage: HTMLElement | null;
let secondText: HTMLElement | null;
onMounted(() => {
  secondImage = document.getElementById("second-image");
  secondText = document.getElementById("second-text");
});
</script>

<style scoped></style>
