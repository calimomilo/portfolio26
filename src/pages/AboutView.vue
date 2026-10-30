<script setup>
import texts from '@/data/texts';
import SideNavLayout from '@/layouts/SideNavLayout.vue';

</script>

<template>
  <SideNavLayout selected="about">
    <h1 class="font-ppmori text-neutral-950 font-black text-2xl md:text-4xl">{{ texts.eng.about.title }}</h1>
  </SideNavLayout>
</template>