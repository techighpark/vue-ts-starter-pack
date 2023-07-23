<template>
  <div
    id="page-container"
    class="pt-40 h-[36rem] w-full flex items-start justify-center"
  >
    <div
      class="dev-container"
      @mouseover="toggleSlideAnimation"
      @mouseout="toggleSlideAnimation"
    >
      <template v-for="(information, key) in informations">
        <div class="dev-box" @mouseover="setCurrentIndex(key)">
          <div class="dev-element overflow-hidden">
            <img :src="information.image" alt="" class="object-contain" />
          </div>
        </div>
      </template>
      <template v-for="(information, key) in informations">
        <div class="dev-box" @mouseover="setCurrentIndex(key)">
          <div class="dev-element overflow-hidden">
            <img :src="information.image" alt="" class="object-contain" />
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { InformationType } from "@features/about2/views/Index.vue";
import { Ref, ref } from "vue";

type SliderProps = {
  informations: InformationType;
};

defineProps<SliderProps>();
const currentIndex: Ref<keyof InformationType> = ref("1");
defineExpose({ currentIndex });
/*
|------------------------------------------------------------------------
| set currentIndex
|------------------------------------------------------------------------
*/
function setCurrentIndex(index: keyof InformationType) {
  currentIndex.value = index;
}
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
  grid-auto-columns: 17%;

  overscroll-behavior-inline: contain;
}

.dev-box {
  height: fit-content;

  position: relative;

  display: flex;
  justify-content: center;

  animation: 15s linear infinite running devKeyframes;
}

.dev-element {
  width: 100px;
  height: 300px;

  position: absolute;
  top: 0px;

  border-radius: 20px;

  transition: all 300ms ease-in-out;
  transform-origin: bottom;

  filter: grayscale(1);

  box-shadow: 19px 28px 73px -18px rgba(255, 255, 255, 0.38);
  -webkit-box-shadow: 19px 28px 73px -18px rgba(255, 255, 255, 0.38);
  -moz-box-shadow: 19px 28px 73px -18px rgba(255, 255, 255, 0.38);
}

.dev-element:hover {
  width: 120px;
  transform: scale(1.1);
  filter: grayscale(0);
}

@keyframes devKeyframes {
  from {
    transform: translateX(0%);
  }

  to {
    transform: translateX(-700%);
  }
}
</style>
