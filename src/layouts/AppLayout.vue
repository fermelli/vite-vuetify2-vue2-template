<script>
import TheAppBar from '@/components/TheAppBar.vue'
import TheNavigationDrawer from '@/components/TheNavigationDrawer.vue'

export default {
    name: 'AppLayout',
    components: {
        TheAppBar,
        TheNavigationDrawer,
    },
}
</script>

<template>
    <v-app>
        <the-app-bar title="Mi App" />
        <the-navigation-drawer />
        <v-main>
            <slot></slot>
        </v-main>
    </v-app>
</template>
