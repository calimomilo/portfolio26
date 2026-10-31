<script setup>
import texts from '@/data/texts';
import ButtonLink from '@/components/ButtonLink.vue';
import SocialsLink from '@/components/SocialsLink.vue';
import trans from '@/composables/useTranslations';

</script>

<template>
  <section class="relative w-screen h-screen overflow-hidden flex flex-col justify-center p-16 gap-12 font-ppmori text-neutral-950 md:flex-row md:gap-4 md:justify-between md:items-center">
    <img src="/assets/bg_burst.svg" alt="" class="absolute -z-100 mix-blend-multiply max-w-1000 w-240 -right-80 -bottom-30 md:w-440 md:-right-112 md:-bottom-56">
    <h1 class="hidden">Portfolio Camilo Peña-Parra</h1>

    <div class="max-md:hidden md:grow-3"></div>
    <div class="flex flex-col md:justify-self-end md:grow-1">
      <p class="text-3xl md:text-5xl">{{ trans(texts.home['home-start']) }} <span class="sr-only">Camilo</span><img src="/assets/camilo.svg" alt="Camilo" class="inline h-8 px-1 mb-3 md:h-12 md:mb-5">.</p>
      <p class="text-xl/[130%] -mt-1 md:text-4xl/[130%] md:max-w-150">{{ trans(texts.home['home-end']) }}</p>
    </div>

    <div class="flex flex-col w-fit -ms-2 md:ms-0 md:shrink-0 md:grow-5 md:gap-4">
      <ButtonLink to="/about" trailing-icon="right_arrow" big>{{ trans(texts.about.title) }}</ButtonLink>
      <ButtonLink to="/projects" trailing-icon="right_arrow" big>{{ trans(texts.projects.title) }}</ButtonLink>
    </div>
    
    <SocialsLink class="absolute max-md:inset-x-0 max-md:bottom-[20vh] -rotate-4 md:rotate-0 md:right-12 md:bottom-8"></SocialsLink>
  </section>
</template>