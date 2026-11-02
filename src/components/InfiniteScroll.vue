<script setup>
import { computed, onMounted } from 'vue';
import { ref } from 'vue';

const props = defineProps({
    boundary: Number,
})

const emit = defineEmits(['setActive']);

const smoothScroll = ref(false);

onMounted(() => {
    const container = document.getElementById('container');
    const containerTop = computed(() => container.getBoundingClientRect().top);
    const containerBottom = computed(() => container.getBoundingClientRect().bottom);

    const activeLimit = (containerBottom.value - containerTop.value) * props.boundary + containerTop.value;
    
    const first = container.firstElementChild;

    const duplicateList = (container) => {
        const before = [];
        const after = [];

        for (let element of container.children) {
            const beforeCopy = element.cloneNode(true);
            beforeCopy.id = `${element.id}-before`;
            before.push(beforeCopy);

            const afterCopy = element.cloneNode(true);
            afterCopy.id = `${element.id}-after`;
            after.push(afterCopy);
        };

        before.forEach(el => {
            container.insertBefore(el, first);
        })

        after.forEach(el => {
            container.appendChild(el);
        })
    }

    const checkActive = (container) => {
        for (let element of container.children) {
            if (element.getBoundingClientRect().top < activeLimit && element.getBoundingClientRect().bottom > activeLimit) {
                return element;
            }
        };
    }

    duplicateList(container);

    first.scrollIntoView();
    smoothScroll.value = true;

    const setHeight = computed(() => {
        const height = document.getElementById(`${first.id}-after`).getBoundingClientRect().top - first.getBoundingClientRect().top;
        console.log(height);
        return height;
    });

    container.addEventListener('scroll', () => {
        const active = checkActive(container);

        emit('setActive', active.id);

        if (active.id.endsWith('before')) {
            container.scrollBy({top: setHeight.value, behavior: 'instant'});
        } else if (active.id.endsWith('after')) {
            container.scrollBy({top: 0 - setHeight.value, behavior: 'instant'});
        }
    })

})

</script>

<template>
    <div id="container" class="overflow-scroll scrollbar-none" :class="[smoothScroll? 'scroll-smooth' : 'scroll-none']">
        <slot></slot>
    </div>
</template>