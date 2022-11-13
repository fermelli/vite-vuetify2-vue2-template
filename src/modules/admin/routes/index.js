export default [
    {
        path: '/admin/dashboard',
        name: 'Dashboard',
        component: () => import('./../dashboard/views/DashboardView.vue'),
        meta: {
            layout: 'app',
        },
    },
    {
        path: '/admin/settings/contributors',
        name: 'Contributors',
        component: () =>
            import('./../settings/contributors/views/ContributorsView.vue'),
        meta: {
            layout: 'app',
        },
    },
]
