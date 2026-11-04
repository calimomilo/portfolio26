<script setup>
import { ref } from 'vue'
import { getLocalStorage } from '@/composables/useLocalStorage.js'

const mouseDecorationEnabled = ref(getLocalStorage('mouseDecoration', true))
const bigCursorSize = 10;
const smallCursorSize = 6;

if (mouseDecorationEnabled.value) {
  document.addEventListener('mousemove', (e) => mouseDecoration(e))
}

// const enableMouseDecoration = () => {
//   mouseDecorationEnabled.value = setLocalStorage('mouseDecoration', true)
//   document.addEventListener('mousemove', (e) => mouseDecoration(e))
// }

// const disableMouseDecoration = () => {
//   mouseDecorationEnabled.value = setLocalStorage('mouseDecoration', false)
//   document.removeEventListener('mousemove', (e) => mouseDecoration(e))
// }

const mouseDecoration = (e) => {
  const posX = e.clientX;
  const posY = e.clientY;

  const cursor = document.getElementById('cursor');
  const cursorStyle = getComputedStyle(e.target).cursor;
  let cursorSize;
  
//   console.log(getComputedStyle(e.target).cursor, getComputedStyle(e.target).cursor === 'auto')
    if(cursorStyle === 'auto') {
    e.target.style.cursor = 'none';
    // console.log('yes')
    }

    if(cursorStyle === 'pointer') {
        cursorSize = smallCursorSize;
    } else {
        cursorSize = bigCursorSize;
    }

    
    cursor.style.width = `${cursorSize}px`;
    cursor.style.height = `${cursorSize}px`;
    cursor.style.left = `${posX - cursorSize/2}px`;
    cursor.style.top = `${posY - cursorSize/2}px`;
}
</script>

<template>
    <div id="cursor" class="absolute rounded-full backdrop-invert z-99 pointer-events-none"></div>
</template>