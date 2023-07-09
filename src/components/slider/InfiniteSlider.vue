<template>
  <div class="carousel">
    <div class="block">1</div>
    <div class="block">2</div>
    <div class="block">3</div>
    <div class="block">1</div>
    <div class="block">2</div>
    <div class="block">3</div>
    <div class="block">1</div>
    <div class="block">2</div>
    <div class="block">3</div>
    <!-- Repeat n times -->
    <div class="block">1</div>
    <div class="block">2</div>
    <div class="block">3</div>
  </div>
  <div class="carousel-b">
    <div class="block-b">1</div>
    <div class="block-b">2</div>
    <div class="block-b">3</div>
    <div class="block-b">1</div>
    <div class="block-b">2</div>
    <div class="block-b">3</div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.carousel {
  animation: carouselB 300s linear infinite;
  display: flex;
  flex-wrap: nowrap;
  width: 100vw;
}
.block {
  flex-shrink: 0;
  width: 150px;
}
@keyframes carousel {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-20000px, 0, 0);
  }
}

.carousel-b {
  animation: carousel 3s linear infinite;
  display: flex;
  flex-wrap: nowrap;
  width: calc(3 * 150px);
}
.block-b {
  flex-shrink: 0;
  width: 150px;
}
@keyframes carouselB {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(calc(3 * -150px), 0, 0);
  }
}
</style>
