<script setup>
import { trans } from '@/composables/useTranslations'
import HashtagPill from './HashtagPill.vue';

defineProps({
    project: Object,
    viewmode: String
})

</script>

<template>
    <article v-if="viewmode === 'list'" class="col-span-3 grid grid-cols-subgrid px-6 py-1 min-h-11 items-center font-ppmori border-b border-primary-600 last:border-0">
        <p class="w-10 text-base shrink-0">{{ trans(project.year) }}</p>
        <h2 class="grow-3 text-base font-semibold">{{ trans(project.title) }} : {{ trans(project.subtitle) }}</h2>
        <div class="grow-2 flex gap-2">
            <HashtagPill v-for="(hashtag, i) in trans(project.hashtags)" :key="i">
                #{{ hashtag }}
            </HashtagPill>
        </div>
    </article>
    <article v-else-if="viewmode === 'scroll'" :id="project.slug" class="pb-8">
        <div class="w-full aspect-square bg-white flex justify-center items-center">
            <h2 class="inline text-base font-semibold">{{ trans(project.title) }} : {{ trans(project.subtitle) }}</h2>
        </div>
    </article>
    <article v-else-if="viewmode === 'text'" :id="project.slug">
        <h2 class="text-2xl font-semibold">{{ trans(project.title) }}</h2>
        <h3 class="text-xl italic mb-6">{{ trans(project.subtitle) }}</h3>
        <p class="text-balanced mb-12">{{ trans(project.short) }}</p>
        <div class="flex gap-x-2 gap-y-2 flex-wrap">
            <HashtagPill v-for="(hashtag, i) in trans(project.hashtags)" :key="i">
                #{{ hashtag }}
            </HashtagPill>
        </div>
    </article>
</template>