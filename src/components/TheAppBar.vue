<script>
export default {
    name: 'TheAppBar',
    props: {
        title: {
            type: String,
            required: true,
        },
    },
    methods: {
        toogleIsOpen() {
            this.$store.dispatch('theNavigationDrawer/setIsOpen')
        },
    },
}
</script>

<template>
    <v-app-bar app color="primary" dark clipped-left>
        <v-app-bar-nav-icon @click.stop="toogleIsOpen" />

        <v-toolbar-title>
            {{ title }}
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-menu offset-y>
            <template #activator="{ on, attrs }">
                <v-avatar color="primary" size="45" v-bind="attrs" v-on="on">
                    <v-icon dark> mdi-account-circle </v-icon>
                </v-avatar>
            </template>

            <!-- TODO: user -->
            <v-list v-if="true">
                <v-list-item dense>
                    <v-list-item-title>
                        luisfernandosalgadomiguez@gmail
                    </v-list-item-title>
                </v-list-item>

                <v-divider></v-divider>

                <v-list-item link href="#">
                    <v-list-item-title> Perfil de Usuario </v-list-item-title>
                </v-list-item>

                <v-list-item link>
                    <v-list-item-title> Cerrar Sesión </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </v-app-bar>
</template>
