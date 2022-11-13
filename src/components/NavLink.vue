<script>
export default {
    name: 'NavLink',
    props: {
        route: {
            type: Object,
            required: true,
        },
        isChildren: {
            type: Boolean,
            default: false,
        },
    },
}
</script>

<template>
    <v-list-item
        :to="{ name: route.name }"
        exact
        exact-path
        :dense="isChildren"
    >
        <v-list-item-icon>
            <v-icon>{{ route.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
            <v-list-item-title>{{ route.text }}</v-list-item-title>
        </v-list-item-content>
    </v-list-item>
</template>
