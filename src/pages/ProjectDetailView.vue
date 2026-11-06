<script setup>
import HashtagPill from '@/components/HashtagPill.vue';
import TitlePage from '@/components/TitlePage.vue';
import { trans } from '@/composables/useTranslations';
import projects from '@/data/projects';
import texts from '@/data/texts';
import SideNavLayout from '@/layouts/SideNavLayout.vue';
import components from '@/composables/importProjects'
import ImagePicker from '@/components/ImagePicker.vue';

const props = defineProps({
    slug: String
})

const project = projects.find(el => el.slug === props.slug)

</script>

<template>
  <SideNavLayout back>
    <div class="flex justify-between items-baseline">
      <TitlePage>{{ trans(project.title) }} : {{ trans(project.subtitle) }}</TitlePage>
      <p>{{ trans(project.year) }}</p>
    </div>

    <div class="flex gap-2 flex-wrap flex-row-reverse -mt-6">
        <HashtagPill v-for="(hashtag, i) in trans(project.hashtags)" :key="i">
            #{{ hashtag }}
        </HashtagPill>
    </div>

    <div class="flex gap-6 mt-6">
      <div class="col-span-1">
        <h3>{{ trans(texts.projects.short) }}</h3>
        <p>{{ trans(project.short) }}</p>
        <h3>{{ trans(texts.projects.detail) }}</h3>
        <component :is="components[trans(project.slug)]"></component>
      </div>
      <ImagePicker :images="project.images" class="col-span-1 w-[calc(100vh-360px)]"></ImagePicker>
    </div>

  </SideNavLayout>
</template>