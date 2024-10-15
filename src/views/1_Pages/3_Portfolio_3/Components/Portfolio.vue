<template>
  <!-- portfolio -->
  <section class="mil-portfolio-slider-frame">
    <div class="mil-animation-frame">
      <div
        class="mil-animation mil-position-4 mil-dark mil-scale"
        data-value-1="1"
        data-value-2="2"
        style="top: -60px; right: -4px"
      ></div>
    </div>
    <div class="container">
      <div class="row align-items-end">
        <div class="col-lg-9">
          <Swiper
            class="mil-portfolio-slider mil-up"
            :modules="[
              Navigation,
              Pagination,
              Parallax,
              Mousewheel,
              EffectFade,
            ]"
            :slides-per-view="1"
            :space-between="0"
            :speed="800"
            parallax
            :mousewheel="true"
            :navigation="{
              nextEl: '.mil-portfolio-next',
              prevEl: '.mil-portfolio-prev',
            }"
            :pagination="{
              el: '.swiper-portfolio-pagination',
              type: 'fraction',
            }"
          >
            <SwiperSlide v-for="(slide, index) in slides" :key="index">
              <div
                class="mil-portfolio-item mil-slider-item"
                data-swiper-parallax="-30"
              >
                <div class="mil-cover-frame mil-drag">
                  <div class="mil-cover" data-swiper-parallax-scale="1.3">
                    <img :src="slide.img" alt="cover" />
                  </div>
                </div>
                <div
                  class="mil-descr"
                  data-swiper-parallax-x="104%"
                  data-swiper-parallax-opacity="0"
                >
                  <div
                    class="mil-descr-text"
                    data-swiper-parallax-y="100%"
                    data-swiper-parallax-opacity="0"
                  >
                    <div class="mil-labels mil-mb-15">
                      <div class="mil-label mil-upper mil-accent">
                        TECHNOLOGY
                      </div>
                      <div class="mil-label mil-upper">{{ slide.date }}</div>
                    </div>
                    <h5>{{ slide.title }}</h5>
                  </div>
                  <div
                    data-swiper-parallax-y="120"
                    data-swiper-parallax-opacity="0"
                  >
                    <a
                      :href="slide.projectLink"
                      class="mil-button mil-arrow-place"
                    >
                      <span>View Project</span>
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div class="col-lg-3 mil-relative">
          <div class="mil-portfolio-nav">
            <div class="mil-portfolio-btns-frame">
              <div class="swiper-portfolio-pagination"></div>
              <div class="mil-slider-nav">
                <div
                  class="mil-slider-arrow mil-prev mil-portfolio-prev mil-arrow-place"
                ></div>
                <div
                  class="mil-slider-arrow mil-portfolio-next mil-arrow-place"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- portfolio end -->
</template>

<script setup>
import {
  Navigation,
  Pagination,
  Parallax,
  Mousewheel,
  EffectFade,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";

// Sample data for slides
const slides = [
  {
    img: "/assets/img/works/1.jpg",
    date: "May 24, 2023",
    title: "Interior Design Studio",
    projectLink: "project-1.html",
  },
  {
    img: "/assets/img/works/2.jpg",
    date: "May 24, 2023",
    title: "Home Security Camera",
    projectLink: "project-2.html",
  },
  {
    img: "/assets/img/works/3.jpg",
    date: "May 24, 2023",
    title: "Kemia Honest Skincare",
    projectLink: "project-3.html",
  },
  {
    img: "/assets/img/works/4.jpg",
    date: "May 24, 2023",
    title: "Cascade of Lava",
    projectLink: "project-3.html",
  },
  {
    img: "/assets/img/works/5.jpg",
    date: "May 24, 2023",
    title: "Air Pro by Molekul",
    projectLink: "project-3.html",
  },
  {
    img: "/assets/img/works/6.jpg",
    date: "May 24, 2023",
    title: "Tony's Chocolonely",
    projectLink: "project-3.html",
  }
];
</script>

<style lang="scss" scoped></style>