<template>
    <div class="main-container">
        <h1>Quel est votre véhicule ?</h1>
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
                    ><img src="/public/img/camion.jpg" alt="" />
                    Camion</NuxtLink
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
