<script setup>
import { ref } from 'vue'
import { getLocalStorage } from '@/composables/useLocalStorage.js'

const mouseDecorationEnabled = ref(getLocalStorage('mouseDecoration', true))

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
  const posX = e.clientX + window.scrollX;
  const posY = e.clientY + window.scrollY;

  const cursor = document.getElementById('cursor');
  const cursorStyle = getComputedStyle(e.target).cursor;
  const cursorSize = 10;
  
//   console.log(getComputedStyle(e.target).cursor, getComputedStyle(e.target).cursor === 'auto')
    if(cursorStyle === 'auto') {
    e.target.style.cursor = 'none';
    // console.log('yes')
    }

    if(cursorStyle === 'pointer') {
        cursor.style.scale = '60%';
    } else {
        cursor.style.scale = '100%';
    }

    
    cursor.style.width = `${cursorSize}px`;
    cursor.style.height = `${cursorSize}px`;
    cursor.style.left = `${posX - cursorSize/2}px`;
    cursor.style.top = `${posY - cursorSize/2}px`;
}
</script>

<template>
    <div id="cursor" class="max-md:hidden absolute rounded-full backdrop-invert z-99 pointer-events-none transition ease-in-out duration-100 motion-reduce:transition-none"></div>
</template>