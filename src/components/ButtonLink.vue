<script setup>
import IconSwitcher from '@/svgs/IconSwitcher.vue';
import { RouterLink } from 'vue-router';

const props = defineProps({
    to: String,
    leadingIcon: String,
    trailingIcon: String,
    selected: Boolean,
    big: Boolean
})
</script>

<template>
    <RouterLink :to="props.to" class="group hover:cursor-pointer flex w-fit min-h-11 gap-2 py-2 ps-2 pe-1">
        <IconSwitcher :icon="props.leadingIcon" class="fill-neutral-950 w-5" :class="[
            big? 'md:w-6' : '',
            selected? 'hidden' : 'group-hover:fill-primary-900 group-active:fill-primary-700'
            ]"></IconSwitcher>
        <p class="font-ppmori font-semibold text-neutral-950 text-base" :class="[
            big? 'md:text-xl' : '',
            selected? 'italic underline decoration-[0.1rem] underline-offset-[0.4rem]' : 'group-hover:text-primary-900 group-hover:italic group-hover:underline group-hover:decoration-[0.1rem] group-hover:underline-offset-[0.4rem] group-active:text-primary-700 group-active:italic group-active:underline group-active:decoration-[0.1rem] group-active:underline-offset-[0.4rem]'
            ]"><slot></slot></p>
        <IconSwitcher :icon="props.trailingIcon" class="fill-neutral-950 w-5" :class="[
            big? 'md:w-6' : '',
            selected? 'hidden' : 'group-hover:fill-primary-900 group-active:fill-primary-700'
            ]"></IconSwitcher>
    </RouterLink>
</template>