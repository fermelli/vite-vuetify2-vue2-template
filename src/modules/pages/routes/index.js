export default [
    {
        path: '/',
        name: 'Home',
        component: () => import('./../home/views/HomeView.vue'),
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('./../about/views/AboutView.vue'),
    },
]
