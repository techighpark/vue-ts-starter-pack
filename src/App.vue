<template>
  <Layout>
    <template #contents>
      <RouterView />
    </template>
  </Layout>
</template>

<script setup lang="ts">
import Layout from "@components/apple-layouts/Layout.vue";
</script>

<style>
html {
  scroll-behavior: smooth;
}
body {
  background-color: white;
}
</style>
