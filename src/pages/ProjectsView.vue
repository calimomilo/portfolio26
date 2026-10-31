<script setup>
import ProjectCard from '@/components/ProjectCard.vue';
import projects from '@/data/projects';
import SideNavLayout from '@/layouts/SideNavLayout.vue';


</script>

<template>
  <SideNavLayout selected="projects">
    <ProjectCard v-for="(project, i) in projects" :key="i" :project="project" list></ProjectCard>
  </SideNavLayout>
</template>