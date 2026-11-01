<script setup>
import InfiniteScroll from '@/components/InfiniteScroll.vue';
import ProjectCard from '@/components/ProjectCard.vue';
import TitlePage from '@/components/TitlePage.vue';
import { trans } from '@/composables/useTranslations';
import projects from '@/data/projects';
import texts from '@/data/texts';
import SideNavLayout from '@/layouts/SideNavLayout.vue';
import { ref } from 'vue';

const viewMode = ref('scroll');

const activeProject = ref(projects[0]);

const scroll = (project) =>  {
  activeProject.value = project;
  document.getElementById(project.slug).scrollIntoView();
}

</script>

<template>
  <SideNavLayout selected="projects">
    <TitlePage>{{ trans(texts.projects.title) }}</TitlePage>
    <div v-if="!(viewMode ==! 'list')" class="flex flex-col gap-1">
      <p v-for="project in projects" :key="project.slug" @click="scroll(project)">{{ trans(project.title) }}</p>
    </div>
    <InfiniteScroll></InfiniteScroll>
    <div v-if="viewMode === 'list'" :class="[viewMode === 'list' ? 'grid grid-cols-[64px_6fr_5fr] gap-x-5 bg-white' : 'max-h-[calc(100%-72px)] overflow-scroll']">
      <ProjectCard v-for="project in projects" :key="project.slug" :project="project" :list="viewMode === 'list'"></ProjectCard>
    </div>
  </SideNavLayout>
</template>