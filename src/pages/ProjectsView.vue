<script setup>
import ProjectCard from '@/components/ProjectCard.vue';
import TitlePage from '@/components/TitlePage.vue';
import { trans } from '@/composables/useTranslations';
import projects from '@/data/projects';
import texts from '@/data/texts';
import SideNavLayout from '@/layouts/SideNavLayout.vue';
import { ref } from 'vue';

const viewMode = ref('list');

</script>

<template>
  <SideNavLayout selected="projects">
    <TitlePage>{{ trans(texts.projects.title) }}</TitlePage>
    <div :class="[viewMode === 'list' ? 'grid grid-cols-[64px_6fr_5fr] gap-x-5 bg-white' : '']">
      <ProjectCard v-for="(project, i) in projects" :key="i" :project="project" :list="viewMode === 'list'"></ProjectCard>
    </div>
  </SideNavLayout>
</template>