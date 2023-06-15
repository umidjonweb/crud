import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes: [
      {
         path: '/',
         name: 'home',
         component: () => import('../views/Home.vue'),
         children: [
            {
               path: '',
               name: 'home',
               component: () => import('../views/Buyer.vue')
            },
            {
               path: '/order',
               name: 'order',
               component: () => import('../views/Order.vue')
            }
         ]
      },
   ]
})

export default router
