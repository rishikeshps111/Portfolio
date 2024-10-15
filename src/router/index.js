import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/1_Pages/1_HomeView/Layout.vue'
import Home2View from '../views/1_Pages/2_HomePage2/Layout.vue'
import Portfoli_1 from '../views/1_Pages/4_Protfolio_1/Layout.vue'
import Portfoli_3 from '../views/1_Pages/3_Portfolio_3/Layout.vue'
import Portfoli_2 from '../views/1_Pages/5_Portfolio_2/Layout.vue'
import Services from '../views/1_Pages/6_Services/Layout.vue'
import Service from '../views/1_Pages/7_Service/Layout.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/portfoli-1',
      name: 'portfolio1',
      component: Portfoli_1
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue')
    },
    {
      path: '/home-2',
      name: 'home2',
      component: Home2View
    },
    {
      path: '/portfolio-3',
      name: 'portfolio3',
      component: Portfoli_3
    },
    {
      path: '/portfolio-2',
      name: 'portfolio2',
      component: Portfoli_2
    },
    {
      path: '/services',
      name: 'services',
      component: Services
    },
    {
      path: '/single-service',
      name: 'service',
      component: Service
    },
  ]
})

export default router
