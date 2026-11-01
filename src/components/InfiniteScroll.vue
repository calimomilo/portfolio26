<script setup>
import { onMounted } from 'vue';
import { ref } from 'vue';
import projects from '@/data/projects';
import { trans } from '@/composables/useTranslations';

const smoothScroll = ref(false);
const limitPosition = 0.4;

onMounted(() => {
    document.getElementById(projects[0].slug).scrollIntoView();
    smoothScroll.value = true;

    const container = document.getElementById('container');
    const containerTop = container.getBoundingClientRect().top;
    const containerBottom = container.getBoundingClientRect().bottom;

    const activeLimit = (containerBottom - containerTop) * limitPosition + containerTop;

    const setHeight = document.getElementById(`${projects[0].slug}-after`).getBoundingClientRect().top - document.getElementById(projects[0].slug).getBoundingClientRect().top;

    const checkActive = (container) => {
        for (let element of container.children) {
            if (element.getBoundingClientRect().top < activeLimit && element.getBoundingClientRect().bottom > activeLimit) {
                return element;
            }
        };
    }

    container.addEventListener('scrollend', () => {
        const active = checkActive(container);

        if (active.id.endsWith('before')) {
            container.scrollBy({top: setHeight, behavior: 'instant'});
        } else if (active.id.endsWith('after')) {
            container.scrollBy({top: 0 - setHeight, behavior: 'instant'});
        }
    })

})

</script>

<template>
    <div id="container" class="h-150 overflow-scroll scrollbar-none" :class="[smoothScroll? 'scroll-smooth' : 'scroll-none']">
        <div v-for="project in projects" :key="project.slug" :id="`${project.slug}-before`" class="w-50 h-50 bg-neutral-200 border">
            <p>{{ trans(project.title) }}</p>
        </div>
        <div v-for="project in projects" :key="project.slug" :id="`${project.slug}`" class="w-50 h-50 bg-neutral-200 border">
            <p>{{ trans(project.title) }}</p>
        </div>
        <div v-for="project in projects" :key="project.slug" :id="`${project.slug}-after`" class="w-50 h-50 bg-neutral-200 border">
            <p>{{ trans(project.title) }}</p>
        </div>
    </div>
</template>