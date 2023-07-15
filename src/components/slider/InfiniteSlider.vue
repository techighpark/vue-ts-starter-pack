<template>
  <div id="page-container" class="h-screen flex items-center justify-center">
    <div
      class="dev-container"
      @mouseover="toggleSlideAnimation"
      @mouseout="toggleSlideAnimation"
    >
      <div class="dev-box"><div class="dev-element"></div></div>
      <div class="dev-box"><div class="dev-element"></div></div>
      <div class="dev-box"><div class="dev-element"></div></div>
      <div class="dev-box"><div class="dev-element"></div></div>
      <div class="dev-box"><div class="dev-element"></div></div>
      <div class="dev-box"><div class="dev-element"></div></div>
      <div class="dev-box"><div class="dev-element"></div></div>
      <div class="dev-box"><div class="dev-element"></div></div>
      <div class="dev-box"><div class="dev-element"></div></div>
      <div class="dev-box"><div class="dev-element"></div></div>
      <div class="dev-box"><div class="dev-element"></div></div>
      <div class="dev-box"><div class="dev-element"></div></div>
      <div class="dev-box"><div class="dev-element"></div></div>
      <div class="dev-box"><div class="dev-element"></div></div>
      <div class="dev-box"><div class="dev-element"></div></div>
      <div class="dev-box"><div class="dev-element"></div></div>
      <div class="dev-box"><div class="dev-element"></div></div>
      <div class="dev-box"><div class="dev-element"></div></div>

      <!-- <div class="dev-box m-auto w-40 h-40 bg-indigo-600"></div>
    <div class="dev-box m-auto w-40 h-40 bg-red-600"></div>
    <div class="dev-box m-auto w-40 h-40 bg-green-600"></div>
    <div class="dev-box m-auto w-40 h-40 bg-purple-600"></div> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
  hoverItemAnimation();
});
/*
|------------------------------------------------------------------------
| Hover item pause or run infinite slide animation
|------------------------------------------------------------------------
*/
function toggleSlideAnimation() {
  const sliderItems = document.getElementsByClassName("dev-box");
  for (const animation of sliderItems) {
    const running = getComputedStyle(animation).animationPlayState || "running";
    (animation as HTMLElement).style.animationPlayState =
      running === "running" ? "paused" : "running";
  }
}
/*
|------------------------------------------------------------------------
| Hover Item Animation
|------------------------------------------------------------------------
*/
let divElements;
function hoverItemAnimation() {
  divElements = document.querySelectorAll(".dev-box");
  for (var i = 0; i < divElements.length; i++) {
    divElements[i].addEventListener("mouseover", function (event) {
      if ((event.target as HTMLElement)!.matches(":hover")) {
        (event.target as HTMLElement)!.style.border = "2px solid red";
      } else {
        (event.target as HTMLElement)!.style.opacity = "2px solid blue";
      }
    });
  }
}
</script>

<style scoped>
#page-container {
  overflow-x: hidden;
  overscroll-behavior-inline: contain;
}
.dev-container {
  width: 100%;

  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 25%;
  gap: 6rem;

  overscroll-behavior-inline: contain;
}

.dev-box {
  height: fit-content;

  position: relative;

  display: flex;
  justify-content: center;

  border: 1px solid deeppink;
  animation: 30s linear infinite running devKeyframes;
}

.dev-element {
  width: 200px;
  height: 300px;

  position: absolute;
  bottom: 0px;

  background-color: black;
  border-radius: 20px;

  transition: transform 300ms ease-in-out;
  transform-origin: bottom;
}

.dev-element:hover {
  transform: scale(1.3);
  /* backdrop-filter: blur(10px); */
}
/* .dev-element:not(:hover) {
  transform: scale(0.8);
} */

@keyframes devKeyframes {
  from {
    transform: translateX(0%);
  }

  to {
    transform: translateX(-1000%);
  }
}
</style>
