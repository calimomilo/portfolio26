<script setup>
import { trans } from '@/composables/useTranslations'
import HashtagPill from './HashtagPill.vue';

defineProps({
    project: Object,
    viewmode: String
})

</script>

<template>
    <RouterLink :to="`/projects/${project.slug}`" v-if="viewmode === 'list'" class="col-span-3 grid grid-cols-subgrid gap-y-2 px-4 py-2 min-h-11 items-baseline font-ppmori border-b border-primary-600 last:border-0 md:px-6">
        <p class="w-10 text-base shrink-0">{{ trans(project.year) }}</p>
        <h2 class="grow-3 text-base font-semibold max-md:col-span-2">{{ trans(project.title) }} : {{ trans(project.subtitle) }}</h2>
        <div class="max-md:col-span-3 grow-2 flex gap-2 flex-wrap">
            <HashtagPill v-for="(hashtag, i) in trans(project.hashtags)" :key="i">
                #{{ hashtag }}
            </HashtagPill>
        </div>
    </RouterLink>
    <RouterLink v-else-if="viewmode === 'scroll'" :to="`/projects/${project.slug}`" :id="project.slug">
    <article class="pb-8">
        <div class="w-full aspect-square bg-white flex justify-center items-center">
            <h2 class="inline text-base font-semibold">{{ trans(project.title) }} : {{ trans(project.subtitle) }}</h2>
        </div>
    </article>
    </RouterLink>
    <article v-else-if="viewmode === 'text'" :id="project.slug">
        <h2 class="text-2xl font-semibold">{{ trans(project.title) }}</h2>
        <h3 class="text-xl italic mb-6">{{ trans(project.subtitle) }}</h3>
        <p class="text-balanced mb-12">{{ trans(project.short) }}</p>
        <div class="flex gap-2 flex-wrap">
            <HashtagPill v-for="(hashtag, i) in trans(project.hashtags)" :key="i">
                #{{ hashtag }}
            </HashtagPill>
        </div>
        </article>
</template>