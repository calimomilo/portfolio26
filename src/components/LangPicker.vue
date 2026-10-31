<script setup>
import { lang } from '@/composables/useTranslations';
import ButtonText from './ButtonText.vue';

const switchLang = (newLang) => {
    lang.value = newLang;
}
</script>

<template>
    <div class="flex flex-row w-fit items-center">
        <div class="group min-w-11 min-h-11 flex items-center justify-center hover:cursor-pointer" @click="switchLang('fr')">
            <ButtonText :selected="lang === 'fr'">FR</ButtonText>
        </div>
        <p class="font-semibold pb-1">|</p>
        <div class="group min-w-11 min-h-11 flex items-center justify-center hover:cursor-pointer" @click="switchLang('eng')">
            <ButtonText :selected="lang === 'eng'">EN</ButtonText>
        </div>
    </div>
</template>