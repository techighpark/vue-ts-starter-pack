<template>
  <div class="min-h-screen border border-red-500">
    <div class="w-full border border-indigo-500">
      <p
        id="brand-name"
        class="w-fit border m-auto uppercase font-bold text-7xl"
      >
        marvel fitness
      </p>
    </div>
    <div class="h-[300vh]"></div>
    <!-- <div class="h-96 mt-20 px-10 py-10 flex gap-x-4 bg-gray-100">
      <div class="min-w-[5rem] rounded-lg bg-black overflow-hidden">
        <img src="@assets/example1.png" alt="" class="h-full object-contain" />
      </div>
      <div class="min-w-[5rem] rounded-lg bg-black overflow-hidden">
        <img src="@assets/example2.png" alt="" class="h-full object-contain" />
      </div>
      <div class="min-w-[5rem] rounded-lg bg-black overflow-hidden">
        <img src="@assets/example4.png" alt="" class="h-full object-contain" />
      </div>
      <div class="min-w-[5rem] rounded-lg bg-black overflow-hidden">
        <img src="@assets/image2.jpg" alt="" class="h-full object-contain" />
      </div>
    </div> -->
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
  document.body.addEventListener("wheel", (e: WheelEvent) => {
    console.log(window.scrollY);
  });
});
</script>

<style scoped></style>
