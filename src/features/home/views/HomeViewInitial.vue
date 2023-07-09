<template>
  <div class="relative flex flex-col gap-y-4">
    <!-- ----------------- first area ----------------- -->
    <div
      class="first-observer-area relative py-20 px-20 flex justify-end bg-gray-100 transition-all duration-500"
    >
      <div class="w-24 sm:w-40 md:w-56 lg:w-72">
        <img
          src="../../../assets/image1.png"
          alt=""
          class="h-full object-cover"
        />
      </div>
      <!-- text -->
      <div
        class="absolute bottom-1/4 left-10 flex flex-col justify-center gap-y-6 transition-all duration-500"
      >
        <p class="flex text-black font-bold font-mono text-7xl italic">
          Techigh Studio
        </p>
        <p
          class="flex text-black font-normal font-mono text-3xl italic after:content-['&'] after:text-pink-500 after:text-5xl after:font-black"
        >
          Front-end Developer
        </p>
      </div>
    </div>

    <!-- ----------------- second area ----------------- -->
    <div class="relative h-[65vh] p-10 bg-black">
      <!-- text -->
      <div v-for="item in [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]" :key="item">
        <p class="text-white font-bold font-mono text-5xl leading-none italic">
          {{ item }} Lorem ipsum dolor sit amet.
        </p>
      </div>
    </div>

    <!-- ----------------- third area ----------------- -->
    <div
      class="first-observer-area relative opacity-0 transition-all duration-500"
    >
      <img
        src="./assets/image6.jpg"
        alt=""
        class="aspect-square object-cover object-top"
      />
      <!-- text -->
      <div
        class="absolute inset-x-0 top-1/4 flex flex-col items-center justify-center gap-y-6 transition-all duration-500"
      >
        <p class="flex text-white font-bold font-mono text-7xl italic">
          Techigh Studio
        </p>
        <p
          class="flex text-white font-normal font-mono text-3xl italic after:content-['&'] after:text-pink-500 after:text-5xl after:font-black"
        >
          Front-end Developer
        </p>
      </div>
    </div>

    <!-- ----------------- fourth area ----------------- -->
    <div
      class="flex flex-col gap-y-4 md:flex-row md:gap-x-4 transition-all duration-500"
    >
      <div
        class="w-full md:w-1/2 h-96 bg-black flex place-items-center place-content-center transition-all duration-500"
      >
        <p class="text-white text-3xl">bottom item 1</p>
      </div>
      <div
        class="w-full md:w-1/2 h-96 bg-black flex place-items-center place-content-center transition-all duration-500"
      >
        <p class="text-white text-3xl">bottom item 2</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
