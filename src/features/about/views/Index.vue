<template>
  <div id="contents-container" class="min-h-screen w-full bg-black/0">
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
    <!-- -------------------------------------------------------------------------------------------------------------------------------------------- Web -->
    <div class="relative z-10">
      <!-- first image: Web -->
      <div
        id="first-container"
        class="relative w-full h-[calc(200vh-2.5rem)] opacity-0 transition-all duration-300"
      >
        <div
          id="first-image"
          class="sticky top-10 h-[calc(100vh-2.5rem)] overflow-hidden"
        >
          <img
            src="@assets/m4-l.jpg"
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
        class="relative w-full opacity-0 transition-all duration-300"
      >
        <div class="absolute -top-[calc(100vh-2.5rem)]">
          <div class="relative w-full h-[calc(200vh-2.5rem)]">
            <div
              id="second-image"
              class="sticky top-10 h-[calc(100vh-2.5rem)] overflow-hidden"
            >
              <img
                src="@assets/m5-l.jpg"
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
      <!-- third image: Web -->
      <div class="bg-red-500">asdf</div>
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
      window.requestAnimationFrame(updateOpacity);
      window.requestAnimationFrame(updateScale);
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
  window.requestAnimationFrame(updateOpacity);
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
  const scrollY = window.scrollY - viewHeight.value * 0.5;
  const newScale = Math.max(
    minScale,
    Math.min(maxScale, (maxScale * scrollY) / (viewHeight.value * 1))
  );
  currentScale.value = newScale;
  brandName!.style.transform = `matrix(${newScale},0,0,${newScale},0,0)`;

  let scaleRaf;
  console.log(currentScale.value);
  if (currentScale.value !== newScale) {
    scaleRaf = window.requestAnimationFrame(updateScale);
  } else {
    window.cancelAnimationFrame(scaleRaf!);
  }

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
let firstConatiner: HTMLElement | null;
let firstText: HTMLElement | null;

onMounted(() => {
  const firstContainerOptions = {
    threshold: 0.5,
  };
  firstConatiner = document.getElementById("first-container");
  new IntersectionObserver(
    (entries) => firstObserve(entries),
    firstContainerOptions
  ).observe(firstConatiner!);

  const firstTextOptions = { threshold: 1, rootMargin: "-10% 0px" };
  firstText = document.getElementById("first-text");
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
      firstConatiner!.style.opacity = "0";
    }
  });
}
/*
|------------------------------------------------------------------------
| Second Image
|------------------------------------------------------------------------
*/
let secondContainer: HTMLElement | null;
let secondText: HTMLElement | null;
onMounted(() => {
  const secondContainerOptions = {
    threshold: 0.5,
  };
  secondContainer = document.getElementById("second-container");
  new IntersectionObserver(
    (entries) => secondObserve(entries),
    secondContainerOptions
  ).observe(secondContainer!);

  const secondTextOptions = { threshold: 1, rootMargin: "-10% 0px" };
  secondText = document.getElementById("second-text");
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
      secondContainer!.style.opacity = "0";
    }
  });
}
</script>

<style scoped></style>
