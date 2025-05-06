<template>
    <div class="main-container">
        <Navigation />
        <router-view></router-view>
    </div>
</template>

<script setup>
    import Navigation from "./components/Navigation.vue";
</script>

<style>
    @import url("~/assets/css/style.css");
</style>
