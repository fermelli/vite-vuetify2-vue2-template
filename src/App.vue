<script>
export default {
    name: 'App',
}
</script>

<template>
    <div id="app">
        <p>
            <router-link :to="{ name: 'Home' }">Home</router-link> |
            <router-link :to="{ name: 'About' }">About</router-link>
        </p>

        <router-view></router-view>
    </div>
</template>
