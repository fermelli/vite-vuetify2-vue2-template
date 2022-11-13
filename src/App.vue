<script>
import AppLayout from '@/layouts/AppLayout.vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

export default {
    name: 'App',
    components: {
        AppLayout,
        DefaultLayout,
    },
    computed: {
        layout() {
            return this.$route.meta.layout == 'app'
                ? 'app-layout'
                : 'default-layout'
        },
    },
}
</script>

<template>
    <component :is="layout">
        <transition name="fade" mode="out-in">
            <router-view class="pa-4"></router-view>
        </transition>
    </component>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease-out;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
