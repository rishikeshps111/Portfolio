<template>
    <section class="mil-soft-bg">
        <div class="container mil-p-120-120">
            <div class="row">
                <div class="col-lg-10">
                    <span class="mil-suptitle mil-suptitle-right mil-suptitle-dark mil-up">
                        Customer reviews are a valuable source of information for both
                        businesses and consumers.
                    </span>
                </div>
            </div>

            <h2 class="mil-center mil-up mil-mb-60">
                Customer <span class="mil-thin">Voices:</span> <br />
                Hear What <span class="mil-thin">They Say!</span>
            </h2>

            <div class="mil-revi-pagination mil-up mil-mb-60"></div>

            <div class="row mil-relative justify-content-center">
                <div class="col-lg-8">
                    <div class="mil-slider-nav mil-soft mil-reviews-nav mil-up">
                        <div class="mil-slider-arrow mil-prev mil-revi-prev mil-arrow-place"></div>
                        <div class="mil-slider-arrow mil-revi-next mil-arrow-place"></div>
                    </div>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" class="mil-quote-icon mil-up">
                        <path
                            d="M 13.5 10 A 8.5 8.5 0 0 0 13.5 27 A 8.5 8.5 0 0 0 18.291016 25.519531 C 17.422273 29.222843 15.877848 31.803343 14.357422 33.589844 C 12.068414 36.279429 9.9433594 37.107422 9.9433594 37.107422 A 1.50015 1.50015 0 1 0 11.056641 39.892578 C 11.056641 39.892578 13.931586 38.720571 16.642578 35.535156 C 19.35357 32.349741 22 27.072581 22 19 A 1.50015 1.50015 0 0 0 21.984375 18.78125 A 8.5 8.5 0 0 0 13.5 10 z M 34.5 10 A 8.5 8.5 0 0 0 34.5 27 A 8.5 8.5 0 0 0 39.291016 25.519531 C 38.422273 29.222843 36.877848 31.803343 35.357422 33.589844 C 33.068414 36.279429 30.943359 37.107422 30.943359 37.107422 A 1.50015 1.50015 0 1 0 32.056641 39.892578 C 32.056641 39.892578 34.931586 38.720571 37.642578 35.535156 C 40.35357 32.349741 43 27.072581 43 19 A 1.50015 1.50015 0 0 0 42.984375 18.78125 A 8.5 8.5 0 0 0 34.5 10 z"
                            fill="#000000" />
                    </svg>

                    <Swiper :modules="modules" :slides-per-view="1" :space-between="50" :navigation="{
                        nextEl: '.mil-revi-next',
                        prevEl: '.mil-revi-prev',
                    }" :pagination="{
                        clickable: true,
                        el: '.mil-revi-pagination',
                        renderBullet: customBullet,
                    }" :parallax="true" effect="fade" @swiper="onSwiper" @slideChange="onSlideChange"
                        class="mil-reviews-slider">
                        <SwiperSlide v-for="(review, index) in reviews" :key="index">
                            <div class="mil-review-frame mil-center" data-swiper-parallax="-200"
                                data-swiper-parallax-opacity="0">
                                <h5 class="mil-up mil-mb-10">{{ review.name }}</h5>
                                <p class="mil-mb-5 mil-upper mil-up mil-mb-30">
                                    {{ review.company }}
                                </p>
                                <p class="mil-text-xl mil-up">{{ review.text }}</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Parallax,
    EffectFade,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/parallax";
import "swiper/css/effect-fade";

const reviews = [
    {
        name: "Sarah Newman",
        company: "Envato Market",
        text: "This creative agency stands out with their exceptional talent and expertise. Their ability to think outside the box and bring unique ideas to life is truly impressive. With meticulous attention to detail, they consistently deliver visually stunning and impactful work.",
    },
    {
        name: "Emma Trueman",
        company: "Envato Market",
        text: "I had the pleasure of working with this creative agency, and I must say, they truly impressed me. They consistently think outside the box, resulting in impressive and impactful work. I highly recommend this agency for their consistent delivery of exceptional creative solutions.",
    },
    {
        name: "Sarah Newman",
        company: "Envato Market",
        text: "This creative agency stands out with their exceptional talent and expertise. Their ability to think outside the box and bring unique ideas to life is truly impressive. With meticulous attention to detail, they consistently deliver visually stunning and impactful work.",
    },
    {
        name: "Emma Trueman",
        company: "Envato Market",
        text: "I had the pleasure of working with this creative agency, and I must say, they truly impressed me. They consistently think outside the box, resulting in impressive and impactful work. I highly recommend this agency for their consistent delivery of exceptional creative solutions.",
    },
    {
        name: "Sarah Newman",
        company: "Envato Market",
        text: "This creative agency stands out with their exceptional talent and expertise. Their ability to think outside the box and bring unique ideas to life is truly impressive. With meticulous attention to detail, they consistently deliver visually stunning and impactful work.",
    },
    {
        name: "Emma Trueman",
        company: "Envato Market",
        text: "I had the pleasure of working with this creative agency, and I must say, they truly impressed me. They consistently think outside the box, resulting in impressive and impactful work. I highly recommend this agency for their consistent delivery of exceptional creative solutions.",
    }
    // Add more review data as needed
];

const onSwiper = (swiper) => {
    console.log(swiper);
};

const onSlideChange = () => {
    console.log("slide change");
};

const customBullet = (index, className) => {
    const menu = [
        '<div class="mil-custom-dot mil-slide-1"></div>',
        '<div class="mil-custom-dot mil-slide-2"></div>',
        '<div class="mil-custom-dot mil-slide-3"></div>',
        '<div class="mil-custom-dot mil-slide-4"></div>',
        '<div class="mil-custom-dot mil-slide-5"></div>',
        '<div class="mil-custom-dot mil-slide-6"></div>',
        '<div class="mil-custom-dot mil-slide-7"></div>',
    ];
    return `<span class="${className}">${menu[index]}</span>`;
};

const modules = [Navigation, Pagination, Scrollbar, A11y, Parallax, EffectFade];
</script>
<style lang="scss" scoped></style>