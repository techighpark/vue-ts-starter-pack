<template>
  <div class="min-w-[20rem]">
    <Header />
    <main>
      <slot name="contents" />
    </main>
  </div>
</template>

<script setup lang="ts">
import { Ref, onMounted, ref } from "vue";
// vue
import Header from "@components/apple-layouts/header/Header.vue";

/* 
|----------------------------------------------------------------------------------------------------------------
| observer
|----------------------------------------------------------------------------------------------------------------
*/
const observerArea: Ref<Element | null> = ref(null);

interface InstersectionOption {
  root: Element | null;
  rootMargin: string;
  threshold: number;
}
interface ObserverCallbackParams {
  entries: IntersectionObserverEntry[];
  _observer?: IntersectionObserver;
}
const firstObserverOption: InstersectionOption = {
  root: observerArea.value,
  rootMargin: "0px",
  threshold: 0.4,
};
function firstObserverCallback({ entries }: ObserverCallbackParams): void {
  entries.forEach((entry: IntersectionObserverEntry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove("opacity-0");
    } else {
      entry.target.classList.add("opacity-0");
    }
  });
}

onMounted(() => {
  const firstObserver = new IntersectionObserver(
    (entries) => firstObserverCallback({ entries }),
    firstObserverOption
  );

  let firstTargets: HTMLCollectionOf<Element> = document.getElementsByClassName(
    "first-observer-area"
  );
  // let targets: Element[] | null = first-observer-area.value;
  if (firstTargets !== null) {
    for (const target of firstTargets) {
      firstObserver.observe(target);
    }
  }
});
</script>

<style></style>
