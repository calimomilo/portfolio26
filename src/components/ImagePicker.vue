<script setup>
import { trans } from '@/composables/useTranslations';
import { ref } from 'vue';

const props = defineProps({
    images: Array
})

const activeImage = ref(props.images[0])

const setActiveImage = (img) => {
    activeImage.value = img;
}
</script>

<template>
    <div>

        <div class="w-full aspect-square bg-white flex justify-center items-center p-4 mb-6" @click="fullScreen()">
            <img :src="`/photos/${activeImage.url}`" :alt="trans(activeImage.alt)" class="max-w-full max-h-full text-neutral-950">
        </div>
        <div class="overflow-scroll w-full">
            <div class="flex h-40 gap-3">
                <div v-for="(image, i) in images" :key="i" class="aspect-square bg-white flex justify-center items-center p-4" @click="setActiveImage(image)">
                    <img :src="`/photos/${image.url}`" :alt="trans(image.alt)" class="max-w-full max-h-full text-neutral-950">
                </div>
            </div>
        </div>
    </div>
</template>