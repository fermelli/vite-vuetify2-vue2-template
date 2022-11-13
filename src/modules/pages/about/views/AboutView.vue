<script>
import { mapGetters } from 'vuex'

export default {
    name: 'AboutView',
    computed: {
        ...mapGetters('counter', ['count']),
    },
    methods: {
        decrement() {
            this.$store.dispatch('counter/decrement')
        },
    },
}
</script>

<template>
    <div>
        <p>
            <router-link :to="{ name: 'Home' }"> Home </router-link>
        </p>

        <h1>About View</h1>

        <v-btn color="primary" class="my-4" @click="decrement">
            decrement: {{ count }}
        </v-btn>
    </div>
</template>
