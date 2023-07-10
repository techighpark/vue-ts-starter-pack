<template>
  <div class="min-h-screen">
    <div class="sticky top-96 w-full">
      <p
        id="brand-name"
        class="absolute w-full h-full flex items-center justify-center uppercase font-bold text-black opacity-10 text-7xl origin-bottom"
      >
        marvel fitness
      </p>
    </div>
    <div id="contents-container" class="h-[250vh] bg-black/0"></div>
    <div class="bg-black z-10">
      <div class="px-20 py-10 flex flex-col items-center gap-y-20">
        <div class="min-w-[5rem] bg-black overflow-hidden">
          <img
            src="@assets/example1.png"
            alt=""
            class="w-full object-contain"
          />
        </div>
        <div class="min-w-[5rem] bg-black overflow-hidden">
          <img
            src="@assets/example2.png"
            alt=""
            class="w-full object-contain"
          />
        </div>
        <div class="min-w-[5rem] bg-black overflow-hidden">
          <img
            src="@assets/example4.png"
            alt=""
            class="w-full object-contain"
          />
        </div>
        <div class="min-w-[5rem] bg-black overflow-hidden">
          <img src="@assets/image2.jpg" alt="" class="w-full object-contain" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
let brandName: HTMLElement | null;
let contentsContainer: HTMLElement | null;

onMounted(() => {
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
const maxScale = 50;
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
    console.log(newScale);
    if (newScale === maxScale) {
      brandName.style.opacity = `0`;
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
    Math.min(maxBgOpacity, scrollY * 0.001)
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
</script>

<style scoped></style>
