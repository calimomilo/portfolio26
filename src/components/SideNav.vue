<script setup>
import ButtonLink from '@/components/ButtonLink.vue';
import SocialsLink from '@/components/SocialsLink.vue';
import texts from '@/data/texts';
import { trans } from '@/composables/useTranslations';
import LangPicker from './LangPicker.vue';
import projects from '@/data/projects.js';
import { ref } from 'vue';


const props = defineProps({
    back: Boolean,
    selected: String,
    currentSlug: String
})

const nextSlug = ref('none');
const prevSlug = ref('none');

const currentId = projects.findIndex(p => p.slug === props.currentSlug);

if (!(currentId === -1)) {
    nextSlug.value = projects[currentId-1] ? projects[currentId-1].slug : props.currentSlug;
    prevSlug.value = projects[currentId+1] ? projects[currentId+1].slug : props.currentSlug;
}

console.log(currentId, prevSlug.value, nextSlug.value)
</script>

<template>
    <aside class="h-screen fixed selection:bg-accent-1 selection:text-white bg-white bg-[url(/public/assets/check_pattern.svg)] max-md:right-0 max-md:z-3 w-[75vw] md:w-45">
        <div class="relative p-6 size-full bg-primary-100 mix-blend-multiply">
            <ButtonLink v-if="back" to="/projects" leading-icon="left_arrow" big>{{ trans(texts.projects.back) }}</ButtonLink>
            <ButtonLink v-else to="/" leading-icon="home" big>{{ trans(texts.home.title) }}</ButtonLink>
            <div v-if="back" class="flex flex-col w-fit mt-8">
                <ButtonLink :to="`/projects/${nextSlug}`" leading-icon="up_arrow" :disabled="nextSlug === currentSlug">{{ trans(texts.projects.next) }}</ButtonLink>
                <ButtonLink :to="`/projects/${prevSlug}`" leading-icon="down_arrow" :disabled="prevSlug === currentSlug">{{ trans(texts.projects.prev) }}</ButtonLink>
            </div>
            <div v-else class="flex flex-col w-fit mt-8">
                <ButtonLink to="/projects" trailing-icon="right_arrow" :selected="props.selected === 'projects'">{{ trans(texts.projects.title) }}</ButtonLink>
                <ButtonLink to="/about" trailing-icon="right_arrow" :selected="props.selected === 'about'">{{ trans(texts.about.title) }}</ButtonLink>
            </div>
            <LangPicker class="mt-8"></LangPicker>
            <SocialsLink class="absolute w-48 bottom-6 -left-12" vertical></SocialsLink>
        </div>
    </aside>
</template>