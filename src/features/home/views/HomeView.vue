<template>
  <div class="relative flex flex-col gap-y-2">
    <!-- ----------------- first area ----------------- -->
    <div class="relative h-96 border border-pink-500">
      <div class="">
        <img
          src="../../../assets/main-banner1.webp"
          alt=""
          class="object-cover grayscale"
        />
      </div>
      <!-- text -->
      <div class="absolute inset-0 flex items-center justify-center">
        <p class="mb-20 text-white flex flex-col items-center">
          <span class="font-black text-4xl md:text-6xl lg:text-7xl uppercase">
            Marvel Fitness
          </span>
          <span class="text-xl md:text-2xl lg:text-3xl">Pro. Beyond</span>
        </p>
      </div>
    </div>

    <!-- ----------------- second area ----------------- -->
    <div class="relative p-10 bg-black">
      <!-- text -->
    </div>

    <!-- ----------------- third area ----------------- -->
    <div class="relative">
      <img
        src="../../../assets/image6.jpg"
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
