<script>
import { mapGetters } from 'vuex'

export default {
    name: 'HelloWorld',
    props: {
        msg: {
            type: String,
            required: true,
        },
    },
    computed: {
        ...mapGetters('counter', ['count']),
    },
    methods: {
        increment() {
            this.$store.dispatch('counter/increment')
        },
    },
}
</script>

<template>
    <div>
        <h1>{{ msg }}</h1>

        <div class="card">
            <v-btn color="primary" class="my-4" @click="increment">
                increment: {{ count }}
            </v-btn>
            <p>
                Edit
                <code>components/HelloWorld.vue</code> to test HMR
            </p>
        </div>

        <p>
            Check out
            <a
                href="https://vuejs.org/guide/quick-start.html#local"
                target="_blank"
                >create-vue</a
            >, the official Vue + Vite starter
        </p>
        <p>
            Install
            <a href="https://github.com/vuejs/vetur" target="_blank">Vetur</a>
            in your IDE for a better DX
        </p>
        <p class="read-the-docs">
            Click on the Vite and Vue logos to learn more
        </p>
    </div>
</template>

<style scoped>
.read-the-docs {
    color: #888;
}
</style>
