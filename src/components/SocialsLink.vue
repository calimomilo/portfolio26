<script setup>
import texts from '@/data/texts';
import IconSwitcher from '@/svgs/IconSwitcher.vue';
import { trans, lang } from '@/composables/useTranslations'

const props = defineProps({
    vertical: Boolean
})
</script>

<template>
    <div class="flex justify-center items-center gap-3" :class="{'flex-col gap-20': props.vertical}">
        <div class="inline relative" :class="{'rotate-90': props.vertical, '-translate-y-3': props.vertical && lang === 'fr'}">
            <p class="inline font-ppmori font-semibold text-base text-neutral-950">{{ trans(texts.socials.cta) }}</p>
            <img src="/assets/socials_arrow.svg" alt="flèche traitillée" class="w-[65px] inline relative left-2 bottom-3">
        </div>
        <div class="inline-flex w-fit" :class="{'flex-col': props.vertical}">
            <a href="">
                <IconSwitcher icon="linkedin" class="w-11 h-11 fill-neutral-950 hover:cursor-pointer hover:fill-primary-900 active:fill-primary-700"></IconSwitcher>
            </a>
            <a href="">
                <IconSwitcher icon="email" class="w-11 h-11 fill-neutral-950 hover:cursor-pointer hover:fill-primary-900 active:fill-primary-700"></IconSwitcher>
            </a>
            <a href="">
                <IconSwitcher icon="github" class="w-11 h-11 fill-neutral-950 hover:cursor-pointer hover:fill-primary-900 active:fill-primary-700"></IconSwitcher>
            </a>
        </div>
    </div>
</template>