<template>
    <!-- scrollbar progress -->
    <div class="mil-progress-track">
        <div class="mil-progress"></div>
    </div>
    <!-- scrollbar progress end -->
</template>

<script setup>
import { onMounted } from 'vue';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  // GSAP progress bar animation
  gsap.to('.mil-progress', {
    height: '100%',
    ease: 'sine',
    scrollTrigger: {
      scrub: 0.3
    }
  });
});
</script>

<style lang="scss" scoped></style>