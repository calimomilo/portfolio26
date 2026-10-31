<script setup>
import IconSwitcher from '@/svgs/IconSwitcher.vue';
import { RouterLink } from 'vue-router';
import ButtonText from './ButtonText.vue';

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
        <ButtonText :big="big" :selected="selected"><slot></slot></ButtonText>
        <IconSwitcher :icon="props.trailingIcon" class="fill-neutral-950 w-5" :class="[
            big? 'md:w-6' : '',
            selected? 'hidden' : 'group-hover:fill-primary-900 group-active:fill-primary-700'
            ]"></IconSwitcher>
    </RouterLink>
</template>