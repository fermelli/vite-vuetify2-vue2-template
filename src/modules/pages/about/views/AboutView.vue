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
        <h1>About View</h1>
        <button type="button" @click="decrement">decrement: {{ count }}</button>
    </div>
</template>
