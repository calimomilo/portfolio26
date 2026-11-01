<script setup>
import texts from '@/data/texts';
import SideNavLayout from '@/layouts/SideNavLayout.vue';
import { trans } from '@/composables/useTranslations'
import TitlePage from '@/components/TitlePage.vue';
import TitleChapter from '@/components/TitleChapter.vue';
import PolaroidCard from '@/components/PolaroidCard.vue';
</script>

<template>
  <SideNavLayout selected="about">
    <TitlePage>{{ trans(texts.about.title) }}</TitlePage>
    <img src="/assets/photo_camilo.png" alt="Photo de Camilo" class="h-99 absolute bottom-0 left-28 drop-shadow-lg drop-shadow-neutral-950/30 z-1">
    <div>
      <TitleChapter>{{ trans(texts.about.ai.title) }}</TitleChapter>
      <p>{{ trans(texts.about.ai.text) }}</p>
    </div>
    <div>
      <TitleChapter>{{ trans(texts.about.after.title) }}</TitleChapter>
      <p>{{ trans(texts.about.after.text) }}</p>
    </div>
    <div>
      <TitleChapter>{{ trans(texts.about['know-me'].title) }}</TitleChapter>
      <div class="flex gap-2 md:gap-8">
        <PolaroidCard :caption="trans(texts.about['know-me']['book-title'])" img="/assets/the-name-of-the-wind-patrick-rothfuss-666x1024.jpg" :alt="`${trans(texts.about['know-me'].book)} : ${trans(texts.about['know-me']['book-title'])}`"></PolaroidCard>
        <PolaroidCard :caption="trans(texts.about['know-me']['film-title'])" img="/assets/project-hail-mary-poster.avif" :alt="`${trans(texts.about['know-me'].film)} : ${trans(texts.about['know-me']['film-title'])}`"></PolaroidCard>
      </div>
    </div>
  </SideNavLayout>
</template>