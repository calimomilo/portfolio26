<script setup>
import HashtagPill from '@/components/HashtagPill.vue';
import TitlePage from '@/components/TitlePage.vue';
import { trans } from '@/composables/useTranslations';
import projects from '@/data/projects';
import texts from '@/data/texts';
import SideNavLayout from '@/layouts/SideNavLayout.vue';
import components from '@/composables/importProjects'
import ImagePicker from '@/components/ImagePicker.vue';
import { onMounted, ref } from 'vue';

const props = defineProps({
    slug: String
})

const project = projects.find(el => el.slug === props.slug)
const imagePickerY = ref(0);

const updatePos = () => {
    const imgEl = document.getElementById('image_picker');

    console.log(window.innerWidth)
  if (window.innerWidth >= 768) {
    const imgRect = imgEl.getBoundingClientRect();
    imagePickerY.value = imgRect.top + window.scrollY;
    // console.log(imgEl, imagePickerY.value)

    imgEl.style.width = `calc(100vh - ${imagePickerY.value+224}px)`
  } else {
    imgEl.style.width = '100%';
  }
}


onMounted(() => {
  window.addEventListener('scroll', () => {
    // console.log('scroll')
    updatePos()
  });
  window.addEventListener('resize', () => {
    // console.log('resize');
    updatePos()
  });

  updatePos();
})

</script>

<template>
  <SideNavLayout back :current-slug="project.slug">
    <div class="flex flex-col gap-6 md:flex-row md:justify-between md:items-baseline">
      <TitlePage>{{ trans(project.title) }} : {{ trans(project.subtitle) }}</TitlePage>
      <p>{{ trans(project.year) }}</p>
    </div>

    <div class="flex gap-2 flex-wrap mt-4 md:flex-row-reverse md:-mt-6">
        <HashtagPill v-for="(hashtag, i) in trans(project.hashtags)" :key="i">
            #{{ hashtag }}
        </HashtagPill>
    </div>

    <div class="flex flex-col gap-6 mt-6 md:flex-row">
      <div>
        <h3>{{ trans(texts.projects.short) }}</h3>
        <p>{{ trans(project.short) }}</p>
        <h3>{{ trans(texts.projects.detail) }}</h3>
        <component :is="components[trans(project.slug)]"></component>
      </div>
      <ImagePicker id="image_picker" :images="project.images" class="mb-11 md:mb-0"></ImagePicker>
    </div>

  </SideNavLayout>
</template>