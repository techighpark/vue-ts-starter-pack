<template>
  <div class="min-w-[20rem]">
    <Header />
    <main>
      <slot name="contents" />
    </main>
  </div>
</template>

<script setup lang="ts">
// vue
import Header from "@components/apple-layouts/header/Header.vue";
</script>

<style></style>
