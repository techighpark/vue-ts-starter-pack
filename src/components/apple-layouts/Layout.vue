<template>
  <div class="w-full min-w-[20rem]">
    <Header />
    <main class="absolute top-12 w-full h-full min-w-[20rem]">
      <slot name="contents" />
    </main>
  </div>
</template>

<script setup lang="ts">
// vue
import Header from "@components/apple-layouts/header/Header.vue";
</script>

<style></style>
