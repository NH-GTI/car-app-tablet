<template>
    <div class="main-container">
        <h1>Choisissez votre type de véhicule</h1>
        <div class="main-content">
            <div class="category-container">
                <NuxtLink :to="`/category/1`"
                    ><img src="/public/img/voiture.jpg" alt="" />
                    Voiture</NuxtLink
                >
                <NuxtLink :to="`/category/1`"
                    ><img src="/public/img/moto.jpg" alt="" /> Moto</NuxtLink
                >
                <NuxtLink :to="`/category/1`"
                    ><img src="/public/img/camping-car.jpg" alt="" />
                    Camping-car</NuxtLink
                >
            </div>
        </div>
    </div>
</template>

<script setup></script>

<style scoped>
    .category-container {
        display: flex;

        justify-content: center;
        height: 100vh;
    }
</style>
