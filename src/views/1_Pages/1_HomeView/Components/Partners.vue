<template>
    <!-- partners -->
    <div class="mil-soft-bg">
        <div class="container mil-p-0-120">
            <Swiper class="swiper-container mil-infinite-show mil-up" :modules="modules" :slides-per-view="2" :space-between="30" :speed="5000"
                :autoplay="{ delay: 0, disableOnInteraction: false }" :loop="true" :freeMode="true" :breakpoints="{
                    992: {
                        slidesPerView: 4,
                    }
                }" >
                <SwiperSlide v-for="(partner, index) in partners" :key="index">
                    <a href="#." class="mil-partner-frame" :style="{ width: partner.width + 'px' }">
                        <img :src="partner.image" :alt="partner.alt">
                    </a>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
    <!-- partners end -->
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import {
    Autoplay, FreeMode,
} from "swiper/modules";
//   import 'swiper/swiper-bundle.css';

// Define the partners array
const partners = [
    { image: '/assets/img/partners/1.svg', alt: 'logo', width: 60 },
    { image: '/assets/img/partners/2.svg', alt: 'logo', width: 100 },
    { image: '/assets/img/partners/1.svg', alt: 'logo', width: 60 },
    { image: '/assets/img/partners/2.svg', alt: 'logo', width: 100 },
    { image: '/assets/img/partners/1.svg', alt: 'logo', width: 60 },

];
const modules = [Autoplay, FreeMode];
</script>

<style lang="scss" scoped></style>