import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('./pages/home/index.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('./pages/login/index.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('./pages/about/index.vue')
  },
  { path: '/video:id', name: 'video', component: () => import('./pages/video/index.vue') }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router
