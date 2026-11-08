<script setup>
const props = defineProps({
    icon: String,
    class: {
        type: String,
        default: ''
    }
})
</script>

<template>
    <svg v-if="props.icon === 'right_arrow'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" :class="props.class">
        <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"/>
    </svg>
    
    <svg v-if="props.icon === 'left_arrow'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" :class="props.class">
        <path d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"/>
    </svg>

    <svg v-if="props.icon === 'up_arrow'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" :class="props.class">
        <path d="M4 12L5.41 13.41L11 7.83V20H13V7.83L18.58 13.42L20 12L12 4L4 12Z"/>
    </svg>

    <svg v-if="props.icon === 'down_arrow'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" :class="props.class">
        <path d="M20 12L18.59 10.59L13 16.17V4H11V16.17L5.42 10.58L4 12L12 20L20 12Z"/>
    </svg>

    <svg v-if="props.icon === 'home'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" :class="props.class">
        <path d="M12 6.19L17 10.69V18.5H15V12.5H9V18.5H7V10.69L12 6.19ZM12 3.5L2 12.5H5V20.5H11V14.5H13V20.5H19V12.5H22L12 3.5Z"/>
    </svg>

    <svg v-if="props.icon === 'close'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" :class="props.class">
        <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"/>
    </svg>

    <svg v-if="props.icon === 'menu'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" :class="props.class">
        <path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z"/>
    </svg>

    <svg v-if="props.icon === 'linkedin'" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none" :class="props.class">
        <path d="M13.3288 8.37451C12.0149 8.37451 10.7548 8.89646 9.82578 9.82553C8.8967 10.7546 8.37476 12.0147 8.37476 13.3286V30.6679C8.37476 31.9818 8.8967 33.2419 9.82578 34.171C10.7548 35.1001 12.0149 35.622 13.3288 35.622H30.6682C31.9821 35.622 33.2422 35.1001 34.1712 34.171C35.1003 33.2419 35.6223 31.9818 35.6223 30.6679V13.3286C35.6223 12.0147 35.1003 10.7546 34.1712 9.82553C33.2422 8.89646 31.9821 8.37451 30.6682 8.37451H13.3288ZM14.8213 16.9327C15.3813 16.9327 15.9184 16.7102 16.3145 16.3142C16.7105 15.9182 16.9329 15.3811 16.9329 14.821C16.9329 14.261 16.7105 13.7239 16.3145 13.3278C15.9184 12.9318 15.3813 12.7093 14.8213 12.7093C14.2612 12.7093 13.7241 12.9318 13.3281 13.3278C12.9321 13.7239 12.7096 14.261 12.7096 14.821C12.7096 15.3811 12.9321 15.9182 13.3281 16.3142C13.7241 16.7102 14.2612 16.9327 14.8213 16.9327ZM16.9317 31.2872V18.6208H12.7096V31.2872H16.9329H16.9317ZM22.4208 18.6208H18.6211V31.2872H22.4208V23.6455C22.9101 22.8504 23.7547 21.9983 24.9536 21.9983C26.643 21.9983 27.0653 23.6876 27.0653 24.5323V31.2872H31.2874V24.5323C31.2874 22.2683 30.3003 18.6208 26.643 18.6208C24.317 18.6208 23.0265 19.4692 22.4196 20.2643V18.6208H22.4208Z" fill-rule="evenodd" clip-rule="evenodd"/>
    </svg>

    <svg v-if="props.icon === 'email'" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none" :class="props.class">
        <path d="M32.9999 11H10.9999C9.48738 11 8.26363 12.2375 8.26363 13.75L8.24988 30.25C8.24988 31.7625 9.48738 33 10.9999 33H32.9999C34.5124 33 35.7499 31.7625 35.7499 30.25V13.75C35.7499 12.2375 34.5124 11 32.9999 11ZM32.9999 16.5L21.9999 23.375L10.9999 16.5V13.75L21.9999 20.625L32.9999 13.75V16.5Z"/>
    </svg>
    
    <svg v-if="props.icon === 'github'" xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none" :class="props.class">
        <path d="M21.9999 8.16211C29.5937 8.16211 35.7499 14.3182 35.7499 21.9121C35.7499 28.1981 31.5306 33.495 25.7704 35.1344V30.9933C25.7704 29.993 25.5511 29.0044 25.1272 28.0982C28.1361 27.0227 31.0098 24.7368 31.0098 21.9994C31.0098 20.2583 30.3676 18.2158 28.9299 17.0056V13.6621L24.8789 15.021C23.9729 14.8005 23.005 14.6813 21.9999 14.6813C20.9948 14.6813 20.0269 14.8005 19.121 15.021L15.0698 13.6621V17.0056C13.6322 18.2157 12.9913 20.2584 12.9912 21.9994C12.9912 24.7366 15.8638 27.0227 18.8726 28.0982C18.5101 28.873 18.297 29.7085 18.2428 30.5596C18.0523 30.5985 17.8964 30.6167 17.7688 30.6146C17.4834 30.6101 17.2655 30.5321 17.0544 30.3998C15.5209 29.4373 14.9314 27.6725 12.8529 27.4377C12.5906 27.4083 12.3752 27.6262 12.3749 27.8902C12.3749 28.1545 12.5938 28.3609 12.8489 28.4299C14.8319 28.9661 14.8118 32.8665 17.7272 32.9121C17.8918 32.9147 18.0586 32.9026 18.228 32.8865V35.1344C12.4685 33.4946 8.24988 28.1976 8.24988 21.9121C8.24988 14.3182 14.406 8.16211 21.9999 8.16211Z"/>
    </svg>

    <svg v-if="props.icon === 'scroll_view'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" :class="props.class">
        <path d="M21.5 18H2.5V20H21.5V18ZM19.5 10V14H4.5V10H19.5ZM20.5 8H3.5C2.95 8 2.5 8.45 2.5 9V15C2.5 15.55 2.95 16 3.5 16H20.5C21.05 16 21.5 15.55 21.5 15V9C21.5 8.45 21.05 8 20.5 8ZM21.5 4H2.5V6H21.5V4Z"/>
    </svg>

    <svg v-if="props.icon === 'grid_view'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" :class="props.class">
        <path d="M3 3V11H11V3H3ZM9 9H5V5H9V9ZM3 13V21H11V13H3ZM9 19H5V15H9V19ZM13 3V11H21V3H13ZM19 9H15V5H19V9ZM13 13V21H21V13H13ZM19 19H15V15H19V19Z"/>
    </svg>
    
    <svg v-if="props.icon === 'list_view'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" :class="props.class">
        <path d="M3 13H5V11H3V13ZM3 17H5V15H3V17ZM3 9H5V7H3V9ZM7 13H21V11H7V13ZM7 17H21V15H7V17ZM7 7V9H21V7H7ZM3 13H5V11H3V13ZM3 17H5V15H3V17ZM3 9H5V7H3V9ZM7 13H21V11H7V13ZM7 17H21V15H7V17ZM7 7V9H21V7H7Z"/>
    </svg>
</template>