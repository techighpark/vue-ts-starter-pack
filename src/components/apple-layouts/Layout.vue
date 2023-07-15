<template>
  <div class="min-w-[20rem]">
    <Header />
    <main class="absolute top-10 w-full h-full">
      <slot name="contents" />
    </main>
  </div>
</template>

<script setup lang="ts">
// vue
import Header from "@components/apple-layouts/header/Header.vue";
</script>

<style></style>
