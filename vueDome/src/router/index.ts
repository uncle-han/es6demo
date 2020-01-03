import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: '/drapButtomTable',
        name: 'drapButtomTable',
        component: () => import('../views/drapTable/index.vue')
      },
      {
        path: '/LotteryTurntable',
        name: 'LotteryTurntable',
        component: () => import('../views/LotteryTurntable/index.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
