import { ref } from 'vue'

export const lang = ref('eng')

export const trans = (path) => path[lang.value] ?? path
