<template>
    <Scrollbar />
    <Curtain />
    <Frame />
    <MainContent>
        <Banner />
        <About />
        <Service />
        <Team />
        <Reviews />
        <Partners />
        <Blog />
        <Footer />
        <HiddenElements />
    </MainContent>
</template>

<script setup>
import MainContent from '@/components/MainContent.vue';
import Curtain from '@/components/Curtain.vue';
import Scrollbar from '@/components/Scrollbar.vue';
import Frame from '@/components/Frame.vue';
import Footer from '@/components/Footer.vue';
import Reviews from './Components/Reviews.vue';
import Partners from './Components/Partners.vue';
import Banner from './Components/Banner.vue';
import About from './Components/About.vue';
import Service from './Components/Service.vue';
import Team from './Components/Team.vue';
import Blog from './Components/Blog.vue';
import HiddenElements from '@/components/HiddenElements.vue';
import { onMounted } from 'vue';
import { cloneElements } from '@/mixins/cloneMixin';
import { PageChangeScroll, ScrollAnimations } from '@/mixins/scrollMixin';
import { Cusor } from '@/mixins/cursorMixin';


onMounted(() => {
    PageChangeScroll();
    cloneElements();
    ScrollAnimations();
    Cusor();
});
</script>
