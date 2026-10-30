<script setup>
import ButtonLink from '@/components/ButtonLink.vue';
import SocialsLink from '@/components/SocialsLink.vue';
import texts from '@/data/texts';

const props = defineProps({
    selected: String
})
</script>

<template>
    <aside class="h-screen absolute max-md:bg-white max-md:bg-[url(/public/assets/check_pattern.svg)] max-md:right-0 w-[75vw] md:w-45">
        <div class="relative p-6 size-full bg-primary-100 mix-blend-multiply">
            <ButtonLink to="/" leading-icon="home" big>{{ texts.eng.home.title }}</ButtonLink>
            <div class="flex flex-col w-fit mt-8">
                <ButtonLink to="/about" trailing-icon="right_arrow" :selected="props.selected === 'about'">{{ texts.eng.about.title }}</ButtonLink>
                <ButtonLink to="/projects" trailing-icon="right_arrow" :selected="props.selected === 'projects'">{{ texts.eng.projects.title }}</ButtonLink>
            </div>
            <SocialsLink class="absolute min-w-42 bottom-6 -left-8" vertical></SocialsLink>
        </div>
    </aside>
</template>