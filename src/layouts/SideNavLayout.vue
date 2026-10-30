<script setup>
import SideNav from '@/components/SideNav.vue';
import IconSwitcher from '@/svgs/IconSwitcher.vue';
import { ref } from 'vue';

const props = defineProps({
    selected: String
})

const showNav = ref(false);

const toggleNav = () => {
    showNav.value = !showNav.value;
}
</script>

<template>
    <button @click="toggleNav()" class="absolute top-6 right-6 md:hidden z-9 w-11 h-11 p-auto">
        <IconSwitcher :icon="showNav? 'close' : 'menu'" class="w-6 h-6 m-auto fill-neutral-950 hover:fill-primary-900 active:fill-primary-700"></IconSwitcher>
    </button>
    <SideNav :selected="props.selected" v-if="showNav" class="md:hidden"></SideNav>
    <SideNav :selected="props.selected" class="max-md:hidden"></SideNav>
    <slot></slot>
</template>