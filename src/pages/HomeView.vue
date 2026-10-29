<script setup>
import BurstSvg from '@/svgs/BurstSvg.vue';
import texts from '@/data/texts';
import ButtonLink from '@/components/ButtonLink.vue';
import SocialsLink from '@/components/SocialsLink.vue';

</script>

<template>
  <section class="relative w-screen h-screen overflow-hidden flex flex-col justify-center p-16 gap-12 font-ppmori text-neutral-950 md:flex-row">
    <BurstSvg class="absolute -z-100 fill-primary-100 w-200 mix-blend-multiply -scale-x-100 -rotate-10 -right-56 -bottom-8 md:w-400 md:-right-80 md:-bottom-20"></BurstSvg>
    <h1 class="hidden">Portfolio Camilo Peña-Parra</h1>

    <div class="flex flex-col">
      <p class="text-3xl md:text-5xl">{{ texts.eng.home['home-start'] }} <span class="sr-only">Camilo</span><img src="/assets/camilo.svg" alt="Camilo" class="inline h-8 px-1 mb-3">.</p>
      <p class="text-xl -mt-1 md:text-3xl">{{ texts.eng.home['home-end'] }}</p>
    </div>

    <div class="flex flex-col w-fit -ms-2">
      <ButtonLink to="/about" trailing-icon="right_arrow">{{ texts.eng.nav.about }}</ButtonLink>
      <ButtonLink to="/projects" trailing-icon="right_arrow">{{ texts.eng.nav.projects }}</ButtonLink>
    </div>
    <SocialsLink></SocialsLink>
  </section>
</template>