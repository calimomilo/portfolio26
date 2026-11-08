<script setup>
import { RouterView } from 'vue-router';
import CursorDecoration from './components/CursorDecoration.vue';

</script>

<template>
  <CursorDecoration></CursorDecoration>
  <RouterView :key="$route.fullPath"></RouterView>
</template>

<style scoped></style>
