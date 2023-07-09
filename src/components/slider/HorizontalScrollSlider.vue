<template>
  <div class="horizontal-slider">
    <div class="horizontal-item">
      <img src="@assets/image1.png" alt="" class="horizontal-img" />
    </div>
    <div class="horizontal-item">
      <img src="@assets/example1.png" alt="" class="horizontal-img" />
    </div>
    <div class="horizontal-item">
      <img src="@assets/example2.png" alt="" class="horizontal-img" />
    </div>
    <div class="horizontal-item">
      <img src="@assets/example4.png" alt="" class="horizontal-img" />
    </div>
    <div class="horizontal-item">
      <img src="@assets/image1.png" alt="" class="horizontal-img" />
    </div>
    <div class="horizontal-item">
      <img src="@assets/example1.png" alt="" class="horizontal-img" />
    </div>
    <div class="horizontal-item">
      <img src="@assets/example2.png" alt="" class="horizontal-img" />
    </div>
    <div class="horizontal-item">
      <img src="@assets/example4.png" alt="" class="horizontal-img" />
    </div>
    <div class="horizontal-item">
      <img src="@assets/image1.png" alt="" class="horizontal-img" />
    </div>
    <div class="horizontal-item">
      <img src="@assets/example1.png" alt="" class="horizontal-img" />
    </div>
    <div class="horizontal-item">
      <img src="@assets/image1.png" alt="" class="horizontal-img" />
    </div>
    <div class="horizontal-item">
      <img src="@assets/example1.png" alt="" class="horizontal-img" />
    </div>
    <div class="horizontal-item">
      <img src="@assets/example2.png" alt="" class="horizontal-img" />
    </div>
    <div class="horizontal-item">
      <img src="@assets/example4.png" alt="" class="horizontal-img" />
    </div>
    <div class="horizontal-item">
      <img src="@assets/image1.png" alt="" class="horizontal-img" />
    </div>
    <div class="horizontal-item">
      <img src="@assets/example1.png" alt="" class="horizontal-img" />
    </div>
    <div class="horizontal-item">
      <img src="@assets/example2.png" alt="" class="horizontal-img" />
    </div>
    <div class="horizontal-item">
      <img src="@assets/example4.png" alt="" class="horizontal-img" />
    </div>
    <div class="horizontal-item">
      <img src="@assets/image1.png" alt="" class="horizontal-img" />
    </div>
    <div class="horizontal-item">
      <img src="@assets/example1.png" alt="" class="horizontal-img" />
    </div>
  </div>
  <div></div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
/* 
|-------------------------------------------------------------------------
| Horizontal Slider 
|-------------------------------------------------------------------------
*/
onMounted(() => {
  const scrollContainer = document.querySelector(
    ".horizontal-slider"
  ) as HTMLElement;

  scrollContainer?.addEventListener("wheel", (e: WheelEvent) => {
    e.preventDefault();
    const isAtEnd =
      scrollContainer.scrollLeft + scrollContainer.clientWidth >=
      scrollContainer.scrollWidth;
    if (isAtEnd && e.deltaY > 0) {
      // 스크롤이 더 이상 불가능한 마지막 부분에 도달한 경우
      // 아래로 스크롤
      window.scrollBy({
        top: e.deltaY,
      });
    } else {
      // 좌우로 스크롤
      scrollContainer.scrollBy({
        left: e.deltaY,
      });
    }
  });
});
</script>

<style scoped>
.horizontal-slider {
  height: 200px;
  display: flex;
  overflow-x: hidden;
}
.horizontal-item {
  min-width: 10vw;
}
img.horizontal-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
