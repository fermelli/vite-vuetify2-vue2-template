<script>
import HelloWorld from './../components/HelloWorld.vue'

export default {
    name: 'HomeView',
    components: { HelloWorld },
}
</script>

<template>
    <div class="main">
        <p>
            <router-link :to="{ name: 'Dashboard' }"> Dashboard </router-link>
            |
            <router-link :to="{ name: 'About' }"> About </router-link>
        </p>

        <div>
            <a href="https://vitejs.dev" target="_blank">
                <img src="/vite.svg" class="logo" alt="Vite logo" />
            </a>
            <a href="https://vuejs.org/" target="_blank">
                <img src="@/assets/vue.svg" class="logo vue" alt="Vue logo" />
            </a>
        </div>

        <HelloWorld msg="Vite3 + Vue2 (Vue Router y Vuex) + Vuetify2" />
    </div>
</template>

<style scoped>
.main {
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
}

.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
}

.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
