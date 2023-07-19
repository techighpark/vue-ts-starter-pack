<template>
  <div class="relative flex flex-col gap-y-2">
    <!-- ----------------- first area ----------------- -->
    <div class="relative">
      <div class="w-full overflow-hidden bg-gray-100">
        <img
          src="../../../assets/main-xl.jpg"
          alt=""
          class="object-cover object-top w-full h-[31rem] md:h-[40rem] lg:h-[43rem]"
        />
      </div>
      <!-- text -->
      <div class="absolute inset-0 flex items-top justify-center">
        <p class="text-white flex flex-col items-center mt-28">
          <span class="font-black text-4xl md:text-6xl lg:text-7xl uppercase">
            Marvel Fitness
          </span>
          <span class="text-xl md:text-2xl lg:text-3xl">Pro. Beyond</span>
        </p>
      </div>
    </div>

    <!-- ----------------- second area ----------------- -->
    <div
      class="w-full grid grid-cols-1 md:grid-cols-2 gap-2 px-2 overflow-hidden"
    >
      <div class="relative bg-gray-100">
        <img
          src="../../../assets/m3.jpeg"
          alt=""
          class="object-cover object-top w-full h-[31rem] md:h-[36rem] lg:h-[43rem]"
        />
        <div
          class="absolute inset-0 flex items-center justify-center hover:bg-gray-900/30 hover:backdrop-blur-md transition-all cursor-pointer"
        >
          <p class="font-bold text-xl text-white">Body Profile</p>
        </div>
      </div>
      <div class="relative bg-gray-100">
        <img
          src="../../../assets/m4-l.jpg"
          alt=""
          class="object-cover object-top w-full h-[31rem] md:h-[36rem] lg:h-[43rem]"
        />
        <div
          class="absolute inset-0 flex items-center justify-center hover:bg-gray-900/30 hover:backdrop-blur-md transition-all cursor-pointer"
        >
          <p class="font-bold text-xl text-white">Center</p>
        </div>
      </div>
    </div>

    <!-- ----------------- third area ----------------- -->
    <div class="relative">
      <img
        src="../../../assets/image6.jpg"
        alt=""
        class="aspect-video object-cover object-top"
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
