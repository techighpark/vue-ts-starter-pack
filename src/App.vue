<template>
  <div class="bg-white">
    <!-- <header ref="headerRef" class="border border-indigo-600">
      <nav>nav</nav>
    </header> -->
    <body ref="bodyRef" class="bg-pink-500">
      <section class="relative">
        <img
          id="firstImage"
          ref="firstImage"
          class="absolute"
          src="./assets/image1.jpg"
          alt=""
        />
        <img
          ref="secondImage"
          class="absolute"
          src="./assets/image2.jpg"
          alt=""
        />
      </section>
    </body>
    <footer></footer>
  </div>
</template>

<script setup lang="ts">
import { Ref, onMounted, ref } from "vue";

// const headerRef: Ref<HTMLElement | null> = ref(null);
const bodyRef: Ref<HTMLElement | null> = ref(null);
const firstImage: Ref<HTMLElement | null> = ref(null);
const secondImage: Ref<HTMLElement | null> = ref(null);

onMounted(() => {
  if (secondImage.value) {
    secondImage.value.style.opacity = "1";
  }
});
addEventListener("scroll", (_: Event) => {
  const rect = document.body.getBoundingClientRect();
  if (rect.top < -200) {
    if (secondImage.value) {
      secondImage.value.style.transition = "opacity 0.5s ease-in-out"; // transition 설정
      secondImage.value.style.opacity = "0";
    }
  } else {
    if (secondImage.value) {
      secondImage.value.style.transition = "opacity 0.5s ease-in-out"; // transition 설정
      secondImage.value.style.opacity = "1";
    }
  }
});

// const vFocus = {
//   mounted: (el: HTMLElement): void => el.focus(),
// };
// const color = "black";
// const vColor = {
//   mounted: (el: any, binding: any) => {
//     console.log(binding);
//     el.style.backgroundColor = binding.value;
//   },
// };
</script>

<style scoped></style>
