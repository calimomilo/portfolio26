<script setup>
import TitlePage from '@/components/TitlePage.vue';
import { trans } from '@/composables/useTranslations';
import projects from '@/data/projects';
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
  </SideNavLayout>
</template>