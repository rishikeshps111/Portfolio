<template>
    <div v-if="isVisible" class="mil-preloader">
      <div class="mil-preloader-animation">
        <div class="mil-pos-abs mil-animation-1">
          <p class="mil-h3 mil-muted mil-thin">Pioneering</p>
          <p class="mil-h3 mil-muted">Creative</p>
          <p class="mil-h3 mil-muted mil-thin">Excellence</p>
        </div>
        <div class="mil-pos-abs mil-animation-2">
          <div class="mil-reveal-frame">
            <p class="mil-reveal-box"></p>
            <p class="mil-h3 mil-muted mil-thin">codeandcraft.com</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { gsap } from 'gsap';
  
  const isVisible = ref(true);
  
  onMounted(() => {
    const timeline = gsap.timeline();
  
    timeline.to('.mil-preloader-animation', {
      opacity: 1,
    });
  
    timeline.fromTo(
      '.mil-animation-1 .mil-h3',
      { y: '30px', opacity: 0 },
      { y: '0px', opacity: 1, stagger: 0.4 }
    );
  
    timeline.to('.mil-animation-1 .mil-h3', {
      opacity: 0,
      y: '-30',
    }, '+=.3');
  
    timeline.fromTo('.mil-reveal-box', 0.1, {
      opacity: 0,
    }, {
      opacity: 1,
      x: '-30',
    });
  
    timeline.to('.mil-reveal-box', 0.45, {
      width: '100%',
      x: 0,
    }, '+=.1');
  
    timeline.to('.mil-reveal-box', {
      right: '0',
    });
  
    timeline.to('.mil-reveal-box', 0.3, {
      width: '0%',
    });
  
    timeline.fromTo('.mil-animation-2 .mil-h3', {
      opacity: 0,
    }, {
      opacity: 1,
    }, '-=.5');
  
    timeline.to('.mil-animation-2 .mil-h3', 0.6, {
      opacity: 0,
      y: '-30',
    }, '+=.5');
  
    timeline.to('.mil-preloader', 0.8, {
      opacity: 0,
      ease: 'sine',
    }, '+=.2');
  
    timeline.fromTo('.mil-up', 0.8, {
      opacity: 0,
      y: 40,
      scale: 0.98,
      ease: 'sine',
    }, {
      y: 0,
      opacity: 1,
      scale: 1,
      onComplete: () => {
        isVisible.value = false; // Hide the preloader
      },
    }, '-=1');
  });
  </script>
  
  <style scoped>
  </style>
  