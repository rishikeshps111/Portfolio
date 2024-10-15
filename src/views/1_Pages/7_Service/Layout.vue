<template>
    <Scrollbar />
    <Curtain />
    <Frame />
    <MainContent>
        <Banner />
        <Service />
        <Price />
        <OtherService />
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
import HiddenElements from '@/components/HiddenElements.vue';
import Banner from './Components/Banner.vue';
import Service from './Components/Service.vue';
import Price from './Components/Price.vue';
import OtherService from './Components/OtherService.vue';
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