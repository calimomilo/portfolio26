<script setup>
const props = defineProps({
    selected: Boolean,
    big: Boolean
})
</script>

<template>
    <p class="font-ppmori font-semibold text-neutral-950 text-base" :class="[
        props.big? 'md:text-xl' : '',
        props.selected? 'italic underline decoration-[0.1em] underline-offset-[0.4em]' : 'group-hover:text-primary-900 group-hover:italic group-hover:underline group-hover:decoration-[0.1em] group-hover:underline-offset-[0.4em] group-active:text-primary-700 group-active:italic group-active:underline group-active:decoration-[0.1em] group-active:underline-offset-[0.4em]'
        ]"><slot></slot></p>
</template>