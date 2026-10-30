<script setup>
import IconSwitcher from '@/svgs/IconSwitcher.vue';
import { RouterLink } from 'vue-router';

const props = defineProps({
    leadingIcon: String,
    trailingIcon: String,
    selected: Boolean,
    big: Boolean
})
</script>

<template>
    <RouterLink class="group hover:cursor-pointer flex w-fit min-h-11 gap-2 py-2 ps-2 pe-1">
        <IconSwitcher :icon="props.leadingIcon" class="fill-neutral-950 w-5" :class="[
            big? 'md:w-6' : '',
            selected? 'hidden' : 'group-hover:fill-primary-900 group-active:fill-primary-700'
            ]"></IconSwitcher>
        <p class="font-ppmori font-semibold text-neutral-950 text-base" :class="[
            big? 'md:text-xl' : '',
            selected? 'italic underline decoration-[0.1em] underline-offset-[0.4em]' : 'group-hover:text-primary-900 group-hover:italic group-hover:underline group-hover:decoration-[0.1em] group-hover:underline-offset-[0.4em] group-active:text-primary-700 group-active:italic group-active:underline group-active:decoration-[0.1em] group-active:underline-offset-[0.4em]'
            ]"><slot></slot></p>
        <IconSwitcher :icon="props.trailingIcon" class="fill-neutral-950 w-5" :class="[
            big? 'md:w-6' : '',
            selected? 'hidden' : 'group-hover:fill-primary-900 group-active:fill-primary-700'
            ]"></IconSwitcher>
    </RouterLink>
</template>