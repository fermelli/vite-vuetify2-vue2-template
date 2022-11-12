import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import pageRoutes from '@/modules/pages/routes'

const routes = [...pageRoutes]

const router = new VueRouter({
    mode: 'history',
    base: '/',
    routes,
})

export default router