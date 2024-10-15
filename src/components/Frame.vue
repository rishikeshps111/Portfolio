<template>
    <div class="mil-frame">
        <div class="mil-frame-top">
            <a href="home-1.html" class="mil-logo">CAC</a>
            <div :class="['mil-menu-btn', { 'mil-active': isActive }]" @click="toggleMenu">
                <span></span>
            </div>
        </div>
        <div class="mil-frame-bottom">
            <div class="mil-current-page"></div>
            <div class="mil-back-to-top">
                <a class="mil-link mil-dark mil-arrow-place" ref="btt" @click="AnchorScroll('#top')">
                    <span>Back to top</span>
                </a>
            </div>
        </div>
    </div>
     <!-- Include menu.vue -->
    <Menu :isActive="isActive" @toggle-menu="toggleMenu" />
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { gsap } from 'gsap';
import Menu from './Menu.vue';
import { AnchorScroll } from '@/mixins/scrollMixin';

const btt = ref(null);
const isActive = ref(false);

onMounted(() => {
    gsap.set(btt.value, {
        x: -30,
        opacity: 0,
    });

    gsap.to(btt.value, {
        x: 0,
        opacity: 1,
        ease: 'sine',
        scrollTrigger: {
            trigger: "body",
            start: "top -40%",
            end: "top -40%",
            toggleActions: "play none reverse none",
        },
    });
});
const toggleMenu = () => {
    isActive.value = !isActive.value; // Toggle the active state
  };

</script>

<style scoped>
/* Add any scoped styles here if needed */
</style>