<script setup>
import ButtonLink from '@/components/ButtonLink.vue';
import SocialsLink from '@/components/SocialsLink.vue';
import texts from '@/data/texts';
import { trans } from '@/composables/useTranslations';
import LangPicker from './LangPicker.vue';


const props = defineProps({
    selected: String
})
</script>

<template>
    <aside class="h-screen absolute max-md:bg-white max-md:bg-[url(/public/assets/check_pattern.svg)] max-md:right-0 w-[75vw] md:w-45">
        <div class="relative p-6 size-full bg-primary-100 mix-blend-multiply">
            <ButtonLink to="/" leading-icon="home" big>{{ trans(texts.home.title) }}</ButtonLink>
            <div class="flex flex-col w-fit mt-8">
                <ButtonLink to="/about" trailing-icon="right_arrow" :selected="props.selected === 'about'">{{ trans(texts.about.title) }}</ButtonLink>
                <ButtonLink to="/projects" trailing-icon="right_arrow" :selected="props.selected === 'projects'">{{ trans(texts.projects.title) }}</ButtonLink>
            </div>
            <LangPicker class="mt-8"></LangPicker>
            <SocialsLink class="absolute w-48 bottom-6 -left-12" vertical></SocialsLink>
        </div>
    </aside>
</template>