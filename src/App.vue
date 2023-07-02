<script setup lang="ts">
import icon from "@assets/vue.svg";
</script>

<template>
  <div class="flex space-x-10">
    <router-link to="/">Go to Home</router-link>
    <router-link to="/about">Go to About</router-link>
  </div>
  <div class="">
    <img :src="icon" class="logo vue" alt="Vue logo" />
    <router-view />
  </div>
</template>

<style scoped></style>
