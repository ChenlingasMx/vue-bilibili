import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/home/index.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login/login.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/pages/about/about.vue')
  },
  { path: '/video:id', name: 'video', component: () => import('@/pages/video/video.vue') }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router