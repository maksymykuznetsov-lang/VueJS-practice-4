import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CartView from '@/views/CartView.vue'

const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: 'active', // підсвічуватиме активне посилання в меню
  routes: [
    { path: '/', component: HomeView },
    { path: '/cart', component: CartView },
  ],
})

export default router
