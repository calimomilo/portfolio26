<script setup>
import { trans } from '@/composables/useTranslations';

const props = defineProps({
    project: Object
})

const project = props.project ?? {};
// console.log(props.project, project)

</script>

<template>
    <p class="mb-3">{{ trans(project.detail.p1) }}</p>
    <p class="mb-3">{{ trans(project.detail.p2) }}</p>
    <p class="mb-3">{{ trans(project.detail.p3) }}</p>
</template>