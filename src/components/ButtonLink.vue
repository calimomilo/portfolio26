<script setup>
import IconSwitcher from '@/components/IconSwitcher.vue';
import { RouterLink } from 'vue-router';
import ButtonText from './ButtonText.vue';

defineProps({
    leadingIcon: String,
    trailingIcon: String,
    selected: Boolean,
    disabled: Boolean,
    big: Boolean
})
</script>

<template>
    <RouterLink class="group flex w-fit min-h-11 gap-2 py-2 ps-2 pe-1" :class="{'hover:cursor-auto' : disabled || selected}">
        <IconSwitcher :icon="leadingIcon" class="fill-neutral-950 w-5" :class="[
            big? 'md:w-6' : '',
            selected? 'hidden' : disabled? 'opacity-50' : 'group-hover:fill-primary-900 group-active:fill-primary-700'
            ]"></IconSwitcher>
        <ButtonText :big="big" :selected="selected" :disabled="disabled"><slot></slot></ButtonText>
        <IconSwitcher :icon="trailingIcon" class="fill-neutral-950 w-5" :class="[
            big? 'md:w-6' : '',
            selected? 'hidden' : disabled? 'opacity-50' : 'group-hover:fill-primary-900 group-active:fill-primary-700'
            ]"></IconSwitcher>
    </RouterLink>
</template>