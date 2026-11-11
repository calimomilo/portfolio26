<script setup>
import IconSwitcher from '@/components/IconSwitcher.vue';
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
    <a :href="trans(project.detail.l1.url)" target="_blank" class="text-accent-1 underline decoration-[0.05em] underline-offset-[0.2em]">
        {{ trans(project.detail.l1.text) }}
        <IconSwitcher icon="out_arrow" class="inline fill-accent-1 w-5 h-5"></IconSwitcher>
    </a>
    <br>
    <a :href="trans(project.detail.l2.url)" target="_blank" class="text-accent-1 underline decoration-[0.05em] underline-offset-[0.2em]">
        {{ trans(project.detail.l2.text) }}
        <IconSwitcher icon="out_arrow" class="inline fill-accent-1 w-5 h-5"></IconSwitcher>
    </a>
</template>