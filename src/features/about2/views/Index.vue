<template>
  <div class="h-[calc(100vh-3rem)]">
    <div class="hidden sm:block sm:bg-black">
      <InfiniteSlider ref="slider" :informations="informations" />
      <div class="mt-20 pb-20 mx-20">
        <transition name="fade">
          <div class="text-white">
            <div>
              <span class="font-bold text-5xl">
                {{ currentInformation.name }}
              </span>
              <span class="ml-4 font-bold text-xl">
                {{ currentInformation.center }}
              </span>
            </div>
            <p class="mt-6">
              {{ currentInformation.data }}
            </p>
          </div>
        </transition>
      </div>
    </div>
    <div class="sm:hidden">
      <div class="text-xs font-bold text-gray-500">
        <ul class="h-10 flex justify-around items-center">
          <li class="w-full h-full flex justify-center items-center">서면</li>
          <li class="w-full h-full flex justify-center items-center">해운대</li>
          <li class="w-full h-full flex justify-center items-center">장전동</li>
          <li class="w-full h-full flex justify-center items-center">부산대</li>
        </ul>
      </div>
      <div class="">
        <template v-for="information in informations">
          <div class="">
            <div
              class="w-full min-w-[20rem] h-48 overflow-hidden flex items-center"
            >
              <img
                :src="'src/assets/' + information.smImage"
                alt=""
                class="w-full object-cover grayscale"
              />
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import type { Ref } from "vue";
//vue
import InfiniteSlider from "@components/slider/InfiniteSlider.vue";

const slider: Ref<InstanceType<typeof InfiniteSlider> | null> = ref(null!);
/*
|------------------------------------------------------------------------
| find current index information
|------------------------------------------------------------------------
*/
const currentInformation = computed(
  () => informations.value[slider.value?.currentIndex ?? "1"]
);

export interface InformationItem {
  name: string;
  center: string;
  data: string;
  image: string;
  smImage: string;
}
export type InformationType = Record<string, InformationItem>;

const informations: Ref<InformationType> = ref({
  "1": {
    name: "정다솔",
    center: "장전",
    data: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium obcaecati expedita perspiciatis consectetur nam minus ea, commodi rerum quam pariatur, necessitatibus, numquam tenetur voluptate voluptatum optio distinctio cum possimus incidunt!",
    image: "trainer1.png",
    smImage: "land1.jpg",
  },
  "2": {
    name: "성동하",
    center: "장전",
    data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, aperiam? Harum quos libero sit. Voluptate enim, voluptatem architecto fuga officiis magni atque ipsa, eos totam maiores est odio natus praesentium!",
    image: "trainer2.png",
    smImage: "land2.jpg",
  },
  "3": {
    name: "안나단",
    center: "해운대",
    data: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium obcaecati expedita perspiciatis consectetur nam minus ea, commodi rerum quam pariatur, necessitatibus, numquam tenetur voluptate voluptatum optio distinctio cum possimus incidunt!",
    image: "trainer3.png",
    smImage: "land3.jpg",
  },
  "4": {
    name: "이상환",
    center: "서면",
    data: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, reiciendis minima soluta beatae dignissimos dolor esse ex nobis blanditiis maiores cupiditate porro minus accusamus impedit incidunt placeat, quidem unde suscipit",
    image: "trainer4.png",
    smImage: "land4.jpg",
  },
  "5": {
    name: "장원두",
    center: "장전",
    data: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium obcaecati expedita perspiciatis consectetur nam minus ea, commodi rerum quam pariatur, necessitatibus, numquam tenetur voluptate voluptatum optio distinctio cum possimus incidunt!",
    image: "trainer5.png",
    smImage: "land5.jpg",
  },
  "6": {
    name: "정다솔",
    center: "서면",
    data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, aperiam? Harum quos libero sit. Voluptate enim, voluptatem architecto fuga officiis magni atque ipsa, eos totam maiores est odio natus praesentium!",
    image: "trainer6.png",
    smImage: "land6.jpg",
  },
  "7": {
    name: "정다솔",
    center: "해운대",
    data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, aperiam? Harum quos libero sit. Voluptate enim, voluptatem architecto fuga officiis magni atque ipsa, eos totam maiores est odio natus praesentium!",
    image: "trainer7.png",
    smImage: "land7.jpg",
  },
});
</script>

<style scoped>
/* 트랜지션 CSS 정의 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
