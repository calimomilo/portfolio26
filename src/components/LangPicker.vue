<script setup>
import { lang, setLang } from '@/composables/useTranslations';
import ButtonText from './ButtonText.vue';

</script>

<template>
    <div class="flex flex-row w-fit items-center">
        <div class="group min-w-11 min-h-11 flex items-center justify-center hover:cursor-pointer" @click="setLang('fr')">
            <ButtonText :selected="lang === 'fr'">FR</ButtonText>
        </div>
        <p class="font-semibold pb-1">|</p>
        <div class="group min-w-11 min-h-11 flex items-center justify-center hover:cursor-pointer" @click="setLang('eng')">
            <ButtonText :selected="lang === 'eng'">EN</ButtonText>
        </div>
    </div>
</template>