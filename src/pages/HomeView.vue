<script setup>
import BurstSvg from '@/svgs/BurstSvg.vue';
import texts from '@/data/texts';
import ButtonLink from '@/components/ButtonLink.vue';

</script>

<template>
  <section class="relative flex flex-col justify-center p-16 w-screen h-screen overflow-hidden font-ppmori text-neutral-950 md:flex-row">
    <BurstSvg class="absolute -z-100 fill-primary-100 w-200 mix-blend-multiply -scale-x-100 -rotate-10 -right-56 -bottom-8 md:w-400 md:-right-80 md:-bottom-20"></BurstSvg>
    <h1 class="hidden">Portfolio Camilo Peña-Parra</h1>

    <div class="flex flex-col">
      <p class="text-3xl md:text-5xl">{{ texts.eng.home['home-start'] }} <span class="sr-only">{{ texts.eng.home['home-hidden'] }}</span><img src="/assets/camilo.svg" alt="Camilo" class="inline h-8 px-1 mb-3">.</p>
      <p class="text-xl -mt-1 md:text-3xl">{{ texts.eng.home['home-end'] }}</p>
    </div>

    <div>
      <ButtonLink trailing-icon="right_arrow" selected>About me</ButtonLink>
    </div>
  </section>
</template>