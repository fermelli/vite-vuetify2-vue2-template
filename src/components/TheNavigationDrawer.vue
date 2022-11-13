<script>
import { mapState } from 'vuex'
import routes from '@/modules/utils/routes-navigation'
import NavLink from './NavLink.vue'
import NavLinkGroup from './NavLinkGroup.vue'

export default {
    name: 'TheNavigationDrawer',
    components: { NavLink, NavLinkGroup },
    data() {
        return {
            routes: routes,
        }
    },
    computed: {
        ...mapState(['theNavigationDrawer']),
    },
}
</script>

<template>
    <v-navigation-drawer v-model="theNavigationDrawer.isOpen" app clipped>
        <v-list>
            <v-subheader>Menu</v-subheader>
            <v-list-item-group color="primary">
                <component
                    :is="route.children ? 'nav-link-group' : 'nav-link'"
                    v-for="route in routes"
                    :key="route.text"
                    :route="route"
                />
            </v-list-item-group>
        </v-list>
    </v-navigation-drawer>
</template>
