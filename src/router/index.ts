import { createRouter, createWebHistory } from 'vue-router'
import Landing from '@/pages/Landing.vue'
import Main from '@/pages/Main.vue'

const routes = [
  { path: '/', component: Landing },
  { path: '/main', component: Main }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router