<template>
  <Layout>
    <template #contents>
      <RouterView />
    </template>
  </Layout>
</template>

<script setup lang="ts">
import Layout from "@components/apple-layouts/Layout.vue";
import { useRouter } from "vue-router";

/*
|---------------------------------------------------------------------------
| Set web title
|---------------------------------------------------------------------------
*/
const router = useRouter();
router.afterEach((to, _) => {
  const title = to.meta.title === undefined ? "" : to.meta.title;
  document.title = `${title} MarvelFitness`;
});
</script>

<style>
html {
  scroll-behavior: smooth;
}
body {
  background-color: white;
}
</style>
