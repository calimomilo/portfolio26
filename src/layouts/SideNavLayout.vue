<script setup>
import SideNav from '@/components/SideNav.vue';
import IconSwitcher from '@/components/IconSwitcher.vue';
import { ref } from 'vue';

defineProps({
    back: Boolean,
    selected: String,
    currentSlug: String
})

const showNav = ref(false);

const toggleNav = () => {
    showNav.value = !showNav.value;
}
</script>

<template>
    <RouterLink v-if="back" to="/projects" class="absolute top-4 left-6 md:hidden z-9 w-11 h-11 flex items-center">
        <IconSwitcher icon="left_arrow" class="w-6 h-6 m-auto fill-neutral-950 hover:fill-primary-900 active:fill-primary-700"></IconSwitcher>
    </RouterLink>
    <button @click="toggleNav()" class="absolute top-4 right-6 md:hidden z-9 w-11 h-11 appearance-none flex items-center">
        <IconSwitcher :icon="showNav? 'close' : 'menu'" class="w-6 h-6 m-auto fill-neutral-950 hover:fill-primary-900 active:fill-primary-700"></IconSwitcher>
    </button>
    <SideNav :selected="selected" v-if="showNav" class="md:hidden"></SideNav>
    <SideNav :back="back" :current-slug="currentSlug" :selected="selected" class="max-md:hidden"></SideNav>
    <section class="inline-block h-screen w-screen px-6 pt-16 pb-8 font-ppmori selection:bg-accent-1 selection:text-white text-base md:ps-60 md:py-11 md:pe-15">
        <slot></slot>
    </section>
</template>