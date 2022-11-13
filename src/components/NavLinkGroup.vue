<script>
import NavLink from './NavLink.vue'

export default {
    name: 'NavLinkGroup',
    components: {
        NavLink,
    },
    props: {
        route: {
            type: Object,
            required: true,
        },
    },
}
</script>

<template>
    <v-list-group :value="true" :prepend-icon="route.icon" no-action>
        <template #activator>
            <v-list-item-title>{{ route.text }}</v-list-item-title>
        </template>
        <nav-link
            v-for="children in route.children"
            :key="children.text"
            :route="children"
            is-children
        />
    </v-list-group>
</template>
