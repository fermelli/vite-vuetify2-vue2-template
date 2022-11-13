import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import pageRoutes from '@/modules/pages/routes'
import adminRoutes from '@/modules/admin/routes'

const routes = [...pageRoutes, ...adminRoutes]

const router = new VueRouter({
    mode: 'history',
    base: '/',
    routes,
})

export default router
