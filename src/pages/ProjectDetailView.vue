<script setup>
import HashtagPill from '@/components/HashtagPill.vue';
import TitlePage from '@/components/TitlePage.vue';
import { trans } from '@/composables/useTranslations';
import projects from '@/data/projects';
import texts from '@/data/texts';
import SideNavLayout from '@/layouts/SideNavLayout.vue';

const props = defineProps({
    slug: String
})

const project = projects.find(el => el.slug === props.slug)

</script>

<template>
  <SideNavLayout back>
    <TitlePage>{{ trans(project.title) }}</TitlePage>
    <h2 class="text-xl italic font-semibold -mt-2">{{ trans(project.subtitle) }}</h2>
    <div class="flex gap-2 flex-wrap">
        <HashtagPill v-for="(hashtag, i) in trans(project.hashtags)" :key="i">
            #{{ hashtag }}
        </HashtagPill>
    </div>
    <h3>{{ trans(texts.projects.short) }}</h3>
    <p>{{ trans(project.short) }}</p>
    <h3>{{ trans(texts.projects.detail) }}</h3>
    <p v-for="(p, i) in trans(project.desc)" :key="i">{{ p }}</p>
  </SideNavLayout>
</template>