<script setup>
import texts from '@/data/texts';
import SideNavLayout from '@/layouts/SideNavLayout.vue';
import { trans } from '@/composables/useTranslations'
import TitlePage from '@/components/TitlePage.vue';
import TitleChapter from '@/components/TitleChapter.vue';
</script>

<template>
  <SideNavLayout selected="about">
    <TitlePage>{{ trans(texts.about.title) }}</TitlePage>
    <img src="/assets/photo_camilo.png" alt="Photo de Camilo" class="max-md:hidden h-99 fixed bottom-0 left-28 drop-shadow-lg drop-shadow-neutral-950/30 z-1">
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
        <ul>
          <li>
            {{ trans(texts.about['know-me'].book) }} : {{ trans(texts.about['know-me']['book-title']) }} (Patrick Rothfuss)
            <img :src="`/assets/${texts.about['know-me']['book-url']}`" :alt="trans(texts.about['know-me']['book-title'])">
          </li>
          <li>
            {{ trans(texts.about['know-me'].film) }} : {{ trans(texts.about['know-me']['film-title']) }} (2026)
            <img :src="`/assets/${texts.about['know-me']['film-url']}`" :alt="trans(texts.about['know-me']['film-title'])">
          </li>
        </ul>
      </div>
    </div>
  </SideNavLayout>
</template>