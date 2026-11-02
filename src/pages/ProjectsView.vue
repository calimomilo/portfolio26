<script setup>
import IconSwitcher from '@/components/IconSwitcher.vue';
import InfiniteScroll from '@/components/InfiniteScroll.vue';
import ProjectCard from '@/components/ProjectCard.vue';
import TitlePage from '@/components/TitlePage.vue';
import { getSessionStorage, setSessionStorage } from '@/composables/useLocalStorage';
import { trans } from '@/composables/useTranslations';
import projects from '@/data/projects';
import texts from '@/data/texts';
import SideNavLayout from '@/layouts/SideNavLayout.vue';
import { ref } from 'vue';

const viewMode = ref(getSessionStorage('viewmode', 'scroll'));

const activeProject = ref(projects[0]);

const scroll = (project) =>  {
  document.getElementById(project.slug).scrollIntoView();
}

const setActive = (active) => {
  activeProject.value = projects.find(el => el.slug === active);
}

const switchViewmode = (view) => {
  viewMode.value = setSessionStorage('viewmode', view);
}

</script>

<template>
  <SideNavLayout selected="projects">
    <div class="flex flex-col md:items-center md:justify-between md:gap-20 md:flex-row">
      <TitlePage>{{ trans(texts.projects.title) }}</TitlePage>

      <div class="flex items-center md:bg-white w-fit mb-4 md:rotate-2 md:drop-shadow-sm md:mb-8">
        <p class="md:px-4">{{ trans(texts.projects.view) }}</p>
        <button class="flex w-11 h-11 justify-center items-center group hover:cursor-pointer" @click="switchViewmode('scroll')">
          <IconSwitcher icon="scroll_view" class="fill-neutral-950 group-hover:fill-primary-900 group-active:fill-primary-700" :class="{'fill-primary-700' : viewMode === 'scroll'}"></IconSwitcher>
        </button>
        <button class="flex w-11 h-11 justify-center items-center group hover:cursor-pointer" @click="switchViewmode('list')">
          <IconSwitcher icon="list_view" class="fill-neutral-950 group-hover:fill-primary-900 group-active:fill-primary-700" :class="{'fill-primary-700' : viewMode === 'list'}"></IconSwitcher>
        </button>
        <!-- <button class="flex w-11 h-11 justify-center items-center group hover:cursor-pointer" @click="switchViewmode('grid')">
          <IconSwitcher icon="grid_view" class="fill-neutral-950 group-hover:fill-primary-900 group-active:fill-primary-700" :class="{'fill-primary-700' : viewMode === 'grid'}"></IconSwitcher>
        </button> -->
      </div>
    </div>

    <!-- SCROLL VIEWMODE -->
    <div v-if="viewMode === 'scroll'" class="grid grid-cols-[120px_1fr] md:grid-cols-[140px_40px_1fr_1fr] gap-6">
      <div class="col-span-1 flex flex-col gap-2 w-30 shrink-0 md:mt-6">
        <p v-for="project in projects" :key="project.slug" @click="scroll(project)" :class="{'italic font-semibold underline decoration-[0.1em] underline-offset-[0.4em]' : activeProject.slug === project.slug }" class="hover:cursor-pointer hover:italic hover:translate-x-2">{{ trans(project.title) }}</p>
      </div>
      <div class="md:col-span-3 md:grid md:grid-cols-subgrid">
        <p class="mt-6 max-md:hidden">{{ trans(activeProject.year) }}</p>
        <InfiniteScroll :boundary="0.3" class="min-w-50 shrink-1 h-[calc(100vh-180px)] md:h-[calc(100vh-120px)]" @set-active="setActive">
          <ProjectCard v-for="project in projects" :key="project.slug" :id="project.slug" :project="project" :viewmode="viewMode"></ProjectCard>
        </InfiniteScroll>
        <ProjectCard :project="activeProject" viewmode="text" class="shrink-5 grow-1 mt-6 max-w-160 mx-8 max-md:hidden"></ProjectCard>
      </div>
    </div>

    <!-- LIST VIEWMODE -->
    <div v-if="viewMode === 'list'" :class="[viewMode === 'list' ? 'grid grid-cols-[64px_6fr_5fr] gap-x-5 bg-white' : 'max-h-[calc(100%-72px)] overflow-scroll']">
      <ProjectCard v-for="project in projects" :key="project.slug" :project="project" :viewmode="viewMode"></ProjectCard>
    </div>
  </SideNavLayout>
</template>