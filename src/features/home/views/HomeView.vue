<template>
  <div class="relative flex flex-col gap-y-1.5">
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
      class="w-full grid grid-cols-1 md:grid-cols-2 gap-1.5 px-1.5 overflow-hidden"
    >
      <div class="relative bg-gray-100">
        <img
          src="../../../assets/m4-l.jpg"
          alt=""
          class="object-cover object-top w-full h-[31rem] md:h-[36rem] lg:h-[43rem]"
        />
        <div
          class="group/center absolute inset-0 flex items-center justify-center hover:bg-gray-900/30 hover:backdrop-blur-sm transition-all cursor-pointer"
        >
          <p
            class="font-bold text-xl text-white opacity-0 group-hover/center:opacity-100 group-hover/center:text-2xl transition-all"
          >
            Center
          </p>
        </div>
      </div>
      <div class="relative bg-gray-100">
        <img
          src="../../../assets/image6.jpg"
          alt=""
          class="object-cover object-center w-full h-[31rem] md:h-[36rem] lg:h-[43rem]"
        />
        <div
          class="group/body absolute inset-0 flex items-center justify-center hover:bg-gray-900/30 hover:backdrop-blur-sm transition-all cursor-pointer"
        >
          <p
            class="font-bold text-xl text-white opacity-0 group-hover/body:opacity-100 transition-all"
          >
            Trainer
          </p>
        </div>
      </div>
    </div>

    <!-- ----------------- third area ----------------- -->
    <div class="relative bg-gray-100">
      <img
        src="../../../assets/m3.jpeg"
        alt=""
        class="object-cover object-top w-full h-[31rem] md:h-[36rem] lg:h-[43rem]"
      />
      <div class="absolute bottom-20 inset-x-0 cursor-pointer">
        <div class="flex flex-col items-center space-y-4 text-white">
          <p class="text-7xl font-bold tracking-tighter italic">
            <span>Body</span>
            <span
              class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-orange-600 relative inline-block"
            >
              <span class="relative"> Profile</span>
            </span>
          </p>
          <p class="text-xl">
            Apple devices are as secure as they are easy to use.
          </p>
        </div>
      </div>
    </div>
    <div class="relative">
      <img
        src="../../../assets/image6.jpg"
        alt=""
        class="object-cover object-top w-full h-[31rem] md:h-[36rem] lg:h-[43rem]"
      />
      <!-- text -->
      <div
        class="absolute inset-x-0 top-1/4 flex flex-col items-center justify-center gap-y-6 transition-all duration-500"
      >
        <p class="flex text-white font-bold font-mono text-7xl italic"></p>
      </div>
    </div>

    <!-- ----------------- fourth area ----------------- -->
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-1.5 -mt-1.5 p-1.5">
      <div class="h-[16rem] md:h-[18rem] lg:h-[21rem] bg-black">
        <div class="mt-6 mx-6 lg:mx-10 flex flex-col gap-y-4 lg:gap-y-6">
          <h5 class="text-xl text-white font-medium">Pro cameras.</h5>
          <p class="text-gray-100">
            Advanced Wide and Ultra Wide cameras help you capture the perfect
            photo or video. And now with support for ProRes video capture, iPad
            Pro is a complete mobile video studio.
          </p>
        </div>
      </div>
      <div class="h-[16rem] md:h-[18rem] lg:h-[21rem] bg-black">
        <div class="mt-6 mx-10 flex flex-col gap-y-6">
          <h5 class="text-xl text-white font-medium">Center Stage.</h5>
          <p class="text-gray-100">
            Using the Ultra Wide camera and machine learning, Center Stage
            changes the way you participate in video calls.
          </p>
        </div>
      </div>
      <div class="h-[16rem] md:h-[18rem] lg:h-[21rem] bg-black">
        <div class="mt-6 mx-10 flex flex-col gap-y-6">
          <h5 class="text-xl text-white font-medium">LiDAR.</h5>
          <p class="text-gray-100">
            The LiDAR Scanner measures how long it takes light to reflect back
            from objects, so it can create a depth map of any space you’re in
            and unlock immersive AR experiences.
          </p>
        </div>
      </div>
      <div class="h-[16rem] md:h-[18rem] lg:h-[21rem] bg-black">
        <div class="mt-6 mx-10 flex flex-col gap-y-6">
          <h5 class="text-xl text-white font-medium">
            Blazing‑fast connections.
          </h5>
          <p class="text-gray-100">
            iPad has always been uniquely portable with superfast Wi‑Fi and
            cellular options.
          </p>
        </div>
      </div>
      <div class="h-[16rem] md:h-[18rem] lg:h-[21rem] bg-black">
        <div class="mt-6 mx-10 flex flex-col gap-y-6">
          <h5 class="text-xl text-white font-medium">Pro cameras.</h5>
          <p class="text-gray-100">
            Advanced Wide and Ultra Wide cameras help you capture the perfect
            photo or video. And now with support for ProRes video capture, iPad
            Pro is a complete mobile video studio.
          </p>
        </div>
      </div>
      <div class="h-[16rem] md:h-[18rem] lg:h-[21rem] bg-black">
        <div class="mt-6 mx-10 flex flex-col gap-y-6">
          <h5 class="text-xl text-white font-medium">Center Stage.</h5>
          <p class="text-gray-100">
            Using the Ultra Wide camera and machine learning, Center Stage
            changes the way you participate in video calls.
          </p>
        </div>
      </div>
      <div class="h-[16rem] md:h-[18rem] lg:h-[21rem] bg-black">
        <div class="mt-6 mx-10 flex flex-col gap-y-6">
          <h5 class="text-xl text-white font-medium">LiDAR.</h5>
          <p class="text-gray-100">
            The LiDAR Scanner measures how long it takes light to reflect back
            from objects, so it can create a depth map of any space you’re in
            and unlock immersive AR experiences.
          </p>
        </div>
      </div>
      <div class="h-[16rem] md:h-[18rem] lg:h-[21rem] bg-black">
        <div class="mt-6 mx-10 flex flex-col gap-y-6">
          <h5 class="text-xl text-white font-medium">
            Blazing‑fast connections.
          </h5>
          <p class="text-gray-100">
            iPad has always been uniquely portable with superfast Wi‑Fi and
            cellular options.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
h5 {
  background: -webkit-linear-gradient(#eee, #8a05ff);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
}
</style>
