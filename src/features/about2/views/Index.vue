<template>
  <div class="h-[calc(100vh-3rem)] bg-black">
    <InfiniteSlider ref="slider" :informations="informations" />
    <div class="mt-20 pb-20 mx-20">
      <transition name="fade">
        <p class="text-white">
          {{
            findInRecord(slider?.currentIndex ?? ("1" as keyof InformationType))
              .data
          }}
        </p>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { Ref } from "vue";
//vue
import InfiniteSlider from "@components/slider/InfiniteSlider.vue";

const slider: Ref<InstanceType<typeof InfiniteSlider> | null> = ref(null!);
/*
|------------------------------------------------------------------------
| find current index information
|------------------------------------------------------------------------
*/
function findInRecord(index: keyof InformationType): InformationItem {
  return informations.value[index];
}

export interface InformationItem {
  center: string;
  data: string;
  image: string;
}
export type InformationType = Record<string, InformationItem>;

const informations: Ref<InformationType> = ref({
  "1": {
    center: "장전",
    data: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium obcaecati expedita perspiciatis consectetur nam minus ea, commodi rerum quam pariatur, necessitatibus, numquam tenetur voluptate voluptatum optio distinctio cum possimus incidunt!",
    image: "src/assets/trainer1.png",
  },
  "2": {
    center: "장전",
    data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, aperiam? Harum quos libero sit. Voluptate enim, voluptatem architecto fuga officiis magni atque ipsa, eos totam maiores est odio natus praesentium!",
    image: "src/assets/trainer2.png",
  },
  "3": {
    center: "해운대",
    data: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium obcaecati expedita perspiciatis consectetur nam minus ea, commodi rerum quam pariatur, necessitatibus, numquam tenetur voluptate voluptatum optio distinctio cum possimus incidunt!",
    image: "src/assets/trainer3.png",
  },
  "4": {
    center: "서면",
    data: "  Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, reiciendis minima soluta beatae dignissimos dolor esse ex nobis blanditiis maiores cupiditate porro minus accusamus impedit incidunt placeat, quidem unde suscipit",
    image: "src/assets/trainer4.png",
  },
  "5": {
    center: "장전",
    data: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium obcaecati expedita perspiciatis consectetur nam minus ea, commodi rerum quam pariatur, necessitatibus, numquam tenetur voluptate voluptatum optio distinctio cum possimus incidunt!",
    image: "src/assets/trainer5.png",
  },
  "6": {
    center: "서면",
    data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, aperiam? Harum quos libero sit. Voluptate enim, voluptatem architecto fuga officiis magni atque ipsa, eos totam maiores est odio natus praesentium!",
    image: "src/assets/trainer6.png",
  },
  "7": {
    center: "해운대",
    data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, aperiam? Harum quos libero sit. Voluptate enim, voluptatem architecto fuga officiis magni atque ipsa, eos totam maiores est odio natus praesentium!",
    image: "src/assets/trainer7.png",
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
