<template>
    <Scrollbar />
    <Curtain />
    <Frame />
    <MainContent>
        <Banner />
        <Portfolio />
        <CallAction />
        <Footer />
        <HiddenElements />
    </MainContent>

</template>

<script setup>
import Curtain from '@/components/Curtain.vue';
import Scrollbar from '@/components/Scrollbar.vue';
import Frame from '@/components/Frame.vue';
import Footer from '@/components/Footer.vue';
import MainContent from '@/components/MainContent.vue';
import Banner from './Components/Banner.vue';
import Portfolio from './Components/Portfolio.vue';
import CallAction from './Components/CallAction.vue';
import HiddenElements from '@/components/HiddenElements.vue';
import { onMounted } from 'vue';
import { cloneElements } from '@/mixins/cloneMixin';
import { ScrollAnimations, PageChangeScroll } from '@/mixins/scrollMixin';
import { Cusor } from '@/mixins/cursorMixin';


onMounted(() => {
    PageChangeScroll();
    cloneElements();
    ScrollAnimations();
    Cusor();
});


</script>

<style lang="scss" scoped></style>