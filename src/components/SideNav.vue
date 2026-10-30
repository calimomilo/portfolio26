<script setup>
import ButtonLink from '@/components/ButtonLink.vue';
import SocialsLink from '@/components/SocialsLink.vue';
import texts from '@/data/texts';

const props = defineProps({
    selected: String
})
</script>

<template>
    <aside class="h-screen max-md:bg-white max-md:bg-[url(/public/assets/check_pattern.svg)] max-md:absolute max-md:right-0 w-[75vw] md:w-45">
        <div class="relative p-6 size-full bg-primary-100 mix-blend-multiply">
            <ButtonLink to="/" leading-icon="home" big>{{ texts.eng.nav.home }}</ButtonLink>
            <div class="flex flex-col w-fit mt-8">
                <ButtonLink to="/about" trailing-icon="right_arrow" :selected="props.selected === 'about'">{{ texts.eng.nav.about }}</ButtonLink>
                <ButtonLink to="/projects" trailing-icon="right_arrow" :selected="props.selected === 'projects'">{{ texts.eng.nav.projects }}</ButtonLink>
            </div>
            <SocialsLink class="absolute min-w-42 bottom-6 -left-8" vertical></SocialsLink>
        </div>
    </aside>
</template>