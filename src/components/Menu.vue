<template>
    <div :class="['mil-menu-frame', { 'mil-active': isActive }]">
        <div class="mil-frame-top">
            <a href="home-1.html" class="mil-logo">CAC</a>
            <div :class="['mil-menu-btn', { 'mil-active': isActive }]" @click="toggleMenu">
                <span></span>
            </div>
        </div>
        <div class="container">
            <div class="mil-menu-content">
                <div class="row">
                    <div class="col-xl-5">
                        <nav class="mil-main-menu" id="swupMenu">
                            <ul>
                                <li v-for="(item, index) in menuItems" :key="index" class="mil-has-children"
                                    :class="{ 'mil-active': isActiveItem(item) }">
                                    <a href="#." @click.prevent="toggleSubMenu(index)">{{ item.title }}</a>
                                    <ul v-if="item.children.length > 0" :class="{ 'mil-active': item.active }">
                                        <li v-for="(child, childIndex) in item.children" :key="childIndex">
                                            <router-link v-if="child.routerLink" :to="child.routerLink">{{ child.title
                                                }}</router-link>
                                            <a v-else :href="child.href">{{ child.title }}</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div class="col-xl-7">
                        <div class="mil-menu-right-frame">
                            <div class="mil-animation-in">
                                <div class="mil-animation-frame">
                                    <div class="mil-animation mil-position-1 mil-scale" data-value-1="2"
                                        data-value-2="2"></div>
                                </div>
                            </div>
                            <div class="mil-menu-right">
                                <div class="row">
                                    <div class="col-lg-8 mil-mb-60">
                                        <h6 class="mil-muted mil-mb-30">Projects</h6>
                                        <ul class="mil-menu-list">
                                            <li v-for="(project, index) in projects" :key="index">
                                                <a :href="project.href" class="mil-light-soft">{{ project.title }}</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col-lg-4 mil-mb-60">
                                        <h6 class="mil-muted mil-mb-30">Useful links</h6>
                                        <ul class="mil-menu-list">
                                            <li v-for="(link, index) in usefulLinks" :key="index">
                                                <a :href="link.href" class="mil-light-soft">{{ link.title }}</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="mil-divider mil-mb-60"></div>
                                <div class="row justify-content-between">
                                    <div class="col-lg-4 mil-mb-60">
                                        <h6 class="mil-muted mil-mb-30">Canada</h6>
                                        <p class="mil-light-soft mil-up">71 South Los Carneros Road, California <span
                                                class="mil-no-wrap">+51 174 705 812</span></p>
                                    </div>
                                    <div class="col-lg-4 mil-mb-60">
                                        <h6 class="mil-muted mil-mb-30">Germany</h6>
                                        <p class="mil-light-soft">Leehove 40, 2678 MC De Lier, Netherlands <span
                                                class="mil-no-wrap">+31 174 705 811</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { defineProps, defineEmits } from 'vue';


// Define props and emit event
const props = defineProps({
    isActive: Boolean, // Accept isActive as a prop
}); 
const emit = defineEmits(['toggle-menu']);

const route = useRoute(); // Get the current route

const menuItems = ref([
    {
        title: 'Homepage',
        active: false,
        children: [
            { title: 'Landing page', routerLink: '/' },
            { title: 'Personal', routerLink: '/home-2' },
        ]
    },
    {
        title: 'Portfolio',
        active: false,
        children: [
            { title: 'Grid type 1', routerLink: '/portfoli-1'},
            { title: 'Grid type 2', routerLink: '/portfolio-2' },
            { title: 'Slider', routerLink: '/portfolio-3' }
        ]
    },
    {
        title: 'Services',
        active: false,
        children: [
            { title: 'Services List', routerLink: '/services' },
            { title: 'Single service', routerLink: 'single-service' }
        ]
    },
    {
        title: 'Newsletter',
        active: false,
        children: [
            { title: 'Blog List', href: 'blog.html' },
            { title: 'Publication', href: 'publication.html' }
        ]
    },
    {
        title: 'Other pages',
        active: false,
        children: [
            { title: 'Team', href: 'team.html' },
            { title: 'Contact', href: 'contact.html' },
            { title: '404', href: '404.html' }
        ]
    }
]);

const projects = ref([
    { title: "Interior design studio", href: "project-1.html" },
    { title: "Home Security Camera", href: "project-2.html" },
    { title: "Kemia Honest Skincare", href: "project-3.html" },
    { title: "Cascade of Lava", href: "project-4.html" },
    { title: "Air Pro by Molekule", href: "project-5.html" },
    { title: "Tony's Chocolonely", href: "project-6.html" }
]);

const usefulLinks = ref([
    { title: 'Privacy Policy', href: '#' },
    { title: 'Terms and conditions', href: '#' },
    { title: 'Cookie Policy', href: '#' },
    { title: 'Careers', href: '#' }
]);

const toggleMenu = () => {
    emit('toggle-menu'); // Emit event to parent when menu is toggled
};

const toggleSubMenu = (index) => {
    menuItems.value.forEach((item, i) => {
        item.active = i === index ? !item.active : false; // Toggle current and close others
    });
};

// Function to determine if the current menu item is active based on the URL
const isActiveItem = (item) => {
    const currentPath = route.path; // Get the current path
    return item.children.some(child => {
        // Check if the current path matches the routerLink or href of any child
        if (child.routerLink) {
            return child.routerLink === currentPath;
        }
        return child.href === currentPath;
    });
};
</script>

<style scoped>
/* Add your styles here */
</style>