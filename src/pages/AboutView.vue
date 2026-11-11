<script setup>
import texts from '@/data/texts';
import SideNavLayout from '@/layouts/SideNavLayout.vue';
import { trans } from '@/composables/useTranslations'
import TitlePage from '@/components/TitlePage.vue';
import TitleChapter from '@/components/TitleChapter.vue';
import { onMounted } from 'vue';

const toList = (arr) => {
  let str = '';
  arr.forEach(element => {
    str += element;
    str += ', ';
  });

  return str.slice(0, -2);
}

onMounted(() => {

  const avoidPortrait = (element) => {
    if (window.innerWidth >= 768) {
      const portrait = document.getElementById('portrait');
      const portraitTop = portrait.getBoundingClientRect().top;
      const portraitH = portrait.getBoundingClientRect().height;
      const cutoff = portraitH * 0.26 + portraitTop;
      // console.log(portraitTop, portraitH, cutoff);

      const elBottom = element.getBoundingClientRect().bottom;

      if (elBottom > portraitTop - 12) {
        element.style.marginLeft = elBottom < cutoff? '80px' : '180px';
      }
    
    // console.log(element, elBottom, portraitTop, cutoff);
    }
  }

  const transList = document.getElementsByClassName('check-trans');

  for(let el of transList) {
    avoidPortrait(el);
  };

  window.addEventListener('scroll', () => {
    for(let el of transList) {
      avoidPortrait(el);
    };
  });
  window.addEventListener('resize', () => {
    for(let el of transList) {
      avoidPortrait(el);
    };
  });
  // console.log(transList);
})
</script>

<template>
  <SideNavLayout selected="about">
    <TitlePage>{{ trans(texts.about.title) }}</TitlePage>
    <img id="portrait" src="/assets/photo_camilo.png" alt="Photo de Camilo" class="max-md:hidden h-95 fixed bottom-0 left-28 drop-shadow-lg drop-shadow-neutral-950/30 z-1">
    <div>
      <TitleChapter>{{ trans(texts.about.background.title) }}</TitleChapter>
      <ul class="list-disc list-inside">
        <li v-for="(element, i) in texts.about.background.list" :key="i">
          <span class="font-semibold">{{ trans(element.date) }} :</span> {{ trans(element.el) }}</li>
      </ul>
    </div>

    <div>
      <TitleChapter>{{ trans(texts.about.skills.title) }}</TitleChapter>
      <ul class="list-disc list-inside">
        <li v-for="(element, i) in texts.about.skills.list" :key="i">
          <span class="font-semibold">{{ trans(element.cat) }} :</span> {{ toList(element.list) }}</li>
      </ul>
    </div>

    <div class="check-trans">
      <TitleChapter>{{ trans(texts.about.ai.title) }}</TitleChapter>
      <p>{{ trans(texts.about.ai.text) }}</p>
    </div>

    <!-- <div>
      <TitleChapter>{{ trans(texts.about.after.title) }}</TitleChapter>
      <p>{{ trans(texts.about.after.text) }}</p>
    </div> -->

    <div class="check-trans relative">
      <TitleChapter>{{ trans(texts.about['know-me'].title) }}</TitleChapter>
      <ul class="list-disc list-inside">
        <li>
          {{ trans(texts.about['know-me'].book) }} : {{ trans(texts.about['know-me']['book-title']) }} (Patrick Rothfuss)
          <img :src="`/assets/${texts.about['know-me']['book-url']}`" :alt="trans(texts.about['know-me']['book-title'])" class="inline-block h-40 absolute max-md:top-24 left-8 md:hidden md:left-84">
        </li>
        <li>
          {{ trans(texts.about['know-me'].film) }} : {{ trans(texts.about['know-me']['film-title']) }} (2026)
          <img :src="`/assets/${texts.about['know-me']['film-url']}`" :alt="trans(texts.about['know-me']['film-title'])" class="inline-block h-40 absolute max-md:top-24 left-48 md:hidden md:left-132">
        </li>
      </ul>
    </div>
  </SideNavLayout>
</template>