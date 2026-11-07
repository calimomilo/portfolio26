<script setup>
import { trans } from '@/composables/useTranslations';
import { ref } from 'vue';
import IconSwitcher from './IconSwitcher.vue';

const props = defineProps({
    images: Array
})

const activeImage = ref(props.images[0])
const first = ref(true);
const last = ref(false);

const setActiveImage = (img, i) => {
    activeImage.value = img;
    
    // console.log(i, document.getElementById(i));
    document.getElementById(i).scrollIntoView();
}

const nextImage = () => {
    const currentId = props.images.findIndex(e => e.url === activeImage.value.url);

    if (currentId < props.images.length - 1) {
        setActiveImage(props.images[currentId+1], currentId+1);
        first.value = false;

        if (currentId === props.images.length - 2) {
            last.value = true;
        }
    }
    // console.log('next', currentId, first.value, last.value)
}

const prevImage = () => {
    const currentId = props.images.findIndex(e => e.url === activeImage.value.url);

    if (currentId > 0) {
        setActiveImage(props.images[currentId-1], currentId-1);
        last.value = false;
        
        if (currentId === 1) {
            first.value = true;
        }
    }
    // console.log('prev', currentId, first.value, last.value)
}

const fullScreen = () => {
    console.log('full screen', activeImage.value)
}
</script>

<template>
    <div>
        <div class="relative w-full aspect-square flex justify-center items-center p-4 mb-6 bg-white">
            <div class="w-full h-full absolute" @click="fullScreen"></div>
            <button v-if="!first" class="absolute w-11 h-11 flex items-center justify-center top-[48%] -left-5 bg-white drop-shadow-sm" @click="prevImage">
                <IconSwitcher icon="left_arrow" class="fill-neutral-950"></IconSwitcher>
            </button>
            
            <img :src="`/photos/${activeImage.url}`" :alt="trans(activeImage.alt)" class="max-w-full max-h-full text-neutral-950">

            <button v-if="!last" class="absolute w-11 h-11 flex items-center justify-center top-[48%] -right-5 bg-white drop-shadow-sm" @click="nextImage">
                <IconSwitcher icon="right_arrow" class="fill-neutral-950"></IconSwitcher>
            </button>
        </div>

        <div class="overflow-scroll w-full scroll-smooth">
            <div class="flex h-40 gap-3">
                <div v-for="(image, i) in images" :key="i" :id="i" class="aspect-square flex justify-center items-center p-4" 
                :class="[activeImage.url === image.url ? 'bg-neutral-950' : 'bg-white']" @click="setActiveImage(image, i)">
                    <img :src="`/photos/${image.url}`" :alt="trans(image.alt)" class="max-w-full max-h-full text-neutral-950">
                </div>
            </div>
        </div>
    </div>
</template>