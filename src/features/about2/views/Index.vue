<template>
  <div
    class="h-screen border border-green-500 flex items-center justify-center"
  >
    <div
      class="dev-container"
      @mouseover="toggleAnimation"
      @mouseout="toggleAnimation"
    >
      <div class="dev-box bg-orange-600">123</div>
      <div class="dev-box bg-blue-600">123</div>
      <div class="dev-box bg-green-600">123</div>
      <div class="dev-box bg-black">123</div>
      <div class="dev-box bg-orange-600">123</div>
      <div class="dev-box bg-blue-600">123</div>
      <div class="dev-box bg-green-600">123</div>
      <div class="dev-box bg-black">123</div>
      <div class="dev-box bg-orange-600">123</div>
      <div class="dev-box bg-blue-600">123</div>
      <div class="dev-box bg-green-600">123</div>
      <div class="dev-box bg-black">123</div>
      <div class="dev-box bg-orange-600">123</div>
      <div class="dev-box bg-blue-600">123</div>
      <div class="dev-box bg-green-600">123</div>
      <div class="dev-box bg-black">123</div>
      <div class="dev-box bg-orange-600">123</div>
      <div class="dev-box bg-blue-600">123</div>
      <div class="dev-box bg-green-600">123</div>
      <div class="dev-box bg-black">123</div>
      <div class="dev-box bg-orange-600">123</div>
      <div class="dev-box bg-blue-600">123</div>
      <div class="dev-box bg-green-600">123</div>
      <div class="dev-box bg-black">123</div>

      <!-- <div class="dev-box m-auto w-40 h-40 bg-indigo-600"></div>
    <div class="dev-box m-auto w-40 h-40 bg-red-600"></div>
    <div class="dev-box m-auto w-40 h-40 bg-green-600"></div>
    <div class="dev-box m-auto w-40 h-40 bg-purple-600"></div> -->
    </div>
  </div>
</template>

<script setup lang="ts">
function toggleAnimation() {
  const sliderItems = document.getElementsByClassName("dev-box");
  for (const animation of sliderItems) {
    const running = getComputedStyle(animation).animationPlayState || "running";
    (animation as HTMLElement).style.animationPlayState =
      running === "running" ? "paused" : "running";
  }
}
</script>

<style scoped>
.dev-container {
  width: 100%;

  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 20rem;
  overflow-x: auto;

  overscroll-behavior-inline: contain;
}
.dev-box {
  animation: 3s linear infinite running devKeyframes;
}
.dev-box:hover {
  transform: scale(2);
}

@keyframes devKeyframes {
  from {
    transform: translateX(0%);
  }

  to {
    transform: translateX(-1000%);
  }
}
</style>
