<script setup>
import texts from '@/data/texts';
import IconSwitcher from '@/svgs/IconSwitcher.vue';
// import IconSwitcher from '@/svgs/IconSwitcher.vue';
// import { RouterLink } from 'vue-router';

// const props = defineProps({
//     orientation: String
// })
</script>

<template>
    <div>
        <p class="font-ppmori font-semibold text-base text-neutral-950">{{ texts.eng.socials.cta }}</p>
        <img src="/assets/socials_arrow.svg" alt="flèche traitillée" class="w-[65px]">
        <div class="flex gap-1">
            <IconSwitcher icon="linkedin" class="w-11 h-11 fill-neutral-950 hover:cursor-pointer hover:fill-primary-900 active:fill-primary-700"></IconSwitcher>
            <IconSwitcher icon="email" class="w-11 h-11 fill-neutral-950 hover:cursor-pointer hover:fill-primary-900 active:fill-primary-700"></IconSwitcher>
            <IconSwitcher icon="github" class="w-11 h-11 fill-neutral-950 hover:cursor-pointer hover:fill-primary-900 active:fill-primary-700"></IconSwitcher>
        </div>
    </div>
</template>