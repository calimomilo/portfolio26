import { ref } from 'vue'
import { getLocalStorage, setLocalStorage } from './useLocalStorage'

export const lang = ref(getLocalStorage('lang', 'fr'))

export const setLang = (val) => {
  lang.value = setLocalStorage('lang', val)
}

export const trans = (path) => path[lang.value] ?? path
