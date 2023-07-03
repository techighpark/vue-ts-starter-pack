<template>
  <div class="bg-white">
    <header ref="headerRef" class="border border-indigo-600">
      <nav>nav</nav>
    </header>
    <body ref="bodyRef" class="border border-pink-500">
      body
      <section class="relative border-4 h-fit w-fit">
        <img src="./assets/image1.jpg" alt="" />
        <div class="absolute">VUE LAYOUT TEMPLATE</div>
      </section>
      <section>
        <title class="z-50 bg-white">asdfsdf</title>
        <img src="./assets/image2.jpg" alt="" />
      </section>
    </body>
    <footer></footer>
  </div>
</template>

<script setup lang="ts">
import { Ref, ref } from "vue";

const headerRef: Ref<HTMLElement | null> = ref(null);
const bodyRef: Ref<HTMLElement | null> = ref(null);

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
