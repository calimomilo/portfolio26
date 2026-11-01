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

const setActive = (active) => {
  activeProject.value = projects.find(el => el.slug === active);
}

</script>

<template>
  <SideNavLayout selected="projects">
    <TitlePage>{{ trans(texts.projects.title) }}</TitlePage>
    <div v-if="viewMode === 'scroll'" class="flex gap-20">
      <div class="flex flex-col gap-2 w-fit shrink-0 mt-6">
        <p v-for="project in projects" :key="project.slug" @click="scroll(project)" :class="{'italic font-semibold underline decoration-[0.1em] underline-offset-[0.4em]' : activeProject.slug === project.slug }" class="hover:cursor-pointer hover:italic hover:translate-x-2">{{ trans(project.title) }}</p>
      </div>
      <div class="flex gap-12">
        <InfiniteScroll :boundary="0.4" class="h-200 max-w-100" @set-active="setActive">
          <ProjectCard v-for="project in projects" :key="project.slug" :id="project.slug" :project="project" :viewmode="viewMode"></ProjectCard>
        </InfiniteScroll>
        <ProjectCard :project="activeProject" viewmode="text" class="mt-6"></ProjectCard>
      </div>
    </div>
    <div v-if="viewMode === 'list'" :class="[viewMode === 'list' ? 'grid grid-cols-[64px_6fr_5fr] gap-x-5 bg-white' : 'max-h-[calc(100%-72px)] overflow-scroll']">
      <ProjectCard v-for="project in projects" :key="project.slug" :project="project" :viewmode="viewMode"></ProjectCard>
    </div>
  </SideNavLayout>
</template>