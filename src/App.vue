<script setup lang="ts"></script>

<template>
  <div class="flex space-x-10">
    <router-link to="/">Go to Home</router-link>
    <router-link to="/about">Go to About</router-link>
  </div>
  <div class="">
    <router-view />
  </div>
</template>

<style scoped></style>
