<script setup>
import { trans } from '@/composables/useTranslations';

const props = defineProps({
    project: Object
})

const project = props.project ?? {};
// console.log(props.project, project)

</script>

<template>
    <p class="mb-3 italic">« {{ trans(project.detail.p1) }}<br>{{ trans(project.detail.p2) }} »</p>
<p class="mb-3">{{ trans(project.detail.p3) }} <a :href="trans(project.detail.l1.url)" target="_blank" class="text-accent-1 underline decoration-[0.05em] underline-offset-[0.2em]">{{ trans(project.detail.l1.text) }}</a> {{ trans(project.detail.p4) }}</p>
<p class="mb-3">{{ trans(project.detail.p5) }}</p>
</template>