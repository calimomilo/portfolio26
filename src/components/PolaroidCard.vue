<script setup>
defineProps({
    img: String,
    alt: String,
    caption: String
})
</script>
<template>
    <article class="flex flex-col w-80 items-center p-4 gap-2 bg-white drop-shadow-lg drop-shadow-neutral-950/30 md:p-6 md:gap-4">
        <img :src="img" :alt="alt">
        <p class="text-balance text-center grow-1 flex items-center font-semibold">{{ caption }}</p>
    </article>
</template>