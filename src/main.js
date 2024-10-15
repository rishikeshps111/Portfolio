// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { gsap } from 'gsap'
import { ScrollTrigger, ScrollToPlugin } from 'gsap/all'

// Register GSAP plugins globally
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const app = createApp(App)
app.use(router)
app.mount('#app')
