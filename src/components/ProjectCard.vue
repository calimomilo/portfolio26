<script setup>
import { trans } from '@/composables/useTranslations'
import HashtagPill from './HashtagPill.vue';

const props = defineProps({
    project: Object,
    list: Boolean
})

console.log(props.project);
</script>

<template>
    <article v-if="list" class="col-span-3 grid grid-cols-subgrid px-6 py-1 min-h-11 items-center font-ppmori border-b border-primary-600 last:border-0">
        <p class="w-10 text-base shrink-0">{{ trans(project.year) }}</p>
        <h2 class="grow-3 text-base font-semibold">{{ trans(project.title) }} : {{ trans(project.subtitle) }}</h2>
        <div class="grow-2 flex gap-2">
            <HashtagPill v-for="(hashtag, i) in trans(project.hashtags)" :key="i">
                #{{ hashtag }}
            </HashtagPill>
        </div>
    </article>
    <article v-else>
        
    </article>
</template>